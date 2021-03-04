var n = ' '
function upDate1(){
  n = document.getElementById('change').src
  document.getElementById('change').src = "./image/Snowb.jpg"
}
function upDate2(){
  n = document.getElementById('change').src
  document.getElementById('change').src = "./image/zhan.jpg"
}
function upDate3(){
  n = document.getElementById('change').src
  document.getElementById('change').src = "./image/tera.jpg"
}


function unDo(){
  document.getElementById('change').src = n
}

