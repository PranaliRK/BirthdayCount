
import { useState } from "react"

import data1 from './card'

const App=()=>{
  const[data,setdata]=useState(data1)
 
  return(
    <div className='Profile'>
      <main className='Card'>
      <p>Today Birthday {data.length} 😀</p>
      {data && data.map((x)=>{
        return(
          <section key={x.name} className='cont'>
            <img src={x.image}  ></img>
            <div className='sub-cont'>
              <label>{x.name}</label>
              <p>{x.age}</p>
            </div>
          </section>
        );
      })}
      <button onClick={()=>setdata([])}>Clear</button>
      </main>
    </div>
  ) 
}
export default App