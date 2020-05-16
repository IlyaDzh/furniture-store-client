import React from "react";
import PropTypes from "prop-types";
import {
    ToggleButtonGroup,
    ToggleButton,
    Table,
    Form,
    Button
} from "react-bootstrap";
import { MdClose } from "react-icons/md";

import { Section } from "admin/components";
import "./Orders.scss";

const Orders = ({
    value,
    handleChange,
    onChangeStatus,
    openDetailsModal,
    fetchDelete,
    items,
    isLoading,
    error
}) => (
    <Section title="Заказы" className="admin-orders">
        <div className="admin-orders__actions">
            <ToggleButtonGroup
                type="radio"
                name="options"
                defaultValue={1}
                value={value}
                onChange={handleChange}
            >
                <ToggleButton value="">Все</ToggleButton>
                <ToggleButton value="Оформление заказа">
                    Оформление заказа
                </ToggleButton>
                <ToggleButton value="Вызов замерщика">Вызов замерщика</ToggleButton>
                <ToggleButton value="Заказ звонка">Заказ звонка</ToggleButton>
                <ToggleButton value="Подписка на рассылку">
                    Подписка на рассылку
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
        <div className="table-container">
            <Table borderless>
                <thead>
                    <tr>
                        <th>Тип</th>
                        <th>E-mail</th>
                        <th>ФИО</th>
                        <th>Телефон</th>
                        <th>Адрес</th>
                        <th>Подробнее</th>
                        <th>Статус</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading ? (
                        !error ? (
                            items && items.length ? (
                                items.map(item => (
                                    <tr key={item._id}>
                                        <td>{item.type}</td>
                                        <td>{item.email || "---"}</td>
                                        <td>{item.fullname || "---"}</td>
                                        <td>{item.phone || "---"}</td>
                                        <td>{item.address || "---"}</td>
                                        <td>
                                            {item.cart.length ? (
                                                <Button
                                                    variant="link"
                                                    onClick={() =>
                                                        openDetailsModal(item)
                                                    }
                                                >
                                                    Корзина
                                                </Button>
                                            ) : item.time ? (
                                                <Button
                                                    variant="link"
                                                    onClick={() =>
                                                        openDetailsModal(item)
                                                    }
                                                >
                                                    Время
                                                </Button>
                                            ) : (
                                                "---"
                                            )}
                                        </td>
                                        <td>
                                            <Form.Control
                                                as="select"
                                                onChange={event =>
                                                    onChangeStatus(
                                                        item._id,
                                                        event.currentTarget.value
                                                    )
                                                }
                                                value={item.status || ""}
                                            >
                                                <option>В обработке</option>
                                                <option>Оплата</option>
                                                <option>В пути</option>
                                                <option>Завершено</option>
                                            </Form.Control>
                                        </td>
                                        <td className="order-actions">
                                            <Button
                                                variant="remove"
                                                onClick={() => fetchDelete(item._id)}
                                            >
                                                <MdClose />
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="table__empty">
                                    <td colSpan="8">Нет заказов</td>
                                </tr>
                            )
                        ) : (
                            <tr className="table__empty">
                                <td colSpan="8">Произошла ошибка!</td>
                            </tr>
                        )
                    ) : (
                        <tr className="table__empty">
                            <td colSpan="8">Загрузка...</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    </Section>
);

Orders.propTypes = {
    onChangeStatus: PropTypes.func,
    openDetailsModal: PropTypes.func,
    fetchDelete: PropTypes.func,
    items: PropTypes.arrayOf(Object),
    isLoading: PropTypes.bool,
    error: PropTypes.bool
};

export default Orders;
