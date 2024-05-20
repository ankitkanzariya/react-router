const validete = (values) => {
    const errors = {};
    if (!values.UserName) {
        errors.UserName = "UserName is required!";
    } else if (values.UserName.length < 4) {
        errors.UserName = "UserName must be more then 4 char!";
    } else if (values.UserName.length > 20) {
        errors.UserName = "UserName cannot exceed more then 20 char!";
    }



    if (!values.Password) {
        errors.Password = "Password is required!";
    } else if (values.Password.length < 4) {
        errors.Password = "pssword must be more then 6 char!";
    } else if (values.Password.length > 15) {
        errors.Password = "pssword cannot exceed more then 15 char!";
    }

    return errors
}
export default validete;