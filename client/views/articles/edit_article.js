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