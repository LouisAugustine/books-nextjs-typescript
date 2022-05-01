import React, { Component } from "react";
import Table from "./common/Table";
import Like from "./common/Like";
import auth from "../services/authService";
import Link from 'next/link';

class BooksTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      // content: book => <Link href={`/bookDetails/${book.id}`}>{book.title}</Link>
      content: book => <Link href='/books/[id]' as={`/books/${book.id}`}><a>{book.title}</a></Link>
    },
    { path: "type", label: "Genres" },
    { path: "author", label: "Author" },
    { path: "price", label: "price" },
    // {
    //   key: "like",
    //   content: book => (
    //     <Like liked={book.isWishList} onClick={() => this.props.onLike(book)} />
    //   )
    // }
  ];

  // deleteColumn = {
  //   key: "delete",
  //   content: book => (
  //     <button
  //       onClick={() => this.props.onDelete(book)}
  //       className="btn btn-danger btn-sm"
  //     >
  //       Delete
  //     </button>
  //   )
  // };

  // constructor() {
  //   super();
  //   const user = auth.getCurrentUser();
  //   if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  // }

  render() {
    const { books, onSort, sortColumn }:any = this.props;

    return (
      <Table
        columns={this.columns}
        data={books}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default BooksTable;
