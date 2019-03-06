function generateLink() {
	var id = document.getElementById("surveyID").value;
	
	
	if(document.getElementById("sts").checked == true){
		var list = 1
	}
	else{
		var list = 2
	}

	var link = "http://survey-d.researchnow.com/survey/selfserve/53b/"+id+"?list="+list+"&rnid=$rnid&study=$study&c=$c&src=$src"

	if(document.getElementById("yes").checked == true){
		document.getElementById("stsLink").innerHTML = ""
		document.getElementById("stsLinkDigital1").innerHTML = "Exposed: "+ link+"&hType=1"
		document.getElementById("stsLinkDigital2").innerHTML = "Control: "+ link+"&hType=2"
	}
	else{
		document.getElementById("stsLinkDigital1").innerHTML = ""
		document.getElementById("stsLinkDigital2").innerHTML = ""
		document.getElementById("stsLink").innerHTML = "Live link: " +link
	}
}