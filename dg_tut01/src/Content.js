import { useState } from 'react';

const Content = () => {
    const[name, setName]=useState('User');
    const[count,setCount]=useState(0);

    const handleNameChange = () => {
        const names=['User','Person','Client'];
        const int=Math.floor(Math.random()*3);
        setName(names[int]);
    }

    const handleClick=()=>{
        setCount(count+2)
    }

    const handleClick2=(name)=>{
        console.log(count)
    }


    return(
        <main>
             <b><p style={{margin:'5px'}} onDoubleClick={handleClick}>Hello {name}!</p></b>
             <p style={{ margin: `0 20%` }}>We have recently finished our beta testing–Version β–08/21/23-09/21/24. We have closed the chatbot for updates and are releasing Version ⍺ on <b>October 15, 2024</b>. Stay tuned!</p>
            {/*  <button onClick={handleNameChange}>Change Name</button>
             <button onClick={handleClick}>Click It</button>
             <button onClick={handleClick2}>Click It</button> */}
        </main>
    )
}


export default Content