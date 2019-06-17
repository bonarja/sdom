export const options = [
    "addClass",
    "append",
    "attr",
    "click",
    "css",
    "find",
    "findOne",
    "focus",
    "hasClass",
    "height",
    "html",
    "on",
    "position",
    "prev",
    "prepend",
    "remove",
    "removeClass",
    "scrollAt",
    "toggleClass",
    "val",
    "visible",
    "width"
];

export const doc = {
    Animation: {},
    React: {},
    Info: {
        title: "Simple DOM (SDOM)",
        html: [
            "SDOM Is an extension of the JavaScript NodeList and Element prototype, it adds extra functions to work on the entire result list of a querySelectorAll.",

            "The SDOM functions simplify the task of manipulating the html DOM and are similar to the most common functions of the old jQuery, all this in a simpler and lighter script summarizing only the essential and more useful using more current and compatible javascript properties.",

            "SDOM includes a function _ that returns a document.querySelectorAll to decrease the code scrambling."
        ]
    },
    Ajax: {
        title: "Ajax request (POST/GET)",
        html: [
            "SDOM incorporates functions for asyncronous requests _.get and _.post by promises, these will intend to give a response json."
        ]
    },
    addClass: {
        html: [
            "Allows you to add classes to an element, you can add multiple classes separating names with spaces.",
            "return this"
        ]
    },
    append: {
        html: ["Add node or html to the end of an element.", "return this"]
    },
    attr: {
        html: [
            "Add or return attributes.",
            "returns this when attributes are assigned."
        ]
    },
    click: {
        html: ["Add or call the event click.", "return this"]
    },
    css: {
        html: ["Add or return css property.", "return this"]
    },
    find: {
        html: [
            "Performs another SDOM querySelectorALL on the first element of the current SDOM."
        ]
    },
    findOne: {
        html: ["The same as find, but returns only the first element found."]
    },
    focus: {
        html: [
            "Receives 2 functions, onFocusIn and onFocusOut that execute respectively."
        ]
    },
    hasClass: {
        html: ["Validates if the first element has a class."]
    },
    height: {
        html: ["Returns or assigns element height in px."]
    },
    html: {
        html: [
            "Returns or assigns the element's html.",
            "returns this when html are assigned."
        ]
    },
    on: {
        html: ["Add event on.", "return this"]
    },
    parent: {
        html: ["Returns the parent element of the current."]
    },
    position: {
        html: ["Returns the object getBoundingClientRect."]
    },
    prev: {
        html: ["Returns the previous element to the current."]
    },
    prepend: {
        html: ["Add node or html to the start of an element.", "return this"]
    },
    remove: {
        html: [
            "Removes all the elements in the list of the html dom.",
            "return this"
        ]
    },
    removeClass: {
        html: ["Delete a class or a set of classes", "return this"]
    },
    toggleClass: {
        html: ["Add or delete the selected class in a toggle.", "return this"]
    },
    val: {
        html: ["Returns or assigns the value of an element."]
    },
    visible: {
        html: [
            "Assigns the states of visible, true or false for an element, or returns the state of the same."
        ]
    },
    width: {
        html: ["Returns or assigns the element width in px."]
    },
    scrollAt: {},
    Download: {},
    About: {}
};

