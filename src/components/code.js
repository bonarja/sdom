import React from "react";
import scss from "./code.module.scss";
import "../atom-one-dark.css";
import { examples } from "../data/documentation";
import Highlight from "react-highlight.js";
export default class Code extends React.Component {
    state = {
        code: ""
    };
    draw() {
        var load = this.props.load;
        load = examples[load];

        if (!load) {
            return "";
        }
        return load;
    }

    componentDidUpdate() {
        this.props.animation("#code pre", "slideInLeft", 200);
    }

    render() {
        return (
            <div id="code" className={scss.Code}>
                <Highlight language="javascript">{this.draw()}</Highlight>
            </div>
        );
    }
}
