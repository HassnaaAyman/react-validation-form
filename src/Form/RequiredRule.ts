export const RequiredRule = (field:string , value:any)=>{ 
    if(!value){
        return field + " "+ 'is required'
    }
    else{
        return value
    }
}

export const MessageRequiredRule =(field:string)=>{
    return field + " "+ 'is required'
}