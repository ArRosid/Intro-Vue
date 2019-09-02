var app = new Vue({
    el: '#app',
    data: {
        lessons: 'Events and methods',
        counter: 0
    },
    methods: {
        incrementCounter() {
            this.counter += 1;
            if (this.counter === 10) {
                alert('Counter is at 10!');
            }
        },

        overTheBox() {
            console.log("Over th Green Box!")
        }
    }
})