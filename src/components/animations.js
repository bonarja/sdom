import React from "react";
import scss from "./animations.module.scss";
export default class Animations extends React.Component {
    render() {
        return (
            <div className={scss.Animations}>
                <p>
                    SDOM integrates the css library of animate.css and adds
                    functions to SDOM to manage animations as promises.
                </p>
                <p>
                    you can add the <b>animated</b> class and the class of the
                    desired animation to animate an element, or you can use the
                    prototype functions to create input or output animations
                    returning promise
                </p>

                <p>The promise returns the same animated sun element.</p>
                <br />
                <h1 className="title">Entrance animations (in)</h1>
                <p>
                    You can use the prototype <b>in</b> function to start an
                    input animation, if the element is hidden it will become
                    visible by entering with the animation.
                </p>
                <p>
                    The function in receives 3 parameters, the last 2 are not
                    necessary and it does not matter the order between these 2.
                </p>
                <ul>
                    <li>Input Animation Name</li>
                    <li>Animation Time (in ms)</li>
                    <li>Final Display Type</li>
                </ul>
                <br />
                <h1 className="title">Exit animation (out)</h1>
                <p>
                    You can use the prototype <b>out</b> function to start an
                    output animation, at the end of the animation the element
                    will be hidden (display none).
                </p>
                <p>The function out receives 2 parameters</p>
                <ul>
                    <li>Output Animation Name</li>
                    <li>Animation Time (in ms)</li>
                </ul>
                <br />
                <h1 className="title">Other animations</h1>
                <p>
                    For other animations that are not input or output
                    animations, use the <b>animate</b> function
                </p>
                <p>The function animate receives 2 parameters</p>
                <ul>
                    <li>Animation Name</li>
                    <li>Animation Time (in ms)</li>
                </ul>
                <br />
                <h1 className="title">Animations List</h1>
                <p>
                    You can check the list of animations from <br />
                    <a
                        href="https://daneden.github.io/animate.css/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        animate.css
                    </a>
                    <br />
                    <br />
                    <iframe
                        title="animate.css"
                        src="https://daneden.github.io/animate.css/"
                    />
                </p>
            </div>
        );
    }
}
