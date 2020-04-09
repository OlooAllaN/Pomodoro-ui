xtag.register('x-animate', {
    lifecycle: {
        created: function () {
            var divElem = this._buildList();
            this.innerHTML = divElem;
        },
    },
    methods: {
        /**
         * Builds the annimate buggles for the screen.
         * */
        _buildList: function () {
           str = '<div class="animate">' +
                '<ul class="bg-bubbles">' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '<li></li>' +
                '</ul>' +
             '</div > '
            return str;
        },

    }
});