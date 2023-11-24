class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    getFahrenheit(){
        return this.celsius*9/5 + 32;
    }
    getKelvin(){
        return this.celsius+273.15;
    }
}
let myTemperature = new Temperature(25);
document.write(myTemperature.celsius + "oC = " + myTemperature.getKelvin() + "oF" + "<br>");
document.write(myTemperature.celsius + "oC = " + myTemperature.getFahrenheit()  + "K");