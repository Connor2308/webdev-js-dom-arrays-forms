
//
(function(){
    //code starts here
    document.getElementById("myHeading").innerHTML = "Connor";//the get element Id will the Dom element that is under the myHeading
    document.querySelector('nav ul li').setAttribute('class','currentPage');'#'//setattribute take the name of the attribute you want to change and changes the attribute that wasn't in the HTML to begin with
    document.querySelector('nav ul li a').setAttribute('href', 
'http://www.google.co.uk');
    //code ends here
})();
document.querySelector(".red").addEventListener('click', function(ev){ 
    document.querySelector('body').setAttribute('class', "redBack"); 
})
document.querySelector(".blue").addEventListener('click', function(ev){ 
    document.querySelector('body').setAttribute('class', "blueBack"); 
})
document.querySelector(".green").addEventListener('click', function(ev){ 
    document.querySelector('body').setAttribute('class', "greenBack"); 
})
document.querySelector(".white").addEventListener('click', function(ev){ 
    document.querySelector('body').setAttribute('class', "DefaultBack"); 
})
document.getElementById('myTestEvent').onclick = 
(function(){
    console.log(" Hello ");
})
document.getElementById('myTestEvent').addEventListener('click', 
(function(ev){ 
 console.dir(ev); 
}))