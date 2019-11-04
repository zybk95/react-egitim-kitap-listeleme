//////////////////////////////AKSİYONLAR//////////////////////////////

//kitap ekleme
//süslü paranteze alma nedenimiz...
export const addBook = ({title, isbn, pageCount,  shortDescription}) => {
  // console.log("------------------")
  // console.log("Action/AddBook calisti!!!")
  // console.log({title, isbn, pageCount, shortDescription});
  // console.log("------------------")

  return {
    type: 'ADD_BOOK',
    payload: {
      title:title, 
      isbn:isbn, 
      pageCount:pageCount, 
      shortDescription:shortDescription
    }
  }
}

//kitap silme
export const deleteBook = (book) => {
  return {
    type: 'DELETE_BOOK',
    payload: book
  }
}

//kitap secme
export const selectBook = (book) => {
  return {
    type: 'SELECT_BOOK',
    payload: book
  }
}


//kitap secmeme
export const deselectBook = (book) => {
  return {
    type: 'DESELECT_BOOK',
    payload: book
  }
}