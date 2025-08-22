//spread operator 
const nums1=[1,2,3,12,12,1,2,12,];
const nums2=[323,442,12,134,21,24,33,231];


//making a copy of nums 
const copynums=[...nums1]; // this copies all the elements in nums1 and add them to the arr "copynums"
console.log(copynums);

const concatinate=[...nums1,...nums2,99];
console.log(concatinate );
// spread also works with objects

const userdata={
    name:"varad",
    section:"B3",
    batch:"B1",
    phone:999999999
};
const copyobj1=[...userdata];
console.log(copyobj1)
// rest operator 

