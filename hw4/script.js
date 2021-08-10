const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



class GoodsItem {
    constructor(product) {
        this.id = product.id_product;
        this.title = product.product_name;
        this.price = product.price;
    }
    render() {
        return `<div class="featuredItem">
      <div class="featuredImgWrap">
          <img src="" alt="${this.title}" height=450px>
  
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
        this.filteredGoods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.filteredGoods = [...data];
                this.render();
                this.filterGoods();
                this.goodsCuantity();
            });
    }
    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        let listHtml = '';
        this.filteredGoods.forEach(good => {
            const goodItem = new GoodsItem(good);
            listHtml += goodItem.render();
        });
        document.querySelector('.featuredItems').innerHTML = listHtml;
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
    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
        this.render();
    }
}
document.querySelector('.searchIcon').addEventListener('click', (e) => {
    const value = document.querySelector('.goods-search').value;
    list.filterGoods(value);
});

class Basket {
    constructor() {
        this.goods = [];
        this._openBasket();
        this._getBasketItem()
            .then(data => {
                this.goods = [...data.contents]
                this.totalPriceItem();
                this.render()
            });

    }
    _getBasketItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodBasketItem = new ElemBasket(good);
            listHtml += goodBasketItem.render();
        });
        document.querySelector('.basketRow').insertAdjacentHTML('afterend', listHtml);

    }
    _openBasket() {
        const openBasketBtn = document.querySelector('.cartIconWrap');
        openBasketBtn.addEventListener('click', () => {
            document.querySelector('.basket').classList.toggle('hidden')
        });
    }
    totalPriceItem() {
        let sumItems = this.goods.reduce((sum, item) => sum + item.price, 0);
        document.querySelector('.basketTotalValue').innerHTML = sumItems;
    }
}

class ElemBasket {
    constructor(product) {
        this.id = product.id_product;
        this.title = product.product_name;
        this.price = product.price;
        this.quantity = product.quantity;
    }
    render() {
        return `
    <div class="basketGood">
        <div>${this.title}</div>
        <div>
            <span class="productCount" data-productId="${this.id}">${this.quantity}</span> шт.
        </div>
        <div>$${this.price}</div>
        <div>
            $<span class="productTotalRow" data-productId="${this.id}">${this.price * this.quantity}</span>
        </div>
    </div>
`;

    }

}

const list = new GoodsList();
const basket = new Basket();


