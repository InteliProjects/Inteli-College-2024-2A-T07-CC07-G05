import React, { useState } from "react";
import { FaArrowDown, FaArrowUp, FaHome } from "react-icons/fa";
import { IoMdQrScanner } from "react-icons/io";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "./style";

function MenuMobile(props) {
  const [selectedTab, setSelectedTab] = useState(props.selecionado);
  const menuOptions = [
    {
      icon: <FaHome />,
      label: "Home",
      link: "/home",
    },
    {
      icon: <FaArrowDown />,
      label: "Receber",
      link: "/adicionar-estoque",
    },
    {
      icon: <IoMdQrScanner />,
      label: "Escanear",
      link: "/consultar-estoque",
    },
    {
      icon: <FaArrowUp />,
      label: "Retirar",
      link: "/remover-estoque",
    },
  ];

  return (
    <Menu>
      {menuOptions.map((item, position) => {
        return position == selectedTab ? (
          <MenuItem ativado onClick={() => setSelectedTab(position)}>
            <Link to={item.link}>{item.icon}</Link>
            {/* <span>{item.label}</span> */}
          </MenuItem>
        ) : (
          <MenuItem onClick={() => setSelectedTab(position)}>
            <Link to={item.link}>{item.icon}</Link>
            {/* <span>{item.label}</span> */}
          </MenuItem>
        );
      })}
    </Menu>
  );
}

export default MenuMobile;
