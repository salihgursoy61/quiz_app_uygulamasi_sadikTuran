const soruListesi = [
  new Soru(
    "1-hangisi javascript paket yonetim uygulamasıdır?",
    { a: "node js", b: "typescript", c: "nuget", d: "npm" },
    "d"
  ),
  new Soru(
    "2-hangisi frontend kapsamında değerlendirilmez?",
    { a: "css", b: "Html", c: "javascript", d: "sql" },
    "d"
  ),
  new Soru(
    "3-hangisi backend kapsamında değerlendirlir?",
    { a: "node js", b: "TypeScript", c: "angular", d: "react" },
    "a"
  ),
  new Soru(
    "4-hangisi javascript programlama dilini kullanmaz?",
    { a: "react", b: "angular", c: "vuejs", d: "asp.net" },
    "d"
  ),
];

const quiz = new Quiz(soruListesi);
const ui = new UI();

console.log(quiz);

document.getElementById("BtnSoruGetir").addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    ui.soruGoster(quiz.soruGetir());
    console.log(quiz);
  } else {
    console.log("quiz bitti");
  }
});

function optionSelected(e) {
  const cevap = e.target.textContent[0];
  const soru = quiz.soruGetir();

  if (soru.cevabiKontrolEt(cevap)) {
    e.target.classList.add("correct");
    e.target.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    e.target.classList.add("incorrect");
    e.target.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }
  quiz.soruIndex += 1;
  ui.disabledAllOption();
}
