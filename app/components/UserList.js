import React from 'react';
import AppDispatcher from '../dispatcher/AppDispatcher'
import UserStore from '../stores/UserStores'
import UserActions from '../actions/UserActions'

function getCartState() {
    return {
        data: UserStore.getUsers()
    };
}

class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state     = {};
        this._onChange = this._onChange.bind(this)
    }

    componentWillMount() {
        UserStore.addChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getCartState());
    }

    //Remove change listeners from stores
    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange);
    }


    componentDidMount() {
        AppDispatcher.handleAction(UserActions.fetchUsers())
    }

    render() {
        let items;
        if (this.state.data) {
            items = (this.state.data).map((item, i) => {
                return (<li key={i}>{item.name}</li>)
            })
        }

        return (
            <div>
                <div>Users List</div>
                <hr />
                <ul>
                    {items}
                </ul>
            </div>)
    }
}

export default UserList;