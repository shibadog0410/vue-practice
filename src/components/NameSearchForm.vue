<template>
<div class="row m-0 py-3 px-0 bg-light rounded">
    <div class="col-8 input-group">
        <div class="input-group-prepend">
            <span for="searchName" type="button" class="input-group-text"><i class="fas fa-search"></i></span>
        </div>
        <input class="form-control" v-model="searchName" aria-describedby="searchName">
    </div>
    <div class="col-4 text-right">
        <button v-on:click="order=!order" type="button" class="btn btn-light btn-outline-primary font-weight-bold">HP SORT</button>
    </div>
</div>
</template>

<script>

export default {
    name: 'NameSearchForm',
    props: {
        searchName: String,
    }
}
</script>