import React from "react";

import { Section } from "admin/components";
import { Card } from "../";
import "./Statistics.scss";

const Statistics = () => (
    <Section title="Статистика" className="admin-stats">
        <div className="admin-stats__item">
            <h4>Пользователи</h4>
            <div className="row">
                <Card title="Всего" number={6} />
                <Card title="За неделю" number={4} />
                <Card title="За 24 часа" number={1} />
            </div>
        </div>
        <div className="admin-stats__item">
            <h4>Заказы</h4>
            <div className="row">
                <Card title="Всего" number={4} />
                <Card title="За неделю" number={4} />
                <Card title="За 24 часа" number={2} />
            </div>
        </div>
        <div className="admin-stats__item">
            <h4>Комментарии</h4>
            <div className="row">
                <Card title="Всего" number={2} />
                <Card title="За неделю" number={2} />
                <Card title="За 24 часа" number={1} />
            </div>
        </div>
    </Section>
);

export default Statistics;
