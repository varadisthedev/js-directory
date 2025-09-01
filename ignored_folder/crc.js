// using crc 

function encodingData(){
    let n=message.length(); 
}
const data=1001001000;
const crc=111;

const message=data+crc;
console.log(message);


try{
    console.log(message/crc);
}
catch(error){
    console.log(`caught an error: &{error}`);
}
//transmitter side


//reciever
