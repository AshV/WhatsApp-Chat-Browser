/*jshint unused: vars */
require.config({
	paths : {
		angular : '../../bower_components/angular/angular',
		'angular-animate' : '../../bower_components/angular-animate/angular-animate',
		'angular-cookies' : '../../bower_components/angular-cookies/angular-cookies',
		'angular-resource' : '../../bower_components/angular-resource/angular-resource',
		'angular-route' : '../../bower_components/angular-route/angular-route',
		'angular-sanitize' : '../../bower_components/angular-sanitize/angular-sanitize',
		'angular-touch' : '../../bower_components/angular-touch/angular-touch',
	},
	shim : {
		angular : {
			exports : 'angular'
		},
		'angular-route' : ['angular'],
		'angular-cookies' : ['angular'],
		'angular-sanitize' : ['angular'],
		'angular-resource' : ['angular'],
		'angular-animate' : ['angular'],
		'angular-touch' : ['angular']
	},
	priority : ['angular'],
	packages : []
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require(['angular', 'app', 'angular-route', 'angular-cookies', 'angular-sanitize', 'angular-resource', 'angular-animate', 'angular-touch'], function(angular, app, ngRoutes, ngCookies, ngSanitize, ngResource, ngAnimate, ngTouch) {
	'use strict';
	/* jshint ignore:start */
	var $html = angular.element(document.getElementsByTagName('html')[0]);
	/* jshint ignore:end */
	angular.element().ready(function() {
		angular.resumeBootstrap([app.name]);
	});
});

/***** TWITTER *****/
window.twttr = ( function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
		if (d.getElementById(id))
			return t;
		js = d.createElement(s);
		js.id = id;
		js.src = "https://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);

		t._e = [];
		t.ready = function(f) {
			t._e.push(f);
		};

		return t;
	}(document, "script", "twitter-wjs"));

/***** FACEBOOK *****/
( function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id))
			return;
		js = d.createElement(s);
		js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

/*** ANALYTICS ***/

(function(i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] ||
	function() {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o), m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-67092412-1', 'auto');
ga('send', 'pageview');

/***** ONLOAD *****/
( function() {
		window.onload = function() {
			document.getElementsByTagName("body")[0].classList.remove("loading");
		};
		var preloaderElem = document.getElementById("preloader");
		function preloaderAnimationEndCallback() {
			preloaderElem.style.display = "none";
		}


		preloaderElem.addEventListener("animationend", preloaderAnimationEndCallback, false);
		preloaderElem.addEventListener("webkitanimationEnd", preloaderAnimationEndCallback, false);
		preloaderElem.addEventListener("oanimationEnd", preloaderAnimationEndCallback, false);
		preloaderElem.addEventListener("MSanimationEnd", preloaderAnimationEndCallback, false);
	}());

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-teststyles-prefixes-css_calc
 */
;
window.Modernizr = function(a, b, c) {
	function w(a) {
		j.cssText = a
	}

	function x(a, b) {
		return w(m.join(a + ";") + (b || ""))
	}

	function y(a, b) {
		return typeof a === b
	}

	function z(a, b) {
		return !!~("" + a).indexOf(b)
	}

	function A(a, b, d) {
		for (var e in a) {
			var f = b[a[e]];
			if (f !== c)
				return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f
		}
		return !1
	}

	var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = {}, o = {}, p = {}, q = [], r = q.slice, s, t = function(a, c, d, e) {
		var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
		if (parseInt(d, 10))
			while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
		return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, ( m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
	}, u = {}.hasOwnProperty, v;
	!y(u, "undefined") && !y(u.call, "undefined") ? v = function(a, b) {
		return u.call(a, b)
	} : v = function(a, b) {
		return b in a && y(a.constructor.prototype[b], "undefined")
	}, Function.prototype.bind || (Function.prototype.bind = function(b) {
		var c = this;
		if ( typeof c != "function")
			throw new TypeError;
		var d = r.call(arguments, 1), e = function() {
			if (this instanceof e) {
				var a = function() {
				};
				a.prototype = c.prototype;
				var f = new a, g = c.apply(f, d.concat(r.call(arguments)));
				return Object(g) === g ? g : f
			}
			return c.apply(b, d.concat(r.call(arguments)))
		};
		return e
	}), n.touch = function() {
		var c;
		return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : t(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
			c = a.offsetTop === 9
		}), c
	};
	for (var B in n)v(n, B) && ( s = B.toLowerCase(), e[s] = n[B](), q.push((e[s] ? "" : "no-") + s));
	return e.addTest = function(a, b) {
		if ( typeof a == "object")
			for (var d in a)v(a, d) && e.addTest(d, a[d]);
		else {
			a = a.toLowerCase();
			if (e[a] !== c)
				return e;
			b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + ( b ? "" : "no-") + a), e[a] = b
		}
		return e
	}, w(""), i = k = null, e._version = d, e._prefixes = m, e.testStyles = t, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + ( f ? " js " + q.join(" ") : ""), e
}(this, this.document), Modernizr.addTest("csscalc", function() {
	var a = "width:", b = "calc(10px);", c = document.createElement("div");
	return c.style.cssText = a + Modernizr._prefixes.join(b + a), !!c.style.length
}); 