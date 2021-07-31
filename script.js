const goods = [
    { id: 0, image: 'featured0.jpg', title: 'Jacket', price: 150 },
    { id: 1, image: 'featured1.jpg', title: 'Shirt', price: 50 },
    { id: 2, image: 'featured2.jpg', title: 'Hoodie', price: 350 },
    { id: 3, image: 'featured3.jpg', title: 'Shoes', price: 450 },
    { id: 4, image: 'featured4.jpg', title: 'T-shirt', price: 750 },
    { id: 5, image: 'featured5.jpg', title: 'Cap', price: 170 },
]

const $goodList = document.querySelector('.featuredItems')

const renderGoodsItem = ({ id, image, title, price }) => {
    return `<div class="featuredItem">
    <div class="featuredImgWrap">
        <img src="img/${image}" alt="${title}">

        <div class="featuredImgDark">
            <button data-productId="${id}>
                <img src="img/cart.svg" alt="">
                Add to Cart
            </button>
        </div>
    </div>
    <div class="featuredData">
        <div class="featuredName">
            ${title}
        </div>
        <div class="featuredText">
            Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery
            teams
            up with Moda Operandi.
        </div>
        <div class="featuredPrice">
            ${price}
        </div>
    </div>
</div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(item => renderGoodsItem(item)).join('');
    $goodList.insertAdjacentHTML('beforeend', goodsList)
}

renderGoodsList();
