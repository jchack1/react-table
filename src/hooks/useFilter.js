import {useState} from "react";

/**
 * Custom hook for filtering data based on input and category.
 * @param {Object[]} data - array of data objects
 * @returns {Object} - object containing filtered data, filter input, filter category, setter for filter category, and a handler function
 */
const useFilter = (data) => {
  const [filterInput, setFilterInput] = useState(null);
  const [filterCategory, setFilterCategory] = useState(null);

  //when there is new input, update the state which will run the filtering code
  const handleFilter = (input) => {
    setFilterInput(input);
  };

  let filteredData = [...data];

  //don't need to do anything to the data if no input or category selected
  if (filterInput !== null && filterCategory !== null) {
    filteredData = filteredData.filter((item) =>
      item[filterCategory].toLowerCase().includes(filterInput)
    );
  }

  return {
    filteredData,
    filterCategory,
    setFilterCategory, //make this available to category dropdown in table component
    handleFilter,
  };
};

export default useFilter;
