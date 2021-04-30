var scroll = new SmoothScroll();

new Vue({
    el: '#app',
    data: {

        title: 'Monsters',
        message: 'You can Search And Manage Monsters.',
        name: 'Chimera',

        underHP: 300,
        monsterLimit: 2,

        list: [],

        scrollX: 0,
        scrollY: 0,
        timer: null,

        width: 800,
        height: 600,

        order: false,
    },

    created: function () {
        axios.get('list.json').then(function (response) {
            this.list = response.data;
        }.bind(this)).catch(function(e) {
            console.error(e);
        });

        window.addEventListener('scroll', this.handleScroll);
    },

    methods: {

        scrollTop: function () {
            scroll.animateScroll(0);
        },

        handler: function (mes) {
            console.log(mes);
        },

        doClick: function (index) {
            alert(this.list[index].name);
        },

        doAdd: function () {
            var max = this.list.reduce(function (a, b) {
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
            this.list.splice(index, 1);
        },

        doAttack: function (index) {
            this.list[index].hp -= 10;
        },

        methodData: function () {
            return Math.random();
        },
    },

    computed: {

        halfWidth: {
            get: function () { return this.width / 2; },
            set: function (val) { return this.width = val * 2; },
        },

        halfHeight: {
            get: function () { return this.height / 2; },
            set: function (val) { return this.height = val * 2; },
        },

        computedData: function () { return Math.random(); },

        halfPoint: function () {
            return {
                x: this.halfWidth,
                y: this.halfHeight,
            }
        },

        matched: function () {
            return this.list.filter(function (el) {
                return el.hp <= this.underHP;
            }, this);
        },

        sorted: function () {
            return _.orderBy(this.matched, 'hp', this.order ? 'desc' : 'asc');
        },

        limited: function () {
            return this.sorted.slice(0, this.monsterLimit);
        },
    }
});