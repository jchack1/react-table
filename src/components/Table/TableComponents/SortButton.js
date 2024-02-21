//gets the colour for the specified arrow, depending on current state
const getColour = (selected, sortDirection, arrowDirection) => {
  if (!selected || sortDirection !== arrowDirection) {
    return "#94a3b8";
  }
  if (sortDirection === arrowDirection) {
    return "#475569";
  }
};

/**
 * Button with up and down arrows that change colour depending on whether button is selected, and if sort direction is ascending/descending.
 * @param {boolean} props.selected - indicates if button is selected (if currently sorting this category).
 * @param {string} props.sortDirection
 * @param {Function} props.onClick
 * @returns {JSX.Element}
 */
const SortButton = ({selected, sortDirection, onClick}) => {
  return (
    <button className="w-7 h-3.5 flex" onClick={() => onClick()}>
      {/* up arrow */}
      <svg
        dataSlot="icon"
        aria-hidden="true"
        fill="none"
        strokeWidth={1.5}
        stroke={getColour(selected, sortDirection, "ascending")}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* down arrow */}
      <svg
        dataSlot="icon"
        aria-hidden="true"
        fill="none"
        strokeWidth={1.5}
        stroke={getColour(selected, sortDirection, "descending")}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default SortButton;
