// These are special actions used by the react-router-redux framework.
// That is why they are declared differently to our other actions.
// They are handled by a reducer added by the framework.

import { push } from "connected-react-router";

const routeTo = (path: string) => {
    return push(path);
};

export {
    routeTo,
};
