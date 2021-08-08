class Order {
    constructor() {
        this.hamburger = [];
        this.sumCalories = 0;
        this.sumOrder = 0;
        this.getOrder();
        this.show();
    }
    show() {

        alert(`Гамбургер размер: ${this.hamburger[0].size}, начинка: ${this.hamburger[1].filling}, доплнительно: ${this.hamburger[2].topping}, c колорийностью ${this.sumCalories} ккал. и общей стоимостью ${this.sumOrder} рублей`)

    }
    getOrder() {
        let hamburgers = [
            { size: "маленький", calories: 20, price: 50 },
            { size: "большой", calories: 40, price: 100 }
        ];
        let fillings = [
            { filling: "сыр", calories: 20, price: 10 },
            { filling: "салат", calories: 5, price: 20 },
            { filling: "картошка", calories: 10, price: 15 }
        ];
        let toppings = [
            { topping: "майонез", calories: 5, price: 20 },
            { topping: "приправа", calories: 0, price: 15 }
        ];
        this.hamburger.push(hamburgers[parseInt(Math.random() * hamburgers.length)], fillings[parseInt(Math.random() * fillings.length)], toppings[parseInt(Math.random() * toppings.length)])
        for (let i = 0; i < this.hamburger.length; i++) {
            this.sumCalories += this.hamburger[i].calories;
            this.sumOrder += this.hamburger[i].price
        }
    }

}

let button = document.querySelector('button').addEventListener('click', (order) => order = new Order);
