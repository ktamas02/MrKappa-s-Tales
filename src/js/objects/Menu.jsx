import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/Menu.css";
import menuItems from "./menuPages";

const Menu = () => {
  const [open, setOpen] = useState({});

  const toggle = (label) => {
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const renderMenuItems = (items, level = 0) => (
    <ul className={level === 0 ? "menu" : "submenu"}>
      {items.map((item) => (
        <li key={item.label}>
          {item.children ? (
            <>
              <button
                className="menu-btn"
                onClick={() => toggle(item.label)}
                style={{ paddingLeft: `${1.5 + level * 1.2}rem` }}
              >
                {open[item.label] ? "▼" : "▶"}
                {item.icon && <span className="menu-icon">{item.icon}</span>}
                {item.label}
              </button>
              {open[item.label] && renderMenuItems(item.children, level + 1)}
            </>
          ) : (
            <NavLink
              to={item.path}
              className="menu-link"
              activeclassname="active"
              style={{ paddingLeft: `${2 + level * 1.2}rem` }}
            >
              {item.icon && <span className="menu-icon">{item.icon}</span>}
              {item.label}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-title">MrKappa&apos;s Tales</div>
      <nav>{renderMenuItems(menuItems)}</nav>
    </div>
  );
};

export default Menu;
