
var currentSize = 'medium';
var currentColor = 'black';
var dragging = false;

function setColor(color) {
	currentColor = color;
}

function setSize(size) {
	currentSize = size;
}

function clicked(event) {
	
	if (!dragging) {
		ev = event || window.event;
	
		var left = ev.clientX;
		var top = ev.clientY;
		addBlock(left, top);
	}
}

function startDrag() {
	dragging = true;
}

function stopDrag() {
	dragging = false;
}

function move(event) {
	if (dragging) {
		ev = event || window.event;
	
		var left = ev.pageX;
		var top = ev.pageY;
		addBlock(left, top);
	}
}


function addBlock(x, y) {
	var width = 0;
	var height = 0;
	var finalX = 0;
	var finalY = 0;
	
	if (currentSize == 'small') {
		width = "10";
		height = "10";
		finalX = x - 5;
		finalY = y - 5;
	}
	else if (currentSize == 'medium') {
		width = "20";
		height = "20";
		finalX = x - 10;
		finalY = y - 10;
	}
	else if (currentSize == 'large') {
		width = "40";
		height = "40";
		finalX = x - 20;
		finalY = y - 20;
	}
	else if (currentSize == 'x-large') {
		width = "100";
		height = "100";
		finalX = x - 50;
		finalY = y - 50;
	}
		
	if (x < document.getElementById("area").offsetWidth - width/2 &&
		y < document.getElementById("area").offsetHeight - height/2) {
		var newDiv = document.createElement('div');
		newDiv.setAttribute('class', "createdBlock");

		newDiv.style.width = width + "px";
		newDiv.style.height = height + "px";
		
		newDiv.style.left = finalX + "px";
		newDiv.style.top = finalY + "px";
		
		newDiv.style.backgroundColor = currentColor;
		
		document.getElementById("area").appendChild(newDiv);
	}	
}