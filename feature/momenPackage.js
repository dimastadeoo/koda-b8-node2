const moment = require("moment");
exports.convertTanggal = (isiTgl)=>{
  const tgl = moment(isiTgl, 'DD-MM-YYYY', true);
  if (!tgl.isValid()){
    console.error("Format Tanggal harus DD-MM-YYYY / tanggal tidak ada");
    return false;
  }
  return tgl.format('DD/MM/YYYY');

};