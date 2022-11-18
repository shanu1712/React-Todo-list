//import "./styles.css";
//import Create from "./components/Create";
import React from "react";
import { useState } from "react";
import App from "./App.css";
import moment from "moment";
export default function Todo() {
  //////state//
  const [task, settask] = useState({
    name: "",
    date: "",
    completed: "false"
  });
  const [items, setitems] = useState([]);
  /////
  const input1 = (event) => {
    settask({ ...task, [event.target.name]: event.target.value });
  };
  //////
  let add1 = () => {
    console.log(task);
    items.push(task);
    setitems([...items]);
    settask({
      name: "",
      date: ""
      // completed:"false"
    });
  };
  //remove item//
  const deleteitem = (index) => {
    console.log("delete item clicked", index);
    items.splice(index, 1);
    setitems([...items]);
  };

  ////edit data//
  const editdata = (ele) => {
    console.log(ele);
    settask({
      name: ele.name,
      date: ele.date,
      completed: "false"
    });
  };
  /////checkboxeditdata//
  const checkboxeditdata = (index) => {
    let item = items[index];
    item.completed = !item.completed;
    items[index] = item;
    setitems([...items]);
  };
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "orange" }}>Todo List</h1>
      <input
        id="input"
        type="text"
        value={task.name}
        name={"name"}
        onChange={input1}
        placeholder="Add an Item"
      />
      <input
        id="input"
        type="date"
        value={task.date}
        name={"date"}
        onChange={input1}
      />

      <button className="click" onClick={add1}>
        Add
      </button>
      <br />

      {items.map((ele, i) => {
        return (
          <li
            key={i}
            style={ele.completed ? { textDecoration: "line-through" } : {}}
          >
            {ele.name}
            {ele.date}
            {/* <button>Edit</button> */}
            <button onClick={() => deleteitem(i)}>Delete</button>
            <button onClick={() => editdata(ele)}>Edit</button>
            <input
              type="checkbox"
              onChange={() => checkboxeditdata(i)}
              key={i}
            />
          </li>
        );
        //  <button>Edit</button>
        ///// checkbox//
      })}
    </div>
  );
}
