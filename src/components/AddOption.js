import React, { Component } from 'react';

class AddOption extends Component { // This class uses state, so cannot be a Stateless Functional Component (the consts)
    constructor(props){
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            error: undefined,
        }
    }
    handleFormSubmit(e){
        e.preventDefault();

        const submitted = e.target.elements.addOption.value.trim();
        const error = this.props.handleAddOption(submitted);

        // this.setState(() => {
        //     return {
        //         error,
        //     };
        // });
        this.setState(() => ({ error, }));

        if(!error) {
            e.target.elements.addOption.value = '';
        }

        e.target.elements.addOption.value = '';
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form
                    onSubmit={this.handleFormSubmit}
                    className="add-option-form"
                >
                    <input
                        type="text"
                        name="addOption"
                        className="add-option-form__input"
                    />
                    <button
                        className="button"
                    >
                        Add Option
                    </button>
                </form>
            </div>
        );
    }
}

export default AddOption;
