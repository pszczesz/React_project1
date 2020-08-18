import React from 'react';

class Form extends React.Component {
  state = {
          firstName:'',
          lastName: '',
          username: '',
          email: '',
          password: ''

      }

  render() {
      console.log(this.state);
    return (
      <>
        <form>
            <div>
              <input 
              placeholder="first name"
              value={this.state.firstName}
              onChange={(e)=>{this.setState({firstName: e.target.value})}}
              />
            </div>
            <div>
              <input 
              placeholder="last name"
              value={this.state.lastName}
              onChange={(e)=>{this.setState({lastName: e.target.value})}}
              />
            </div>
        </form>
    <h3>Imię: {this.state.firstName} Nazwisko: {this.state.lastName}</h3>
        </>
    );
  }

  
}

export default Form;
