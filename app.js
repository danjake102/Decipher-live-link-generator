function platformType(){
	if(document.getElementById("sts").checked == true){
		var type = {
			"type": "sts"
		}
	}
	else{
		var type = {
			"type": "dk"
		}
		
	}

	var livelink = getURL(type)

	setURL(livelink)
}


function getURL(type) {
	var id = document.getElementById("surveyID").value;
	var url = "http://survey-d.researchnow.com/survey/selfserve/53b/"+id+"?"

	var platformType = {
		"sts": url + "list=1&rnid=$rnid&study=$study&c=$c&src=$src",
		"dk": url + "list=2&pid=$pid&psid=$psid"
	}

	return platformType[type.type]
}



function setURL(livelink){

	var exposed = document.getElementById('liveLinkDigital1')
	var control = document.getElementById('liveLinkDigital2')
	var liveLinkElement = document.getElementById('liveLink')

	if(document.getElementById("yes").checked == true){
		var exposedLink = livelink + "&hType=1"
		var controlLink = livelink + "&hType=2"
		exposed.innerHTML = "Exposed: " + exposedLink.link(livelink + "&hType=1")
		control.innerHTML = "Control: " + controlLink.link(livelink + "&hType=2")
		clearValues()
	}
	else{
		var live = livelink
		liveLinkElement.innerHTML = "Live link: " + live.link(livelink)
		clearValues()
	}
}

function clearValues(){

	var exposed = document.getElementById('liveLinkDigital1')
	var control = document.getElementById('liveLinkDigital2')
	var liveLinkElement = document.getElementById('liveLink')

	if(document.getElementById("yes").checked == true){
		liveLinkElement.innerHTML = ""
	}
	else{
		exposed.innerHTML = ""
		control.innerHTML = ""
	}
}
