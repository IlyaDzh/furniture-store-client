import { withFormik } from "formik";
import * as Yup from "yup";

import { LoginForm } from "../components";
import { adminActions } from "admin/actions";
import store from "admin/store";

const Auth = withFormik({
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
        store
            .dispatch(adminActions.fetchAdminSignIn(values))
            .then(({ admin }) => {
                if (admin) {
                    props.history.push("/admin/statistics");
                }
            })
            .catch(() => {});
    }
})(LoginForm);

export default Auth;
