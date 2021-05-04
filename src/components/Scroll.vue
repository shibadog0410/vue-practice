<template>
<div v-on:click="scrollTop" class="my-4 btn btn-light btn-outline-dark font-weight-bold">
    Scroll Top
</div>
</template>

<script>
var scroll = new SmoothScroll();

export default {
    name: 'Scroll',
    methods: {
        scrollTop: function () {
            scroll.animateScroll(0);
        },
    }
}
</script>