import React from 'react';

const SearchBar = ( props ) => {

  let { sortBy, changeSortBy } = props


  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="None"
          checked={ sortBy === 'None' }
          onChange={ (e) => changeSortBy( e.target.value ) }
        />
        None
      </label>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={ sortBy === "Alphabetically" }
          onChange={ (e) => changeSortBy( e.target.value ) }
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={ sortBy === 'Price' }
          onChange={ (e) => changeSortBy( e.target.value ) }
        />
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={ (e) => props.changeFilterBy( e.target.value ) }>
          <option value="None">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>

    </div>
  );
}


export default SearchBar;