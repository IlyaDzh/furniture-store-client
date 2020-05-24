import React from "react";
import PropTypes from "prop-types";
import { Table, Button } from "react-bootstrap";
import { MdModeEdit, MdClose } from "react-icons/md";

import { Section, Spinner } from "admin/components";
import { getConvertTime } from "utils/helpers";
import "./News.scss";

const News = ({
    setShowAdd,
    openEditModal,
    deleteNews,
    items,
    isLoading,
    error
}) => (
    <Section title="Новости" className="admin-news">
        <div className="admin-news__actions">
            <Button variant="success" onClick={() => setShowAdd(true)}>
                Добавить новость
            </Button>
        </div>
        <div className="table-container">
            <Table className="admin-table" hover borderless>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Название</th>
                        <th>Краткое описание</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading ? (
                        !error ? (
                            items && items.length ? (
                                items.map(item => (
                                    <tr key={item._id}>
                                        <td>{getConvertTime(item.date)}</td>
                                        <td>{item.title}</td>
                                        <td>{item.short_description}</td>
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
                                                        deleteNews(item._id)
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
                                    <td colSpan="5">Нет новостей</td>
                                </tr>
                            )
                        ) : (
                            <tr className="table__empty">
                                <td colSpan="5">Произошла ошибка!</td>
                            </tr>
                        )
                    ) : (
                        <tr className="table__empty">
                            <td colSpan="5">
                                <Spinner size="sm" />
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    </Section>
);

News.propTypes = {
    setShowAdd: PropTypes.func,
    openEditModal: PropTypes.func,
    deleteNews: PropTypes.func,
    items: PropTypes.arrayOf(Object),
    isLoading: PropTypes.bool,
    error: PropTypes.bool
};

export default News;
