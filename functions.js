	
// Функция установки цвета фигуры - 16-ричное значение цвета

	function getRandomColor() { 

		var letters = '012345678ABCDEF'.split('');
		var color = '#';

		for (var i=0; i<6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}

		return color;
	}

// Функция установки фигуры - положение на странице и размер

	function makeShapeAppear() {

		var top = Math.random() * 500;
		var left = Math.random() * 1200;
		var width = (Math.random() * 50) + 100;

		if (Math.random() > 0.5) {
			document.getElementById("shape").style.borderRadius = "50%"; // Установка типа фигуры - круг или квадрат
		} else {
			document.getElementById("shape").style.borderRadius = "0%";	
		}

	document.getElementById("shape").style.backgroundColor = getRandomColor();
	document.getElementById("shape").style.width = width + "px";	
	document.getElementById("shape").style.height = width + "px";
	document.getElementById("shape").style.top = top + "px";
	document.getElementById("shape").style.left = left + "px";
	document.getElementById("shape").style.display = "block";

	start = new Date().getTime();

	}

// Основная функция появление фигуры с рандомным таймаутом

	function appearAfterDelay() {

		setTimeout(makeShapeAppear, Math.random() * 2000);
	}

	