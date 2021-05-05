<template>
<div id="pageTitle" class="mb-5">
    <h1 class="display-1 font-weight-bold text-white">{{ title }}</h1>
    <input type="text" v-model="title">
    <h5 class="display-5 text-white">{{ msg }}</h5>
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