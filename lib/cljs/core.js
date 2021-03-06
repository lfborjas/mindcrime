goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[goog.typeOf(x__$1)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__2476__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__2476 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2476__delegate.call(this, array, i, idxs);
};
G__2476.cljs$lang$maxFixedArity = 2;
G__2476.cljs$lang$applyTo = (function (arglist__2477){
var array = cljs.core.first(arglist__2477);
var i = cljs.core.first(cljs.core.next(arglist__2477));
var idxs = cljs.core.rest(cljs.core.next(arglist__2477));
return G__2476__delegate(array, i, idxs);
});
G__2476.cljs$lang$arity$variadic = G__2476__delegate;
return G__2476;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._invoke[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._invoke["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._count[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._count["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._empty[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._empty["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._conj[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._conj["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._nth[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._nth["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._nth[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._nth["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._first[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._first["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._rest[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._rest["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._next[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._next["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto__ = o;
if(and__3822__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2003__auto__ = (((o == null))?null:o);
return (function (){var or__3824__auto__ = (cljs.core._lookup[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._lookup["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto__ = o;
if(and__3822__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2003__auto__ = (((o == null))?null:o);
return (function (){var or__3824__auto__ = (cljs.core._lookup[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._lookup["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._assoc[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._assoc["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._dissoc[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._dissoc["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._key[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._key["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._val[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._val["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._disjoin[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._disjoin["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._peek[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._peek["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._pop[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._pop["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._assoc_n[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto__ = o;
if(and__3822__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2003__auto__ = (((o == null))?null:o);
return (function (){var or__3824__auto__ = (cljs.core._deref[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._deref["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto__ = o;
if(and__3822__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2003__auto__ = (((o == null))?null:o);
return (function (){var or__3824__auto__ = (cljs.core._deref_with_timeout[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto__ = o;
if(and__3822__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2003__auto__ = (((o == null))?null:o);
return (function (){var or__3824__auto__ = (cljs.core._meta[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._meta["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto__ = o;
if(and__3822__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2003__auto__ = (((o == null))?null:o);
return (function (){var or__3824__auto__ = (cljs.core._with_meta[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._with_meta["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._reduce[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._reduce["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._reduce[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._reduce["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._kv_reduce[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto__ = o;
if(and__3822__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2003__auto__ = (((o == null))?null:o);
return (function (){var or__3824__auto__ = (cljs.core._equiv[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._equiv["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto__ = o;
if(and__3822__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2003__auto__ = (((o == null))?null:o);
return (function (){var or__3824__auto__ = (cljs.core._hash[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._hash["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto__ = o;
if(and__3822__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2003__auto__ = (((o == null))?null:o);
return (function (){var or__3824__auto__ = (cljs.core._seq[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._seq["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._rseq[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._rseq["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._sorted_seq[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._sorted_seq_from[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._entry_key[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._entry_key["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._comparator[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._comparator["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto__ = o;
if(and__3822__auto__)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto__;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2003__auto__ = (((o == null))?null:o);
return (function (){var or__3824__auto__ = (cljs.core._pr_seq[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto__ = writer;
if(and__3822__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__2003__auto__ = (((writer == null))?null:writer);
return (function (){var or__3824__auto__ = (cljs.core._write[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._write["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto__ = writer;
if(and__3822__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__2003__auto__ = (((writer == null))?null:writer);
return (function (){var or__3824__auto__ = (cljs.core._flush[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._flush["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto__ = o;
if(and__3822__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__2003__auto__ = (((o == null))?null:o);
return (function (){var or__3824__auto__ = (cljs.core._pr_writer[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto__ = d;
if(and__3822__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2003__auto__ = (((d == null))?null:d);
return (function (){var or__3824__auto__ = (cljs.core._realized_QMARK_[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._notify_watches[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._add_watch[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._add_watch["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2003__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (cljs.core._remove_watch[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._as_transient[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._as_transient["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto__ = tcoll;
if(and__3822__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2003__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto__ = (cljs.core._conj_BANG_[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto__ = tcoll;
if(and__3822__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2003__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto__ = (cljs.core._persistent_BANG_[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto__ = tcoll;
if(and__3822__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2003__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto__ = (cljs.core._assoc_BANG_[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto__ = tcoll;
if(and__3822__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2003__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto__ = (cljs.core._dissoc_BANG_[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto__ = tcoll;
if(and__3822__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2003__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto__ = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto__ = tcoll;
if(and__3822__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2003__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto__ = (cljs.core._pop_BANG_[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto__ = tcoll;
if(and__3822__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2003__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto__ = (cljs.core._disjoin_BANG_[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto__ = x;
if(and__3822__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2003__auto__ = (((x == null))?null:x);
return (function (){var or__3824__auto__ = (cljs.core._compare[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._compare["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._drop_first[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._drop_first["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._chunked_first[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._chunked_rest[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto__ = coll;
if(and__3822__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2003__auto__ = (((coll == null))?null:coll);
return (function (){var or__3824__auto__ = (cljs.core._chunked_next[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__2479 = coll;
if(G__2479)
{if((function (){var or__3824__auto__ = (G__2479.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2479.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__2479.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__2479);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__2479);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__2481 = coll;
if(G__2481)
{if((function (){var or__3824__auto__ = (G__2481.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2481.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__2481.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__2481);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__2481);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s = cljs.core.seq.call(null,coll);
if((s == null))
{return null;
} else
{return cljs.core._first.call(null,s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__2483 = coll;
if(G__2483)
{if((function (){var or__3824__auto__ = (G__2483.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2483.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__2483.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__2483);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__2483);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s = cljs.core.seq.call(null,coll);
if(!((s == null)))
{return cljs.core._rest.call(null,s);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__2485 = coll;
if(G__2485)
{if((function (){var or__3824__auto__ = (G__2485.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2485.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__2485.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__2485);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__2485);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto__ = (x === y);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__2486__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__2487 = y;
var G__2488 = cljs.core.first.call(null,more);
var G__2489 = cljs.core.next.call(null,more);
x = G__2487;
y = G__2488;
more = G__2489;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2486 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2486__delegate.call(this, x, y, more);
};
G__2486.cljs$lang$maxFixedArity = 2;
G__2486.cljs$lang$applyTo = (function (arglist__2490){
var x = cljs.core.first(arglist__2490);
var y = cljs.core.first(cljs.core.next(arglist__2490));
var more = cljs.core.rest(cljs.core.next(arglist__2490));
return G__2486__delegate(x, y, more);
});
G__2486.cljs$lang$arity$variadic = G__2486__delegate;
return G__2486;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2491 = null;
var G__2491__2 = (function (o,k){
return null;
});
var G__2491__3 = (function (o,k,not_found){
return not_found;
});
G__2491 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__2491__2.call(this,o,k);
case 3:
return G__2491__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2491;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.IPrintWithWriter["null"] = true);
(cljs.core._pr_writer["null"] = (function (o,writer,_){
return cljs.core._write.call(null,writer,"nil");
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2492 = null;
var G__2492__2 = (function (_,f){
return f.call(null);
});
var G__2492__3 = (function (_,f,start){
return start;
});
G__2492 = function(_,f,start){
switch(arguments.length){
case 2:
return G__2492__2.call(this,_,f);
case 3:
return G__2492__3.call(this,_,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2492;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2493 = null;
var G__2493__2 = (function (_,n){
return null;
});
var G__2493__3 = (function (_,n,not_found){
return not_found;
});
G__2493 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__2493__2.call(this,_,n);
case 3:
return G__2493__3.call(this,_,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2493;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto__ = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto__)
{return (o.toString() === other.toString());
} else
{return and__3822__auto__;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
goog.provide('cljs.core.Reduced');

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
return self__.val;
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt = cljs.core._count.call(null,cicoll);
if((cnt === 0))
{return f.call(null);
} else
{var val = cljs.core._nth.call(null,cicoll,0);
var n = 1;
while(true){
if((n < cnt))
{var nval = f.call(null,val,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__2494 = nval;
var G__2495 = (n + 1);
val = G__2494;
n = G__2495;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt = cljs.core._count.call(null,cicoll);
var val__$1 = val;
var n = 0;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__2496 = nval;
var G__2497 = (n + 1);
val__$1 = G__2496;
n = G__2497;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt = cljs.core._count.call(null,cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__2498 = nval;
var G__2499 = (n + 1);
val__$1 = G__2498;
n = G__2499;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val = (arr[0]);
var n = 1;
while(true){
if((n < cnt))
{var nval = f.call(null,val,(arr[n]));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__2500 = nval;
var G__2501 = (n + 1);
val = G__2500;
n = G__2501;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt = arr.length;
var val__$1 = val;
var n = 0;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__2502 = nval;
var G__2503 = (n + 1);
val__$1 = G__2502;
n = G__2503;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt = arr.length;
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__2504 = nval;
var G__2505 = (n + 1);
val__$1 = G__2504;
n = G__2505;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__2507 = x;
if(G__2507)
{if((function (){var or__3824__auto__ = (G__2507.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2507.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__2507.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__2507);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__2507);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__2509 = x;
if(G__2509)
{if((function (){var or__3824__auto__ = (G__2509.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2509.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__2509.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__2509);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__2509);
}
});
goog.provide('cljs.core.IndexedSeq');

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
if(((self__.i + 1) < self__.a.length))
{return (new cljs.core.IndexedSeq(self__.a,(self__.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var c = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c > 0))
{return (new cljs.core.RSeq(coll,(c - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
if(cljs.core.counted_QMARK_.call(null,self__.a))
{return cljs.core.ci_reduce.call(null,self__.a,f,(self__.a[self__.i]),(self__.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(self__.a[self__.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
if(cljs.core.counted_QMARK_.call(null,self__.a))
{return cljs.core.ci_reduce.call(null,self__.a,f,start,self__.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return (self__.a.length - self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
return (self__.a[self__.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
if(((self__.i + 1) < self__.a.length))
{return (new cljs.core.IndexedSeq(self__.a,(self__.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.a.length))
{return (self__.a[i__$1]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.a.length))
{return (self__.a[i__$1]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.List.EMPTY;
});
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((i < prim.length))
{return (new cljs.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2510 = null;
var G__2510__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2510__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2510 = function(array,f,start){
switch(arguments.length){
case 2:
return G__2510__2.call(this,array,f);
case 3:
return G__2510__3.call(this,array,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2510;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2511 = null;
var G__2511__2 = (function (array,k){
return (array[k]);
});
var G__2511__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2511 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__2511__2.call(this,array,k);
case 3:
return G__2511__3.call(this,array,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2511;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2512 = null;
var G__2512__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__2512__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__2512 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__2512__2.call(this,array,n);
case 3:
return G__2512__3.call(this,array,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2512;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
goog.provide('cljs.core.RSeq');

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return (self__.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core._nth.call(null,self__.ci,self__.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.i > 0))
{return (new cljs.core.RSeq(self__.ci,(self__.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn = cljs.core.next.call(null,s);
if(!((sn == null)))
{{
var G__2513 = sn;
s = G__2513;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__2514__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2515 = conj.call(null,coll,x);
var G__2516 = cljs.core.first.call(null,xs);
var G__2517 = cljs.core.next.call(null,xs);
coll = G__2515;
x = G__2516;
xs = G__2517;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2514 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2514__delegate.call(this, coll, x, xs);
};
G__2514.cljs$lang$maxFixedArity = 2;
G__2514.cljs$lang$applyTo = (function (arglist__2518){
var coll = cljs.core.first(arglist__2518);
var x = cljs.core.first(cljs.core.next(arglist__2518));
var xs = cljs.core.rest(cljs.core.next(arglist__2518));
return G__2514__delegate(coll, x, xs);
});
G__2514.cljs$lang$arity$variadic = G__2514__delegate;
return G__2514;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s = cljs.core.seq.call(null,coll);
var acc = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s))
{return (acc + cljs.core._count.call(null,s));
} else
{{
var G__2519 = cljs.core.next.call(null,s);
var G__2520 = (acc + 1);
s = G__2519;
acc = G__2520;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__2521 = cljs.core.next.call(null,coll);
var G__2522 = (n - 1);
coll = G__2521;
n = G__2522;
continue;
}
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__2523 = cljs.core.next.call(null,coll);
var G__2524 = (n - 1);
var G__2525 = not_found;
coll = G__2523;
n = G__2524;
not_found = G__2525;
continue;
}
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__2528 = coll;
if(G__2528)
{if((function (){var or__3824__auto__ = (G__2528.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2528.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__2528.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__2528);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__2528);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__2529 = coll;
if(G__2529)
{if((function (){var or__3824__auto__ = (G__2529.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2529.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__2529.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__2529);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__2529);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__2530__delegate = function (coll,k,v,kvs){
while(true){
var ret = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__2531 = ret;
var G__2532 = cljs.core.first.call(null,kvs);
var G__2533 = cljs.core.second.call(null,kvs);
var G__2534 = cljs.core.nnext.call(null,kvs);
coll = G__2531;
k = G__2532;
v = G__2533;
kvs = G__2534;
continue;
}
} else
{return ret;
}
break;
}
};
var G__2530 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2530__delegate.call(this, coll, k, v, kvs);
};
G__2530.cljs$lang$maxFixedArity = 3;
G__2530.cljs$lang$applyTo = (function (arglist__2535){
var coll = cljs.core.first(arglist__2535);
var k = cljs.core.first(cljs.core.next(arglist__2535));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2535)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2535)));
return G__2530__delegate(coll, k, v, kvs);
});
G__2530.cljs$lang$arity$variadic = G__2530__delegate;
return G__2530;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__2536__delegate = function (coll,k,ks){
while(true){
var ret = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__2537 = ret;
var G__2538 = cljs.core.first.call(null,ks);
var G__2539 = cljs.core.next.call(null,ks);
coll = G__2537;
k = G__2538;
ks = G__2539;
continue;
}
} else
{return ret;
}
break;
}
};
var G__2536 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2536__delegate.call(this, coll, k, ks);
};
G__2536.cljs$lang$maxFixedArity = 2;
G__2536.cljs$lang$applyTo = (function (arglist__2540){
var coll = cljs.core.first(arglist__2540);
var k = cljs.core.first(cljs.core.next(arglist__2540));
var ks = cljs.core.rest(cljs.core.next(arglist__2540));
return G__2536__delegate(coll, k, ks);
});
G__2536.cljs$lang$arity$variadic = G__2536__delegate;
return G__2536;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__2542 = o;
if(G__2542)
{if((function (){var or__3824__auto__ = (G__2542.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2542.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__2542.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__2542);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__2542);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__2543__delegate = function (coll,k,ks){
while(true){
var ret = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__2544 = ret;
var G__2545 = cljs.core.first.call(null,ks);
var G__2546 = cljs.core.next.call(null,ks);
coll = G__2544;
k = G__2545;
ks = G__2546;
continue;
}
} else
{return ret;
}
break;
}
};
var G__2543 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2543__delegate.call(this, coll, k, ks);
};
G__2543.cljs$lang$maxFixedArity = 2;
G__2543.cljs$lang$applyTo = (function (arglist__2547){
var coll = cljs.core.first(arglist__2547);
var k = cljs.core.first(cljs.core.next(arglist__2547));
var ks = cljs.core.rest(cljs.core.next(arglist__2547));
return G__2543__delegate(coll, k, ks);
});
G__2543.cljs$lang$arity$variadic = G__2543__delegate;
return G__2543;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h = (cljs.core.string_hash_cache[k]);
if(!((h == null)))
{return h;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto__ = goog.isString(o);
if(and__3822__auto__)
{return check_cache;
} else
{return and__3822__auto__;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
var or__3824__auto__ = (coll == null);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
}
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__2549 = x;
if(G__2549)
{if((function (){var or__3824__auto__ = (G__2549.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2549.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__2549.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__2549);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__2549);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__2551 = x;
if(G__2551)
{if((function (){var or__3824__auto__ = (G__2551.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2551.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__2551.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__2551);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__2551);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__2553 = x;
if(G__2553)
{if((function (){var or__3824__auto__ = (G__2553.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2553.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__2553.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__2553);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__2553);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__2555 = x;
if(G__2555)
{if((function (){var or__3824__auto__ = (G__2555.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2555.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__2555.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__2555);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__2555);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__2557 = x;
if(G__2557)
{if((function (){var or__3824__auto__ = (G__2557.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2557.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__2557.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__2557);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__2557);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__2559 = x;
if(G__2559)
{if((function (){var or__3824__auto__ = (G__2559.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2559.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__2559.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__2559);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__2559);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__2561 = x;
if(G__2561)
{if((function (){var or__3824__auto__ = (G__2561.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2561.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__2561.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__2561);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__2561);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__2563 = x;
if(G__2563)
{if((function (){var or__3824__auto__ = (G__2563.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2563.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__2563.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__2563);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__2563);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__2564__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__2564 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2564__delegate.call(this, keyvals);
};
G__2564.cljs$lang$maxFixedArity = 0;
G__2564.cljs$lang$applyTo = (function (arglist__2565){
var keyvals = cljs.core.seq(arglist__2565);;
return G__2564__delegate(keyvals);
});
G__2564.cljs$lang$arity$variadic = G__2564__delegate;
return G__2564;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys = [];
goog.object.forEach(obj,(function (val,key,obj__$1){
return keys.push(key);
}));
return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__$1 = i;
var j__$1 = j;
var len__$1 = len;
while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__2566 = (i__$1 + 1);
var G__2567 = (j__$1 + 1);
var G__2568 = (len__$1 - 1);
i__$1 = G__2566;
j__$1 = G__2567;
len__$1 = G__2568;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__$1 = (i + (len - 1));
var j__$1 = (j + (len - 1));
var len__$1 = len;
while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__2569 = (i__$1 - 1);
var G__2570 = (j__$1 - 1);
var G__2571 = (len__$1 - 1);
i__$1 = G__2569;
j__$1 = G__2570;
len__$1 = G__2571;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__2573 = s;
if(G__2573)
{if((function (){var or__3824__auto__ = (G__2573.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2573.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__2573.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__2573);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__2573);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__2575 = s;
if(G__2575)
{if((function (){var or__3824__auto__ = (G__2575.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2575.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__2575.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__2575);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__2575);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto__ = goog.isString(x);
if(and__3822__auto__)
{return !((function (){var or__3824__auto__ = (x.charAt(0) === "\uFDD0");
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto__;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto__ = goog.isString(x);
if(and__3822__auto__)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto__;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto__ = goog.isString(x);
if(and__3822__auto__)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto__;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto__ = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var G__2577 = f;
if(G__2577)
{if((function (){var or__3824__auto____$1 = (G__2577.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{return G__2577.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__2577.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__2577);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__2577);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto__ = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto__)
{var and__3822__auto____$1 = !(isNaN(n));
if(and__3822__auto____$1)
{var and__3822__auto____$2 = !((n === Infinity));
if(and__3822__auto____$2)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____$2;
}
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if((function (){var and__3822__auto__ = !((coll == null));
if(and__3822__auto__)
{var and__3822__auto____$1 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____$1)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
})())
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__2578__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs = more;
while(true){
var x__$1 = cljs.core.first.call(null,xs);
var etc = cljs.core.next.call(null,xs);
if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_.call(null,s,x__$1))
{return false;
} else
{{
var G__2579 = cljs.core.conj.call(null,s,x__$1);
var G__2580 = etc;
s = G__2579;
xs = G__2580;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2578 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2578__delegate.call(this, x, y, more);
};
G__2578.cljs$lang$maxFixedArity = 2;
G__2578.cljs$lang$applyTo = (function (arglist__2581){
var x = cljs.core.first(arglist__2581);
var y = cljs.core.first(cljs.core.next(arglist__2581));
var more = cljs.core.rest(cljs.core.next(arglist__2581));
return G__2578__delegate(x, y, more);
});
G__2578.cljs$lang$arity$variadic = G__2578__delegate;
return G__2578;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__2583 = x;
if(G__2583)
{if((function (){var or__3824__auto__ = (G__2583.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2583.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__2583.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__2583);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__2583);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl = cljs.core.count.call(null,xs);
var yl = cljs.core.count.call(null,ys);
if((xl < yl))
{return -1;
} else
{if((xl > yl))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto__ = (d === 0);
if(and__3822__auto__)
{return ((n + 1) < len);
} else
{return and__3822__auto__;
}
})())
{{
var G__2584 = xs;
var G__2585 = ys;
var G__2586 = len;
var G__2587 = (n + 1);
xs = G__2584;
ys = G__2585;
len = G__2586;
n = G__2587;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r))
{return r;
} else
{if(cljs.core.truth_(r))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto__ = cljs.core.seq.call(null,coll);
if(temp__3971__auto__)
{var s = temp__3971__auto__;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s),cljs.core.next.call(null,s));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(coll__$1)
{var nval = f.call(null,val__$1,cljs.core.first.call(null,coll__$1));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__2588 = nval;
var G__2589 = cljs.core.next.call(null,coll__$1);
val__$1 = G__2588;
coll__$1 = G__2589;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a);
return cljs.core.vec.call(null,a);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__2592 = coll;
if(G__2592)
{if((function (){var or__3824__auto__ = (G__2592.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2592.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__2592.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__2592);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__2592);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__2593 = coll;
if(G__2593)
{if((function (){var or__3824__auto__ = (G__2593.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2593.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__2593.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__2593);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__2593);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__2594__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__2594 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2594__delegate.call(this, x, y, more);
};
G__2594.cljs$lang$maxFixedArity = 2;
G__2594.cljs$lang$applyTo = (function (arglist__2595){
var x = cljs.core.first(arglist__2595);
var y = cljs.core.first(cljs.core.next(arglist__2595));
var more = cljs.core.rest(cljs.core.next(arglist__2595));
return G__2594__delegate(x, y, more);
});
G__2594.cljs$lang$arity$variadic = G__2594__delegate;
return G__2594;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__2596__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__2596 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2596__delegate.call(this, x, y, more);
};
G__2596.cljs$lang$maxFixedArity = 2;
G__2596.cljs$lang$applyTo = (function (arglist__2597){
var x = cljs.core.first(arglist__2597);
var y = cljs.core.first(cljs.core.next(arglist__2597));
var more = cljs.core.rest(cljs.core.next(arglist__2597));
return G__2596__delegate(x, y, more);
});
G__2596.cljs$lang$arity$variadic = G__2596__delegate;
return G__2596;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__2598__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__2598 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2598__delegate.call(this, x, y, more);
};
G__2598.cljs$lang$maxFixedArity = 2;
G__2598.cljs$lang$applyTo = (function (arglist__2599){
var x = cljs.core.first(arglist__2599);
var y = cljs.core.first(cljs.core.next(arglist__2599));
var more = cljs.core.rest(cljs.core.next(arglist__2599));
return G__2598__delegate(x, y, more);
});
G__2598.cljs$lang$arity$variadic = G__2598__delegate;
return G__2598;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__2600__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2600 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2600__delegate.call(this, x, y, more);
};
G__2600.cljs$lang$maxFixedArity = 2;
G__2600.cljs$lang$applyTo = (function (arglist__2601){
var x = cljs.core.first(arglist__2601);
var y = cljs.core.first(cljs.core.next(arglist__2601));
var more = cljs.core.rest(cljs.core.next(arglist__2601));
return G__2600__delegate(x, y, more);
});
G__2600.cljs$lang$arity$variadic = G__2600__delegate;
return G__2600;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__2602__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__2603 = y;
var G__2604 = cljs.core.first.call(null,more);
var G__2605 = cljs.core.next.call(null,more);
x = G__2603;
y = G__2604;
more = G__2605;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2602 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2602__delegate.call(this, x, y, more);
};
G__2602.cljs$lang$maxFixedArity = 2;
G__2602.cljs$lang$applyTo = (function (arglist__2606){
var x = cljs.core.first(arglist__2606);
var y = cljs.core.first(cljs.core.next(arglist__2606));
var more = cljs.core.rest(cljs.core.next(arglist__2606));
return G__2602__delegate(x, y, more);
});
G__2602.cljs$lang$arity$variadic = G__2602__delegate;
return G__2602;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__2607__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__2608 = y;
var G__2609 = cljs.core.first.call(null,more);
var G__2610 = cljs.core.next.call(null,more);
x = G__2608;
y = G__2609;
more = G__2610;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2607 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2607__delegate.call(this, x, y, more);
};
G__2607.cljs$lang$maxFixedArity = 2;
G__2607.cljs$lang$applyTo = (function (arglist__2611){
var x = cljs.core.first(arglist__2611);
var y = cljs.core.first(cljs.core.next(arglist__2611));
var more = cljs.core.rest(cljs.core.next(arglist__2611));
return G__2607__delegate(x, y, more);
});
G__2607.cljs$lang$arity$variadic = G__2607__delegate;
return G__2607;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__2612__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__2613 = y;
var G__2614 = cljs.core.first.call(null,more);
var G__2615 = cljs.core.next.call(null,more);
x = G__2613;
y = G__2614;
more = G__2615;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2612 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2612__delegate.call(this, x, y, more);
};
G__2612.cljs$lang$maxFixedArity = 2;
G__2612.cljs$lang$applyTo = (function (arglist__2616){
var x = cljs.core.first(arglist__2616);
var y = cljs.core.first(cljs.core.next(arglist__2616));
var more = cljs.core.rest(cljs.core.next(arglist__2616));
return G__2612__delegate(x, y, more);
});
G__2612.cljs$lang$arity$variadic = G__2612__delegate;
return G__2612;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__2617__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__2618 = y;
var G__2619 = cljs.core.first.call(null,more);
var G__2620 = cljs.core.next.call(null,more);
x = G__2618;
y = G__2619;
more = G__2620;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2617 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2617__delegate.call(this, x, y, more);
};
G__2617.cljs$lang$maxFixedArity = 2;
G__2617.cljs$lang$applyTo = (function (arglist__2621){
var x = cljs.core.first(arglist__2621);
var y = cljs.core.first(cljs.core.next(arglist__2621));
var more = cljs.core.rest(cljs.core.next(arglist__2621));
return G__2617__delegate(x, y, more);
});
G__2617.cljs$lang$arity$variadic = G__2617__delegate;
return G__2617;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__2622__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__2622 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2622__delegate.call(this, x, y, more);
};
G__2622.cljs$lang$maxFixedArity = 2;
G__2622.cljs$lang$applyTo = (function (arglist__2623){
var x = cljs.core.first(arglist__2623);
var y = cljs.core.first(cljs.core.next(arglist__2623));
var more = cljs.core.rest(cljs.core.next(arglist__2623));
return G__2622__delegate(x, y, more);
});
G__2622.cljs$lang$arity$variadic = G__2622__delegate;
return G__2622;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__2624__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__2624 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2624__delegate.call(this, x, y, more);
};
G__2624.cljs$lang$maxFixedArity = 2;
G__2624.cljs$lang$applyTo = (function (arglist__2625){
var x = cljs.core.first(arglist__2625);
var y = cljs.core.first(cljs.core.next(arglist__2625));
var more = cljs.core.rest(cljs.core.next(arglist__2625));
return G__2624__delegate(x, y, more);
});
G__2624.cljs$lang$arity$variadic = G__2624__delegate;
return G__2624;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem = (n % d);
return cljs.core.fix.call(null,((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q = cljs.core.quot.call(null,n,d);
return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__$1 = (v - ((v >> 1) & 1431655765));
var v__$2 = ((v__$1 & 858993459) + ((v__$1 >> 2) & 858993459));
return ((((v__$2 + (v__$2 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__2626__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__2627 = y;
var G__2628 = cljs.core.first.call(null,more);
var G__2629 = cljs.core.next.call(null,more);
x = G__2627;
y = G__2628;
more = G__2629;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2626 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2626__delegate.call(this, x, y, more);
};
G__2626.cljs$lang$maxFixedArity = 2;
G__2626.cljs$lang$applyTo = (function (arglist__2630){
var x = cljs.core.first(arglist__2630);
var y = cljs.core.first(cljs.core.next(arglist__2630));
var more = cljs.core.rest(cljs.core.next(arglist__2630));
return G__2626__delegate(x, y, more);
});
G__2626.cljs$lang$arity$variadic = G__2626__delegate;
return G__2626;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__$1 = n;
var xs = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto__ = xs;
if(and__3822__auto__)
{return (n__$1 > 0);
} else
{return and__3822__auto__;
}
})()))
{{
var G__2631 = (n__$1 - 1);
var G__2632 = cljs.core.next.call(null,xs);
n__$1 = G__2631;
xs = G__2632;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__2633__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2634 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__2635 = cljs.core.next.call(null,more);
sb = G__2634;
more = G__2635;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__2633 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2633__delegate.call(this, x, ys);
};
G__2633.cljs$lang$maxFixedArity = 1;
G__2633.cljs$lang$applyTo = (function (arglist__2636){
var x = cljs.core.first(arglist__2636);
var ys = cljs.core.rest(arglist__2636);
return G__2633__delegate(x, ys);
});
G__2633.cljs$lang$arity$variadic = G__2633__delegate;
return G__2633;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__2637__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2638 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2639 = cljs.core.next.call(null,more);
sb = G__2638;
more = G__2639;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2637 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2637__delegate.call(this, x, ys);
};
G__2637.cljs$lang$maxFixedArity = 1;
G__2637.cljs$lang$applyTo = (function (arglist__2640){
var x = cljs.core.first(arglist__2640);
var ys = cljs.core.rest(arglist__2640);
return G__2637__delegate(x, ys);
});
G__2637.cljs$lang$arity$variadic = G__2637__delegate;
return G__2637;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
var args__$1 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto__ = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__$1);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__2641){
var fmt = cljs.core.first(arglist__2641);
var args = cljs.core.rest(arglist__2641);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
} else
{return null;
}
}
}
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs = cljs.core.seq.call(null,x);
var ys = cljs.core.seq.call(null,y);
while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys)))
{{
var G__2642 = cljs.core.next.call(null,xs);
var G__2643 = cljs.core.next.call(null,ys);
xs = G__2642;
ys = G__2643;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2644_SHARP_,p2__2645_SHARP_){
return cljs.core.hash_combine.call(null,p1__2644_SHARP_,cljs.core.hash.call(null,p2__2645_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h = 0;
var s = cljs.core.seq.call(null,m);
while(true){
if(s)
{var e = cljs.core.first.call(null,s);
{
var G__2646 = ((h + (cljs.core.hash.call(null,cljs.core.key.call(null,e)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e)))) % 4503599627370496);
var G__2647 = cljs.core.next.call(null,s);
h = G__2646;
s = G__2647;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h = 0;
var s__$1 = cljs.core.seq.call(null,s);
while(true){
if(s__$1)
{var e = cljs.core.first.call(null,s__$1);
{
var G__2648 = ((h + cljs.core.hash.call(null,e)) % 4503599627370496);
var G__2649 = cljs.core.next.call(null,s__$1);
h = G__2648;
s__$1 = G__2649;
continue;
}
} else
{return h;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__2652_2654 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__2652_2654)
{var vec__2653_2655 = cljs.core.first.call(null,G__2652_2654);
var key_name_2656 = cljs.core.nth.call(null,vec__2653_2655,0,null);
var f_2657 = cljs.core.nth.call(null,vec__2653_2655,1,null);
var str_name_2658 = cljs.core.name.call(null,key_name_2656);
(obj[str_name_2658] = f_2657);
{
var G__2659 = cljs.core.next.call(null,G__2652_2654);
G__2652_2654 = G__2659;
continue;
}
} else
{}
break;
}
return obj;
});
goog.provide('cljs.core.List');

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if((self__.count === 1))
{return null;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.List(self__.meta,o,coll,(self__.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.count === 1))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.List.EMPTY;
});
goog.provide('cljs.core.EmptyList');

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.List(self__.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.EmptyList(meta__$1));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__2661 = coll;
if(G__2661)
{if((function (){var or__3824__auto__ = (G__2661.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2661.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__2661.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__2661);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__2661);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__2662__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__2662 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2662__delegate.call(this, x, y, z, items);
};
G__2662.cljs$lang$maxFixedArity = 3;
G__2662.cljs$lang$applyTo = (function (arglist__2663){
var x = cljs.core.first(arglist__2663);
var y = cljs.core.first(cljs.core.next(arglist__2663));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2663)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2663)));
return G__2662__delegate(x, y, z, items);
});
G__2662.cljs$lang$arity$variadic = G__2662__delegate;
return G__2662;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;
goog.provide('cljs.core.Cons');

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if((self__.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,self__.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.Cons(null,o,coll,self__.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto__ = (coll == null);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var G__2665 = coll;
if(G__2665)
{if((function (){var or__3824__auto____$1 = (G__2665.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{return G__2665.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__2665.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__2665);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__2665);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__2667 = x;
if(G__2667)
{if((function (){var or__3824__auto__ = (G__2667.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2667.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__2667.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__2667);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__2667);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2668 = null;
var G__2668__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2668__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2668 = function(string,f,start){
switch(arguments.length){
case 2:
return G__2668__2.call(this,string,f);
case 3:
return G__2668__3.call(this,string,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2668;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2669 = null;
var G__2669__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2669__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2669 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__2669__2.call(this,string,k);
case 3:
return G__2669__3.call(this,string,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2669;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2670 = null;
var G__2670__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__2670__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2670 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__2670__2.call(this,string,n);
case 3:
return G__2670__3.call(this,string,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2670;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));
goog.provide('cljs.core.Keyword');

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__2675 = null;
var G__2675__2 = (function (this_sym2673,coll){
var self__ = this;
var this_sym2673__$1 = this;
var _ = this_sym2673__$1;
if((coll == null))
{return null;
} else
{var strobj = coll.strobj;
if((strobj == null))
{return cljs.core._lookup.call(null,coll,self__.k,null);
} else
{return (strobj[self__.k]);
}
}
});
var G__2675__3 = (function (this_sym2674,coll,not_found){
var self__ = this;
var this_sym2674__$1 = this;
var _ = this_sym2674__$1;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,self__.k,not_found);
}
});
G__2675 = function(this_sym2674,coll,not_found){
switch(arguments.length){
case 2:
return G__2675__2.call(this,this_sym2674,coll);
case 3:
return G__2675__3.call(this,this_sym2674,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2675;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym2671,args2672){
var self__ = this;
return this_sym2671.call.apply(this_sym2671,[this_sym2671].concat(args2672.slice()));
});
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__2680 = null;
var G__2680__2 = (function (this_sym2678,coll){
var this_sym2678__$1 = this;
var this$ = this_sym2678__$1;
return cljs.core._lookup.call(null,coll,this$.toString(),null);
});
var G__2680__3 = (function (this_sym2679,coll,not_found){
var this_sym2679__$1 = this;
var this$ = this_sym2679__$1;
return cljs.core._lookup.call(null,coll,this$.toString(),not_found);
});
G__2680 = function(this_sym2679,coll,not_found){
switch(arguments.length){
case 2:
return G__2680__2.call(this,this_sym2679,coll);
case 3:
return G__2680__3.call(this,this_sym2679,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2680;
})()
;
String.prototype.apply = (function (this_sym2676,args2677){
return this_sym2676.call.apply(this_sym2676,[this_sym2676].concat(args2677.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x = lazy_seq.x;
if(lazy_seq.realized)
{return x;
} else
{lazy_seq.x = x.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});
goog.provide('cljs.core.LazySeq');

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.LazySeq(meta__$1,self__.realized,self__.x,self__.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
goog.provide('cljs.core.ChunkBuffer');

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return self__.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var self__ = this;
var _ = this;
(self__.buf[self__.end] = o);
return self__.end = (self__.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var self__ = this;
var _ = this;
var ret = (new cljs.core.ArrayChunk(self__.buf,0,self__.end));
self__.buf = null;
return ret;
});
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});
goog.provide('cljs.core.ArrayChunk');

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
return cljs.core.array_reduce.call(null,self__.arr,f,(self__.arr[self__.off]),(self__.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
return cljs.core.array_reduce.call(null,self__.arr,f,start,self__.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var self__ = this;
if((self__.off === self__.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(self__.arr,(self__.off + 1),self__.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
return (self__.arr[(self__.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var self__ = this;
if((function (){var and__3822__auto__ = (i >= 0);
if(and__3822__auto__)
{return (i < (self__.end - self__.off));
} else
{return and__3822__auto__;
}
})())
{return (self__.arr[(self__.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return (self__.end - self__.off);
});
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;
goog.provide('cljs.core.ChunkedCons');

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850604;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core._nth.call(null,self__.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((cljs.core._count.call(null,self__.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null));
} else
{if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
if((self__.more == null))
{return null;
} else
{return self__.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
return self__.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
});
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__2682 = s;
if(G__2682)
{if((function (){var or__3824__auto__ = (G__2682.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2682.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__2682.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__2682);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__2682);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary = [];
var s__$1 = s;
while(true){
if(cljs.core.seq.call(null,s__$1))
{ary.push(cljs.core.first.call(null,s__$1));
{
var G__2683 = cljs.core.next.call(null,s__$1);
s__$1 = G__2683;
continue;
}
} else
{return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i_2684 = 0;
var xs_2685 = cljs.core.seq.call(null,coll);
while(true){
if(xs_2685)
{(ret[i_2684] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs_2685)));
{
var G__2686 = (i_2684 + 1);
var G__2687 = cljs.core.next.call(null,xs_2685);
i_2684 = G__2686;
xs_2685 = G__2687;
continue;
}
} else
{}
break;
}
return ret;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto__ = s__$1;
if(and__3822__auto__)
{return (i < size);
} else
{return and__3822__auto__;
}
})()))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__2688 = (i + 1);
var G__2689 = cljs.core.next.call(null,s__$1);
i = G__2688;
s__$1 = G__2689;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__2165__auto___2690 = size;
var i_2691 = 0;
while(true){
if((i_2691 < n__2165__auto___2690))
{(a[i_2691] = init_val_or_seq);
{
var G__2692 = (i_2691 + 1);
i_2691 = G__2692;
continue;
}
} else
{}
break;
}
return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto__ = s__$1;
if(and__3822__auto__)
{return (i < size);
} else
{return and__3822__auto__;
}
})()))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__2693 = (i + 1);
var G__2694 = cljs.core.next.call(null,s__$1);
i = G__2693;
s__$1 = G__2694;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__2165__auto___2695 = size;
var i_2696 = 0;
while(true){
if((i_2696 < n__2165__auto___2695))
{(a[i_2696] = init_val_or_seq);
{
var G__2697 = (i_2696 + 1);
i_2696 = G__2697;
continue;
}
} else
{}
break;
}
return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto__ = s__$1;
if(and__3822__auto__)
{return (i < size);
} else
{return and__3822__auto__;
}
})()))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__2698 = (i + 1);
var G__2699 = cljs.core.next.call(null,s__$1);
i = G__2698;
s__$1 = G__2699;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__2165__auto___2700 = size;
var i_2701 = 0;
while(true){
if((i_2701 < n__2165__auto___2700))
{(a[i_2701] = init_val_or_seq);
{
var G__2702 = (i_2701 + 1);
i_2701 = G__2702;
continue;
}
} else
{}
break;
}
return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__$1 = s;
var i = n;
var sum = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto__ = (i > 0);
if(and__3822__auto__)
{return cljs.core.seq.call(null,s__$1);
} else
{return and__3822__auto__;
}
})()))
{{
var G__2703 = cljs.core.next.call(null,s__$1);
var G__2704 = (i - 1);
var G__2705 = (sum + 1);
s__$1 = G__2703;
i = G__2704;
sum = G__2705;
continue;
}
} else
{return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s = cljs.core.seq.call(null,x);
if(s)
{if(cljs.core.chunked_seq_QMARK_.call(null,s))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s),concat.call(null,cljs.core.chunk_rest.call(null,s),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),concat.call(null,cljs.core.rest.call(null,s),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__2706__delegate = function (x,y,zs){
var cat = (function cat(xys,zs__$1){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__$1 = cljs.core.seq.call(null,xys);
if(xys__$1)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__$1))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__$1),cat.call(null,cljs.core.chunk_rest.call(null,xys__$1),zs__$1));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__$1),cat.call(null,cljs.core.rest.call(null,xys__$1),zs__$1));
}
} else
{if(cljs.core.truth_(zs__$1))
{return cat.call(null,cljs.core.first.call(null,zs__$1),cljs.core.next.call(null,zs__$1));
} else
{return null;
}
}
}),null));
});
return cat.call(null,concat.call(null,x,y),zs);
};
var G__2706 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2706__delegate.call(this, x, y, zs);
};
G__2706.cljs$lang$maxFixedArity = 2;
G__2706.cljs$lang$applyTo = (function (arglist__2707){
var x = cljs.core.first(arglist__2707);
var y = cljs.core.first(cljs.core.next(arglist__2707));
var zs = cljs.core.rest(cljs.core.next(arglist__2707));
return G__2706__delegate(x, y, zs);
});
G__2706.cljs$lang$arity$variadic = G__2706__delegate;
return G__2706;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__2708__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2708 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2708__delegate.call(this, a, b, c, d, more);
};
G__2708.cljs$lang$maxFixedArity = 4;
G__2708.cljs$lang$applyTo = (function (arglist__2709){
var a = cljs.core.first(arglist__2709);
var b = cljs.core.first(cljs.core.next(arglist__2709));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2709)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2709))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2709))));
return G__2708__delegate(a, b, c, d, more);
});
G__2708.cljs$lang$arity$variadic = G__2708__delegate;
return G__2708;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__$1 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a = cljs.core._first.call(null,args__$1);
var args__$2 = cljs.core._rest.call(null,args__$1);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a);
} else
{return f.call(null,a);
}
} else
{var b = cljs.core._first.call(null,args__$2);
var args__$3 = cljs.core._rest.call(null,args__$2);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a,b);
} else
{return f.call(null,a,b);
}
} else
{var c = cljs.core._first.call(null,args__$3);
var args__$4 = cljs.core._rest.call(null,args__$3);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a,b,c);
} else
{return f.call(null,a,b,c);
}
} else
{var d = cljs.core._first.call(null,args__$4);
var args__$5 = cljs.core._rest.call(null,args__$4);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a,b,c,d);
} else
{return f.call(null,a,b,c,d);
}
} else
{var e = cljs.core._first.call(null,args__$5);
var args__$6 = cljs.core._rest.call(null,args__$5);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a,b,c,d,e);
} else
{return f.call(null,a,b,c,d,e);
}
} else
{var f__$1 = cljs.core._first.call(null,args__$6);
var args__$7 = cljs.core._rest.call(null,args__$6);
if((argc === 6))
{if(f__$1.cljs$lang$arity$6)
{return f__$1.cljs$lang$arity$6(a,b,c,d,e,f__$1);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1);
}
} else
{var g = cljs.core._first.call(null,args__$7);
var args__$8 = cljs.core._rest.call(null,args__$7);
if((argc === 7))
{if(f__$1.cljs$lang$arity$7)
{return f__$1.cljs$lang$arity$7(a,b,c,d,e,f__$1,g);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g);
}
} else
{var h = cljs.core._first.call(null,args__$8);
var args__$9 = cljs.core._rest.call(null,args__$8);
if((argc === 8))
{if(f__$1.cljs$lang$arity$8)
{return f__$1.cljs$lang$arity$8(a,b,c,d,e,f__$1,g,h);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h);
}
} else
{var i = cljs.core._first.call(null,args__$9);
var args__$10 = cljs.core._rest.call(null,args__$9);
if((argc === 9))
{if(f__$1.cljs$lang$arity$9)
{return f__$1.cljs$lang$arity$9(a,b,c,d,e,f__$1,g,h,i);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i);
}
} else
{var j = cljs.core._first.call(null,args__$10);
var args__$11 = cljs.core._rest.call(null,args__$10);
if((argc === 10))
{if(f__$1.cljs$lang$arity$10)
{return f__$1.cljs$lang$arity$10(a,b,c,d,e,f__$1,g,h,i,j);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j);
}
} else
{var k = cljs.core._first.call(null,args__$11);
var args__$12 = cljs.core._rest.call(null,args__$11);
if((argc === 11))
{if(f__$1.cljs$lang$arity$11)
{return f__$1.cljs$lang$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
}
} else
{var l = cljs.core._first.call(null,args__$12);
var args__$13 = cljs.core._rest.call(null,args__$12);
if((argc === 12))
{if(f__$1.cljs$lang$arity$12)
{return f__$1.cljs$lang$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
}
} else
{var m = cljs.core._first.call(null,args__$13);
var args__$14 = cljs.core._rest.call(null,args__$13);
if((argc === 13))
{if(f__$1.cljs$lang$arity$13)
{return f__$1.cljs$lang$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
}
} else
{var n = cljs.core._first.call(null,args__$14);
var args__$15 = cljs.core._rest.call(null,args__$14);
if((argc === 14))
{if(f__$1.cljs$lang$arity$14)
{return f__$1.cljs$lang$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
}
} else
{var o = cljs.core._first.call(null,args__$15);
var args__$16 = cljs.core._rest.call(null,args__$15);
if((argc === 15))
{if(f__$1.cljs$lang$arity$15)
{return f__$1.cljs$lang$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
}
} else
{var p = cljs.core._first.call(null,args__$16);
var args__$17 = cljs.core._rest.call(null,args__$16);
if((argc === 16))
{if(f__$1.cljs$lang$arity$16)
{return f__$1.cljs$lang$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
}
} else
{var q = cljs.core._first.call(null,args__$17);
var args__$18 = cljs.core._rest.call(null,args__$17);
if((argc === 17))
{if(f__$1.cljs$lang$arity$17)
{return f__$1.cljs$lang$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
}
} else
{var r = cljs.core._first.call(null,args__$18);
var args__$19 = cljs.core._rest.call(null,args__$18);
if((argc === 18))
{if(f__$1.cljs$lang$arity$18)
{return f__$1.cljs$lang$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
}
} else
{var s = cljs.core._first.call(null,args__$19);
var args__$20 = cljs.core._rest.call(null,args__$19);
if((argc === 19))
{if(f__$1.cljs$lang$arity$19)
{return f__$1.cljs$lang$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
} else
{var t = cljs.core._first.call(null,args__$20);
var args__$21 = cljs.core._rest.call(null,args__$20);
if((argc === 20))
{if(f__$1.cljs$lang$arity$20)
{return f__$1.cljs$lang$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,args,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__4 = (function (f,x,y,args){
var arglist = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__6 = (function() { 
var G__2710__delegate = function (f,a,b,c,d,args){
var arglist = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
};
var G__2710 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2710__delegate.call(this, f, a, b, c, d, args);
};
G__2710.cljs$lang$maxFixedArity = 5;
G__2710.cljs$lang$applyTo = (function (arglist__2711){
var f = cljs.core.first(arglist__2711);
var a = cljs.core.first(cljs.core.next(arglist__2711));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2711)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2711))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2711)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2711)))));
return G__2710__delegate(f, a, b, c, d, args);
});
G__2710.cljs$lang$arity$variadic = G__2710__delegate;
return G__2710;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2712){
var obj = cljs.core.first(arglist__2712);
var f = cljs.core.first(cljs.core.next(arglist__2712));
var args = cljs.core.rest(cljs.core.next(arglist__2712));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__2713__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2713 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2713__delegate.call(this, x, y, more);
};
G__2713.cljs$lang$maxFixedArity = 2;
G__2713.cljs$lang$applyTo = (function (arglist__2714){
var x = cljs.core.first(arglist__2714);
var y = cljs.core.first(cljs.core.next(arglist__2714));
var more = cljs.core.rest(cljs.core.next(arglist__2714));
return G__2713__delegate(x, y, more);
});
G__2713.cljs$lang$arity$variadic = G__2713__delegate;
return G__2713;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2715 = pred;
var G__2716 = cljs.core.next.call(null,coll);
pred = G__2715;
coll = G__2716;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto__ = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{{
var G__2717 = pred;
var G__2718 = cljs.core.next.call(null,coll);
pred = G__2717;
coll = G__2718;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2719 = null;
var G__2719__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2719__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2719__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2719__3 = (function() { 
var G__2720__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2720 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2720__delegate.call(this, x, y, zs);
};
G__2720.cljs$lang$maxFixedArity = 2;
G__2720.cljs$lang$applyTo = (function (arglist__2721){
var x = cljs.core.first(arglist__2721);
var y = cljs.core.first(cljs.core.next(arglist__2721));
var zs = cljs.core.rest(cljs.core.next(arglist__2721));
return G__2720__delegate(x, y, zs);
});
G__2720.cljs$lang$arity$variadic = G__2720__delegate;
return G__2720;
})()
;
G__2719 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__2719__0.call(this);
case 1:
return G__2719__1.call(this,x);
case 2:
return G__2719__2.call(this,x,y);
default:
return G__2719__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2719.cljs$lang$maxFixedArity = 2;
G__2719.cljs$lang$applyTo = G__2719__3.cljs$lang$applyTo;
return G__2719;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2722__delegate = function (args){
return x;
};
var G__2722 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2722__delegate.call(this, args);
};
G__2722.cljs$lang$maxFixedArity = 0;
G__2722.cljs$lang$applyTo = (function (arglist__2723){
var args = cljs.core.seq(arglist__2723);;
return G__2722__delegate(args);
});
G__2722.cljs$lang$arity$variadic = G__2722__delegate;
return G__2722;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__2724 = null;
var G__2724__0 = (function (){
return f.call(null,g.call(null));
});
var G__2724__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2724__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2724__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2724__4 = (function() { 
var G__2725__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2725 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2725__delegate.call(this, x, y, z, args);
};
G__2725.cljs$lang$maxFixedArity = 3;
G__2725.cljs$lang$applyTo = (function (arglist__2726){
var x = cljs.core.first(arglist__2726);
var y = cljs.core.first(cljs.core.next(arglist__2726));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2726)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2726)));
return G__2725__delegate(x, y, z, args);
});
G__2725.cljs$lang$arity$variadic = G__2725__delegate;
return G__2725;
})()
;
G__2724 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__2724__0.call(this);
case 1:
return G__2724__1.call(this,x);
case 2:
return G__2724__2.call(this,x,y);
case 3:
return G__2724__3.call(this,x,y,z);
default:
return G__2724__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2724.cljs$lang$maxFixedArity = 3;
G__2724.cljs$lang$applyTo = G__2724__4.cljs$lang$applyTo;
return G__2724;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__2727 = null;
var G__2727__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2727__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2727__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2727__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2727__4 = (function() { 
var G__2728__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2728 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2728__delegate.call(this, x, y, z, args);
};
G__2728.cljs$lang$maxFixedArity = 3;
G__2728.cljs$lang$applyTo = (function (arglist__2729){
var x = cljs.core.first(arglist__2729);
var y = cljs.core.first(cljs.core.next(arglist__2729));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2729)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2729)));
return G__2728__delegate(x, y, z, args);
});
G__2728.cljs$lang$arity$variadic = G__2728__delegate;
return G__2728;
})()
;
G__2727 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__2727__0.call(this);
case 1:
return G__2727__1.call(this,x);
case 2:
return G__2727__2.call(this,x,y);
case 3:
return G__2727__3.call(this,x,y,z);
default:
return G__2727__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2727.cljs$lang$maxFixedArity = 3;
G__2727.cljs$lang$applyTo = G__2727__4.cljs$lang$applyTo;
return G__2727;
})()
});
var comp__4 = (function() { 
var G__2730__delegate = function (f1,f2,f3,fs){
var fs__$1 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__2731__delegate = function (args){
var ret = cljs.core.apply.call(null,cljs.core.first.call(null,fs__$1),args);
var fs__$2 = cljs.core.next.call(null,fs__$1);
while(true){
if(fs__$2)
{{
var G__2732 = cljs.core.first.call(null,fs__$2).call(null,ret);
var G__2733 = cljs.core.next.call(null,fs__$2);
ret = G__2732;
fs__$2 = G__2733;
continue;
}
} else
{return ret;
}
break;
}
};
var G__2731 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2731__delegate.call(this, args);
};
G__2731.cljs$lang$maxFixedArity = 0;
G__2731.cljs$lang$applyTo = (function (arglist__2734){
var args = cljs.core.seq(arglist__2734);;
return G__2731__delegate(args);
});
G__2731.cljs$lang$arity$variadic = G__2731__delegate;
return G__2731;
})()
;
};
var G__2730 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2730__delegate.call(this, f1, f2, f3, fs);
};
G__2730.cljs$lang$maxFixedArity = 3;
G__2730.cljs$lang$applyTo = (function (arglist__2735){
var f1 = cljs.core.first(arglist__2735);
var f2 = cljs.core.first(cljs.core.next(arglist__2735));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2735)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2735)));
return G__2730__delegate(f1, f2, f3, fs);
});
G__2730.cljs$lang$arity$variadic = G__2730__delegate;
return G__2730;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__2736__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2736 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2736__delegate.call(this, args);
};
G__2736.cljs$lang$maxFixedArity = 0;
G__2736.cljs$lang$applyTo = (function (arglist__2737){
var args = cljs.core.seq(arglist__2737);;
return G__2736__delegate(args);
});
G__2736.cljs$lang$arity$variadic = G__2736__delegate;
return G__2736;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__2738__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2738 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2738__delegate.call(this, args);
};
G__2738.cljs$lang$maxFixedArity = 0;
G__2738.cljs$lang$applyTo = (function (arglist__2739){
var args = cljs.core.seq(arglist__2739);;
return G__2738__delegate(args);
});
G__2738.cljs$lang$arity$variadic = G__2738__delegate;
return G__2738;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2740__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2740 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2740__delegate.call(this, args);
};
G__2740.cljs$lang$maxFixedArity = 0;
G__2740.cljs$lang$applyTo = (function (arglist__2741){
var args = cljs.core.seq(arglist__2741);;
return G__2740__delegate(args);
});
G__2740.cljs$lang$arity$variadic = G__2740__delegate;
return G__2740;
})()
;
});
var partial__5 = (function() { 
var G__2742__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2743__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2743 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2743__delegate.call(this, args);
};
G__2743.cljs$lang$maxFixedArity = 0;
G__2743.cljs$lang$applyTo = (function (arglist__2744){
var args = cljs.core.seq(arglist__2744);;
return G__2743__delegate(args);
});
G__2743.cljs$lang$arity$variadic = G__2743__delegate;
return G__2743;
})()
;
};
var G__2742 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2742__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2742.cljs$lang$maxFixedArity = 4;
G__2742.cljs$lang$applyTo = (function (arglist__2745){
var f = cljs.core.first(arglist__2745);
var arg1 = cljs.core.first(cljs.core.next(arglist__2745));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2745)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2745))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2745))));
return G__2742__delegate(f, arg1, arg2, arg3, more);
});
G__2742.cljs$lang$arity$variadic = G__2742__delegate;
return G__2742;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__2746 = null;
var G__2746__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__2746__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__2746__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__2746__4 = (function() { 
var G__2747__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__2747 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2747__delegate.call(this, a, b, c, ds);
};
G__2747.cljs$lang$maxFixedArity = 3;
G__2747.cljs$lang$applyTo = (function (arglist__2748){
var a = cljs.core.first(arglist__2748);
var b = cljs.core.first(cljs.core.next(arglist__2748));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2748)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2748)));
return G__2747__delegate(a, b, c, ds);
});
G__2747.cljs$lang$arity$variadic = G__2747__delegate;
return G__2747;
})()
;
G__2746 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__2746__1.call(this,a);
case 2:
return G__2746__2.call(this,a,b);
case 3:
return G__2746__3.call(this,a,b,c);
default:
return G__2746__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2746.cljs$lang$maxFixedArity = 3;
G__2746.cljs$lang$applyTo = G__2746__4.cljs$lang$applyTo;
return G__2746;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__2749 = null;
var G__2749__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__2749__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__2749__4 = (function() { 
var G__2750__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__2750 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2750__delegate.call(this, a, b, c, ds);
};
G__2750.cljs$lang$maxFixedArity = 3;
G__2750.cljs$lang$applyTo = (function (arglist__2751){
var a = cljs.core.first(arglist__2751);
var b = cljs.core.first(cljs.core.next(arglist__2751));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2751)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2751)));
return G__2750__delegate(a, b, c, ds);
});
G__2750.cljs$lang$arity$variadic = G__2750__delegate;
return G__2750;
})()
;
G__2749 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__2749__2.call(this,a,b);
case 3:
return G__2749__3.call(this,a,b,c);
default:
return G__2749__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2749.cljs$lang$maxFixedArity = 3;
G__2749.cljs$lang$applyTo = G__2749__4.cljs$lang$applyTo;
return G__2749;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__2752 = null;
var G__2752__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__2752__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__2752__4 = (function() { 
var G__2753__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__2753 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2753__delegate.call(this, a, b, c, ds);
};
G__2753.cljs$lang$maxFixedArity = 3;
G__2753.cljs$lang$applyTo = (function (arglist__2754){
var a = cljs.core.first(arglist__2754);
var b = cljs.core.first(cljs.core.next(arglist__2754));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2754)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2754)));
return G__2753__delegate(a, b, c, ds);
});
G__2753.cljs$lang$arity$variadic = G__2753__delegate;
return G__2753;
})()
;
G__2752 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__2752__2.call(this,a,b);
case 3:
return G__2752__3.call(this,a,b,c);
default:
return G__2752__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2752.cljs$lang$maxFixedArity = 3;
G__2752.cljs$lang$applyTo = G__2752__4.cljs$lang$applyTo;
return G__2752;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi = (function mapi(idx,coll__$1){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto__ = cljs.core.seq.call(null,coll__$1);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__2165__auto___2755 = size;
var i_2756 = 0;
while(true){
if((i_2756 < n__2165__auto___2755))
{cljs.core.chunk_append.call(null,b,f.call(null,(idx + i_2756),cljs.core._nth.call(null,c,i_2756)));
{
var G__2757 = (i_2756 + 1);
i_2756 = G__2757;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),mapi.call(null,(idx + size),cljs.core.chunk_rest.call(null,s)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s)));
}
} else
{return null;
}
}),null));
});
return mapi.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto__ = cljs.core.seq.call(null,coll);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__2165__auto___2758 = size;
var i_2759 = 0;
while(true){
if((i_2759 < n__2165__auto___2758))
{var x_2760 = f.call(null,cljs.core._nth.call(null,c,i_2759));
if((x_2760 == null))
{} else
{cljs.core.chunk_append.call(null,b,x_2760);
}
{
var G__2761 = (i_2759 + 1);
i_2759 = G__2761;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),keep.call(null,f,cljs.core.chunk_rest.call(null,s)));
} else
{var x = f.call(null,cljs.core.first.call(null,s));
if((x == null))
{return keep.call(null,f,cljs.core.rest.call(null,s));
} else
{return cljs.core.cons.call(null,x,keep.call(null,f,cljs.core.rest.call(null,s)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi = (function keepi(idx,coll__$1){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto__ = cljs.core.seq.call(null,coll__$1);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__2165__auto___2768 = size;
var i_2769 = 0;
while(true){
if((i_2769 < n__2165__auto___2768))
{var x_2770 = f.call(null,(idx + i_2769),cljs.core._nth.call(null,c,i_2769));
if((x_2770 == null))
{} else
{cljs.core.chunk_append.call(null,b,x_2770);
}
{
var G__2771 = (i_2769 + 1);
i_2769 = G__2771;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),keepi.call(null,(idx + size),cljs.core.chunk_rest.call(null,s)));
} else
{var x = f.call(null,idx,cljs.core.first.call(null,s));
if((x == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s));
} else
{return cljs.core.cons.call(null,x,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s)));
}
}
} else
{return null;
}
}),null));
});
return keepi.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto__ = p.call(null,x);
if(cljs.core.truth_(and__3822__auto__))
{return p.call(null,y);
} else
{return and__3822__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto__ = p.call(null,x);
if(cljs.core.truth_(and__3822__auto__))
{var and__3822__auto____$1 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____$1))
{return p.call(null,z);
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__2778__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto__ = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto__))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto__;
}
})());
};
var G__2778 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2778__delegate.call(this, x, y, z, args);
};
G__2778.cljs$lang$maxFixedArity = 3;
G__2778.cljs$lang$applyTo = (function (arglist__2779){
var x = cljs.core.first(arglist__2779);
var y = cljs.core.first(cljs.core.next(arglist__2779));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2779)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2779)));
return G__2778__delegate(x, y, z, args);
});
G__2778.cljs$lang$arity$variadic = G__2778__delegate;
return G__2778;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto__))
{return p2.call(null,x);
} else
{return and__3822__auto__;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto__))
{var and__3822__auto____$1 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____$1))
{var and__3822__auto____$2 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____$2))
{return p2.call(null,y);
} else
{return and__3822__auto____$2;
}
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto__))
{var and__3822__auto____$1 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____$1))
{var and__3822__auto____$2 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____$2))
{var and__3822__auto____$3 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____$3))
{var and__3822__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____$4))
{return p2.call(null,z);
} else
{return and__3822__auto____$4;
}
} else
{return and__3822__auto____$3;
}
} else
{return and__3822__auto____$2;
}
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__2780__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto__ = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto__))
{return cljs.core.every_QMARK_.call(null,(function (p1__2762_SHARP_){
var and__3822__auto____$1 = p1.call(null,p1__2762_SHARP_);
if(cljs.core.truth_(and__3822__auto____$1))
{return p2.call(null,p1__2762_SHARP_);
} else
{return and__3822__auto____$1;
}
}),args);
} else
{return and__3822__auto__;
}
})());
};
var G__2780 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2780__delegate.call(this, x, y, z, args);
};
G__2780.cljs$lang$maxFixedArity = 3;
G__2780.cljs$lang$applyTo = (function (arglist__2781){
var x = cljs.core.first(arglist__2781);
var y = cljs.core.first(cljs.core.next(arglist__2781));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2781)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2781)));
return G__2780__delegate(x, y, z, args);
});
G__2780.cljs$lang$arity$variadic = G__2780__delegate;
return G__2780;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto__))
{var and__3822__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____$1))
{return p3.call(null,x);
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto__))
{var and__3822__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____$1))
{var and__3822__auto____$2 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____$2))
{var and__3822__auto____$3 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____$3))
{var and__3822__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____$4))
{return p3.call(null,y);
} else
{return and__3822__auto____$4;
}
} else
{return and__3822__auto____$3;
}
} else
{return and__3822__auto____$2;
}
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto__))
{var and__3822__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____$1))
{var and__3822__auto____$2 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____$2))
{var and__3822__auto____$3 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____$3))
{var and__3822__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____$4))
{var and__3822__auto____$5 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____$5))
{var and__3822__auto____$6 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____$6))
{var and__3822__auto____$7 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____$7))
{return p3.call(null,z);
} else
{return and__3822__auto____$7;
}
} else
{return and__3822__auto____$6;
}
} else
{return and__3822__auto____$5;
}
} else
{return and__3822__auto____$4;
}
} else
{return and__3822__auto____$3;
}
} else
{return and__3822__auto____$2;
}
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__2782__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto__ = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto__))
{return cljs.core.every_QMARK_.call(null,(function (p1__2763_SHARP_){
var and__3822__auto____$1 = p1.call(null,p1__2763_SHARP_);
if(cljs.core.truth_(and__3822__auto____$1))
{var and__3822__auto____$2 = p2.call(null,p1__2763_SHARP_);
if(cljs.core.truth_(and__3822__auto____$2))
{return p3.call(null,p1__2763_SHARP_);
} else
{return and__3822__auto____$2;
}
} else
{return and__3822__auto____$1;
}
}),args);
} else
{return and__3822__auto__;
}
})());
};
var G__2782 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2782__delegate.call(this, x, y, z, args);
};
G__2782.cljs$lang$maxFixedArity = 3;
G__2782.cljs$lang$applyTo = (function (arglist__2783){
var x = cljs.core.first(arglist__2783);
var y = cljs.core.first(cljs.core.next(arglist__2783));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2783)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2783)));
return G__2782__delegate(x, y, z, args);
});
G__2782.cljs$lang$arity$variadic = G__2782__delegate;
return G__2782;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__2784__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2764_SHARP_){
return p1__2764_SHARP_.call(null,x);
}),ps__$1);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2765_SHARP_){
var and__3822__auto__ = p1__2765_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto__))
{return p1__2765_SHARP_.call(null,y);
} else
{return and__3822__auto__;
}
}),ps__$1);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2766_SHARP_){
var and__3822__auto__ = p1__2766_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto__))
{var and__3822__auto____$1 = p1__2766_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____$1))
{return p1__2766_SHARP_.call(null,z);
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}),ps__$1);
});
var epn__4 = (function() { 
var G__2785__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto__ = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto__))
{return cljs.core.every_QMARK_.call(null,(function (p1__2767_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2767_SHARP_,args);
}),ps__$1);
} else
{return and__3822__auto__;
}
})());
};
var G__2785 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2785__delegate.call(this, x, y, z, args);
};
G__2785.cljs$lang$maxFixedArity = 3;
G__2785.cljs$lang$applyTo = (function (arglist__2786){
var x = cljs.core.first(arglist__2786);
var y = cljs.core.first(cljs.core.next(arglist__2786));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2786)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2786)));
return G__2785__delegate(x, y, z, args);
});
G__2785.cljs$lang$arity$variadic = G__2785__delegate;
return G__2785;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__2784 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2784__delegate.call(this, p1, p2, p3, ps);
};
G__2784.cljs$lang$maxFixedArity = 3;
G__2784.cljs$lang$applyTo = (function (arglist__2787){
var p1 = cljs.core.first(arglist__2787);
var p2 = cljs.core.first(cljs.core.next(arglist__2787));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2787)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2787)));
return G__2784__delegate(p1, p2, p3, ps);
});
G__2784.cljs$lang$arity$variadic = G__2784__delegate;
return G__2784;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto__ = p.call(null,x);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto__ = p.call(null,x);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____$1))
{return or__3824__auto____$1;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__2789__delegate = function (x,y,z,args){
var or__3824__auto__ = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__2789 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2789__delegate.call(this, x, y, z, args);
};
G__2789.cljs$lang$maxFixedArity = 3;
G__2789.cljs$lang$applyTo = (function (arglist__2790){
var x = cljs.core.first(arglist__2790);
var y = cljs.core.first(cljs.core.next(arglist__2790));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2790)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2790)));
return G__2789__delegate(x, y, z, args);
});
G__2789.cljs$lang$arity$variadic = G__2789__delegate;
return G__2789;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____$1))
{return or__3824__auto____$1;
} else
{var or__3824__auto____$2 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____$2))
{return or__3824__auto____$2;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____$1))
{return or__3824__auto____$1;
} else
{var or__3824__auto____$2 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____$2))
{return or__3824__auto____$2;
} else
{var or__3824__auto____$3 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____$3))
{return or__3824__auto____$3;
} else
{var or__3824__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____$4))
{return or__3824__auto____$4;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__2791__delegate = function (x,y,z,args){
var or__3824__auto__ = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.some.call(null,(function (p1__2772_SHARP_){
var or__3824__auto____$1 = p1.call(null,p1__2772_SHARP_);
if(cljs.core.truth_(or__3824__auto____$1))
{return or__3824__auto____$1;
} else
{return p2.call(null,p1__2772_SHARP_);
}
}),args);
}
};
var G__2791 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2791__delegate.call(this, x, y, z, args);
};
G__2791.cljs$lang$maxFixedArity = 3;
G__2791.cljs$lang$applyTo = (function (arglist__2792){
var x = cljs.core.first(arglist__2792);
var y = cljs.core.first(cljs.core.next(arglist__2792));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2792)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2792)));
return G__2791__delegate(x, y, z, args);
});
G__2791.cljs$lang$arity$variadic = G__2791__delegate;
return G__2791;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____$1))
{return or__3824__auto____$1;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____$1))
{return or__3824__auto____$1;
} else
{var or__3824__auto____$2 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____$2))
{return or__3824__auto____$2;
} else
{var or__3824__auto____$3 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____$3))
{return or__3824__auto____$3;
} else
{var or__3824__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____$4))
{return or__3824__auto____$4;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____$1))
{return or__3824__auto____$1;
} else
{var or__3824__auto____$2 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____$2))
{return or__3824__auto____$2;
} else
{var or__3824__auto____$3 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____$3))
{return or__3824__auto____$3;
} else
{var or__3824__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____$4))
{return or__3824__auto____$4;
} else
{var or__3824__auto____$5 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____$5))
{return or__3824__auto____$5;
} else
{var or__3824__auto____$6 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____$6))
{return or__3824__auto____$6;
} else
{var or__3824__auto____$7 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____$7))
{return or__3824__auto____$7;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__2793__delegate = function (x,y,z,args){
var or__3824__auto__ = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.some.call(null,(function (p1__2773_SHARP_){
var or__3824__auto____$1 = p1.call(null,p1__2773_SHARP_);
if(cljs.core.truth_(or__3824__auto____$1))
{return or__3824__auto____$1;
} else
{var or__3824__auto____$2 = p2.call(null,p1__2773_SHARP_);
if(cljs.core.truth_(or__3824__auto____$2))
{return or__3824__auto____$2;
} else
{return p3.call(null,p1__2773_SHARP_);
}
}
}),args);
}
};
var G__2793 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2793__delegate.call(this, x, y, z, args);
};
G__2793.cljs$lang$maxFixedArity = 3;
G__2793.cljs$lang$applyTo = (function (arglist__2794){
var x = cljs.core.first(arglist__2794);
var y = cljs.core.first(cljs.core.next(arglist__2794));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2794)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2794)));
return G__2793__delegate(x, y, z, args);
});
G__2793.cljs$lang$arity$variadic = G__2793__delegate;
return G__2793;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__2795__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__2774_SHARP_){
return p1__2774_SHARP_.call(null,x);
}),ps__$1);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2775_SHARP_){
var or__3824__auto__ = p1__2775_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return p1__2775_SHARP_.call(null,y);
}
}),ps__$1);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2776_SHARP_){
var or__3824__auto__ = p1__2776_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = p1__2776_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____$1))
{return or__3824__auto____$1;
} else
{return p1__2776_SHARP_.call(null,z);
}
}
}),ps__$1);
});
var spn__4 = (function() { 
var G__2796__delegate = function (x,y,z,args){
var or__3824__auto__ = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.some.call(null,(function (p1__2777_SHARP_){
return cljs.core.some.call(null,p1__2777_SHARP_,args);
}),ps__$1);
}
};
var G__2796 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2796__delegate.call(this, x, y, z, args);
};
G__2796.cljs$lang$maxFixedArity = 3;
G__2796.cljs$lang$applyTo = (function (arglist__2797){
var x = cljs.core.first(arglist__2797);
var y = cljs.core.first(cljs.core.next(arglist__2797));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2797)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2797)));
return G__2796__delegate(x, y, z, args);
});
G__2796.cljs$lang$arity$variadic = G__2796__delegate;
return G__2796;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__2795 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2795__delegate.call(this, p1, p2, p3, ps);
};
G__2795.cljs$lang$maxFixedArity = 3;
G__2795.cljs$lang$applyTo = (function (arglist__2798){
var p1 = cljs.core.first(arglist__2798);
var p2 = cljs.core.first(cljs.core.next(arglist__2798));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2798)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2798)));
return G__2795__delegate(p1, p2, p3, ps);
});
G__2795.cljs$lang$arity$variadic = G__2795__delegate;
return G__2795;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto__ = cljs.core.seq.call(null,coll);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__2165__auto___2799 = size;
var i_2800 = 0;
while(true){
if((i_2800 < n__2165__auto___2799))
{cljs.core.chunk_append.call(null,b,f.call(null,cljs.core._nth.call(null,c,i_2800)));
{
var G__2801 = (i_2800 + 1);
i_2800 = G__2801;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),map.call(null,f,cljs.core.chunk_rest.call(null,s)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s)),map.call(null,f,cljs.core.rest.call(null,s)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto__ = s1;
if(and__3822__auto__)
{return s2;
} else
{return and__3822__auto__;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1),cljs.core.first.call(null,s2)),map.call(null,f,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
var s3 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto__ = s1;
if(and__3822__auto__)
{var and__3822__auto____$1 = s2;
if(and__3822__auto____$1)
{return s3;
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1),cljs.core.first.call(null,s2),cljs.core.first.call(null,s3)),map.call(null,f,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2),cljs.core.rest.call(null,s3)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__2802__delegate = function (f,c1,c2,c3,colls){
var step = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss),step.call(null,map.call(null,cljs.core.rest,ss)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__2788_SHARP_){
return cljs.core.apply.call(null,f,p1__2788_SHARP_);
}),step.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__2802 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2802__delegate.call(this, f, c1, c2, c3, colls);
};
G__2802.cljs$lang$maxFixedArity = 4;
G__2802.cljs$lang$applyTo = (function (arglist__2803){
var f = cljs.core.first(arglist__2803);
var c1 = cljs.core.first(cljs.core.next(arglist__2803));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2803)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2803))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2803))));
return G__2802__delegate(f, c1, c2, c3, colls);
});
G__2802.cljs$lang$arity$variadic = G__2802__delegate;
return G__2802;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto__ = cljs.core.seq.call(null,coll);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
return cljs.core.cons.call(null,cljs.core.first.call(null,s),take.call(null,(n - 1),cljs.core.rest.call(null,s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = cljs.core.seq.call(null,coll__$1);
if(cljs.core.truth_((function (){var and__3822__auto__ = (n__$1 > 0);
if(and__3822__auto__)
{return s;
} else
{return and__3822__auto__;
}
})()))
{{
var G__2804 = (n__$1 - 1);
var G__2805 = cljs.core.rest.call(null,s);
n__$1 = G__2804;
coll__$1 = G__2805;
continue;
}
} else
{return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s = cljs.core.seq.call(null,coll);
var lead = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead)
{{
var G__2806 = cljs.core.next.call(null,s);
var G__2807 = cljs.core.next.call(null,lead);
s = G__2806;
lead = G__2807;
continue;
}
} else
{return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = cljs.core.seq.call(null,coll__$1);
if(cljs.core.truth_((function (){var and__3822__auto__ = s;
if(and__3822__auto__)
{return pred__$1.call(null,cljs.core.first.call(null,s));
} else
{return and__3822__auto__;
}
})()))
{{
var G__2808 = pred__$1;
var G__2809 = cljs.core.rest.call(null,s);
pred__$1 = G__2808;
coll__$1 = G__2809;
continue;
}
} else
{return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto__ = cljs.core.seq.call(null,coll);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
return cljs.core.concat.call(null,s,cycle.call(null,s));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto__ = s1;
if(and__3822__auto__)
{return s2;
} else
{return and__3822__auto__;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),interleave.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__2810__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss)));
} else
{return null;
}
}),null));
};
var G__2810 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2810__delegate.call(this, c1, c2, colls);
};
G__2810.cljs$lang$maxFixedArity = 2;
G__2810.cljs$lang$applyTo = (function (arglist__2811){
var c1 = cljs.core.first(arglist__2811);
var c2 = cljs.core.first(cljs.core.next(arglist__2811));
var colls = cljs.core.rest(cljs.core.next(arglist__2811));
return G__2810__delegate(c1, c2, colls);
});
G__2810.cljs$lang$arity$variadic = G__2810__delegate;
return G__2810;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat = (function cat(coll,colls__$1){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto__ = cljs.core.seq.call(null,coll);
if(temp__3971__auto__)
{var coll__$1 = temp__3971__auto__;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__$1),cat.call(null,cljs.core.rest.call(null,coll__$1),colls__$1));
} else
{if(cljs.core.seq.call(null,colls__$1))
{return cat.call(null,cljs.core.first.call(null,colls__$1),cljs.core.rest.call(null,colls__$1));
} else
{return null;
}
}
}),null));
});
return cat.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__2812__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__2812 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2812__delegate.call(this, f, coll, colls);
};
G__2812.cljs$lang$maxFixedArity = 2;
G__2812.cljs$lang$applyTo = (function (arglist__2813){
var f = cljs.core.first(arglist__2813);
var coll = cljs.core.first(cljs.core.next(arglist__2813));
var colls = cljs.core.rest(cljs.core.next(arglist__2813));
return G__2812__delegate(f, coll, colls);
});
G__2812.cljs$lang$arity$variadic = G__2812__delegate;
return G__2812;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto__ = cljs.core.seq.call(null,coll);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__2165__auto___2814 = size;
var i_2815 = 0;
while(true){
if((i_2815 < n__2165__auto___2814))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c,i_2815))))
{cljs.core.chunk_append.call(null,b,cljs.core._nth.call(null,c,i_2815));
} else
{}
{
var G__2816 = (i_2815 + 1);
i_2815 = G__2816;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),filter.call(null,pred,cljs.core.chunk_rest.call(null,s)));
} else
{var f = cljs.core.first.call(null,s);
var r = cljs.core.rest.call(null,s);
if(cljs.core.truth_(pred.call(null,f)))
{return cljs.core.cons.call(null,f,filter.call(null,pred,r));
} else
{return filter.call(null,pred,r);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2817_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__2817_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__2819 = to;
if(G__2819)
{if((function (){var or__3824__auto__ = (G__2819.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2819.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__2819.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__2819);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__2819);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__2820__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__2820 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2820__delegate.call(this, f, c1, c2, c3, colls);
};
G__2820.cljs$lang$maxFixedArity = 4;
G__2820.cljs$lang$applyTo = (function (arglist__2821){
var f = cljs.core.first(arglist__2821);
var c1 = cljs.core.first(cljs.core.next(arglist__2821));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2821)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2821))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2821))));
return G__2820__delegate(f, c1, c2, c3, colls);
});
G__2820.cljs$lang$arity$variadic = G__2820__delegate;
return G__2820;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto__ = cljs.core.seq.call(null,coll);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
var p = cljs.core.take.call(null,n,s);
if((n === cljs.core.count.call(null,p)))
{return cljs.core.cons.call(null,p,partition.call(null,n,step,cljs.core.drop.call(null,step,s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto__ = cljs.core.seq.call(null,coll);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
var p = cljs.core.take.call(null,n,s);
if((n === cljs.core.count.call(null,p)))
{return cljs.core.cons.call(null,p,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel = cljs.core.lookup_sentinel;
var m__$1 = m;
var ks__$1 = cljs.core.seq.call(null,ks);
while(true){
if(ks__$1)
{var m__$2 = cljs.core._lookup.call(null,m__$1,cljs.core.first.call(null,ks__$1),sentinel);
if((sentinel === m__$2))
{return not_found;
} else
{{
var G__2822 = sentinel;
var G__2823 = m__$2;
var G__2824 = cljs.core.next.call(null,ks__$1);
sentinel = G__2822;
m__$1 = G__2823;
ks__$1 = G__2824;
continue;
}
}
} else
{return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__2825,v){
var vec__2827 = p__2825;
var k = cljs.core.nth.call(null,vec__2827,0,null);
var ks = cljs.core.nthnext.call(null,vec__2827,1);
if(cljs.core.truth_(ks))
{return cljs.core.assoc.call(null,m,k,assoc_in.call(null,cljs.core._lookup.call(null,m,k,null),ks,v));
} else
{return cljs.core.assoc.call(null,m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__2828,f,args){
var vec__2830 = p__2828;
var k = cljs.core.nth.call(null,vec__2830,0,null);
var ks = cljs.core.nthnext.call(null,vec__2830,1);
if(cljs.core.truth_(ks))
{return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k,null),ks,f,args));
} else
{return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k,null),args));
}
};
var update_in = function (m,p__2828,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__2828, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__2831){
var m = cljs.core.first(arglist__2831);
var p__2828 = cljs.core.first(cljs.core.next(arglist__2831));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2831)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2831)));
return update_in__delegate(m, p__2828, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;
goog.provide('cljs.core.Vector');

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var new_array = self__.array.slice();
(new_array[k] = v);
return (new cljs.core.Vector(self__.meta,new_array,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__2836 = null;
var G__2836__2 = (function (this_sym2834,k){
var self__ = this;
var this_sym2834__$1 = this;
var coll = this_sym2834__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__2836__3 = (function (this_sym2835,k,not_found){
var self__ = this;
var this_sym2835__$1 = this;
var coll = this_sym2835__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__2836 = function(this_sym2835,k,not_found){
switch(arguments.length){
case 2:
return G__2836__2.call(this,this_sym2835,k);
case 3:
return G__2836__3.call(this,this_sym2835,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2836;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym2832,args2833){
var self__ = this;
return this_sym2832.call.apply(this_sym2832,[this_sym2832].concat(args2833.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var new_array = self__.array.slice();
new_array.push(o);
return (new cljs.core.Vector(self__.meta,new_array,null));
});
cljs.core.Vector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
return cljs.core.ci_reduce.call(null,self__.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var self__ = this;
return cljs.core.ci_reduce.call(null,self__.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.array.length > 0))
{var vector_seq = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < self__.array.length))
{return cljs.core.cons.call(null,(self__.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var count = self__.array.length;
if((count > 0))
{return (self__.array[(count - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.array.length > 0))
{var new_array = self__.array.slice();
new_array.pop();
return (new cljs.core.Vector(self__.meta,new_array,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.Vector(meta__$1,self__.array,self__.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
if((function (){var and__3822__auto__ = (0 <= n);
if(and__3822__auto__)
{return (n < self__.array.length);
} else
{return and__3822__auto__;
}
})())
{return (self__.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if((function (){var and__3822__auto__ = (0 <= n);
if(and__3822__auto__)
{return (n < self__.array.length);
} else
{return and__3822__auto__;
}
})())
{return (self__.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,self__.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});
goog.provide('cljs.core.VectorNode');

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__1946__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__1946__auto__,writer__1947__auto__,opts__1948__auto__){
return cljs.core._write.call(null,writer__1947__auto__,"cljs.core/VectorNode");
});
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt = pv.cnt;
if((cnt < 32))
{return 0;
} else
{return (((cnt - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll = level;
var ret = node;
while(true){
if((ll === 0))
{return ret;
} else
{var embed = ret;
var r = cljs.core.pv_fresh_node.call(null,edit);
var _ = cljs.core.pv_aset.call(null,r,0,embed);
{
var G__2837 = (ll - 5);
var G__2838 = r;
ll = G__2837;
ret = G__2838;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret = cljs.core.pv_clone_node.call(null,parent);
var subidx = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret,subidx,tailnode);
return ret;
} else
{var child = cljs.core.pv_aget.call(null,parent,subidx);
if(!((child == null)))
{var node_to_insert = push_tail.call(null,pv,(level - 5),child,tailnode);
cljs.core.pv_aset.call(null,ret,subidx,node_to_insert);
return ret;
} else
{var node_to_insert = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret,subidx,node_to_insert);
return ret;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto__ = (0 <= i);
if(and__3822__auto__)
{return (i < pv.cnt);
} else
{return and__3822__auto__;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node = pv.root;
var level = pv.shift;
while(true){
if((level > 0))
{{
var G__2839 = cljs.core.pv_aget.call(null,node,((i >>> level) & 31));
var G__2840 = (level - 5);
node = G__2839;
level = G__2840;
continue;
}
} else
{return node.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret,(i & 31),val);
return ret;
} else
{var subidx = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret,subidx,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx),i,val));
return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx));
if((function (){var and__3822__auto__ = (new_child == null);
if(and__3822__auto__)
{return (subidx === 0);
} else
{return and__3822__auto__;
}
})())
{return null;
} else
{var ret = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret,subidx,new_child);
return ret;
}
} else
{if((subidx === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret,subidx,null);
return ret;
} else
{return null;
}
}
}
});
goog.provide('cljs.core.PersistentVector');

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljs.core.TransientVector(self__.cnt,self__.shift,cljs.core.tv_editable_root.call(null,self__.root),cljs.core.tv_editable_tail.call(null,self__.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if((function (){var and__3822__auto__ = (0 <= k);
if(and__3822__auto__)
{return (k < self__.cnt);
} else
{return and__3822__auto__;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail = self__.tail.slice();
(new_tail[(k & 31)] = v);
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc.call(null,coll,self__.shift,self__.root,k,v),self__.tail,null));
}
} else
{if((k === self__.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__2845 = null;
var G__2845__2 = (function (this_sym2843,k){
var self__ = this;
var this_sym2843__$1 = this;
var coll = this_sym2843__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__2845__3 = (function (this_sym2844,k,not_found){
var self__ = this;
var this_sym2844__$1 = this;
var coll = this_sym2844__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__2845 = function(this_sym2844,k,not_found){
switch(arguments.length){
case 2:
return G__2845__2.call(this,this_sym2844,k);
case 3:
return G__2845__3.call(this,this_sym2844,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2845;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym2841,args2842){
var self__ = this;
return this_sym2841.call.apply(this_sym2841,[this_sym2841].concat(args2842.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var step_init = [0,init];
var i = 0;
while(true){
if((i < self__.cnt))
{var arr = cljs.core.array_for.call(null,v,i);
var len = arr.length;
var init__$1 = (function (){var j = 0;
var init__$1 = (step_init[1]);
while(true){
if((j < len))
{var init__$2 = f.call(null,init__$1,(j + i),(arr[j]));
if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return init__$2;
} else
{{
var G__2846 = (j + 1);
var G__2847 = init__$2;
j = G__2846;
init__$1 = G__2847;
continue;
}
}
} else
{(step_init[0] = len);
(step_init[1] = init__$1);
return init__$1;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return cljs.core.deref.call(null,init__$1);
} else
{{
var G__2848 = (i + (step_init[0]));
i = G__2848;
continue;
}
}
} else
{return (step_init[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
if(((self__.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail = self__.tail.slice();
new_tail.push(o);
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + 1),self__.shift,self__.root,new_tail,null));
} else
{var root_overflow_QMARK_ = ((self__.cnt >>> 5) > (1 << self__.shift));
var new_shift = ((root_overflow_QMARK_)?(self__.shift + 5):self__.shift);
var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r,0,self__.root);
cljs.core.pv_aset.call(null,n_r,1,cljs.core.new_path.call(null,null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));
return n_r;
})():cljs.core.push_tail.call(null,coll,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + 1),new_shift,new_root,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return (new cljs.core.RSeq(coll,(self__.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var self__ = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(self__.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if((1 < (self__.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - 1),self__.shift,self__.root,self__.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail = cljs.core.array_for.call(null,coll,(self__.cnt - 2));
var nr = cljs.core.pop_tail.call(null,coll,self__.shift,self__.root);
var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);
var cnt_1 = (self__.cnt - 1);
if((function (){var and__3822__auto__ = (5 < self__.shift);
if(and__3822__auto__)
{return (cljs.core.pv_aget.call(null,new_root,1) == null);
} else
{return and__3822__auto__;
}
})())
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - 5),cljs.core.pv_aget.call(null,new_root,0),new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if((function (){var and__3822__auto__ = (0 <= n);
if(and__3822__auto__)
{return (n < self__.cnt);
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l = xs.length;
var xs__$1 = (((no_clone === true))?xs:xs.slice());
if((l < 32))
{return (new cljs.core.PersistentVector(null,l,5,cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else
{var node = xs__$1.slice(0,32);
var v = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node,null));
var i = 32;
var out = cljs.core._as_transient.call(null,v);
while(true){
if((i < l))
{{
var G__2849 = (i + 1);
var G__2850 = cljs.core.conj_BANG_.call(null,out,(xs__$1[i]));
i = G__2849;
out = G__2850;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__2851){
var args = cljs.core.seq(arglist__2851);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;
goog.provide('cljs.core.ChunkedSeq');

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31719660;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if(((self__.off + 1) < self__.node.length))
{var s = cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));
if((s == null))
{return null;
} else
{return s;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return (self__.node[self__.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if(((self__.off + 1) < self__.node.length))
{var s = cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));
if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?cljs.core.chunked_seq.call(null,self__.vec,(self__.i + l),0):null);
if((s == null))
{return null;
} else
{return s;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
return cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core.array_chunk.call(null,self__.node,self__.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?cljs.core.chunked_seq.call(null,self__.vec,(self__.i + l),0):null);
if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
});
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;
goog.provide('cljs.core.Subvec');

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var self__ = this;
var v_pos = (self__.start + key);
return (new cljs.core.Subvec(self__.meta,cljs.core._assoc.call(null,self__.v,v_pos,val),self__.start,((self__.end > (v_pos + 1)) ? self__.end : (v_pos + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__2856 = null;
var G__2856__2 = (function (this_sym2854,k){
var self__ = this;
var this_sym2854__$1 = this;
var coll = this_sym2854__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__2856__3 = (function (this_sym2855,k,not_found){
var self__ = this;
var this_sym2855__$1 = this;
var coll = this_sym2855__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__2856 = function(this_sym2855,k,not_found){
switch(arguments.length){
case 2:
return G__2856__2.call(this,this_sym2855,k);
case 3:
return G__2856__3.call(this,this_sym2855,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2856;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym2852,args2853){
var self__ = this;
return this_sym2852.call.apply(this_sym2852,[this_sym2852].concat(args2853.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.Subvec(self__.meta,cljs.core._assoc_n.call(null,self__.v,self__.end,o),self__.start,(self__.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){
var self__ = this;
return cljs.core.ci_reduce.call(null,coll,f,start__$1);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var subvec_seq = (function subvec_seq(i){
if((i === self__.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,self__.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq.call(null,self__.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return (self__.end - self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return cljs.core._nth.call(null,self__.v,(self__.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.start === self__.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,(self__.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.Subvec(meta__$1,self__.v,self__.start,self__.end,self__.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
return cljs.core._nth.call(null,self__.v,(self__.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
return cljs.core._nth.call(null,self__.v,(self__.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,self__.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret,0,tl.length);
return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret,subidx,(((level === 5))?tail_node:(function (){var child = cljs.core.pv_aget.call(null,ret,subidx);
if(!((child == null)))
{return tv_push_tail.call(null,tv,(level - 5),child,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__$1 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__$1,subidx));
if((function (){var and__3822__auto__ = (new_child == null);
if(and__3822__auto__)
{return (subidx === 0);
} else
{return and__3822__auto__;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__$1,subidx,new_child);
return node__$1;
}
} else
{if((subidx === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__$1,subidx,null);
return node__$1;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto__ = (0 <= i);
if(and__3822__auto__)
{return (i < tv.cnt);
} else
{return and__3822__auto__;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root = tv.root;
var node = root;
var level = tv.shift;
while(true){
if((level > 0))
{{
var G__2857 = cljs.core.tv_ensure_editable.call(null,root.edit,cljs.core.pv_aget.call(null,node,((i >>> level) & 31)));
var G__2858 = (level - 5);
node = G__2857;
level = G__2858;
continue;
}
} else
{return node.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});
goog.provide('cljs.core.TransientVector');

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__2863 = null;
var G__2863__2 = (function (this_sym2861,k){
var self__ = this;
var this_sym2861__$1 = this;
var coll = this_sym2861__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__2863__3 = (function (this_sym2862,k,not_found){
var self__ = this;
var this_sym2862__$1 = this;
var coll = this_sym2862__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__2863 = function(this_sym2862,k,not_found){
switch(arguments.length){
case 2:
return G__2863__2.call(this,this_sym2862,k);
case 3:
return G__2863__3.call(this,this_sym2862,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2863;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym2859,args2860){
var self__ = this;
return this_sym2859.call.apply(this_sym2859,[this_sym2859].concat(args2860.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
if(self__.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if((function (){var and__3822__auto__ = (0 <= n);
if(and__3822__auto__)
{return (n < self__.cnt);
} else
{return and__3822__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
if(self__.root.edit)
{if((function (){var and__3822__auto__ = (0 <= n);
if(and__3822__auto__)
{return (n < self__.cnt);
} else
{return and__3822__auto__;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(self__.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root = (function go(level,node){
var node__$1 = cljs.core.tv_ensure_editable.call(null,self__.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__$1,(n & 31),val);
return node__$1;
} else
{var subidx = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__$1,subidx,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__$1,subidx)));
return node__$1;
}
}).call(null,self__.shift,self__.root);
self__.root = new_root;
return tcoll;
}
} else
{if((n === self__.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(self__.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(self__.root.edit)
{if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{self__.cnt = 0;
return tcoll;
} else
{if((((self__.cnt - 1) & 31) > 0))
{self__.cnt = (self__.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail = cljs.core.editable_array_for.call(null,tcoll,(self__.cnt - 2));
var new_root = (function (){var nr = cljs.core.tv_pop_tail.call(null,tcoll,self__.shift,self__.root);
if(!((nr == null)))
{return nr;
} else
{return (new cljs.core.VectorNode(self__.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto__ = (5 < self__.shift);
if(and__3822__auto__)
{return (cljs.core.pv_aget.call(null,new_root,1) == null);
} else
{return and__3822__auto__;
}
})())
{var new_root__$1 = cljs.core.tv_ensure_editable.call(null,self__.root.edit,cljs.core.pv_aget.call(null,new_root,0));
self__.root = new_root__$1;
self__.shift = (self__.shift - 5);
self__.cnt = (self__.cnt - 1);
self__.tail = new_tail;
return tcoll;
} else
{self__.root = new_root;
self__.cnt = (self__.cnt - 1);
self__.tail = new_tail;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
if(self__.root.edit)
{if(((self__.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(self__.tail[(self__.cnt & 31)] = o);
self__.cnt = (self__.cnt + 1);
return tcoll;
} else
{var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));
var new_tail = cljs.core.make_array.call(null,32);
(new_tail[0] = o);
self__.tail = new_tail;
if(((self__.cnt >>> 5) > (1 << self__.shift)))
{var new_root_array = cljs.core.make_array.call(null,32);
var new_shift = (self__.shift + 5);
(new_root_array[0] = self__.root);
(new_root_array[1] = cljs.core.new_path.call(null,self__.root.edit,self__.shift,tail_node));
self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));
self__.shift = new_shift;
self__.cnt = (self__.cnt + 1);
return tcoll;
} else
{var new_root = cljs.core.tv_push_tail.call(null,tcoll,self__.shift,self__.root,tail_node);
self__.root = new_root;
self__.cnt = (self__.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(self__.root.edit)
{self__.root.edit = null;
var len = (self__.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail = cljs.core.make_array.call(null,len);
cljs.core.array_copy.call(null,self__.tail,0,trimmed_tail,0,len);
return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else
{throw (new Error("persistent! called twice"));
}
});
goog.provide('cljs.core.PersistentQueueSeq');

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core._first.call(null,self__.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var temp__3971__auto__ = cljs.core.next.call(null,self__.front);
if(temp__3971__auto__)
{var f1 = temp__3971__auto__;
return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else
{if((self__.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
goog.provide('cljs.core.PersistentQueue');

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
if(cljs.core.truth_(self__.front))
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + 1),self__.front,cljs.core.conj.call(null,(function (){var or__3824__auto__ = self__.rear;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + 1),cljs.core.conj.call(null,self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var rear__$1 = cljs.core.seq.call(null,self__.rear);
if(cljs.core.truth_((function (){var or__3824__auto__ = self__.front;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return rear__$1;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq.call(null,rear__$1),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return cljs.core._first.call(null,self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if(cljs.core.truth_(self__.front))
{var temp__3971__auto__ = cljs.core.next.call(null,self__.front);
if(temp__3971__auto__)
{var f1 = temp__3971__auto__;
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - 1),f1,self__.rear,null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count - 1),cljs.core.seq.call(null,self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core.first.call(null,self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));
goog.provide('cljs.core.NeverEquiv');

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len = array.length;
var i = 0;
while(true){
if((i < len))
{if((k === (array[i])))
{return i;
} else
{{
var G__2864 = (i + incr);
i = G__2864;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__$1 = cljs.core.hash.call(null,a);
var b__$1 = cljs.core.hash.call(null,b);
if((a__$1 < b__$1))
{return -1;
} else
{if((a__$1 > b__$1))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks = m.keys;
var len = ks.length;
var so = m.strobj;
var out = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i = 0;
var out__$1 = cljs.core.transient$.call(null,out);
while(true){
if((i < len))
{var k__$1 = (ks[i]);
{
var G__2865 = (i + 1);
var G__2866 = cljs.core.assoc_BANG_.call(null,out__$1,k__$1,(so[k__$1]));
i = G__2865;
out__$1 = G__2866;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__$1,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj = {};
var l = ks.length;
var i_2868 = 0;
while(true){
if((i_2868 < l))
{var k_2869 = (ks[i_2868]);
(new_obj[k_2869] = (obj[k_2869]));
{
var G__2870 = (i_2868 + 1);
i_2868 = G__2870;
continue;
}
} else
{}
break;
}
return new_obj;
});
goog.provide('cljs.core.ObjMap');

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_imap.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
if((function (){var and__3822__auto__ = goog.isString(k);
if(and__3822__auto__)
{return !((cljs.core.scan_array.call(null,1,k,self__.keys) == null));
} else
{return and__3822__auto__;
}
})())
{return (self__.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if(goog.isString(k))
{if((function (){var or__3824__auto__ = (self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return (self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,self__.keys) == null)))
{var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);
(new_strobj[k] = v);
return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + 1),null));
} else
{var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);
var new_keys = self__.keys.slice();
(new_strobj[k] = v);
new_keys.push(k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
if((function (){var and__3822__auto__ = goog.isString(k);
if(and__3822__auto__)
{return !((cljs.core.scan_array.call(null,1,k,self__.keys) == null));
} else
{return and__3822__auto__;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__2875 = null;
var G__2875__2 = (function (this_sym2873,k){
var self__ = this;
var this_sym2873__$1 = this;
var coll = this_sym2873__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__2875__3 = (function (this_sym2874,k,not_found){
var self__ = this;
var this_sym2874__$1 = this;
var coll = this_sym2874__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__2875 = function(this_sym2874,k,not_found){
switch(arguments.length){
case 2:
return G__2875__2.call(this,this_sym2874,k);
case 3:
return G__2875__3.call(this,this_sym2874,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2875;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym2871,args2872){
var self__ = this;
return this_sym2871.call.apply(this_sym2871,[this_sym2871].concat(args2872.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__2867_SHARP_){
return cljs.core.vector.call(null,p1__2867_SHARP_,(self__.strobj[p1__2867_SHARP_]));
}),self__.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,self__.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
if((function (){var and__3822__auto__ = goog.isString(k);
if(and__3822__auto__)
{return !((cljs.core.scan_array.call(null,1,k,self__.keys) == null));
} else
{return and__3822__auto__;
}
})())
{var new_keys = self__.keys.slice();
var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);
new_keys.splice(cljs.core.scan_array.call(null,1,k,new_keys),1);
cljs.core.js_delete.call(null,new_strobj,k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});
goog.provide('cljs.core.HashMap');

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_imap.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var bucket = (self__.hashobj[cljs.core.hash.call(null,k)]);
var i = (cljs.core.truth_(bucket)?cljs.core.scan_array.call(null,2,k,bucket):null);
if(cljs.core.truth_(i))
{return (bucket[(i + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var h = cljs.core.hash.call(null,k);
var bucket = (self__.hashobj[h]);
if(cljs.core.truth_(bucket))
{var new_bucket = bucket.slice();
var new_hashobj = goog.object.clone(self__.hashobj);
(new_hashobj[h] = new_bucket);
var temp__3971__auto__ = cljs.core.scan_array.call(null,2,k,new_bucket);
if(cljs.core.truth_(temp__3971__auto__))
{var i = temp__3971__auto__;
(new_bucket[(i + 1)] = v);
return (new cljs.core.HashMap(self__.meta,self__.count,new_hashobj,null));
} else
{new_bucket.push(k,v);
return (new cljs.core.HashMap(self__.meta,(self__.count + 1),new_hashobj,null));
}
} else
{var new_hashobj = goog.object.clone(self__.hashobj);
(new_hashobj[h] = [k,v]);
return (new cljs.core.HashMap(self__.meta,(self__.count + 1),new_hashobj,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var bucket = (self__.hashobj[cljs.core.hash.call(null,k)]);
var i = (cljs.core.truth_(bucket)?cljs.core.scan_array.call(null,2,k,bucket):null);
if(cljs.core.truth_(i))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__2881 = null;
var G__2881__2 = (function (this_sym2879,k){
var self__ = this;
var this_sym2879__$1 = this;
var coll = this_sym2879__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__2881__3 = (function (this_sym2880,k,not_found){
var self__ = this;
var this_sym2880__$1 = this;
var coll = this_sym2880__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__2881 = function(this_sym2880,k,not_found){
switch(arguments.length){
case 2:
return G__2881__2.call(this,this_sym2880,k);
case 3:
return G__2881__3.call(this,this_sym2880,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2881;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym2877,args2878){
var self__ = this;
return this_sym2877.call.apply(this_sym2877,[this_sym2877].concat(args2878.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.count > 0))
{var hashes = cljs.core.js_keys.call(null,self__.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__2876_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(self__.hashobj[p1__2876_SHARP_])));
}),hashes);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.HashMap(meta__$1,self__.count,self__.hashobj,self__.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,self__.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var h = cljs.core.hash.call(null,k);
var bucket = (self__.hashobj[h]);
var i = (cljs.core.truth_(bucket)?cljs.core.scan_array.call(null,2,k,bucket):null);
if(cljs.core.not.call(null,i))
{return coll;
} else
{var new_hashobj = goog.object.clone(self__.hashobj);
if((3 > bucket.length))
{cljs.core.js_delete.call(null,new_hashobj,h);
} else
{var new_bucket_2882 = bucket.slice();
new_bucket_2882.splice(i,2);
(new_hashobj[h] = new_bucket_2882);
}
return (new cljs.core.HashMap(self__.meta,(self__.count - 1),new_hashobj,null));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = 0;
var out = cljs.core.HashMap.EMPTY;
while(true){
if((i < len))
{{
var G__2883 = (i + 1);
var G__2884 = cljs.core.assoc.call(null,out,(ks[i]),(vs[i]));
i = G__2883;
out = G__2884;
continue;
}
} else
{return out;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr = m.arr;
var len = arr.length;
var i = 0;
while(true){
if((len <= i))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr[i]),k))
{return i;
} else
{if("\uFDD0'else")
{{
var G__2885 = (i + 2);
i = G__2885;
continue;
}
} else
{return null;
}
}
}
break;
}
});
goog.provide('cljs.core.PersistentArrayMap');

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljs.core.TransientArrayMap({},self__.arr.length,self__.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_imap.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var idx = cljs.core.array_map_index_of.call(null,coll,k);
if((idx === -1))
{return not_found;
} else
{return (self__.arr[(idx + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var idx = cljs.core.array_map_index_of.call(null,coll,k);
if((idx === -1))
{if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + 1),(function (){var G__2888 = self__.arr.slice();
G__2888.push(k);
G__2888.push(v);
return G__2888;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (self__.arr[(idx + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,(function (){var G__2889 = self__.arr.slice();
(G__2889[(idx + 1)] = v);
return G__2889;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__2892 = null;
var G__2892__2 = (function (this_sym2890,k){
var self__ = this;
var this_sym2890__$1 = this;
var coll = this_sym2890__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__2892__3 = (function (this_sym2891,k,not_found){
var self__ = this;
var this_sym2891__$1 = this;
var coll = this_sym2891__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__2892 = function(this_sym2891,k,not_found){
switch(arguments.length){
case 2:
return G__2892__2.call(this,this_sym2891,k);
case 3:
return G__2892__3.call(this,this_sym2891,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2892;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym2886,args2887){
var self__ = this;
return this_sym2886.call.apply(this_sym2886,[this_sym2886].concat(args2887.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var len = self__.arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var init__$2 = f.call(null,init__$1,(self__.arr[i]),(self__.arr[(i + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__2893 = (i + 2);
var G__2894 = init__$2;
i = G__2893;
init__$1 = G__2894;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{var len = self__.arr.length;
var array_map_seq = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(self__.arr[i]),(self__.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var idx = cljs.core.array_map_index_of.call(null,coll,k);
if((idx >= 0))
{var len = self__.arr.length;
var new_len = (len - 2);
if((new_len === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr = cljs.core.make_array.call(null,new_len);
var s = 0;
var d = 0;
while(true){
if((s >= len))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - 1),new_arr,null));
} else
{if(cljs.core._EQ_.call(null,k,(self__.arr[s])))
{{
var G__2895 = (s + 2);
var G__2896 = d;
s = G__2895;
d = G__2896;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + 1)] = (self__.arr[(s + 1)]));
{
var G__2897 = (s + 2);
var G__2898 = (d + 2);
s = G__2897;
d = G__2898;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len = cljs.core.count.call(null,ks);
var i = 0;
var out = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len))
{{
var G__2899 = (i + 1);
var G__2900 = cljs.core.assoc_BANG_.call(null,out,(ks[i]),(vs[i]));
i = G__2899;
out = G__2900;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
});
goog.provide('cljs.core.TransientArrayMap');

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx >= 0))
{(self__.arr[idx] = (self__.arr[(self__.len - 2)]));
(self__.arr[(idx + 1)] = (self__.arr[(self__.len - 1)]));
var G__2901_2903 = self__.arr;
G__2901_2903.pop();
G__2901_2903.pop();
self__.len = (self__.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx === -1))
{if(((self__.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{self__.len = (self__.len + 2);
self__.arr.push(key);
self__.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,self__.len,self__.arr),key,val);
}
} else
{if((val === (self__.arr[(idx + 1)])))
{return tcoll;
} else
{(self__.arr[(idx + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{if((function (){var G__2902 = o;
if(G__2902)
{if((function (){var or__3824__auto__ = (G__2902.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2902.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__2902.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__2902);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__2902);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es = cljs.core.seq.call(null,o);
var tcoll__$1 = tcoll;
while(true){
var temp__3971__auto__ = cljs.core.first.call(null,es);
if(cljs.core.truth_(temp__3971__auto__))
{var e = temp__3971__auto__;
{
var G__2904 = cljs.core.next.call(null,es);
var G__2905 = tcoll__$1.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__$1,cljs.core.key.call(null,e),cljs.core.val.call(null,e));
es = G__2904;
tcoll__$1 = G__2905;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{self__.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,self__.len,2),self__.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx === -1))
{return not_found;
} else
{return (self__.arr[(idx + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{return cljs.core.quot.call(null,self__.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i = 0;
while(true){
if((i < len))
{{
var G__2906 = cljs.core.assoc_BANG_.call(null,out,(arr[i]),(arr[(i + 1)]));
var G__2907 = (i + 2);
out = G__2906;
i = G__2907;
continue;
}
} else
{return out;
}
break;
}
});
goog.provide('cljs.core.Box');

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__1946__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__1946__auto__,writer__1947__auto__,opts__1948__auto__){
return cljs.core._write.call(null,writer__1947__auto__,"cljs.core/Box");
});
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__2910 = arr.slice();
(G__2910[i] = a);
return G__2910;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__2911 = arr.slice();
(G__2911[i] = a);
(G__2911[j] = b);
return G__2911;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr,(2 * i),(new_arr.length - (2 * i)));
return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);
return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);
(editable.arr[j] = b);
return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len = arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var init__$2 = (function (){var k = (arr[i]);
if(!((k == null)))
{return f.call(null,init__$1,k,(arr[(i + 1)]));
} else
{var node = (arr[(i + 1)]);
if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__2912 = (i + 2);
var G__2913 = init__$2;
i = G__2912;
init__$1 = G__2913;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
goog.provide('cljs.core.BitmapIndexedNode');

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var self__ = this;
var inode = this;
if((self__.bitmap === bit))
{return null;
} else
{var editable = inode.ensure_editable(e);
var earr = editable.arr;
var len = earr.length;
editable.bitmap = (bit ^ editable.bitmap);
cljs.core.array_copy.call(null,earr,(2 * (i + 1)),earr,(2 * i),(len - (2 * (i + 1))));
(earr[(len - 2)] = null);
(earr[(len - 1)] = null);
return editable;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
if(((self__.bitmap & bit) === 0))
{var n = cljs.core.bit_count.call(null,self__.bitmap);
if(((2 * n) < self__.arr.length))
{var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr,(2 * idx),earr,(2 * (idx + 1)),(2 * (n - idx)));
(earr[(2 * idx)] = key);
(earr[((2 * idx) + 1)] = val);
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{if((n >= 16))
{var nodes = cljs.core.make_array.call(null,32);
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i_2914 = 0;
var j_2915 = 0;
while(true){
if((i_2914 < 32))
{if((((self__.bitmap >>> i_2914) & 1) === 0))
{{
var G__2916 = (i_2914 + 1);
var G__2917 = j_2915;
i_2914 = G__2916;
j_2915 = G__2917;
continue;
}
} else
{(nodes[i_2914] = ((!(((self__.arr[j_2915]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),cljs.core.hash.call(null,(self__.arr[j_2915])),(self__.arr[j_2915]),(self__.arr[(j_2915 + 1)]),added_leaf_QMARK_):(self__.arr[(j_2915 + 1)])));
{
var G__2918 = (i_2914 + 1);
var G__2919 = (j_2915 + 2);
i_2914 = G__2918;
j_2915 = G__2919;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit__$1,(n + 1),nodes));
} else
{if("\uFDD0'else")
{var new_arr = cljs.core.make_array.call(null,(2 * (n + 4)));
cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
cljs.core.array_copy.call(null,self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
added_leaf_QMARK_.val = true;
var editable = inode.ensure_editable(edit__$1);
editable.arr = new_arr;
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{return null;
}
}
}
} else
{var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),n);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode,edit__$1,(2 * idx),null,((2 * idx) + 1),cljs.core.create_node.call(null,edit__$1,(shift + 5),key_or_nil,val_or_node,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return cljs.core.create_inode_seq.call(null,self__.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_without_BANG_(edit__$1,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return cljs.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),n);
} else
{if((self__.bitmap === bit))
{return null;
} else
{if("\uFDD0'else")
{return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{(removed_leaf_QMARK_[0] = true);
return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{if("\uFDD0'else")
{return inode;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{var n = cljs.core.bit_count.call(null,self__.bitmap);
var new_arr = cljs.core.make_array.call(null,(((n < 0))?4:(2 * (n + 1))));
cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * n));
return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce.call(null,self__.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{return val_or_node.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{return cljs.core.PersistentVector.fromArray([key_or_nil,val_or_node], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_without((shift + 5),hash,key);
if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),n)));
} else
{if((self__.bitmap === bit))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair.call(null,self__.arr,idx)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair.call(null,self__.arr,idx)));
} else
{if("\uFDD0'else")
{return inode;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
if(((self__.bitmap & bit) === 0))
{var n = cljs.core.bit_count.call(null,self__.bitmap);
if((n >= 16))
{var nodes = cljs.core.make_array.call(null,32);
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i_2920 = 0;
var j_2921 = 0;
while(true){
if((i_2920 < 32))
{if((((self__.bitmap >>> i_2920) & 1) === 0))
{{
var G__2922 = (i_2920 + 1);
var G__2923 = j_2921;
i_2920 = G__2922;
j_2921 = G__2923;
continue;
}
} else
{(nodes[i_2920] = ((!(((self__.arr[j_2921]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(self__.arr[j_2921])),(self__.arr[j_2921]),(self__.arr[(j_2921 + 1)]),added_leaf_QMARK_):(self__.arr[(j_2921 + 1)])));
{
var G__2924 = (i_2920 + 1);
var G__2925 = (j_2921 + 2);
i_2920 = G__2924;
j_2921 = G__2925;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n + 1),nodes));
} else
{var new_arr = cljs.core.make_array.call(null,(2 * (n + 1)));
cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
cljs.core.array_copy.call(null,self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else
{var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),n)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,(2 * idx),null,((2 * idx) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil,val_or_node,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{return val_or_node.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{return val_or_node;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr = array_node.arr;
var len = (2 * (array_node.cnt - 1));
var new_arr = cljs.core.make_array.call(null,len);
var i = 0;
var j = 1;
var bitmap = 0;
while(true){
if((i < len))
{if((function (){var and__3822__auto__ = !((i === idx));
if(and__3822__auto__)
{return !(((arr[i]) == null));
} else
{return and__3822__auto__;
}
})())
{(new_arr[j] = (arr[i]));
{
var G__2926 = (i + 1);
var G__2927 = (j + 2);
var G__2928 = (bitmap | (1 << i));
i = G__2926;
j = G__2927;
bitmap = G__2928;
continue;
}
} else
{{
var G__2929 = (i + 1);
var G__2930 = j;
var G__2931 = bitmap;
i = G__2929;
j = G__2930;
bitmap = G__2931;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});
goog.provide('cljs.core.ArrayNode');

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable.cnt = (editable.cnt + 1);
return editable;
} else
{var n = node.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === node))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return cljs.core.create_array_node_seq.call(null,self__.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{return inode;
} else
{var n = node.inode_without_BANG_(edit__$1,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode,edit__$1,idx);
} else
{var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
editable.cnt = (editable.cnt - 1);
return editable;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{return (new cljs.core.ArrayNode(e,self__.cnt,self__.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
var len = self__.arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var node = (self__.arr[i]);
if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);
if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__2932 = (i + 1);
var G__2933 = init__$2;
i = G__2932;
init__$1 = G__2933;
continue;
}
}
} else
{return null;
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{return node.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{var n = node.inode_without((shift + 5),hash,key);
if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode,null,idx);
} else
{return (new cljs.core.ArrayNode(null,(self__.cnt - 1),cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
} else
{return null;
}
}
}
} else
{return inode;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{return (new cljs.core.ArrayNode(null,(self__.cnt + 1),cljs.core.clone_and_set.call(null,self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n = node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === node))
{return inode;
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{return node.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim = (2 * cnt);
var i = 0;
while(true){
if((i < lim))
{if(cljs.core.key_test.call(null,key,(arr[i])))
{return i;
} else
{{
var G__2934 = (i + 2);
i = G__2934;
continue;
}
}
} else
{return -1;
}
break;
}
});
goog.provide('cljs.core.HashCollisionNode');

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{if((self__.arr.length > (2 * self__.cnt)))
{var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,(2 * self__.cnt),key,((2 * self__.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable.cnt = (editable.cnt + 1);
return editable;
} else
{var len = self__.arr.length;
var new_arr = cljs.core.make_array.call(null,(len + 2));
cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return inode.ensure_editable_array(edit__$1,(self__.cnt + 1),new_arr);
}
} else
{if(((self__.arr[(idx + 1)]) === val))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,(idx + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return cljs.core.create_inode_seq.call(null,self__.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{return inode;
} else
{(removed_leaf_QMARK_[0] = true);
if((self__.cnt === 1))
{return null;
} else
{var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
(earr[idx] = (earr[((2 * self__.cnt) - 2)]));
(earr[(idx + 1)] = (earr[((2 * self__.cnt) - 1)]));
(earr[((2 * self__.cnt) - 1)] = null);
(earr[((2 * self__.cnt) - 2)] = null);
editable.cnt = (editable.cnt - 1);
return editable;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{var new_arr = cljs.core.make_array.call(null,(2 * (self__.cnt + 1)));
cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * self__.cnt));
return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce.call(null,self__.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(self__.arr[idx])))
{return cljs.core.PersistentVector.fromArray([(self__.arr[idx]),(self__.arr[(idx + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{return inode;
} else
{if((self__.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - 1),cljs.core.remove_pair.call(null,self__.arr,cljs.core.quot.call(null,idx,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{var len = self__.arr.length;
var new_arr = cljs.core.make_array.call(null,(len + 2));
cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + 1),new_arr));
} else
{if(cljs.core._EQ_.call(null,(self__.arr[idx]),val))
{return inode;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,(idx + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(self__.arr[idx])))
{return (self__.arr[(idx + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var self__ = this;
var inode = this;
if((e === self__.edit))
{self__.arr = array;
self__.cnt = count;
return inode;
} else
{return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash.call(null,key1);
if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash.call(null,key1);
if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;
goog.provide('cljs.core.NodeSeq');

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
if((self__.s == null))
{return cljs.core.PersistentVector.fromArray([(self__.nodes[self__.i]),(self__.nodes[(self__.i + 1)])], true);
} else
{return cljs.core.first.call(null,self__.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.s == null))
{return cljs.core.create_inode_seq.call(null,self__.nodes,(self__.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,self__.nodes,self__.i,cljs.core.next.call(null,self__.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len = nodes.length;
var j = i;
while(true){
if((j < len))
{if(!(((nodes[j]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else
{var temp__3971__auto__ = (nodes[(j + 1)]);
if(cljs.core.truth_(temp__3971__auto__))
{var node = temp__3971__auto__;
var temp__3971__auto____$1 = node.inode_seq();
if(cljs.core.truth_(temp__3971__auto____$1))
{var node_seq = temp__3971__auto____$1;
return (new cljs.core.NodeSeq(null,nodes,(j + 2),node_seq,null));
} else
{{
var G__2935 = (j + 2);
j = G__2935;
continue;
}
}
} else
{{
var G__2936 = (j + 2);
j = G__2936;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;
goog.provide('cljs.core.ArrayNodeSeq');

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core.first.call(null,self__.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljs.core.create_array_node_seq.call(null,null,self__.nodes,self__.i,cljs.core.next.call(null,self__.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len = nodes.length;
var j = i;
while(true){
if((j < len))
{var temp__3971__auto__ = (nodes[j]);
if(cljs.core.truth_(temp__3971__auto__))
{var nj = temp__3971__auto__;
var temp__3971__auto____$1 = nj.inode_seq();
if(cljs.core.truth_(temp__3971__auto____$1))
{var ns = temp__3971__auto____$1;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + 1),ns,null));
} else
{{
var G__2937 = (j + 1);
j = G__2937;
continue;
}
}
} else
{{
var G__2938 = (j + 1);
j = G__2938;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
goog.provide('cljs.core.PersistentHashMap');

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljs.core.TransientHashMap({},self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_imap.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if((k == null))
{if((function (){var and__3822__auto__ = self__.has_nil_QMARK_;
if(and__3822__auto__)
{return (v === self__.nil_val);
} else
{return and__3822__auto__;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + 1)),self__.root,true,v,null));
}
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));
var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK_);
if((new_root === self__.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + 1):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
if((k == null))
{return self__.has_nil_QMARK_;
} else
{if((self__.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__2943 = null;
var G__2943__2 = (function (this_sym2941,k){
var self__ = this;
var this_sym2941__$1 = this;
var coll = this_sym2941__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__2943__3 = (function (this_sym2942,k,not_found){
var self__ = this;
var this_sym2942__$1 = this;
var coll = this_sym2942__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__2943 = function(this_sym2942,k,not_found){
switch(arguments.length){
case 2:
return G__2943__2.call(this,this_sym2942,k);
case 3:
return G__2943__3.call(this,this_sym2942,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2943;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym2939,args2940){
var self__ = this;
return this_sym2939.call.apply(this_sym2939,[this_sym2939].concat(args2940.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var init__$1 = ((self__.has_nil_QMARK_)?f.call(null,init,null,self__.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return cljs.core.deref.call(null,init__$1);
} else
{if(!((self__.root == null)))
{return self__.root.kv_reduce(f,init__$1);
} else
{if("\uFDD0'else")
{return init__$1;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{var s = ((!((self__.root == null)))?self__.root.inode_seq():null);
if(self__.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,self__.nil_val], true),s);
} else
{return s;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,self__.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - 1),self__.root,false,null,null));
} else
{return coll;
}
} else
{if((self__.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root = self__.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root === self__.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - 1),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = 0;
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len))
{{
var G__2944 = (i + 1);
var G__2945 = cljs.core.assoc_BANG_.call(null,out,(ks[i]),(vs[i]));
i = G__2944;
out = G__2945;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
});
goog.provide('cljs.core.TransientHashMap');

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return null;
}
} else
{if((self__.root == null))
{return null;
} else
{return self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if(self__.edit)
{return self__.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((function (){var G__2946 = o;
if(G__2946)
{if((function (){var or__3824__auto__ = (G__2946.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__2946.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__2946.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__2946);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__2946);
}
})())
{return tcoll.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es = cljs.core.seq.call(null,o);
var tcoll__$1 = tcoll;
while(true){
var temp__3971__auto__ = cljs.core.first.call(null,es);
if(cljs.core.truth_(temp__3971__auto__))
{var e = temp__3971__auto__;
{
var G__2947 = cljs.core.next.call(null,es);
var G__2948 = tcoll__$1.assoc_BANG_(cljs.core.key.call(null,e),cljs.core.val.call(null,e));
es = G__2947;
tcoll__$1 = G__2948;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((k == null))
{if((self__.nil_val === v))
{} else
{self__.nil_val = v;
}
if(self__.has_nil_QMARK_)
{} else
{self__.count = (self__.count + 1);
self__.has_nil_QMARK_ = true;
}
return tcoll;
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));
var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK_);
if((node === self__.root))
{} else
{self__.root = node;
}
if(added_leaf_QMARK_.val)
{self__.count = (self__.count + 1);
} else
{}
return tcoll;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((k == null))
{if(self__.has_nil_QMARK_)
{self__.has_nil_QMARK_ = false;
self__.nil_val = null;
self__.count = (self__.count - 1);
return tcoll;
} else
{return tcoll;
}
} else
{if((self__.root == null))
{return tcoll;
} else
{var removed_leaf_QMARK_ = (new cljs.core.Box(false));
var node = self__.root.inode_without_BANG_(self__.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK_);
if((node === self__.root))
{} else
{self__.root = node;
}
if(cljs.core.truth_((removed_leaf_QMARK_[0])))
{self__.count = (self__.count - 1);
} else
{}
return tcoll;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit)
{self__.edit = null;
return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null)))
{{
var G__2949 = ((ascending_QMARK_)?t.left:t.right);
var G__2950 = cljs.core.conj.call(null,stack__$1,t);
t = G__2949;
stack__$1 = G__2950;
continue;
}
} else
{return stack__$1;
}
break;
}
});
goog.provide('cljs.core.PersistentTreeMapSeq');

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return self__.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
return cljs.core.peek.call(null,self__.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var t = cljs.core.first.call(null,self__.stack);
var next_stack = cljs.core.tree_map_seq_push.call(null,((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next.call(null,self__.stack),self__.ascending_QMARK_);
if(!((next_stack == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto__ = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto__)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto__;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto__ = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto__)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto__;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__$1 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return cljs.core.deref.call(null,init__$1);
} else
{var init__$2 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__$1):init__$1);
if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__$2):init__$2);
if(cljs.core.reduced_QMARK_.call(null,init__$3))
{return cljs.core.deref.call(null,init__$3);
} else
{return init__$3;
}
}
}
});
goog.provide('cljs.core.BlackNode');

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__2955 = null;
var G__2955__2 = (function (this_sym2953,k){
var self__ = this;
var this_sym2953__$1 = this;
var node = this_sym2953__$1;
return node.cljs$core$ILookup$_lookup$arity$2(node,k);
});
var G__2955__3 = (function (this_sym2954,k,not_found){
var self__ = this;
var this_sym2954__$1 = this;
var node = this_sym2954__$1;
return node.cljs$core$ILookup$_lookup$arity$3(node,k,not_found);
});
G__2955 = function(this_sym2954,k,not_found){
switch(arguments.length){
case 2:
return G__2955__2.call(this,this_sym2954,k);
case 3:
return G__2955__3.call(this,this_sym2954,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2955;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym2951,args2952){
var self__ = this;
return this_sym2951.call.apply(this_sym2951,[this_sym2951].concat(args2952.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
return cljs.core.PersistentVector.fromArray([self__.key,self__.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
return self__.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return ins.balance_right(node);
});
cljs.core.BlackNode.prototype.redden = (function (){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_right_del.call(null,self__.key,self__.val,self__.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce.call(null,node,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_left_del.call(null,self__.key,self__.val,del,self__.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return ins.balance_left(node);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__2956 = null;
var G__2956__0 = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
G__2956 = function(){
switch(arguments.length){
case 0:
return G__2956__0.call(this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2956;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return node;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
return cljs.core.list.call(null,self__.key,self__.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
return cljs.core.PersistentVector.fromArray([self__.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
return cljs.core.PersistentVector.EMPTY;
});
goog.provide('cljs.core.RedNode');

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__2961 = null;
var G__2961__2 = (function (this_sym2959,k){
var self__ = this;
var this_sym2959__$1 = this;
var node = this_sym2959__$1;
return node.cljs$core$ILookup$_lookup$arity$2(node,k);
});
var G__2961__3 = (function (this_sym2960,k,not_found){
var self__ = this;
var this_sym2960__$1 = this;
var node = this_sym2960__$1;
return node.cljs$core$ILookup$_lookup$arity$3(node,k,not_found);
});
G__2961 = function(this_sym2960,k,not_found){
switch(arguments.length){
case 2:
return G__2961__2.call(this,this_sym2960,k);
case 3:
return G__2961__3.call(this,this_sym2960,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2961;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym2957,args2958){
var self__ = this;
return this_sym2957.call.apply(this_sym2957,[this_sym2957].concat(args2958.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
return cljs.core.PersistentVector.fromArray([self__.key,self__.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
return self__.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var self__ = this;
var node = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce.call(null,node,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,self__.left))
{return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,self__.right))
{return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__2962 = null;
var G__2962__0 = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
G__2962 = function(){
switch(arguments.length){
case 0:
return G__2962__0.call(this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2962;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,self__.right))
{return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,self__.left))
{return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
return cljs.core.list.call(null,self__.key,self__.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
return cljs.core.PersistentVector.fromArray([self__.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c = comp.call(null,k,tree.key);
if((c === 0))
{(found[0] = tree);
return null;
} else
{if((c < 0))
{var ins = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins == null)))
{return tree.add_left(ins);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins == null)))
{return tree.add_right(ins);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c = comp.call(null,k,tree.key);
if((c === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c < 0))
{var del = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto__ = !((del == null));
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto__ = !((del == null));
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk = tree.key;
var c = comp.call(null,k,tk);
if((c === 0))
{return tree.replace(tk,v,tree.left,tree.right);
} else
{if((c < 0))
{return tree.replace(tk,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
goog.provide('cljs.core.PersistentTreeMap');

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_imap.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var n = coll.entry_at(k);
if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var found = [null];
var t = cljs.core.tree_map_add.call(null,self__.comp,self__.tree,k,v,found);
if((t == null))
{var found_node = cljs.core.nth.call(null,found,0);
if(cljs.core._EQ_.call(null,v,found_node.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace.call(null,self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + 1),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__2967 = null;
var G__2967__2 = (function (this_sym2965,k){
var self__ = this;
var this_sym2965__$1 = this;
var coll = this_sym2965__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__2967__3 = (function (this_sym2966,k,not_found){
var self__ = this;
var this_sym2966__$1 = this;
var coll = this_sym2966__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__2967 = function(this_sym2966,k,not_found){
switch(arguments.length){
case 2:
return G__2967__2.call(this,this_sym2966,k);
case 3:
return G__2967__3.call(this,this_sym2966,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2967;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym2963,args2964){
var self__ = this;
return this_sym2963.call.apply(this_sym2963,[this_sym2963].concat(args2964.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
if(!((self__.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,self__.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,self__.tree,false,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var self__ = this;
var coll = this;
var t = self__.tree;
while(true){
if(!((t == null)))
{var c = self__.comp.call(null,k,t.key);
if((c === 0))
{return t;
} else
{if((c < 0))
{{
var G__2968 = t.left;
t = G__2968;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__2969 = t.right;
t = G__2969;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
if((self__.cnt > 0))
{var stack = null;
var t = self__.tree;
while(true){
if(!((t == null)))
{var c = self__.comp.call(null,k,t.key);
if((c === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack,t),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < 0))
{{
var G__2970 = cljs.core.conj.call(null,stack,t);
var G__2971 = t.left;
stack = G__2970;
t = G__2971;
continue;
}
} else
{{
var G__2972 = stack;
var G__2973 = t.right;
stack = G__2972;
t = G__2973;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c > 0))
{{
var G__2974 = cljs.core.conj.call(null,stack,t);
var G__2975 = t.right;
stack = G__2974;
t = G__2975;
continue;
}
} else
{{
var G__2976 = stack;
var G__2977 = t.left;
stack = G__2976;
t = G__2977;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack == null))
{return null;
} else
{return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,-1,null));
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
return self__.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,self__.tree,true,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var found = [null];
var t = cljs.core.tree_map_remove.call(null,self__.comp,self__.tree,k,found);
if((t == null))
{if((cljs.core.nth.call(null,found,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,null,0,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - 1),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in$)
{{
var G__2978 = cljs.core.nnext.call(null,in$);
var G__2979 = cljs.core.assoc_BANG_.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__2978;
out = G__2979;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__2980){
var keyvals = cljs.core.seq(arglist__2980);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__2981){
var keyvals = cljs.core.seq(arglist__2981);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks = [];
var obj = {};
var kvs = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs)
{ks.push(cljs.core.first.call(null,kvs));
(obj[cljs.core.first.call(null,kvs)] = cljs.core.second.call(null,kvs));
{
var G__2982 = cljs.core.nnext.call(null,kvs);
kvs = G__2982;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__2983){
var keyvals = cljs.core.seq(arglist__2983);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in$)
{{
var G__2984 = cljs.core.nnext.call(null,in$);
var G__2985 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__2984;
out = G__2985;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__2986){
var keyvals = cljs.core.seq(arglist__2986);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator.call(null,comparator),null,0,null,0));
while(true){
if(in$)
{{
var G__2987 = cljs.core.nnext.call(null,in$);
var G__2988 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__2987;
out = G__2988;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__2989){
var comparator = cljs.core.first(arglist__2989);
var keyvals = cljs.core.rest(arglist__2989);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__2990_SHARP_,p2__2991_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto__ = p1__2990_SHARP_;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__2991_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__2992){
var maps = cljs.core.seq(arglist__2992);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry = (function (m,e){
var k = cljs.core.first.call(null,e);
var v = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k))
{return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core._lookup.call(null,m,k,null),v));
} else
{return cljs.core.assoc.call(null,m,k,v);
}
});
var merge2 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__3824__auto__ = m1;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__2993){
var f = cljs.core.first(arglist__2993);
var maps = cljs.core.rest(arglist__2993);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret = cljs.core.ObjMap.EMPTY;
var keys = cljs.core.seq.call(null,keyseq);
while(true){
if(keys)
{var key = cljs.core.first.call(null,keys);
var entry = cljs.core._lookup.call(null,map,key,"\uFDD0'cljs.core/not-found");
{
var G__2994 = ((cljs.core.not_EQ_.call(null,entry,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret,key,entry):ret);
var G__2995 = cljs.core.next.call(null,keys);
ret = G__2994;
keys = G__2995;
continue;
}
} else
{return ret;
}
break;
}
});
goog.provide('cljs.core.PersistentHashSet');

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,self__.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_iset.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,self__.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__3001 = null;
var G__3001__2 = (function (this_sym2999,k){
var self__ = this;
var this_sym2999__$1 = this;
var coll = this_sym2999__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3001__3 = (function (this_sym3000,k,not_found){
var self__ = this;
var this_sym3000__$1 = this;
var coll = this_sym3000__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3001 = function(this_sym3000,k,not_found){
switch(arguments.length){
case 2:
return G__3001__2.call(this,this_sym3000,k);
case 3:
return G__3001__3.call(this,this_sym3000,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3001;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym2997,args2998){
var self__ = this;
return this_sym2997.call.apply(this_sym2997,[this_sym2997].concat(args2998.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.call(null,self__.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return cljs.core.keys.call(null,self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.dissoc.call(null,self__.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var and__3822__auto__ = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto__)
{var and__3822__auto____$1 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____$1)
{return cljs.core.every_QMARK_.call(null,(function (p1__2996_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__2996_SHARP_);
}),other);
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,self__.meta);
});
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len = cljs.core.count.call(null,items);
var i = 0;
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len))
{{
var G__3002 = (i + 1);
var G__3003 = cljs.core.conj_BANG_.call(null,out,(items[i]));
i = G__3002;
out = G__3003;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
});
goog.provide('cljs.core.TransientHashSet');

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__3009 = null;
var G__3009__2 = (function (this_sym3007,k){
var self__ = this;
var this_sym3007__$1 = this;
var tcoll = this_sym3007__$1;
if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__3009__3 = (function (this_sym3008,k,not_found){
var self__ = this;
var this_sym3008__$1 = this;
var tcoll = this_sym3008__$1;
if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__3009 = function(this_sym3008,k,not_found){
switch(arguments.length){
case 2:
return G__3009__2.call(this,this_sym3008,k);
case 3:
return G__3009__3.call(this,this_sym3008,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3009;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym3005,args3006){
var self__ = this;
return this_sym3005.call.apply(this_sym3005,[this_sym3005].concat(args3006.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var self__ = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var self__ = this;
if((cljs.core._lookup.call(null,self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
return cljs.core.count.call(null,self__.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var self__ = this;
self__.transient_map = cljs.core.dissoc_BANG_.call(null,self__.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
self__.transient_map = cljs.core.assoc_BANG_.call(null,self__.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,self__.transient_map),null));
});
goog.provide('cljs.core.PersistentTreeSet');

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_iset.call(null,coll);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var n = self__.tree_map.entry_at(v);
if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__3014 = null;
var G__3014__2 = (function (this_sym3012,k){
var self__ = this;
var this_sym3012__$1 = this;
var coll = this_sym3012__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3014__3 = (function (this_sym3013,k,not_found){
var self__ = this;
var this_sym3013__$1 = this;
var coll = this_sym3013__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3014 = function(this_sym3013,k,not_found){
switch(arguments.length){
case 2:
return G__3014__2.call(this,this_sym3013,k);
case 3:
return G__3014__3.call(this,this_sym3013,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3014;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym3010,args3011){
var self__ = this;
return this_sym3010.call.apply(this_sym3010,[this_sym3010].concat(args3011.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.call(null,self__.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,self__.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,self__.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,self__.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
return cljs.core._comparator.call(null,self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return cljs.core.keys.call(null,self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.call(null,self__.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return cljs.core.count.call(null,self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var and__3822__auto__ = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto__)
{var and__3822__auto____$1 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____$1)
{return cljs.core.every_QMARK_.call(null,(function (p1__3004_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3004_SHARP_);
}),other);
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__3015__delegate = function (keys){
var in$ = cljs.core.seq.call(null,keys);
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in$))
{{
var G__3016 = cljs.core.next.call(null,in$);
var G__3017 = cljs.core.conj_BANG_.call(null,out,cljs.core.first.call(null,in$));
in$ = G__3016;
out = G__3017;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
};
var G__3015 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3015__delegate.call(this, keys);
};
G__3015.cljs$lang$maxFixedArity = 0;
G__3015.cljs$lang$applyTo = (function (arglist__3018){
var keys = cljs.core.seq(arglist__3018);;
return G__3015__delegate(keys);
});
G__3015.cljs$lang$arity$variadic = G__3015__delegate;
return G__3015;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__3019){
var keys = cljs.core.seq(arglist__3019);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__3021){
var comparator = cljs.core.first(arglist__3021);
var keys = cljs.core.rest(arglist__3021);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto__ = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto__))
{var e = temp__3971__auto__;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3020_SHARP_){
var temp__3971__auto__ = cljs.core.find.call(null,smap,p1__3020_SHARP_);
if(cljs.core.truth_(temp__3971__auto__))
{var e = temp__3971__auto__;
return cljs.core.second.call(null,e);
} else
{return p1__3020_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3028,seen__$1){
while(true){
var vec__3029 = p__3028;
var f = cljs.core.nth.call(null,vec__3029,0,null);
var xs__$1 = vec__3029;
var temp__3974__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,f))
{{
var G__3030 = cljs.core.rest.call(null,s);
var G__3031 = seen__$1;
p__3028 = G__3030;
seen__$1 = G__3031;
continue;
}
} else
{return cljs.core.cons.call(null,f,step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,f)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret = cljs.core.PersistentVector.EMPTY;
var s__$1 = s;
while(true){
if(cljs.core.next.call(null,s__$1))
{{
var G__3032 = cljs.core.conj.call(null,ret,cljs.core.first.call(null,s__$1));
var G__3033 = cljs.core.next.call(null,s__$1);
ret = G__3032;
s__$1 = G__3033;
continue;
}
} else
{return cljs.core.seq.call(null,ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto__ = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i = x.lastIndexOf("/");
if((i < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto__ = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i = x.lastIndexOf("/");
if((i > -1))
{return cljs.core.subs.call(null,x,2,i);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map = cljs.core.ObjMap.EMPTY;
var ks = cljs.core.seq.call(null,keys);
var vs = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto__ = ks;
if(and__3822__auto__)
{return vs;
} else
{return and__3822__auto__;
}
})())
{{
var G__3036 = cljs.core.assoc.call(null,map,cljs.core.first.call(null,ks),cljs.core.first.call(null,vs));
var G__3037 = cljs.core.next.call(null,ks);
var G__3038 = cljs.core.next.call(null,vs);
map = G__3036;
ks = G__3037;
vs = G__3038;
continue;
}
} else
{return map;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__3041__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3034_SHARP_,p2__3035_SHARP_){
return max_key.call(null,k,p1__3034_SHARP_,p2__3035_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3041 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3041__delegate.call(this, k, x, y, more);
};
G__3041.cljs$lang$maxFixedArity = 3;
G__3041.cljs$lang$applyTo = (function (arglist__3042){
var k = cljs.core.first(arglist__3042);
var x = cljs.core.first(cljs.core.next(arglist__3042));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3042)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3042)));
return G__3041__delegate(k, x, y, more);
});
G__3041.cljs$lang$arity$variadic = G__3041__delegate;
return G__3041;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__3043__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3039_SHARP_,p2__3040_SHARP_){
return min_key.call(null,k,p1__3039_SHARP_,p2__3040_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3043 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3043__delegate.call(this, k, x, y, more);
};
G__3043.cljs$lang$maxFixedArity = 3;
G__3043.cljs$lang$applyTo = (function (arglist__3044){
var k = cljs.core.first(arglist__3044);
var x = cljs.core.first(cljs.core.next(arglist__3044));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3044)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3044)));
return G__3043__delegate(k, x, y, more);
});
G__3043.cljs$lang$arity$variadic = G__3043__delegate;
return G__3043;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto__ = cljs.core.seq.call(null,coll);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto__ = cljs.core.seq.call(null,coll);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),take_while.call(null,pred,cljs.core.rest.call(null,s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp = cljs.core._comparator.call(null,sc);
return test.call(null,comp.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto__ = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto__))
{var vec__3047 = temp__3974__auto__;
var e = cljs.core.nth.call(null,vec__3047,0,null);
var s = vec__3047;
if(cljs.core.truth_(include.call(null,e)))
{return s;
} else
{return cljs.core.next.call(null,s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto__ = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto__))
{var vec__3048 = temp__3974__auto__;
var e = cljs.core.nth.call(null,vec__3048,0,null);
var s = vec__3048;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e))?s:cljs.core.next.call(null,s)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto__ = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto__))
{var vec__3051 = temp__3974__auto__;
var e = cljs.core.nth.call(null,vec__3051,0,null);
var s = vec__3051;
if(cljs.core.truth_(include.call(null,e)))
{return s;
} else
{return cljs.core.next.call(null,s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto__ = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto__))
{var vec__3052 = temp__3974__auto__;
var e = cljs.core.nth.call(null,vec__3052,0,null);
var s = vec__3052;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e))?s:cljs.core.next.call(null,s)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;
goog.provide('cljs.core.Range');

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var h__1824__auto__ = self__.__hash;
if(!((h__1824__auto__ == null)))
{return h__1824__auto__;
} else
{var h__1824__auto____$1 = cljs.core.hash_coll.call(null,rng);
self__.__hash = h__1824__auto____$1;
return h__1824__auto____$1;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var self__ = this;
if((self__.step > 0))
{if(((self__.start + self__.step) < self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
} else
{if(((self__.start + self__.step) > self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var self__ = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var self__ = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var self__ = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var self__ = this;
if((self__.step > 0))
{if((self__.start < self__.end))
{return rng;
} else
{return null;
}
} else
{if((self__.start > self__.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var self__ = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((self__.end - self__.start) / self__.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var self__ = this;
return self__.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var self__ = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){
var self__ = this;
return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var self__ = this;
return self__.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var self__ = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (self__.start + (n * self__.step));
} else
{if((function (){var and__3822__auto__ = (self__.start > self__.end);
if(and__3822__auto__)
{return (self__.step === 0);
} else
{return and__3822__auto__;
}
})())
{return self__.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var self__ = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (self__.start + (n * self__.step));
} else
{if((function (){var and__3822__auto__ = (self__.start > self__.end);
if(and__3822__auto__)
{return (self__.step === 0);
} else
{return and__3822__auto__;
}
})())
{return self__.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto__ = cljs.core.seq.call(null,coll);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
return cljs.core.cons.call(null,cljs.core.first.call(null,s),take_nth.call(null,n,cljs.core.drop.call(null,n,s)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto__ = cljs.core.seq.call(null,coll);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
var fst = cljs.core.first.call(null,s);
var fv = f.call(null,fst);
var run = cljs.core.cons.call(null,fst,cljs.core.take_while.call(null,(function (p1__3053_SHARP_){
return cljs.core._EQ_.call(null,fv,f.call(null,p1__3053_SHARP_));
}),cljs.core.next.call(null,s)));
return cljs.core.cons.call(null,run,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run),s))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto__ = cljs.core.seq.call(null,coll);
if(temp__3971__auto__)
{var s = temp__3971__auto__;
return reductions.call(null,f,cljs.core.first.call(null,s),cljs.core.rest.call(null,s));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto__ = cljs.core.seq.call(null,coll);
if(temp__3974__auto__)
{var s = temp__3974__auto__;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s)),cljs.core.rest.call(null,s));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__3064 = null;
var G__3064__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3064__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3064__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3064__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3064__4 = (function() { 
var G__3065__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3065 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3065__delegate.call(this, x, y, z, args);
};
G__3065.cljs$lang$maxFixedArity = 3;
G__3065.cljs$lang$applyTo = (function (arglist__3066){
var x = cljs.core.first(arglist__3066);
var y = cljs.core.first(cljs.core.next(arglist__3066));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3066)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3066)));
return G__3065__delegate(x, y, z, args);
});
G__3065.cljs$lang$arity$variadic = G__3065__delegate;
return G__3065;
})()
;
G__3064 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3064__0.call(this);
case 1:
return G__3064__1.call(this,x);
case 2:
return G__3064__2.call(this,x,y);
case 3:
return G__3064__3.call(this,x,y,z);
default:
return G__3064__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3064.cljs$lang$maxFixedArity = 3;
G__3064.cljs$lang$applyTo = G__3064__4.cljs$lang$applyTo;
return G__3064;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__3067 = null;
var G__3067__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3067__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3067__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3067__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3067__4 = (function() { 
var G__3068__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3068 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3068__delegate.call(this, x, y, z, args);
};
G__3068.cljs$lang$maxFixedArity = 3;
G__3068.cljs$lang$applyTo = (function (arglist__3069){
var x = cljs.core.first(arglist__3069);
var y = cljs.core.first(cljs.core.next(arglist__3069));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3069)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3069)));
return G__3068__delegate(x, y, z, args);
});
G__3068.cljs$lang$arity$variadic = G__3068__delegate;
return G__3068;
})()
;
G__3067 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3067__0.call(this);
case 1:
return G__3067__1.call(this,x);
case 2:
return G__3067__2.call(this,x,y);
case 3:
return G__3067__3.call(this,x,y,z);
default:
return G__3067__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3067.cljs$lang$maxFixedArity = 3;
G__3067.cljs$lang$applyTo = G__3067__4.cljs$lang$applyTo;
return G__3067;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__3070 = null;
var G__3070__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3070__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3070__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3070__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3070__4 = (function() { 
var G__3071__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3071 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3071__delegate.call(this, x, y, z, args);
};
G__3071.cljs$lang$maxFixedArity = 3;
G__3071.cljs$lang$applyTo = (function (arglist__3072){
var x = cljs.core.first(arglist__3072);
var y = cljs.core.first(cljs.core.next(arglist__3072));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3072)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3072)));
return G__3071__delegate(x, y, z, args);
});
G__3071.cljs$lang$arity$variadic = G__3071__delegate;
return G__3071;
})()
;
G__3070 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3070__0.call(this);
case 1:
return G__3070__1.call(this,x);
case 2:
return G__3070__2.call(this,x,y);
case 3:
return G__3070__3.call(this,x,y,z);
default:
return G__3070__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3070.cljs$lang$maxFixedArity = 3;
G__3070.cljs$lang$applyTo = G__3070__4.cljs$lang$applyTo;
return G__3070;
})()
});
var juxt__4 = (function() { 
var G__3073__delegate = function (f,g,h,fs){
var fs__$1 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__3074 = null;
var G__3074__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__3054_SHARP_,p2__3055_SHARP_){
return cljs.core.conj.call(null,p1__3054_SHARP_,p2__3055_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__3074__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3056_SHARP_,p2__3057_SHARP_){
return cljs.core.conj.call(null,p1__3056_SHARP_,p2__3057_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__3074__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3058_SHARP_,p2__3059_SHARP_){
return cljs.core.conj.call(null,p1__3058_SHARP_,p2__3059_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__3074__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3060_SHARP_,p2__3061_SHARP_){
return cljs.core.conj.call(null,p1__3060_SHARP_,p2__3061_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__3074__4 = (function() { 
var G__3075__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3062_SHARP_,p2__3063_SHARP_){
return cljs.core.conj.call(null,p1__3062_SHARP_,cljs.core.apply.call(null,p2__3063_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__3075 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3075__delegate.call(this, x, y, z, args);
};
G__3075.cljs$lang$maxFixedArity = 3;
G__3075.cljs$lang$applyTo = (function (arglist__3076){
var x = cljs.core.first(arglist__3076);
var y = cljs.core.first(cljs.core.next(arglist__3076));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3076)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3076)));
return G__3075__delegate(x, y, z, args);
});
G__3075.cljs$lang$arity$variadic = G__3075__delegate;
return G__3075;
})()
;
G__3074 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3074__0.call(this);
case 1:
return G__3074__1.call(this,x);
case 2:
return G__3074__2.call(this,x,y);
case 3:
return G__3074__3.call(this,x,y,z);
default:
return G__3074__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3074.cljs$lang$maxFixedArity = 3;
G__3074.cljs$lang$applyTo = G__3074__4.cljs$lang$applyTo;
return G__3074;
})()
};
var G__3073 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3073__delegate.call(this, f, g, h, fs);
};
G__3073.cljs$lang$maxFixedArity = 3;
G__3073.cljs$lang$applyTo = (function (arglist__3077){
var f = cljs.core.first(arglist__3077);
var g = cljs.core.first(cljs.core.next(arglist__3077));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3077)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3077)));
return G__3073__delegate(f, g, h, fs);
});
G__3073.cljs$lang$arity$variadic = G__3073__delegate;
return G__3073;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__3078 = cljs.core.next.call(null,coll);
coll = G__3078;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto__ = cljs.core.seq.call(null,coll);
if(and__3822__auto__)
{return (n > 0);
} else
{return and__3822__auto__;
}
})()))
{{
var G__3079 = (n - 1);
var G__3080 = cljs.core.next.call(null,coll);
n = G__3079;
coll = G__3080;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches),s))
{if((cljs.core.count.call(null,matches) === 1))
{return cljs.core.first.call(null,matches);
} else
{return cljs.core.vec.call(null,matches);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches = re.exec(s);
if((matches == null))
{return null;
} else
{if((cljs.core.count.call(null,matches) === 1))
{return cljs.core.first.call(null,matches);
} else
{return cljs.core.vec.call(null,matches);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data = cljs.core.re_find.call(null,re,s);
var match_idx = s.search(re);
var match_str = ((cljs.core.coll_QMARK_.call(null,match_data))?cljs.core.first.call(null,match_data):match_data);
var post_match = cljs.core.subs.call(null,s,(match_idx + cljs.core.count.call(null,match_str)));
if(cljs.core.truth_(match_data))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data,re_seq.call(null,re,post_match));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__3083 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = cljs.core.nth.call(null,vec__3083,0,null);
var flags = cljs.core.nth.call(null,vec__3083,1,null);
var pattern = cljs.core.nth.call(null,vec__3083,2,null);
return (new RegExp(pattern,flags));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__3081_SHARP_){
return print_one.call(null,p1__3081_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__3085_3086 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__3085_3086)
{var o_3087 = cljs.core.first.call(null,G__3085_3086);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o_3087,writer,opts);
{
var G__3088 = cljs.core.next.call(null,G__3085_3086);
G__3085_3086 = G__3088;
continue;
}
} else
{}
break;
}
return cljs.core._write.call(null,writer,end);
});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var G__3090 = cljs.core.seq.call(null,ss);
while(true){
if(G__3090)
{var s = cljs.core.first.call(null,G__3090);
cljs.core._write.call(null,writer,s);
{
var G__3091 = cljs.core.next.call(null,G__3090);
G__3090 = G__3091;
continue;
}
} else
{return null;
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (goog.isDef(var_args)) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this, writer, ss);
};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__3092){
var writer = cljs.core.first(arglist__3092);
var ss = cljs.core.rest(arglist__3092);
return write_all__delegate(writer, ss);
});
write_all.cljs$lang$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
goog.provide('cljs.core.StringBufferWriter');

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
return self__.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
return null;
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto__ = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto__))
{var and__3822__auto____$1 = (function (){var G__3095 = obj;
if(G__3095)
{if((function (){var or__3824__auto__ = (G__3095.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__3095.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__3095.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__3095);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__3095);
}
})();
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto__ = !((obj == null));
if(and__3822__auto__)
{return obj.cljs$lang$type;
} else
{return and__3822__auto__;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__3096 = obj;
if(G__3096)
{if((function (){var or__3824__auto__ = (G__3096.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__3096.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__3096.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__3096);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__3096);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null))
{return cljs.core._write.call(null,writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write.call(null,writer,"#<undefined>");
} else
{if("\uFDD0'else")
{if(cljs.core.truth_((function (){var and__3822__auto__ = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto__))
{var and__3822__auto____$1 = (function (){var G__3100 = obj;
if(G__3100)
{if((function (){var or__3824__auto__ = (G__3100.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__3100.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__3100.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__3100);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__3100);
}
})();
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto__ = !((obj == null));
if(and__3822__auto__)
{return obj.cljs$lang$type;
} else
{return and__3822__auto__;
}
})())
{return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else
{if((function (){var G__3101 = obj;
if(G__3101)
{if((function (){var or__3824__auto__ = (G__3101.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__3101.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__3101.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__3101);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__3101);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__3102 = obj;
if(G__3102)
{if((function (){var or__3824__auto__ = (G__3102.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__3102.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__3102.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__3102);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__3102);
}
})())
{return cljs.core.apply.call(null,cljs.core.write_all,writer,cljs.core._pr_seq.call(null,obj,opts));
} else
{if(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj)))
{return cljs.core.write_all.call(null,writer,"#\"",obj.source,"\"");
} else
{if("\uFDD0'else")
{return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(obj)].join(''),">");
} else
{return null;
}
}
}
}
}
} else
{return null;
}
}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer.call(null,cljs.core.first.call(null,objs),writer,opts);
var G__3104 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__3104)
{var obj = cljs.core.first.call(null,G__3104);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj,writer,opts);
{
var G__3105 = cljs.core.next.call(null,G__3104);
G__3104 = G__3105;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
cljs.core.pr_seq_writer.call(null,objs,writer,opts);
cljs.core._flush.call(null,writer);
return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return "";
} else
{return [cljs.core.str(cljs.core.pr_sb_with_opts.call(null,objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return "\n";
} else
{var sb = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb.append("\n");
return [cljs.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print.call(null,cljs.core.pr_str_with_opts.call(null,objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3106){
var objs = cljs.core.seq(arglist__3106);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__3107){
var objs = cljs.core.seq(arglist__3107);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3108){
var objs = cljs.core.seq(arglist__3108);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3109){
var objs = cljs.core.seq(arglist__3109);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__3110){
var objs = cljs.core.seq(arglist__3110);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3111){
var objs = cljs.core.seq(arglist__3111);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__3112){
var objs = cljs.core.seq(arglist__3112);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3113){
var objs = cljs.core.seq(arglist__3113);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__3114){
var fmt = cljs.core.first(arglist__3114);
var args = cljs.core.rest(arglist__3114);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.char_escapes = cljs.core.ObjMap.fromObject(["\"","\\","\b","\f","\n","\r","\t"],{"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"});
cljs.core.quote_string = (function quote_string(s){
return [cljs.core.str("\""),cljs.core.str(s.replace(RegExp("[\\\\\"\b\f\n\r\t]","g"),(function (match){
return cljs.core._lookup.call(null,cljs.core.char_escapes,match,null);
}))),cljs.core.str("\"")].join('');
});
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto__ = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto__))
{var nspc = temp__3974__auto__;
return [cljs.core.str(nspc),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto__ = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto__))
{var nspc = temp__3974__auto__;
return [cljs.core.str(nspc),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?cljs.core.quote_string.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns) < len))
{{
var G__3115 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__3115;
continue;
}
} else
{return ns;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["number"] = true);
(cljs.core._pr_writer["number"] = (function (n,writer,opts){
(1 / 0);
return cljs.core._write.call(null,writer,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["boolean"] = true);
(cljs.core._pr_writer["boolean"] = (function (bool,writer,opts){
return cljs.core._write.call(null,writer,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintWithWriter["string"] = true);
(cljs.core._pr_writer["string"] = (function (obj,writer,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{cljs.core._write.call(null,writer,":");
var temp__3974__auto___3116 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto___3116))
{var nspc_3117 = temp__3974__auto___3116;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc_3117)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto___3118 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto___3118))
{var nspc_3119 = temp__3974__auto___3118;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc_3119)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if("\uFDD0'else")
{if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts)))
{return cljs.core._write.call(null,writer,cljs.core.quote_string.call(null,obj));
} else
{return cljs.core._write.call(null,writer,obj);
}
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
(cljs.core.IPrintWithWriter["array"] = true);
(cljs.core._pr_writer["array"] = (function (a,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintWithWriter["function"] = true);
(cljs.core._pr_writer["function"] = (function (this$,writer,_){
return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core._write.call(null,writer,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintWithWriter$ = true;
Date.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,_){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns) < len))
{{
var G__3120 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__3120;
continue;
}
} else
{return ns;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize.call(null,(d.getUTCMonth() + 1),2),"-",normalize.call(null,d.getUTCDate(),2),"T",normalize.call(null,d.getUTCHours(),2),":",normalize.call(null,d.getUTCMinutes(),2),":",normalize.call(null,d.getUTCSeconds(),2),".",normalize.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});
goog.provide('cljs.core.Atom');

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var G__3121 = cljs.core.seq.call(null,self__.watches);
while(true){
if(G__3121)
{var vec__3122 = cljs.core.first.call(null,G__3121);
var key = cljs.core.nth.call(null,vec__3122,0,null);
var f = cljs.core.nth.call(null,vec__3122,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__3123 = cljs.core.next.call(null,G__3121);
G__3121 = G__3123;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
return this$.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
return this$.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var self__ = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,self__.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
return self__.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return self__.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__3127__delegate = function (x,p__3124){
var map__3126 = p__3124;
var map__3126__$1 = ((cljs.core.seq_QMARK_.call(null,map__3126))?cljs.core.apply.call(null,cljs.core.hash_map,map__3126):map__3126);
var validator = cljs.core._lookup.call(null,map__3126__$1,"\uFDD0'validator",null);
var meta = cljs.core._lookup.call(null,map__3126__$1,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta,validator,null));
};
var G__3127 = function (x,var_args){
var p__3124 = null;
if (goog.isDef(var_args)) {
  p__3124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3127__delegate.call(this, x, p__3124);
};
G__3127.cljs$lang$maxFixedArity = 1;
G__3127.cljs$lang$applyTo = (function (arglist__3128){
var x = cljs.core.first(arglist__3128);
var p__3124 = cljs.core.rest(arglist__3128);
return G__3127__delegate(x, p__3124);
});
G__3127.cljs$lang$arity$variadic = G__3127__delegate;
return G__3127;
})()
;
atom = function(x,var_args){
var p__3124 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto___3129 = a.validator;
if(cljs.core.truth_(temp__3974__auto___3129))
{var validate_3130 = temp__3974__auto___3129;
if(cljs.core.truth_(validate_3130.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6700))))].join('')));
}
} else
{}
var old_value_3131 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value_3131,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__3132__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3132 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3132__delegate.call(this, a, f, x, y, z, more);
};
G__3132.cljs$lang$maxFixedArity = 5;
G__3132.cljs$lang$applyTo = (function (arglist__3133){
var a = cljs.core.first(arglist__3133);
var f = cljs.core.first(cljs.core.next(arglist__3133));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3133)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3133))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3133)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3133)))));
return G__3132__delegate(a, f, x, y, z, more);
});
G__3132.cljs$lang$arity$variadic = G__3132__delegate;
return G__3132;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3134){
var iref = cljs.core.first(arglist__3134);
var f = cljs.core.first(cljs.core.next(arglist__3134));
var args = cljs.core.rest(cljs.core.next(arglist__3134));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;
goog.provide('cljs.core.Delay');

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var self__ = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,self__.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,self__.state,(function (p__3135){
var map__3136 = p__3135;
var map__3136__$1 = ((cljs.core.seq_QMARK_.call(null,map__3136))?cljs.core.apply.call(null,cljs.core.hash_map,map__3136):map__3136);
var curr_state = map__3136__$1;
var done = cljs.core._lookup.call(null,map__3136__$1,"\uFDD0'done",null);
if(cljs.core.truth_(done))
{return curr_state;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":self__.f.call(null)});
}
})));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3142 = options;
var map__3142__$1 = ((cljs.core.seq_QMARK_.call(null,map__3142))?cljs.core.apply.call(null,cljs.core.hash_map,map__3142):map__3142);
var keywordize_keys = cljs.core._lookup.call(null,map__3142__$1,"\uFDD0'keywordize-keys",null);
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
var f = (function thisfn(x__$1){
if(cljs.core.seq_QMARK_.call(null,x__$1))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x__$1));
} else
{if(cljs.core.coll_QMARK_.call(null,x__$1))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x__$1),cljs.core.map.call(null,thisfn,x__$1));
} else
{if(cljs.core.truth_(goog.isArray(x__$1)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x__$1));
} else
{if((cljs.core.type.call(null,x__$1) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2100__auto__ = (function iter__3145(s__3146){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3146__$1 = s__3146;
while(true){
if(cljs.core.seq.call(null,s__3146__$1))
{var k = cljs.core.first.call(null,s__3146__$1);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn.call(null,k),thisfn.call(null,(x__$1[k]))], true),iter__3145.call(null,cljs.core.rest.call(null,s__3146__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2100__auto__.call(null,cljs.core.js_keys.call(null,x__$1));
})());
} else
{if("\uFDD0'else")
{return x__$1;
} else
{return null;
}
}
}
}
}
});
return f.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3147){
var x = cljs.core.first(arglist__3147);
var options = cljs.core.rest(arglist__3147);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__3148__delegate = function (args){
var temp__3971__auto__ = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem),args,null);
if(cljs.core.truth_(temp__3971__auto__))
{var v = temp__3971__auto__;
return v;
} else
{var ret = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,args,ret);
return ret;
}
};
var G__3148 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3148__delegate.call(this, args);
};
G__3148.cljs$lang$maxFixedArity = 0;
G__3148.cljs$lang$applyTo = (function (arglist__3149){
var args = cljs.core.seq(arglist__3149);;
return G__3148__delegate(args);
});
G__3148.cljs$lang$arity$variadic = G__3148__delegate;
return G__3148;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret))
{{
var G__3150 = ret;
f = G__3150;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__3151__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3151 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3151__delegate.call(this, f, args);
};
G__3151.cljs$lang$maxFixedArity = 1;
G__3151.cljs$lang$applyTo = (function (arglist__3152){
var f = cljs.core.first(arglist__3152);
var args = cljs.core.rest(arglist__3152);
return G__3151__delegate(f, args);
});
G__3151.cljs$lang$arity$variadic = G__3151__delegate;
return G__3151;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k = f.call(null,x);
return cljs.core.assoc.call(null,ret,k,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto__ = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{var and__3822__auto__ = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto__)
{var and__3822__auto____$1 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____$1)
{var and__3822__auto____$2 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____$2)
{var ret = true;
var i = 0;
while(true){
if((function (){var or__3824__auto____$2 = cljs.core.not.call(null,ret);
if(or__3824__auto____$2)
{return or__3824__auto____$2;
} else
{return (i === cljs.core.count.call(null,parent));
}
})())
{return ret;
} else
{{
var G__3153 = isa_QMARK_.call(null,h,child.call(null,i),parent.call(null,i));
var G__3154 = (i + 1);
ret = G__3153;
i = G__3154;
continue;
}
}
break;
}
} else
{return and__3822__auto____$2;
}
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6984))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6988))))].join('')));
}
var tp = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto__ = ((cljs.core.contains_QMARK_.call(null,tp.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td,parent,ta),"\uFDD0'descendants":tf.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta,tag,td)});
})());
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents = (cljs.core.truth_(parentMap.call(null,tag))?cljs.core.disj.call(null,parentMap.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents))?cljs.core.assoc.call(null,parentMap,tag,childsParents):cljs.core.dissoc.call(null,parentMap,tag));
var deriv_seq = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3155_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3155_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3155_SHARP_),cljs.core.second.call(null,p1__3155_SHARP_)));
}),cljs.core.seq.call(null,newParents)));
if(cljs.core.contains_QMARK_.call(null,parentMap.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__3156_SHARP_,p2__3157_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3156_SHARP_,p2__3157_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto__ = (cljs.core.truth_((function (){var and__3822__auto__ = xprefs;
if(cljs.core.truth_(and__3822__auto__))
{return xprefs.call(null,y);
} else
{return and__3822__auto__;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (function (){var ps = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps),prefer_table)))
{} else
{}
{
var G__3158 = cljs.core.rest.call(null,ps);
ps = G__3158;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____$1))
{return or__3824__auto____$1;
} else
{var or__3824__auto____$2 = (function (){var ps = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps),y,prefer_table)))
{} else
{}
{
var G__3159 = cljs.core.rest.call(null,ps);
ps = G__3159;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____$2))
{return or__3824__auto____$2;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto__ = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = cljs.core.reduce.call(null,(function (be,p__3162){
var vec__3163 = p__3162;
var k = cljs.core.nth.call(null,vec__3163,0,null);
var _ = cljs.core.nth.call(null,vec__3163,1,null);
var e = vec__3163;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k))
{var be2 = (cljs.core.truth_((function (){var or__3824__auto__ = (be == null);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return cljs.core.dominates.call(null,k,cljs.core.first.call(null,be),prefer_table);
}
})())?e:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2),k,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry));
return cljs.core.second.call(null,best_entry);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto__ = mf;
if(and__3822__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2003__auto__ = (((mf == null))?null:mf);
return (function (){var or__3824__auto__ = (cljs.core._reset[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._reset["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto__ = mf;
if(and__3822__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2003__auto__ = (((mf == null))?null:mf);
return (function (){var or__3824__auto__ = (cljs.core._add_method[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._add_method["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto__ = mf;
if(and__3822__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2003__auto__ = (((mf == null))?null:mf);
return (function (){var or__3824__auto__ = (cljs.core._remove_method[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._remove_method["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto__ = mf;
if(and__3822__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2003__auto__ = (((mf == null))?null:mf);
return (function (){var or__3824__auto__ = (cljs.core._prefer_method[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto__ = mf;
if(and__3822__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2003__auto__ = (((mf == null))?null:mf);
return (function (){var or__3824__auto__ = (cljs.core._get_method[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._get_method["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto__ = mf;
if(and__3822__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2003__auto__ = (((mf == null))?null:mf);
return (function (){var or__3824__auto__ = (cljs.core._methods[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._methods["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto__ = mf;
if(and__3822__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2003__auto__ = (((mf == null))?null:mf);
return (function (){var or__3824__auto__ = (cljs.core._prefers[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._prefers["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto__ = mf;
if(and__3822__auto__)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2003__auto__ = (((mf == null))?null:mf);
return (function (){var or__3824__auto__ = (cljs.core._dispatch[goog.typeOf(x__2003__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (cljs.core._dispatch["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join('')));
}
return cljs.core.apply.call(null,target_fn,args);
});
goog.provide('cljs.core.MultiFn');

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var self__ = this;
cljs.core.swap_BANG_.call(null,self__.method_table,(function (mf__$1){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,self__.method_cache,(function (mf__$1){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,self__.prefer_table,(function (mf__$1){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,self__.cached_hierarchy,(function (mf__$1){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var self__ = this;
cljs.core.swap_BANG_.call(null,self__.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
cljs.core.swap_BANG_.call(null,self__.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.cached_hierarchy),cljs.core.deref.call(null,self__.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__3971__auto__ = cljs.core.deref.call(null,self__.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto__))
{var target_fn = temp__3971__auto__;
return target_fn;
} else
{var temp__3971__auto____$1 = cljs.core.find_and_cache_best_method.call(null,self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____$1))
{var target_fn = temp__3971__auto____$1;
return target_fn;
} else
{return cljs.core.deref.call(null,self__.method_table).call(null,self__.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var self__ = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,self__.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,self__.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var self__ = this;
return cljs.core.deref.call(null,self__.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
return cljs.core.deref.call(null,self__.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var self__ = this;
return cljs.core.do_dispatch.call(null,mf,self__.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3164__delegate = function (_,args){
var self = this;
return cljs.core._dispatch.call(null,self,args);
};
var G__3164 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3164__delegate.call(this, _, args);
};
G__3164.cljs$lang$maxFixedArity = 1;
G__3164.cljs$lang$applyTo = (function (arglist__3165){
var _ = cljs.core.first(arglist__3165);
var args = cljs.core.rest(arglist__3165);
return G__3164__delegate(_, args);
});
G__3164.cljs$lang$arity$variadic = G__3164__delegate;
return G__3164;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self = this;
return cljs.core._dispatch.call(null,self,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
goog.provide('cljs.core.UUID');

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690646016;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__1943__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__1943__auto__,writer__1944__auto__,opt__1945__auto__){
return cljs.core._write.call(null,writer__1944__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_,___$1){
var self__ = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var and__3822__auto__ = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto__)
{return (self__.uuid === other.uuid);
} else
{return and__3822__auto__;
}
});
cljs.core.UUID.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
