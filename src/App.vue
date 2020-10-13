<template>
    <div id="app">
        <wheel :players="players" />
        <div class="player-list">
            <button @click="addPlayer()">Add Player</button>
            <player-input
                v-for="(player, index) in players"
                :key="index"
                :player="player"
            />
        </div>
    </div>
</template>

<script>
import Colors from './data/Colors';
import PlayerInput from './components/PlayerInput.vue';
import Wheel from './components/Wheel.vue';

export default {
    name: 'App',

    components: {
        PlayerInput,
        Wheel
    },

    data: () => ({
        colors: Colors,
        players: [
            { playerName: 'Clob', colorHex: Colors.find(color => color.colorName === 'Pink').colorHex },
        ]
    }),

    methods: {
        addPlayer() {
            if (this.players.length >= 10) {
                return;
            }

            this.players.push({
                colorHex: Colors[0].colorHex,
                playerName: '',
                key: this.randomString()
            });
        },

        randomString() {
            return Math.random().toString(36).substring(7);
        }
    }
}
</script>

<style scoped>
.player-list {
    padding: 5px;
    position: absolute;
    right: 0;
    top: 0;
}
</style>
