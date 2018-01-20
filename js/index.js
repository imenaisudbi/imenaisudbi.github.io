$(document).ready(function() {
	if (window.location.hash.length == 0) {
		window.location.hash = "#homepage-tab";
	}
	showFooter();
	function showFooter() {
		if (/* $(window).width() < 1024 &&  */window.location.hash.substring(1) != "homepage-tab") {
			$(".footer").css("opacity", "0");
			$(".footer").css("pointer-events", "none");
			$(window).scroll(function() {
				if($(window).scrollTop() + $(window).height() + 100 > $(document).height()) {
					$(".footer").css("opacity", "1");
					$(".footer").css("position", "fixed");
					$(".footer").css("pointer-events", "auto");
				} else {
					if (window.location.hash.substring(1) != "homepage-tab") {
					   $(".footer").css("opacity", "0");
					   $(".footer").css("pointer-events", "none");
					}
				}
			});
		} else {
			$(".footer").css("opacity", "1");
			$(".footer").css("pointer-events", "auto");
		}
		if (window.location.hash.substring(1) == "homepage-tab") {
			$(".footer").css("opacity", "1");
		}
	}	

		$('.photo-animation').on('touchmove', function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
	});
	
	function showIconTop() {
		if (window.location.hash.substring(1) == "homepage-tab") {
			$(".icon-top").css("opacity", "0");
			$(".icon-top").css("pointer-events", "none");
		}
		if ($(window).height() == $(document).height()) {
			$(".icon-top").css("opacity", "0");
			$(".icon-top").css("pointer-events", "none");
		}
		if (/* $(window).width() < 1024 &&  */window.location.hash.substring(1) != "homepage-tab") {
			$(".icon-top").css("opacity", "0");
			$(".icon-top").css("pointer-events", "none");
			$(window).scroll(function() {
				if(window.location.hash.substring(1) != "homepage-tab" && $(window).scrollTop() + $(window).height() + 100 > $(document).height() / 3) {
					$(".icon-top").css("opacity", "1");
					$(".icon-top").css("pointer-events", "auto");
				} else {
					$(".icon-top").css("opacity", "0");
					$(".icon-top").css("pointer-events", "none");
				}
			});
		}
	}

	$(".icon-top").click(function(){
		$("html, body").animate({ 
			scrollTop: 0 }, 600);
			return false;
	});
	
	$("a.paginate_button").css("color", "white");
	
	$("button.nav-link, div.a-link").removeClass("active");
    $("button.a-link, div.a-link").click(function(e) {
		$(window).scrollTop(0);
		
        window.location.hash = $(this).attr("href");
        e.preventDefault();
	<!-- $("#executed_wrapper").addClass("col-sm"); -->
    });
	
	var addressHash = window.location.hash.substring(1);
	$("*[id*='"+addressHash+"']").addClass("active").addClass("show");
	
	$("*[href*='"+addressHash+"']").addClass("active").addClass("red-active");
	$("*[class*='"+addressHash+"']").addClass("active").addClass("red-active");
	
	if (window.location.hash.substring(1) != "homepage-tab") {
		$(".fullscreen-bg").css("opacity", "0.3");
		$(".photo-animation").css("opacity", "0.1");
		$(".quotes-wrapper").css("opacity", "0");
	} else {
		$(".fullscreen-bg").css("opacity", "1");
		$(".photo-animation").css("opacity", "0.4");
		$(".quotes-wrapper").css("opacity", "1");
	}
	



	
	function footerPos() {
/* 		if ($(window).width() < 1025 && window.location.hash.substring(1) != "homepage-tab") {
			$(".footer").css("position", "relative");
		} else {
			$(".footer").css("position", "fixed");
		};
		if ($(window).width() < 1025 && window.location.hash.substring(1) == "rehab-tab") {
			$(".footer").css("position", "absolute");
		}; */
	};
	
	footerPos();
	
	$(window).bind('hashchange', function(){
		showFooter();
		$(window).scrollTop(0);
		$("button.nav-link, div.a-link").removeClass("active").removeClass("red-active");
		$("button.a-link, div.a-link").removeClass("active").removeClass("red-active");
		list_title = window.location.hash;
		list = $("*[class*='show']");
		$(list).removeClass("show").removeClass("active");
		$(list_title).addClass("active").addClass("show");
		$("*[href*='"+list_title+"']").addClass("active").addClass("red-active");
		$("*[class*='"+list_title+"']").addClass("active").addClass("red-active");
		if (list_title.substring(1) != "homepage-tab") {
			$(".fullscreen-bg").css("opacity", "0.3");
			$(".photo-animation").css("opacity", "0.1");
			$(".quotes-wrapper").css("opacity", "0");
		} else {
			$(".fullscreen-bg").css("opacity", "1");
			$(".photo-animation").css("opacity", "0.6");
			$(".quotes-wrapper").css("opacity", "1");
		}
		showIconTop();
		
		
		
/* 		if ($(window).width() > 1290) {
			$(".sandwich-icon").css("display", "none");
			$(".closebtn").css("display", "none");
		}  */
		footerPos();

	});
});




