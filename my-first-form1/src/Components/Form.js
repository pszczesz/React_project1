import React from 'react';

class Form extends React.Component {
  state = {
          firstName:'',
          lastName: '',
          username: '',
          email: '',
          password: ','

      }

  render() {
      
    return (
        <form>
            <input 
            placeholder="first name"
            value={this.state.firstName}
            onChange={(e)=>{this.setState({firstName: e.target.value})}}
            />
        </form>
    );
  }

  
}

export default Form;
