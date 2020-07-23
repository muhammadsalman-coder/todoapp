var count = 1;
function addtodo() {
  var inText = document.getElementById("todo_item");

  var tr = document.createElement("tr");
  tr.setAttribute("id", "row" + count);
  var td = document.createElement("td");
  td.setAttribute("class", "inputText");
  var td2 = document.createElement("td");
  td2.setAttribute("class","btnCloumn")
  var table = document.getElementById("table");

  table.appendChild(tr);
  tr.appendChild(td); //add td in tr
  tr.appendChild(td2); //add td in tr

  var text = document.createTextNode(inText.value);
  td.append(text);

  var editBtn = document.createElement("button");
  editBtn.setAttribute("id", "editBtn" + count);
  editBtn.setAttribute("onclick", "editingBtn(" + count + ")");

  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "deleteBtn" + count);
  deleteBtn.setAttribute("onclick", "deleteBtn(" + count + ")");

  var editBtn_text = document.createTextNode("Edit");
  var deleteBtn_text = document.createTextNode("Delete");

  editBtn.append(editBtn_text);
  deleteBtn.append(deleteBtn_text);

  td2.appendChild(editBtn);
  td2.appendChild(deleteBtn);

  //Creating Save Button
  var saveBtn = document.createElement("button");
  saveBtn.setAttribute("id", "saveBtn" + count);
  saveBtn.setAttribute("onclick", "savingBtn(" + count + ")");
  var saveBtnText = document.createTextNode("Save");
  saveBtn.append(saveBtnText);

  var tdedit = document.getElementById("editBtn" + count);
  tdedit.parentNode.append(saveBtn);

  document.getElementById("saveBtn" + count).style.display = "none";

  //Save Button is Created Done......

  count++;
}
var temp = true;
function editingBtn(no) {
  document.getElementById("editBtn" + no).style.display = "none";
  document.getElementById("saveBtn" + no).style.display = "inline-block";

  var row = document.getElementById("row" + no);
  var td1 = row.childNodes[0].innerHTML;

  row.childNodes[0].innerHTML =
    "<input type='text' id='name_text" + no + "' value='" + td1 + "'>";
}

function savingBtn(no) {
  document.getElementById("saveBtn" + no).style.display = "none";
  document.getElementById("editBtn" + no).style.display = "inline-block";

  //var saveBtn = document.getElementById("saveBtn" + no);
  var editText = document.getElementById("name_text"+no)
  var row = document.getElementById("row" + no);
  var td11 = row.childNodes[0].childNodes[0];
    var saveEdit= document.createTextNode(td11.value)
    row.childNodes[0].innerHTML= ""
    row.childNodes[0].appendChild(saveEdit)


}

// Delete button done...
function deleteBtn(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}
// Delete All button done...
function deleteallbtn() {
  document.getElementById("table").remove();

  var table = document.createElement("table");
  table.setAttribute("id", "table");

  var tableBox = document.getElementById("tableBox");
  tableBox.appendChild(table);
}
