const Blockchain= require('./blockchain');

const bitcoin = new Blockchain();
// bitcoin.createNewBlock(234234,'sdfgsdfgdff','eeeeghfhdhdfhdfdf');
// bitcoin.createNewTransaction(100,'sdfgsdfgdsfsdssdffsf','wwwwghfhdhdfhdfdf');
// //mining a new block or creating a new block
// bitcoin.createNewBlock(1231231,'dfgdfgdfsdfg','fdgdfgeeeeghfh');
// //creating another set of transactions after the above block has been mined
// bitcoin.createNewTransaction(102,'sdfgdsfsdssdffsf','wwdhdfhdfdf');
// bitcoin.createNewTransaction(104,'fsdssdffsf','fhdhdfhdfdf');
// bitcoin.createNewTransaction(106,'gdsfsdssdffsf','gtregtregdfdf');
//mining a new block or creating a new block
// bitcoin.createNewBlock(44231,'dfdfsdfg','fdgeghfh');


//hashing test
const previousBlockHash = 'hjdgfjhsghjgshjf87687ghgshj';
const currentBlockData = [
    {
        amount: 10,
        sender: 'UHDFUSHSDHFH89324HNHKSDJHF',
        recipient: 'JHEWSFJH3423BDFWEBKHJ'
    },
    {
        amount: 40,
        sender: 'UHDFUdfssSHSDHFH89324HNHKSDJHF',
        recipient: 'JHEWfdrSFJH3423BDFWEBKHJ'
    },
    {
        amount: 30,
        sender: 'UHDSDHFH89324HNHKSDJHF',
        recipient: 'JHH3423BDFWEBKHJ'
    }
];
const nonce=100;
console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce));
// console.log(bitcoin.chain[1]);