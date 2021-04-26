var app = new Vue({
    el: '#app',
    data: {
        message: 'First Application!',
        list: ['apple', 'banana', 'strawberry'],
        show: true,
    },

    methods: {
        handleClick: function (event) {
            alert(event.target);
        }
    },
});
