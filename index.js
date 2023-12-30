function add(){
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum = sum + arguments[i]
    }
    return sum
}

let sum = add(4,5,6,7)
console.log(sum)