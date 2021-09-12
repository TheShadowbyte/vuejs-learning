const app = Vue.createApp({
    data: function() {
        return {
            outputOne: '',
            outputTwo: '',
            outputTwoOnEnter: ''
        }
    },
    methods: {
        showAlert: function() {
            alert('test');
        },
        outputOnKeyDown: function(event) {
            this.outputOne = event.target.value;
        },
        changeOutputTwo: function(event) {
            this.outputTwo = event.target.value;
        },
        confirmOutputTwo: function() {
            this.outputTwoOnEnter = this.outputTwo;
        }
    }
});

app.mount("#assignment");