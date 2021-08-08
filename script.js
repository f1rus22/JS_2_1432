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
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render();
                this.totalPriceItem();
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
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good);
            listHtml += goodItem.render();
        });
        document.querySelector('.featuredItems').innerHTML = listHtml;
    }



    totalPriceItem() {
        let sumItems = this.goods.reduce((sum, item) => sum + item.price, 0);
        console.log(sumItems)
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








class Basket {
    constructor() {
        this.basket = []
    }
    addGoods() {
        return document.querySelector(``)
    }
    removeGoods() {

    }
    changeGoods() {

    }
    render() {
        let listHtml = '';
        this.basket.forEach(good => {
            const goodBasketItem = new ElemBasket(good);
            listHtml += goodBasketItem.render();
        });
        document.querySelector('.basketRow').innerHTML = listHtml;

    }
    openBasket() {
        const openBasketBtn = document.querySelector('.cartIconWrap');
        openBasketBtn.addEventListener('click', function () {
            document.querySelector('.basket').classList.toggle('hidden')
        })
    }
}

class ElemBasket extends GoodsItem {
    constructor(data) {
        super(data);
    }
    render() {
        return `
    <div class="basketRow">
        <div>${this.data.title}</div>
        <div>
            <span class="productCount" data-productId="${this.data.id}">1</span> шт.
        </div>
        <div>$${this.data.price}</div>
        <div>
            $<span class="productTotalRow" data-productId="${this.data.id}">${this.data.price}</span>
        </div>
    </div>
`;

    }
}

const list = new GoodsList();
const basket = new Basket();
basket.openBasket();

