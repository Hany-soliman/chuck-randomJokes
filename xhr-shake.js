const URL = 'https://api.chucknorris.io/jokes/random'

const btn = document.querySelector('.btn')
const content = document.querySelector('.content')

btn.addEventListener('click', ()=>{
    getJoke(URL)
    
})

function getJoke(url){
const xhr = new XMLHttpRequest()

xhr.open('GET', url)
xhr.onreadystatechange = function(){
    if(this.readyState !==4)return
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.response)
        content.textContent = data.value
    } else {
        console.log({
            status: this.status,
            text: this.statusText
        });
    }
}
xhr.send()
}