export const examples = {
    Info: `
        // all concurrences 
        var list = document.querySelectorAll(".item");

        list.addClass("active").css({
            background: 'purple',
            color: 'white'
        });


        // first concurrence
        var element = document.querySelector(".item");

        element.addClass("active").css({
            background: 'purple',
            color: 'white'
        });


        // ------------ OR ------------
        // _ function = document.querySelectorAll
        // (existing does not need to declare it)


        // all concurrences 
        _(".item").addClass("active").css({
            background: 'purple',
            color: 'white'
        });

        // first concurrence
        _(".item")[0].addClass("active").css({
            background: 'purple',
            color: 'white'
        });
    `,
    Ajax: `
        // get request

        _.get('https://randomuser.me/api/')
        .then(result => {
            console.log(result)
        })

        // post request sending data

        _.post('https://url.com/yourapi/', {user: 12})
        .then(result => {
            console.log(result)
        })

        // in React ---------------------

        import {Get, Post} from "react-sdom";

        Get('https://randomuser.me/api/')
        .then(result => {
            console.log(result)
        })

        Post('https://url.com/yourapi/', {user: 12})
        .then(result => {
            console.log(result)
        })
    `,
    addClass: `
        var el = _('.item')

        el.addClass("active");
        el.addClass("active animation");
    `,
    append: `
        var el = _('.item')[0]

        el.append("<p> hello </p>");

        //  --------------------------

        var div = document.createElement("div");
        el.addClass(div);
    `,
    attr: `
        // get num attribute 
        // in first element in NodeList

        var num = _(".item").attr("num");

        // set attribute in current index 
        // in all NodeList .items

        _(".item").forEach((el, index) => {
            el.attr("num", index);
        });
    `,
    click: `
        // set click event
        _(".item").click((e) => {
            console.log(e.target);
        })

        // call event click in
        // first element
        _(".item")[0].click();
    `,
    css: `
        var items = _(".item");

        items.css('color', 'coral');

        // multi property
        el.css({
            color:'white',
            background: 'coral'
        });

        // get css property
        var color = el.css("color");
    `,
    find: `
        // get all p in the all .item
        var list = _('.item').find('p');

        // -------------------------

        list.foEach(p => {
            console.log(p)
        })
    `,
    findOne: `
        // get first p in the .item
        var p = _('.item').findOne('p');
    `,
    focus: `
        var el = _(".item");


        el.focus(onFocusIn=>{
            console.log("in");
        }, onFocusOut=>{
            console.log("out");
        });
    `,
    hasClass: `
        var el = _(".item");

        if (el.hasClass("active")) {
            console.log("is active");
        }
    `,
    height: `
        var el = _(".item");

        var height = el.height();
    `,
    html: `
        // get innerHTML 
        // in first element in NodeList

        var el = _(".item");
        var html = el.html();

        // set html in first element
        el[0].html("<p> Hello </p>");
    `,
    on: `
        var el = _(".item");
        
        el.on('keypress', () => {
            console.log("click in item");
        })
    `,
    parent: `
        var el = _(".item");
        var parent = el.parent();
        parent.html("<p> update parent </p>");
    `,
    position: `
        var el = _(".item");

        var position = el.position();
    `,
    prev: `
        var el = _(".item");

        var prev = el.prev();
    `,
    prepend: `
        var el = _(".item");

        the.prepend('<h1> hi </h1>')
    `,
    next: `
        var el = _('.item')[0]

        el.append("<p> hello </p>");

        //  --------------------------

        var div = document.createElement("div");
        el.addClass(div);
    `,
    remove: `
        // remove all elements with class .item
        _('.item').remove();
    `,
    removeClass: `
        var el = _('.item.active');
        el.removeClass("active");

        // or 

        el.removeClass("class1 class2");
    `,
    toggleClass: `
        var el = _('.item');

        el.toggleClass("active");
    `,
    val: `

        // return value of first element

        var el = _('input')[0];
        var value el.value('hi')

        // set value (clear)

        el.val("");
    `,
    visible: `
        var el = _('.item');

        // set display block
        el.visible(true);

        // set display none
        el.visible(false);

        // set other display
        el.visible("flex");

        // return display
        var display = el.visible();
    `,
    width: `
        var el = _(".item");
        
        var height = el.height();
    `,
    Animation: `
        // Animation in

        _(".item").in(
            "bounceIn", 
            700, // Default is 800 (optional)
            flex // Default is block (optional)
        ).then(el => {
            console.log("Completed animation");
        });

        // Animation out

        _(".item").out(
            "bounceOut", 
            700, // Default is 800 (optional)
        ).then(el => {
            console.log("Completed animation");
        });

        // Other Animation

        _(".item").animate(
            "jello", 
            700, // Default is 800 (optional)
        ).then(el => {
            console.log("Completed animation");
        });
    `,
    scrollAt: `
        // Scroll at .section1 in
        // the .content

        var el = (".content .section1");

        el.scrollAt({
            behavior: "smooth", // default is "smooth"
            block: "start" // default is "start"
        });
    
    `,
    Download: `
        // Add script in your html
    `,
    React: `
        import React from "react";
        import { Sdom } from "react-sdom";

        class Home extends React.Component {

            title = Sdom(); // get Sdom ref
            
            componentDidMount() {
                // use Sdom ref
                this.title.css({
                    color: "coral",
                    textTransform: "uppercase"

                }).in("bounceIn", 700)
            }

            render() {
                return (
                    <div>
                        <h1 ref={this.title}> 
                            hello 
                        </h1>
                    </div>
                )
            }
        }
        export default Home;
    `,
    About: `
        // Code highlight by:
        // https://npmjs.com/package/react-highlight-js

        import Highlight from "react-highlight.js";


        // BONARJA
    `
};
