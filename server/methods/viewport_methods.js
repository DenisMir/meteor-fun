Meteor.methods({
	'insert-viewport': function(data) {
		var user = Meteor.user();

		if(!data) throw new Meteor.Error(422, "No data submitted.");
		if(!data.viewport) throw new Meteor.Error(422, "No viewport data.");
		if(!data.deviceName) throw new Meteor.Error(422, "No device name given.");
		if(!data.orientation) throw new Meteor.Error(422, "No orientation given.");
		if(!data.browser) throw new Meteor.Error(422, "No browser given.");
		if(!data.comment) throw new Meteor.Error(422, "No comment given.");
		if(!user && !data.author) throw new Meteor.Error(422, "Please enter an author name or login.");

		var viewportData = _.extend(_.pick(data, 'viewport', 'deviceName', 'comment', 'orientation', 'browser'), {
			userId: (user) ? user._id : null,
			author: (user) ? user.profile.name : data.author,
			date_created: new Date().getTime()
		});

		var viewportId = Viewports.insert(viewportData);

		return viewportId;
	}
});