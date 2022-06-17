import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';

function App() {
  return (
    <>
    <Navbar title="TextUtils" about="About" home="Home" />
    <div className="container my-3">
    <TextForm heading="Enter the heading to analyse"/>
    </div>
   
    </>
  );
}

export default App;
