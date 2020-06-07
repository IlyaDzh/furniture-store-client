import { withFormik } from "formik";
import * as Yup from "yup";

import { AddModal as BaseModal } from "../components";
import { catalogActions } from "admin/actions";
import store from "admin/store";

const AddModal = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        name: "",
        new: false,
        hit: false,
        price_current: "",
        price_old: "",
        shape: "",
        material: "",
        style: "",
        color: "",
        collection: ""
    }),
    validationSchema: Yup.object({
        name: Yup.string().required("Заполните поле"),
        images: Yup.string().required("Вставьте картинку"),
        price_current: Yup.number()
            .positive("Цена должна быть положительной")
            .required("Заполните текущую цену")
    }),
    handleSubmit: (values, { resetForm, props: { type, setShow } }) => {
        const price = {
            current: values.price_current,
            old: values.price_old
        };
        const chars = {
            shape: values.shape,
            material: values.material,
            style: values.style,
            color: values.color,
            collection: values.collection
        };

        const data = new FormData();
        data.append("type", type);
        for (let i = 0; i < values.images.length; i++) {
            data.append("files", values.images[i]);
        }
        data.append("name", values.name);
        data.append("new", values.new);
        data.append("hit", values.hit);
        data.append("price", JSON.stringify(price));
        data.append("chars", JSON.stringify(chars));

        store.dispatch(catalogActions.addProduct(data)).then(() => {
            setShow(false);
            resetForm();
        });
    }
})(BaseModal);

export default AddModal;
