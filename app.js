function generateLink() {
	var id = document.getElementById("surveyID").value;
	
	var stsLink = "http://survey-d.researchnow.com/survey/selfserve/53b/"+id+"?list="+list+"&rnid=$rnid&study=$study&c=$c&src=$src"
	var dkLink = "http://survey-d.researchnow.com/survey/selfserve/53b/"+id+"?list="+list+"&pid=$pid&psid=$psid"
	if(document.getElementById("sts").checked == true){
		var list = 1
		if(document.getElementById("yes").checked == true){
			document.getElementById("stsLink").innerHTML = ""
			document.getElementById("stsLinkDigital1").innerHTML = "Exposed: "+ stsLink+"&hType=1"
			document.getElementById("stsLinkDigital2").innerHTML = "Control: "+ stsLink+"&hType=2"
		}
		else{
			document.getElementById("stsLinkDigital1").innerHTML = ""
			document.getElementById("stsLinkDigital2").innerHTML = ""
			document.getElementById("stsLink").innerHTML = "Live link: " +stsLink
		}
	}

	else{
		var list = 2
		if(document.getElementById("yes").checked == true){
			document.getElementById("stsLink").innerHTML = ""
			document.getElementById("stsLinkDigital1").innerHTML = "Exposed: "+ dkLink+"&hType=1"
			document.getElementById("stsLinkDigital2").innerHTML = "Control: "+ dkLink+"&hType=2"
		}
		else{
			document.getElementById("stsLinkDigital1").innerHTML = ""
			document.getElementById("stsLinkDigital2").innerHTML = ""
			document.getElementById("stsLink").innerHTML = "Live link: " +dkLink
		}
	}

	
	

	
}