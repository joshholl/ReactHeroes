import React from 'react';
let title= 'Hello';
let hero= { name: 'Josh',id:1};;
class App extends React.Component{

  
  constructor(props) { super(props); }

  render() {
    return(
      <div>
        <h1>{title}</h1>
        <h2>{hero.name} details!</h2>
        <div><label>id: </label>{hero.id}</div>
        <div>
        <label>name: </label>
        <input name="hero.name" placeholder="name"/>
        </div>
       </div>
        );
  }
}


export default App;
