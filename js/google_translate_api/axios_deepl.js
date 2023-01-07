const axios = require('axios')

const sendRequestToDeepL = async () => {
    let params = new URLSearchParams();
    
    params.append("auth_key", undefined);
    params.append("text", 'som');
    params.append("target_lang", 'en');
    const url = "https://api-free.deepl.com/v2/translate"
    const result = await axios.post(url, params).catch(e => e.response);
  
    console.log(result)

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
    //   else if (result.status === 403) resultData.errorMessage = browser.i18n.getMessage("deeplAuthError");
    //   else resultData.errorMessage = `${browser.i18n.getMessage("unknownError")} [${result?.status} ${result?.statusText}] ${result?.data.message}`;
  
    //   log.error(logDir, "sendRequestToDeepL()", result);
    //   return resultData;
    // }
  
    resultData.resultText = result.data.translations[0].text;
    resultData.sourceLanguage = result.data.translations[0].detected_source_language.toLowerCase();
    resultData.percentage = 1;
  
    log.log(logDir, "sendRequestToDeepL()", resultData);
    return resultData;
  }
  
sendRequestToDeepL()
  .then(out => console.log(out))
  