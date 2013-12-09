Template.postArticle.events({
	'submit form': function(e) {
		e.preventDefault();
		var article = {
			title: $(e.target).find('[name=title]').val(),
			text: $(e.target).find('[name=text]').val(),
		};

		Meteor.call('post-article', article, function(error, id) {
			if(error) {
				console.log('error happened. ' + error);
			} else {
				Router.go('article', {'_id': id});
			}
		});
	}
});