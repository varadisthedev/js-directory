// combining the use of map() and filter()
//Example: Get names of affordable products that are in stock
const data=[
    {
        product:"one plus 10r",
        price:20000,
        isAvailabe:true
    },
    {
        product:"JBL overhead headphones",
        price:1600,
        isAvailabe:true
    },
    {
        product:"lego set, for kids  1-7",
        price:1000,
        isAvailabe:false
    },
    {
        product:"ashirvad aataa 1kg",
        price:800,
        isAvailabe:false
    },
]

const Greatindiansale=data.map(it=>({...it,
    price:it.price-it.price/10}));

console.log(Greatindiansale);


console.log("following products are availble in stock: ")
const SortByAvail=Greatindiansale.filter(it=> it.isAvailabe==true);
console.log(SortByAvail);