Template.addlistForm.helpers({});
Template.lists.helpers({});

Template.lists.events({
    'click .js-open-card-composer': function(event, t) {
        var $el = $(event.currentTarget),
            list = $el.parents('.list'),
            composer = list.find('.card-composer');
            allComposers = t.$('.card-composer');

        // all lists hide composer and open click composer show
        allComposers.addClass('hide');
        t.$('.js-open-card-composer').removeClass('hide');

        // click open composer and focus 
        composer.removeClass('hide');
        composer.find('.js-card-title').focus();
        $el.addClass('hide');
    }
});

Template.addlistForm.events({
    'click .js-open-add-list': function(event, t) {
        t.$('.list').removeClass('idle');
        t.$('.list-name-input').focus();
    },
    'click .js-cancel-edit': function(event, t) {
        t.$('.list').addClass('idle');
    },
    'submit #AddListForm': function(event, t) {
        var title = t.find('.list-name-input');
        if ($.trim(title.value)) {
            // insert 
            Lists.insert({ 
                title: title.value, 
                boardId: this.board._id
            }, function() {

                // insert complete to scrollLeft
                Utils.scrollLeft('#board', 270, true);
            });

            // clear input 
            title.value = '';
        }
        event.preventDefault();
    }
});