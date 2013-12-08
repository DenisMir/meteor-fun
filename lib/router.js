Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() {return Meteor.subscribe('allArticles');}
});

Router.map(function() {
	this.route('articlesList', {path: '/'});
	this.route('article', {
		path: '/articles/:_id',
		data: function() { return Articles.findOne(this.params._id); }
	});
});