/* TOPNAV SCRIPT*/

$(".accordion").click(function() {
    if($(this).next().height() > 0){
        $(this).next().css("max-height","0px");
        $(this).children().children().css("transform", "rotate(0deg)");
    } else {
        $(".fa").css("transform", "rotate(0deg)");
        $(".panel").css("max-height","0px");
        if ($(window).width() < 1291) {
            $(this).next().css("max-height","220px");
            $(this).children().children().css("transform", "rotate(180deg)");
        } else {
            $(this).next().css("max-height","240px");
            $(this).next().css("transition-duration","0.7s");
            $(this).children().children().css("transform", "rotate(180deg)");
        }
    }
});


$(".panel").find(".a-link").click(function() {
	$(".panel").css("max-height","0px");
	$(this).parents(".menu-item").find("i").css("transform", "rotate(0deg)");
});

$("body").click(function(e) 
{
    var container = $(".panel");
    var containerMenu = $(".accordion");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0 && !containerMenu.is(e.target) && containerMenu.has(e.target).length === 0) 
    {
        container.css("max-height","0px");
        $(".fa").css("transform", "rotate(0deg)");
    }
});

/* function openNav() {
	var windowHeight = $(window).height();
    $(".topnav-menu").css("height", "670px");
    $(".menu-item").css("opacity", "1");
    $(".menu-item").css("transition-delay", "0.1s");
    $(".menu-item").css("transition-duration", "0.3s");
    $(".sandwich-icon").css("display", "none");
    $(".closebtn").css("display", "block");
	$(".topnav-logo").click(function() {
		closeNav();
	});
	if ($(window).width() < 1291 && $(window).width() > 1024) {
        $('body').addClass('stop-scrolling');
		$(".topnav-menu").css("height", windowHeight);
	} else {
		$('body').removeClass('stop-scrolling');
	}	
} */

