'use strict'

class Products {
    constructor(id,description,price,stock){
        this.id = id,
        this.description = description,
        this.price = price,
        this.stock = stock;
    }

    changeDescription(reemplaceDescription){
        this.description = reemplaceDescription;
    }

    updatePrice(newPrice){
        this.price = newPrice;
    }

    increaseStock(increment){
        this.stock += increment;
    }

    reduceStock(decreace){
        this.stock -= decreace;
    }
}

let prod1 = new Products(1, "hammer 10pulg." , 9.90, 10);
console.log(prod1)

prod1.changeDescription("hammer 5pulg.")
prod1.updatePrice(7.35);
prod1.increaseStock(4);
console.log(prod1);