ownsDocument = function(userId, doc) {
	return (doc && (doc.userId == userId || isAdmin()));
};

isAdmin = function() {
	return Roles.userIsInRole(Meteor.user(), ['admin']);
}

isAuthor = function() {
	return Roles.userIsInRole(Meteor.user(), ['author']);
}