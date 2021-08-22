Vue.component('find', {
    template: `
    <form action="#" class="search-form" @submit.prevent="$parent.filterGoods">
                        <button type="submit" class="searchIcon search-button">
                            <img src="img/search.png" alt=""></button>
                        <input v-model="$parent.searchLine" type="text" class="goods-search" />

                    </form>
                    `
})