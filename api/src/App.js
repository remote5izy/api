import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [catFact, setCatFact] = useState("")
  // Axios.get("https://catfact.ninja/fact").then((res) => {
  //   console.log(res.data);
  //   setCatFact(res.data.fact);
  // });
  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
      setCatFact(res.data.fact);
    });
  }, []);

  return (
    <div className="App">
      {catFact}
    </div>
  );
}



export default App;
