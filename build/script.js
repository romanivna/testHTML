"use strict";$(".upper-burger").click(function(){$(".menu").animate({left:"0"},600),$("html").css("overflow","hidden")}),$(".menu").click(function(){$(".menu").animate({left:"100%"},600),$("html").css("overflow","auto")}),$(".list-account-item--radio").hover(function(e){var i=e.currentTarget;$(i).addClass("radio-active")},function(e){var i=e.currentTarget;$(i).hasClass("clicked")||$(i).removeClass("radio-active")}),$(".list-account-item--radio").click(function(e){$(".radio-active").removeClass("radio-active"),$(".clicked").removeClass("clicked");var i=e.currentTarget;$(i).addClass("radio-active"),$(i).addClass("clicked")}),$(".menu-list--item").hover(function(e){$(".menu-list--item__with-underline").removeClass("menu-list--item__with-underline");var i=e.currentTarget;$(i).addClass("menu-list--item__with-underline")}),$(document).ready(function(){$(".menu-list--item a").click(function(){var e=$(this).attr("href"),i=$(e).offset().top;jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:i},800)})}),$(".slider-nav--item").hover(function(e){$(".slider-nav--item").removeClass("slider-item-active");var i=e.currentTarget;$(i).addClass("slider-item-active")}),$(".slider-nav--item").click(function(e){$(".slider-nav--item__active").removeClass("slider-nav--item__active");var i=e.currentTarget;$(i).addClass("slider-nav--item__active")});