//Buat button ready tekan
const gridContainer = document.getElementById("grid-container");
const breakpoint = document.getElementById("breakpoint");

function createReadyButtonElement(num) {
  let btnNum = document.createElement("button")
  btnNum.textContent = num;
  btnNum.onclick = () => addNumberToInput(num);

  let gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridItem.appendChild(btnNum);

  return gridItem;
}

function createGridItems() {
  for (let i = 1; i <= 9; i++) {
    let btn = createReadyButtonElement(i);
    gridContainer.insertBefore(btn, breakpoint);
  }
}
createGridItems();



//Buat logic kalkulasi
const idInputArea = document.getElementById("input-number");

function factorial(num) {
  let result = 1;
  num = parseInt(num);
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
}

function addNumberToInput(num) {
  idInputArea.value += num;
}

function remNumber(num) {
  let newNum = num.slice(0, -1);
  return newNum;
}

function operation(ops) {
  let add = "+";
  let dec = "-";
  let times = "*";
  let div = "/";
  let equal = "=";
  let sqrt = "r";
  let clear = "c";
  let backspace = "b";
  switch (ops) {
    case add:
      addNumberToInput(add);
      break;
    case dec:
      addNumberToInput(dec);
      break;

    case times:
      addNumberToInput(times);
      break;

    case div:
      addNumberToInput(div);
      break;

    case sqrt:
      idInputArea.value = `√(${idInputArea.value})`;
      break;

    case equal:
      if (idInputArea.value.includes('!')) {
        if (/!.*!/.test(idInputArea.value) === false &&
          /\d!/.test(idInputArea.value) === true) {
          idInputArea.value = factorial(idInputArea.value.replace('!', ''))
        } else {
          alert("Somethings wrong i can feel it!");
        }
      } else {
        let newVal = idInputArea.value.replace('√', 'Math.sqrt').replace('^', '**');
        ;
        idInputArea.value = eval(newVal);
      }
      break;

    case clear:
      idInputArea.value = "";
      break;

    case backspace:
      idInputArea.value = remNumber(idInputArea.value);
      break;

    default:
      break;
  }

}


