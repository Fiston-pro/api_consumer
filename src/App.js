import './App.css';
import Axios from "axios";
import { useState } from "react";

function App() {
  const [number, setnumber] = useState();

  const getData = async () => {
    await Axios.get('https://random-words-api.vercel.app/word').then(res => {
      console.log(res.data)
    })
  };

  // We avoid reloading the whole screen by using this function
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1 className='header'>Please enter a number btn  5 and 20</h1>
      <form onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="A number"
          autoComplete="Off"
          value={number}
          onChange={(e) => setnumber(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>
    </div>
  );
}

export default App;
