export const PasswordRule = (field:string , value:any)=>{
    const passess=()=>{
        return value.length >= 8;
    }

    const message = ()=>{
        return `${field} should be more the 8 charactres`

    }

    return {passess , message}
}