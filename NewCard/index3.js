function add() 
{
    let productname = form.productname.value;
    let productpicture = form.productpicture.value;
    let productprice = form.productprice.value;
    let image = img.slice(11);
    let html ='  
    <div class="card">
    <img class="card-img-top" src="/index3/img/${producpicture}" alt="Card image cap" style="height: 350px;"></img>
    <div class="card-body">
        <h5 class="card-title">${productname}</h5>
        <p class="card-text" id="productprice">${productprice}đ</p>
        <a href="#" class="btn btn-success">Đặt Mua</a>
    </div>    
</div>
'
  
    ;
   let app = document.querySelector('.row');
   app.innerHTML += html;
   console.log(log);

    
}
