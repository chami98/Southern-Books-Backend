const dummyCategories = require("./dummyData/dummyCategories");
const dummyBooks = require("./dummyData/dummyBooks");

const functions = require("firebase-functions");
const admin = require("firebase-admin");

const express = require("express");
const cors = require("cors");
const nameToKeywords = require("./utils/nameToKeywords");
const arrayToSpacedSeparatedString = require("./utils/arrayToSpacedSeparatedString");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

// iniitalize
admin.initializeApp(functions.config().firebase);
var db = admin.firestore();

app.use(cors({ origin: true }));

// app.get("/categories", (req, res) => {
//   res.send(
//     dummyCategories.sort((a, b) => {
//       return b.priority - a.priority;
//     })
//   );
// });

app.get("/categories", (req, res) => {
  // create a reference to category collection
  const categoriesRef = db.collection("categories");
  return categoriesRef.get().then((docs) => {
    const categories = [];

    docs.forEach((doc) => {
      var category = {
        id: doc.id,
        ...doc.data(),
      };

      categories.push(category);
    });

    res.send(categories);
  });
});

app.post("/categories/add", (req, res) => {
  //Prepare book object
  const category = {
    name: req.body.name,
    id: req.body.id,
    subCategories: req.body.subCategories,
    priority: req.body.priority,
  };

  // Add prepared category object to the database
  db.collection("categories")
    .doc(req.body.id)
    .set(category)
    .then((categorySnapshot) => {
      // saving category is successfull
      res.status(201).send({
        ...category,
        id: categorySnapshot.id,
      });
    })
    .catch((e) => {
      // saving category is unsuccessful
      res.status(500).send(e);
    });
});

// app.get("/books", (req, res) => {
//   res.send(dummyBooks);
// });

// add a book POST '/book/add'

app.post("/books/add", (req, res) => {
  //Prepare book object
  const book = {
    name: req.body.name,
    price: req.body.price,
    isbn: req.body.isbn,
    pages: req.body.pages,
    category: {
      name: req.body.category.name,
      id: req.body.category.id,
      subCategories: req.body.category.subCategories,
      priority: req.body.category.priority,
    },
    rating: req.body.rating,
    authors: req.body.authors,
    availableQuantity: req.body.availableQuantity,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    // "swanns way chamikara mendis "
    keywords: [
      ...nameToKeywords(
        req.body.name + " " + arrayToSpacedSeparatedString(req.body.authors)
      ),
    ],
  };

  //Add prepared book object to the database
  db.collection("books")
    .add(book)
    .then((bookSnapShot) => {
      // saving book is successfull
      res.status(201).send({
        ...book,
        id: bookSnapShot.id,
      });
    })
    .catch((e) => {
      // saving book is unsuccessful
      res.status(500).send();
    });
});

app.get("/books/:id", (req, res) => {
  const booksRef = db.collection("books").doc(req.params.id);
  booksRef.get().then((doc) => {
    if (!doc.exists) {
      res.status(404).send();
    } else {
      var book = {
        id: doc.id,
        ...doc.data(),
      };

      delete book["keywords"];
      res.send(book);
    }
  });
});

app.delete("/books/delete/:id", (req, res) => {
  db.collection("books")
    .doc(req.params.id)
    .delete()
    .then((doc) => {
      res.status(200).send("Succesfully deleted!");
    });
});

// app.delete("/books/delete/:id", (req, res) => {
//   let bookId = req.params.id;

//   db.collection("books")
//     .where("id", "==", bookId)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.docs[0].ref.delete();
//     });

//   res.status(200).send("Successfuly Deleted");
// });

app.post("/user-claim-admin", (req, res) => {
  // Set admin privilege on the user corresponding to uid.

  const uid = req.body.uid;

  admin
    .auth()
    .setCustomUserClaims(uid, { admin: true })
    .then(() => {
      // The new custom claims will propagate to the user's ID token the
      // next time a new one is issued.

      res.status(201).send({
        message: "successfully added",
      });
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.post("/user-claim-employee", (req, res) => {
  // Set admin privilege on the user corresponding to uid.

  const uid = req.body.uid;

  admin
    .auth()
    .setCustomUserClaims(uid, { employee: true })
    .then(() => {
      // The new custom claims will propagate to the user's ID token the
      // next time a new one is issued.

      res.status(201).send({
        message: "successfully added",
      });
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.get("/books", (req, res) => {
  const QUERY_LIMIT = 5;
  // Create a reference to the books collection
  const booksRef = db.collection("books");

  // getting categoryId by query parameter\
  // to pass "ACTION" as the categoryId
  // --> "/books?categoryId=ACTION"

  // to pass "FANTASY" as the categoryId
  // ---> "/books?categoryId=FANTASY"

  // getting Sherlock by query parameter
  // ----> '/books?searchString=Sherlock'

  let categoryId = req.query.categoryId;
  let searchString = req.query.searchString
    ? req.query.searchString.toLowerCase()
    : null;

  //If request has a parameter we have to add where clause if not we dont have to add where clause

  let queryRef;

  // // categoryId available searchString available
  if (categoryId && searchString) {
    queryRef = booksRef
      .where("category.id", "==", categoryId)
      .where("keywords", "array-contains", searchString)
      .limit(QUERY_LIMIT);
  }

  // // categoryId available searchString unavailable
  else if (categoryId) {
    queryRef = booksRef.where("category.id", "==", categoryId);
  }

  // // categoryId unavailable searchString available
  else if (searchString) {
    queryRef = booksRef
      .where("keywords", "array-contains", searchString)
      .limit(QUERY_LIMIT);
  }

  // // categoryId unavailable searchString unavailable
  else {
    queryRef = booksRef;
  }

  return queryRef.get().then((docs) => {
    const books = [];

    docs.forEach((doc) => {
      var book = {
        id: doc.id,
        ...doc.data(),
      };

      delete book["keywords"];
      books.push(book);
    });

    res.send(books);
  });
});

module.exports = app;
