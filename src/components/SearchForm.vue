<template>
<div class="row mx-auto py-3 px-0 bg-light rounded">
    <div class="col-4 input-group">
        <div class="input-group-prepend">
            <span for="searchName" type="button" class="input-group-text"><i class="fas fa-search"></i></span>
        </div>
        <input class="form-control" v-model="searchName" aria-describedby="searchName">
    </div>

    <div class="col-4 input-group">
        <div class="input-group-prepend">
            <span for="hp" type="button" class="input-group-text"><i class="fas fa-heart"></i></span>
        </div>
        <input type="number" class="form-control" v-model.number="hp" aria-describedby="hp">
    </div>

    <div class="col-4 input-group">
        <div class="input-group-prepend">
            <span for="limit" type="button" class="input-group-text">LIMIT</span>
        </div>
        <input type="number" class="form-control" v-model.number="limit" aria-describedby="limit">
    </div>
</div>
</template>

<script>

export default {
    name: 'NameSearchForm',
    props: {
        hp: Number,
        limit: Number,
        searchName: String,
    }
}
</script>