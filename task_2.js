function checkPrime(num) {
    let flag = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                flag = false;
            }
        }
        if (flag) {
            return console.log(`Простое число - ${num}`)
        } else{
            return console.log(`Составное- ${num}`);
        }
    } else if (num > 1000) {
        return console.log(`Данные не верны- ${num}`)
    }
}
checkPrime(0)
checkPrime(1)
checkPrime(5)
checkPrime(6)
checkPrime(1111)