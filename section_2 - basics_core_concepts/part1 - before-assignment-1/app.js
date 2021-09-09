const app = Vue.createApp(
    {
        data: function() {
            return {
                courseGoal: 'First goal',
                courseGoalA: 'Finish the course and learn Vue',
                courseGoalB: 'Master Vue and build apps',
                vueLink: 'https://vuejs.org',
                htmlContent: '<i>This text is wrapped in an HTML italics tag</i>'
            };
        },
        methods: {
            outputGoal: function() {
                const randomNumber = Math.random();
                if (randomNumber < 0.5) {
                    return this.courseGoalA;
                }
                else {
                    return this.courseGoalB;
                }
            }
        }
    }
);
app.mount("#user-goal");