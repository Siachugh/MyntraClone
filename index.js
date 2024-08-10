let bagItems;
onLoad();

function onLoad()
{
 let bagItemsstr=localStorage.getItem('bagItems');
 bagItems=bagItemsstr ? JSON.parse(bagItemsstr) : [];
displayItemsOnHomePage();
displayBagIcon();
}

function addToBag(itemId)
{
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagIcon();
}


function displayBagIcon()
{
  let bagItemCountElement=document.querySelector('.bag-item-count');

  if(bagItems.length>0)
  {
    bagItemCountElement.style.visibility= 'visible';
    bagItemCountElement.innerText=bagItems.length;}
  else
  {
  bagItemCountElement.style.visibility='hidden';
  }

}

function displayItemsOnHomePage()
{
  let itemsContainerElement=document.querySelector('.items-container');
  if (!itemsContainerElement)
  { return; 
  }
  let innerHTML='';
items.forEach(item =>{
innerHTML +=`<div class="item-container">
<img class="item-image" src="${item.image}" alt="item image">
    <div class="rating">
      ${item.rating.stars} ⭐|${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>

    <div class="pricing">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discounted-price">(${item.discount_percentage}%OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})"> Add to Bag</button>`
});

itemsContainerElement.innerHTML=innerHTML;
}
// let item={
// //   item_image:'1.jpg',
// //   rating:
// //   {
// //     stars:4.5,
// //     no_of_reviews:1400,
// //   },
// //   company_name:'Carlton London',
// //   item_name:'Rhodium-Plated CZ Floral Studs',
// //   pricing:{
// //     current_price: 606,
// //     original_price: 1045,
// //     discounted_percentage:42,
// //   },
// // }
