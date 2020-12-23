<template>
    <div>
        <orderbook></orderbook>
    </div>
</template>

<script>
    import orderbook from './orderbook'

    export default {
        data: () => ({
            name: 'Vue'
        }),
        components: {
            orderbook
        }
    }
</script>