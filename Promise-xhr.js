const URL = "https://api.chucknorris.io/jokes/random";

const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");

btn.addEventListener("click", () => {
  getJoke(URL).then(response => displayData(response))
  .catch((err)=> console.log(err))
});

function getJoke(url) {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.open("GET", url);
        xhr.send();
        xhr.onreadystatechange = function () {
          if (this.readyState !== 4) return;
          if (this.readyState === 4 && this.status === 200) {
            resolve(xhr.response)
          } else {
            reject({
              status: this.status,
              text: this.statusText,
            });
          }
        };
    })
  
  
}

function displayData(data){
    img.classList.add("shake-img");
    const payload = JSON.parse(data);
    content.textContent = payload.value;
    const random = Math.random() * 1000;
    setTimeout(() => {
      img.classList.remove("shake-img");
    }, random);
}
