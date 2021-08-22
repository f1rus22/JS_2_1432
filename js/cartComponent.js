Vue.component('cart', {
    props: ['basket', 'visibility'],
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
        <basketGood v-for="item of basket" :key="item.id_product" :good="item"></basketGood>
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
        <button class="removeGood" @click="$parent.$emit('remove', good)"><img src="img/closeIcon.png"
        alt=""></button>
    </div>
    `
})