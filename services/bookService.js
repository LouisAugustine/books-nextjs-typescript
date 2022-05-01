import http from "./httpService";
import url from "../config.json";

// const apiEndpoint = url.apiUrl + "/books";
const apiEndpoint = url.awsApiUrl + "/books";


function bookUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export async function getBooks() {
  return http.get(apiEndpoint);
}
// export async function getBooks() {
//    http.get(apiEndpoint)
//         .then((response) => {
//           return response.data;
//         })
//         .catch((error) => {
//           console.log(error);
//         });
// }

export function getBook(bookId) {
  return http.get(bookUrl(bookId));
}

export function saveBook(book) {
  if (book.id) {
    const body = {
      ...book
    };
    delete body.id;
    return http.put(bookUrl(book.id), body);
  }

  return http.post(apiEndpoint, book);
}

export function deleteBook(bookId) {
  return http.delete(bookUrl(bookId));
}