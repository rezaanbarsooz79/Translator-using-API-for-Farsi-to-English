# Translator-using-API-for-Farsi-to-English
This code creates a click event for an element with the ID 'translate-btn'. When the user clicks on this button, a function is executed that assigns three initial variables using the document.querySelector method:

sourceLanguage: the source language (original text) entered in the element with the ID source-language.
targetLanguage: the target language (translated text) entered in the element with the ID target-language.
sourceText: the text entered by the user in the element with the ID source-text.
Then, using the fetch() function, an inline request is sent to the Google Translate API. The API address is added to the request as follows:
https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURI(sourceText)}
This address allows you to translate the sourceText into the target language using sourceLanguage and targetLanguage. The response returned by the API for this request contains a three-dimensional array that includes the translated text. In this code, the translated text is displayed in the element with the ID target-text.

If you want to put this code on GitHub, you can create a file named translate.js in the js folder and include the above code in it. Then, in your HTML file, add the translate.js file to the page using the <script> tag.
