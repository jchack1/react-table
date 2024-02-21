/**
 * displays one table row for an item
 * @param {Object} item
 * @param {Object[]} categories
 * @param {number} i - for determining alternating rows can list key
 * @returns {JSX.Element}
 */
const TableRow = ({item, categories, i}) => {
  return (
    <div
      //change background colour for alternating rows
      className={
        (i + 1) % 2 === 0
          ? "table-row shadow-sm bg-slate-50"
          : "table-row shadow-sm"
      }
      key={`row-${i}`}
    >
      {/* map each cell in the row */}
      {categories.map((category) => {
        return (
          <div
            className="table-cell p-4 text-sm text-slate-700"
            key={`row-${i}-${category.title}-${item[category.title]}`}
          >
            {item[category.title]}
          </div>
        );
      })}
    </div>
  );
};

export default TableRow;
