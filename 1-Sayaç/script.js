let sayacDegeri = 0;

const sayac = document.querySelector('#sayac');
const azalBtn = document.querySelector('#azal-btn');
const resetBtn = document.querySelector('#reset-btn');
const artBtn = document.querySelector('#art-btn');

artBtn.addEventListener('click',function() {
    sayacDegeri = sayacDegeri +1;
    sayac.textContent = sayacDegeri;
});

azalBtn.addEventListener('click', function() {
    sayacDegeri = sayacDegeri -1;
    sayac.textContent = sayacDegeri;
});

resetBtn.addEventListener('click', function() {
    sayacDegeri = 0;
    sayac.textContent = sayacDegeri;
});

console.log(sayac);
console.log(artBtn);
console.log(azalBtn);