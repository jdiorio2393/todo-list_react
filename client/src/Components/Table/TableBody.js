import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableBody extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <th scope='row' className='table-head'></th>
          <td>{this.props.names}</td>
          <td>{this.props.date}</td>
          <td>{this.props.desc}</td>
          <td>
            <Link
              to={{
                pathname: `/edit/${this.props.id}`,
                state: {
                  id: this.props.id,
                  names: this.props.names,
                  date: this.props.date,
                  desc: this.props.desc,
                },
              }}
            >
              <button
                onClick={this.props.edit}
                className='btn btn-primary py-2 px-4'
                href={`/edit/${this.props.id}`}
              >
                Edit
              </button>
            </Link>
          </td>
          <td>
            <form>
              <input type='hidden' value={this.props.id} name='taskId'></input>
              <button
                onClick={() => this.props.delete(this.props.id)}
                className='btn btn-primary py-2 px-4'
                type='submit'
              >
                Delete
              </button>
            </form>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default TableBody;
