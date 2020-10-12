<template>
    <div class="wheel container">
        <canvas id="canvas" width="500" height="500"></canvas>
        <button>Spin</button>
    </div>
</template>

<script>
export default {
    name: 'Wheel',

    props: {
        players: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>

</style>
