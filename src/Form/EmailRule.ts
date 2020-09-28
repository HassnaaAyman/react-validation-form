export const EmailRule = (field:string , value:any)=>{
  
    const passess = ()=>{
        const filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
        return filter.test(value)
    }
    const message = ()=>{
        return `should be valid ${field} address`
    }

    return {passess , message}    
}