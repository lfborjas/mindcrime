goog.provide('mindcrime');
goog.require('cljs.core');
goog.require('cljs.nodejs');
mindcrime.express = cljs.nodejs.require.call(null,"express");
mindcrime.fs = cljs.nodejs.require.call(null,"fs");
mindcrime.engine = cljs.nodejs.require.call(null,"handlebars");
mindcrime.app = mindcrime.express.call(null);
mindcrime.slurp = (function slurp(filename){
return [cljs.core.str(mindcrime.fs.readFileSync(filename))].join('');
});
mindcrime.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{var obj = {};
var G__6301_6303 = cljs.core.seq.call(null,x);
while(true){
if(G__6301_6303)
{var vec__6302_6304 = cljs.core.first.call(null,G__6301_6303);
var k_6305 = cljs.core.nth.call(null,vec__6302_6304,0,null);
var v_6306 = cljs.core.nth.call(null,vec__6302_6304,1,null);
(obj[clj__GT_js.call(null,k_6305)] = clj__GT_js.call(null,v_6306));
{
var G__6307 = cljs.core.next.call(null,G__6301_6303);
G__6301_6303 = G__6307;
continue;
}
} else
{}
break;
}
return obj;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
mindcrime.render = (function render(template_name,locals){
return mindcrime.engine.compile(mindcrime.slurp.call(null,[cljs.core.str("./views/"),cljs.core.str(template_name),cljs.core.str(".html")].join(''))).call(null,mindcrime.clj__GT_js.call(null,locals));
});
mindcrime.slideshow = (function slideshow(from_filename){
var step_in = (function step_in(x){
cljs.core.println.call(null,x);
return x;
});
var read_slides = (function read_slides(from_file){
return mindcrime.slurp.call(null,from_file);
});
var split_slides = (function split_slides(raw_markup){
return cljs.core.re_seq.call(null,/!SLIDE (\w+)?\s+(.*)/,raw_markup);
});
var build_slides = (function build_slides(slide_components){
return cljs.core.map.call(null,(function (p__6317){
var vec__6318 = p__6317;
var _ = cljs.core.nth.call(null,vec__6318,0,null);
var t = cljs.core.nth.call(null,vec__6318,1,null);
var mkp = cljs.core.nth.call(null,vec__6318,2,null);
return cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'content"],{"\uFDD0'type":(function (){var or__3824__auto__ = t;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return "markdown";
}
})(),"\uFDD0'content":mkp});
}),slide_components);
});
var render_slide = (function render_slide(p__6319){
var map__6321 = p__6319;
var map__6321__$1 = ((cljs.core.seq_QMARK_.call(null,map__6321))?cljs.core.apply.call(null,cljs.core.hash_map,map__6321):map__6321);
var typ = cljs.core._lookup.call(null,map__6321__$1,"\uFDD0'type",null);
var mkp = cljs.core._lookup.call(null,map__6321__$1,"\uFDD0'content",null);
return mindcrime.render.call(null,[cljs.core.str(typ),cljs.core.str("_slide")].join(''),cljs.core.ObjMap.fromObject(["\uFDD0'content"],{"\uFDD0'content":mkp}));
});
var rendered_slides = (function rendered_slides(slide_maps){
return cljs.core.map.call(null,render_slide,slide_maps);
});
var render_slideshow = (function render_slideshow(slides){
return mindcrime.render.call(null,"index",cljs.core.ObjMap.fromObject(["\uFDD0'slides"],{"\uFDD0'slides":slides}));
});
return render_slideshow.call(null,step_in.call(null,rendered_slides.call(null,build_slides.call(null,split_slides.call(null,read_slides.call(null,from_filename))))));
});
mindcrime.create_slideshow = (function create_slideshow(request,response){
return response.send(mindcrime.slideshow.call(null,"./slides.md"));
});
/**
* @param {...*} var_args
*/
mindcrime._serve = (function() { 
var _serve__delegate = function (args){
var port = (function (){var or__3824__auto__ = cljs.nodejs.process.env.PORT;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return 5000;
}
})();
var G__6323_6324 = mindcrime.app;
G__6323_6324.use(mindcrime.express.logger());
G__6323_6324.get("/",mindcrime.create_slideshow);
G__6323_6324.listen(port);
return cljs.core.println.call(null,[cljs.core.str("Listening on port"),cljs.core.str(port)].join(''));
};
var _serve = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return _serve__delegate.call(this, args);
};
_serve.cljs$lang$maxFixedArity = 0;
_serve.cljs$lang$applyTo = (function (arglist__6325){
var args = cljs.core.seq(arglist__6325);;
return _serve__delegate(args);
});
_serve.cljs$lang$arity$variadic = _serve__delegate;
return _serve;
})()
;
cljs.core._STAR_main_cli_fn_STAR_ = mindcrime._serve;
