import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
            <Counter />
        </div>
      </div>
    );
  }
}

class Counter extends Component {
    constructor(props){
        super(props);
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            const count = parseInt(json, 10);
            console.log(json);

            if(count) {
                this.setState(() => ({ count }));
            }


        } catch (e) {
            // Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
          if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            console.log('json', json);
            localStorage.setItem('count', json)
            console.log('saving data');
          }
    }
    componentWillUnmount() {
        console.log('component will unmount');
    }
    plusOne(){
        // this.state.count++; -- bad way to do this
        // ReactDOM.render(<App />, document.getElementById('root'));
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        })
    }
    minusOne(){
        // this.state.count--; -- bad way to do this
        // ReactDOM.render(<App />, document.getElementById('root'));
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            };
        })
    }
    reset(){
        // this.state.count = 0; -- bad way to do this
        // ReactDOM.render(<App />, document.getElementById('root'));
        this.setState(() => {
            return {
                count: 0,
            };
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

export default App;
