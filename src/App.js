import './App.css';

function App() {
  return (
    <div className="App">
      <VariableDisplay/>
      <OutputArray 
        list = {[1,2,3]}
        hello = "hi"
        />
    </div>
  );
}

function VariableDisplay(){// eslint-disable-next-line
    const str = "abc";// eslint-disable-next-line
    const num = 0;// eslint-disable-next-line
    const bool = true;// eslint-disable-next-line
    const arr = ["a","b","c"];
    const obj = {propOne:"a", propTwo:2, propThree:false};
    return (obj.propOne);
}

function OutputArray(prop){
  const listItems = prop.list.map((item) => <li key={item}>{item}</li>);
  return (<ul className="list">{listItems}</ul>);
}

export default App;
