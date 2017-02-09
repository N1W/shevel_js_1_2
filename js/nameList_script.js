alert("START second (nameList) script");

var nameList = [''];
var flag;

for (var i = 0; i < 5; i++) {
	nameList[i] = prompt("enter random name", '');
}

var myName = prompt("enter your name", '');

for (var i = 0; i < nameList.length; i++) {
	if (myName == nameList[i]) {
		console.log(myName, "вы успешно вошли.");
		i = nameList.length;
		flag = true;
	}
}

if (flag == true) {
	var result = myName + ", вы успешно вошли!";
	alert(result);
} else { 
	alert("Error! Name not found.");
}

alert("END second (nameList) script");

