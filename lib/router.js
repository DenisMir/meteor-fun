Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() {return Meteor.subscribe('allArticles');}
});

Router.map(function() {

	// routes for the articles handling

	this.route('articles', {path: '/'});
	this.route('article', {
		path: '/articles/:_id',
		data: function() { return Articles.findOne(this.params._id); }
	});
	this.route('postArticle', {path: '/post-article'});
	this.route('editArticle', {
		path: '/articles/:_id/edit',
		data: function() {return Articles.findOne(this.params._id); }
	});

	// routes for the responsive handling
	this.route('viewport');
});

var requireLogin = function() {
	if(!Meteor.user()) {
		if(Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
			this.render('accessDenied');
		}
		this.stop();
	}
}

Router.before(requireLogin, {only: 'postArticle'});