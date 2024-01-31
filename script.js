//declare the variables
var temperature;
var weather;
  
  //Function to make the image blank
  function blankimg() {
    document.getElementById("weather").src = "";
    document.getElementById("clothes").src = "";
  }
  
  //function to decide the clothes based on weather and temperature
  function usebigcomputerbrainwithlotsofbitstotelltheoutift() {
    if (!weather || !temperature) {
      document.getElementById("result").textContent = "Please enter both weather and temperature.";
      blankimg();
    } else if ((weather == "Sunny" || weather == "Cloudy") && (temperature > 80 || temperature > 70)) {
      document.getElementById("weather").src = weather + ".png";
      document.getElementById("clothes").src = "Vacation.png";
      document.getElementById("result").textContent = "You should wear a T-Shirt";
    } else if ((weather == "Cloudy" || weather == "Sunny") && temperature < 60) {
      document.getElementById("weather").src = weather + ".png";
      document.getElementById("clothes").src = "Sweatshirt.png";
      document.getElementById("result").textContent = "You should wear a Sweatshirt";
    } else if (weather == "Rainy" || weather == "Snow") {
      document.getElementById("weather").src = weather + ".png";
      document.getElementById("clothes").src = "Coat.png";
      document.getElementById("result").textContent = "You should wear a Coat";
    } else {
      document.getElementById("result").textContent = "Check the text boxes again, I think you made a typo.";
      blankimg();
    }
    
    //Show go again button when go button is hidden after click
    document.getElementById("goAgain").style.display = "block";
    document.getElementById("go").style.display = "none";
  }

  //event handler for the go button
  document.getElementById("go").addEventListener("click", function() {
    weather = document.getElementById("weatherinput").value;
    temperature = document.getElementById("tempinput").value;
    usebigcomputerbrainwithlotsofbitstotelltheoutift();
  });

  //event handler for the second button click
  document.getElementById("goAgain").addEventListener("click", function() {
    //Reset everything and hide the button
    document.getElementById("goAgain").style.display = "none";
    document.getElementById("go").style.display = "block";
    blankimg();
    document.getElementById("result").textContent = "Decision Result";
    document.getElementById("weather").src = "default.png";
    document.getElementById("clothes").src = "default.png";
  });
