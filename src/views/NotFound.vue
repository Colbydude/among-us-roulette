<template>
    <div class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class="flex justify-center flex-col text-center pt-8 sm:justify-start sm:pt-0">
                <h1 class="text-white font-bold text-lg">Page Not Found</h1>
                <router-link to="/" class="text-gray-500 hover:underline cursor-pointer">Return Home</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>
