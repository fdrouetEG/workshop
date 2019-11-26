const fs = require('fs')

const shopFile = `products.json`;

exports.orderProductById = function(id, books){
    let found = books.findIndex(element => element.id == id);
    //console.log(found);
    if(found!=-1){
        books[found].orders_counter++;
    }
    //console.log(books);
    fs.writeFile(shopFile, JSON.stringify(books), (err) => {
        if (err) throw err;
        console.log(`Commande terminée. Voici votre fichier: [${books[found].file_link}]`);
    });
}