// screate nested elements
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i am h1 tag"),
//     React.createElement("h2", {}, "i am h2 tag"),
//   ])
// );
// ouput of above code is
{
  /* <div id="parent">
  <div id="child">
    <h1>i am h1 tag</h1>
    <h2>i am h2 tag</h2>
  </div>
</div> */
}
//creates react element and return object
const heading = React.createElement("h1", { id: "heading" }, "I am h1 tag");
// creates root
const root = ReactDOM.createRoot(document.getElementById("root"));
// renders root elemnt to browser
root.render(heading);
