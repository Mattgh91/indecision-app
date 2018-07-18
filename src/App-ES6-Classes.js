import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
         // return 'Hi, my name is ' +this.name+'!';
         return `Hi, my name is ${this.name}!`
    }
    getDescription() {
        return `Hi, I am ${this.name}, and I am ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor) {
            description  += ` My major is ${this.major}`;
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, homeLocation) {
        super(name, homeLocation);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` My home location is ${this.homeLocation}`
        }

        return greeting;
    }
}

const test = new Traveller('Hatt Maynes', 'Sheffield');
// console.log(test.getDescription());
console.log(test.getGreeting());

const me = new Traveller('Matt Haynes');
// console.log(me.getDescription());
console.log(me.getGreeting());



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ES6 CLASSES 1 &amp; 2</h1>
        </header>
        <div className="App-intro">
            <Person />
        </div>
      </div>
    );
  }
}

export default App;
