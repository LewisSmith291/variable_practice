import './App.css';
import {useState, useEffect} from "react";

function App() {
  return (
    <div className="App">
      <VariableDisplay/>
    </div>
  );
}

var varType = "string";

function VariableButton(){
  return (<button onClick={setRandomVariable} id="button">Randomise Variable</button>)
}

function VariableDisplay(){
  const str = "abc";
  const num = 123;
  const bool = true;
  const arr = ["a","b","c"];
  const obj = {propOne:"hello", propTwo:1231231, propThree:"this is an object"};
  
  var [output, setOutput] = useState("string");

  useEffect(function() {
    setInterval(function(){
      switch (varType){
      case "string":
        setOutput(str);
        break;
      case "number":
        setOutput(num);
        break;
      case "boolean":
        setOutput(bool.toString());
        break;
      case "array":
        setOutput(OutputArray(arr));
        break;
      case "object":
        setOutput(OutputObject(obj));
        break;
      default:
        setOutput(str);
        break;
  }
    },1);
  });

  return (
    <div>
      <VariableButton />
      <br/>
      {output}
    </div>
  );
}


function setRandomVariable(){
  const typeList = ["string", "number", "boolean", "array", "object"];
  const type = typeList[Math.floor(Math.random() * typeList.length)];

  varType = type;
}

function OutputObject(object){
  
  return (<div>
    <ul>
      <li key = "propOne">{object.propOne}</li>
      <li key = "propTwo">{object.propTwo}</li>
      <li key = "propThree">{object.propThree}</li>
    </ul>
  </div>)
}

function OutputArray(array){
  const listItems = array.map((item) => <li key={item}>{item}</li>);
  return (<ul className="list">{listItems}</ul>);
}

export default App;