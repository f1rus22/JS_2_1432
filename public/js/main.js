
const app = new Vue({
    el: '#app',
    data: {
        isVisibleCart: false,
        searchLine: '',
        error: false
    },
    methods: {
        async getJson(url) {
            try {
                const result = await fetch(url);
                return await result.json();
            } catch (error) {
                console.log(error);
                this.error = true;
            }
        },
        async postJson(url, data) {
            try {
                const result = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                return await result.json();
            } catch (error) {
                console.log(error);
                this.error = true;
            }
        },
        async putJson(url, data) {
            try {
                const result = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                return await result.json();
            } catch (error) {
                console.log(error);
                this.error = true;
            }
        },
        async remove(url, data) {
            try {
                const result = await fetch(url, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                return await result.json();
            } catch (error) {
                console.log(error);
            }
        }



    },
    mounted() {
    }
});