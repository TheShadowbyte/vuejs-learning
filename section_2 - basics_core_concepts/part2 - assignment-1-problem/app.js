const app = Vue.createApp(
    {
        data: function() {
            return {
                name: 'Dimitar',
                age: 30,
                myImage: 'https://cdn.hackaday.io/images/resize/600x600/8106131501713895370.jpeg'
            };
        },
        methods: {
            agePlusFive: function() {
                return this.age + 5;
            },
            randomZeroToOne: function() {
                return Math.random();
            }
        }
    }
).mount('#assignment');