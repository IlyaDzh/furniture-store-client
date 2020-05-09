import { withFormik } from "formik";
import * as Yup from "yup";

import { Order as BaseOrder } from "../components";
import { phoneRegExp } from "utils/constants";

const Order = withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ data }) => ({
        fullname: data ? data.fullname : "",
        phone: data ? data.phone : "",
        email: data ? data.email : "",
        address: data ? data.address : "",
        payment: "Оплата наличными",
        delivery: "Самовывоз",
        comment: ""
    }),
    validationSchema: Yup.object({
        fullname: Yup.string().required("Заполните своё ФИО"),
        phone: Yup.string()
            .matches(phoneRegExp, "Не правильно набран номер")
            .required("Введите номер телефона"),
        email: Yup.string()
            .email("Неверный E-mail!")
            .required("Заполните поле E-mail"),
        address: Yup.string().required("Заполните адрес доставки")
    }),
    handleSubmit: (values, { props: { cart } }) => {
        values.cart = cart.map(({ product, count }) => ({
            product: product._id,
            count: Number(count)
        }));
        console.log(values);
    }
})(BaseOrder);

export default Order;
