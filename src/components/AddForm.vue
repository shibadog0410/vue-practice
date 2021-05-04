<template>
<form id="addForm" class="row mt-1 mb-5" v-on:submit.prevent="doAdd()">
    <div class="col">
        <label for="monsterName" class="font-weight-bold text-white">Monster Name</label>
        <input id="monsterName" class="form-control" v-model="name">
    </div>
    <div class="col d-flex align-items-end">
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