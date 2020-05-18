import React from "react";
import PropTypes from "prop-types";
import { Table, Button } from "react-bootstrap";
import { MdModeEdit, MdClose } from "react-icons/md";

import { Section, Spinner } from "admin/components";
import { getConvertTime } from "utils/helpers";

const Comments = ({ openEditModal, fetchDelete, items, isLoading, error }) => (
    <Section title="Комментарии" className="admin-comments">
        <div className="table-container">
            <Table className="admin-table" hover borderless>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>ФИО</th>
                        <th>Email</th>
                        <th>Комментарий</th>
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
                                        <td>{item.fullname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.comment}</td>
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
                                                        fetchDelete(item._id)
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
                                    <td colSpan="5">Нет комментариев</td>
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

Comments.propTypes = {
    openEditModal: PropTypes.func,
    fetchDelete: PropTypes.func,
    items: PropTypes.arrayOf(Object),
    isLoading: PropTypes.bool,
    error: PropTypes.bool
};

export default Comments;
