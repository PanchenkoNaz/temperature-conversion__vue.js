new Vue({
    el: '#app',
    data: {
        celsius: null,
        fahrenheit: null,
        kelvin: null
    },
    methods: {
        convertToFahrenheitKelvin() {
            if (!isNaN(this.celsius)) {
                this.fahrenheit = (parseFloat(this.celsius) * 9 / 5) + 32;
                this.kelvin = parseFloat(this.celsius) + 273.15;
            }
        },
        convertToCelsiusKelvin() {
            if (!isNaN(this.fahrenheit)) {
                this.celsius = (parseFloat(this.fahrenheit) - 32) * 5 / 9;
                this.kelvin = parseFloat(this.celsius) + 273.15;
            }
        },
        convertToCelsiusFahrenheit() {
            if (!isNaN(this.kelvin)) {
                this.celsius = parseFloat(this.kelvin) - 273.15;
                this.fahrenheit = (this.celsius * 9 / 5) + 32;
            }
        }
    }
});
