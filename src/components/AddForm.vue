<template>
<form id="addForm" class="row mb-5" v-on:submit.prevent="doAdd()">
    <div class="col-4 input-group">
        <div class="input-group-prepend">
            <span for="name" type="button" class="input-group-text">Name</span>
        </div>
        <input class="form-control" v-model="name" aria-describedby="name">
    </div>

    <div class="col-2">
        <button v-on:click="doAdd()" type="button" class="btn btn-light btn-outline-success font-weight-bold">ADD</button>
    </div>
</form>
</template>

<script>

export default {
    name: 'AddForm',
    props: {
        name: String,
    },
}
</script>