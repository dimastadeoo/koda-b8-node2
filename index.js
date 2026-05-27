const {convertTanggal} = require("./feature/momenPackage.js");
const {tanya, tutup} = require('./feature/inputData.js');
/**
 * @callback cb
 * 
 */
/** 
 * main function to call the function process
 * @param {cb} input callback input data function in inputData.js
 * @param {cb} close callback close input function in inputData.js
 */
async function main(input, close) {
  let inputData;
  let result;
  while(true){
    inputData = await input("Inputkan tgl: ");
    result = await convertTanggal(inputData);
    console.log(typeof result);
    if (result !== false){
      break;
    }
  }
  console.log("Konversi tanggal: ", result);
  close();
}

main(tanya, tutup);
