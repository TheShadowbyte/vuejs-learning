const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add: function(num) {
      this.counter += num;
    },
    subtract: function(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
