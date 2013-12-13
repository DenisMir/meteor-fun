Template.viewports.helpers({
	viewports: function() {
		return Viewports.find({}, {sort: {date_created: -1}});
	}
});