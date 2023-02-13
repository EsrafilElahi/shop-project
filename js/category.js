let divFeatTitle;
let divFeatName;

const featTitleBtnAr = document.getElementById("btn-feat-title-ar");
const featTitleBtnTr = document.getElementById("btn-feat-title-tr");
const featNameBtnAr = document.getElementById("btn-feat-name-ar");
const featNameBtnTr = document.getElementById("btn-feat-name-tr");

featTitleBtnAr.addEventListener("click", addFeats)
featTitleBtnTr.addEventListener("click", addFeats)

featNameBtnAr.addEventListener("click", addFeatsName)
featNameBtnTr.addEventListener("click", addFeatsName)

function addFeats() {
  const feats = document.getElementById("feats");
  const featsDiv = document.getElementById("feats-div");
  const clone = feats.cloneNode(true);

  featsDiv.appendChild(clone)
}


function addFeatsName() {
  const feats = document.getElementById("feats");

  const featNameAr = document.getElementById("feat-name-ar-div");
  const featNameTr = document.getElementById("feat-name-tr-div");

  const cloneAr = featNameAr.cloneNode(true);
  const cloneTr = featNameTr.cloneNode(true);

  feats.appendChild(cloneAr)
  feats.appendChild(cloneTr)
}