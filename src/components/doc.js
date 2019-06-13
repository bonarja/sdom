import React from "react";
import scss from "./doc.module.scss";
import { doc } from "../data/documentation";

export default class Doc extends React.Component {
    render() {
        var load = this.props.load.toLowerCase();

        if (!doc[load]) return <h1 className={scss.title}>Error 404</h1>;

        return (
            <div className={scss.Doc}>
                <h1 class={scss.title}> {this.props.load} </h1>
                <div className={scss.content}>
                    {doc[load].map((x, i) => (
                        <p key={i}>{x}</p>
                    ))}
                </div>
            </div>
        );
    }
}
