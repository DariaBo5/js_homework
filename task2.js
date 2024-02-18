let services = {

    haircut: "60 uah",
    shave: "80 uah",
    hairWash: "100 uah",
    totalPrice: function () {
        let total = 0
        for (let key in this) {
            if (!isNaN(parseInt(this[key]))) {
                total += parseInt(this[key])
            }
        }
        console.log('Сума наданих послуг = ' + total + ' uah')
    },
    minPrice: function () {
        let min = Infinity
        for (let key in this) {
            let price = parseInt(this[key])
            if (!isNaN(price)) {
                min = Math.min(min, price)
            }

        }

        console.log('Мінімальна ціна = ' + min + ' uah')
    },
    maxPrice: function () {
        let max = -Infinity
        for (let key in this) {
            let price = parseInt(this[key])
            if (!isNaN(price)) {
                max = Math.max(max, price)
            }
        }
        console.log('Максимальна ціна = ' + max + ' uah')
    }

};

services.totalPrice();
services.minPrice();
services.maxPrice();

services.lashes = "400 uah"

services.totalPrice();
services.minPrice();
services.maxPrice();


