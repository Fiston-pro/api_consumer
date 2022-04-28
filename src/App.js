import './App.css';
import WordTile from './component/tile';
import Axios from "axios";
import { useState } from "react";

function App() {
  const [number, setnumber] = useState(); // an input number
  const  words = [] // data from words api
  const [isValid, setisValid] = useState(true)
  const [data, setData] = useState(false)

  const getData = async (num) => {
    while (words.length != num ){
      await Axios.get('https://random-words-api.vercel.app/word').then(res => {  
        if (!words.hasOwnProperty(res.data[0])){
          words.push(res.data[0])
        }      
      })
    }
    console.log(words)
    console.log(words.length)
    setData(true)
  };

  
  // We avoid reloading the whole screen by using this function
  const onSubmit = (e) => {
    e.preventDefault();
    let num = parseInt(number)
    if (!isNaN(num) && num>=5 && num<=20) {
      setisValid(true)
      getData(num)
    } 
      else {setisValid(false)}
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
      {!isValid && (
            <div style={{ color: "red" }}>Invalid number !)</div>
          )}

      <div className="app__recipes">
        {words.length != 0 &&
          words.map( data => {
            return <h1>hello</h1>
            } )}
      </div>
    </div>
  );
}

export default App;
