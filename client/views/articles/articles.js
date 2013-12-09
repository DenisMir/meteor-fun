Template.articlesList.helpers({
	articles: function() {
		return Articles.find({}, {sort: {date_created: -1}});
	}
});

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
			Router.go('articlesList');
		}
	}
});

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

Template.editArticle.events({
	'submit form': function(e) {
		e.preventDefault();

		var currentArticleId = this._id;

		var articleProperties = {
			title: $(e.target).find('[name=title]').val(),
      		text: $(e.target).find('[name=text]').val()
   		};

   		Articles.update(currentArticleId, {$set: articleProperties}, function(error) {
   			if(error) {
   				console.log("error happened while update: " + error);
   			} else {
   				Router.go('article', {_id: currentArticleId});
   			}
   		});
	}
});