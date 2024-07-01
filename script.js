let apikey="d0d93d713ff442988444dc1ae7368bd0"

const blogcontainer=document.getElementById("blog-container");

const searchField=document.getElementById("search-input")
const searchButton=document.getElementById("search-button")

searchButton.addEventListener("click", async () => {
      const query = searchField.value.trim()
      if (query !== "" ){
            try {
                  const articles = await fetchNewsQuery(query) 
                  displayBlogs(articles)

            }catch (error){
                  console.log("Error fetch news by query",error)
            }

      }
})


async function fetchRandomNews(){
      try{
            const apiurl=`https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=100&apikey=${apikey}`
            const response=await fetch(apiurl)
            const data =await response.json();
            console.log(data)
            return data.articles

      }catch(error){
            console.error("Error fetching Random news",error)
            return []

      }
}


async function fetchNewsQuery(query){
      try{
            const apiurl=`https://newsapi.org/v2/everything?q=${query}&pageSize=10&apikey=${apikey}`
            const response=await fetch(apiurl)
            const data =await response.json();
            console.log(data)
            return data.articles

      }catch(error){
            console.error("Error fetching Random news",error)
            return []

      }

} 



function displayBlogs(articles){
      blogcontainer.innerHTML=""
      articles.forEach((article)=>{
            const blogCard=document.createElement("div")
            blogCard.classList.add("blog-card")
            const img =document.createElement("img")
            img.src = article.urlToImage 
            img.alt=article.title 
            const title=document.createElement("h2")
            const trancatedtitle=article.title.length > 30? article.title.slice(0,30)+"....":article.title;
            title.textContent=trancatedtitle
            const description=document.createElement("p")
            const trancatedDes=article.description.length >150 ? article.description.slice(0,150)+"...":article.description;
            description.textContent=trancatedDes

            blogCard.appendChild(img)
            blogCard.appendChild(title )
            blogCard.appendChild(description)
            blogCard.addEventListener("click" ,()=>{
                  window.open(article.url,"_blank")
            })
            blogcontainer.appendChild(blogCard)
      })
}

(async ()=>{
      try{
            const articles = await fetchRandomNews();
            displayBlogs(articles)
      }catch(error){
            console.log("Error fetching Random news",error);
      }
})();