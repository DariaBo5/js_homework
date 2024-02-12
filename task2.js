function pow(num, power) {
    let result = 1
    for (let i = 0; i < power; i++) {
        result *= num
    }

    console.log(result)
}
pow(2, 3)



