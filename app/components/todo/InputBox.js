import React from 'react';
import AppDispatcher from '../../dispatcher/AppDispatcher'
import TodoStore from '../../stores/TodoStore'
import UserActions from '../../actions/UserActions';

function setStateValue() {
    return {
        status : 0,
        value : ""
    };
}

class InputBox extends React.Component {

  constructor(props) {
      super(props);
      this.state = {};
      this._onChange = this._onChange.bind(this);
      this._handleChange = this._handleChange.bind(this);
      this._addTodo = this._addTodo.bind(this);
  }

  _onChange() {
      this.setState(setStateValue());
      console.log("change triggered",this.state);
  }

  componentWillMount() {
      TodoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
      TodoStore.removeChangeListener(this._onChange);
  }

  _handleChange() {
    this.setState({value: this.refs.textvalue.value});
  }

  _addTodo() {
    console.log("inside",this.state);
    AppDispatcher.handleAction(UserActions.addTodoItem(this.state));
    this.refs.textvalue.value="";
  }

  render() {
    return (
      <div className="container-fluid">
				<div className="row">
					<div className="col-md-offset-3 col-md-6">
						<div className="row background-div">
							<div className="header-todo">
								Todo App
							</div>
						</div>
						<div className="row">
							<form>
								<div className="input-group">
									<input type="text" id="textvalue" ref="textvalue" onChange={this._handleChange} className="form-control" placeholder="Add task" />
						      <span className="input-group-btn">
						        <button className="btn btn-default" type="button" onClick={this._addTodo}> Add</button>
						      </span>
						    </div>
							</form>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default InputBox;
