// Define default OtherAction with an empty type
type OtherAction = {
    type: "",
};

class DefaultActions {
    public static readonly OtherAction: OtherAction = {
        type: "",
    };
}

export {
    OtherAction,
    DefaultActions,
};
