'use strict';

process.env.SECRET_KEY = 'secret';

var UserService = require('../service/account.service')  

module.exports.register = async(request, h) => {
    let userDetail = {
        first_name: request.payload.first_name,
        last_name: request.payload.last_name,
        email: request.payload.email,
        password: request.payload.password,
        role_id: request.payload.role_id,
        task_id: request.payload.task_id
    }
    
    try
    {
       let users = await UserService.registerService(request, userDetail)
       return users;

    } catch (error){
        return {error}
    }
}


module.exports.login = async(request, h) => {
    try{
        let authLogin = await UserService.loginService(request);
        return authLogin;

    } catch (err){
        return {err}
    }
}

module.exports.adminLogin = async(request, h) => {
    try{
        let authAdminLogin = await UserService.adminLoginService(request);
        return authAdminLogin
    } catch(err) {
        return {err}
    }
}

module.exports.usersDetial = async() => {
    try{
        let fetchUsers = await UserService.userDeatilService();
        return fetchUsers
    } catch(err) {
        return {err}
    }
}
