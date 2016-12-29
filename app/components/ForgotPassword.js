import React  from 'react';


class ForgotPassword extends React.Component {
    constructor(props){
        super(props)
    }

    _sendConfirm() {
        console.log('eamil : ', this.refs.email.value);

        this.context.router.push('/confirm');

    }

    render() {

        return (
            <div className="terms-conditions">
                <h3>Please Enter your Email ID here : </h3>
                <p>
                    <input type="text" ref="email"/>
                </p>
                <input type="button" onClick={this._sendConfirm.bind(this)} value="SEND MAIL"/>
            </div>
        )
    }
}
ForgotPassword.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default ForgotPassword;