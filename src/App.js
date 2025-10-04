import './App.css';
import {useState} from "react";

function App() {
  return (
    <div className="App">
      <VariableDisplay/>
      <br/>
      <VariableButton/>
    </div>
  );
}

let varType = "array";

let yessir = {varType: "array"};

function VariableButton(){
  return (<button onClick={setRandomVariable} id="button">Randomise Variable</button>)
}

function VariableDisplay(){
  const str = "abc";
  const num = 0;
  const bool = true;
  const arr = ["a","b","c"];
  const obj = {propOne:"a", propTwo:2, propThree:false};
  var objectToReturn;
  
  switch (varType){
    case "string":
      objectToReturn = str;
      break;
    case "number":
      objectToReturn = num;
      break;
    case "boolean":
      objectToReturn = bool;
      break;
    case "array":
      objectToReturn = arr;
      return (<OutputArray list = {arr}/>);
    case "object":
      objectToReturn = obj;
      break;
    default:
      objectToReturn = str;
      break;
  }
  console.log(objectToReturn);
  return (objectToReturn);
}


function setRandomVariable(){
  const typeList = ["string", "number", "boolean", "array", "object"];
  const type = typeList[Math.floor(Math.random() * typeList.length)];
  varType = type;
  console.log(varType);
}

function OutputArray(prop){
  const listItems = prop.list.map((item) => <li key={item}>{item}</li>);
  return (<ul className="list">{listItems}</ul>);
}

export default App;