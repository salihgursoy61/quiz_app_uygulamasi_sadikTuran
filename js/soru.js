function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

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

