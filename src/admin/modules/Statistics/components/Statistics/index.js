import React from "react";

import { Section, Spinner } from "admin/components";
import { Card } from "../";
import "./Statistics.scss";

const Statistics = ({ users, orders, comments }) => (
    <Section title="Статистика" className="admin-stats">
        <div className="admin-stats__item">
            <h4>Пользователи</h4>
            <div className="row">
                {!users ? (
                    <Spinner />
                ) : (
                    <>
                        <Card title="Всего" number={users.all} />
                        <Card title="За месяц" number={users.lastMonth} />
                        <Card title="За неделю" number={users.lastWeek} />
                        <Card title="За 24 часа" number={users.lastDay} />
                    </>
                )}
            </div>
        </div>
        <div className="admin-stats__item">
            <h4>Заказы</h4>
            <div className="row">
                {!orders ? (
                    <Spinner />
                ) : (
                    <>
                        <Card title="Всего" number={orders.all} />
                        <Card title="За месяц" number={orders.lastMonth} />
                        <Card title="За неделю" number={orders.lastWeek} />
                        <Card title="За 24 часа" number={orders.lastDay} />
                    </>
                )}
            </div>
        </div>
        <div className="admin-stats__item">
            <h4>Комментарии</h4>
            <div className="row">
                {!comments ? (
                    <Spinner />
                ) : (
                    <>
                        <Card title="Всего" number={comments.all} />
                        <Card title="За месяц" number={comments.lastMonth} />
                        <Card title="За неделю" number={comments.lastWeek} />
                        <Card title="За 24 часа" number={comments.lastDay} />
                    </>
                )}
            </div>
        </div>
    </Section>
);

export default Statistics;
