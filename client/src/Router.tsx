import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from "./components/homepage/Layout"
import Register from './components/account/Register';
import Login from './components/account/Login';
import Admin from './components/account/Admin';
import PrivateRoute from "./middleware/PrivateRoute";
import Dashboard from "./Profile/views/Dashboard"
import { connect } from "react-redux";
import AdminLayout from "./Profile/layouts/Admin";

interface IProps {
    isAuthenticated?: any
}

class BaseRouter extends React.Component<IProps>{
    constructor(props: IProps){
        super(props)
    }

    render(){
      return (
          <Router>
              <Switch>
                    <Route path="/admin/dashboard" render={props => <AdminLayout {...props} />} />
                    <Route exact path="/" component={Layout} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/admin-login" component={Admin} />
                    <PrivateRoute exact 
                                auth={this.props.isAuthenticated} 
                                path={`${process.env.PUBLIC_URL}/dashboard`} 
                                component = {Dashboard}
                                />
              </Switch>
          </Router>
        )
    }
}

const mapStateToProps = (state: any) => {
    return{
      isAuthenticated : state.auth.token !== null
    }
}
      
export default connect(mapStateToProps,null)(BaseRouter);
