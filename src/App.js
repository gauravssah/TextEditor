import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Formbox from './components/Formbox';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextEditor" aboutEditor="About Us" />

      <div className="container my-3">
        <Formbox heading="Enter Your Text below " />
      </div>




    </>
  );
}

export default App;  
