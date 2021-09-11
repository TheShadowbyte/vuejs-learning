const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add: function(num) {
      this.counter += num;
    },
    subtract: function(num) {
      this.counter -= num;
    },
    changeName: function(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm: function() {
      alert('Submitted!');
    },
    confirmName: function() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
