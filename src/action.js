export function depoist(amount){
    return {type: "depoist",payload:amount}
}

export function withdrawl(amount){
    return {type: "withdrawl",payload:amount}
}

export function nameupdate(name){
    return {type :"nameupdate",payload:name}
}

export function mobileupdate(mobile){
    return {type: "mobileupdate",payload:mobile}
}

export function reset(){
    return { type:"reset"}
}