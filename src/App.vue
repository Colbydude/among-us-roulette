<template>
    <div id="app">
        <Wheel />
    </div>
</template>

<script>
import Colors from './data/Colors';
// import PlayerInput from './components/PlayerInput.vue';
import Wheel from './components/Wheel.vue';

export default {
    name: 'App',

    components: {
        // PlayerInput,
        Wheel
    },

    data: () => ({
        availableColors: Colors,
        players: []
    })
}
</script>
