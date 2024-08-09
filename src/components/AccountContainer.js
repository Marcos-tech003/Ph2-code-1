import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import App from "./App";

function AccountContainer() {

  
  return (
    <div>
      {/* <Search onSearching={handleSearching}/> */}
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;