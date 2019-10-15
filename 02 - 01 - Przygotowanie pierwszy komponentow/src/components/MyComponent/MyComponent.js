import React from 'react';


class MyComponent extends React.Component {
    state = {
        text: '',
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value.toUpperCase()});
    }
    render() {
        return (
            <>
                <label>Tutaj tekst</label>
                <input 
                    placeholder="your text" 
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <h1>{this.state.text}</h1>
            </>
        )
    }
}

export default MyComponent;