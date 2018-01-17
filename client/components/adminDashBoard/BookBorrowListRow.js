import React, { Component } from 'react';
import { connect } from 'react-redux';
import { acceptBookBorrowRequest } from '../../actions/borrowAction';

/**
 * 
 * 
 * @class BookBorrowListRow
 * @extends {Component}
 */
class BookBorrowListRow extends Component {
  
  /**
   * Creates an instance of BookBorrowListRow.
   * @param {any} props 
   * @memberof BookBorrowListRow
   */
  constructor(props) {
    super(props);

    this.handleAccept = this.handleAccept.bind(this);
  }

  /**
   * @returns {Object} Response object
   * 
   * @param {any} event 
   * @memberof BookBorrowListRow
   */
  handleAccept(event) {
    event.preventDefault();
    this.props.acceptBookBorrowRequest(this.props.borrowedBook.book.id, this.props.borrowedBook.user.id)
  }


  /**
   * 
   * 
   * @returns  {array} array of books pending return
   * @memberof BookBorrowListRow
   */
  render () {
    const { borrowedBook, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{borrowedBook.book.title}</td>
        <td>{borrowedBook.book.author}</td>
        <td>{borrowedBook.book.quantity}</td>
        <td>{borrowedBook.book.borrowCount}</td>
        <td>{borrowedBook.user.username}</td>
        <td>
          <a onClick= {this.handleAccept}>
          <i className="material-icons">
            call_made
          </i>
          </a>
        </td>
    </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    acceptBookBorrowRequest: (bookId, userId) => dispatch(acceptBookBorrowRequest(bookId, userId)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookBorrowListRow);