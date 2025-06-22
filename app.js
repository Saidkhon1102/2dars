const raqam = document.getElementById("raqam");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

let s = 0;

function update() {
  raqam.textContent = s;

  if (s > 0) {
    raqam.style.color = "green";
  } else if (s < 0) {
    raqam.style.color = "red";
  } else {
    raqam.style.color = "orange"; 
  }


  plusBtn.disabled = s >= 15;
  minusBtn.disabled = s <= -15;

  plusBtn.style.backgroundColor = plusBtn.disabled ? "gray" : "";
  minusBtn.style.backgroundColor = minusBtn.disabled ? "gray" : "";
  plusBtn.style.cursor = plusBtn.disabled ? "not-allowed" : "pointer";
  minusBtn.style.cursor = minusBtn.disabled ? "not-allowed" : "pointer";
}

plusBtn.addEventListener("click", () => {
  s++;
  update();
});

minusBtn.addEventListener("click", () => {
  s--;
  update();
});

update(); 
