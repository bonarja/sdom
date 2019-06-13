import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./app.main.scss";
import "./app.scss";
import Header from "./header";
import Sidebar from "./sidebar";
import Code from "./code";
import Home from "./home";

class App extends React.Component {
    content = React.createRef();
    app = React.createRef();
    menu = false; // menu mobile is active ?

    toggle_menu = () => {
        var val = (this.menu = !this.menu);
        if (val) {
            this.app.current.classList.add("open_menu");
            this.content.current.addEventListener(
                "click",
                this.toggle_menu,
                false
            );
            window.addEventListener("resize", this.toggle_menu, false);
        } else {
            this.app.current.classList.remove("open_menu");
            this.content.current.removeEventListener(
                "click",
                this.toggle_menu,
                false
            );
            window.removeEventListener("resize", this.toggle_menu, false);
        }
    };

    animation = (query, name, time) => {
        return new Promise(done => {
            var el = this.content.current.querySelector(query);
            if (!el) return;
            el.style.animationDuration = time + "ms";
            el.classList.add(name);
            setTimeout(() => {
                el.classList.remove(name);
                done();
            }, time + 5);
        });
    };

    show(load) {
        return (
            <div className="content cover">
                <Home load={load} animation={this.animation} />
                <Code load={load} animation={this.animation} />
            </div>
        );
    }

    // open_menu
    render() {
        return (
            <div id="app" className="App cover" ref={this.app}>
                <Router>
                    <Route
                        path="/"
                        exact
                        render={({ history }) => {
                            history.push("/Info");
                        }}
                    />
                    <Header toggle_menu={this.toggle_menu} />
                    <Sidebar toggle_menu={this.toggle_menu} menu={this.menu} />
                    <div className="cover" ref={this.content}>
                        <Route
                            path="/:load"
                            render={props => this.show(props.match.params.load)}
                        />
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;
