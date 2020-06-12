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

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     const { valueName, valueDate, valueDesc } = this.state;
  //     const name = valueName;
  //     const date = valueDate;
  //     const description = valueDesc;
  //     const task = {
  //       name,
  //       date,
  //       description,
  //       editing: false,
  //     };
  //     axios
  //       .post('http://localhost:5000/add-task', task)
  //       .then(() => console.log('Task Created'))
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //     window.location.reload();
  //   };

  //   handleEdit = (id) => {
  //     axios.put(`http://localhost:5000/${this.props.location.state.id}`);
  //   };

  render() {
    if (!this.state.editing) {
      return (
        <div>
          <form className='form-inline' action='/edit-task' method='POST'>
            <label htmlFor='name'>Task Name:</label>
            <input
              type='text'
              id='name'
              placeholder={this.props.location.state.names}
              name='name'
              onChange={(event) => this.updateName(event)}
            />
            <label htmlFor='date'>Due Date:</label>
            <input
              type='date'
              id='date'
              placeholder={this.props.location.state.date}
              name='date'
              onChange={(event) => this.updateDate(event)}
            />
            <label htmlFor='description'>Description:</label>
            <input
              type='description'
              id='description'
              placeholder={this.props.location.state.desc}
              name='description'
              onChange={(event) => this.updateDesc(event)}
            />
            <input
              type='hidden'
              value={this.props.location.state.id}
              name='taskId'
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      );
    }
    // if ends here
  }
}

export default Input;
