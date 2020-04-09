xtag.register('x-pomodoro', {
    lifecycle: {
        inserted: function () {
            var containerElem = this._buildContainer();
            this.innerHTML = containerElem;
        },
    },
    methods: {
        /**
         * The pomodoro container for the clock.
         */
        _buildContainer: function () {
            var container = '<div class="ui raised very padded text container segment">' +
                                     `<div id="clock"><span id="minutes">25</span>:<span id="seconds">00</span></div>` +
                                         '<x-control></x-control>'+
                                     '</div>'+
                             '</div>';
            return container;
        },

    }
});