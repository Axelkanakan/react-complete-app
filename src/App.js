import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Axel', age: 29},
      {name: 'Stark', age: 30},
      {name: 'Marvel', age: 32}
    ]
  }
  


  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 35},
        {name: 'Stark', age: 30},
        {name: 'Marvel', age: 28}
      ] 
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 35},
        {name: event.target.value, age: 30},
        {name: 'Marvel', age: 28}
      ] 
    })
  }

  
  render() {
    const style = {
      backgroundColor: '#1874c3',
      font:'inherit',
      borderRadius: '50px',
      padding: '15px',
      fontSize: '14px',
      fontWeight:'500',
      color:'white',
      cursor:'pointer'
    };
    return (
      <div className="App">
        <h1>Hello Axel</h1>
        <p>This is my second React project</p>
        <button style={style} onClick= {() => this.switchNameHandler('Trunks')} >Switch Name</button>
        <Person 
          name={this.state.persons[0].name}       
          age={this.state.persons[0].age} />
        <Person 
          name ={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Axeby')}
          changed={this.nameChangeHandler}>My Hobbie: Robotics </Person>
        <Person 
          name ={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          />
      </div>
    );

  }
}

export default App;
