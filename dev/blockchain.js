// block chain constructor- create genesis block ,chain,pending transaction
// create new block- nonce, previous block hash,hash
// get last block- length-1
// create new transaction- amount, sender, recipient (block of data)
// hash block- hashing the block 'sha256'
// proof of work- secure hashing repeatedly

const sha256 = require('sha256');    //importing hashing package

function Blockchain() {
    //create a genesis block(which is the first block in the block chain)---- [0]
    this.createNewBlock(100,'0','0');
    this.chain =  [];
    this.pendingTransactions = [];
}

//then this pending transaction is inserted into a newblock this all the details so it becomes immutable------ [2]
//creating a new block with the new transactions that has been created since the last transaction has been mined
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    const newBlock = {
        index : this.chain.length + 1,
        timeStamp : Date.now(),
        transactions : this.pendingTransactions,
        nonce : nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };
    //clearing the new transaction after adding the transaction into the new block---- [3]
    this.pendingTransactions = [];
    //pushing the new block into the chain by pushing it------- [4]
    this.chain.push(newBlock);
    // returning the new block
    return newBlock;
}

// property method to get the last block in the chain
Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length-1];
}

//when a transaction has been created it pushed to pending transaction------- [1]
//create new transaction property method with amount, sender-address, recipient-address
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction={
        amount:amount,
        sender: sender,
        recipient:recipient
    };
    this.pendingTransactions.push(newTransaction);
    //returning the last block where this new Transaction has been added to(block)
    return this.getLastBlock()['index'] +1;
}

//Hash block method will intake
// nonce, previousBlockHash, hash (block data) and gives back a random hash of string----[6]
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce ){
//in return we will get a fixed length of string 'gjhgvshj4hj5g32f23gh4f32v'
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}
//repeatedly hash block until it finds correct hash=>'0000jhsdgfhjdg'----- [5]
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
    //bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce );
    //repeatedly hash block until it finds correct hash=>'0000jhsdgfhjdg'
    //uses current block data and previous block hash
    //continuously changes nonce value until it finds the correct hash
    //returns to us the nonce that creates the correct hash
    let nonce=0;
    let hash= this.hashBlock(previousBlockHash,currentBlockData,nonce);
    while(hash.substring(0,4) !== '0000'){
        nonce++;
        hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
    }
    return nonce;
}

//Exporting the constructor function for testing the create new block
module.exports = Blockchain;