import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/header.scss'
const Header = (props) => {
  const [active,setActive] = useState(1)
  return (
    <header className="header_container">
      <Link to={'../../admin/clients'} onClick = {() => setActive(1)} className={active === 1 ? "header_item_active" : "header_item"}>Клиенты</Link>
      <Link to={'admin/analytics'} onClick={() => setActive(2)} className={active === 2 ? "header_item_active" : "header_item"} >Аналитика</Link>
    </header>
  )
} 

export default Header