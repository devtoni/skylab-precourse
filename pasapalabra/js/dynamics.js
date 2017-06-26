function display(element) {
	element.style.visibility = "visible";
	element.style.opacity = "1";
}

function hide(element) {
	element.style.display = "hidden";
	element.style.opacity = "0";
}

function showTable() {
	console.log(userData);
	var table = document.getElementById("table");
	for (var i = 0; i < userData.length; i++) {
	var row = table.insertRow(i+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = (i+1) + "º";
    cell2.innerHTML = userData[i][0].nameU;
    cell3.innerHTML = userData[i][0].pointsU;
	}
	display(table);
}