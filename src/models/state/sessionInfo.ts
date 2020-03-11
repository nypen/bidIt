interface SessionInfo {
    isAuthenticated: boolean;
    accessToken?: string;
    requestedUrl: string;
}

const initializeSessionInfo = (): SessionInfo => ({
    isAuthenticated: false,
    accessToken: "",
    requestedUrl: "",
});

export {
    SessionInfo,
    initializeSessionInfo,
};
