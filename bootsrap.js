const dive = document.createElement('h2');
dive.innerHTML='@copyright 2021'
const parent = document.querySelector('#footer');
parent.appendChild(dive);

function myFunction1(){
    document.getElementsByTagName("h2")[0].style.textAlign="center";
}
function myFunction2(){
    alert("hi User")
    for(let i=0; i<4; i++){

        document.getElementsByTagName("li")[i].style.display="inline-block";
        document.getElementsByTagName("li")[i].style.marginLeft="25px";
        document.getElementsByTagName("a")[i].style.margin="10px 25px 10px";
        document.getElementsByTagName("li")[i].style.backgroundColor="pink";
        document.getElementsByTagName("a")[i].style.backgroundColor="pink";

    }
    
    
};
/*for(let i=0; i<4; i++){

document.getElementsByTagName("a")[i].addEventListener("mouseover",function(){
      document.getElementsByTagName("a")[i].style.backgroundColor = "red";
    

})};*/