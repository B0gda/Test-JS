//переменные
const a = 5000;
const b = 4000;
console.log('Ширина кузова автомобиля: ' + a + ', длина: ' + b);
//важен стиль и смысл заложенный в названия переменных
//snake_case
//UPPER_SNAKE_CASE
// Kebab-case
// PascalCase 






//РАБОТА С КОЛОНКАМИ
//renderWaterfall($(".my-list"), 2);
renderWaterfall($(".root"), 2);
renderWaterfall($(".my-ul-list"), 4);


/* 
rootNode - container for list items
columnCount - number of columns
elementGap - if true, num becomes number of items per column
*/

function renderWaterfall(rootNode, columnCount, elementGap) {
  let classList = document.querySelectorAll(".el"); //add class of original menu and add to new columns
  let list = rootNode.addClass('column-1');
  let items = list.children();
  let wrap = $("<div class='col-wrap' />");

  let menuTag = list.prop("tagName").toLowerCase();
  let newCol = $("<" + menuTag + ">");

  wrap
    .insertBefore(list)
    .prepend(list);

  //if perColumn, col is number of columns needed
  //if !perColumn, col is number of elements that go into each column (see $.each at bottom)
  let col = Math.ceil(items.length / columnCount);
  
  //create columns
  if (elementGap) { //create col number of columns
    for (let x = 1; x < col; x++) {
      let addme = newCol.clone();
      addme.addClass("column-" + (x + 1));
      addme.appendTo(wrap);
    }
  } else { //create num number of columns
    for (let x = 1; x < columnCount; x++) {
      let addme = newCol.clone();
      addme.addClass("column-" + (x + 1));
      addme.appendTo(wrap);
    }
  }

  let curr = list;
  let inc = 1;
  let numCol; //number of columns
  
  //how many elements to put in each column
  if (elementGap) {
    numCol = columnCount;
  } else {
    numCol = col
  }
  
  //console.log("numCol = " + numCol);
  $.each(items, function(i, v) {
    console.log(i);
    if ((i + 1) > numCol) {
      //if the remainder of the current item and num is 1 (i.e. 6th item in 5 column list, 11th item in 10 column list, etc.) append to next col
      if ((i + 1) % numCol == 1 || numCol == 1) { //numCol == 1 for 2 columns with only 2 items(FIX THIS)
        inc++;
        curr = wrap.find(".column-" + inc);
      }

      $(this).appendTo(curr);
    }
  });

}