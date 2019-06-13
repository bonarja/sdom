import React from "react";
import scss from "./header.module.scss";
import Sdom from "./sdom";
import icon_menu from "../icons/menu.svg";

export default class Header extends React.Component {
    render() {
        return (
            <div id="header" className={scss.Header}>
                <div id="menu" className={scss.menu}>
                    <img
                        alt="icon menu"
                        className={scss.icon}
                        src={icon_menu}
                        onClick={this.props.toggle_menu}
                    />
                    <div className={scss.divider} />
                </div>
                <Sdom />
                <div className={scss.divider} />
            </div>
        );
    }
}
