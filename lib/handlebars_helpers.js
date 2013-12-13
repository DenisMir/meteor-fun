if (Meteor.isClient) {

	_.mixin({
	  capitalize: function(string) {
	    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
	  }
	});

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

	Handlebars.registerHelper('toLowerCase', function(value) {
	    if(value) {
	        return new Handlebars.SafeString(value.toLowerCase());
	    } else {
	        return '';
	    }
	});

	Handlebars.registerHelper('toUpperCase', function(value) {
	    if(value) {
	        return new Handlebars.SafeString(value.toUpperCase());
	    } else {
	        return '';
	    }
	});

	Handlebars.registerHelper('capitalize', function(value) {
	    if(value) {
	        return new Handlebars.SafeString(_(value).capitalize());
	    } else {
	        return '';
	    }
	});
}