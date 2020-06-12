import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
  state = {
    valueName: '',
    valueDate: '',
    valueDesc: '',
  };

  updateName = (event) => {
    this.setState({ valueName: event.target.value });
  };
  updateDate = (event) => {
    this.setState({ valueDate: event.target.value });
  };
  updateDesc = (event) => {
    this.setState({ valueDesc: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { valueName, valueDate, valueDesc } = this.state;
    const name = valueName;
    const date = valueDate;
    const description = valueDesc;
    const task = {
      name,
      date,
      description,
      editing: false,
    };
    axios
      .post('http://localhost:5000/add-task', task)
      .then(() => console.log('Task Created'))
      .catch((err) => {
        console.error(err);
      });
    window.location.reload();
  };

  render() {
    return (
      <div>
        <form className='form-inline' action='/add-task' method='POST'>
          <label htmlFor='name'>Task Name:</label>
          <input
            type='text'
            id='name'
            placeholder='Enter Name'
            name='name'
            // value={this.props.valuename}
            onChange={(event) => this.updateName(event)}
          />
          <label htmlFor='date'>Due Date:</label>
          <input
            type='date'
            id='date'
            placeholder='Due Date'
            name='date'
            // value={props.valuedate}
            onChange={(event) => this.updateDate(event)}
          />
          <label htmlFor='description'>Description:</label>
          <input
            type='description'
            id='description'
            placeholder='Description'
            name='description'
            // value={props.valuedesc}
            onChange={(event) => this.updateDesc(event)}
          />
          <button onClick={this.handleSubmit} type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
