const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      watchFirstName: ''
    };
  },
  computed: {
    fullName() {
      // This method is handled like a data property and runs only
      // when the values on one or more of its dependencies change.
      // Computer properties are better than watchers because you can
      // track / "watch for" more than one data property, whereas
      // watcher methods only watch one data property per method.
      console.log('fullName is ran');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  watch: {
    watchFirstName(value) {
      console.log('First name changed to: ' + value);
    },
    counter(value) {
      if (value > 50) {
        console.log('counter is greater than 50');
      }
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
