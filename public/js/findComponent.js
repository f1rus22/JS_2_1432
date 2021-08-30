Vue.component('find', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `
    <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                        <button type="submit" class="searchIcon search-button">
                            <img src="img/search.png" alt=""></button>
                        <input v-model="userSearch" type="text" class="goods-search" />

                    </form>
                    `
})