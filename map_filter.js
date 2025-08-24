//map() creates a new array by applying a fucntion to each element of the array
const nums=[1,2,3,4,5,6];
const square= nums.map(x=>x*2);
console.log(square);

const dual_map=square.map(y=>y*y);
console.log(dual_map);

//another use of map 
const data=[
    {
        name:"varad",
        age:19,
        stream:'cs'
    },
    {
        name:"rohit",
        age:19,
        stream:'civil'
    },
    {
        name:"devarshi",
        age:19,
        stream:'cse'
    }
]
const dept= data.map(auto =>auto.stream);
console.log(dept);


//filter() creates a array with the elements which pass a condition 
const filter_me=[2,12,3,2,55,63,24,118];
const filtered= filter_me.filter(it=>it%2==0); // condition for even numbers
console.log(filtered);