function openNav() {
	var windowHeight = $(window).height();
	if ($(window).width() > 1290 && $("#normal-vision").css("display") == "block") {
		$(".topnav-menu").css("height", "0px");
		$(".closebtn").css("display", "none");
		$(".sandwich-icon").css("display", "none");
		$(".menu-item").css("opacity", "1");
		$(".menu-item").css("transition-delay", "0.1s");
		$(".menu-item").css("transition-duration", "0.5s");
	} else {
		if ($(window).width() > 1024) {
			$('body').addClass('stop-scrolling');
			$(".topnav-menu").css("height", windowHeight);
			$(".menu-item").css("opacity", "1");
			$(".menu-item").css("transition-delay", "0.1s");
			$(".menu-item").css("transition-duration", "0.5s");
			$(".sandwich-icon").css("display", "none");
			$(".closebtn").css("display", "block");
			$(".topnav-logo").click(function() {
				closeNav();
			});
		} else {
			if ($(window).width() > 768) {
				$('body').removeClass('stop-scrolling');
				$(".topnav-menu").css("height", "470px");
				$(".menu-item").css("opacity", "1");
				$(".menu-item").css("transition-delay", "0.1s");
				$(".menu-item").css("transition-duration", "0.5s");
				$(".sandwich-icon").css("display", "none");
				$(".closebtn").css("display", "block");
				$(".topnav-logo").click(function() {
					closeNav();
				});
			} else {
				$('body').removeClass('stop-scrolling');
				$(".topnav-menu").css("height", "670px");
				$(".menu-item").css("opacity", "1");
				$(".menu-item").css("transition-delay", "0.1s");
				$(".menu-item").css("transition-duration", "0.5s");
				$(".sandwich-icon").css("display", "none");
				$(".closebtn").css("display", "block");
				$(".topnav-logo").click(function() {
					closeNav();
				});
			}
		}	
	}
}

function closeNav() {
	if ($("#impaired-vision").css("display") == "block" || $("#normal-vision").css("display") == "block" && 
	$(window).width() < 1291) {
		$(".topnav-menu").css("height", "0px");
		$(".menu-item").css("opacity", "0");
		$(".menu-item").css("transition-delay", "0s");
		$(".menu-item").css("transition-duration", "0.3s");
		$(".sandwich-icon").css("display", "block");
		$(".closebtn").css("display", "none");
		$('body').removeClass('stop-scrolling');
	} {
		
	}
}

$(document).ready(function() {
    $(".a-link").click(function() {
		if ($("#impaired-vision").css("display") == "block" || $("#normal-vision").css("display") == "block" && 
		$(window).width() < 1291) {
			closeNav();
		} else {
			openNav();
		}
	});	
});


function footerPos() {
		if ($(window).width() < 1025 && window.location.hash.substring(1) != "homepage-tab") {
			$(".fullscreen-bg").css("opacity", "0.3");
/* 			$(".footer").css("position", "relative"); */
		} else {
/* 			$(".footer").css("position", "fixed"); */
		};
};


function visionVersionVisibility() {

}

$(window).resize(function() {
	footerPos();
	if ($(window).width() > 1024) {
        $(".footer").css("opacity", "1");
	}
	if ($(window).width() > 1290 && $("#normal-vision").css("display") == "block") {
        openNav();
	} else {
	if ($(window).width() > 812) {
		closeNav();
		}
	}
});

/* $(window).resize(function() {
	footerPos();
    if ($(window).width() > 1290) {
        openNav();
        $(".closebtn").css("display", "none");
		$(".topnav-menu").css("height", "0px");
		$(".sandwich-icon").css("display", "none");
    } else {
        closeNav();
        $(".menu-item").css("transition-duration", "0s");
   }
}); */

$(".scroll-value").click(function() {
	$(".scroll-value").text($(window).scrollTop() + $(window).height() + "px" + " to " + $(document).height());
});



	
/* LISTS SCRIPT */

/* var SpreadsheetExecuted = 'https://docs.google.com/spreadsheets/d/1-OgxzL0y_TeqbnxoibFeTMxnTMRD0EXEdwfYRDGO6Pw/edit#gid=0'; */
var SpreadsheetExecuted = 'https://docs.google.com/spreadsheets/d/1I7G-7EAu78VVVR6lpdwWDFxK6OZht1o8De66PrR_7BA/edit#gid=0';

var SpreadsheetKNB = 'https://docs.google.com/spreadsheets/d/1dsmE1GYkxPEtw9vQA7TDOw4iAMz_wVD1Zx-D9eEWgiI/edit#gid=0';
var SpreadsheetSGADKNB = 'https://docs.google.com/spreadsheets/d/14CI6LvGRQByN0teNoVVBM2c3JWV-r32C--mI0zdNUOw/edit#gid=0';

