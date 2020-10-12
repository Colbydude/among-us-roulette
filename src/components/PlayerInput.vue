<template>
    <div class="player-input">
    </div>
</template>

<script>
export default {
    name: 'PlayerInput',

    props: {
        color: {
            type: Object,
            default: () => ({
                colorName: 'White',
                colorHex: '#ffffff'
            })
        },
        playerName: {
            type: String,
            default: ''
        }
    }
}
</script>
