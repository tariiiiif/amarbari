const properties=[
{title:'Luxury Heights',price:'৳85,00,000',map:'https://maps.google.com/maps?q=rajshahi&output=embed'},
{title:'Green Residency',price:'৳65,00,000',map:'https://maps.google.com/maps?q=kazla&output=embed'}
];

document.getElementById('propertyCount').textContent=document.querySelectorAll('.property-card').length;

document.querySelectorAll('.counter').forEach(c=>{
let target=+c.dataset.target,count=0;
let t=setInterval(()=>{count+=Math.ceil(target/50);c.textContent=Math.min(count,target);if(count>=target)clearInterval(t)},30);
});

function openModal(i){
document.getElementById('modal').style.display='block';
document.getElementById('modalBody').innerHTML=`<h2>${properties[i].title}</h2><p>${properties[i].price}</p><iframe src="${properties[i].map}" width="100%" height="300"></iframe>`;
}
function closeModal(){document.getElementById('modal').style.display='none';}

const locationFilter=document.getElementById('locationFilter');
const priceRange=document.getElementById('priceRange');
const priceValue=document.getElementById('priceValue');
priceValue.textContent=Number(priceRange.value).toLocaleString();

function filterProperties(){
document.querySelectorAll('.property-card').forEach(card=>{
const show=(!locationFilter.value||card.dataset.location===locationFilter.value)&&(+card.dataset.price<=+priceRange.value);
card.style.display=show?'block':'none';
});
}
locationFilter.addEventListener('change',filterProperties);
priceRange.addEventListener('input',()=>{priceValue.textContent=Number(priceRange.value).toLocaleString();filterProperties();});
