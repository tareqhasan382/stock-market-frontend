import AllData from "./components/AllData";
import Container from "./components/Container";
import DataChart from "./components/DataChart";
import Header1 from "./components/Header1";
import HeaderData from "./components/HeaderData";

function App() {
  return (
    <div className=" bg-gray-200  dark:bg-gray-900 dark:text-white duration-200 relative overflow-hidden ">
      <Container>
        <div className=" flex lg:flex-row flex-col gap-5 py-10 ">
          <Header1 />
          <HeaderData />
          <DataChart />
        </div>
        <div>
          <AllData />
        </div>
      </Container>
    </div>
  );
}

export default App;
