import React from "react";
import tw from "twin.macro";

const PrimaryAction = tw.input`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

const Search = ( { handleSearch } ) => {
    return (
      <div className='search'>
          <PrimaryAction
          onChange={(event)=>
              handleSearch(event.target.value)
          }
          placeholder='جست و جو'/>
      </div>
    )
  }
  
  export default Search