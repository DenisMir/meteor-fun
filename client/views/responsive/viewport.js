Template.viewport.events({
	'submit form': function(e) {
		e.preventDefault();
		var viewport = {
			deviceName: $(e.target).find('[name=deviceName]').val(),
			comment: $(e.target).find('[name=comment]').val(),
			viewport: Session.get("viewport")
		};

		Meteor.call('insert-viewport', viewport, function(error, id) {
			if(error) {
				console.log('error happened. ' + error);
			} else {
				Router.go('viewports');
			}
		});
	}
});

Template.viewport.helpers({
	vp: function() {
		computeViewport();
		return Session.get("viewport");
	}
});

Meteor.startup(function() {
	$(window).resize(function(evt) {
		computeViewport();
		console.log("resize");
	});
});

/**
* Compute the viewport and
* put the result inside the
* session
*/
computeViewport = function() {
	var viewportData = {
		window: {
				devicePixelRatio: window.devicePixelRatio,
				innerHeight: window.innerHeight,
				innerWidth: window.innerWidth,
				userAgent: window.navigator.userAgent
		},
		screen: {width: screen.width, height: screen.height},
		documentElement: {
				clientWidth: document.documentElement.clientWidth,
				clientHeight: document.documentElement.clientHeight
		},
		dim: {
				pyhsicalWidth: window.devicePixelRatio * screen.width,
				physicalHeight: window.devicePixelRatio * screen.height
			}
	};

	Session.set("viewport", viewportData);
};