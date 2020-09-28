export const RequiredRule = (field: any, value: string)=>{ 
    const passess = ()=>{
        return !!value
    }

    const message = ()=>{
            return field + " "+ 'is required'
    }

    return {passess , message}
}
