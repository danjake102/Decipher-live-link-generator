function platformType(){

	var parent = document.getElementById("multiLang")
	while(parent.firstChild){
		parent.firstChild.remove()
	}

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
	var url = "https://survey-d.researchnow.com/survey/selfserve/53c/"+id+"?"
	var platformType = {
		"sts": url + "list=1&rnid=$rnid&study=$study&c=$c&src=$src",
		"dk": url + "list=2&C=$C&pid=$pid&psid=$psid"
	}

	return platformType[type.type]
}



function setURL(livelink){
	var id = document.getElementById("surveyID").value;
	var exposed = document.getElementById('liveLinkDigital1')
	var control = document.getElementById('liveLinkDigital2')
	var liveLinkElement = document.getElementById('liveLink')
	var copyToClipboard = document.getElementById('copy')
	var quota = document.getElementById('quotaLink')
	var copy = document.getElementById('copyUrls')
	var strLink = "https://survey-d.researchnow.com/rep/selfserve/53b/"+id+":dashboard?tab=quota&split=none"
	quota.innerHTML = "Portal link: " + strLink.link("https://survey-d.researchnow.com/rep/selfserve/53b/"+id+":dashboard?tab=quota&split=none")


	if(document.getElementById("yes").checked == true){
		var exposedLink = livelink + "&hType=1"
		var controlLink = livelink + "&hType=2"
		exposed.innerHTML = "Default Exposed: " + exposedLink.link(livelink + "&hType=1")
		control.innerHTML = "Default Control: " + controlLink.link(livelink + "&hType=2")
		setUrlMultiLang(id, exposed, control, livelink)
		var multiLangLinks = []
		var i = 0
		var x = $("div#multiLang:first").find("p").toArray();
		
		for(i = 0; i< x.length; i++){
			multiLangLinks.push($(x[i]).contents().text())
		}
		copy.value = "Exposed: " + livelink + "&hType=1" + '\n \n' + "Control: " + livelink + "&hType=2" + '\n \n' + "Multi languages links: " + "\n" +multiLangLinks.join("\n")+ "\n\n"+ "Quota Link: " + "https://survey-d.researchnow.com/rep/selfserve/53b/"+id+":dashboard?tab=quota&split=none"
		copyToClipboard.innerHTML = '<a class="waves-effect waves-light btn-small" onclick="copyLinks()">Copy to clipboard</a>'
		clearValues()
	}
	else{
		var live = livelink
		liveLinkElement.innerHTML = "Default Live link: " + live.link(livelink)
		setUrlMultiLang(id, exposed, control, livelink)
		var multiLangLinks = []
		var i = 0
		var x = $("div#multiLang:first").find("p").toArray();
		for(i = 0; i< x.length; i++){
			multiLangLinks.push($(x[i]).contents().text())
		}
		copy.value = "Link: " + livelink + '\n \n' + "Multi languages links: " + "\n" +multiLangLinks.join("\n")+ '\n \n' + "Quota Link: " + "https://survey-d.researchnow.com/rep/selfserve/53b/"+id+":dashboard?tab=quota&split=none"
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

function multiLang(){
	 var x = document.getElementById("languages");
	if (document.getElementById("multi").checked == true) {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
}

function setUrlMultiLang(id, exposed, control, livelink){
	if(document.getElementById("multi").checked == true){
		var obj = myOption,
        options = obj.options, 
        selected = [], i, str;
        selectedLang = [], i, str;
    
	    for (i = 0; i < options.length; i++) {
	    	options[i].selected && selectedLang.push(obj[i].text);
	        options[i].selected && selected.push(obj[i].value);
	    }
	    
	    str = selected;
	    	
	    	if(document.getElementById("yes").checked == true){
	    		for (ctr = 0; ctr < selectedLang.length; ctr++){
	    			var para = document.createElement("p");
	    			para.innerHTML = selectedLang[ctr]+ '&nbsp; Exposed: <a href="'+livelink+"&hType=1&decLang="+str[ctr]+'">'+livelink+"&hType=1&decLang="+str[ctr]+'</a>'
	    			document.getElementById("multiLang").appendChild(para);
	    		}
	    		for (ctr = 0; ctr < selectedLang.length; ctr++){
	    			var para = document.createElement("p");
	    		//var exposedLink = document.createTextNode(selectedLang[ctr]+" Exposed: "+livelink+"&hType=1"+"&decLang=&"+str[ctr])
	    			para.innerHTML = selectedLang[ctr]+ '&nbsp; Control: <a href="'+livelink+"&hType=2&rnid=$rnid&study=$study&c=$c&src=$src"+"&decLang="+str[ctr]+'">'+livelink+"&hType=2&decLang="+str[ctr]+'</a>'
	    			document.getElementById("multiLang").appendChild(para);
	    		}
	    		//var controlLink = document.createTextNode(selectedLang[ctr]+" Control: "+livelink+"&hType=2"+"&decLang=&"+str[ctr])
	    		//exposed.appendChild(exposedLink)
	    		//control.appendChild(controlLink)

	    		
	    	}
	    	else{
	    		for (ctr = 0; ctr < selectedLang.length; ctr++){
	    		var para = document.createElement("p");
	    		para.innerHTML = selectedLang[ctr]+": " + '<a href="'+livelink+"&decLang="+str[ctr]+'">'+livelink+"&decLang="+str[ctr]+'</a>'
		    	//var link = document.createTextNode(selectedLang[ctr]+": "+livelink+"&decLang=&"+str[ctr]);

		    	//para.appendChild(link);
		    	document.getElementById("multiLang").appendChild(para); 
		    	}
	    	}
	     
	}
	
}
