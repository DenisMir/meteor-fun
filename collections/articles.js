Articles = new Meteor.Collection("articles");

Articles.allow({
	insert: isAuthor,
	update: ownsDocument,
	remove: ownsDocument
});

Articles.deny({
	update: function (userId, article, fields) {
		return (_.without(fields, 'title', 'text').length > 0);
	}
});