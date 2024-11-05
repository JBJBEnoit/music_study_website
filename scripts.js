"use strict";

    function toggleMenu()
    {       
        document.getElementById("navList").classList.toggle("change");
        var items = document.getElementsByClassName("navItem");

        Array.from(items).forEach(function(i) { i.classList.toggle("change");});
      
    }

window.onload = ()=>{

    
 //   var contents = document.getElementsByTagName("content");
//    var contArr = Array.from(contents);
//        contArr.forEach((i)=>{i.addEventListener('click', ()=>{
//        var items = document.getElementsByClassName("navItem");
//        var arr = Array.from(items);
//        if (arr[0].classList.contains("change")){
//            toggleMenu();
//        }
//    });});
    var navs = document.getElementsByTagName("nav");
    var navArr = Array.from(navs);
    navArr.forEach((n) =>{      
        n.innerHTML =   `<div id='hamburger'>
                        <div class='navItem hmbgrBar hBar1' id='bar1'></div>
                        <div class='navItem hmbgrBar hBar2' id='bar2'></div>
                        <div class='navItem hmbgrBar hBar3' id='bar3'></div>               
                        </div>
                        <ul id='navList'>
                        <li class='navItem'><a href=index.html>home</a></li>
                        <li class='navItem'><a href=lessons.html>lessons</a></li>
                        <li class='navItem'><a href=about.html>about</a></li>
                        <li class='navItem'><a href=contact.html>contact</a></li>
                        </ul>`;
    });
    document.getElementById("hamburger").addEventListener('click', toggleMenu);
};

window.onresize = ()=>{
   
    var items = document.getElementsByClassName("navItem");
    var arr = Array.from(items);
    if (arr[0].classList.contains("change")){
        toggleMenu();
    }      
};

