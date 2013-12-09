Template.article.helpers({
	ownArticle: function() {
		return this.userId == Meteor.userId();
	}
});

Template.article.events({
	'click a#delete-article': function() {
		if(confirm("Delete this article?")) {
			var currentArticleId = this._id;
			Articles.remove(currentArticleId);
			Router.go('articles');
		}
	}
});