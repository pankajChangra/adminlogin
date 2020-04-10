import React from "react";
import { Route, Redirect} from "react-router-dom";

interface IProps {
  auth? : any
  component? : any
  rest?: any
  exact?: any
  path? : any
  permissionCheck? : boolean
  permission: string
}

const PrivateRoute: React.FC<IProps> = ({ auth, component: Component, permissionCheck,...rest }) => {
  return (
      <Route
        {...rest}
        render={props =>
          (auth || localStorage.getItem('token')) &&
           (permissionCheck === true)? (
            <>
              <Component {...props} />
            </>
           ) : (auth || localStorage.getItem('token')) &&
             (permissionCheck === false)? (
            <>
               <Component {...props} />
            </>
           ):
           (
             <>
                <Redirect
                  to={{
                    pathname: `${process.env.PUBLIC_URL}/`,
                    state: { from: props.location }
                  }}
                />
            </>
          )
        }
      />
    );
  }

export default PrivateRoute;