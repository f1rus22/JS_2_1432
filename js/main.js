const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        basket: [],
        searchLine: '',
        isVisibleCart: false,
        error: false
    },
    methods: {
        getJSON(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    this.error = true;
                })
        },
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.filteredGoods.filter(good => regexp.test(good.product_name));
        },
        addProduct(item) {
            this.getJSON(`${API_URL}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.basket.find(el => el.id_product === item.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            const prod = Object.assign({ quantity: 1 }, item);
                            this.basket.push(prod)
                        }
                    }
                })
        },
        remove(item) {
            this.getJSON(`${API_URL}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.basket.splice(this.basket.indexOf(item), 1);
                        }
                    }
                })
        }

    },
    mounted() {
        this.getJSON(`${API_URL}/catalogData.json`)
            .then(data => {
                for (let item of data) {
                    this.$data.goods.push(item);
                    this.$data.filteredGoods.push(item);
                }
            });
        this.getJSON(`${API_URL}/getBasket.json`)
            .then(data => {
                for (let item of data.contents) {
                    this.basket.push(item);
                }
            })
    }
});