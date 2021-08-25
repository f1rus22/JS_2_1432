Vue.component('cart', {
    data() {
        return {
            basket: [],

        }
    },
    mounted() {
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents) {
                    this.$data.basket.push(item);
                }
            });
    },
    methods: {
        addProduct(item) {
            let find = this.basket.find(el => el.id_product === item.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
                    .then(data => {
                        if (data.result === 1) {
                            find.quantity++
                        }
                    })
            } else {
                const prod = Object.assign({ quantity: 1 }, item);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.basket.push(prod)
                        }
                    })
            }

        },
        remove(url, data) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => {
                    result.json()
                    this.fetchProducts('/api/cart')
                        .then(data => {
                            console.log(data)
                            this.basket[1] = data.contents;
                        });
                })
                .catch(error => {
                    console.log(error)
                })
        },
        deleteItem(id) {
            let remove = this.remove;
            let cart = this.basket[1];
            let find = cart.find(el => el.id_product === id);
            remove(`/api/cart/${id}`, find);
        }
    },
    props: ['visibility'],
    template: `
    <div class="basket" v-show="visibility">
        <div class="basketRow basketHeader">
            <div>Название товара</div>
            <div>Количество</div>
            <div>Цена за шт.</div>
            <div>Итого</div>
            <div></div>
        </div>
        <p v-if="!basket.length">Корзина пуста</p>
        <basketGood v-for="item of basket" :key="item.id_product" :good="item" @deleteItem="deleteItem"></basketGood>
    </div>
    `
});

Vue.component('basketGood', {
    props: ['good'],
    template: `
    <div class="basketGood">
        <div>
            {{good.product_name}}
        </div>
        <div>
            <span class="productCount" :data-productId="good.id_product">
                {{good.quantity}}
            </span>
            шт.
        </div>
        <div>   
            {{good.price}}
        </div>
        <div>
            $<span class="productTotalRow" :data-productId="good.id_product">
                {{good.price * good.quantity}}
            </span>
        </div>
        <button class="removeGood" @click="$emit('deleteItem', good)"><img src="img/closeIcon.png"
        alt=""></button>
    </div>
    `
})