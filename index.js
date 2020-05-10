//201f6360 https://www.omdbapi.com/?s=dream&apikey=9b67fc54 http://www.omdbapi.com/?i=tt0180093

const xhr = new XMLHttpRequest()
const xhr1 = new XMLHttpRequest()

function rnd() {
  key = 'https://www.omdbapi.com/?s=' + document.getElementById("input").value + '&apikey=201f6360'
  const url = key
  xhr.open('GET', url)
  xhr.responseType = 'json'
  xhr.onload = () => {
    if(xhr.response.Response == 'False'){
      alert('No results for ' + document.getElementById("input").value)
    } else {
        
        paste()
      }
  }
  xhr.send()

}
var i = 0;

function raiting() {

  if (i < xhr.response.Search.length) {
    var url1 = 'http://www.omdbapi.com/?apikey=201f6360&i=' + xhr.response.Search[i].imdbID
    xhr1.open('GET', url1)
    xhr1.responseType = 'json'
    xhr1.send()
    xhr1.onload = () => {
      document.querySelectorAll('#raiting')[i].innerText = xhr1.response.imdbRating
      i++
      raiting()
    }
  } else {
    i = 0
    return i;
  }
}

function paste() {
  raiting()
  for (let i = 0; i < xhr.response.Search.length; i++) {
    if (xhr.response.Search[i].Poster == "N/A") {
      document.querySelectorAll("#poster")[i].src = './assets/img-not-found.jpg'
    } else {
      document.querySelectorAll("#poster")[i].src = xhr.response.Search[i].Poster
    }
    document.querySelectorAll('#year')[i].innerText = xhr.response.Search[i].Year
    document.querySelectorAll('#name')[i].innerText = xhr.response.Search[i].Title
    document.querySelectorAll('#name')[i].href = 'https://www.imdb.com/title/' + xhr.response.Search[i].imdbID
  }

}

input.onkeydown = handleInput;
function handleInput(event) {
  if(event.keyCode == 13){
    rnd()
  }
};

function clearThat(){
  document.getElementById("input").value = "";
}
function rnd1() {
  key = 'https://www.omdbapi.com/?s=dream&apikey=201f6360'
  const url = key
  xhr.open('GET', url)
  xhr.responseType = 'json'
  xhr.onload = () => {
    if(xhr.response.Response == 'False'){
      alert('No results for ' + document.getElementById("input").value)
    } else {

        paste()
      }
  }
  xhr.send()

}
rnd1()