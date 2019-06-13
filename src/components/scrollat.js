import React from "react";
import scss from "./scrollat.module.scss";
export default class ScrollAt extends React.Component {
    render() {
        return (
            <div className={scss.ScrollAt}>
                <p>Performs a scrollIntoView to the selected element.</p>
                <p>scrollAt ​​can receive the following optional options</p>
                <ul>
                    <li>
                        <b>behavior</b> ("auto" | "instant" | "smooth")
                    </li>
                    <li>
                        <b>block</b> ("start" | "end")
                    </li>
                </ul>
                <br />
                <p>Default options is "start" and "smooth".</p>
            </div>
        );
    }
}
