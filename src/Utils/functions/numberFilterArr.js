const numberFilterArr = (arr) => {
    return arr.filter((item) => Number.isInteger(item)).map(String)
}

export default numberFilterArr
