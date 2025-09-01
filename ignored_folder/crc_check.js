function calculateCRC(data, polynomial) {
    let dataArray=data.split('').map(Number);
    let polyArray=polynomial.split('').map(Number);
    
    console.log('Data:',data);
    console.log('polynomial:',polynomial);
    console.log('');
    
    // add 0 for crc correction
    let remainder=[...dataArray,...Array(polyArray.length-1).fill(0)];
    console.log('Data with zeros:',remainder.join(''));
    
    // Perform XOR division
    for (let i=0; i<=remainder.length-polyArray.length;i++) {
        
    }
    
    // Extract CRC
    let crc=remainder.slice(-3).join(''); // Last 3 bits for polynomial 1101
    console.log('Final CRC:',crc);
    return crc;
}

function transmitter(data,polynomial) {
    let crc=calculateCRC(data,polynomial);
    let frame=data+crc;
    console.log('Frame to send:',frame);
    return frame;
}

// reciever side
function receiver(frame, polynomial) {
    console.log('Received frame:', frame);
    let remainder=calculateCRC(frame, polynomial);
    if (remainder==='000'){
        console.log('No errors detected');
        let originalData =frame.slice(0,-3); //  to remove CRC
        console.log('Original data:',originalData);
        return true;
    }else{
        console.log('Error detected! Remainder:', remainder);
        return false;
    }
}

let data='1001001000';
let poly='1101';

let frame=transmitter(data, poly);
let isValid=receiver(frame, poly);
