/**
 * Filter component with a dropdown to select category to filter and text input
 * @param {Object[]} props.categorys - array of the table's categorys and their dataType
 * @param {string} props.filterCategory
 * @param {Function} props.setFilterCategory - setter function to select category to filter
 * @param {Function} props.handleFilter
 * @param {boolean} props.isMatch - indicates if there is any data that matches the filterInput
 * @returns {JSX.Element}
 */
const Filter = ({
  categories,
  filterCategory,
  setFilterCategory,
  handleFilter,
  isMatch,
}) => {
  return (
    <div className="flex mx-auto my-5">
      {/* dropdown with categories that can be filtered (those with a string datatype) */}
      <select
        value={filterCategory}
        onChange={(e) => {
          setFilterCategory(e.target.value);
        }}
        className="border bg-white border-slate-200 rounded-md py-1 px-2 text-sm text-slate-700 items-center"
      >
        {/* default option */}
        <option value={""} className="text-sm">
          choose category...
        </option>

        {/* the rest of the options */}
        {categories
          .filter((category) => category.dataType === "string")
          .map((category, i) => {
            return (
              <option
                value={category.title}
                className="text-sm text-slate-700"
                key={`option-${i}-${category.title}`}
              >
                {category.title}
              </option>
            );
          })}
      </select>

      {/* text input */}
      <input
        type="text"
        onChange={(e) => handleFilter(e.target.value)}
        className="border border-slate-200 rounded-md ml-2 py-1 px-2 text-sm"
        placeholder="filter..."
      />

      {/* display message if input provides no matches */}
      {isMatch ? null : (
        <p className="text-xs text-rose-400 ml-2 mt-2">No matches</p>
      )}
    </div>
  );
};

export default Filter;
