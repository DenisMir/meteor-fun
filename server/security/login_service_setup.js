Meteor.startup(function() {

	if(Accounts.loginServiceConfiguration.find().count() == 0) {
		Accounts.loginServiceConfiguration.insert({
		  service: "facebook",
		  appId: "<your facebook app id>",
		  secret: "<your facebook app secret>"
		});

		Accounts.loginServiceConfiguration.insert({
		  service: "google",
		  clientId: "<your google app id>",
		  secret: "<your google app secret>"
		});
	}
});