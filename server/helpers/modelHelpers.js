export const dummyData = {
    books: { 
        1: {
            "title": "so long a letter",
            "author": "mariam ba",
            "isbn": 65486565,
            "quantity": 56,
            "publishedYear": 2009,
            "upvotes": 6,
            "downvotes": 5,
            "deleted": "false",
            "id": 1
        },
        2: {
            "title": "fine boys",
            "author": "ehabsuen",
            "isbn": 65487565,
            "quantity": 6,
            "publishedYear": 2015,
            "upvotes": 23,
            "downvotes": 2,
            "deleted": "false",
            "id": 2
        },
        3: {
            "title": "There Was A Country",
            "author": "Chinua Achebe",
            "isbn": 65486565,
            "quantity": 56,
            "publishedYear": 2008,
            "upvotes": 19,
            "downvotes": 5,
            "deleted": "false",
            "id": 3
        },
        4: {
            "title": "Lean Start Up",
            "author": "Eric Reis",
            "isbn": 65487565,
            "quantity": 6,
            "publishedYear": 2015,
            "upvotes": 230,
            "downvotes": 22,
            "deleted": "false",
            "id": 4
        },
        5: {
            "title": "Alapata Apata",
            "author": "Wole Soyinka",
            "isbn": 65486565,
            "quantity": 56,
            "publishedYear": 2009,
            "upvotes": 0,
            "downvotes": 5,
            "deleted": "false",
            "id": 5
        }
    },
    reviews: {
        1: {
            "bookId": 1,
            "userId": 2,
            "text": "mesmerising",
            "id": 1
        },
        2: {
            "bookId": 2,
            "userId": 2,
            "text": "suspense",
            "id": 2
        },
        3: {
            "bookId": 1,
            "userId": 1,
            "text": "intrigue",
            "id": 3
        },

    },
    users: {
        1: {
            "username": "labakelagos",
            "email": "lagoslabake@gmail.com",
            "password": "mesmerising",
            "id": 1
        },
        2: {
            "username": "simbad",
            "email": "badsim@rocketmail.com",
            "password": "pandenomium",
            "id": 2
        },
        3: {
            "username": "keinzy",
            "email": "ayinla1",
            "password": "love4eva",
            "id": 3
        }
    },
    favorites: {
        1: {
            "bookId": 1,
            "userId": 1,
            "id": 1
        },
        2: {
            "bookId": 1,
            "userId": 2,
            "id": 1
        },
        3: {
            "bookId": 2,
            "userId": 2,
            "id": 1
        }
    }
};
  
export const getObjectId = (objectType) => {
    const dummyDataTypes = ['books', 'reviews', 'favorites'];
    if (dummyDataTypes.indexOf(objectType) !== -1 ){
      let id =  Object.keys(dummyData[objectType]).length + 1;
      return id;
    } else throw new Error (`dummyData type: ${objectType} not yet created`);
};

