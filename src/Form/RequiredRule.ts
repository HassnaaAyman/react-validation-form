export const RequiredRule = (field:string , value:string)=>{
    if(value.length !== 0){
        return field + " "+ 'is required'
    }
    else{
        return value
    }
}