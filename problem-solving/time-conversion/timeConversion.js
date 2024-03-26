function timeConversion(s) {
    let part = s.split(':')
    let hou = parseInt(part[0])
    let min = parseInt(part[1])
    let seg = parseInt(part[2])
    
    let peri = s.includes('AM') ? 'AM' : 'PM';

    if (peri === 'PM' && hou !== 12) {
        hou += 12
    } else if (peri === 'AM' && hou === 12) {
        hou = 0
    }

    let res = `${hou < 10 ? '0' : ''}${hou}:${min < 10 ? '0' : ''}${min}:${seg < 10 ? '0' : ''}${seg}`

    return res
}

console.log(timeConversion(`12:45:54AM`))