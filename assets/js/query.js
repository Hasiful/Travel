// query form
let queryType = document.getElementById("query__type")
let queryMeal = document.getElementById("query__meal")

queryType.addEventListener("change", function(){
  if(queryType.value == "Package"){
    queryMeal.style.cssText = "display: block"
  }
  else{
    queryMeal.style.cssText = "display: none"
  }
})