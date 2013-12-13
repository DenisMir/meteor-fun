Meteor.publish('allArticles', function() {
	return Articles.find();
});

Meteor.publish('allViewports', function() {
	return Viewports.find();
})