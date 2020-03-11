import { User } from "../models";

enum UserActionTypes {
    SetUser = "SetUser",
    GetUser = "GetUser",
}

type SetUser = {
    type: UserActionTypes.SetUser,
    user: User,
};

type UserAction =
    SetUser;

const setUser = (user: User): SetUser => ({
    type: UserActionTypes.SetUser,
    user,
});
type GetUser = {
    type: UserActionTypes.GetUser,
};
type GetUserAction =
    GetUser;

const getUser = (): GetUser => ({
    type: UserActionTypes.GetUser,
});

export {
    UserAction,
    GetUserAction,
    UserActionTypes,
    setUser,
    getUser,
};