const moment = require("moment")

function convertTanggal(isiTgl){
    const tgl = moment(isiTgl, 'DD-MM-YYYY', true)
    if (!tgl.isValid()){
        console.log("Format Tanggal Salah")
        return
    }
    console.log(tgl.format('DD/MM/YYYY'))
}

convertTanggal("24-04-2015")