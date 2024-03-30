import React, { useCallback, useEffect, useRef, useState } from 'react'

const Passwordgenrater = () => {
    let [length,setLength]=useState(8)
    let[number,setNumber]=useState(false)
    let[character,setCharacter]=useState(false)
    let[pass,setPass]=useState("")
    let password=useRef(null);
    let paswordgenrate=useCallback(()=>{
        let pass="";
        let str="ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        
        if(number)str+="0123456789";
        if(character)str+="!#%^&*~`<>";
       
        for(let i=1;i<length;i++){
        let char= Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char)

        }
        setPass(pass)
    },[length,number,character,pass])
    
    // for copy code
    let copyHandler=useCallback(()=>{
        password.current.select()
        window.navigator.clipboard.writeText(pass)
    },[pass])
    useEffect(()=>{
        paswordgenrate();
    },[length,number,character])
  return (
    <div className='bg-slate-600 rounded-3xl w-[600px] h-[300px] flex flex-col justify-center items-center gap-10 shadow-2xl'>
        <h1 className='font-extrabold font-serif text-[25px] underline shadow-xl'>Password Generater</h1>
        <div className='rounded-[20px] w-[470px] shadow-xl z-30'><input type="text" value={pass} className='w-[400px] h-[20px] rounded-s-[20px] outline-none p-6'ref={password}  readOnly/>
        <button className='bg-blue-900 w-[70px] h-[51px] rounded-e-[20px]  font-bold' onClick={copyHandler}>Copy</button>
        </div>
        <div className=' w-[430px]'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer ' onChange={(e)=>{setLength(e.target.value)}}/>
            <label className='font-bold font-serif ps-4'>Length : { length } </label>
            <input type="checkbox" className='w-4 h-4 ps-4' onChange={()=>{setNumber(!number)}}/>
            <label className='font-bold font-serif ' > Number</label>
            <input type="checkbox" className='w-4 h-4 ps-4' onChange={()=>{setCharacter(!character)}} />
            <label className='font-bold font-serif '>Charcter</label>
        </div>
    </div>
  )
}

export default Passwordgenrater;



