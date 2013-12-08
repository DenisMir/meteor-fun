Template.articlesList.helpers({
	articles: function() {
		return Articles.find({}, {sort: {date_created: -1}});
	}
});

Template.postArticle.events({
	'submit form': function(e) {
		e.preventDefault();
		var article = {
			title: $(e.target).find('[name=title]').val(),
			text: $(e.target).find('[name=text]').val(),
			date_created: new Date()
		};

		article._id = Articles.insert(article);
		Router.go('article', article);
	}
});