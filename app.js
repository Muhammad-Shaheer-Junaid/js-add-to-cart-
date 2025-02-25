let getDiv = document.getElementById('main')
fetch('https://fakestoreapi.com/products')
.then(data => data.json())
.then(data => {
    data.map((val,index) => {
        getDiv.innerHTML += `<div>
        <div class="card " style="width: 18rem; ">
  <img src="${val.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p>${val.id}</p>
    <p>${val.title}</p>
    <b><p>Price : ${val.price}</p></b>
    <p class="card-text">${val.description}</p>
    <p class="card-text">${val.category}</p>
    <a href="#" class="btn"><button type="button" class="btn btn-outline-success">Add To Cart</button>
</a>
  </div>
</div></div>`
    })
})
.catch((error) => {
    console.log(error)
})




//<h5 class="card-title">Card title</h5>