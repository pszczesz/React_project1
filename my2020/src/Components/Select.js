import React from 'react';
import { Component } from 'react';

class Select extends Component {
  // constructor(props) {
  //   super(props)
  // }
  handlerOnChange = (event) => {
    console.log(event.target.value);
  }
  render() {
    console.log(this.props);
    return (
      <select
        className="form-control"
        onChange={this.handlerOnChange}
      >
        {this.props.items.map((i) => (
        
          <option key={i}>{i}</option>
        ))}
      </select>

    );
  }
}


export default Select;