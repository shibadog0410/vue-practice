new Vue({
    el: '#app',
    data: {
        name: 'Chimera',
        list: []
    },

    mounted: function () {
        console.log(this.$refs.input);
    },

    created: function () {
        axios.get('list.json').then(function (response) {
            this.list = response.data;
        }.bind(this)).catch(function(e) {
            console.error(e);
        })
    },

    methods: {
        doAdd: function () {
            var max = this.list.reduce(function (a, b) {
                return a > b.id ? a : b.id;
            }, 0);

            this.list.push({
                id: max + 1,
                name: this.name,
                hp: 500,
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