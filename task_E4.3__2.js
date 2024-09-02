const str = "name"
const obj = {
    name : "Pavel",
    family : "Gerasimov",
}

function getKeyObj (Object, string){
    if (string in Object)
        console.log("true")
    else
        console.log("false")

}
getKeyObj(obj, str)