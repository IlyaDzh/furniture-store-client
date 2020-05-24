import { withFormik } from "formik";
import * as Yup from "yup";

import { Modal as BaseModal } from "../components";
import { newsActions } from "admin/actions";
import store from "admin/store";

const AddModal = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        date: "",
        title: "",
        short_description: "",
        description: ""
    }),
    validationSchema: Yup.object({
        date: Yup.string().required("Заполните поле Дата"),
        title: Yup.string().required("Заполните поле Название"),
        short_description: Yup.string().required("Заполните поле Краткое описание"),
        description: Yup.string().required("Заполните поле Описание"),
        image: Yup.string().required("Вставьте картинку")
    }),
    handleSubmit: (values, { resetForm, props: { setShow } }) => {
        const data = new FormData();
        data.append("file", values.image);
        data.append("date", values.date);
        data.append("title", values.title);
        data.append("short_description", values.short_description);
        data.append("description", values.description);
        store.dispatch(newsActions.addNews(data)).then(() => {
            setShow(false);
            resetForm();
        });
    }
})(BaseModal);

export default AddModal;
