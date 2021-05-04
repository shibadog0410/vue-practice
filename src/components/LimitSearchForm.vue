<template>
<form id="limitSearchForm" class="row">
    <div class="form-group col-4">
        <label for="hp" class="font-weight-bold text-white">Under HP</label>
        <input id="hp" class="form-control" v-model.number="hp" placeholder="HP">
    </div>

    <div class="form-group col-4">
        <label for="show" class="font-weight-bold text-white">Monsters</label>
        <input id="show" class="form-control" v-model.number="limit" placeholder="ITEMS">
    </div>
</form>
</template>

<script>

export default {
    name: 'LimitSearchForm',
    props: {
        hp: Number,
        limit: Number,
        name: String,
    }
}
</script>