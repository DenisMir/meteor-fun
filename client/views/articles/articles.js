Template.articles.helpers({
	articles: function() {
		return Articles.find({}, {sort: {date_created: -1}});
	}
});