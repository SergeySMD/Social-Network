export const required = value => {
    if (value) return undefined;
    return 'Field is required'
}
export const maxLength = maxLength => value => {
    if (value!==undefined)
    if (!value && value.length>maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
}
export const maxLength1200 = value => {
    if (!value && value.length>maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
}
