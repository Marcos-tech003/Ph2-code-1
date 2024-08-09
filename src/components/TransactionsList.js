import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({ transactions }) => {
  // Ensure transactions is defined and is an array
  if (!transactions || !Array.isArray(transactions)) {
    return null;
  }  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>

          </tr>
        ))}yyy
      </tbody>
    </table>
  );
}

export default TransactionsList;