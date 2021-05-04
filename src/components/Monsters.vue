<template>
<ul tag="ul" class="list-group">
    <li class="list-group-item bg-light" v-for="(item, index) in monsters" v-on:click.right.prevent="doClick(index)" v-bind:key="item.id" v-bind:class="{ active: item.active }">
        <div class="row">
            <div class="col-8">
                ID. {{ item.id }}  {{ item.name }}
                <span class="m-2 p-1 badge bg-primary rounded-pill" style="color: white;">{{ item.hp }}</span>
                <span v-if="item.hp < 50" class="m-2 p-1 badge bg-danger rounded-pill">Dying!</span>
            </div>
            <div class="col-4 text-right">
                <button v-on:click="doRemove(index)" type="button" class="btn btn-light btn-outline-danger font-weight-bold" >DELETE</button>
                <button v-on:click="doAttack(index)" type="button" class="btn btn-light btn-outline-warning font-weight-bold">ATTACK</button>
            </div>
        </div>
    </li>
</ul>
</template>

<script>

export default {
    name: 'MonsterList',
    props: {
        monsters: Array,
    },
}
</script>