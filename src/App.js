import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textform';

function App() {
  return (
    <>
    <Navbar title="TextUtils" about="About" home="Home" />
    <div className="container my-2">
    <TextForm heading="Enter the text to analyse"/>
    </div>
    <About className="container my-2"/>
    </>
  );
}

export default App;
