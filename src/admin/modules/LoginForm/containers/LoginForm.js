import { withFormik } from "formik";
import * as Yup from "yup";

import { LoginForm as BaseLoginForm } from "../components";
// import { userActions } from "actions";
// import store from "store";

const LoginForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: "",
        password: ""
    }),
    validationSchema: Yup.object({
        email: Yup.string().email("Неверный E-mail").required("Обязательное поле"),
        password: Yup.string().required("Обязательное поле")
    }),
    handleSubmit: (values, { props }) => {
        console.log(values);
        // store
        //     .dispatch(userActions.fetchUserSignIn(values))
        //     .then(({ status }) => {
        //         props.history.push("/");
        //     })
        //     .catch(() => { });
    }
})(BaseLoginForm);

export default LoginForm;