var pomodoro = {
    minutes: 0,
    seconds: 0,
    started: false,
    minutesDom: null,
    secondsDom: null,
}

xtag.register('x-control', {
    lifecycle: {
        created: function () {
            var controllButtons = this._intializeControlButtons();
            this.innerHTML = controllButtons;
        },
        inserted: function () {
            var self = this
            pomodoro.minutesDom = document.getElementById('#minutes');
            pomodoro.secondsDom = document.getElementById('#seconds')
            setInterval(function () { self._intervalCallback(self); }, 1000);
        },
    },
    methods: {
        /**
         * Intializes the controls buttons on the control.
         * */
        _intializeControlButtons: function () {
            var controls = '<div id="startTimer" class="center positive ui button">Start</div>' +
                           '<div id="stopTime" class="center negative ui button">Stop</div>' +
                            '<div id="break" class="center positive ui button">Break</div>';
                             ;
            return controls;
        },
        /**
         * Disables the specified control button.
         * @param {string} name -The id name of the button.
         */
        _disableButton: function (name) {
            var button = document.getElementById(name);
            button.classList.add('disabled');
        },
        /**
         * Enables the specefied button
         * @param {string} name - The id name of the button.
         */
        _enableButton: function (name) {
            var button = document.getElementById(name);
            button.classList.remove('disabled');
        },

        /**
         * The start time of the clock.
         * */
        _startTime: function () {
            this._resetVariables(25, 0, true);
        },

        /**
         * Starts the break for the clock.
         * */
        _startBreak: function () {
            this._resetVariables(5, 0, true);
        },

        /**
         * Stops the time on the clock.
         * */
        _stopTimer: function () {
            this._resetVariables(25, 0, false);
            this._updateDom();
        },

        /**
         * Formats the the number provided.
         * @param {int} num -The specified number to format. 
         */
        _toDoubleDigit: function (num) {
            if (num < 10) {
                return "0" + parseInt(num, 10);
            }
            return num;
        },

        /**
         * Resets the pomodoro values.
         * @param {int} mins -The minutes on the clock.
         * @param {int} secs  -The seconds on the clock.
         * @param {boolean} started - The boolean value.
         */
        _resetVariables: function (mins, secs, started) {
            pomodoro.minutes = mins;
            pomodoro.seconds = secs;
            pomodoro.started = started;
            pomodoro.minutesDom = document.getElementsByTagName('x-pomodoro')[0].getElementsByTagName('span')[0];
            pomodoro.secondsDom = document.getElementsByTagName('x-pomodoro')[0].getElementsByTagName('span')[1]
        },
        /**
         * Resets the pomodoro state of the timer.
         * */
        _timerComplete: function () {
            this._enableButton("startTimer")
            pomodoro.started = false;
        },
        /**
         * Updates the clock values.
         * */
        _updateDom: function () {
            pomodoro.minutesDom.innerHTML = this._toDoubleDigit(pomodoro.minutes);
            pomodoro.secondsDom.innerHTML = this._toDoubleDigit(pomodoro.seconds);
        },

        /**
         * A clock timer interval function for keep track of the time.
         * @param {obj} context - The pomdoro object
         */
        _intervalCallback: function (context) {
            var self = context;
            if (!pomodoro.started) return false;
            this._disableButton("startTimer")
            if (pomodoro.seconds == 0) {
                if (pomodoro.minutes == 0) {
                    self._timerComplete();
                    return;
                }
                pomodoro.seconds = 59;
                pomodoro.minutes--;
            } else {
                pomodoro.seconds--;
            }
            self._updateDom();
        },


    },
  
    events: {
        'click:delegate(.ui.button#startTimer)': function (e) {
            var modal = document.getElementsByTagName("x-form");
            modal[0].show();
        },
        'click:delegate(.ui.button#stopTime)': function (e) {
            this.parentElement._enableButton("startTimer")
            this.parentElement._stopTimer()
        },
        'click:delegate(.ui.button#break)': function (e) {
            this.parentElement._startBreak()
        },
    }
});