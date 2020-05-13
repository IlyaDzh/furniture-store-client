import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
    AiOutlineAppstore,
    AiOutlineExclamationCircle,
    AiOutlineShoppingCart,
    AiOutlineSolution,
    AiOutlineTable
} from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";

import "./Sidebar.scss";

const Sidebar = () => (
    <div className="sidebar-wrapper">
        <div className="sidebar-overlay"></div>
        <div className="sidebar-logo">
            <Link className="sidebar-logo__link" to="/admin">
                ФКМ
            </Link>
        </div>
        <div className="sidebar-content">
            <ul className="sidebar-content__list">
                <li>
                    <NavLink to="/admin/statistics">
                        <AiOutlineAppstore />
                        Статистика
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/about">
                        <AiOutlineExclamationCircle />О нас
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/catalog">
                        <AiOutlineShoppingCart />
                        Каталог
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/news">
                        <AiOutlineSolution />
                        Новости
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/comments">
                        <FaRegComments />
                        Комментарии
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/orders">
                        <AiOutlineTable />
                        Заявки
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
);

export default Sidebar;
