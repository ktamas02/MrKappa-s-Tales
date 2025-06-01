import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../css/Menu.css";
import menuItems from "../utility/menuPages";
import masterMenuItems from "../utility/masterMenuPages";
import avventurieroMenuItems from "../utility/avventurieroMenuPages";

const Menu = () => {
  const [open, setOpen] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  let items = menuItems;
  if (location.pathname.startsWith("/master")) {
    items = masterMenuItems;
  } else if (location.pathname.startsWith("/avventuriero")) {
    items = avventurieroMenuItems;
  }

  const toggle = (label) => {
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleMobileToggle = () => setMobileOpen((prev) => !prev);
  const handleCloseMobile = () => setMobileOpen(false);

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
              onClick={handleCloseMobile}
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
    <>
      {!mobileOpen && (
        <button
          className="sidebar-toggle"
          aria-label="Apri menu"
          onClick={handleMobileToggle}
        >
          ☰
        </button>
      )}
      <div className={`sidebar${mobileOpen ? " open" : ""}`}>
        <div className="sidebar-title">
          MrKappa&apos;s Tales
          {mobileOpen && (
            <button
              className="sidebar-close"
              aria-label="Chiudi menu"
              onClick={handleCloseMobile}
            >
              ✕
            </button>
          )}
        </div>
        <nav>{renderMenuItems(items)}</nav>
      </div>
      {mobileOpen && (
        <div className="sidebar-backdrop" onClick={handleCloseMobile}></div>
      )}
    </>
  );
};

export default Menu;
