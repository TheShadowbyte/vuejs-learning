const app = Vue.createApp({
    data() {
        return {
            counter: 0
        };
    },
    computed: {
        result() {
            if (this.counter > 37) {
                return 'Too much!';
            }
            else if (this.counter == 37) {
                return this.counter;
            }
            else {
                return 'Not there yet';
            }
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
                that.counter = 0;
            }, 5000);
        }
    },
    methods: {
        add(amount) {
            this.counter += amount;
        }
    }
});

app.mount('#assignment');