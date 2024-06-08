const deer = document.getElementById('deer');
const baboon = document.getElementById('baboon');
const whale = document.getElementById('whale');
const fox = document.getElementById('fox');
const foxModel = document.getElementById('foxmodel');
const whaleModel = document.getElementById('whalemodel');
const baboonModel = document.getElementById('baboonmodel');
const deerModel = document.getElementById('deermodel');
deer.addEventListener("click", () => {
 deerModel.style.display = "flex";
});
deerModel.addEventListener("click", () => {
 deerModel.style.display = 'none';
});
whale.addEventListener("click", () => {
 whaleModel.style.display = "flex";
});
whaleModel.addEventListener("click", () => {
 whaleModel.style.display = "none";
});
fox.addEventListener("click", () => {
 foxModel.style.display = 'flex ';
});
foxModel.addEventListener("click", () => {
 foxModel.style.display = "none";
});
baboon.addEventListener("click", () => {
 baboonModel.style.display = "flex";
});
baboonModel.addEventListener("click", () => {
 baboonModel.style.display = "none";
});
// Close Mode when click on Escape Key
document.addEventListener('keydown', (e) => {
 if (e.key === "Escape") {
  whaleModel.style.display = "none";
  deerModel.style.display = "none ";
  foxModel.style.display = "none";
  baboonModel.style.display = "none";
 }
});