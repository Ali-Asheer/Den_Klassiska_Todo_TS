import { useState, useEffect } from "react";
import { itemI } from "./Inerfaces";
import { TodoList } from "./TodoList";
import './input.css'


export const Input1 = ({ todos }: { todos: itemI[] }) => {
    
  const [todoss, setTodoss] = useState<itemI[]>(todos);
  const [ff, setFf] = useState<Number>(1);
  const [inputt, setInputt] = useState<string>("");
   
   useEffect(() => {
        setTodoss(todos);
        setFf(2);}, [ff]);
      
  useEffect(() => { if (todoss.length > 0){

    localStorage.setItem("todos-save", JSON.stringify(todoss));} // send data to Localstorage when ADD button is click.
  }, [inputt]);
 
  const handeleClick = () => { // Input task to Array
      if (inputt !== "") {
      const newTodo: itemI = { id: Math.random(), text: inputt, checked: false };
      setTodoss([...todoss, newTodo]);
      setInputt("");
    }
  };


  return (
    <div className="inputBox">                           
      <div className="inputBox2">
      <input type="text"  placeholder="Add new task"  onChange={(e) => setInputt(e.target.value)} value={inputt} />
      <input type="submit" value="Add" onClick={handeleClick}/>
      </div>
      {<TodoList todoss={todoss} />} 
      
    </div>
  );
};
