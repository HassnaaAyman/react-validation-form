export const PasswordRule = (field:string , value:any)=>{
    if(value && value.length >= 8 ){
        return value
    }
    else{
        return `${field} should be more the 8 charactres`
    }
}