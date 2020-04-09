xtag.register('x-form', {
    lifecycle: {
        inserted: function () {
            var formElem = this._buildForm();
            this.innerHTML = formElem;
        },
    },
    methods: {
        /**
         * Builds a form input
         * */
        _buildForm: function () {
            var form =
                '<div class="ui container">' +
                '<div class="ui modal modal-show">' +
                '<div class="header">Enter a Task </div>' +
                '<div class="content">' +
                '<form class="ui form">' +
                '<div class="field">' +
                '<input type="text" required name="Name" placeholder="First Name">' +
                '</div>' + '<div class="field">' +
                '<label>Task Text</label>' +
                '<textarea required></textarea>' +
                '</div>' +
                '</form>' +
                '</div>' +
                '<div class="actions">' +
                '<div id="ModalClose"class="ui red deny button"> No </div>' +
                '<div id="SaveTask" class="ui positive  button">Yes</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            return form;
        },

        /***
         * Shows the Modal.
         * */
        show: function () {
            var modal = this.getElementsByClassName('modal')[0];
            modal.style.display = "block";
        },

        /**
         * Hides the modal
         * */
        hide: function () {
            var modal = this.getElementsByClassName('modal')[0];
            modal.style.display = "none";
        }

    },
    events: {
        'click:delegate(.ui.button#SaveTask)': function (e) {
            var controlComp = document.getElementsByTagName('x-control')[0];
            var form = document.getElementsByTagName('x-form')[0];
            form.hide();
            controlComp._startTime();
        },

        'click:delegate(.ui.button#ModalClose)': function (e) {
            var form = document.getElementsByTagName('x-form')[0];
            form.hide();
        },
    }

});