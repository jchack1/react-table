### Running the project

To run the project, run `npm install` then `npm start`. To try out the table with different data, modify the `sample_table_data.json` file.

### Notes about the project

TailwindCSS was used for styling.

Custom hooks were placed in the `hooks` folder and components in the `components` folder. All table components were placed in a `Table` subfolder, emulating how I'd organize files in a larger project with many different types of components.

The table is designed to be dynamic and create a table based on data with any number of categories. Each category can be sorted regardless of whether the data are strings or numbers. It's possible to select and filter any category, as long as the data is text.
