enum LoginActionTypes {
    Login = "LOGIN",
}

type Login = {
    type: LoginActionTypes.Login,
    email: string,
    password: string,
};

type LoginAction =
    Login;

const login = (email: string, password: string): Login => ({
    type: LoginActionTypes.Login,
    email,
    password,
});

export {
    LoginAction,
    LoginActionTypes,
    login,
};