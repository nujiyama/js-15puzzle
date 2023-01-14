"use strict";

const tiles = [];

window.onload = init();

function init() {
  const table = document.getElementById("table");

  for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      const td = document.createElement("td");
      const index = i * 4 + j;
      td.className = "tile";
      td.index = index;
      if (true) {
        // 空白が左上
        td.value = index;
        if (index == 0) {
          td.textContent = "";
        } else {
          td.textContent = index;
        }
      } else {
        // 空白が右下
        td.value = index + 1;
        if (index < 15) {
          td.textContent = index + 1;
        } else {
          td.textContent = "";
        }
      }

      td.onclick = click;
      tr.appendChild(td);
      tiles.push(td);
    }
    table.appendChild(tr);
  }

  for (let i = 0; i < 1000; i++) {
    //click({ target: { index: Math.floor(Math.random() * 16) } });
  }
}

function click(e) {
  const i = e.target.index;
  if (i - 4 >= 0 && tiles[i - 4].value == 0) {
    // クリックしたマスの上が空いている場合、上と入れ替え
    swap(i, i - 4);
  } else if (i + 4 < 16 && tiles[i + 4].value == 0) {
    // クリックしたマスの下が空いている場合、下と入れ替え
    swap(i, i + 4);
  } else if (i % 4 != 0 && tiles[i - 1].value == 0) {
    // クリックしたマスの左が空いている場合、左と入れ替え
    swap(i, i - 1);
  } else if (i % 4 != 3 && tiles[i + 1].value == 0) {
    // クリックしたマスの右が空いている場合、右と入れ替え
    swap(i, i + 1);
  }
}

function swap(i, j) {
  const tmp = tiles[i].value;
  tiles[i].textContent = tiles[j].textContent;
  tiles[i].value = tiles[j].value;
  tiles[j].textContent = tmp;
  tiles[j].value = tmp;
}
