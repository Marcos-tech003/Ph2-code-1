import React,{useState} from "react";

function Search({onSearching}) {

  const [search, setSearch] = useState("")

  function handleChange(e){
    setSearch(e.target.value)
    onSearching(search)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="Search your Recent Transactions"
        // onChange={() => console.log("Searching...")}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;