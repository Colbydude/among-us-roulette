<template>
    <div class="grid grid-cols-8 gap-x-2 mt-2">
        <select v-model="player.colorHex" class="form-input col-span-2 block w-full">
            <option
                v-for="color in colors"
                :key="color.colorName"
                :value="color.colorHex"
            >
                {{ color.colorName }}
            </option>
        </select>
        <input v-model="player.playerName" type="text" class="form-input col-span-4 block w-full" placeholder="Player Name">
        <label class="col-span-1 inline-flex items-center">
            <input v-model="player.eliminated" type="checkbox" class="form-checkbox h-8 w-8 m-auto">
        </label>
        <button
            @click="remove()"
            type="button"
            class="inline-flex items-center text-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150"
        >
            <svg class="h-6 w-6 text-white fill-current m-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"/>
            </svg>
        </button>
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
        },
        remove: {
            remove: Function,
            required: true
        }
    },

    data: () => ({
        colors: Colors
    })
}
</script>
