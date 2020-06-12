import React, { Component } from 'react';
import TableBody from './TableBody';
import Input from '../Input/Input';
import axios from 'axios';

class Table extends Component {
  state = {
    tables: [
      {
        name: 'Jake',
        date: '6/8/2020',
        description: 'test description. lorum ipsum blah blah blah 111',
      },
      {
        name: 'Judy',
        date: '6/10/2020',
        description: 'test description. lorum ipsum blah blah blah 222',
      },
      {
        name: 'Luna',
        date: '6/20/2020',
        description: 'test description. lorum ipsum blah blah blah 333',
      },
    ],
    valueName: '',
    valueDate: '',
    valueDesc: '',
  };

  //updating temp values of name, date, desc
  updateName = (event) => {
    this.setState({ valueName: event.target.value });
  };
  updateDate = (event) => {
    this.setState({ valueDate: event.target.value });
  };
  updateDesc = (event) => {
    this.setState({ valueDesc: event.target.value });
  };

  // sumbitting temp names to database
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
    };
    axios
      .post('http://localhost:5000/add-task', task)
      .then(() => console.log('Task Created'))
      .catch((err) => {
        console.error(err);
      });
    window.location.reload();
  };

  handleDelete = (id) => {
    // e.preventDefault();
    axios.delete(`http://localhost:5000/${id}`).catch((err) => {
      console.log(err);
    });
    window.location.reload();
  };

  //getting tasks from db and setting state
  componentDidMount() {
    axios.get('http://localhost:5000/get-tasks').then((tasks) => {
      tasks.data.map((tasks) => {
        this.setState({ tables: [...this.state.tables, tasks] });
      });
      console.log(this.state);
    });
  }

  render() {
    //iterating through state and rendering table rows for each
    const tables = this.state.tables.map((items) => {
      return (
        <TableBody
          names={items.name}
          date={items.date}
          desc={items.description}
          id={items._id}
          delete={this.handleDelete}
          edit={this.handleEdit}
        />
      );
    });
    return (
      <div className='container'>
        <h1 className='text-center mt-5'>Lets Get Productive!</h1>
        <table className='table table-striped table-responsive-md btn-table mt-4'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Due Date</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {tables}
        </table>
        <Input
          updateName={(event) => this.updateName(event)}
          updateDate={(event) => this.updateDate(event)}
          updateDesc={(event) => this.updateDesc(event)}
          clicked={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Table;
