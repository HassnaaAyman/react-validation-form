
import React , {useCallback, useState} from 'react'
import {useValidator} from "./UseValidator"

interface Props{
    rules : any,
    handleChange?:(e:any)=>void;
    type:string;
    name:string;
}

const BaseInput:React.FC<Props> = ({rules , handleChange , type , name}):JSX.Element=> {
    const [value, setValue] = useState("")
    const [passess, errors] = useValidator(rules, value)
    console.log(passess)
    const handleInputChange = useCallback((e: any) => {
        if(handleChange) {
            handleChange(e)
        }
        
        setValue(e.target.value)
    }, [])
    return (
        <>
        <input onChange={handleInputChange} 
            value={value}
             type={type}
             name={name}
            />
        <span>{errors ? errors[0]:  ''}</span>
</>
    )
}

export default BaseInput ;