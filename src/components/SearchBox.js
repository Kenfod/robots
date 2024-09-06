import React  from 'react';
// import CardList from './CardList';
// import SearchBox from './SearchBox';
// import { robot } from './robot';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
        <input 
        className='pa3 ba b--green bg-lightest-blue'    
        type='search' 
        placeholder='search robopal'
        onChange={searchChange}
        /> 
    </div> 
  );
}

export default SearchBox;
