function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var conversionType = document.querySelector('input[name="conversion"]:checked').value;
    var resultElement = document.getElementById("result");
  
    if (conversionType === "celsiusToFahrenheit") {
      var convertedTemperature = (temperature * 9/5) + 32;
      resultElement.innerText = temperature + "°C is " + convertedTemperature + "°F";
    } else {
      var convertedTemperature = (temperature - 32) * 5/9;
      resultElement.innerText = temperature + "°F is " + convertedTemperature + "°C";
    }
  }