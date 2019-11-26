const fs = require('fs');
const readline = require('readline');
const order = require('./order')
const shopFile = `products.json`;

var books;

fs.readFile(shopFile, 'utf8', (err, file)=>{
    if(err) throw(err);
    try{
        //console.log(file);
        books = JSON.parse(file);
        initShop();
    }catch(e){
        console.log(e);
    }
    //console.log(books);
});

function getAllProducts(){
    console.log("Bienvenue. Voici les produits disponibles :");
    books.forEach(element => {
        console.log(`[${element.id}]-[${element.name}] / [${element.EUR_price}] / [${element.orders_counter}]`);
    });
}

function initShop(){
    getAllProducts();
    //orderProductById(1);
    let rl = readline.createInterface({input: process.stdin, output : process.stdout, terminal: false}); 
    rl.on('line', function(line){
        //console.log(line);
        if(line.startsWith("I want product")){
            //console.log(parseInt(line.substring(15)));
            order.orderProductById(parseInt(line.substring(15)), books);
        };
    });
}




