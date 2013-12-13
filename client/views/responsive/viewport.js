Template.viewport.helpers({
	window: function() {
		return {
			devicePixelRatio: window.devicePixelRatio,
			innerHeight: window.innerHeight,
			innerWidth: window.innerWidth
		};
	},
	screen: function() {
		return {width: screen.width, height: screen.height};
	},
	documentElement: function() {
		return {clientWidth: document.documentElement.clientWidth,
				clientHeight: document.documentElement.clientHeight};
	},
	dim: function(){
		return {
			pyhsicalWidth: function() {
				return window.devicePixelRatio * screen.width;
			},
			physicalHeight: function() {
				return window.devicePixelRatio * screen.height;
			}
		}
	}
});