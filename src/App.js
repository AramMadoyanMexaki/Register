import './App.css';
import { useState } from "react";
import Form from './components/Form';
import Success from './components/Success';

function App() {
  const [showSuccess, setshowSuccess] = useState(false);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
