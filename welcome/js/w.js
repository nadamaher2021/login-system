let welcomeMassege=document.getElementById("welcomeMassege")
window.addEventListener('load',function(){
    displayUserName()
})
function displayUserName(){
    if(localStorage.getItem("userName")!==null){
  welcomeMassege.innerHTML=`welcome ${localStorage.getItem("userName")}`
    }
  else{
      welcomeMassege.innerHTML=""
   
  }
}