const heading = React.createElement(
  "h1",
  { id: "heading" }, //attributes
  "Hello World from React!" //children
);

// create element is a part of core react so it comes from 1st cdn link.
// react just created h1 tag in it, but we need to render it somewhere there comes root. root is the place where we will render this tag created by react.
// here empty object is used for giving attributes to tags(h1). attributes means if we want to give id to that tag or className we give through this {}.
// like this, React.createElement("h1", {id: 'heading'}, "Hello World from React!"); => now our h1 tag will have an id names as 'heading'.
// we can also give random things also => React.createElement("h1", {id: 'heading', xyz: 'abc'}, "Hello World from React!");
// now out h1 tag will look like in Element console like this => <h1 id='heading' xyz='abc'> Hello World from React! </h1>.

//  WHAT IS React.createElement? WHAT DOES IT GIVE AS OUTPUT ?
// React.createElement doesn't give a html tag, it actually gives us an object. you can console it can see. It is actually an object as it is just createElement not html.
// so in above const heading we will get an object as it is just an javaScript object nothing else. IT IS NOT AN HTML TAG.

// console.log(heading);

//THIS IS THE HEADING WHEN CONSOLED

// {
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "id": "heading",
//         "children": "Hello World from React!"
//     },
//     "_owner": null,
//     "_store": {}
// }

// if see carefully it is just an object. which has props with children with the text we gave and id as heading which were the attributes we provided in the object.

// react need a root where it can do render/manipulate DOM, so we need to create a root.
const root = ReactDOM.createRoot(document.getElementById("root")); // create root and rendering something inside it, its the job of react dom so it comes from 2nd cdn link. Thats y we used ReactDOM rather than React

root.render(heading);
// this render is responsible for converting heading object to h1 tag and put up to DOM.
// IMAGINE IF SOMETHING IS ALREADY PRESENT IN DIV WITH ID ROOT WHERE OUR ABOVE RENDER HAS TO RENDER THE ELEMENT WE MADE WHAT WILL HAPPEN.
// ALREADY WRITTEN CODE IN DIV WITH ID ROOT WILL BE REPLACED BY OUR NEW RENDER ELEMENT. IT IS NOT APPENDED IT IS REPLACED

// TASK

/*
 if we want to make nested elements, like this
 <div id='parent'>
    <div id='child'>
        <h1>i m h1 tag</h1>
    </div>
 </div>
 

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I m h1 tag")
  )
);


if u want to add sibling then, like 
 <div id='parent'>
    <div id='child'>
        <h1>i m h1 tag</h1>
        <h2>i m h2 tag</h2>
    </div>
 </div>

 in createElement the first argument is tag we want, second is object that is attributes and the third is children, we can pass 1 child also and for multiple
 children we will pass an array of children

 const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [ 
        React.createElement("h1", {}, "I m h1 tag"),
        React.createElement("h2", {}, "I m h2 tag") 
    ]
  )
);


now if we want this,

 <div id='parent'>
    <div id='child'>
        <h1>i m h1 tag</h1>
        <h2>i m h2 tag</h2>
    </div>
    <div id='child2'>
        <h1>i m h1 tag</h1>
        <h2>i m h2 tag</h2>
    </div>
 </div>


 const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "I m h1 tag"),
      React.createElement("h2", {}, "I m h2 tag"),
    ],
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I m h1 tag"),
      React.createElement("h2", {}, "I m h2 tag"),
    ])
  ),
]);

 
 */
