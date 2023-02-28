let obj = ["Webbrain Academy"]

function namNo(obj) {
    let re = {}
    for (let i = 0; i < obj.length; i++) {
        for (re of obj) {
        re[i] = re[i].i++
    }
        
    }
}
console.log(namNo());
namNo()