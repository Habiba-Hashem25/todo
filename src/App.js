import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [x, setx]= useState([])
  const inputRef = useRef()
  const add = () =>
  {
    const value = inputRef.current.value
    const newData ={completed : false, value}
    // console.log (value)
    setx([...x , newData])
    inputRef.current.value =""
  }

const itemDone = (index) =>  {
  const newx =[...x]
  // const newx =x.slice()
  x[index].completed = !x[index].completed
  setx(newx)
}
const toDelete = (index) =>  {
  const newx =[...x]
  newx.splice(index, 1)
  setx(newx)  
}
// console.log(x)

  return (
    <div className="App">
     <h2>To Do List</h2>
     <ul>
      {
        // x.map((item => {
        //   return <li onClick={ () => itemDone(index)}>{item.value}</li>
        // }))
        x.map(({value, completed}, index) => {
          return <div className='div1'>
            <li className={completed? "diffstyle" : ""} onClick={ () => itemDone(index)}>{value}</li>
          <span onClick={ () => toDelete (index)}>X</span>
          </div>
        })
      }
     </ul>
     <input ref={inputRef} placeholder='Enter New Task' required />
     <button onClick={add}>Add</button>
    </div>
  );
}

export default App;
