function prepareGallery(){
	if(!document.getElementsByTagName||!document.getElementById||!document.getElementById("imagegallery")) return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(i=0;i<links.length;i++){
		links[i].onclick=function(){
			//var frame = document.getElementsByTagName("iframe")[0];
			//if(frame){
			//	frame.parentNode.removeChild(frame);
			//}
			//document.getElementById('jaeheng').getElementsByTagName('iframe')[0].sandbox = '';
			return !showPic(this);
		}
	}
	//links[0].onclick=function(){
	//	var cont='<p style="margin-bottom: 10px;"> 前端界冉冉升起的一颗新星--</p><iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="http://music.163.com/outchain/player?type=2&id=31381877&auto=0&height=66"></iframe>';
	//	//var p=document.getElementById("jaeheng").getElementsByTagName("p")[0];
	//	document.getElementById("jaeheng").getElementsByTagName("p")[0].outerHTML=cont;
	//	addSandboxAndChangeLocation('jaeheng');
	//	return !showPic(this);
	//}
}
function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var intro=document.getElementById("intro");
	var names=intro.getElementsByTagName("span");
	for (var i = 0; i < names.length; i++) {
		names[i].setAttribute("hidden","hidden");
	}	
	var myname=whichpic.getAttribute("alt");
	var teammate=document.getElementById(myname);
	teammate.removeAttribute("hidden");
	if(document.getElementById("description")){
		var text=whichpic.getAttribute("alt") ? whichpic.getAttribute("alt") : "";
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
	var placeholder=document.getElementById("placeholder");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("alt","A blank image");
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var desctext=document.createTextNode("选择一位梦想编织者");
	description.appendChild(desctext);
	var intro=document.getElementById("intro");
	var span=intro.getElementsByTagName("span")[0];
	intro.insertBefore(description,span);
}

function initPage(){
	var height = document.getElementById('content').offsetHeight;
	var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		x = w.innerWidth || e.clientWidth || g.clientWidth,
		y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	if(height<y){
		document.getElementById('content').style.paddingBottom=y-height+20+"px";
	}
}
//function addSandboxAndChangeLocation(id){
//	var iframe=document.getElementById(id).getElementsByTagName("iframe")[0];
//	iframe.sandbox = 'allow-same-origin allow-scripts';
//}
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
addLoadEvent(initPage);
window.onresize = function() {
	document.getElementById('content').style.paddingBottom=0;
	initPage();
};