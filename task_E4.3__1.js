const obj = {
    name : "Pavel",
    family : "Gerasimov",
}

function getKeyObj (Object){
    for (let key in Object)
        console.log(key)
}
getKeyObj(obj)