jQuery(function($){
	$('.header_left a.logo').after($('.search'));
	$('.social-links-top').after($('.top_menu'));
	$(".article_full_img_block").prependTo($('.article_details_news.full'));
	$('.footer').prepend($('.newsletter-widget'));
	$('.footer_container_left').html($('.header_left a.logo').clone());
	if ($('.social-widget-link').length) {
		$('.social-widget-link a').each(function () {
			$(this).append($('.social-widget-icon .fa-'+$(this).attr('id')));
		});
		$('.social-links-top').append($('.social-widget-link'));
		$('.footer .footer_container').append('<div class="social_widget_wrapper"></div>');
		$('.social-widget-link').clone().appendTo($('.social_widget_wrapper'));
		$('.social_widget_wrapper .social-widget-link').addClass('social-widget');
		if ($('.social-widget-title').length) {
			$('.social-widget-title').addClass('widget-title');
			$('.social-widget-title').prependTo($('.social_widget_wrapper'));
		}
	}

	$('.top_menu').prepend('<div class="menu-icons"><span class="menu-icons__item first"></span><span class="menu-icons__item second"></span><span class="menu-icons__item third"></span></div>');

	$('.search-icon').on('click', function () {
		$('#search').toggle();
	});

	$('.menu-icons').on('click', function () {
		$('.header_menu_top').slideToggle();
	});

	var str = $('.who_make a:first-child').text(),
		newStr = str.substring(0, str.length - 16);
	$('.who_make a:first-child').text(newStr);

	$(window).on('load', function () {
		var lastNewsHeight = 0,
			lastNews = [];
		$('.last-news-wrapper .last_news li').each(function () {
			$(this).find($('.title')).after($(this).find($('.date')));
			// if ($(this).height() > lastNewsHeight) {
			// 	lastNewsHeight = $(this).height();
			// }
			lastNews.push($(this));
		});
		for (var i = 0; i < (lastNews.length-1)/2; i++) {
			 if (lastNews[2*i].height() > lastNews[2*i+1].height()) {
			 	lastNews[2*i+1].height(lastNews[2*i].height());
			 	lastNews[2*i].height(lastNews[2*i].height());
			 } else {
			 	lastNews[2*i].height(lastNews[2*i+1].height());
			 	lastNews[2*i+1].height(lastNews[2*i+1].height());
			 }
			 console.log(lastNews[2*i].height(), lastNews[2*i+1].height())
		}
		
		// $('.last-news-wrapper .last_news li').each(function () {
		// 	$(this).height(lastNewsHeight+100);
		// });
	});

	$(window).on('load', function () {
		var NewsHeight = 0,
			news = [];
		$('.articles_container .article_details_news.short').each(function () {
			// if ($(this).height() > NewsHeight) {
			// 	NewsHeight = $(this).height();
			// }
			news.push($(this));
		});
		for (var i = 0; i < (news.length-1)/2; i++) {
			 if (news[2*i].height() > news[2*i+1].height()) {
			 	news[2*i+1].height(news[2*i].height());
			 	news[2*i].height(news[2*i].height());
			 } else {
			 	news[2*i].height(news[2*i+1].height());
			 	news[2*i+1].height(news[2*i+1].height());
			 }
		}
		// $('.articles_container .article_details_news.short').each(function () {
		// 	$(this).height(NewsHeight+100);
		// });

		$('.newsletter-right .inp_text').outerWidth($('.newsletter-right .inp_text').closest('form').width() - $('.newsletter-right .sbmt_btn').outerWidth() - 5);
	});

	$(window).on('resize', function () {
		var lastNewsHeight = 0,
			lastNews = [];
		$('.last-news-wrapper .last_news li').each(function () {
			$(this).css({'height': 'auto'});
			lastNews.push($(this));
		});
		for (var i = 0; i < (lastNews.length-1)/2; i++) {
			 if (lastNews[2*i].height() > lastNews[2*i+1].height()) {
			 	lastNews[2*i+1].height(lastNews[2*i].height());
			 	lastNews[2*i].height(lastNews[2*i].height());
			 } else {
			 	lastNews[2*i].height(lastNews[2*i+1].height());
			 	lastNews[2*i+1].height(lastNews[2*i+1].height());
			 }
		}
		
		var NewsHeight = 0,
			news = [];
		$('.articles_container .article_details_news.short').each(function () {
			$(this).css({'height': 'auto'});
			news.push($(this));
		});
		for (var i = 0; i < (news.length-1)/2; i++) {
			 if (news[2*i].height() > news[2*i+1].height()) {
			 	news[2*i+1].height(news[2*i].height());
			 	news[2*i].height(news[2*i].height());
			 } else {
			 	news[2*i].height(news[2*i+1].height());
			 	news[2*i+1].height(news[2*i+1].height());
			 }
		}

		$('.newsletter-right .inp_text').outerWidth($('.newsletter-right .inp_text').closest('form').width() - $('.newsletter-right .sbmt_btn').outerWidth() - 5);
	});

	if ($(".top-news .last_news li").length) {
		$(".top-news .last_news").excoloSlider({autoPlay: true, interval: 15000});
	}

	if ($('.article_details_news.full').length) {
		$('.article_details_news.full').append($('.social-share-button'));
		var url = window.location.href
		$('#share').attr({href: "http://www.facebook.com/sharer.php?u=" + url});
		$('#linkedin_plagin_content :last-child').before('<script type="IN/Share" data-url="https://'+url+'"></script>');
		$('#linkedin_plagin_content :last-child').remove();
		if ($('#share').length) {
			$('#share').popupWindow({ 
				width:550, 
				height:400,
				centerBrowser:1
			});
		}
	} else {
		$('.social-share-button').remove();
	};

	$('.staff .employees .employee').each(function (){
		$(this).find('h4').before($(this).find('img'));
		$(this).find('img').wrap('<div class="employee_photo" />');
	});

	if ($('.service-page').length) {
		$('.article_details_news_wp .date').remove();
	}
	if ($('.service-page').length && $('.contact-form-wrp').length) {
		$('.article_details_news_wp').append($('.contact-form-wrp'));
	}

	$('body').append('<a href="#" class="scrollToTop"><i class="fa fa-arrow-up"></i></a>');

	if ($('#2event_tickets_widget').length) {
		$('.footer').before($('#2event_tickets_widget'));
		$('#2event_tickets_widget').wrap('<div class="wrp_2event_tickets_widget" />');
	}
});


jQuery(document).ready(function($){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
        
        $('.loading-mask').css({
            "transition": "opacity 500ms",
            "display": "none",
            "opacity": "0"
        });
	
});