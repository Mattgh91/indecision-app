import React from 'react';

const Header = (props) => (
    <header className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            <p className="header__subtitle">{props.subtitle}</p>
        </div>
    </header>
);


Header.defaultProps = {
    title: 'Page Title',
    subtitle: 'Subtitle',
};

// class Header extends Component {
//     render() {
//         return (
//             <header className="App-header">
//               <img src={logo} className="App-logo" alt="logo" />
//               <h1 className="App-title">{this.props.title}</h1>
//               <p className="subtitle">{this.props.subtitle}</p>
//             </header>
//         );
//     }
// }

export default Header;
