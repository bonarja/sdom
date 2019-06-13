import React from "react";
import scss from "./react-sdom.module.scss";
import { Link } from "react-router-dom";
export default class ReactSdom extends React.Component {
    codes = [
        "npm install react-sdom --save".split(" "),
        'import { Get, Post } from "react-sdom"'.split(" ")
    ];
    npm = "https://www.npmjs.com/package/react-sdom";
    render() {
        return (
            <div className={scss.ReactSdom}>
                <p>sdom includes compatibility to react by:</p>
                <p className={scss.code} num={1}>
                    {this.codes[0].map((x, i) => (
                        <span key={i}>{x} </span>
                    ))}
                </p>
                <br />
                <a
                    className={`btn ${scss.npm}`}
                    href={this.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View in NPM
                </a>
                <br />
                <br />
                <p>
                    Sdom in react returns an object that includes the current
                    reference and all sdom functions that will work on it.
                </p>
                <h1 className="title">Ajax request (POST/GET)</h1>
                <p>
                    To use the get or post functions you must import them from
                    react-sdom:
                </p>
                <p className={scss.code} num={2}>
                    {this.codes[1].map((x, i) => (
                        <span key={i}>{x} </span>
                    ))}
                </p>
                <br />
                <Link className={`btn ${scss.example}`} to="Ajax">
                    Ajax Example
                </Link>
            </div>
        );
    }
}
