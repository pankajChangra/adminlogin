import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth.act";

interface IState {
    email: any;
    password: any;
    role_id: number;
    loginError: boolean;
    validationEmailError: boolean;
    validationPasswordError: boolean;
    validationMessage: string
}

interface IPros {
    adminLogin? : any
    regEmail: string
    loginError: any
}

class Admin extends Component<IPros, IState>{
    constructor(props: IPros) {
        super(props)
        this.state = {
            email: '',
            password: '',
            role_id: 1,
            loginError: false,
            validationEmailError: false,
            validationPasswordError: false,
            validationMessage: '',
        }
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let  updateState:any = {
            [e.target.name] : e.target.value
        }
        this.setState(updateState);
    }

    errorMessageReset = () => {
        this.setState({
            loginError: false,
        })
    }

    onSubmit = () => {
        let {email, password, role_id} = this.state
        if(email==="")
        {
            this.setState({
            validationEmailError:true,
            validationMessage:"Please enter the Email"
            });
            return false;
        }
        if(email!==null && !email.includes('@')){
            this.setState({
            validationEmailError:true,
            validationMessage:"Please enter the Valid Email"
            });
            return false;
        }

        if(password === "") {
            this.setState({
                validationPasswordError: true,
                validationMessage: "Please enter password field"
            })
            return false;
        }

        let data = {
            email: email,
            password: password,
            role_id: role_id
        }
        
        this.props.adminLogin(data, 'login');
    }

    componentDidUpdate = (prevProps: any) => {
        if(prevProps.regEmail !== this.props.regEmail){
            if(this.props.regEmail !== null && this.props.regEmail) {
                console.log(this.props.regEmail)
            }
        }

        if(prevProps.loginError !== this.props.loginError) {

        }
    }
    
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        {this.props.regEmail !== null && this.props.regEmail ? <div className="alert alert-success" role="alert">
                            Account successfully created! Please sign-in into your account 
                        </div>: null}
                        {this.props.loginError !== null && this.props.loginError ? <div className="alert alert-danger" role="alert">{this.props.loginError}</div>: null}
                        <form noValidate onSubmit={(event:any) => {event.preventDefault(); this.onSubmit()}}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onClick={this.errorMessageReset}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onClick={this.errorMessageReset}
                                    onChange={this.onChange}
                                />
                            </div>
                            {localStorage.usertoken ? (<button type="submit" disabled={true} className="btn btn-lg btn-primary btn-block">
                                Sign in
                                </button>
                             ) : ( 
                                <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Sign in
                                </button>
                            )}
                            <br />
                        </form>
                    </div>
                </div>
                <div className="top"></div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        token: state.auth.token,
        loading: state.auth.loading,
        error: state.auth.error,
        regEmail: state.auth.registerResp,
        loginError: state.auth.loginError
    };
};
  
  const mapDispatchToProps = (dispatch:any) => {
    return {
      adminLogin: (data: any, payload: any) => dispatch(actions.adminLogin(data, payload))
    };
};
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Admin);