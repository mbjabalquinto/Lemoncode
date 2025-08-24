import React from "react"; 
import { Link } from "react-router-dom";
import { appRoutes, routesPrefixes } from "@/core/router"; 
import classes from "./navbar.component.module.css";
import { useLocation } from "react-router-dom";

export const NavbarComponent: React.FC = () => { 
  const { pathname } = useLocation();

  const isMovementPage = pathname.startsWith("/movements/");
  
  console.log("Current pathname:", pathname); // Debugging line to check the current pathname
  return ( 
    <nav className={classes.navbar}> 
      <ul className={classes.list}>
        <li className={pathname.startsWith(routesPrefixes.accountList)? classes.selected: ""}>
          <Link to={appRoutes.accountList}>Mis Cuentas</Link>
        </li>

         {isMovementPage && (
         <li className={pathname.startsWith(routesPrefixes.movements)? classes.selected: ""}>
          <Link to={pathname}>Movimientos</Link>
        </li> 
          )}

        <li className={pathname.startsWith(routesPrefixes.transfer)? classes.selected: ""}> 
          <Link to={appRoutes.transfer}>Transferencias</Link>
        </li>
      </ul> 
    </nav> 
  ); 
}; 