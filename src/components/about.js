import React from "react";
import scss from "./about.module.scss";
export default class About extends React.Component {
    github = "https://github.com/bonarja/sdom/tree/source/";

    render() {
        return (
            <div className={scss.About}>
                <p>
                    This documentation has been created with react, you can
                    review its code in:
                </p>
                <a className="btn" href={this.github} target="_blank">
                    Github
                </a>
            </div>
        );
    }
}
