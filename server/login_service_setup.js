Meteor.startup(function() {
	Accounts.loginServiceConfiguration.remove({
	  service: "google"
	});

	Accounts.loginServiceConfiguration.remove({
	  service: "facebook"
	});

	Accounts.loginServiceConfiguration.insert({
	  service: "facebook",
	  appId: "578214512248467",
	  secret: "38a5333457fb7f6f6687cd6b216c3d4d"
	});

	Accounts.loginServiceConfiguration.insert({
	  service: "google",
	  clientId: "685639966722-seom2bhaiphhlabs64r9h1o1mg8q85da.apps.googleusercontent.com",
	  secret: "yY8yKUMV4XXYqJd5W4D5icpB"
	});
});