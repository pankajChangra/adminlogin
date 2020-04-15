import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_LOGOUT,
    RESET_ALERT_MESSAGE
} from "./actionTypes/auth";
import { authService } from "../../services/auth.service"

export const authStart = () => {
    return {
      type: AUTH_START
    };
};

export const authSuccess = (data:string | string[], action: string) => {
    return {
        type: AUTH_SUCCESS,
        data: data,
        action: action,
    }
}

export const authFail = (message :any, action: string) => {
    return {
        type: AUTH_FAIL,
        message: message,
        action: action
    }
}

export const resetMessage = () => {
  return {
    type: RESET_ALERT_MESSAGE
  }
}

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("admin");
  localStorage.removeItem("expirationDate");
  return {
    type: AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime?: any) => {
  return (dispatch?: any) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authSignup = (data: any, action: any) => {
    return (dispatch:any) => {
      dispatch(authStart());
      authService
        .register(data)
        .then(res => {
          if (res.data.status === 200) {
            const email = res.data.email;
            dispatch(authSuccess(email, action));
          } else if(res.data.error.status === 409){
            dispatch(authFail(res.data.error.message, action));
          }
        })
        .catch(err => {
          dispatch(authFail(err,action))
        });
        setTimeout(() => {
          dispatch(resetMessage());
        }, 5000);
    };
}


export const authLogin = (data: any, action: any) => {
  return (dispatch:any) => {
    dispatch(authStart());
    authService
      .login(data)
      .then(res => {
        if (res.data.status === 200) {
          const token = res.data.token;
          localStorage.setItem("token",token);
          const expirationDate = new Date(new Date().getTime() + 360 * 60000);
          dispatch(authSuccess(token, action));
          dispatch(checkAuthTimeout(3600));
          try {
            const serializedState = JSON.stringify(expirationDate);
            localStorage.setItem("expirationDate", serializedState);
            return true;
          } catch (error) {
            throw new Error('store serialization failed' + error);
          }
        } else if(res.data.err.status === 404 || res.data.err.status === 401){
          dispatch(authFail(res.data.err.message, action));
        }
      })
      .catch(err => {
        dispatch(authFail({ err },action))
      });
      setTimeout(() => {
        dispatch(resetMessage());
      }, 5000);
  };
}

export const adminLogin = (data: any, action: any) => {
  return (dispatch:any) => {
    dispatch(authStart());
    authService
      .adminLoginSerive(data)
      .then(res => {
        if (res.data.status === 200) {
          let token = res.data.token;
          localStorage.setItem("admin",token);
          const expirationDate = new Date(new Date().getTime() + 360 * 60000);
          dispatch(authSuccess(token, action));
          dispatch(checkAuthTimeout(3600));
          try {
            const serializedState = JSON.stringify(expirationDate);
            localStorage.setItem("expirationDate", serializedState);
            return true;
          } catch (error) {
            throw new Error('store serialization failed' + error);
          }
        } else if(res.data.err.status === 404 || res.data.err.status === 401){
          dispatch(authFail(res.data.err.message, action));
        }
      })
      .catch(err => {
        dispatch(authFail({ err },action))
      });
      setTimeout(() => {
        dispatch(resetMessage());
      }, 5000);
  };
}
