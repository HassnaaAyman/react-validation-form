import React, { useState } from 'react';
import { EmailRule } from './EmailRule';
import { PasswordRule } from './PasswordRule';
import {RequiredRule} from './RequiredRule'

const Form =()=>{
    const [data , setData] = useState<any> ({}) 
    const rules: {}[] = [{ 'email':[RequiredRule , EmailRule] , 'password':[RequiredRule , PasswordRule]}]
    const [errors , setErrors] = useState<string[]>([])

    const errorss: any= []

    const handleInputChange = (e:any)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
     }

    const validate = ()=>{
            rules.forEach(rule => {
                for (const [key , value] of Object.entries(rule)) {
                     validateRule(key , value)
                }    
            }); 
    }


    const validateRule = (field:string , rule:any)=>{ 
        rule.forEach((ruleFunc:any) => {      
            console.log(ruleFunc(field , getFieldValue(field))); 
            // errorss.push({
            //     field: ruleFunc(field , getFieldValue(field))
            // })
            // console.log(errorss , 'errorss');

            return ruleFunc(field , getFieldValue(field))
        });    
    }

    const getFieldValue = (field:string)=>{
       return data && data[field] ? data[field] : null
     }

    const validator=(data:{}[] , rules:{}[], validate:any)=>{
        //  console.log('data' , data);
        //  console.log('rules' , rules);
        //  console.log('validate' , validate);
        // setErrors(errorss)
        // return errorss
    }
    



   
    validator(data , rules , validate())
    return(
        <> 
          <form>
              <h1>Login Form...</h1>
            <input name='email' type="text" placeholder='email' value={data.email} onChange={handleInputChange}/>
            <input name='password' type="text" placeholder='password'value={data.password} onChange={handleInputChange}/>
            <button type='submit'>Submit</button>
          </form>
        </>
    )
}

export default Form ; 