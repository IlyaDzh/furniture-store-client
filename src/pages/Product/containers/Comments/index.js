import { withFormik } from "formik";
import * as Yup from "yup";

import { Comments as BaseComments } from "../../components";

const Comments = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        fullname: "",
        email: "",
        comment: ""
    }),
    validationSchema: Yup.object({
        fullname: Yup.string().required("Укажите свое имя и фамилию"),
        email: Yup.string().email("Неверный E-mail").required("Укажите свой E-mail"),
        comment: Yup.string().required("Напишите ваш отзыв")
    }),
    handleSubmit: (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    }
})(BaseComments);

export default Comments;
