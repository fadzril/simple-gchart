
(function(a){a.fn.fancyZoom=function(p){var p=p||{};var m=p&&p.directory?p.directory:"images";var e=false;if(a("#zoom").length==0){var f=a.browser.msie?"gif":"png";var k='<div id="zoom" style="display:none;">                   <table id="zoom_table" style="border-collapse:collapse; width:100%; height:100%;">                     <tbody>                       <tr>                         <td class="tl" style="background:url('+m+"/tl."+f+') 0 0 no-repeat; width:20px; height:20px; overflow:hidden;" />                         <td class="tm" style="background:url('+m+"/tm."+f+') 0 0 repeat-x; height:20px; overflow:hidden;" />                         <td class="tr" style="background:url('+m+"/tr."+f+') 100% 0 no-repeat; width:20px; height:20px; overflow:hidden;" />                       </tr>                       <tr>                         <td class="ml" style="background:url('+m+"/ml."+f+') 0 0 repeat-y; width:20px; overflow:hidden;" />                         <td class="mm" style="background:#fff; vertical-align:top; padding:10px;">                           <div id="zoom_content">                           </div>                         </td>                         <td class="mr" style="background:url('+m+"/mr."+f+') 100% 0 repeat-y;  width:20px; overflow:hidden;" />                       </tr>                       <tr>                         <td class="bl" style="background:url('+m+"/bl."+f+') 0 100% no-repeat; width:20px; height:20px; overflow:hidden;" />                         <td class="bm" style="background:url('+m+"/bm."+f+') 0 100% repeat-x; height:20px; overflow:hidden;" />                         <td class="br" style="background:url('+m+"/br."+f+') 100% 100% no-repeat; width:20px; height:20px; overflow:hidden;" />                       </tr>                     </tbody>                   </table>                   <a href="#" title="Close" id="zoom_close" style="position:absolute; top:0; left:0;">                     <img src="'+m+"/closebox."+f+'" alt="Close" style="border:none; margin:0; padding:0;" />                   </a>                 </div>';a("body").append(k);a("html").click(function(q){if(a(q.target).parents("#zoom:visible").length==0){l();}});a(document).keyup(function(q){if(q.keyCode==27&&a("#zoom:visible").length>0){l();}});a("#zoom_close").click(l);}var o=a("#zoom");var j=a("#zoom_table");var i=a("#zoom_close");var h=a("#zoom_content");var b=a("td.ml,td.mm,td.mr");this.each(function(q){a(a(this).attr("href")).hide();a(this).click(n);});return this;function n(w){if(e){return false;}e=true;var q=a(a(this).attr("href"));var u=p.width;var v=p.height;var r=window.innerWidth||(window.document.documentElement.clientWidth||window.document.body.clientWidth);var E=window.innerHeight||(window.document.documentElement.clientHeight||window.document.body.clientHeight);var C=window.pageXOffset||(window.document.documentElement.scrollLeft||window.document.body.scrollLeft);var B=window.pageYOffset||(window.document.documentElement.scrollTop||window.document.body.scrollTop);var F={width:r,height:E,x:C,y:B};var r=(u||q.width())+60;var E=(v||q.height())+60;var z=F;var A=Math.max((z.height/2)-(E/2)+B,0);var D=(z.width/2)-(r/2);var s=w.pageY;var t=w.pageX;i.attr("curTop",s);i.attr("curLeft",t);i.attr("scaleImg",p.scaleImg?"true":"false");a("#zoom").hide().css({position:"absolute",top:s+"px",left:t+"px",width:"1px",height:"1px"});g();i.hide();if(p.closeOnClick){a("#zoom").click(l);}if(p.scaleImg){h.html(q.html());a("#zoom_content img").css("width","100%");}else{h.html("");}a("#zoom").animate({top:A+"px",left:D+"px",opacity:"show",width:r,height:E},500,null,function(){if(p.scaleImg!=true){h.html(q.html());}d();i.show();e=false;});return false;}function l(){if(e){return false;}e=true;a("#zoom").unbind("click");g();if(i.attr("scaleImg")!="true"){h.html("");}i.hide();a("#zoom").animate({top:i.attr("curTop")+"px",left:i.attr("curLeft")+"px",opacity:"hide",width:"1px",height:"1px"},500,null,function(){if(i.attr("scaleImg")=="true"){h.html("");}d();e=false;});return false;}function c(s){a("#zoom_table td").each(function(u){var t=a(this).css("background-image").replace(/\.(png|gif|none)\"\)$/,"."+s+'")');a(this).css("background-image",t);});var r=i.children("img");var q=r.attr("src").replace(/\.(png|gif|none)$/,"."+s);r.attr("src",q);}function g(){if(a.browser.msie&&parseFloat(a.browser.version)>=7){c("gif");}}function d(){if(a.browser.msie&&a.browser.version>=7){c("png");}}};})(jQuery);

/* ===========================================================================
 * JQuery URL Parser
 * Version 1.0
 * Parses URLs and provides easy access to information within them.
 *
 * Author: Mark Perkins
 * Author email: mark@allmarkedup.com
 *
 * For full documentation, http://projects.allmarkedup.com/jquery_url_parser/
 =========================================================================== */
jQuery.url=function(){var segments={};var parsed={};var options={url:window.location,strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var parseUri=function(){str=decodeURI(options.url);var m=options.parser[options.strictMode?"strict":"loose"].exec(str);var uri={};var i=14;while(i--){uri[options.key[i]]=m[i]||""}uri[options.q.name]={};uri[options.key[12]].replace(options.q.parser,function($0,$1,$2){if($1){uri[options.q.name][$1]=$2}});return uri};var key=function(key){if(!parsed.length){setUp()}if(key=="base"){if(parsed.port!==null&&parsed.port!==""){return parsed.protocol+"://"+parsed.host+":"+parsed.port+"/"}else{return parsed.protocol+"://"+parsed.host+"/"}}return(parsed[key]==="")?null:parsed[key]};var param=function(item){if(!parsed.length){setUp()}return(parsed.queryKey[item]===null)?null:parsed.queryKey[item]};var setUp=function(){parsed=parseUri();getSegments()};var getSegments=function(){var p=parsed.path;segments=[];segments=parsed.path.length==1?{}:(p.charAt(p.length-1)=="/"?p.substring(1,p.length-1):path=p.substring(1)).split("/")};return{setMode:function(mode){strictMode=mode=="strict"?true:false;return this},setUrl:function(newUri){options.url=newUri===undefined?window.location:newUri;setUp();return this},segment:function(pos){if(!parsed.length){setUp()}if(pos===undefined){return segments.length}return(segments[pos]===""||segments[pos]===undefined)?null:segments[pos]},attr:key,param:param}}();

/* ===========================================================================
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2008 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 9/11/2008
 * @author Ariel Flesler
 * @version 1.4
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 =========================================================================== */
;(function(h){var m=h.scrollTo=function(b,c,g){h(window).scrollTo(b,c,g)};m.defaults={axis:'y',duration:1};m.window=function(b){return h(window).scrollable()};h.fn.scrollable=function(){return this.map(function(){var b=this.parentWindow||this.defaultView,c=this.nodeName=='#document'?b.frameElement||b:this,g=c.contentDocument||(c.contentWindow||c).document,i=c.setInterval;return c.nodeName=='IFRAME'||i&&h.browser.safari?g.body:i?g.documentElement:this})};h.fn.scrollTo=function(r,j,a){if(typeof j=='object'){a=j;j=0}if(typeof a=='function')a={onAfter:a};a=h.extend({},m.defaults,a);j=j||a.speed||a.duration;a.queue=a.queue&&a.axis.length>1;if(a.queue)j/=2;a.offset=n(a.offset);a.over=n(a.over);return this.scrollable().each(function(){var k=this,o=h(k),d=r,l,e={},p=o.is('html,body');switch(typeof d){case'number':case'string':if(/^([+-]=)?\d+(px)?$/.test(d)){d=n(d);break}d=h(d,this);case'object':if(d.is||d.style)l=(d=h(d)).offset()}h.each(a.axis.split(''),function(b,c){var g=c=='x'?'Left':'Top',i=g.toLowerCase(),f='scroll'+g,s=k[f],t=c=='x'?'Width':'Height',v=t.toLowerCase();if(l){e[f]=l[i]+(p?0:s-o.offset()[i]);if(a.margin){e[f]-=parseInt(d.css('margin'+g))||0;e[f]-=parseInt(d.css('border'+g+'Width'))||0}e[f]+=a.offset[i]||0;if(a.over[i])e[f]+=d[v]()*a.over[i]}else e[f]=d[i];if(/^\d+$/.test(e[f]))e[f]=e[f]<=0?0:Math.min(e[f],u(t));if(!b&&a.queue){if(s!=e[f])q(a.onAfterFirst);delete e[f]}});q(a.onAfter);function q(b){o.animate(e,j,a.easing,b&&function(){b.call(this,r,a)})};function u(b){var c='scroll'+b,g=k.ownerDocument;return p?Math.max(g.documentElement[c],g.body[c]):k[c]}}).end()};function n(b){return typeof b=='object'?b:{top:b,left:b}}})(jQuery);

/* ===========================================================================
* Google Chart Visualization
=========================================================================== */
function Charts (options){
    var self = this;
    self.chart = [];
    self.dataTable = new google.visualization.DataTable();
    self.settings = $.extend({
        colors:['#98D8F4','#E85500','#B3CF2F', '#FEB800', '#FFA1C5', '#D984FF', '#DD9D75'],
        height: 300, legend : 'bottom'
    }, options);
    self.add = function(type, element){
        self.chart.push({
            element: $(element),
            o: new google.visualization[type]($(element)[0]),
            draw: function(dataTable, options){
                this.element.html('');
                this.o.draw(dataTable, options);
            }
        });
    };
    self.draw = function(options){
        var settings = $.extend({}, this.settings, options);
        $.each(self.chart, function(i, chart){
            chart.draw(self.dataTable, settings)
        })
    };
    self.parseData = function(months, labels, data){
        var countRows = data[0].length;
        self.dataTable.addColumn('string', 'Name');
        for (var i = 0; i < labels.length; ++i) {
		  self.dataTable.addColumn('number', labels[i]);
		}
		self.dataTable.addRows(months.length);
		for (var i = 0; i < months.length; ++i) {
		  self.dataTable.setCell(i, 0, months[i]);
		}
		for (var i = 0; i < labels.length; ++i) {
		  var d = data[i];
		  for (var set = 0; set < months.length; ++set) {
		    self.dataTable.setCell(set, i + 1, d[set]);
		  }
		}
        return self.dataTable;
    };
}

function loadFile(filename, filetype){
	//if filename is a external JavaScript file
 	if (filetype=="js"){ 
  		var fileref=document.createElement('script')
  		fileref.setAttribute("type","text/javascript")
  		fileref.setAttribute("src", "assets/javascripts/"+filename)
 	}
 	//if filename is an external CSS file
 	else if (filetype=="css"){ 
  		var fileref=document.createElement("link")
  		fileref.setAttribute("rel", "stylesheet")
  		fileref.setAttribute("type", "text/css")
  		fileref.setAttribute("href", "assets/javascripts/"+filename)
 	}
 	if (typeof fileref!="undefined")
  	document.getElementsByTagName("head")[0].appendChild(fileref)
}


$.fn.showPreloader = function(){
	var el = $(this);
	var elHeight = el.innerHeight();
	var elWidth = el.innerWidth();
	el.append('<div class=\"preloader\">Loading</div>');
	$('.preloader').css({'height': elHeight, 'width': elWidth}).fadeIn('slow');
}

$.fn.removePreloader = function(){
	if($('.preloader').lenght != 0){
		$('.preloader').fadeOut();
		$(this).remove('.preloader');
	}
}

$(document).ready(function(){

	$page = jQuery.url.segment(2);
	if(!$page) {
		$page = 'index.php';
	}	
	
	/* Cufon */
	Cufon.replace('h1, h2, h3, h4, h5', {fontFamily : 'museo'});
	Cufon.replace('.title', {fontFamily : 'museo', textShadow : '0 1px #FFF'});
	
	/* Settings */
	$('#settings ul li').find('ul').each(function(){
		var el = $(this);
		el.hide('fast');
		el.parents('li')
		.append('<span class=\"arrow\"/>')
		.hover(
			function(e){
				$(this).children('a').addClass('hover');
				el.slideDown('slow');	
				e.preventDefault();
			},
			function(e){
				$(this).children('a').removeClass('hover');
				el.slideUp('fast');
				e.preventDefault();
			}
		);
	});
	
	/* Page Navigation */
	$('#navigation li a').click(function(e){
		var $content = $('.container');
		var $href = $(this).attr('href');
		var current = $('#navigation li.current');
		if ($(current).length != 0 )
			$(current).removeClass('current');
		/*	
		$content.showPreloader();
				
		if($href != 'index.php'){
			$.ajax({
				url:$href, 
				dataType:'html', 
				success: function(data){
					$content.html(data);
					$content.removePreloader();
				}, 
				error: function(request, status, error){
				$(".preloader").append('<div id=\"error\"/>');
				$('#error').html('');
				$('#error').html(request.responseText);
			 	}
			});
		} else {
			window.location.replace($href);
		}
		*/		
		$(this).parent().addClass('current');
	});
	
	$('#navigation li a').hover(function(){
			$(this).animate({'margin-left': '+=5px'});
			},function(){
			$(this).animate({'margin-left':'-=5px'});
		
	});
	
	/* Chart Select View */
	$('.select ul li').find('ul').each(function(){
		var el = $(this);
		el.hide('fast');
		el.parents('li')
		.append('<span class=\"arrow\"/>')
		.toggle(
			function(e){
				$(this).children('a').addClass('hover');
				el.slideDown('slow');	
				e.preventDefault();
			},
			function(e){
				$(this).children('a').removeClass('hover');
				el.slideUp('fast');
				e.preventDefault();
			}
		);
	});
	
	/* Sidebars Links */
	var n = $("#sidebar").length;

	$('#sidebar ul li').find('ul').each(function(){
		var el = $(this);
		el.hide('fast');
	});
	
	// Sidebar setup
	if (n != 0){
		var top = $('#sidebar').offset().top;	
		$(window).scroll(function (event) {
			// what the y position of the scroll is
			var y = $(this).scrollTop();
			if (y >= top) {
			  	$('#sidebar').css('position','relative');
			} else {
			  	$('#sidebar').css('position','relative');
			}
		});
		$('#sidebar ul li').bind('click', function(e) {
			if($(this).hasClass('current')) {
				$(this).children('ul').slideUp('slow',function() {
					$(this).removeClass('current');
				});
			} else {
				$('#sidebar ul li.current ul').slideUp('slow',function() {
					$(this).parent().removeClass('current');
				});
				$(this).children('ul').slideToggle('slow',function() {
					$(this).parent().toggleClass('current');
				});
			}
			e.preventDefault();
			$(this).find('ul li a').each(function(){
				var $href = $(this).attr('href');
				$(this).click(function(){
					window.location.replace($href);
				});
			});
		});
	};
	
	/* Porlet Toggle Slide */
	$('.show').toggle(function(e){
			$(this).removeClass('show').addClass('hide');
			$(this).parent().children('.charts').slideUp('normal');
			e.preventDefault();
		}, function(e){
			$(this).removeClass('hide').addClass('show');
			$(this).parent().children('.charts').slideDown('normal');
			e.preventDefault();
		}
		
	);
	$('li:first-child').addClass('first');
	$('li:last-child').addClass('last');
	
	/* Modal Window */
	//select all the a tag with name equal to modal
	$('a[name=modal]').click(function(e) {
		//Cancel the link behavior
		e.preventDefault();
		// Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
		var docH = $(document).height();
		var docW = $(document).width();
		//Get the A tag
		var id = $(this).attr('href');
	
		//Get the screen height and width
		var maskHeight = $(window).height();
		var maskWidth = $(window).width();
	
		//Set height and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight, 'overflow':'hidden'});
		
		//transition effect		
		$('#mask').fadeIn(1000);	
		$('#mask').fadeTo("slow",0.8);	
	              
		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height());
		$(id).css('left', winW/2-$(id).width()/2);
	
		//transition effect
		$(id).fadeIn(2000); 
	
	});
	
	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		$('#mask, .window').hide();
	});		
	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});	
	
	// videos modal zoom
	$('.videolink').fancyZoom({
		directory: 'assets/images/zoom/',
		scaleImg: true, 
		closeOnClick: true
	});
});