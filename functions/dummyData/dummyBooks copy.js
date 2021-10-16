const dummyBooks = [
  {
    "name": "The Hunger Games",
    "price": 2140,
    "isbn": "ISBN13: 9780439023481",
    "pages": 374,
    "category": {
      "name": "Action",
      "id": "ACTION",
      "subCategories": [],
      "priority": 1,
    },
    "rating": 4,
    "authors": ["Suzanne Collins"],
    "availableCount": 10,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/41V56ye3PrL._SX328_BO1,204,203,200_.jpg",
  },

  {
    "name": "Mockingjay",
    "price": 3610,
    "isbn": "ISBN13: 9780439023511",
    "pages": 398 ,
    "category": {
      "name": "Action",
      "id": "ACTION",
      "subCategories": [],
      "priority": 2,
    },
    "rating": 5,
    "authors": ["Suzanne Collins"],
    "availableCount": 8,
    "imageUrl":
      "https://images-eu.ssl-images-amazon.com/images/I/413KDccNayL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
  },
  {
    "name": "Catching Fire",
    "price": 2640,
    "isbn": "ISBN13: 9780439023498",
    "pages": 391 ,
    "category": {
      "name": "Action",
      "id": "ACTION",
      "subCategories": [],
      "priority": 3,
    },
    "rating": 4.5,
    "authors": ["Suzanne Collins"],
    "availableCount": 9,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/41PtN1LzI+L._SX346_BO1,204,203,200_.jpg",
  },
  {
    "name": "Cut & Run",
    "price": 2610,
    "isbn": "ISBN13: 9781935192237",
    "pages": 376 ,
    "category": {
      "name": "Action",
      "id": "ACTION",
      "subCategories": [],
      "priority": 4,
    },
    "rating": 5,
    "authors": ["Madeleine Urban", " Abigail Roux "],
    "availableCount": 20,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/511LlHDhRnL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    "name": "Network Effect",
    "price": 2150,
    "isbn": "ISBN13: 9781250229861",
    "pages": 350 ,
    "category": {
      "name": "Action",
      "id": "ACTION",
      "subCategories": [],
      "priority": 1,
    },
    "rating": 5,
    "authors": ["Martha Wells"],
    "availableCount": 30,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/41SdHncuqcL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    "name": "Divergent",
    "price": 1850,
    "isbn": "ISBN147852369",
    "pages": 487  ,
    "category": {
      "name": "Action",
      "id": "ACTION",
      "subCategories": [],
      "priority": 1,
    },
    "rating": 5,
    "authors": ["Veronica Roth"],
    "availableCount": 40,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/51--jK6gScL._SX331_BO1,204,203,200_.jpg",
  },
  {
    "name": "Killing Floor",
    "price": 1750,
    "isbn": "ISBN13: 9780515141429",
    "pages": 250,
    "category": {
      "name": "Action",
      "id": "ACTION",
      "subCategories": [],
      "priority": 1,
    },
    "rating": 5,
    "authors": ["Lee Child"],
    "availableCount": 25,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/41oj+gbcuSL._SX286_BO1,204,203,200_.jpg",
  },

  {
    "name": "The Iron Duke ",
    "price": 2150,
    "isbn": "ISBN147852369",
    "pages": 384,
    "category": {
      "name": "Action",
      "id": "ACTION",
      "subCategories": [],
      "priority": 2,
    },
    "rating": 5,
    "authors": ["Meljean Brook"],
    "availableCount": 35,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/51IpOnAwCXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  //8 action books
  {
    "name": "The Heart Principle",
    "price": 2350 ,
    "isbn": "ISBN13: 9780451490841",
    "pages": 320  ,
    "category": {
      "name": "Fiction",
      "id": "FICTION",
      "subCategories": [],
      "priority": 3,
    },
    "rating": 5,
    "authors": ["Helen Hoang"],
    "availableCount": 17,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/51avLIcBvVL._SX331_BO1,204,203,200_.jpg",
  },
  {
    "name": "Billy Summers",
    "price": 2470,
    "isbn": "ISBN13: 978198217361",
    "pages": 515 ,
    "category": {
      "name": "Fiction",
      "id": "FICTION",
      "subCategories": [],
      "priority": 4,
    },
    "rating": 5,
    "authors": ["Stephen King"],
    "availableCount": 14,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/51f2iIrG6TL._SX325_BO1,204,203,200_.jpg",
  },
  {
    "name": "The People We Keep",
    "price": 1950,
    "isbn": "ISBN13: 9781982171292",
    "pages": 368 ,
    "category": {
      "name": "Fiction",
      "id": "FICTION",
      "subCategories": [],
      "priority": 6,
    },
    "rating": 5,
    "authors": ["Allison Larkin"],
    "availableCount": 12,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/51chZsrtfrL._SX329_BO1,204,203,200_.jpg",
  },
  {
    "name": "A Slow Fire Burning",
    "price": 2450,
    "isbn": "ISBN13: 9780735211230",
    "pages": 320 ,
    "category": {
      "name": "Fiction",
      "id": "FICTION",
      "subCategories": [],
      "priority": 3,
    },
    "rating": 5,
    "authors": ["Paula Hawkins"],
    "availableCount": 16,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/51JJtD1pckL._SX329_BO1,204,203,200_.jpg",
  },
  {
    "name": "The Dead and the Dark",
    "price": 2780,
    "isbn": "ISBN13: 9781250762016",
    "pages": 352 ,
    "category": {
      "name": "Fiction",
      "id": "FICTION",
      "subCategories": [],
      "priority": 4,
    },
    "rating": 5,
    "authors": ["Courtney Gould"],
    "availableCount": 12,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/51UK1oBLVgS._SX327_BO1,204,203,200_.jpg",
  },
  {
    "name": "The Turnout",
    "price": 2680,
    "isbn": "ISBN13: 9780593084908",
    "pages": 352  ,
    "category": {
      "name": "Fiction",
      "id": "FICTION",
      "subCategories": [],
      "priority": 5,
    },
    "rating": 5,
    "authors": ["Megan Abbott"],
    "availableCount": 10,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/418l3i6Q3ML._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    "name": "All's Well",
    "price": 1950,
    "isbn": "ISBN13: 9781982169664",
    "pages": 352   ,
    "category": {
      "name": "Fiction",
      "id": "FICTION",
      "subCategories": [],
      "priority": 4,
    },
    "rating": 5,
    "authors": ["Mona Awad"],
    "availableCount": 8,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/511GAcWAoxS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    "name": "We Are the Brennans",
    "price": 1670,
    "isbn": "ISBN13: 9781250796226",
    "pages": 288    ,
    "category": {
      "name": "Fiction",
      "id": "FICTION",
      "subCategories": [],
      "priority": 3,
    },
    "rating": 5,
    "authors": ["Tracey Lange"],
    "availableCount": 8,
    "imageUrl":
      "https://images-na.ssl-images-amazon.com/images/I/51b4GeyoXzL._SX327_BO1,204,203,200_.jpg",
  },
  //8 fiction books
];

module.exports = dummyBooks;
