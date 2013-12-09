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
	this.route('postArticle', {path: '/post-article'});
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