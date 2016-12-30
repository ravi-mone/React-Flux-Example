import React from 'react';
import AppDispatcher from '../../dispatcher/AppDispatcher'
import TodoStore from '../../stores/TodoStore'
import UserActions from '../../actions/UserActions';


function getTodoData() {
    return {
        data: TodoStore.getTodoItems()
    };
}

class TodoBody extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: []
      };
      this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
      TodoStore.addChangeListener(this._onChange);
  }

  _onChange() {
      this.setState(getTodoData());
  }

  //Remove change listeners from stores
  componentWillUnmount() {
      TodoStore.removeChangeListener(this._onChange);
  }


  componentDidMount() {
      AppDispatcher.handleAction(UserActions.fetchTodoItems());
  }

  _removeItem(e) {
    console.log("triggered",e.target.id);
    AppDispatcher.handleAction(UserActions.deleteTodoItems(e.target.id))
  }

	render() {
		var listNodes = this.state.data.map((item,i)=> {
			return (
        <li key={i} className="list-group-item">
  				{i+1} - {item.value}
          <input type="button" className="btn btn-xs btn-danger pull-right" id={i} onClick={this._removeItem} value="X" />
  			</li>
			);
		});
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-offset-3 col-md-6">
						<div className="row">
							<ul className="list-group">
								{listNodes}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TodoBody;
