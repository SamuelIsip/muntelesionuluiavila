function verseOfTheDayRO() {
  var dataText, verset, referintaIni, referintaEnd, referinta;

  fetch("https://www.resursecrestine.ro/web-api-versetul-zilei", {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "text/plain",
    },
  })
    .then((response) => response.text())
    .then((text) => {
      dataText = text.split("');");

      verset = dataText[0];
      referinta = dataText[1];

      verset = verset.replace("document.writeln('", "");

      referintaIni = referinta.indexOf(">");
      referintaEnd = referinta.indexOf("</a>");
      referinta = referinta.substring(referintaIni + 1, referintaEnd);

      document.getElementById("verseOfDay").innerText = verset;
      document.getElementById("verseOfDayReference").innerText = referinta;
    });
}

function verseOfTheDayES() {
  fetch("https://dailyverses.net/get/verse.js?language=nvi", {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "text/plain",
    },
  })
    .then((response) => response.text())
    .then((texto) => {
      console.log(texto);
      var startTexto1 =
        texto.indexOf('<div class="dailyVerses bibleText"\\u003e') +
        '<div class="dailyVerses bibleText"\\u003e'.length;
      var endTexto1 = texto.indexOf("\\u003c/div\\u003e", startTexto1);
      var texto1 = texto.substring(startTexto1, endTexto1);

      // Encontrar el inicio y el fin del segundo texto
      var startTexto2 =
        texto.indexOf(
          "\\u003e",
          texto.indexOf('<div class="dailyVerses bibleVerse"\\u003e')
        ) + "\\u003e".length;
      var endTexto2 = texto.indexOf("\\u003c/a\\u003e", startTexto2);
      var texto2 = texto.substring(startTexto2, endTexto2);

      console.log(texto1);
      console.log(texto2);

      document.getElementById("verseOfDay").innerText = texto1;
      document.getElementById("verseOfDayReference").innerText = texto2;
    });
}

verseOfTheDayES();
