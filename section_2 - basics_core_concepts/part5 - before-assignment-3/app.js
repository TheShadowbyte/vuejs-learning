const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullName() {
      // This method is handled like a data property and runs only
      // when the values on one or more of its dependencies change
      console.log('fullName is ran');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Smith';
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
    outputFullName() {
      // This method will run every time Vue tries to re-render the DOM,
      // meaning, when anything on the page changes.
      console.log('outputFullName is running again');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Smith';
    }
  }
});

app.mount('#events');
