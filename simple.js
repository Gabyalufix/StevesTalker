

replayButton = document.getElementById("replay")
clearButton = document.getElementById("clear")
textbox = document.getElementById("inputText")


replayButton.onclick = function(){
	responsiveVoice.speak(textbox.value)
}

var spokenIX = 0;
var lastDelete = 0;

textbox.onkeypress = function(k){
	console.log("---------------------------");
	console.log("spokenIX="+spokenIX);
	if(this.value.length == 1 && this.value[0] == "`"){
		this.value = "";
	}
	
	if(lastDelete){
		spokenIX = Math.min( this.value.split(" ").length, spokenIX); 
	}
	
	if(k.key == 8){
		lastDelete=true;
		/////if( this.value.length > 0 ){
		//	spokenIX = this.value.substring(0,this.value-2).split(" ").length
		//}
	} else {
		lastDelete=false;
	}
    if(k.key == " " || k.key == "."){
		if( this.value.length > 0 ){
			var lastChar = this.value[this.value.length - 1] 
			console.log("TEXT=\""+this.value+"\"/k="+k.key+" lastChar="+lastChar)
			console.log("lastCharSpace="+(lastChar == " " || lastChar == "."));
			console.log("kSpace="+(k.key == " "));
			console.log("spokenIX="+(spokenIX));

			if(lastChar == " " || lastChar == "."){
				var words = this.value.split(" ")
				console.log(words);
				var speakme = "";
				for(i = spokenIX; i < words.length-1;i++){
					speakme = speakme +" "+words[i];
				}
				spokenIX = words.length;
				//console.log("lastWord="+words[words.length - 2])
				responsiveVoice.speak(speakme)
			}
		}
	} else if(k.key == "`"){
		textbox.value = "";
		spokenIX = 0;
	} else if(k.keyCode == 13){
		console.log("returnkey")
		responsiveVoice.speak(textbox.value)
		spokenIX = words.length;
	}
}