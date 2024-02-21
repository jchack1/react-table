import SortButton from "./SortButton";

/**
 * displays one row with a cell for each table category, as well as a sort button for each cell
 * @param {Object[]} categories
 * @param {string} sortCategory
 * @param {string} sortDirection
 * @param {Function} handleSort - function that handles sorting when SortButton is clicked
 * @returns {JSX.Element}
 */
const TableHeader = ({categories, sortCategory, sortDirection, handleSort}) => {
  return (
    <div className="table-header-group bg-slate-100 rounded-lg">
      <div className="table-row">
        {categories.map((category) => {
          return (
            <div
              className="table-cell text-left p-4 font-semibold text-slate-800"
              style={{flexDirection: "row"}}
              key={`header-${category.title}`}
            >
              <div className="flex items-center">
                <span className="mr-2">{category.title} </span>
                <SortButton
                  selected={sortCategory === category.title ? true : false}
                  sortDirection={sortDirection}
                  onClick={() => handleSort(category.title)}
                  title={category.title}
                  sortCategory={sortCategory}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableHeader;
