<template>
    <div class="player-input">
        <select v-model="player.colorHex">
            <option
                v-for="color in colors"
                :key="color.colorName"
                :value="color.colorHex"
            >
                {{ color.colorName }}
            </option>
        </select>
        <input v-model="player.playerName" type="text" placeholder="Player Name">
    </div>
</template>

<script>
import Colors from '../data/Colors';

export default {
    name: 'PlayerInput',

    props: {
        player: {
            type: Object,
            required: true
        }
    },

    data: () => ({
        colors: Colors
    })
}
</script>
