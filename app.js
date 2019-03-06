function generateLink() {
	var id = document.getElementById("surveyID").value;
	var list = 0
	var stsLink = "http://survey-d.researchnow.com/survey/selfserve/53b/"+id+"?list=" 
	var stsLink2 = "&rnid=$rnid&study=$study&c=$c&src=$src"
	var dkLink = "http://survey-d.researchnow.com/survey/selfserve/53b/"+id+"?list="
	var dkLink2 = "&pid=$pid&psid=$psid"
	
	if(document.getElementById("sts").checked == true){
		list = 1
		if(document.getElementById("yes").checked == true){
			document.getElementById("stsLink").innerHTML = ""
			document.getElementById("stsLinkDigital1").innerHTML = "Exposed: "+ stsLink + list + stsLink2 + "&hType=1"
			document.getElementById("stsLinkDigital2").innerHTML = "Control: "+ stsLink + list + stsLink2 + "&hType=2"
		}
		else{
			document.getElementById("stsLinkDigital1").innerHTML = ""
			document.getElementById("stsLinkDigital2").innerHTML = ""
			document.getElementById("stsLink").innerHTML = "Live link: " + stsLink + list + stsLink2
		}
	}
	
	else{
		list = 2
		if(document.getElementById("yes").checked == true){
			document.getElementById("stsLink").innerHTML = ""
			document.getElementById("stsLinkDigital1").innerHTML = "Exposed: "+ dkLink + list + dkLink2 + "&hType=1"
			document.getElementById("stsLinkDigital2").innerHTML = "Control: "+ dkLink + list + dkLink2 + "&hType=2"
		}
		else{
			document.getElementById("stsLinkDigital1").innerHTML = ""
			document.getElementById("stsLinkDigital2").innerHTML = ""
			document.getElementById("stsLink").innerHTML = "Live link: " + dkLink + list + dkLink2
		}
	}


	
	

	
}