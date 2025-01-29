let form=document.querySelector(".form")
let input=document.querySelector(".searchBar")
let container=document.querySelector(".container")


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let query=input.value;
    // console.log(query)
    movieApi(query)
    input.value=""

})
input.addEventListener('keypress' ,(event)=>{
// console.log(event);
form.click()
 
})

async function movieApi(query) {
    try{
        let req=await fetch(`https://www.omdbapi.com/?s=${query}&apikey=3461ef5d`)
        let movies=await req.json()
        console.log(movies)
        if(movies.Response){
            movieimage(movies.Search)
        }else{
            alert("please enter movie name")
        }
       
    }
    catch (error) {
        container.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
        console.error("Error:", error);
    }
}

function movieimage(movies){
    let searchEles = container.children;
    console.log(searchEles);
    
    for(let elem of searchEles) {elem.remove()}

    for(let movie of movies){
        let moviesrc=movie.Poster
        // console.log(src)
        let img=document.createElement('img')
        img.classList.add("card")
        img.src=moviesrc;
        container.appendChild(img)
    }
}