$(document).ready(function(){
    $('.tooltipped').tooltip();
  });

function platformType(){
	if(document.getElementById('surveyID').value == ""){
		alert("input survey ID")
	}
	else{
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
	var copyToClipboard = document.getElementById('copy')
	var testing = document.getElementById('copyUrls')

	if(document.getElementById("yes").checked == true){
		var exposedLink = livelink + "&hType=1"
		var controlLink = livelink + "&hType=2"
		exposed.innerHTML = "Exposed: " + exposedLink.link(livelink + "&hType=1")
		control.innerHTML = "Control: " + controlLink.link(livelink + "&hType=2")
		testing.value = "Exposed: " + livelink + "&hType=1" + '\n \n' + "Control: " + livelink + "&hType=2"
		copyToClipboard.innerHTML = '<a class="waves-effect waves-light btn-small" onclick="copyLinks()">Copy to clipboard</a>'
		clearValues()
	}
	else{
		var live = livelink
		liveLinkElement.innerHTML = "Live link: " + live.link(livelink)
		testing.value = livelink
		copyToClipboard.innerHTML = '<a class="waves-effect waves-light btn-small" onclick="copyLinks()">Copy to clipboard</a>'
		
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

function copyLinks(){
	var copyText = document.getElementById("copyUrls");

	copyText.select();

	document.execCommand("copy");
}