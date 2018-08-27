import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {id:'asdf',name: 'Axel', age: 29},
      {id:'qwer',name: 'Stark', age: 30},
      {id:'zxcv',name: 'Marvel', age: 32}
    ],
    otherState:'some other value',
    showPersons: false
  }
  



  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
 
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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

    let persons = null

    if(this.state.showPersons){
      
      persons = (
        <div>
        {this.state.persons.map((person, index)=>{
          return <Person
                    click={()=> this.deletePersonHandler(index)} 
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event)=>this.nameChangeHandler(event, person.id)}  
                    />;
        })}
        </div>
      );
    }



    return (
      <div className="App">
        <h1>Hello Axel</h1>
        <p>This is my second React project</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

  }
}

export default App;
