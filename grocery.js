let l1 =`1.fruits
2.bread
3.vegetable
4.milk
5.medecines
6.snacks`;
console.log(l1);
function tag(string,...values){
    console.log(string);
    console.log(values);
}
tag `${l1}!`;