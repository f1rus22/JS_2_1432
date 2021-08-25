Vue.component('products', {
    data() {
        return {
            goods: [],
            filteredGoods: [],
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    this.$data.goods.push(item);
                    this.$data.filteredGoods.push(item);
                    item.imgPath = `img/featured${item.id_product}.jpg`;

                }
            });
    },

    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filteredGoods = this.goods.filter(el => regexp.test(el.product_name));
        }
    },
    template: `
    <div class="featuredItems">
                <product v-for="item of filteredGoods" 
                :key="item.id_product" 
                :img = "item.imgPath"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
               </div>
`
});

Vue.component('product', {
    props: ['product', 'img'],
    template: `
    <div class="featuredItem">
   
        <div class="featuredImgWrap">
             <img :src="img" :alt="product.product_name">
            <div class="featuredImgDark">
                <button @click="$emit('add-product', product)">
                    <img src="img/cart.svg" alt="">
                    Add to Cart
                </button>
            </div>
        </div>
        <div class="featuredData">
            <div class="featuredName">
                <h3>{{ product.product_name }}</h3>
            </div>
            <div class="featuredText">
                Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym
                Ellery
                teams
                up with Moda Operandi.
            </div>
            <div class="featuredPrice">
                <p>{{ product.price }}</p>
            </div>
        </div>
    </div>
    `
})


