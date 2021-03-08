const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/',
        };
    },
    methods: {
        outputGoal() {
            const randomNum = Math.random();
            if (randomNum < 0.5) {
                return this.courseGoalA;
            }
            return this.courseGoalB;
        },
    },
});

app.mount('#user-goal');
