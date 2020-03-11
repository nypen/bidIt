
enum SessionActionTypes {
    SetRequestedUrl = "SESSION_SET_REQUESTED_URL",
    SetAccessToken = "SESSION_SET_ACCESS_TOKEN",
}

type SetRequestedUrl = {
    type: SessionActionTypes.SetRequestedUrl,
    requestedUrl: string,
};
type SetAccessToken = {
    type: SessionActionTypes.SetAccessToken,
    accessToken: string,
};

type SessionAction =
    SetRequestedUrl |
    SetAccessToken ;

const setRequestedUrl = (requestedUrl: string): SetRequestedUrl => ({
    type: SessionActionTypes.SetRequestedUrl,
    requestedUrl,
});

const setAccessToken = (accessToken: string): SetAccessToken => ({
    type: SessionActionTypes.SetAccessToken,
    accessToken,
});

export{
    SessionAction,
    SessionActionTypes,
    setRequestedUrl,
    setAccessToken,
};