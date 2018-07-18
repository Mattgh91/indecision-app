import React, { Component } from 'react';
import './App-circle.css';
import ReactDOM from 'react-dom';
import ross from './img/ross.png';

const ContestantDetails = [{first_name: 'Ross', image: ross}, {first_name: 'Dr. Richard', image: ross},
                            {first_name: 'Phoebe', image: ross}, {first_name: 'Janice', image: ross},
                            {first_name: 'Eric', image: ross}, {first_name: 'David', image: ross},
                            {first_name: 'Monica', image: ross}, {first_name: 'Chandler', image: ross},
                            {first_name: 'Joey', image: ross}, {first_name: 'Mike', image: ross},
                            {first_name: 'Rachel', image: ross}, {first_name: 'Gunter', image: ross}];

class Contestant extends Component {
    constructor(props) {
        super(props);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.state = {
            border: 'solid 10px transparent',
        };
    }
    mouseEnter() {
        console.log('Enter')
          this.setState({border: "solid 10px red" });
    }
    mouseLeave() {
        this.setState({border: "solid 10px transparent" });
    }
    render() {
        return (
            <div className="wrapper">
                {
                    ContestantDetails.map((item, i) => {
                        return (
                                <div key={i} className="contestant-container">
                                    <img
                                        style={{border: this.state.border}}
                                        onMouseEnter={this.mouseEnter}
                                        onMouseLeave={this.mouseLeave}
                                        src={item.image}
                                        className="contestant-image"
                                    />
                                <p className="contestant-name">{item.first_name}</p>
                                </div>
                            )
                    })
                }
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contestant />
      </div>
    );
  }
}

export default App;
