//= require bootstrap
//= require underscore
//= require backbone
//= require jquery-ui-1.10.1.custom
//= require jQueryRotate.2.2


AppRouter = Backbone.Router.extend({
    routes: {
    	"projects": "projects",
    	"prototypes": "prototypes",
    	"about": "about"
    },
    projects: function(){
        $("div.container-fluid").hide();
        var projects_view =  new ProjectsView({el: $("div.container-fluid")});
    	$("div.container-fluid").show("drop", {}, 1000);
    },
    prototypes: function(){
        $("div.container-fluid").hide();
    	var prototype_view =  new PrototypesView({el: $("div.container-fluid")});
        $("div.container-fluid").show("drop", {}, 1000);
    },
    about: function(){
        $("div.container-fluid").hide();
        var about_view =  new AboutView({el: $("div.container-fluid")});
        $("div.container-fluid").show("drop", {}, 1000);
    }
});

ProjectsView = Backbone.View.extend({
	initialize: function(){
        $("div.navbar li.active").removeClass("active");
        $("div.navbar li.projects").addClass("active");
        var template = _.template( $("#ProjectsTemplate").html(), {} );
        this.$el.html(template);

		$("div.block").on("mouseenter", function(){
			$(this).find("div.title h3").css("text-decoration", "underline");
			$(this).addClass("active");
		});
		$("div.block").on("mouseleave", function(){
			$(this).find("div.title h3").css("text-decoration", "none");
			$(this).removeClass("active");
		});
		$("div.block").on("click", function(e){
			window.open($(this).find("div.title a").attr("href"), '_blank')
		});
	}
});

PrototypesView = Backbone.View.extend({
    initialize: function(){
        $("div.navbar li.active").removeClass("active");
        $("div.navbar li.prototypes").addClass("active");
        var template = _.template( $("#PrototypesTemplate").html(), {} );
        this.$el.html(template);

        $("div.block").on("mouseenter", function(){
            $(this).find("div.title h3").css("text-decoration", "underline");
            $(this).addClass("active");
        });
        $("div.block").on("mouseleave", function(){
            $(this).find("div.title h3").css("text-decoration", "none");
            $(this).removeClass("active");
        });
        $("div.block").on("click", function(e){
            window.open($(this).find("div.title a").attr("href"), '_blank')
        });
    }
});

AboutView = Backbone.View.extend({
    initialize: function(){
        $("div.navbar li.active").removeClass("active");
        $("div.navbar li.about").addClass("active");
        var template = _.template( $("#AboutTemplate").html(), {} );
        this.$el.html(template);
        $("div.portrait").rotate(-20);
 
    }
});

$(document).ready(function(){
	var app_router = new AppRouter;
	app_router.about();
	Backbone.history.start();
});