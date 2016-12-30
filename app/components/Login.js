import React  from 'react';
import { Link} from 'react-router';

import Terms from './Terms'

function getLoginState() {
    return {
        username     : 'demo',
        password     : 'demo123',
        notifymessage: ''
    };
}

class Login extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = getLoginState();

    }

    _validateUser() {
        if( (!this.refs.uName.value) &&  (!this.refs.uPass.value)){
            this.setState({
                notifymessage: 'Looks like you have not yet entered the required fields, please enter the details',
                paint : 'orange'
            })
            return false;
        }

        if (this.state.username == this.refs.uName.value && this.state.password == this.refs.uPass.value) {
            this.setState({
                notifymessage: 'You are valid user :)',
                paint : 'green'
            })
            window.setTimeout(()=>{
                this.context.router.push('/todo');
            }, 2000)
        } else {
            this.setState({
                notifymessage: 'You are Invalid user :(',
                paint : 'red'
            })
        }
    }

    render() {

        let styleObj = {'textAlign':"center", "height":"20px", "color": this.state.paint};
        return (
            <div>

                <div className="form-class">
                    <form>
                        <div style={styleObj}><i>{this.state.notifymessage}</i></div>
                        <div className="imgcontainer">
                            <img src="./img/img_avatar2.png" alt="Avatar" className="avatar"/>
                        </div>
                        <div className="container">
                            <label><b>{this.props.uName}</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" ref="uName" required/>

                            <label><b>{this.props.pName}</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" ref="uPass" required/>

                            <button className="login-btn" type="button" onClick={this._validateUser.bind(this)}>Login</button><br />
                            <div style={ {"backgroundColor": "#f1f1f1", "float":"left"}}>
                            <span className="psw">Forgot
                        <Link to="forgot">password?</Link>
                    </span>
                            </div>

                        </div>


                    </form>
                </div>
                <Terms condition="Terms & Conditions"/>

            </div>
        )
    }
}
Login.defaultProps = {
    uName: 'Please enter UserName',
    pName: 'Please enter Password'
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Login;
