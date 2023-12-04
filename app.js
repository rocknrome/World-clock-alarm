//   R'N'R   November 29, 2023

//---------------------------------------------------//
//              APP JAVASCRIPT FILE                  //
//---------------------------------------------------//


    //---------------------------------------------------//
    //Declaring variables
    //---------------------------------------------------//
    const $timezoneSelect = $('#timezone-select');
    const $alarmTimeInput = $('#alarm-time');
    const $setAlarmButton = $('#set-alarm');
    const $alarmDisplay = $('#alarm-display');
    let alarms = [];


    //---------------------------------------------------//
    //Setting up functionality
    //---------------------------------------------------//

    // Fetch and populate timezones
    function populateTimeZone() {
        $.ajax({
            url: 'http://worldtimeapi.org/api/timezone',
            success: function(timezones) {
                timezones.forEach(zone => {
                    $timezoneSelect.append(`<option value="${zone}">${zone}</option>`);
                });
            },
            error: function(error) {
                console.log('Error fetching timezones:', error);
            }
        });
    }
    populateTimeZone()

    // Function to display alarms
    function displayAlarms() {
        $alarmDisplay.empty();  //clearing out the display block initially
        alarms.forEach((alarm, index) => {
          $alarmDisplay.append(`
                    <div class="alarm">
                        Alarm at ${alarm.time} in ${alarm.timezone}
                        <button onclick="editAlarm(${index})">Edit</button>
                        <button onclick="deleteAlarm(${index})">Delete</button>
                    </div>
                `);
        });
      }
    //   displayAlarms()

    // Set an alarm
    $setAlarmButton.click(function() {  //event listener using the jQuery method ".click"
        const timezone = $timezoneSelect.val();
        const time = $alarmTimeInput.val();
        alarms.push({ timezone, time });
        displayAlarms();
      });

    // Edit an alarm


    // Delete an alarm


