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

function verseOfTheDayROToggle() {

  var element = document.getElementById("verseBibleRO");
  element.classList.toggle("hidden");

}

function verseOfTheDayESToggle() {

  var element = document.getElementById("verseBibleES");
  element.classList.toggle("hidden");

}

verseOfTheDayRO();

verseOfTheDayROToggle();


