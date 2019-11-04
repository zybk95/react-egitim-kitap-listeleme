import { combineReducers } from 'redux'
import kitaplarJSN from './kitap.json'

//gelen aksiyona göre işlemler yapar...
const kitapListesiReducers = (oldBookList =  kitaplarJSN, action) => {
  // console.log("--------REDUCERS----------")  
  // console.log(action.type ==="ADD_BOOK")
  // console.log("------------------")

  if (action.type === "ADD_BOOK") {
    return [...oldBookList, action.payload]; //ES6 sağolsun...
    // return oldBookList.push( action.payload ); 
  }
  else if (action.type === "DELETE_BOOK") {
    return oldBookList.filter(old => old.isbn !== action.payload.isbn)
  }
  return oldBookList;
}

const kitapSecimReducers = (oldSelectedBook = {}, action) => {
  if (action.type === "SELECT_BOOK") {
    return action.payload
  }
  else if (action.type === "DESELECT_BOOK") {
    return {}
  }
  return oldSelectedBook
}


export default combineReducers({
  kitapListesi: kitapListesiReducers,
  kitapSecim: kitapSecimReducers
});