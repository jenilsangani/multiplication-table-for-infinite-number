function generateTable() {
  let numberElement = document.getElementById("number");
  if (isNaN(numberElement.value)) {
    alert("is not a number");
  } else {
    let tableElement = document.getElementById("table");
    let s = "";
    for (i = 1; i <= 10; i++) {
      s = s + `${numberElement.value} x ${i} = ${numberElement.value * i}<br>`;
    }
    tableElement.innerHTML = s;
  }
}
