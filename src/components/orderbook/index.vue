<template>
    <div class="orderbook">
        {{data}}
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        data: () => ({
            data: []
        }),
        mounted() {
            this.getData().then(res => this.data = res.data)
        },
        methods: {
            // https://binance-docs.github.io/apidocs/futures/en/#order-book
            getData() {
                return axios({
                    url: 'https://fapi.binance.com/fapi/v1/depth',
                    method: 'get',
                    params: {
                        symbol: 'BTCUSDT',
                        limit: 20
                    }
                }).then()
            }
        }
    }
</script>