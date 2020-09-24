import React, { useState } from 'react';
import {RequiredRule} from './RequiredRule'

const Form =()=>{
    const [email , setEmail] = useState<string>('')
    const [password , setPassword] = useState<string>('')

    const data:any = {"email":' ' , 'password':'123456'} 
    const rules: {}[] = [{ 'email':[RequiredRule] , 'password':[RequiredRule]}]
    const [msg , setMessage] = useState<any>(null)
    // const passess = (field:any , value:any)=>{
    //       return !value.match(/^\S+$/)
    // }

    // const message = (field:any)=>{
    //     return field + " "+ 'is required'
    // }

    const validate = ()=>{
            rules.forEach(rule => {
                for (const [key , value] of Object.entries(rule)) {
                     validateRule(key , value)
                }    
            });
    }

    const validateRule = (field:string , rule:any)=>{ 
        console.log(rule , 'rule');
        
        getFieldValue(field)  
    }

    const getFieldValue = (field:string)=>{
       return data[field] ? data[field] : null
     }

    const validator=(data:{}[] , rules:{}[], validate:any)=>{
         console.log('data' , data);
         console.log('rules' , rules);
         console.log('validate' , validate);


    }
    
    // const handleLogin=()=>{
    // //   validator()
    // }

    validator(data , rules , validate())
    return(
        <> 
          <form>
              <h1>Login Form...</h1>
            <input name='email' type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input name='password' type="text" placeholder='password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Submit</button>
          </form>
        </>
    )
}

export default Form ; 