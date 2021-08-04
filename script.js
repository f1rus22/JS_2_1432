class GoodsItem {
    constructor(id, image, title, price) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="featuredItem">
      <div class="featuredImgWrap">
          <img src="img/${this.image}" alt="${this.title}">
  
          <div class="featuredImgDark">
              <button data-productId="${this.id}">
                  <img src="img/cart.svg" alt="">
                  Add to Cart
              </button>
          </div>
      </div>
      <div class="featuredData">
          <div class="featuredName">
              ${this.title}
          </div>
          <div class="featuredText">
              Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery
              teams
              up with Moda Operandi.
          </div>
          <div class="featuredPrice">
              ${this.price}
          </div>
      </div>
  </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { id: 0, image: 'featured0.jpg', title: 'Jacket', price: 150 },
            { id: 1, image: 'featured1.jpg', title: 'Shirt', price: 50 },
            { id: 2, image: 'featured2.jpg', title: 'Hoodie', price: 350 },
            { id: 3, image: 'featured3.jpg', title: 'Shoes', price: 450 },
            { id: 4, image: 'featured4.jpg', title: 'T-shirt', price: 750 },
            { id: 5, image: 'featured5.jpg', title: 'Cap', price: 170 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id, good.image, good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.featuredItems').innerHTML = listHtml;
    }

    // 2 Задание. Метод определяющий суммарную стоимость товаров
    totalPriceItem() {
        let totalSum = 0
        let prices = document.querySelectorAll('.featuredPrice');
        for (let i = 0; i < prices.length; i++) {
            totalSum += +prices[i].innerHTML
        }
        console.log(totalSum);
    }
    // счетчик клиоков по кнпопе "ADD TO CART"
    goodsCuantity() {
        let goodsCuantity = document.querySelector('.goodsCuantity')
        let btns = document.querySelectorAll('button')
        btns.forEach(btn => btn.addEventListener('click', clickHandler))
        let clicks = 0;
        function clickHandler() {
            clicks += 1;
            goodsCuantity.innerHTML = clicks;
        }
    }
}



const list = new GoodsList();
list.fetchGoods();
list.render();
list.totalPriceItem()
list.goodsCuantity()

// задание 1
class CartGoodsItem extends GoodsItem {
    constructor(data, size, quantity = 1) {
        super(data);
        this.size = size;
        this.quantity = quantity;
    }
    get price() {
        return this.price * this.quantity;
    };
    deleteGood() { };
}


class CartList {
    constructor() {
        this.cart = []
    }
    totalPriceGoods() { };
    emptyCart() { };
}
