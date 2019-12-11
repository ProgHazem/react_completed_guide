import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Hazem', age: 24},
      {name: 'Essam', age: 2},
      {name: 'Assel', age: 4}
    ],
    showPerson: false
  };
  btnClick = (newName, newAge) => {
    this.setState({
      persons: [
        {name: newName, age: newAge},
        {name: 'Ahmed', age: 31},
        {name: 'Assel', age: 4}
      ]
    });
  }
  nameChangedHandller = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 65},
        {name: 'Ahmed', age: 31},
        {name: 'Assel', age: 4}
      ]
    })
  }
  toggle = () => {
    const status = this.state.showPerson;
    this.setState({
        showPerson: !status
    })
  }
  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = <div>
        <button onClick={() => this.btnClick('Abdo', 65)}>Click</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person changed={this.nameChangedHandller} click={this.btnClick.bind(this, 'Hazem', 24)} name={this.state.persons[1].name} age={this.state.persons[1].age} >Error</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    }
    return (
      <div className="App">
        <h>Hello, I'm react app!</h>
        <button onClick={this.toggle}>Toggle</button>
        {persons}
      </div>
    )
  }
}

export default App;
