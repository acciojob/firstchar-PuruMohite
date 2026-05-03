function firstChar(text) {
  // your code here
	text = text.trim();   
	if(text.length){
		return text[0];
	}else{
		return "";
	}
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
