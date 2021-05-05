<template>
<div class="background-image">
    <div class="background-overlay">
    <div id="app">
        <PageTitle :msg="msg"></PageTitle>
        <LimitSearchForm :hp="hp" :limit="limit"></LimitSearchForm>
        <AddForm :name="name"></AddForm>
        <NameSearchForm :searchName="searchName"></NameSearchForm>
        <Monsters :monsters="monsters"></Monsters>
        <Scroll></Scroll>
    </div>
  </div>
</div>
</template>

<script>

import monsters from './assets/data.json'
import PageTitle from './components/PageTitle'
import LimitSearchForm from './components/LimitSearchForm'
import NameSearchForm from './components/NameSearchForm'
import AddForm from './components/AddForm'
import Monsters from './components/Monsters'
import Scroll from './components/Scroll'

export default {
    name: 'App',
    components: {
        PageTitle,
        LimitSearchForm,
        NameSearchForm,
        AddForm,
        Monsters,
        Scroll
    },
    created: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    data () {
        return {
            msg: 'Search And Manage Monsters.',
            monsters: monsters,
            hp: 300,
            limit: 10,
            name: 'Chimera',
            order: false,
            searchName: 'sample',
        }
    },
    computed: {
        title() { return this.$store.getters.title }
        // matched: function () {
        //     return this.list.filter(function (el) {
        //         let isUnderHP = el.hp <= this.underHP;
        //         let nameContain = el.name.indexOf(this.searchName) === 0;
        //         return isUnderHP && nameContain;
        //     }, this);
        // },

        // sorted: function (el) {
        //     return el.orderBy(this.matched, 'hp', this.order ? 'desc' : 'asc');
        // },

        // limited: function () {
        //     return this.sorted.slice(0, this.monsterLimit);
        // },
    },
    methods: {
        doAttack: function (index) {
        this.monsters[index].hp -= 10;
        },
        doClick: function (index) {
            alert(this.monsters[index].name);
        },
        doAdd: function () {
            var max = this.monsters.reduce(function (a, b) {
                return a > b.id ? a : b.id;
            }, 0);

            this.list.push({
                id: max + 1,
                name: this.name,
                hp: 500,
                active: false,
            });
        },
        doRemove: function (index) {
            this.monsters.splice(index, 1);
        },
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.background-image {
    animation-name: fadein;
    animation-duration: 2s;
    background-image: url('./assets/dragon_quest.jpg');
    background-size: cover;
}

.background-overlay {
    background-color: rgba(100,100,100,0.8);
}

@keyframes fadein {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.v-enter-active, .v-leave-active, .v-move {
    transition: opacity 1s, transform 1s;
}

.v-leave-active {
    position: absolute;
}

.v-enter {
    opacity: 0;
}

.v-leave-to {
    opacity: 0;
}

</style>
