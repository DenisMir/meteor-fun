Meteor.startup(function() {
	if(!_.findWhere(Roles.getAllRoles().fetch(), {"name" : "admin"})) {
		Roles.createRole('admin');
	}
	if(!_.findWhere(Roles.getAllRoles().fetch(), {"name" : "author"})) {
		Roles.createRole('author');
	}
});