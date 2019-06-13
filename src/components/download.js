import React from "react";
import scss from "./download.module.scss";
export default class Download extends React.Component {
    url_compresed = "https://cdn.jsdelivr.net/gh/bonarja/sdom/sdom.min.js";
    url_developer = "https://cdn.jsdelivr.net/gh/bonarja/sdom/sdom.js";
    render() {
        return (
            <div className={scss.Download}>
                <p>Download sdom by:</p>
                <br />
                <h2 className="title">Compresed version (min)</h2>
                <a
                    className={`btn ${scss.compresed}`}
                    href={this.url_compresed}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download
                </a>
                <br />
                <br />
                <h2 className="title">Uncompresed version (developer)</h2>
                <a
                    className={`btn ${scss.uncompresed}`}
                    href={this.url_developer}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download
                </a>
            </div>
        );
    }
}
