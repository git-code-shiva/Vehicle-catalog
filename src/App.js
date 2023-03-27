import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
// import MainPage from './components/mainPage/tableHeader';
import TableHeader from './components/mainPage/tableHeader';
// import TableData from './components/tableData/tableData';

function App() {
  return (
    <div>
      {/* <Header/> */}
      <TableHeader/>
      {/* <TableData/> */}
    </div>
  );
}

export default App;
