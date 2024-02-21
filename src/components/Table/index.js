import React, {useEffect, useState} from "react";
import Filter from "./TableComponents/Filter";
import TableHeader from "./TableComponents/TableHeader";
import TableRow from "./TableComponents/TableRow";
import useSort from "../../hooks/useSort";
import useFilter from "../../hooks/useFilter";

/**
 * Table component with sort and filter functionality
 * @param {Object[]} data - an array of objects with any type of data
 * @returns {JSX.Element}
 */
const Table = ({data}) => {
  const {sortedData, sortCategory, sortDirection, handleSort} = useSort(data);
  const {filteredData, filterCategory, setFilterCategory, handleFilter} =
    useFilter(sortedData);
  const [categories, setCategories] = useState([]);

  //get the table's categories - title and type of data
  useEffect(() => {
    let categories = [];

    data.forEach((item) => {
      for (let [key, value] of Object.entries(item)) {
        if (!categories.some((item) => item.title === key)) {
          categories.push({
            title: key,
            dataType: typeof value,
          });
        }
      }
    });

    setCategories(categories);
  }, [data]);

  //handling if data is an empty array
  if (data.length === 0) {
    return (
      <div className="container table w-full mx-auto flex justify-center items-center border-2 border-slate-100 rounded-lg w-full md:w-4/5 max-w-5xl h-96">
        No data to display
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Filter
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        handleFilter={handleFilter}
        isMatch={filteredData.length > 0 ? true : false}
      />

      <div className="container table w-full mx-auto flex justify-center items-center border-2 border-slate-100 rounded-lg md:w-4/5 max-w-5xl">
        <TableHeader
          categories={categories}
          sortCategory={sortCategory}
          sortDirection={sortDirection}
          handleSort={handleSort}
        />

        {filteredData.length > 0 ? (
          <div className="table-row-group">
            {filteredData.map((item, i) => {
              return <TableRow item={item} categories={categories} i={i} />;
            })}
          </div>
        ) : (
          // empty table body if there are no matches after filtering
          <div className="border-slate-100 rounded-lg h-96 md:w-4/5 max-w-5xl"></div>
        )}
      </div>
    </div>
  );
};

export default Table;
