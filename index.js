const fs = require('fs');

const shopFile = `products.json`;
var books;


function initShop(){
    let shop = fs.readFile(shopFile, 'utf8', (err, file)=>{
        try{
            //console.log(file);
            books = JSON.parse(file);
        }catch(e){
            console.log(e);
        }
        console.log(books);
    });
}

initShop();