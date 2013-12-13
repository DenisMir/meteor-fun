Template.viewports.helpers({
	viewports: function() {
		console.log("getting viewports");
		return Viewports.find({}, {sort: {date_created: -1}});
	}
});