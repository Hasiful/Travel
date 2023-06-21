
/* =====================================
            View tour page
=======================================*/

// custom range

const mySlider = document.getElementById("mySlider");

const sliderValue = document.getElementById("slider-value");

function slider(){
    valPercent = (mySlider.value / mySlider.max)*100;
    mySlider.style.background = `linear-gradient(to right, var(--main-color) ${valPercent}%, #d5d5d5 ${valPercent}%)`;
    sliderValue.textContent = mySlider.value;
}
slider();

// filter sidebar
const filterElement = {
  filter: document.getElementById("filter"),
  crossFilter: document.getElementById("cross_tourside"),
  openFilter: document.getElementById("sidefilterBtn"),
  tourView: document.getElementById("tour_view"),
  listBtn: document.getElementById("list_btn"),
  gridBtn: document.getElementById("grid_btn")

}

// filterElement destructure
let {filter, crossFilter, openFilter, gridBtn, listBtn, tourView} = filterElement

openFilter.addEventListener("click", function(){
  filter.classList.add("active")
})

crossFilter.addEventListener("click", function(){
  filter.classList.remove("active")
})

// window click
window.addEventListener("click", function(event) {
  if (!sidefilterBtn.contains(event.target) && !filter.contains(event.target)) {
    filter.classList.remove("active")
  }
});

// grid
gridBtn.addEventListener("click", function(){
  tourView.classList.add("tourgrid_wrapper")
  tourView.classList.remove("tourlist_wrapper")
})

// list
listBtn.addEventListener("click", function(){
  tourView.classList.add("tourlist_wrapper")
  tourView.classList.remove("tourgrid_wrapper")
})


