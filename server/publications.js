Meteor.publish('allArticles', function() {
	return Articles.find();
});