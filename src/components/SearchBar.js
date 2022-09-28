import React from 'react'

const SearchBar = ({onSearch, searchValue}) => {
  return (
        <div className="input-group p-1">
  <input type="text" className="form-control" placeholder="Search with Name" aria-label="Search with Name" aria-describedby="button-addon2" onChange={(e)=>searchValue(e.target.value)}/>
  <div className="">
    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={onSearch}>Search</button>
  </div>
</div>
  )
}

export default SearchBar