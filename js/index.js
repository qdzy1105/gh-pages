
getScreen();
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
window.onresize=function(){
getScreen()
}

function getScreen(){
    var width=document.querySelector("html").offsetWidth;
    if(width>1200){
        document.querySelector("title").innerHTML="大屏幕";
    }else if(width>992){
        document.querySelector("title").innerHTML="普通屏幕";
    }else if(width>768){
         document.querySelector("title").innerHTML="小屏幕";
    }else{
         document.querySelector("title").innerHTML="极小屏幕";
    }
}