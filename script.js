const tksKontener = document.getElementById("tksKontener");
const tUbahLatar = document.createElement("button");
const tksTmbl = document.createTextNode("UBAH WARNA LATAR");
tUbahLatar.appendChild(tksTmbl);
tUbahLatar.setAttribute("type", "button");
tksKontener.after(tUbahLatar);

tUbahLatar.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

