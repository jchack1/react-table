import {useState} from "react";

/**
 * Custom hook for sorting data by category. Sorts numerically or alphabetically.
 * @param {Object[]} data - array of data objects
 * @returns {Object} - object containing sorted data, sort category, sort direction, and a handler function
 */
const useSort = (data) => {
  const [sortCategory, setSortCategory] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleSort = (category) => {
    if (sortCategory === category && sortDirection === "ascending") {
      setSortDirection("descending");
    } else {
      setSortCategory(category);
      setSortDirection("ascending");
    }
  };

  let sortedData = [...data];

  //only sort if handleSort has been triggered
  if (sortDirection !== null) {
    sortedData = [...data].sort((a, b) => {
      if (a[sortCategory] > b[sortCategory]) {
        return sortDirection === "ascending" ? 1 : -1;
      }

      if (a[sortCategory] < b[sortCategory]) {
        return sortDirection === "ascending" ? -1 : 1;
      }

      return 0;
    });
  }

  return {
    sortedData,
    sortCategory,
    sortDirection,
    handleSort,
  };
};

export default useSort;
