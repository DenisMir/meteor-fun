Template.layout.events({
	"click li#login-google": function(e, tmpl) {
		Meteor.loginWithGoogle(function(err) {
			Router.go("articlesList");
		});
	},
	"click li#login-facebook": function(e, tmpl) {
		Meteor.loginWithFacebook(function(err) {
			Router.go("articlesList");
		});
	},
	"click a#logout": function(e, tmpl) {
		Meteor.logout(function(err) {
			Router.go("articlesList");
		});
	}
});