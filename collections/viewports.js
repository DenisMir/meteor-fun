Viewports = new Meteor.Collection("viewports");

Meteor.methods({
	'insert-viewport': function(data) {
		if(!data) throw new Meteor.Error(422, "No data submitted.");
		if(!data.viewport) throw new Meteor.Error(422, "No viewport data.");
		if(!data.deviceName) throw new Meteor.Error(422, "No device name given.");
		if(!data.orientation) throw new Meteor.Error(422, "No orientation given.");
		if(!data.browser) throw new Meteor.Error(422, "No browser given.");
		if(!data.comment) throw new Meteor.Error(422, "No comment given.");

		var user = Meteor.user();

		var viewportData = _.extend(_.pick(data, 'viewport', 'deviceName', 'comment', 'orientation', 'browser'), {
			userId: (user) ? user._id : null,
			author: (user) ? user.profile.name : 'Anonymous',
			date_created: new Date().getTime()
		});

		var viewportId = Viewports.insert(viewportData);

		return viewportId;
	}
});