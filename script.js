const input=document.getElementById('movie')
const search=document.getElementById('search')
const movieContainer=document.getElementById('main')
const myApiKey='a392574';
async function fetchData(movie)
{
    let data=await fetch(`https://www.omdbapi.com/?apikey=${myApiKey}&t=${movie}`);
    let response=await data.json();
    displayData(response);
    console.log(response);
}

    
function displayData(data){
movieContainer.innerHTML=`<div class="mainleft">
    <img src=${data.Poster} alt="image class="mainleft">
</div>
<div class="mainright">
    
    <div class="upper">
    <h1 id="tittle">${data.Title}</h1>
    <p id="rating">Rating <span style="font-size: 2em; color: gold;">&#9733;</span> ${data.imdbRating} </p>
    </div>
    <div class="middle">
        <p class="type">${data.Genre} </p>
    </div>
    <div class="lower">
     <p class="moviedetail"><strong> Release date : </strong> ${data.Released}</p>
     <p class="moviedetail"><strong> Duration :  </strong>${data.Runtime}</p>
     <p class="moviedetail"><strong> Cast :  </strong>${data.Actors}</p>
     <p class="moviedetail"><strong> Plot :</strong> ${data.Plot}</p>
      <p class="moviedetail"><strong> Language :</strong> ${data.Language}</p>
       <p class="moviedetail"><strong> Type :</strong> ${data.Type}</p>
        <p class="moviedetail"><strong> Director :</strong> ${data.Director}</p>
         <p class="moviedetail"><strong> BoxOffice Collection:</strong> ${data.BoxOffice}</p>
          <p class="moviedetail"><strong> Awards :</strong> ${data.Awards}</p>
    </div>
</div>`

}

search.addEventListener('click',()=>{
    let moviename=input.value;
    if(moviename==='')
    {
        alert("movie name can not be empty");
    }
    else{
        fetchData(moviename)
    }
})