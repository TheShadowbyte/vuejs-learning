const app = Vue.createApp({
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false
        }
    },
    methods: {
        boxClick(box) {

            if (box === "A") {
                this.boxA = true;
                this.boxB = false;
                this.boxC = false;
            }
            else if (box === "B") {
                this.boxA = false;
                this.boxB = true;
                this.boxC = false;
            }
            else if (box === "C") {
                this.boxA = false;
                this.boxB = false;
                this.boxC = true;
            }

        }
    }
});

app.mount('#styling');