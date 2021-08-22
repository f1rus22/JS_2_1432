Vue.component('products', {
    props: ['goods'],
    template: `
    <div class="featuredItems">
                <product v-for="item of goods" 
                :key="item.id_product" 
                :product="item">     
                </product>
    </div>
`
});

Vue.component('product', {
    props: ['product'],
    template: `
    <div class="featuredItem">
        <div class="featuredImgWrap">
            <img src="#" :alt="product.product_name" height=450px>
            <div class="featuredImgDark">
                <button @click="$parent.$emit('add-product', product)">
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


