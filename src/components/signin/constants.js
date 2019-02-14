/* Signin Form Strings*/
export const NAME = 'signin';

export const SIGNIN_STRINGS = {
    PRIMARY: "primary",
    TITLE: "Sign in",
};

export const INPUTS = [
    {
        field: 'email',
        iconType: "user",
        placeholder: "Enter your E-mail",
        rules: [{ message: "Please input your E-mail!", required: true },{
            message: 'The input is not valid E-mail!', type: 'email',
        }],
    },
    {
        field: 'password',
        iconType: "lock",
        placeholder: "Enter your password",
        type: "password",
    },
];

export const SIGNIN_URL = "/account/signin";
