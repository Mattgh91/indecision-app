import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

// REACT STATE METHOD

class VisibilityToggle extends Component {
    constructor(props) {
        super(props);
        this.visToggle = this.visToggle.bind(this);

        this.state = {
            visiblity: false,
        };
    }
    visToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <p hidden={this.state.visibility}>Hello</p>
                <button onClick={this.visToggle}>{ this.state.visibility ? 'Show Details' : 'Hide Details'}</button>
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Visiblity Toggle React</h1>
          <VisibilityToggle />
      </div>
    );
  }
}

// ORIGINAL NON-REACT STATE METHOD

// let num = 0;
// const visToggle = () => {
//     num > 0 ? num-- : num++;
//     console.log(num);
//     ReactDOM.render(<App />, document.getElementById('root'));
// }
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Visibility Toggle</h1>
//         </header>
//         <div className="App-intro">
//             <button onClick={visToggle}>{num > 0 ? 'Show details' : 'Hide Details'}</button>
//             <p hidden={num > 0 ? false : true}>Hello</p>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
