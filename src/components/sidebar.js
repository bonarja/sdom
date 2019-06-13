import React from "react";
import { Link, withRouter } from "react-router-dom";
import scss from "./sidebar.module.scss";
import { options } from "../data/documentation";

class Sidebar extends React.Component {
    sidebar = React.createRef();
    menu = {
        general: ["Info", "Ajax", "Animation", "React", "Download", "About"],
        functions: options
    };

    get_location() {
        // return the location in the url
        var url = this.props.location.pathname;
        url = url.split("/");
        if (url[1]) return url[1];
        return false;
    }

    state = {
        active: this.get_location()
    };

    select = n => {
        this.setState({ active: n });
    };

    componentDidMount() {
        // scroll at location in sidebar
        var el = this.sidebar.current.querySelector(
            `a[href="/${this.state.active}"]`
        );
        if (!el) return;
        el.scrollIntoView({ block: "end" });
    }

    componentDidUpdate() {
        var location = this.get_location();
        this.state.active !== location && this.setState({ active: location });
    }

    render() {
        return (
            <div id="sidebar" className={scss.Sidebar} ref={this.sidebar}>
                <div className={scss.wrap_sidebar}>
                    {Object.keys(this.menu).map((x, i) => (
                        <div className={scss.section} key={i}>
                            <div className={scss.divider}>
                                <p>{x}</p>
                            </div>
                            <Items
                                list={this.menu[x]}
                                select={this.select}
                                active={this.state.active}
                                toggle_menu={this.props.toggle_menu}
                                menu={this.props.menu}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
const Items = props => (
    <div>
        {props.list.map((x, i) => (
            <Link
                key={i}
                to={`/${x}`}
                onClick={() => {
                    props.select(i);
                    !props.menu && props.toggle_menu();
                }}
                className={`${scss.item} ${props.active === x && scss.active}`}
            >
                <div />
                <p>{x}</p>
            </Link>
        ))}
    </div>
);
export default withRouter(Sidebar);
