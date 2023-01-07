// import axios from "axios";
const axios = require("axios");

const url = `https://translate.googleapis.com/translate_a/single`
  + `?client=gtx`
  + `&sl=da`
  + `&tl=en`
  + `&dt=t`
  // + `&dt=bd`
  + `&dj=1`
  + `&q=kartoffel`;


// code from 
//   https://github.com/sienori/simple-translate
//   https://github.com/sienori/simple-translate/blob/master/src/common/translate.js


// const sendRequestToGoogle = async (word, sourceLang, targetLang) => {
  // const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&dt=bd&dj=1&q=${encodeURIComponent(
  //   word
  // )}`;

const sendRequestToGoogle = async () => {
  // const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=da&tl=en&dt=t&dt=bd&dj=1&q=kartoffel`;

  const result = await axios.get(url)
    .then(response => {
      console.log(response);
      return response
    })
    .catch(error => error.response);

  
  const resultData = {
    resultText: "",
    candidateText: "",
    sourceLanguage: "",
    percentage: 0,
    isError: false,
    errorMessage: ""
  };
  
  // if (!result || result?.status !== 200) {
  //   resultData.isError = true;
  
  //   if (!result || result.status === 0) resultData.errorMessage = browser.i18n.getMessage("networkError");
  //   else if (result.status === 429 || result.status === 503) resultData.errorMessage = browser.i18n.getMessage("unavailableError");
  //   else resultData.errorMessage = `${browser.i18n.getMessage("unknownError")} [${result?.status} ${result?.statusText}]`;
  
  //   return resultData;
  // }
  
  resultData.sourceLanguage = result.data.src;
  // resultData.percentage = result.data.ld_result.srclangs_confidences[0];
  resultData.resultText = result.data.sentences.map(sentence => sentence.trans).join("");
  if (result.data.dict) {
    resultData.candidateText = result.data.dict
    .map(dict => `${dict.pos}${dict.pos != "" ? ": " : ""}${dict.terms.join(", ")}\n`)
    .join("");
  }
  
  // log.log(logDir, "sendRequest()", resultData);
  // console.log(" >>> MIDDLE <<<", resultData);

  return resultData;
}

console.log(Promise.resolve(sendRequestToGoogle()));
