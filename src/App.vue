<template>
    <div id="app">
        <wheel :players="players.filter(player => player.eliminated === false)" />
        <div class="absolute top-0 right-0 p-4">
            <button
                @click="addPlayer()"
                type="button"
                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
                Add Player
            </button>
            <player-input
                v-for="(player, index) in players"
                :key="index"
                :player="player"
                :remove="() => { removePlayer(index) }"
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
            { colorHex: Colors.find(color => color.colorName === 'Pink').colorHex, eliminated: false, playerName: 'Clob' },
        ]
    }),

    methods: {
        addPlayer() {
            if (this.players.length >= 10) {
                return;
            }

            this.players.push({
                colorHex: Colors[0].colorHex,
                eliminated: false,
                playerName: ''
            });
        },

        removePlayer(index) {
            if (this.players.length - 1 <= 0) {
                return;
            }

            let players = [ ...this.players ];
            players.splice(index, 1);

            this.players = players;
        }
    }
}
</script>

<style src="./assets/tailwind.css">