var SpreadsheetChildren = 'https://docs.google.com/spreadsheets/d/1P9Ub1ZVKsfT_luXpuculZfdH-pOIvQHr-hBeUaj74CM/edit#gid=0';
var SpreadsheetEcclesiastic = 'https://docs.google.com/spreadsheets/d/1ZpukOEPiu65g-d8Kjh89p40DlLpHt2LF4oOhVuRIsGM/edit#gid=0';
var SpreadsheetNames = 'https://docs.google.com/spreadsheets/d/1nqfQauviG3Rkpb88MpEXtlV3uSlnkasEPXKmzSlTU7o/edit#gid=0';

var SpreadsheetScientists = 'https://docs.google.com/spreadsheets/d/1L2CCU5hQArWRosiaa2Aro6DAyy_6CEseZ3R4v8CZbhE/edit#gid=0';
var SpreadsheetWriters = 'https://docs.google.com/spreadsheets/d/1xBWhNrVXS-SOAAJRU0aWKXTG4oMGnJzqrw-b_a8IU8w/edit#gid=0';
var SpreadsheetPainters = 'https://docs.google.com/spreadsheets/d/1TvaKOZRO76atJiIvC2w8XHvYzEkHXEfxWv3tErRKPuE/edit#gid=0';
var SpreadsheetArtists = 'https://docs.google.com/spreadsheets/d/117Je0evpTtuJ_TuU1BWdA_fRhr3xqkwozp5H-fUD07k/edit#gid=0';

var Sort1, Sort2, Sort3, Sort4, Sort5, Sort6, Sort7, Sort8, Sort9, Sort10;
var Sort1 = Sort2 = Sort3 = Sort4 = Sort5 = Sort6 = Sort7 = Sort8 = Sort9 = Sort10 = function (error, options, response) {
  // Target is not a jQuery object, so we need to call jQuery
  // explicitly.
	$('.toggle').click(function() {
	  if ( !$(this).next().hasClass('show') ) {
		$(this).parents(':eq(2)').children().children().children('.collapse.show').collapse('hide');
	  }
	  $(this).next().collapse('toggle');
	});
	$(options.user.target).DataTable({
	"lengthChange": false,
	"ordering": false,
	"pageLength": 50,
	"pagingType": "numbers",
	language: {
		searchPlaceholder: "Поиск",
		"processing": "Подождите...",
		"search": "",
		"lengthMenu": "Показать _MENU_ записей",
		"info": "Записи с _START_ до _END_ из _TOTAL_ записей",
		"infoEmpty": "Записи с 0 до 0 из 0 записей",
		"infoFiltered": "(отфильтровано из _MAX_ записей)",
		"infoPostFix": "",
		"loadingRecords": "Загрузка записей...",
		"zeroRecords": "Записи отсутствуют.",
		"emptyTable": "В таблице отсутствуют данные",
		"paginate": {
			"first": "Первая",
			"previous": "<",
			"next": ">",
			"last": "Последняя"
			},
		"aria": {
			"sortAscending": ": активировать для сортировки столбца по возрастанию",
			"sortDescending": ": активировать для сортировки столбца по убыванию"
			}
		}
	});
}

var accordion = function () {
	$('tbody').css("background-color", "red");
}

$('#executed').sheetrock({
  url: SpreadsheetExecuted,
  query: "select A",
  callback : Sort1
});


$('#repressed-knb').sheetrock({
  url: SpreadsheetKNB,
  query: "select A",
  callback : Sort2
});

$('#repressed-sga-dknb').sheetrock({
  url: SpreadsheetSGADKNB,
  query: "select A",
  callback : Sort3
});

$('#children').sheetrock({
  url: SpreadsheetChildren,
  query: "select A",
  callback : Sort4
});

$('#ecclesiastic').sheetrock({
  url: SpreadsheetEcclesiastic,
  query: "select A",
  callback : Sort5
});

