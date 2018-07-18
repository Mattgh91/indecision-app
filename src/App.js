import React, { Component } from 'react';
import './App.css';
import './styles/styles.css';
import 'normalize.css/normalize.css';
import Header from './components/Header.js';
import AddOption from './components/AddOption.js';
import Options from './components/Options.js';
import Action from './components/Action.js';
import OptionModal from './components/OptionModal.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.state = {
          options : [],
          selectedOption: undefined,
      };
  }
  componentDidMount() {
      try {
          const json = localStorage.getItem('options');
          const options = JSON.parse(json);
          console.log(json);

          if(options) {
              this.setState(() => ({ options }));
          }
      } catch (e) {
          // Do nothing
      }
  }
  componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
          const json = JSON.stringify(this.state.options);
          localStorage.setItem('options', json)
          console.log('saving data');
      }
  }
  componentWillUnmount() {
      console.log('component will unmount');
  }
  handlePick() {
      console.log('handlePick');
      const randomNum = Math.floor(Math.random() * this.state.options.length );
      const option = this.state.options[randomNum];
      // alert(option);
      this.setState(() => ({ selectedOption: option }));
  }
  closeModal() {
    this.setState({ selectedOption: undefined });
  }
  handleDeleteOptions() {
      console.log('handleDeleteOptions');
      // this.setState(() => {
      //     return {
      //       options: [],
      //     }
      // });
      this.setState(() => ({ options: [], })); // The above CAN be done on one line - need parenthasis around the object to explicitly say it is an object
  }
  handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
      }));
  }
  handleAddOption(option){
      if (!option) {
          return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
          return 'This option already exists';
      }
      // this.setState((prevState) => {
      //     return {
      //       options: prevState.options.concat([option]),
      //     };
      // });
      this.setState((prevState) => ({ options: prevState.options.concat([option]), }));
  }
  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div className="App">
        <Header title={title} subtitle={subtitle} />
        <div className="container">
            <div className="App-intro">
                <Action
                    hasOptions={this.state.options.length}
                    handlePick={this.handlePick}
                />
                <div className="widget">
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        closeModal={this.closeModal}
                    />
                </div>
            </div>
        </div>
      </div>
    );
  }
}


// class Action extends Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

// class Options extends Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <ul>
//                     {
//                         this.props.options.map((option) => <Option key={option} optionText={option} />)
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

// class Option extends Component {
//     render() {
//         return (
//             <li>
//                 {this.props.optionText}
//             </li>
//         );
//     }
// }

// const User = (props) => { // stateless functional component
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: </p>
//         </div>
//     )
// };

export default App;
