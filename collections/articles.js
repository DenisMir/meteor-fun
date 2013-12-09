Articles = new Meteor.Collection("articles");
Articles.allow({
	insert: function(userId, doc) {
		return  !! userId;
	}
});