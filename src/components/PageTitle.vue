<template>
<div id="pageTitle" class="mb-3">
    <h1 class="display-1 font-weight-bold text-white">{{ title }}</h1>
    <p class="lead text-white">{{ msg }}</p>
</div>
</template>

<script>

export default {
    name: 'PageTitle',
    props: {
        msg: String,
    },
    computed: {
        title: {
            get () {return this.$store.getters.title },
            set (value) {this.$store.dispatch('doUpdate', value) }
        }
    },
}
</script>