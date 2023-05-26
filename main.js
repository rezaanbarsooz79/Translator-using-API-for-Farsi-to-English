document.querySelector('#translate-btn').addEventListener('click', function () {
    const sourceLanguage = document.querySelector('#source-language').value;
    const targetLanguage = document.querySelector('#target-language').value;
    const sourceText = document.querySelector('#source-text').value;

    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURI(sourceText)}`)
        .then(response => response.json())
        .then(data => document.querySelector('#target-text').value = data[0][0][0]);
});
