function prepareGallery(){
	if(!document.getElementsByTagName||!document.getElementById||!document.getElementById("imagegallery")) return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(i=0;i<links.length;i++){
		links[i].onclick=function(){return !showPic(this);
		}
	}
}
function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
		var text=whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var description=document.getElementById("description");
		if(description.firstChild.nodeType==3){
		description.firstChild.nodeValue=text;
		}
	}
	return true;
	
}
function preparePlaceholder(){
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var placeholder=document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.jpg");
	placeholder.setAttribute("alt","A blank image");
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var desctext=document.createTextNode("选择一位梦想编织者");
	description.appendChild(desctext);
	var gallery=document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if (parent.laseChild==targetElement) {
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func();
		}else{
		window.onload=function(){
			oldonload();
			func();
			}
		}
	}
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);