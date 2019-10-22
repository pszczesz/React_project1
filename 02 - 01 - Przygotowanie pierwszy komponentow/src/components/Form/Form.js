import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <>
                <label> Tekst </label>
                <input type="text" placeholder={new Date().toLocaleDateString()} />
            </>
        );
    };
}
export default Form;