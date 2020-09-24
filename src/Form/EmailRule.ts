export const EmailRule = (field:string , value:any)=>{
    const filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
    if(!filter.test(value)){
        return `should be valid ${field} address`
    }
    else{
        return value
    }
}