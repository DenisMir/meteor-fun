Articles = new Meteor.Collection("articles");

Meteor.methods({
	'post-article': function(postAttributes) {
		var user = Meteor.user();

		if(!user) throw new Meteor.Error(401, "You need to be logged in.");
		if(!postAttributes.title) throw new Meteor.Error(422, "The title is missing.");
		if(!postAttributes.text) throw new Meteor.Error(422, 'The text is missing.');

		var article = _.extend(_.pick(postAttributes, 'title', 'text'), {
						userId: user._id,
						author: user.profile.name,
						date_created: new Date()
		});

		var articleId = Articles.insert(article);

		return articleId;
	}
})

Articles.allow({
	insert: function(userId, doc) {
		return  !! userId;
	}
});