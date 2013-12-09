Template.layout.events({
	"click li#login-google": function(e, tmpl) {
		Meteor.loginWithGoogle(function(err) {
		});
	},
	"click li#login-facebook": function(e, tmpl) {
		Meteor.loginWithFacebook(function(err) {
		});
	},
	"click a#logout": function(e, tmpl) {
		Meteor.logout(function(err) {
		});
	}
});