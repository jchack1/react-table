import "./App.css";
import Table from "./components/Table";
import data from "./sample_table_data.json";

export default function App() {
  return (
    <div className="container mx-auto flex items-center justify-center">
      {data === undefined ? (
        <div className="my-20">loading...</div>
      ) : (
        <Table data={data} />
      )}
    </div>
  );
}
