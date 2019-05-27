let date = (time) => {
    let dataTime = "";
    let data = new Date()
    data.setTime(time)
    let year = data.getFullYear()
    let month = fillzero(data.getMonth()+1)
    let day = fillzero(data.getDate())
    let hour = fillzero(data.getHours())
    let min = fillzero(data.getMinutes())
    let sec = fillzero(data.getSeconds())

    return dataTime = year + "年" + month + "月" + day + "日" + hour + "时" + min + "分" + sec + "秒" 
}

const fillzero = (n) => {
    if(n<10){
        return "0" + n
    }else{
        return n
    }
}

export default date