$('#names').sheetrock({
  url: SpreadsheetNames,
  query: "select A",
  callback : Sort6
});

$('#scientists').sheetrock({
  url: SpreadsheetScientists,
  query: "select A",
  callback : Sort7
});

$('#writers').sheetrock({
  url: SpreadsheetWriters,
  query: "select A",
  callback : Sort8
});

$('#painters').sheetrock({
  url: SpreadsheetPainters,
  query: "select A",
  callback : Sort9
});

$('#artists').sheetrock({
  url: SpreadsheetArtists,
  query: "select A",
  callback : Sort10
});


$(window).bind('hashchange', function(){
	if (window.location.hash.substring(1) == "artists-tab") {
		carousel();
		function carousel() {
			$(".carousel-item").removeClass("active"); 
			$(".carousel-item:first-child").addClass("active");
		}
	}
});
	


/* PHOTO-ANIMATION */

/* Photo layers */

$(document).ready(function(){
    first();
    function first(){   
     $(".layer-1-1").animate({
         "left": "-=102%" 
     }, 50000, "linear", function(){
         $(".layer-1-1").css("left", "102%");
     });
        
     $(".layer-1-2").animate({
         "left": "2%"
      }, 50000, "linear", function(){
          second();
      });
    };
    function second(){
        $(".layer-1-2").animate({
            "left": "-=102%"
        }, 50000, "linear", function(){
            $(".layer-1-2").css("left", "102%");
        });
        
        $(".layer-1-1").animate({
          "left": "2%"
        }, 50000, "linear", function(){
            first();
        });
        
      };
});


$(document).ready(function(){
    first();
    function first(){   
     $(".layer-2-1").animate({
         "left": "-=66.4%" 
     }, 50000, "linear", function(){
         $(".layer-2-1").css("left", "66.4%");
     });
        
     $(".layer-2-2").animate({
         "left": "0%"
      }, 50000, "linear", function(){
          second();
      });
    };
    function second(){
        $(".layer-2-2").animate({
            "left": "-=66.4%"
        }, 50000, "linear", function(){
            $(".layer-2-2").css("left", "66.4%");
        });
        
        $(".layer-2-1").animate({
          "left": "0%"
        }, 50000, "linear", function(){
            first();
        });
        
      };
});

$(document).ready(function(){
    first();
    function first(){   
     $(".layer-3-1").animate({
         "left": "-=42.7%" 
     }, 50000, "linear", function(){
         $(".layer-3-1").css("left", "42.7%");
     });
        
     $(".layer-3-2").animate({
         "left": "0%"
      }, 50000, "linear", function(){
          second();
      });
    };
    function second(){
        $(".layer-3-2").animate({
            "left": "-=42.7%"
        }, 50000, "linear", function(){
            $(".layer-3-2").css("left", "42.7%");
        });
        
        $(".layer-3-1").animate({
          "left": "0%"
        }, 50000, "linear", function(){
            first();
        });
        
      };
});



/* Wire layers */

animateWires ($(".wire-1-1-1"), $(".wire-1-1-2"), 29000);
animateWires ($(".wire-1-2-1"), $(".wire-1-2-2"), 31000);
animateWires ($(".wire-1-3-1"), $(".wire-1-3-2"), 33000);
animateWires ($(".wire-2-1-1"), $(".wire-2-1-2"), 35000);
animateWires ($(".wire-2-2-1"), $(".wire-2-2-2"), 37000);
animateWires ($(".wire-2-3-1"), $(".wire-2-3-2"), 39000);

