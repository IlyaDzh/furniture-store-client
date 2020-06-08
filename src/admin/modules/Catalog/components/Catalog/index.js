import React from "react";
import PropTypes from "prop-types";
import { ToggleButtonGroup, ToggleButton, Table, Button } from "react-bootstrap";
import { MdModeEdit, MdClose } from "react-icons/md";

import { Section, Spinner } from "admin/components";
import { getConvertPrice } from "utils/helpers";
import "./Catalog.scss";

const Catalog = ({
    value,
    handleChange,
    setShowAdd,
    openDetailsModal,
    openEditModal,
    deleteProduct,
    items,
    isLoading,
    error
}) => (
    <Section title="Каталог" className="admin-catalog">
        <div className="admin-catalog__actions">
            <ToggleButtonGroup
                type="radio"
                name="options"
                defaultValue={1}
                value={value}
                onChange={handleChange}
            >
                <ToggleButton value="living-rooms">Гостиные</ToggleButton>
                <ToggleButton value="bedrooms">Спальни</ToggleButton>
                <ToggleButton value="kids-bedrooms">Детские</ToggleButton>
                <ToggleButton value="soft-furniture">Мягкая мебель</ToggleButton>
                <ToggleButton value="libraries">Библиотеки</ToggleButton>
                <ToggleButton value="kitchens">Кухни</ToggleButton>
                <ToggleButton value="hallways">Прихожие</ToggleButton>
                <ToggleButton value="tables">Столы</ToggleButton>
                <ToggleButton value="chairs">Стулья</ToggleButton>
                <ToggleButton value="beds">Кровати</ToggleButton>
                <ToggleButton value="sofas">Диваны</ToggleButton>
                <ToggleButton value="armchairs">Кресла</ToggleButton>
                <ToggleButton value="wall-shelves">Полки</ToggleButton>
                <ToggleButton value="hangers">Вешалки</ToggleButton>
                <ToggleButton value="mirrors">Зеркала</ToggleButton>
                <ToggleButton value="chest-of-drawers">Комоды</ToggleButton>
                <ToggleButton value="cupboards">Тумбы</ToggleButton>
                <ToggleButton value="wardrobes">Шкафы</ToggleButton>
            </ToggleButtonGroup>
            <Button variant="success" onClick={() => setShowAdd(true)}>
                Добавить продукт
            </Button>
        </div>
        <div className="table-container">
            <Table className="admin-table" hover borderless>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Текущая цена</th>
                        <th>Старая цена</th>
                        <th>Характеристики</th>
                        <th>Новое</th>
                        <th>Популярное</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading ? (
                        !error ? (
                            items && items.length ? (
                                items.map(item => (
                                    <tr key={item._id}>
                                        <td>{item.name}</td>
                                        <td>
                                            {getConvertPrice(item.price.current)}{" "}
                                            руб.
                                        </td>
                                        <td>
                                            {item.price.old
                                                ? getConvertPrice(item.price.old) +
                                                  " руб."
                                                : "---"}
                                        </td>
                                        <td>
                                            <Button
                                                variant="link"
                                                onClick={() =>
                                                    openDetailsModal(item.chars)
                                                }
                                            >
                                                Открыть
                                            </Button>
                                        </td>
                                        <td>{item.new ? "Да" : "Нет"}</td>
                                        <td>{item.hit ? "Да" : "Нет"}</td>
                                        <td>
                                            <div className="table-actions">
                                                <Button
                                                    variant="edit"
                                                    onClick={() =>
                                                        openEditModal(item)
                                                    }
                                                >
                                                    <MdModeEdit />
                                                </Button>
                                                <Button
                                                    variant="remove"
                                                    onClick={() =>
                                                        deleteProduct(item._id)
                                                    }
                                                >
                                                    <MdClose />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="table__empty">
                                    <td colSpan="8">Нет продуктов</td>
                                </tr>
                            )
                        ) : (
                            <tr className="table__empty">
                                <td colSpan="8">Произошла ошибка!</td>
                            </tr>
                        )
                    ) : (
                        <tr className="table__empty">
                            <td colSpan="8">
                                <Spinner size="sm" />
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    </Section>
);

Catalog.propTypes = {
    openDetailsModal: PropTypes.func,
    deleteProduct: PropTypes.func,
    items: PropTypes.arrayOf(Object),
    isLoading: PropTypes.bool,
    error: PropTypes.bool
};

export default Catalog;
