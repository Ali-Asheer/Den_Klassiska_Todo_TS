import { useState, useEffect } from "react";
import { itemI } from "./Inerfaces";

export const TodoList = ({ todoss }: { todoss: itemI[] }) => {
 
const [todosi, setTodosi] = useState<itemI[]>(todoss);
useEffect(() => {setTodosi(todosi)}, []);

const handeleToggle = (id: number) => {    //check the checkbox
   
setTodosi(   
      todoss.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
     
        return todo;
      }) )
      
localStorage.setItem("todos-save", JSON.stringify(todoss)); // send to Localstorage when check the checkbox
   
};


  return (
    <div >
      {todoss.map((todo) => (
        <div key={todo.id}>
          <input className="main-container" // checkbox button
                name="checktext"
                type="checkbox"
                onClick={() => handeleToggle(todo.id)}
                defaultChecked={todo.checked}
                                
              />
          <span
            style={{ textDecoration: todo.checked ? "line-through" : "none" }}  // Put a "line-through" if it checked
          >
          {todo.text}
          </span>
          <hr/>
        </div>
      ))}
    </div>
  );
};
