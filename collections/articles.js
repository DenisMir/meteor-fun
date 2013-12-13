Articles = new Meteor.Collection("articles");

Meteor.methods({
	'post-article': function(postAttributes) {
		var user = Meteor.user();

		if(!isAuthor()) throw new Meteor.Error(401, "You need to be author to post.");
		if(!postAttributes.title) throw new Meteor.Error(422, "The title is missing.");
		if(!postAttributes.text) throw new Meteor.Error(422, 'The text is missing.');

		var article = _.extend(_.pick(postAttributes, 'title', 'text'), {
						userId: user._id,
						author: user.profile.name,
						date_created: new Date().getTime()
		});

		var articleId = Articles.insert(article);

		return articleId;
	}
});

Articles.allow({
	update: ownsDocument,
	remove: ownsDocument
});

Articles.deny({
	update: function (userId, article, fields) {
		return (_.without(fields, 'title', 'text').length > 0);
	}
});