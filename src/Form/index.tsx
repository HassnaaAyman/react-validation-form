import React, { useCallback, useState } from 'react';
import { EmailRule } from './EmailRule';
import { PasswordRule } from './PasswordRule';
import {RequiredRule} from './RequiredRule'
import BaseInput from './BaseInput';

const Form =()=>{
    const [data , setData] = useState<any> ({}) 
    // const rules: {}[] = [{ 'email':[RequiredRule , EmailRule] , 'password':[RequiredRule]}]


    const handleInputChange = useCallback((e:any)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
     }, [])




    // const validator=(e:any , data:{}[] , rules:{}[], validate:any)=>{
    //     e.preventDefault();
    // }
    // const onSubmit = React.useCallback((data) => {
        
    // }, [])
    // const handleSubmit = useHandleSubmit(validators, onSubmit(data))

    // base input with prop=function execute, validation attributes
    return(
        <> 
          <form >
              <h1>Login Form...</h1>
              <BaseInput type='text' name='email' rules={{ email:[RequiredRule , EmailRule]}} handleChange={handleInputChange}/>
              <BaseInput type='text' name='password' rules={{ password: [RequiredRule , PasswordRule]}} handleChange={handleInputChange}/>

            {/* <input name='email' type="text" placeholder='email' value={data.email} onChange={handleInputChange}/>
            <input name='password' type="text" placeholder='password'value={data.password} onChange={handleInputChange}/> */}
            <button type='submit'>Submit</button>
          </form>
        </>
    )
}

export default Form ; 