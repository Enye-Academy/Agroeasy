/* Signup Form Strings*/
export const SIGNUP_STRINGS = {
    AGREEMENT: "agreement",
    CLASSNAME_AGREEMENT: "agreementQuote",
    CLASSNAME_FORM: "signupForm",
    CLASSNAME_ITTEM1: "radiogroupform",
    CLASSNAME_RADIOBUTTONS: "radiobuttons",
    CLASSNAME_SCROLLBAR: "scrollBar",
    MESSAGE: "select categories",
    MODE: "multiple",
    NO: "No",
    PRIMARY: "primary",
    PRODUCER: "Are you a producer?",
    PRODUCT_TYPE: "Product Type",
    READ: "I have read the ",
    SMALL: "small",
    SOLID: "solid",
    TITLE: "Sign up",
    YES: "Yes",
};

export const formItemLayout = {
    labelCol: {
        sm: { span: 8 },
        xs: { span: 20 },
    },
    wrapperCol: {
        sm: { span: 16 },
        xs: { span: 20 },
    },
};

export const INPUTS = [
    {
        field: "email",
        label: "E-mail",
        rules: [{
            message: "The input is not valid E-mail!", type: "email",
        }, {
            message: "Please input your E-mail!", required: true,
        }],
    },
    {
        field: "firstname",
        label: "First name",
        rules: [{ message: "Please input your first name!", required: true }],
    },
    {
        field: "lastname",
        label: "Last name",
        rules: [{ message: "Please input your last name!", required: true }],
    },
    {
        field: "username",
        label: "Username",
        rules: [{ message: "Please input your username!", required: true  }],
    },
    {
        field: "location",
        label: "Location",
        rules: [{ message: "Please input your location!", required: true }],
    },
    {
        field: "password",
        inputType: "password",
        label: "Password",
        rules: [{ message: "Please input your password!", required: true } ],
    },
    {
        field: "confirm",
        inputType: "password",
        label: "Confirm password",
        rules: [{ message: "Please confirm your password!", required: true }],
    },
];

export const PRODUCTS = [
    {
        category: "rice",
        value: "rice",
    },
    {
        category: "vegetable",
        value: "vegetable",
    },
    {
        category: "beans",
        value: "beans",
    },
    {
        category: "grains",
        value: "grains",
    },
    {
        category: "wheat",
        value: "wheat",
    },
    {
        category: "other",
        value: "other",
    },
];
