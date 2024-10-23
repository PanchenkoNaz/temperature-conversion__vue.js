new Vue({
    el: '#app',
    data: {
        celsius: null,
        fahrenheit: null
    },
    methods: {
        convertToFahrenheit() {
            if (this.celsius !== null) {
                this.fahrenheit = (parseFloat(this.celsius) * 9 / 5) + 32;
            } else {
                this.fahrenheit = null;
            }
        },
        convertToCelsius() {
            if (this.fahrenheit !== null) {
                this.celsius = (parseFloat(this.fahrenheit) - 32) * 5 / 9;
            } else {
                this.celsius = null;
            }
        }
    }
});
