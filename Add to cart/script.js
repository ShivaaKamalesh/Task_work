let ArrProducts=[{
    id:1,
    name:"HTML",
    image:"Img1.png",
    price:"1000",
    rating:5,

},
{
    id:2,
    name:"Css",
    image:"Img2.png",
    price:"1000",
    rating:4,

},
{
    id:3,
    name:"JavaScript",
    image:"Img3.png",
    price:"5000",
    rating:5,

},
{
    id:4,
    name:"JQuery",
    image:"Img4.png",
    price:"10000",
    rating:5,

},
{
    id:5,
    name:"React",
    image:"Img4.webp",
    price:"1000",
    rating:5,

},
{
    id:6,
    name:"Angular",
    image:"Img6.png",
    price:"1000",
    rating:5,

},
]


const body=document.querySelector("body");

// console.log(body);
products=document.querySelector(".products"),shoppingBasket =document.querySelector(".shoppingBasket"),closeCart =document.querySelector(".close"),productList =document.querySelector(".productList"),quantity=document.querySelector(".quantity"),total=document.querySelector(".total");
 let checkOutList=[];
 
 shoppingBasket.onclick=()=>{
    body.classList.add("active");
 }
 closeCart.onclick=()=>{
    body.classList.remove("active");
 }

function onInIt(){

    ArrProducts.forEach((item,key)=>{
        // console.log(item);
        let div =document.createElement("div");
        div.classList.add("item");
        
        let star="";
        for(i=0;i<item.rating;i++){
            star +=`<i class="fa fa-star"></i>`;
        }

        div.innerHTML=`
        <img src="images/${item.image}" />
        <div class="name">${item.name}</div>
        <div>${star}</div>
        <div className="price"><small>$</small>${item.price}</div>
        <button onclick="addToCart(${key})"><i class="fa fa-cart-plus"></i> Add to Cart </button> 
        `;

        products.appendChild(div);
    })

}
onInIt();


function addToCart(Id){
  
    if(checkOutList[Id]==null){
        checkOutList[Id]=ArrProducts[Id];
        checkOutList[Id].quantity=1;

    }else{
        checkOutList[Id].quantity +=1;
    }
reloadCart();
}
function reloadCart(){
    productList.innerHTML="";
    let count=0;
    let totalPrice=0;

    checkOutList.forEach((item,key)=>{
        totalPrice+=parseInt(item.price*item.quantity)
    count+=item.quantity;
    let li =document.createElement("li");
    li.innerHTML=`
    <img src="images/${item.image}">
    <div>${item.name}</div>
    <div class="count">${item.price}</div>
    <div>
    <button onclick="changeQuantity(${key},${item.quantity-1})">-</button>
    <div class="count">${item.quantity}</div>
    <button onclick="changeQuantity(${key},${item.quantity+1})">+</button>

    </div>
    `;
    productList.appendChild(li);
    })
    total.innerHTML=`<small>Subtotal (${count} itmes)</small>`+totalPrice;
    quantity.innerHTML=count;
}

function changeQuantity(key,quantity){
    if(quantity==0){
        delete checkOutList[key];
    }
    else{
        checkOutList[key].quantity=quantity;
    }
    reloadCart();
}