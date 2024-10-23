import { Input1 }  from "./Input";
import { useEffect, useState } from 'react';
import { itemI } from "./Inerfaces";

export const LocalStorage =() => {
  
const [storageData, setStorageData] = useState<itemI[]>([]);

useEffect(() => {
  if (localStorage.getItem("todos-save")) {const savedTodos = localStorage.getItem("todos-save"); //Get data from localstorage
    if (savedTodos !== null) {setStorageData(JSON.parse(savedTodos));
       
    }
  }
}, []);

return (      
        <div>
          {<Input1 todos={storageData}/>}
        </div>
       )
} 