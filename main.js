var scroll = new SmoothScroll();

new Vue({
    el: '#app',
    data: {
        title: 'Monsters',
        message: 'You can manage monsters.',
        name: 'Chimera',
        list: [],

        scrollX: 0,
        scrollY: 0,
        timer: null
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
        }
    }
});