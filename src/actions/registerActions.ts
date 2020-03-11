enum SignUpActionTypes {
    SignUp = "SIGNUP",
}

type SignUp = {
    type: SignUpActionTypes.SignUp,
    username:string,
    firstname:string,
    lastname:string,
    email: string, 
    password: string,
    phonenumber:string,
    afm:string,
    country:string,
    city:string,
    street:string,
    aptno:string,
    zipcode:string,
};

type SignUpAction =
    SignUp;

const register = (username:string,firstname:string,lastname:string,email: string, password: string,
    phonenumber:string,afm:string,country:string,city:string,street:string,aptno:string,zipcode:string): SignUp => ({
    type: SignUpActionTypes.SignUp,
    username,firstname,lastname,email, password,phonenumber,afm,country,city,street,aptno,zipcode,
});

export {
    SignUpAction,
    SignUpActionTypes,
    register,
};