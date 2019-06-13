import React from "react";
import scss from "./home.module.scss";
import { doc } from "../data/documentation";
import Animations from "./animations";
import ScrollAt from "./scrollat";
import Download from "./download";
import ReactSdom from "./react-sdom";
import About from "./about";

export default class Home extends React.Component {
    index = ["Animation", "scrollAt", "Download", "React", "About"];
    components = [
        <Animations />,
        <ScrollAt />,
        <Download />,
        <ReactSdom />,
        <About />
    ];
    componentDidUpdate() {
        this.props.animation("#wrap_home", "slideInRight", 200);
    }

    draw(load) {
        var index = this.index.indexOf(load);
        if (index >= 0) {
            return this.components[index];
        }
        return doc[load].html.map((x, i) => <p key={i}>{x}</p>);
    }

    render() {
        var load = this.props.load;

        if (!doc[load])
            return (
                <h1
                    style={{ background: "white", margin: 0, padding: 30 }}
                    className={scss.title}
                >
                    Error 404
                </h1>
            );

        return (
            <div id="home" className={`${scss.Home} cover`}>
                <div
                    id="wrap_home"
                    className={`${scss.wrap_home} cover slideInRight`}
                >
                    <h1 className={scss.title}>
                        {" "}
                        {doc[load].title || this.props.load}{" "}
                    </h1>
                    <div className={scss.content}>{this.draw(load)}</div>
                </div>
            </div>
        );
    }
}
