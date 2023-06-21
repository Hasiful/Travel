
let inputs = document.querySelectorAll(".otp_input input");
let values = Array(4);
let clipData;
inputs[0].focus();

inputs.forEach((tag, index) => {
  tag.addEventListener('keyup', (event) => {
    if(event.code === "Backspace" && hasNoValue(index)) {
      if(index > 0) inputs[index - 1].focus();
    }
    
    //else if any input move focus to next or out
    else if (tag.value !== "") {
      (index < inputs.length - 1) ? inputs[index + 1].focus() : tag.blur();
    }
    
    //add val to array to track prev vals
    values[index] = event.target.value;
  });
  
  tag.addEventListener('input', () => {
    //replace digit if already exists
    if(tag.value > 10) {
      tag.value = tag.value % 10;
    }
  });
  
  tag.addEventListener('paste', (event) => {
    event.preventDefault();
    clipData = event.clipboardData.getData("text/plain").split('');
    filldata(index);
  })
})

function filldata(index) {
  for(let i = index; i < inputs.length; i++) {
    inputs[i].value = clipData.shift();
  }
}

function hasNoValue(index) {
  if(values[index] || values[index] === 0) 
    return false;
  
  return true;
}