document.querySelector("#submit").addEventListener("click",function(event){
    let container = document.querySelector("#display");
    container.innerHTML="";
    event.preventDefault();
    let url1 = document.querySelector("#url").value;
    const url = `http://www.omdbapi.com/?apikey=38ee39b&t=${url1}`;

    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        
        if(response.Response=="True"){
            displaydata(response);
        }
        else{
            error1(); 
        }
        
    })
    .catch(function(err){
        console.log("Something Went Wrong");
    })

    function displaydata(alldata){
       
        let img = document.createElement("img");
        
        img.setAttribute("src",alldata.Poster);

        let div1 = document.createElement("div");

        let name = document.createElement("h2");
        name.innerText= "Title: "+" "+alldata.Title;

        let year= document.createElement("h3");
        year.innerText=" Released Date: "+" "+alldata.Released;

        let imdbrating= document.createElement("h3");
        imdbrating.innerText="IMDb Rating: "+" "+alldata.imdbRating;

        let genre= document.createElement("h3");
        genre.innerText="Genre : "+" "+alldata.Genre;

        container.append(img,div1);
        div1.append(name,year,imdbrating,genre);

        
    }

    function error1(){
        

        let img1 = document.createElement("img");
        img1.setAttribute("src","https://c.tenor.com/unvXyxtdn3oAAAAC/no-result.gif");

       container.append(img1);


    }
        
})

