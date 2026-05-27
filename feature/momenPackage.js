const moment = require("moment");


/**
 * date conversion with moment package
 * @param {string} isiTgl 
 * @returns The value can be false if the input does not conform to the DD-MM-YYYY format or a date string in the DD/MM/YYYY format.
 */
exports.convertTanggal = (isiTgl)=>{
  const tgl = moment(isiTgl, 'DD-MM-YYYY', true);
  if (!tgl.isValid()){
    console.error("Format Tanggal harus DD-MM-YYYY / tanggal tidak ada");
    return false;
  }
  return tgl.format('DD/MM/YYYY');

};