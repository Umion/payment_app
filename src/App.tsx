import TheNavbar from "./components/application/TheNavbar";
import DataTable from "./components/DataTable";
import { navigation } from "./utils/navigation";

function App() {
  return (
    <>
      <div className="app">
        <TheNavbar navigation={navigation} />
        <div className="container">
          <DataTable />
        </div>
      </div>
    </>
  );
}

export default App;
