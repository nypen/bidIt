import { User } from '../user';

interface UserState{
    user : User,
}

const initializeUserState = (): UserState => ({
    user : null,
});

export{
    UserState,
    initializeUserState,
};
