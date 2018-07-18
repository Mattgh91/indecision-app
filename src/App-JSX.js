
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

const app = {
    title: 'Indecision App',
    subtitle: 'My App',
    options: [],
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    console.log(option);
    if(option) {
        app.options.push(option);
    }

    e.target.elements.option.value = '';

    ReactDOM.render(<App />, document.getElementById('root'));
};

const removeAll = () => {
    app.options = [];
    ReactDOM.render(<App />, document.getElementById('root'));
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length );
    const option = app.options[randomNum];
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Indecision</h1>
        </header>
        <div className="App-intro">
            <p>{app.title}</p>
            <p>{app.subittle}</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length > 0 ? false : true} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ul>
                {
                    app.options.map((option) => {
                        return <li key={option}>Option: {option}</li>;
                    })
                }
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
      </div>
    );
  }
}

export default App;
