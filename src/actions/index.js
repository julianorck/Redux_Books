export function  selectBook(book){
    return {
      //select book is an actionCreator, it needs to return an action, an object with a type property
        type: "BOOK_SELECTED",
        payload: book
    };
}