/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/cartComponent.js":
/*!************************************!*\
  !*** ./public/js/cartComponent.js ***!
  \************************************/
/***/ (() => {

eval("const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\r\n\r\nVue.component('cart', {\r\n    data() {\r\n        return {\r\n            basket: [],\r\n\r\n\r\n        }\r\n    },\r\n    mounted() {\r\n        this.$parent.getJson(`/api/cart`)\r\n            .then(data => {\r\n                for (let item of data.contents) {\r\n                    this.$data.basket.push(item);\r\n                }\r\n            });\r\n    },\r\n    methods: {\r\n        addProduct(item) {\r\n            let find = this.basket.find(el => el.id_product === item.id_product);\r\n            if (find) {\r\n                this.$parent.putJson(`/api/cart/${find.id_product}`, { quantity: 1 })\r\n                    .then(data => {\r\n                        if (data.result === 1) {\r\n                            find.quantity++\r\n                        }\r\n                    })\r\n            } else {\r\n                const prod = Object.assign({ quantity: 1 }, item);\r\n                this.$parent.postJson(`/api/cart`, prod)\r\n                    .then(data => {\r\n                        if (data.result === 1) {\r\n                            this.basket.push(prod)\r\n                        }\r\n                    })\r\n            }\r\n        },\r\n        deleteGood(item) {\r\n            let find = this.basket.find(el => el.id_product === item.id_product);\r\n            if (find) {\r\n                this.$parent.putJson(`/api/cart/${find.id_product}`)\r\n                    .then(data => {\r\n                        if (data.result) {\r\n                            if (item.quantity > 1) {\r\n                                item.quantity--\r\n                            } else {\r\n                                this.basket.splice(this.basket.indexOf(item), 1)\r\n                            }\r\n                        }\r\n\r\n                    })\r\n            }\r\n        }\r\n    },\r\n    props: ['visibility'],\r\n    template: `\r\n    <div class=\"basket\" v-show=\"visibility\">\r\n        <div class=\"basketRow basketHeader\">\r\n            <div>Название товара</div>\r\n            <div>Количество</div>\r\n            <div>Цена за шт.</div>\r\n            <div>Итого</div>\r\n            <div></div>\r\n        </div>\r\n        <p v-if=\"!basket.length\">Корзина пуста</p>\r\n        <basketGood v-for=\"item of basket\" :key=\"item.id_product\" :good=\"item\" @deleteGood=\"deleteGood\"></basketGood>\r\n    </div>\r\n    `\r\n});\r\n\r\nVue.component('basketGood', {\r\n    props: ['good'],\r\n    template: `\r\n    <div class=\"basketGood\">\r\n        <div>\r\n            {{good.product_name}}\r\n        </div>\r\n        <div>\r\n            <span class=\"productCount\" :data-productId=\"good.id_product\">\r\n                {{good.quantity}}\r\n            </span>\r\n            шт.\r\n        </div>\r\n        <div>   \r\n            {{good.price}}\r\n        </div>\r\n        <div>\r\n            $<span class=\"productTotalRow\" :data-productId=\"good.id_product\">\r\n                {{good.price * good.quantity}}\r\n            </span>\r\n        </div>\r\n        <button class=\"removeGood\" @click=\"$root.$refs.cart.deleteGood(good)\"><img src=\"img/closeIcon.png\"\r\n        alt=\"\"></button>\r\n    </div>\r\n    `\r\n})\n\n//# sourceURL=webpack://hw8/./public/js/cartComponent.js?");

/***/ }),

/***/ "./public/js/errorComponent.js":
/*!*************************************!*\
  !*** ./public/js/errorComponent.js ***!
  \*************************************/
/***/ (() => {

eval("Vue.component('error', {\r\n    template: `\r\n    <div class=\"container\" style=\"color:red\"><h1>СЕРВЕР НЕ ДОСТУПЕН</h1></div>\r\n    `\r\n})\n\n//# sourceURL=webpack://hw8/./public/js/errorComponent.js?");

/***/ }),

/***/ "./public/js/findComponent.js":
/*!************************************!*\
  !*** ./public/js/findComponent.js ***!
  \************************************/
