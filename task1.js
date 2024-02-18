let Hobbit = {
    name: 'Bilbo Baggins',
    age: 51,
    hobby: 'to eat',
    getInfo: function () {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ': ' + this[key])
            }
        }
    }
}

Hobbit.getInfo();

Hobbit.action = 'goes on unexpected journey'

Hobbit.getInfo();