function animateWires (image_1, image_2, animationSpeed){
    first(image_1, image_2, animationSpeed);
    function first(image_1, image_2, animationSpeed){   
     $(image_1).animate({
         "left": "-=100%" 
     }, animationSpeed, "linear", function(){
         $(image_1).css("left", "100%");
     });
        
     $(image_2).animate({
         "left": "0%"
      }, animationSpeed, "linear", function(){
          second(image_1, image_2, animationSpeed);
      });
    };
    function second(image_1, image_2, animationSpeed){
        $(image_2).animate({
            "left": "-=100%"
        }, animationSpeed, "linear", function(){
            $(image_2).css("left", "100%");
        });
        
        $(image_1).animate({
          "left": "0%"
        }, animationSpeed, "linear", function(){
            first(image_1, image_2, animationSpeed);
        });
    };
};


function animationPos(){
	var windowHeight = $(window).height();
	
	var widthToHeight = windowHeight/$(".photo-animation").width();
	$(".photo-animation").width($(window).height()/ 0.16);
	
	var photoAnimationLayerHeight = $(".photo-animation-layer") / (4818 / ($(window).height()/ 0.16));
	$(".widthToHeight").text($(".photo-animation-layer").height());
	$(".photo-animation").css("top", $(window).height() /2 - $(".photo-animation-layer").height() /2 );
	
	$(".quotes-wrapper").css("top", $(window).height() / 2.9);
	if ($(window).width() < 426){
		$(".quotes-wrapper").css("top", $(window).height() / 3.7);
	}
	
	/* when the width of the $(".photo-animation") is changed trough js it will not be reflected 
	in the height of the $(".photo-animation-layer") */
};

$(document).ready(animationPos());
$(window).resize(function() {
	animationPos();
});


function fadeIn(fadedObject){
	fadedObject.css("display", "block");
	fadedObject.css("animation-name", "fadeIn");
}

function fadeOut(fadedObject){
	fadedObject.delay(300).hide(0);
	fadedObject.css("animation-name", "fadeOut");
}

function impairedVision() {
/* 	$(".vision-version.iv").css("animation-name", "fadeIn");
	$(".vision-version.iv").css("animation-delay", "0.5s"); */
	$(".vision-version.iv").css("opacity", "0.6");
	
	$(".vision-version.iv").css("transition-delay", "0.3s");
	$(".vision-version.nv").css("transition-delay", "0s");
	
	$(".vision-version.iv").css("z-index", "101");
	
	$(".vision-version.nv").css("opacity", "0");
	$(".vision-version.nv").css("z-index", "100");
	
	fadeIn($("#impaired-vision"));
	$("#normal-vision").css("display", "none");
	
	closeNav();
	
	$(".sandwich-icon").css("color", "rgba(255,255,255,0.5)");
	
/*     document.createStyleSheet('css/impaired-vision-styles.css'); */
	$("head").append($("<link rel='stylesheet' href='css/impaired-vision-styles.css' type='text/css' media='screen' />"));
	$(".carousel .carousel-control-prev-icon img").attr("src", "images/icons/icon-slide-previous-b.png");
	$(".carousel .carousel-control-next-icon img").attr("src", "images/icons/icon-slide-next-b.png");
	$(window).scrollTop(0);
}

function normalVision() {
	$(".vision-version.nv").css("opacity", "1");
	
	$(".vision-version.nv").css("transition-delay", "0.3s");
	$(".vision-version.iv").css("transition-delay", "0s");
	
	$(".vision-version.nv").css("z-index", "101");
	
	$(".vision-version.iv").css("opacity", "0");
	$(".vision-version.iv").css("z-index", "100");
	
	fadeIn($("#normal-vision"));
	$("#impaired-vision").css("display", "none");
	
	if ($(window).width() > 1290) {
		openNav();
	}
	$('link[rel=stylesheet][href*="css/impaired-vision-styles.css"]').remove();
/* 	$("head").find($("<link rel='stylesheet' href='css/impaired-vision-styles.css' type='text/css' media='screen' />")).empty(); */

	$(".carousel .carousel-control-prev-icon img").attr("src", "images/icons/icon-slide-previous.png");
	$(".carousel .carousel-control-next-icon img").attr("src", "images/icons/icon-slide-next.png");
	$(window).scrollTop(0);
}
