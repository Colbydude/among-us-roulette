<template>
    <div class="main">
        <wheel :players="players.filter(player => player.eliminated === false)" />
        <div class="absolute top-0 right-0 p-4">
            <div class="grid grid-cols-8 gap-x-2 mt-2">
                <button
                    @click="addPlayer()"
                    type="button"
                    class="col-span-2 inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                    Add Player
                </button>
                <button
                    @click="shufflePlayers()"
                    type="button"
                    class="col-span-2 inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:bg-purple-700 transition duration-150 ease-in-out"
                >
                    Shuffle Players
                </button>
                <div class="col-span-2"></div>
                <div class="col-span-1 flex">
                    <span class="text-xs text-white place-self-end">Eliminated?</span>
                </div>
            </div>
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
import Colors from '../data/Colors';
import PlayerInput from '../components/PlayerInput.vue';
import Wheel from '../components/Wheel.vue';

const PLAYER_LIMIT = 15;

export default {
    name: 'Main',

    components: {
        PlayerInput,
        Wheel
    },

    data: () => ({
        colors: Colors,
        players: [
            { colorHex: Colors[0].colorHex, eliminated: false, playerName: '' },
        ]
    }),

    methods: {
        addPlayer() {
            if (this.players.length >= PLAYER_LIMIT) {
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
        },

        shufflePlayers() {
            let players = [ ...this.players ];
            let currentIndex = players.length,
                temporaryValue,
                randomIndex;

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = players[currentIndex];
                players[currentIndex] = players[randomIndex];
                players[randomIndex] = temporaryValue;
            }

            this.players = players;
        }
    }
}
</script>
