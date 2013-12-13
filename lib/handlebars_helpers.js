if (Meteor.isClient) {

	var DateFormats = {
	       short: "DD MMMM - YYYY",
	       long: "dddd DD.MM.YYYY HH:mm"
	};

	Handlebars.registerHelper("formatDate", function(datetime, format) {
	  if (moment) {
	    f = DateFormats[format];
	    return moment(datetime).format(f);
	  }
	  else {
	    return datetime;
	  }
	});

	Handlebars.registerHelper("formatDateTimeAgo", function(datetime) {
	  if (moment) {
	    return moment(datetime).fromNow();
	  }
	  else {
	    return datetime;
	  }
	});
}