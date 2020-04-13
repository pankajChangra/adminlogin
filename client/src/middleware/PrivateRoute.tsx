import React from "react";
import { Route, Redirect} from "react-router-dom";

interface IProps {
  auth? : any
  component? : any
  rest?: any
  exact?: any
  path? : any
}

const PrivateRoute: React.FC<IProps> = ({ auth, component: Component,...rest }) => {
  return (
      <Route
        {...rest}
        render={props =>
          (auth || localStorage.getItem('token'))? (
            <>
              <Component {...props} />
            </>
           ) : (auth || localStorage.getItem('token'))? (
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