/***/ (() => {

eval("Vue.component('find', {\r\n    data() {\r\n        return {\r\n            userSearch: ''\r\n        }\r\n    },\r\n    template: `\r\n    <form action=\"#\" class=\"search-form\" @submit.prevent=\"$parent.$refs.products.filter(userSearch)\">\r\n                        <button type=\"submit\" class=\"searchIcon search-button\">\r\n                            <img src=\"img/search.png\" alt=\"\"></button>\r\n                        <input v-model=\"userSearch\" type=\"text\" class=\"goods-search\" />\r\n\r\n                    </form>\r\n                    `\r\n})\n\n//# sourceURL=webpack://hw8/./public/js/findComponent.js?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/***/ (() => {

eval("\r\nconst app = new Vue({\r\n    el: '#app',\r\n    data: {\r\n        isVisibleCart: false,\r\n        searchLine: '',\r\n        error: false\r\n    },\r\n    methods: {\r\n        async getJson(url) {\r\n            try {\r\n                const result = await fetch(url);\r\n                return await result.json();\r\n            } catch (error) {\r\n                console.log(error);\r\n                this.error = true;\r\n            }\r\n        },\r\n        async postJson(url, data) {\r\n            try {\r\n                const result = await fetch(url, {\r\n                    method: 'POST',\r\n                    headers: {\r\n                        \"Content-Type\": \"application/json\"\r\n                    },\r\n                    body: JSON.stringify(data)\r\n                });\r\n                return await result.json();\r\n            } catch (error) {\r\n                console.log(error);\r\n                this.error = true;\r\n            }\r\n        },\r\n        async putJson(url, data) {\r\n            try {\r\n                const result = await fetch(url, {\r\n                    method: 'PUT',\r\n                    headers: {\r\n                        \"Content-Type\": \"application/json\"\r\n                    },\r\n                    body: JSON.stringify(data)\r\n                });\r\n                return await result.json();\r\n            } catch (error) {\r\n                console.log(error);\r\n                this.error = true;\r\n            }\r\n        },\r\n        async remove(url, data) {\r\n            try {\r\n                const result = await fetch(url, {\r\n                    method: 'DELETE',\r\n                    headers: {\r\n                        \"Content-Type\": \"application/json\"\r\n                    },\r\n                    body: JSON.stringify(data)\r\n                });\r\n                return await result.json();\r\n            } catch (error) {\r\n                console.log(error);\r\n            }\r\n        }\r\n\r\n\r\n\r\n    },\r\n    mounted() {\r\n    }\r\n});\n\n//# sourceURL=webpack://hw8/./public/js/main.js?");

/***/ }),

/***/ "./public/js/productComponent.js":
/*!***************************************!*\
  !*** ./public/js/productComponent.js ***!
  \***************************************/
/***/ (() => {

eval("Vue.component('products', {\r\n    data() {\r\n        return {\r\n            goods: [],\r\n            filteredGoods: [],\r\n        }\r\n    },\r\n    mounted() {\r\n        this.$parent.getJson(`/api/products`)\r\n            .then(data => {\r\n                for (let item of data) {\r\n                    this.$data.goods.push(item);\r\n                    this.$data.filteredGoods.push(item);\r\n                    item.imgPath = `img/featured${item.id_product}.jpg`;\r\n\r\n                }\r\n            });\r\n    },\r\n\r\n    methods: {\r\n        filter(userSearch) {\r\n            let regexp = new RegExp(userSearch, 'i');\r\n            this.filteredGoods = this.goods.filter(el => regexp.test(el.product_name));\r\n        }\r\n    },\r\n    template: `\r\n    <div class=\"featuredItems\">\r\n                <product v-for=\"item of filteredGoods\" \r\n                :key=\"item.id_product\" \r\n                :img = \"item.imgPath\"\r\n                :product=\"item\"\r\n                @add-product=\"$parent.$refs.cart.addProduct\"></product>\r\n               </div>\r\n`\r\n});\r\n\r\nVue.component('product', {\r\n    props: ['product', 'img'],\r\n    template: `\r\n    <div class=\"featuredItem\">\r\n   \r\n        <div class=\"featuredImgWrap\">\r\n             <img :src=\"img\" :alt=\"product.product_name\">\r\n            <div class=\"featuredImgDark\">\r\n                <button @click=\"$emit('add-product', product)\">\r\n                    <img src=\"img/cart.svg\" alt=\"\">\r\n                    Add to Cart\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"featuredData\">\r\n            <div class=\"featuredName\">\r\n                <h3>{{ product.product_name }}</h3>\r\n            </div>\r\n            <div class=\"featuredText\">\r\n                Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym\r\n                Ellery\r\n                teams\r\n                up with Moda Operandi.\r\n            </div>\r\n            <div class=\"featuredPrice\">\r\n                <p>{{ product.price }}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    `\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://hw8/./public/js/productComponent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./public/js/main.js"]();
/******/ 	__webpack_modules__["./public/js/cartComponent.js"]();
/******/ 	__webpack_modules__["./public/js/errorComponent.js"]();
/******/ 	__webpack_modules__["./public/js/findComponent.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/productComponent.js"]();
/******/ 	
/******/ })()
;