import React from "react";
import "./sdom.modules.scss";

export default function Sdom() {
    var title = "SDOM".split("");

    return (
        <div>
            <p className="sdom">
                {title.map((x, i) => (
                    <span key={i}>{x}</span>
                ))}
            </p>
        </div>
    );
}
