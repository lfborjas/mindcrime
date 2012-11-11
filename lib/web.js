goog.provide('mindcrime');
goog.require('cljs.core');
goog.require('clojure.string');
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
var G__7411_7413 = cljs.core.seq.call(null,x);
while(true){
if(G__7411_7413)
{var vec__7412_7414 = cljs.core.first.call(null,G__7411_7413);
var k_7415 = cljs.core.nth.call(null,vec__7412_7414,0,null);
var v_7416 = cljs.core.nth.call(null,vec__7412_7414,1,null);
(obj[clj__GT_js.call(null,k_7415)] = clj__GT_js.call(null,v_7416));
{
var G__7417 = cljs.core.next.call(null,G__7411_7413);
G__7411_7413 = G__7417;
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
return cljs.core.remove.call(null,(function (p1__7418_SHARP_){
return clojure.string.blank_QMARK_.call(null,p1__7418_SHARP_);
}),clojure.string.split.call(null,raw_markup,/!SLIDE/));
});
var render_slides = (function render_slides(raw_slides){
return cljs.core.map.call(null,(function (p1__7419_SHARP_){
return mindcrime.render.call(null,"markdown_slide",cljs.core.ObjMap.fromObject(["\uFDD0'content"],{"\uFDD0'content":p1__7419_SHARP_}));
}),raw_slides);
});
var render_slideshow = (function render_slideshow(slides){
return mindcrime.render.call(null,"index",cljs.core.ObjMap.fromObject(["\uFDD0'slides"],{"\uFDD0'slides":slides}));
});
return render_slideshow.call(null,render_slides.call(null,split_slides.call(null,read_slides.call(null,from_filename))));
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
var G__7421_7422 = mindcrime.app;
G__7421_7422.use(mindcrime.express.logger());
G__7421_7422.use(mindcrime.express['static']('./public'));
G__7421_7422.get("/",mindcrime.create_slideshow);
G__7421_7422.listen(port);
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
_serve.cljs$lang$applyTo = (function (arglist__7423){
var args = cljs.core.seq(arglist__7423);;
return _serve__delegate(args);
});
_serve.cljs$lang$arity$variadic = _serve__delegate;
return _serve;
})()
;
cljs.core._STAR_main_cli_fn_STAR_ = mindcrime._serve;
