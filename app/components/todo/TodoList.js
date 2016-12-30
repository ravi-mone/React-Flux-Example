import React from 'react';
import InputBox from './InputBox.js';
import TodoBody from './TodoBody.js';
import Header from '../Header';

class Todo extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (<div>
        <Header />
        <InputBox />
        <TodoBody />
      </div>);
  }
}

export default Todo;
