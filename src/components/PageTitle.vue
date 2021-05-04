<template>
<div id="pageTitle" class="mb-5">
    <h1 class="display-1 font-weight-bold text-white">{{ title }}</h1>
    <h5 class="display-5 text-white">{{ msg }}</h5>
</div>
</template>

<script>

export default {
    name: 'PageTitle',
    data () {
        return {
            title: 'Monsters',
            msg: 'Search And Manage Monsters.',
        }
    }
}
</script>