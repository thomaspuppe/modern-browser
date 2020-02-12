(function () {

    function printStatus(status) {
        document.querySelector('#batteryStatusText').innerHTML = status;
    };

    document.querySelector('main').insertAdjacentHTML('beforeend', '<article><h3>Battery</h3><p id="batteryStatusText"></p></article>');

    if (!navigator.getBattery){
        printStatus('navigator.getBattery is NOT AVAILABLE!');
        return;
    }

    navigator.getBattery().then(function(battery) {
      function updateAllBatteryInfo(){
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischargingInfo();
      }
      updateAllBatteryInfo();

      battery.addEventListener('chargingchange', function(){
        updateChargeInfo();
      });
      function updateChargeInfo(){

        printStatus("Battery charging? "
                    + (battery.charging ? "Yes" : "No"));
      }

      battery.addEventListener('levelchange', function(){
        updateLevelInfo();
      });
      function updateLevelInfo(){
        printStatus("Battery level: "
                    + battery.level * 100 + "%");
      }

      battery.addEventListener('chargingtimechange', function(){
        updateChargingInfo();
      });
      function updateChargingInfo(){
        printStatus("Battery charging time: "
                     + battery.chargingTime + " seconds");
      }

      battery.addEventListener('dischargingtimechange', function(){
        updateDischargingInfo();
      });
      function updateDischargingInfo(){
        printStatus("Battery discharging time: "
                     + battery.dischargingTime + " seconds");
      }

    });

    
}());
