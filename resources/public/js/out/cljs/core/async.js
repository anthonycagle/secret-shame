// Compiled by ClojureScript 0.0-2268
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10734 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10734 = (function (f,fn_handler,meta10735){
this.f = f;
this.fn_handler = fn_handler;
this.meta10735 = meta10735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10734.cljs$lang$type = true;
cljs.core.async.t10734.cljs$lang$ctorStr = "cljs.core.async/t10734";
cljs.core.async.t10734.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10734");
});
cljs.core.async.t10734.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10736){var self__ = this;
var _10736__$1 = this;return self__.meta10735;
});
cljs.core.async.t10734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10736,meta10735__$1){var self__ = this;
var _10736__$1 = this;return (new cljs.core.async.t10734(self__.f,self__.fn_handler,meta10735__$1));
});
cljs.core.async.__GT_t10734 = (function __GT_t10734(f__$1,fn_handler__$1,meta10735){return (new cljs.core.async.t10734(f__$1,fn_handler__$1,meta10735));
});
}
return (new cljs.core.async.t10734(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10738 = buff;if(G__10738)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__10738.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10738.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10738);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10738);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10739 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10739);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10739,ret){
return (function (){return fn1.call(null,val_10739);
});})(val_10739,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4416__auto___10740 = n;var x_10741 = (0);while(true){
if((x_10741 < n__4416__auto___10740))
{(a[x_10741] = (0));
{
var G__10742 = (x_10741 + (1));
x_10741 = G__10742;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10743 = (i + (1));
i = G__10743;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10747 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10747 = (function (flag,alt_flag,meta10748){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10748 = meta10748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10747.cljs$lang$type = true;
cljs.core.async.t10747.cljs$lang$ctorStr = "cljs.core.async/t10747";
cljs.core.async.t10747.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10747");
});})(flag))
;
cljs.core.async.t10747.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10747.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10749){var self__ = this;
var _10749__$1 = this;return self__.meta10748;
});})(flag))
;
cljs.core.async.t10747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10749,meta10748__$1){var self__ = this;
var _10749__$1 = this;return (new cljs.core.async.t10747(self__.flag,self__.alt_flag,meta10748__$1));
});})(flag))
;
cljs.core.async.__GT_t10747 = ((function (flag){
return (function __GT_t10747(flag__$1,alt_flag__$1,meta10748){return (new cljs.core.async.t10747(flag__$1,alt_flag__$1,meta10748));
});})(flag))
;
}
return (new cljs.core.async.t10747(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10753 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10753 = (function (cb,flag,alt_handler,meta10754){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10754 = meta10754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10753.cljs$lang$type = true;
cljs.core.async.t10753.cljs$lang$ctorStr = "cljs.core.async/t10753";
cljs.core.async.t10753.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10753");
});
cljs.core.async.t10753.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10755){var self__ = this;
var _10755__$1 = this;return self__.meta10754;
});
cljs.core.async.t10753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10755,meta10754__$1){var self__ = this;
var _10755__$1 = this;return (new cljs.core.async.t10753(self__.cb,self__.flag,self__.alt_handler,meta10754__$1));
});
cljs.core.async.__GT_t10753 = (function __GT_t10753(cb__$1,flag__$1,alt_handler__$1,meta10754){return (new cljs.core.async.t10753(cb__$1,flag__$1,alt_handler__$1,meta10754));
});
}
return (new cljs.core.async.t10753(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10756_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10756_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10757_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10757_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3560__auto__ = wport;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10758 = (i + (1));
i = G__10758;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3560__auto__ = ret;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3548__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3548__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3548__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10759){var map__10761 = p__10759;var map__10761__$1 = ((cljs.core.seq_QMARK_.call(null,map__10761))?cljs.core.apply.call(null,cljs.core.hash_map,map__10761):map__10761);var opts = map__10761__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10759 = null;if (arguments.length > 1) {
  p__10759 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10759);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10762){
var ports = cljs.core.first(arglist__10762);
var p__10759 = cljs.core.rest(arglist__10762);
return alts_BANG___delegate(ports,p__10759);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10770 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10770 = (function (ch,f,map_LT_,meta10771){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10771 = meta10771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10770.cljs$lang$type = true;
cljs.core.async.t10770.cljs$lang$ctorStr = "cljs.core.async/t10770";
cljs.core.async.t10770.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10770");
});
cljs.core.async.t10770.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10770.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10770.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10770.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10773 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10773 = (function (fn1,_,meta10771,ch,f,map_LT_,meta10774){
this.fn1 = fn1;
this._ = _;
this.meta10771 = meta10771;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10774 = meta10774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10773.cljs$lang$type = true;
cljs.core.async.t10773.cljs$lang$ctorStr = "cljs.core.async/t10773";
cljs.core.async.t10773.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10773");
});})(___$1))
;
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10763_SHARP_){return f1.call(null,(((p1__10763_SHARP_ == null))?null:self__.f.call(null,p1__10763_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10775){var self__ = this;
var _10775__$1 = this;return self__.meta10774;
});})(___$1))
;
cljs.core.async.t10773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10775,meta10774__$1){var self__ = this;
var _10775__$1 = this;return (new cljs.core.async.t10773(self__.fn1,self__._,self__.meta10771,self__.ch,self__.f,self__.map_LT_,meta10774__$1));
});})(___$1))
;
cljs.core.async.__GT_t10773 = ((function (___$1){
return (function __GT_t10773(fn1__$1,___$2,meta10771__$1,ch__$2,f__$2,map_LT___$2,meta10774){return (new cljs.core.async.t10773(fn1__$1,___$2,meta10771__$1,ch__$2,f__$2,map_LT___$2,meta10774));
});})(___$1))
;
}
return (new cljs.core.async.t10773(fn1,___$1,self__.meta10771,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3548__auto__ = ret;if(cljs.core.truth_(and__3548__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3548__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10770.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10770.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10770.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10772){var self__ = this;
var _10772__$1 = this;return self__.meta10771;
});
cljs.core.async.t10770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10772,meta10771__$1){var self__ = this;
var _10772__$1 = this;return (new cljs.core.async.t10770(self__.ch,self__.f,self__.map_LT_,meta10771__$1));
});
cljs.core.async.__GT_t10770 = (function __GT_t10770(ch__$1,f__$1,map_LT___$1,meta10771){return (new cljs.core.async.t10770(ch__$1,f__$1,map_LT___$1,meta10771));
});
}
return (new cljs.core.async.t10770(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10779 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10779 = (function (ch,f,map_GT_,meta10780){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10780 = meta10780;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10779.cljs$lang$type = true;
cljs.core.async.t10779.cljs$lang$ctorStr = "cljs.core.async/t10779";
cljs.core.async.t10779.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10779");
});
cljs.core.async.t10779.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10779.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10779.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10779.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10779.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10779.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10781){var self__ = this;
var _10781__$1 = this;return self__.meta10780;
});
cljs.core.async.t10779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10781,meta10780__$1){var self__ = this;
var _10781__$1 = this;return (new cljs.core.async.t10779(self__.ch,self__.f,self__.map_GT_,meta10780__$1));
});
cljs.core.async.__GT_t10779 = (function __GT_t10779(ch__$1,f__$1,map_GT___$1,meta10780){return (new cljs.core.async.t10779(ch__$1,f__$1,map_GT___$1,meta10780));
});
}
return (new cljs.core.async.t10779(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10785 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10785 = (function (ch,p,filter_GT_,meta10786){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10786 = meta10786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10785.cljs$lang$type = true;
cljs.core.async.t10785.cljs$lang$ctorStr = "cljs.core.async/t10785";
cljs.core.async.t10785.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10785");
});
cljs.core.async.t10785.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10785.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10785.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10785.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10785.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10785.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10785.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10787){var self__ = this;
var _10787__$1 = this;return self__.meta10786;
});
cljs.core.async.t10785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10787,meta10786__$1){var self__ = this;
var _10787__$1 = this;return (new cljs.core.async.t10785(self__.ch,self__.p,self__.filter_GT_,meta10786__$1));
});
cljs.core.async.__GT_t10785 = (function __GT_t10785(ch__$1,p__$1,filter_GT___$1,meta10786){return (new cljs.core.async.t10785(ch__$1,p__$1,filter_GT___$1,meta10786));
});
}
return (new cljs.core.async.t10785(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5725__auto___10870 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___10870,out){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___10870,out){
return (function (state_10849){var state_val_10850 = (state_10849[(1)]);if((state_val_10850 === (7)))
{var inst_10845 = (state_10849[(2)]);var state_10849__$1 = state_10849;var statearr_10851_10871 = state_10849__$1;(statearr_10851_10871[(2)] = inst_10845);
(statearr_10851_10871[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10850 === (1)))
{var state_10849__$1 = state_10849;var statearr_10852_10872 = state_10849__$1;(statearr_10852_10872[(2)] = null);
(statearr_10852_10872[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10850 === (4)))
{var inst_10831 = (state_10849[(7)]);var inst_10831__$1 = (state_10849[(2)]);var inst_10832 = (inst_10831__$1 == null);var state_10849__$1 = (function (){var statearr_10853 = state_10849;(statearr_10853[(7)] = inst_10831__$1);
return statearr_10853;
})();if(cljs.core.truth_(inst_10832))
{var statearr_10854_10873 = state_10849__$1;(statearr_10854_10873[(1)] = (5));
} else
{var statearr_10855_10874 = state_10849__$1;(statearr_10855_10874[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10850 === (6)))
{var inst_10831 = (state_10849[(7)]);var inst_10836 = p.call(null,inst_10831);var state_10849__$1 = state_10849;if(cljs.core.truth_(inst_10836))
{var statearr_10856_10875 = state_10849__$1;(statearr_10856_10875[(1)] = (8));
} else
{var statearr_10857_10876 = state_10849__$1;(statearr_10857_10876[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10850 === (3)))
{var inst_10847 = (state_10849[(2)]);var state_10849__$1 = state_10849;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10849__$1,inst_10847);
} else
{if((state_val_10850 === (2)))
{var state_10849__$1 = state_10849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10849__$1,(4),ch);
} else
{if((state_val_10850 === (11)))
{var inst_10839 = (state_10849[(2)]);var state_10849__$1 = state_10849;var statearr_10858_10877 = state_10849__$1;(statearr_10858_10877[(2)] = inst_10839);
(statearr_10858_10877[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10850 === (9)))
{var state_10849__$1 = state_10849;var statearr_10859_10878 = state_10849__$1;(statearr_10859_10878[(2)] = null);
(statearr_10859_10878[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10850 === (5)))
{var inst_10834 = cljs.core.async.close_BANG_.call(null,out);var state_10849__$1 = state_10849;var statearr_10860_10879 = state_10849__$1;(statearr_10860_10879[(2)] = inst_10834);
(statearr_10860_10879[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10850 === (10)))
{var inst_10842 = (state_10849[(2)]);var state_10849__$1 = (function (){var statearr_10861 = state_10849;(statearr_10861[(8)] = inst_10842);
return statearr_10861;
})();var statearr_10862_10880 = state_10849__$1;(statearr_10862_10880[(2)] = null);
(statearr_10862_10880[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10850 === (8)))
{var inst_10831 = (state_10849[(7)]);var state_10849__$1 = state_10849;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10849__$1,(11),out,inst_10831);
} else
{return null;
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
});})(c__5725__auto___10870,out))
;return ((function (switch__5710__auto__,c__5725__auto___10870,out){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_10866 = [null,null,null,null,null,null,null,null,null];(statearr_10866[(0)] = state_machine__5711__auto__);
(statearr_10866[(1)] = (1));
return statearr_10866;
});
var state_machine__5711__auto____1 = (function (state_10849){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_10849);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e10867){if((e10867 instanceof Object))
{var ex__5714__auto__ = e10867;var statearr_10868_10881 = state_10849;(statearr_10868_10881[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10849);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10882 = state_10849;
state_10849 = G__10882;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_10849){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_10849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___10870,out))
})();var state__5727__auto__ = (function (){var statearr_10869 = f__5726__auto__.call(null);(statearr_10869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___10870);
return statearr_10869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___10870,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5725__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto__){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto__){
return (function (state_11048){var state_val_11049 = (state_11048[(1)]);if((state_val_11049 === (7)))
{var inst_11044 = (state_11048[(2)]);var state_11048__$1 = state_11048;var statearr_11050_11091 = state_11048__$1;(statearr_11050_11091[(2)] = inst_11044);
(statearr_11050_11091[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (20)))
{var inst_11014 = (state_11048[(7)]);var inst_11025 = (state_11048[(2)]);var inst_11026 = cljs.core.next.call(null,inst_11014);var inst_11000 = inst_11026;var inst_11001 = null;var inst_11002 = (0);var inst_11003 = (0);var state_11048__$1 = (function (){var statearr_11051 = state_11048;(statearr_11051[(8)] = inst_11003);
(statearr_11051[(9)] = inst_11025);
(statearr_11051[(10)] = inst_11000);
(statearr_11051[(11)] = inst_11002);
(statearr_11051[(12)] = inst_11001);
return statearr_11051;
})();var statearr_11052_11092 = state_11048__$1;(statearr_11052_11092[(2)] = null);
(statearr_11052_11092[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (1)))
{var state_11048__$1 = state_11048;var statearr_11053_11093 = state_11048__$1;(statearr_11053_11093[(2)] = null);
(statearr_11053_11093[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (4)))
{var inst_10989 = (state_11048[(13)]);var inst_10989__$1 = (state_11048[(2)]);var inst_10990 = (inst_10989__$1 == null);var state_11048__$1 = (function (){var statearr_11054 = state_11048;(statearr_11054[(13)] = inst_10989__$1);
return statearr_11054;
})();if(cljs.core.truth_(inst_10990))
{var statearr_11055_11094 = state_11048__$1;(statearr_11055_11094[(1)] = (5));
} else
{var statearr_11056_11095 = state_11048__$1;(statearr_11056_11095[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (15)))
{var state_11048__$1 = state_11048;var statearr_11060_11096 = state_11048__$1;(statearr_11060_11096[(2)] = null);
(statearr_11060_11096[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (21)))
{var state_11048__$1 = state_11048;var statearr_11061_11097 = state_11048__$1;(statearr_11061_11097[(2)] = null);
(statearr_11061_11097[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (13)))
{var inst_11003 = (state_11048[(8)]);var inst_11000 = (state_11048[(10)]);var inst_11002 = (state_11048[(11)]);var inst_11001 = (state_11048[(12)]);var inst_11010 = (state_11048[(2)]);var inst_11011 = (inst_11003 + (1));var tmp11057 = inst_11000;var tmp11058 = inst_11002;var tmp11059 = inst_11001;var inst_11000__$1 = tmp11057;var inst_11001__$1 = tmp11059;var inst_11002__$1 = tmp11058;var inst_11003__$1 = inst_11011;var state_11048__$1 = (function (){var statearr_11062 = state_11048;(statearr_11062[(14)] = inst_11010);
(statearr_11062[(8)] = inst_11003__$1);
(statearr_11062[(10)] = inst_11000__$1);
(statearr_11062[(11)] = inst_11002__$1);
(statearr_11062[(12)] = inst_11001__$1);
return statearr_11062;
})();var statearr_11063_11098 = state_11048__$1;(statearr_11063_11098[(2)] = null);
(statearr_11063_11098[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (22)))
{var state_11048__$1 = state_11048;var statearr_11064_11099 = state_11048__$1;(statearr_11064_11099[(2)] = null);
(statearr_11064_11099[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (6)))
{var inst_10989 = (state_11048[(13)]);var inst_10998 = f.call(null,inst_10989);var inst_10999 = cljs.core.seq.call(null,inst_10998);var inst_11000 = inst_10999;var inst_11001 = null;var inst_11002 = (0);var inst_11003 = (0);var state_11048__$1 = (function (){var statearr_11065 = state_11048;(statearr_11065[(8)] = inst_11003);
(statearr_11065[(10)] = inst_11000);
(statearr_11065[(11)] = inst_11002);
(statearr_11065[(12)] = inst_11001);
return statearr_11065;
})();var statearr_11066_11100 = state_11048__$1;(statearr_11066_11100[(2)] = null);
(statearr_11066_11100[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (17)))
{var inst_11014 = (state_11048[(7)]);var inst_11018 = cljs.core.chunk_first.call(null,inst_11014);var inst_11019 = cljs.core.chunk_rest.call(null,inst_11014);var inst_11020 = cljs.core.count.call(null,inst_11018);var inst_11000 = inst_11019;var inst_11001 = inst_11018;var inst_11002 = inst_11020;var inst_11003 = (0);var state_11048__$1 = (function (){var statearr_11067 = state_11048;(statearr_11067[(8)] = inst_11003);
(statearr_11067[(10)] = inst_11000);
(statearr_11067[(11)] = inst_11002);
(statearr_11067[(12)] = inst_11001);
return statearr_11067;
})();var statearr_11068_11101 = state_11048__$1;(statearr_11068_11101[(2)] = null);
(statearr_11068_11101[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (3)))
{var inst_11046 = (state_11048[(2)]);var state_11048__$1 = state_11048;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11048__$1,inst_11046);
} else
{if((state_val_11049 === (12)))
{var inst_11034 = (state_11048[(2)]);var state_11048__$1 = state_11048;var statearr_11069_11102 = state_11048__$1;(statearr_11069_11102[(2)] = inst_11034);
(statearr_11069_11102[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (2)))
{var state_11048__$1 = state_11048;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11048__$1,(4),in$);
} else
{if((state_val_11049 === (23)))
{var inst_11042 = (state_11048[(2)]);var state_11048__$1 = state_11048;var statearr_11070_11103 = state_11048__$1;(statearr_11070_11103[(2)] = inst_11042);
(statearr_11070_11103[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (19)))
{var inst_11029 = (state_11048[(2)]);var state_11048__$1 = state_11048;var statearr_11071_11104 = state_11048__$1;(statearr_11071_11104[(2)] = inst_11029);
(statearr_11071_11104[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (11)))
{var inst_11014 = (state_11048[(7)]);var inst_11000 = (state_11048[(10)]);var inst_11014__$1 = cljs.core.seq.call(null,inst_11000);var state_11048__$1 = (function (){var statearr_11072 = state_11048;(statearr_11072[(7)] = inst_11014__$1);
return statearr_11072;
})();if(inst_11014__$1)
{var statearr_11073_11105 = state_11048__$1;(statearr_11073_11105[(1)] = (14));
} else
{var statearr_11074_11106 = state_11048__$1;(statearr_11074_11106[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (9)))
{var inst_11036 = (state_11048[(2)]);var inst_11037 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11048__$1 = (function (){var statearr_11075 = state_11048;(statearr_11075[(15)] = inst_11036);
return statearr_11075;
})();if(cljs.core.truth_(inst_11037))
{var statearr_11076_11107 = state_11048__$1;(statearr_11076_11107[(1)] = (21));
} else
{var statearr_11077_11108 = state_11048__$1;(statearr_11077_11108[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (5)))
{var inst_10992 = cljs.core.async.close_BANG_.call(null,out);var state_11048__$1 = state_11048;var statearr_11078_11109 = state_11048__$1;(statearr_11078_11109[(2)] = inst_10992);
(statearr_11078_11109[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (14)))
{var inst_11014 = (state_11048[(7)]);var inst_11016 = cljs.core.chunked_seq_QMARK_.call(null,inst_11014);var state_11048__$1 = state_11048;if(inst_11016)
{var statearr_11079_11110 = state_11048__$1;(statearr_11079_11110[(1)] = (17));
} else
{var statearr_11080_11111 = state_11048__$1;(statearr_11080_11111[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (16)))
{var inst_11032 = (state_11048[(2)]);var state_11048__$1 = state_11048;var statearr_11081_11112 = state_11048__$1;(statearr_11081_11112[(2)] = inst_11032);
(statearr_11081_11112[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11049 === (10)))
{var inst_11003 = (state_11048[(8)]);var inst_11001 = (state_11048[(12)]);var inst_11008 = cljs.core._nth.call(null,inst_11001,inst_11003);var state_11048__$1 = state_11048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11048__$1,(13),out,inst_11008);
} else
{if((state_val_11049 === (18)))
{var inst_11014 = (state_11048[(7)]);var inst_11023 = cljs.core.first.call(null,inst_11014);var state_11048__$1 = state_11048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11048__$1,(20),out,inst_11023);
} else
{if((state_val_11049 === (8)))
{var inst_11003 = (state_11048[(8)]);var inst_11002 = (state_11048[(11)]);var inst_11005 = (inst_11003 < inst_11002);var inst_11006 = inst_11005;var state_11048__$1 = state_11048;if(cljs.core.truth_(inst_11006))
{var statearr_11082_11113 = state_11048__$1;(statearr_11082_11113[(1)] = (10));
} else
{var statearr_11083_11114 = state_11048__$1;(statearr_11083_11114[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
}
}
});})(c__5725__auto__))
;return ((function (switch__5710__auto__,c__5725__auto__){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_11087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11087[(0)] = state_machine__5711__auto__);
(statearr_11087[(1)] = (1));
return statearr_11087;
});
var state_machine__5711__auto____1 = (function (state_11048){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11048);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11088){if((e11088 instanceof Object))
{var ex__5714__auto__ = e11088;var statearr_11089_11115 = state_11048;(statearr_11089_11115[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11048);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11116 = state_11048;
state_11048 = G__11116;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11048){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto__))
})();var state__5727__auto__ = (function (){var statearr_11090 = f__5726__auto__.call(null);(statearr_11090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto__);
return statearr_11090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto__))
);
return c__5725__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5725__auto___11211 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___11211){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___11211){
return (function (state_11187){var state_val_11188 = (state_11187[(1)]);if((state_val_11188 === (7)))
{var inst_11183 = (state_11187[(2)]);var state_11187__$1 = state_11187;var statearr_11189_11212 = state_11187__$1;(statearr_11189_11212[(2)] = inst_11183);
(statearr_11189_11212[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11188 === (1)))
{var state_11187__$1 = state_11187;var statearr_11190_11213 = state_11187__$1;(statearr_11190_11213[(2)] = null);
(statearr_11190_11213[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11188 === (4)))
{var inst_11166 = (state_11187[(7)]);var inst_11166__$1 = (state_11187[(2)]);var inst_11167 = (inst_11166__$1 == null);var state_11187__$1 = (function (){var statearr_11191 = state_11187;(statearr_11191[(7)] = inst_11166__$1);
return statearr_11191;
})();if(cljs.core.truth_(inst_11167))
{var statearr_11192_11214 = state_11187__$1;(statearr_11192_11214[(1)] = (5));
} else
{var statearr_11193_11215 = state_11187__$1;(statearr_11193_11215[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11188 === (13)))
{var state_11187__$1 = state_11187;var statearr_11194_11216 = state_11187__$1;(statearr_11194_11216[(2)] = null);
(statearr_11194_11216[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11188 === (6)))
{var inst_11166 = (state_11187[(7)]);var state_11187__$1 = state_11187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11187__$1,(11),to,inst_11166);
} else
{if((state_val_11188 === (3)))
{var inst_11185 = (state_11187[(2)]);var state_11187__$1 = state_11187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11187__$1,inst_11185);
} else
{if((state_val_11188 === (12)))
{var state_11187__$1 = state_11187;var statearr_11195_11217 = state_11187__$1;(statearr_11195_11217[(2)] = null);
(statearr_11195_11217[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11188 === (2)))
{var state_11187__$1 = state_11187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11187__$1,(4),from);
} else
{if((state_val_11188 === (11)))
{var inst_11176 = (state_11187[(2)]);var state_11187__$1 = state_11187;if(cljs.core.truth_(inst_11176))
{var statearr_11196_11218 = state_11187__$1;(statearr_11196_11218[(1)] = (12));
} else
{var statearr_11197_11219 = state_11187__$1;(statearr_11197_11219[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11188 === (9)))
{var state_11187__$1 = state_11187;var statearr_11198_11220 = state_11187__$1;(statearr_11198_11220[(2)] = null);
(statearr_11198_11220[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11188 === (5)))
{var state_11187__$1 = state_11187;if(cljs.core.truth_(close_QMARK_))
{var statearr_11199_11221 = state_11187__$1;(statearr_11199_11221[(1)] = (8));
} else
{var statearr_11200_11222 = state_11187__$1;(statearr_11200_11222[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11188 === (14)))
{var inst_11181 = (state_11187[(2)]);var state_11187__$1 = state_11187;var statearr_11201_11223 = state_11187__$1;(statearr_11201_11223[(2)] = inst_11181);
(statearr_11201_11223[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11188 === (10)))
{var inst_11173 = (state_11187[(2)]);var state_11187__$1 = state_11187;var statearr_11202_11224 = state_11187__$1;(statearr_11202_11224[(2)] = inst_11173);
(statearr_11202_11224[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11188 === (8)))
{var inst_11170 = cljs.core.async.close_BANG_.call(null,to);var state_11187__$1 = state_11187;var statearr_11203_11225 = state_11187__$1;(statearr_11203_11225[(2)] = inst_11170);
(statearr_11203_11225[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5725__auto___11211))
;return ((function (switch__5710__auto__,c__5725__auto___11211){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_11207 = [null,null,null,null,null,null,null,null];(statearr_11207[(0)] = state_machine__5711__auto__);
(statearr_11207[(1)] = (1));
return statearr_11207;
});
var state_machine__5711__auto____1 = (function (state_11187){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11187);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11208){if((e11208 instanceof Object))
{var ex__5714__auto__ = e11208;var statearr_11209_11226 = state_11187;(statearr_11209_11226[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11227 = state_11187;
state_11187 = G__11227;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11187){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___11211))
})();var state__5727__auto__ = (function (){var statearr_11210 = f__5726__auto__.call(null);(statearr_11210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___11211);
return statearr_11210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___11211))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5725__auto___11328 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___11328,tc,fc){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___11328,tc,fc){
return (function (state_11303){var state_val_11304 = (state_11303[(1)]);if((state_val_11304 === (7)))
{var inst_11299 = (state_11303[(2)]);var state_11303__$1 = state_11303;var statearr_11305_11329 = state_11303__$1;(statearr_11305_11329[(2)] = inst_11299);
(statearr_11305_11329[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (1)))
{var state_11303__$1 = state_11303;var statearr_11306_11330 = state_11303__$1;(statearr_11306_11330[(2)] = null);
(statearr_11306_11330[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (4)))
{var inst_11280 = (state_11303[(7)]);var inst_11280__$1 = (state_11303[(2)]);var inst_11281 = (inst_11280__$1 == null);var state_11303__$1 = (function (){var statearr_11307 = state_11303;(statearr_11307[(7)] = inst_11280__$1);
return statearr_11307;
})();if(cljs.core.truth_(inst_11281))
{var statearr_11308_11331 = state_11303__$1;(statearr_11308_11331[(1)] = (5));
} else
{var statearr_11309_11332 = state_11303__$1;(statearr_11309_11332[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (13)))
{var state_11303__$1 = state_11303;var statearr_11310_11333 = state_11303__$1;(statearr_11310_11333[(2)] = null);
(statearr_11310_11333[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (6)))
{var inst_11280 = (state_11303[(7)]);var inst_11286 = p.call(null,inst_11280);var state_11303__$1 = state_11303;if(cljs.core.truth_(inst_11286))
{var statearr_11311_11334 = state_11303__$1;(statearr_11311_11334[(1)] = (9));
} else
{var statearr_11312_11335 = state_11303__$1;(statearr_11312_11335[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (3)))
{var inst_11301 = (state_11303[(2)]);var state_11303__$1 = state_11303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11303__$1,inst_11301);
} else
{if((state_val_11304 === (12)))
{var state_11303__$1 = state_11303;var statearr_11313_11336 = state_11303__$1;(statearr_11313_11336[(2)] = null);
(statearr_11313_11336[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (2)))
{var state_11303__$1 = state_11303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11303__$1,(4),ch);
} else
{if((state_val_11304 === (11)))
{var inst_11280 = (state_11303[(7)]);var inst_11290 = (state_11303[(2)]);var state_11303__$1 = state_11303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11303__$1,(8),inst_11290,inst_11280);
} else
{if((state_val_11304 === (9)))
{var state_11303__$1 = state_11303;var statearr_11314_11337 = state_11303__$1;(statearr_11314_11337[(2)] = tc);
(statearr_11314_11337[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (5)))
{var inst_11283 = cljs.core.async.close_BANG_.call(null,tc);var inst_11284 = cljs.core.async.close_BANG_.call(null,fc);var state_11303__$1 = (function (){var statearr_11315 = state_11303;(statearr_11315[(8)] = inst_11283);
return statearr_11315;
})();var statearr_11316_11338 = state_11303__$1;(statearr_11316_11338[(2)] = inst_11284);
(statearr_11316_11338[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (14)))
{var inst_11297 = (state_11303[(2)]);var state_11303__$1 = state_11303;var statearr_11317_11339 = state_11303__$1;(statearr_11317_11339[(2)] = inst_11297);
(statearr_11317_11339[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (10)))
{var state_11303__$1 = state_11303;var statearr_11318_11340 = state_11303__$1;(statearr_11318_11340[(2)] = fc);
(statearr_11318_11340[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (8)))
{var inst_11292 = (state_11303[(2)]);var state_11303__$1 = state_11303;if(cljs.core.truth_(inst_11292))
{var statearr_11319_11341 = state_11303__$1;(statearr_11319_11341[(1)] = (12));
} else
{var statearr_11320_11342 = state_11303__$1;(statearr_11320_11342[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5725__auto___11328,tc,fc))
;return ((function (switch__5710__auto__,c__5725__auto___11328,tc,fc){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_11324 = [null,null,null,null,null,null,null,null,null];(statearr_11324[(0)] = state_machine__5711__auto__);
(statearr_11324[(1)] = (1));
return statearr_11324;
});
var state_machine__5711__auto____1 = (function (state_11303){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11303);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11325){if((e11325 instanceof Object))
{var ex__5714__auto__ = e11325;var statearr_11326_11343 = state_11303;(statearr_11326_11343[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11303);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11344 = state_11303;
state_11303 = G__11344;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11303){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___11328,tc,fc))
})();var state__5727__auto__ = (function (){var statearr_11327 = f__5726__auto__.call(null);(statearr_11327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___11328);
return statearr_11327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___11328,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5725__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto__){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto__){
return (function (state_11391){var state_val_11392 = (state_11391[(1)]);if((state_val_11392 === (7)))
{var inst_11387 = (state_11391[(2)]);var state_11391__$1 = state_11391;var statearr_11393_11409 = state_11391__$1;(statearr_11393_11409[(2)] = inst_11387);
(statearr_11393_11409[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11392 === (6)))
{var inst_11377 = (state_11391[(7)]);var inst_11380 = (state_11391[(8)]);var inst_11384 = f.call(null,inst_11377,inst_11380);var inst_11377__$1 = inst_11384;var state_11391__$1 = (function (){var statearr_11394 = state_11391;(statearr_11394[(7)] = inst_11377__$1);
return statearr_11394;
})();var statearr_11395_11410 = state_11391__$1;(statearr_11395_11410[(2)] = null);
(statearr_11395_11410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11392 === (5)))
{var inst_11377 = (state_11391[(7)]);var state_11391__$1 = state_11391;var statearr_11396_11411 = state_11391__$1;(statearr_11396_11411[(2)] = inst_11377);
(statearr_11396_11411[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11392 === (4)))
{var inst_11380 = (state_11391[(8)]);var inst_11380__$1 = (state_11391[(2)]);var inst_11381 = (inst_11380__$1 == null);var state_11391__$1 = (function (){var statearr_11397 = state_11391;(statearr_11397[(8)] = inst_11380__$1);
return statearr_11397;
})();if(cljs.core.truth_(inst_11381))
{var statearr_11398_11412 = state_11391__$1;(statearr_11398_11412[(1)] = (5));
} else
{var statearr_11399_11413 = state_11391__$1;(statearr_11399_11413[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11392 === (3)))
{var inst_11389 = (state_11391[(2)]);var state_11391__$1 = state_11391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11391__$1,inst_11389);
} else
{if((state_val_11392 === (2)))
{var state_11391__$1 = state_11391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11391__$1,(4),ch);
} else
{if((state_val_11392 === (1)))
{var inst_11377 = init;var state_11391__$1 = (function (){var statearr_11400 = state_11391;(statearr_11400[(7)] = inst_11377);
return statearr_11400;
})();var statearr_11401_11414 = state_11391__$1;(statearr_11401_11414[(2)] = null);
(statearr_11401_11414[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5725__auto__))
;return ((function (switch__5710__auto__,c__5725__auto__){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_11405 = [null,null,null,null,null,null,null,null,null];(statearr_11405[(0)] = state_machine__5711__auto__);
(statearr_11405[(1)] = (1));
return statearr_11405;
});
var state_machine__5711__auto____1 = (function (state_11391){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11391);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11406){if((e11406 instanceof Object))
{var ex__5714__auto__ = e11406;var statearr_11407_11415 = state_11391;(statearr_11407_11415[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11391);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11406;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11416 = state_11391;
state_11391 = G__11416;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11391){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto__))
})();var state__5727__auto__ = (function (){var statearr_11408 = f__5726__auto__.call(null);(statearr_11408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto__);
return statearr_11408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto__))
);
return c__5725__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5725__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto__){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto__){
return (function (state_11490){var state_val_11491 = (state_11490[(1)]);if((state_val_11491 === (7)))
{var inst_11472 = (state_11490[(2)]);var state_11490__$1 = state_11490;var statearr_11492_11515 = state_11490__$1;(statearr_11492_11515[(2)] = inst_11472);
(statearr_11492_11515[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11491 === (1)))
{var inst_11466 = cljs.core.seq.call(null,coll);var inst_11467 = inst_11466;var state_11490__$1 = (function (){var statearr_11493 = state_11490;(statearr_11493[(7)] = inst_11467);
return statearr_11493;
})();var statearr_11494_11516 = state_11490__$1;(statearr_11494_11516[(2)] = null);
(statearr_11494_11516[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11491 === (4)))
{var inst_11467 = (state_11490[(7)]);var inst_11470 = cljs.core.first.call(null,inst_11467);var state_11490__$1 = state_11490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11490__$1,(7),ch,inst_11470);
} else
{if((state_val_11491 === (13)))
{var inst_11484 = (state_11490[(2)]);var state_11490__$1 = state_11490;var statearr_11495_11517 = state_11490__$1;(statearr_11495_11517[(2)] = inst_11484);
(statearr_11495_11517[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11491 === (6)))
{var inst_11475 = (state_11490[(2)]);var state_11490__$1 = state_11490;if(cljs.core.truth_(inst_11475))
{var statearr_11496_11518 = state_11490__$1;(statearr_11496_11518[(1)] = (8));
} else
{var statearr_11497_11519 = state_11490__$1;(statearr_11497_11519[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11491 === (3)))
{var inst_11488 = (state_11490[(2)]);var state_11490__$1 = state_11490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11490__$1,inst_11488);
} else
{if((state_val_11491 === (12)))
{var state_11490__$1 = state_11490;var statearr_11498_11520 = state_11490__$1;(statearr_11498_11520[(2)] = null);
(statearr_11498_11520[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11491 === (2)))
{var inst_11467 = (state_11490[(7)]);var state_11490__$1 = state_11490;if(cljs.core.truth_(inst_11467))
{var statearr_11499_11521 = state_11490__$1;(statearr_11499_11521[(1)] = (4));
} else
{var statearr_11500_11522 = state_11490__$1;(statearr_11500_11522[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11491 === (11)))
{var inst_11481 = cljs.core.async.close_BANG_.call(null,ch);var state_11490__$1 = state_11490;var statearr_11501_11523 = state_11490__$1;(statearr_11501_11523[(2)] = inst_11481);
(statearr_11501_11523[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11491 === (9)))
{var state_11490__$1 = state_11490;if(cljs.core.truth_(close_QMARK_))
{var statearr_11502_11524 = state_11490__$1;(statearr_11502_11524[(1)] = (11));
} else
{var statearr_11503_11525 = state_11490__$1;(statearr_11503_11525[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11491 === (5)))
{var inst_11467 = (state_11490[(7)]);var state_11490__$1 = state_11490;var statearr_11504_11526 = state_11490__$1;(statearr_11504_11526[(2)] = inst_11467);
(statearr_11504_11526[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11491 === (10)))
{var inst_11486 = (state_11490[(2)]);var state_11490__$1 = state_11490;var statearr_11505_11527 = state_11490__$1;(statearr_11505_11527[(2)] = inst_11486);
(statearr_11505_11527[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11491 === (8)))
{var inst_11467 = (state_11490[(7)]);var inst_11477 = cljs.core.next.call(null,inst_11467);var inst_11467__$1 = inst_11477;var state_11490__$1 = (function (){var statearr_11506 = state_11490;(statearr_11506[(7)] = inst_11467__$1);
return statearr_11506;
})();var statearr_11507_11528 = state_11490__$1;(statearr_11507_11528[(2)] = null);
(statearr_11507_11528[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5725__auto__))
;return ((function (switch__5710__auto__,c__5725__auto__){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_11511 = [null,null,null,null,null,null,null,null];(statearr_11511[(0)] = state_machine__5711__auto__);
(statearr_11511[(1)] = (1));
return statearr_11511;
});
var state_machine__5711__auto____1 = (function (state_11490){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11490);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11512){if((e11512 instanceof Object))
{var ex__5714__auto__ = e11512;var statearr_11513_11529 = state_11490;(statearr_11513_11529[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11530 = state_11490;
state_11490 = G__11530;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11490){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto__))
})();var state__5727__auto__ = (function (){var statearr_11514 = f__5726__auto__.call(null);(statearr_11514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto__);
return statearr_11514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto__))
);
return c__5725__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11532 = {};return obj11532;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11534 = {};return obj11534;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11756 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11756 = (function (cs,ch,mult,meta11757){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11757 = meta11757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11756.cljs$lang$type = true;
cljs.core.async.t11756.cljs$lang$ctorStr = "cljs.core.async/t11756";
cljs.core.async.t11756.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11756");
});})(cs))
;
cljs.core.async.t11756.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11756.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11756.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11756.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11756.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11756.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11758){var self__ = this;
var _11758__$1 = this;return self__.meta11757;
});})(cs))
;
cljs.core.async.t11756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11758,meta11757__$1){var self__ = this;
var _11758__$1 = this;return (new cljs.core.async.t11756(self__.cs,self__.ch,self__.mult,meta11757__$1));
});})(cs))
;
cljs.core.async.__GT_t11756 = ((function (cs){
return (function __GT_t11756(cs__$1,ch__$1,mult__$1,meta11757){return (new cljs.core.async.t11756(cs__$1,ch__$1,mult__$1,meta11757));
});})(cs))
;
}
return (new cljs.core.async.t11756(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5725__auto___11977 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___11977,cs,m,dchan,dctr,done){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___11977,cs,m,dchan,dctr,done){
return (function (state_11889){var state_val_11890 = (state_11889[(1)]);if((state_val_11890 === (7)))
{var inst_11885 = (state_11889[(2)]);var state_11889__$1 = state_11889;var statearr_11891_11978 = state_11889__$1;(statearr_11891_11978[(2)] = inst_11885);
(statearr_11891_11978[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (20)))
{var inst_11790 = (state_11889[(7)]);var inst_11800 = cljs.core.first.call(null,inst_11790);var inst_11801 = cljs.core.nth.call(null,inst_11800,(0),null);var inst_11802 = cljs.core.nth.call(null,inst_11800,(1),null);var state_11889__$1 = (function (){var statearr_11892 = state_11889;(statearr_11892[(8)] = inst_11801);
return statearr_11892;
})();if(cljs.core.truth_(inst_11802))
{var statearr_11893_11979 = state_11889__$1;(statearr_11893_11979[(1)] = (22));
} else
{var statearr_11894_11980 = state_11889__$1;(statearr_11894_11980[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (27)))
{var inst_11832 = (state_11889[(9)]);var inst_11761 = (state_11889[(10)]);var inst_11837 = (state_11889[(11)]);var inst_11830 = (state_11889[(12)]);var inst_11837__$1 = cljs.core._nth.call(null,inst_11830,inst_11832);var inst_11838 = cljs.core.async.put_BANG_.call(null,inst_11837__$1,inst_11761,done);var state_11889__$1 = (function (){var statearr_11895 = state_11889;(statearr_11895[(11)] = inst_11837__$1);
return statearr_11895;
})();if(cljs.core.truth_(inst_11838))
{var statearr_11896_11981 = state_11889__$1;(statearr_11896_11981[(1)] = (30));
} else
{var statearr_11897_11982 = state_11889__$1;(statearr_11897_11982[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (1)))
{var state_11889__$1 = state_11889;var statearr_11898_11983 = state_11889__$1;(statearr_11898_11983[(2)] = null);
(statearr_11898_11983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (24)))
{var inst_11790 = (state_11889[(7)]);var inst_11807 = (state_11889[(2)]);var inst_11808 = cljs.core.next.call(null,inst_11790);var inst_11770 = inst_11808;var inst_11771 = null;var inst_11772 = (0);var inst_11773 = (0);var state_11889__$1 = (function (){var statearr_11899 = state_11889;(statearr_11899[(13)] = inst_11770);
(statearr_11899[(14)] = inst_11773);
(statearr_11899[(15)] = inst_11772);
(statearr_11899[(16)] = inst_11771);
(statearr_11899[(17)] = inst_11807);
return statearr_11899;
})();var statearr_11900_11984 = state_11889__$1;(statearr_11900_11984[(2)] = null);
(statearr_11900_11984[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (39)))
{var state_11889__$1 = state_11889;var statearr_11904_11985 = state_11889__$1;(statearr_11904_11985[(2)] = null);
(statearr_11904_11985[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (4)))
{var inst_11761 = (state_11889[(10)]);var inst_11761__$1 = (state_11889[(2)]);var inst_11762 = (inst_11761__$1 == null);var state_11889__$1 = (function (){var statearr_11905 = state_11889;(statearr_11905[(10)] = inst_11761__$1);
return statearr_11905;
})();if(cljs.core.truth_(inst_11762))
{var statearr_11906_11986 = state_11889__$1;(statearr_11906_11986[(1)] = (5));
} else
{var statearr_11907_11987 = state_11889__$1;(statearr_11907_11987[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (15)))
{var inst_11770 = (state_11889[(13)]);var inst_11773 = (state_11889[(14)]);var inst_11772 = (state_11889[(15)]);var inst_11771 = (state_11889[(16)]);var inst_11786 = (state_11889[(2)]);var inst_11787 = (inst_11773 + (1));var tmp11901 = inst_11770;var tmp11902 = inst_11772;var tmp11903 = inst_11771;var inst_11770__$1 = tmp11901;var inst_11771__$1 = tmp11903;var inst_11772__$1 = tmp11902;var inst_11773__$1 = inst_11787;var state_11889__$1 = (function (){var statearr_11908 = state_11889;(statearr_11908[(13)] = inst_11770__$1);
(statearr_11908[(14)] = inst_11773__$1);
(statearr_11908[(15)] = inst_11772__$1);
(statearr_11908[(16)] = inst_11771__$1);
(statearr_11908[(18)] = inst_11786);
return statearr_11908;
})();var statearr_11909_11988 = state_11889__$1;(statearr_11909_11988[(2)] = null);
(statearr_11909_11988[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (21)))
{var inst_11811 = (state_11889[(2)]);var state_11889__$1 = state_11889;var statearr_11913_11989 = state_11889__$1;(statearr_11913_11989[(2)] = inst_11811);
(statearr_11913_11989[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (31)))
{var inst_11837 = (state_11889[(11)]);var inst_11841 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11842 = cljs.core.async.untap_STAR_.call(null,m,inst_11837);var state_11889__$1 = (function (){var statearr_11914 = state_11889;(statearr_11914[(19)] = inst_11841);
return statearr_11914;
})();var statearr_11915_11990 = state_11889__$1;(statearr_11915_11990[(2)] = inst_11842);
(statearr_11915_11990[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (32)))
{var inst_11832 = (state_11889[(9)]);var inst_11829 = (state_11889[(20)]);var inst_11830 = (state_11889[(12)]);var inst_11831 = (state_11889[(21)]);var inst_11844 = (state_11889[(2)]);var inst_11845 = (inst_11832 + (1));var tmp11910 = inst_11829;var tmp11911 = inst_11830;var tmp11912 = inst_11831;var inst_11829__$1 = tmp11910;var inst_11830__$1 = tmp11911;var inst_11831__$1 = tmp11912;var inst_11832__$1 = inst_11845;var state_11889__$1 = (function (){var statearr_11916 = state_11889;(statearr_11916[(9)] = inst_11832__$1);
(statearr_11916[(22)] = inst_11844);
(statearr_11916[(20)] = inst_11829__$1);
(statearr_11916[(12)] = inst_11830__$1);
(statearr_11916[(21)] = inst_11831__$1);
return statearr_11916;
})();var statearr_11917_11991 = state_11889__$1;(statearr_11917_11991[(2)] = null);
(statearr_11917_11991[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (40)))
{var inst_11857 = (state_11889[(23)]);var inst_11861 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11862 = cljs.core.async.untap_STAR_.call(null,m,inst_11857);var state_11889__$1 = (function (){var statearr_11918 = state_11889;(statearr_11918[(24)] = inst_11861);
return statearr_11918;
})();var statearr_11919_11992 = state_11889__$1;(statearr_11919_11992[(2)] = inst_11862);
(statearr_11919_11992[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (33)))
{var inst_11848 = (state_11889[(25)]);var inst_11850 = cljs.core.chunked_seq_QMARK_.call(null,inst_11848);var state_11889__$1 = state_11889;if(inst_11850)
{var statearr_11920_11993 = state_11889__$1;(statearr_11920_11993[(1)] = (36));
} else
{var statearr_11921_11994 = state_11889__$1;(statearr_11921_11994[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (13)))
{var inst_11780 = (state_11889[(26)]);var inst_11783 = cljs.core.async.close_BANG_.call(null,inst_11780);var state_11889__$1 = state_11889;var statearr_11922_11995 = state_11889__$1;(statearr_11922_11995[(2)] = inst_11783);
(statearr_11922_11995[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (22)))
{var inst_11801 = (state_11889[(8)]);var inst_11804 = cljs.core.async.close_BANG_.call(null,inst_11801);var state_11889__$1 = state_11889;var statearr_11923_11996 = state_11889__$1;(statearr_11923_11996[(2)] = inst_11804);
(statearr_11923_11996[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (36)))
{var inst_11848 = (state_11889[(25)]);var inst_11852 = cljs.core.chunk_first.call(null,inst_11848);var inst_11853 = cljs.core.chunk_rest.call(null,inst_11848);var inst_11854 = cljs.core.count.call(null,inst_11852);var inst_11829 = inst_11853;var inst_11830 = inst_11852;var inst_11831 = inst_11854;var inst_11832 = (0);var state_11889__$1 = (function (){var statearr_11924 = state_11889;(statearr_11924[(9)] = inst_11832);
(statearr_11924[(20)] = inst_11829);
(statearr_11924[(12)] = inst_11830);
(statearr_11924[(21)] = inst_11831);
return statearr_11924;
})();var statearr_11925_11997 = state_11889__$1;(statearr_11925_11997[(2)] = null);
(statearr_11925_11997[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (41)))
{var inst_11848 = (state_11889[(25)]);var inst_11864 = (state_11889[(2)]);var inst_11865 = cljs.core.next.call(null,inst_11848);var inst_11829 = inst_11865;var inst_11830 = null;var inst_11831 = (0);var inst_11832 = (0);var state_11889__$1 = (function (){var statearr_11926 = state_11889;(statearr_11926[(9)] = inst_11832);
(statearr_11926[(27)] = inst_11864);
(statearr_11926[(20)] = inst_11829);
(statearr_11926[(12)] = inst_11830);
(statearr_11926[(21)] = inst_11831);
return statearr_11926;
})();var statearr_11927_11998 = state_11889__$1;(statearr_11927_11998[(2)] = null);
(statearr_11927_11998[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (43)))
{var state_11889__$1 = state_11889;var statearr_11928_11999 = state_11889__$1;(statearr_11928_11999[(2)] = null);
(statearr_11928_11999[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (29)))
{var inst_11873 = (state_11889[(2)]);var state_11889__$1 = state_11889;var statearr_11929_12000 = state_11889__$1;(statearr_11929_12000[(2)] = inst_11873);
(statearr_11929_12000[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (44)))
{var inst_11882 = (state_11889[(2)]);var state_11889__$1 = (function (){var statearr_11930 = state_11889;(statearr_11930[(28)] = inst_11882);
return statearr_11930;
})();var statearr_11931_12001 = state_11889__$1;(statearr_11931_12001[(2)] = null);
(statearr_11931_12001[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (6)))
{var inst_11821 = (state_11889[(29)]);var inst_11820 = cljs.core.deref.call(null,cs);var inst_11821__$1 = cljs.core.keys.call(null,inst_11820);var inst_11822 = cljs.core.count.call(null,inst_11821__$1);var inst_11823 = cljs.core.reset_BANG_.call(null,dctr,inst_11822);var inst_11828 = cljs.core.seq.call(null,inst_11821__$1);var inst_11829 = inst_11828;var inst_11830 = null;var inst_11831 = (0);var inst_11832 = (0);var state_11889__$1 = (function (){var statearr_11932 = state_11889;(statearr_11932[(9)] = inst_11832);
(statearr_11932[(30)] = inst_11823);
(statearr_11932[(20)] = inst_11829);
(statearr_11932[(12)] = inst_11830);
(statearr_11932[(21)] = inst_11831);
(statearr_11932[(29)] = inst_11821__$1);
return statearr_11932;
})();var statearr_11933_12002 = state_11889__$1;(statearr_11933_12002[(2)] = null);
(statearr_11933_12002[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (28)))
{var inst_11829 = (state_11889[(20)]);var inst_11848 = (state_11889[(25)]);var inst_11848__$1 = cljs.core.seq.call(null,inst_11829);var state_11889__$1 = (function (){var statearr_11934 = state_11889;(statearr_11934[(25)] = inst_11848__$1);
return statearr_11934;
})();if(inst_11848__$1)
{var statearr_11935_12003 = state_11889__$1;(statearr_11935_12003[(1)] = (33));
} else
{var statearr_11936_12004 = state_11889__$1;(statearr_11936_12004[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (25)))
{var inst_11832 = (state_11889[(9)]);var inst_11831 = (state_11889[(21)]);var inst_11834 = (inst_11832 < inst_11831);var inst_11835 = inst_11834;var state_11889__$1 = state_11889;if(cljs.core.truth_(inst_11835))
{var statearr_11937_12005 = state_11889__$1;(statearr_11937_12005[(1)] = (27));
} else
{var statearr_11938_12006 = state_11889__$1;(statearr_11938_12006[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (34)))
{var state_11889__$1 = state_11889;var statearr_11939_12007 = state_11889__$1;(statearr_11939_12007[(2)] = null);
(statearr_11939_12007[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (17)))
{var state_11889__$1 = state_11889;var statearr_11940_12008 = state_11889__$1;(statearr_11940_12008[(2)] = null);
(statearr_11940_12008[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (3)))
{var inst_11887 = (state_11889[(2)]);var state_11889__$1 = state_11889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11889__$1,inst_11887);
} else
{if((state_val_11890 === (12)))
{var inst_11816 = (state_11889[(2)]);var state_11889__$1 = state_11889;var statearr_11941_12009 = state_11889__$1;(statearr_11941_12009[(2)] = inst_11816);
(statearr_11941_12009[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (2)))
{var state_11889__$1 = state_11889;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11889__$1,(4),ch);
} else
{if((state_val_11890 === (23)))
{var state_11889__$1 = state_11889;var statearr_11942_12010 = state_11889__$1;(statearr_11942_12010[(2)] = null);
(statearr_11942_12010[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (35)))
{var inst_11871 = (state_11889[(2)]);var state_11889__$1 = state_11889;var statearr_11943_12011 = state_11889__$1;(statearr_11943_12011[(2)] = inst_11871);
(statearr_11943_12011[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (19)))
{var inst_11790 = (state_11889[(7)]);var inst_11794 = cljs.core.chunk_first.call(null,inst_11790);var inst_11795 = cljs.core.chunk_rest.call(null,inst_11790);var inst_11796 = cljs.core.count.call(null,inst_11794);var inst_11770 = inst_11795;var inst_11771 = inst_11794;var inst_11772 = inst_11796;var inst_11773 = (0);var state_11889__$1 = (function (){var statearr_11944 = state_11889;(statearr_11944[(13)] = inst_11770);
(statearr_11944[(14)] = inst_11773);
(statearr_11944[(15)] = inst_11772);
(statearr_11944[(16)] = inst_11771);
return statearr_11944;
})();var statearr_11945_12012 = state_11889__$1;(statearr_11945_12012[(2)] = null);
(statearr_11945_12012[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (11)))
{var inst_11770 = (state_11889[(13)]);var inst_11790 = (state_11889[(7)]);var inst_11790__$1 = cljs.core.seq.call(null,inst_11770);var state_11889__$1 = (function (){var statearr_11946 = state_11889;(statearr_11946[(7)] = inst_11790__$1);
return statearr_11946;
})();if(inst_11790__$1)
{var statearr_11947_12013 = state_11889__$1;(statearr_11947_12013[(1)] = (16));
} else
{var statearr_11948_12014 = state_11889__$1;(statearr_11948_12014[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (9)))
{var inst_11818 = (state_11889[(2)]);var state_11889__$1 = state_11889;var statearr_11949_12015 = state_11889__$1;(statearr_11949_12015[(2)] = inst_11818);
(statearr_11949_12015[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (5)))
{var inst_11768 = cljs.core.deref.call(null,cs);var inst_11769 = cljs.core.seq.call(null,inst_11768);var inst_11770 = inst_11769;var inst_11771 = null;var inst_11772 = (0);var inst_11773 = (0);var state_11889__$1 = (function (){var statearr_11950 = state_11889;(statearr_11950[(13)] = inst_11770);
(statearr_11950[(14)] = inst_11773);
(statearr_11950[(15)] = inst_11772);
(statearr_11950[(16)] = inst_11771);
return statearr_11950;
})();var statearr_11951_12016 = state_11889__$1;(statearr_11951_12016[(2)] = null);
(statearr_11951_12016[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (14)))
{var state_11889__$1 = state_11889;var statearr_11952_12017 = state_11889__$1;(statearr_11952_12017[(2)] = null);
(statearr_11952_12017[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (45)))
{var inst_11879 = (state_11889[(2)]);var state_11889__$1 = state_11889;var statearr_11953_12018 = state_11889__$1;(statearr_11953_12018[(2)] = inst_11879);
(statearr_11953_12018[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (26)))
{var inst_11821 = (state_11889[(29)]);var inst_11875 = (state_11889[(2)]);var inst_11876 = cljs.core.seq.call(null,inst_11821);var state_11889__$1 = (function (){var statearr_11954 = state_11889;(statearr_11954[(31)] = inst_11875);
return statearr_11954;
})();if(inst_11876)
{var statearr_11955_12019 = state_11889__$1;(statearr_11955_12019[(1)] = (42));
} else
{var statearr_11956_12020 = state_11889__$1;(statearr_11956_12020[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (16)))
{var inst_11790 = (state_11889[(7)]);var inst_11792 = cljs.core.chunked_seq_QMARK_.call(null,inst_11790);var state_11889__$1 = state_11889;if(inst_11792)
{var statearr_11957_12021 = state_11889__$1;(statearr_11957_12021[(1)] = (19));
} else
{var statearr_11958_12022 = state_11889__$1;(statearr_11958_12022[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (38)))
{var inst_11868 = (state_11889[(2)]);var state_11889__$1 = state_11889;var statearr_11959_12023 = state_11889__$1;(statearr_11959_12023[(2)] = inst_11868);
(statearr_11959_12023[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (30)))
{var state_11889__$1 = state_11889;var statearr_11960_12024 = state_11889__$1;(statearr_11960_12024[(2)] = null);
(statearr_11960_12024[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (10)))
{var inst_11773 = (state_11889[(14)]);var inst_11771 = (state_11889[(16)]);var inst_11779 = cljs.core._nth.call(null,inst_11771,inst_11773);var inst_11780 = cljs.core.nth.call(null,inst_11779,(0),null);var inst_11781 = cljs.core.nth.call(null,inst_11779,(1),null);var state_11889__$1 = (function (){var statearr_11961 = state_11889;(statearr_11961[(26)] = inst_11780);
return statearr_11961;
})();if(cljs.core.truth_(inst_11781))
{var statearr_11962_12025 = state_11889__$1;(statearr_11962_12025[(1)] = (13));
} else
{var statearr_11963_12026 = state_11889__$1;(statearr_11963_12026[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (18)))
{var inst_11814 = (state_11889[(2)]);var state_11889__$1 = state_11889;var statearr_11964_12027 = state_11889__$1;(statearr_11964_12027[(2)] = inst_11814);
(statearr_11964_12027[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (42)))
{var state_11889__$1 = state_11889;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11889__$1,(45),dchan);
} else
{if((state_val_11890 === (37)))
{var inst_11761 = (state_11889[(10)]);var inst_11857 = (state_11889[(23)]);var inst_11848 = (state_11889[(25)]);var inst_11857__$1 = cljs.core.first.call(null,inst_11848);var inst_11858 = cljs.core.async.put_BANG_.call(null,inst_11857__$1,inst_11761,done);var state_11889__$1 = (function (){var statearr_11965 = state_11889;(statearr_11965[(23)] = inst_11857__$1);
return statearr_11965;
})();if(cljs.core.truth_(inst_11858))
{var statearr_11966_12028 = state_11889__$1;(statearr_11966_12028[(1)] = (39));
} else
{var statearr_11967_12029 = state_11889__$1;(statearr_11967_12029[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11890 === (8)))
{var inst_11773 = (state_11889[(14)]);var inst_11772 = (state_11889[(15)]);var inst_11775 = (inst_11773 < inst_11772);var inst_11776 = inst_11775;var state_11889__$1 = state_11889;if(cljs.core.truth_(inst_11776))
{var statearr_11968_12030 = state_11889__$1;(statearr_11968_12030[(1)] = (10));
} else
{var statearr_11969_12031 = state_11889__$1;(statearr_11969_12031[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
}
}
}
});})(c__5725__auto___11977,cs,m,dchan,dctr,done))
;return ((function (switch__5710__auto__,c__5725__auto___11977,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_11973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11973[(0)] = state_machine__5711__auto__);
(statearr_11973[(1)] = (1));
return statearr_11973;
});
var state_machine__5711__auto____1 = (function (state_11889){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11889);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11974){if((e11974 instanceof Object))
{var ex__5714__auto__ = e11974;var statearr_11975_12032 = state_11889;(statearr_11975_12032[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11889);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11974;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12033 = state_11889;
state_11889 = G__12033;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11889){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___11977,cs,m,dchan,dctr,done))
})();var state__5727__auto__ = (function (){var statearr_11976 = f__5726__auto__.call(null);(statearr_11976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___11977);
return statearr_11976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___11977,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12035 = {};return obj12035;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12155 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12155 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12156){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12156 = meta12156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12155.cljs$lang$type = true;
cljs.core.async.t12155.cljs$lang$ctorStr = "cljs.core.async/t12155";
cljs.core.async.t12155.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12155");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12155.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12155.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12155.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12155.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12155.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12155.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12155.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12155.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12157){var self__ = this;
var _12157__$1 = this;return self__.meta12156;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12157,meta12156__$1){var self__ = this;
var _12157__$1 = this;return (new cljs.core.async.t12155(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12156__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12155 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12155(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12156){return (new cljs.core.async.t12155(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12156));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12155(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5725__auto___12274 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___12274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___12274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12227){var state_val_12228 = (state_12227[(1)]);if((state_val_12228 === (7)))
{var inst_12171 = (state_12227[(7)]);var inst_12176 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12171);var state_12227__$1 = state_12227;var statearr_12229_12275 = state_12227__$1;(statearr_12229_12275[(2)] = inst_12176);
(statearr_12229_12275[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (20)))
{var inst_12186 = (state_12227[(8)]);var state_12227__$1 = state_12227;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12227__$1,(23),out,inst_12186);
} else
{if((state_val_12228 === (1)))
{var inst_12161 = (state_12227[(9)]);var inst_12161__$1 = calc_state.call(null);var inst_12162 = cljs.core.seq_QMARK_.call(null,inst_12161__$1);var state_12227__$1 = (function (){var statearr_12230 = state_12227;(statearr_12230[(9)] = inst_12161__$1);
return statearr_12230;
})();if(inst_12162)
{var statearr_12231_12276 = state_12227__$1;(statearr_12231_12276[(1)] = (2));
} else
{var statearr_12232_12277 = state_12227__$1;(statearr_12232_12277[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (24)))
{var inst_12179 = (state_12227[(10)]);var inst_12171 = inst_12179;var state_12227__$1 = (function (){var statearr_12233 = state_12227;(statearr_12233[(7)] = inst_12171);
return statearr_12233;
})();var statearr_12234_12278 = state_12227__$1;(statearr_12234_12278[(2)] = null);
(statearr_12234_12278[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (4)))
{var inst_12161 = (state_12227[(9)]);var inst_12167 = (state_12227[(2)]);var inst_12168 = cljs.core.get.call(null,inst_12167,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12169 = cljs.core.get.call(null,inst_12167,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12170 = cljs.core.get.call(null,inst_12167,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12171 = inst_12161;var state_12227__$1 = (function (){var statearr_12235 = state_12227;(statearr_12235[(11)] = inst_12168);
(statearr_12235[(7)] = inst_12171);
(statearr_12235[(12)] = inst_12170);
(statearr_12235[(13)] = inst_12169);
return statearr_12235;
})();var statearr_12236_12279 = state_12227__$1;(statearr_12236_12279[(2)] = null);
(statearr_12236_12279[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (15)))
{var state_12227__$1 = state_12227;var statearr_12237_12280 = state_12227__$1;(statearr_12237_12280[(2)] = null);
(statearr_12237_12280[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (21)))
{var inst_12179 = (state_12227[(10)]);var inst_12171 = inst_12179;var state_12227__$1 = (function (){var statearr_12238 = state_12227;(statearr_12238[(7)] = inst_12171);
return statearr_12238;
})();var statearr_12239_12281 = state_12227__$1;(statearr_12239_12281[(2)] = null);
(statearr_12239_12281[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (13)))
{var inst_12223 = (state_12227[(2)]);var state_12227__$1 = state_12227;var statearr_12240_12282 = state_12227__$1;(statearr_12240_12282[(2)] = inst_12223);
(statearr_12240_12282[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (22)))
{var inst_12221 = (state_12227[(2)]);var state_12227__$1 = state_12227;var statearr_12241_12283 = state_12227__$1;(statearr_12241_12283[(2)] = inst_12221);
(statearr_12241_12283[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (6)))
{var inst_12225 = (state_12227[(2)]);var state_12227__$1 = state_12227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12227__$1,inst_12225);
} else
{if((state_val_12228 === (25)))
{var state_12227__$1 = state_12227;var statearr_12242_12284 = state_12227__$1;(statearr_12242_12284[(2)] = null);
(statearr_12242_12284[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (17)))
{var inst_12201 = (state_12227[(14)]);var state_12227__$1 = state_12227;var statearr_12243_12285 = state_12227__$1;(statearr_12243_12285[(2)] = inst_12201);
(statearr_12243_12285[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (3)))
{var inst_12161 = (state_12227[(9)]);var state_12227__$1 = state_12227;var statearr_12244_12286 = state_12227__$1;(statearr_12244_12286[(2)] = inst_12161);
(statearr_12244_12286[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (12)))
{var inst_12182 = (state_12227[(15)]);var inst_12187 = (state_12227[(16)]);var inst_12201 = (state_12227[(14)]);var inst_12201__$1 = inst_12182.call(null,inst_12187);var state_12227__$1 = (function (){var statearr_12245 = state_12227;(statearr_12245[(14)] = inst_12201__$1);
return statearr_12245;
})();if(cljs.core.truth_(inst_12201__$1))
{var statearr_12246_12287 = state_12227__$1;(statearr_12246_12287[(1)] = (17));
} else
{var statearr_12247_12288 = state_12227__$1;(statearr_12247_12288[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (2)))
{var inst_12161 = (state_12227[(9)]);var inst_12164 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12161);var state_12227__$1 = state_12227;var statearr_12248_12289 = state_12227__$1;(statearr_12248_12289[(2)] = inst_12164);
(statearr_12248_12289[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (23)))
{var inst_12212 = (state_12227[(2)]);var state_12227__$1 = state_12227;if(cljs.core.truth_(inst_12212))
{var statearr_12249_12290 = state_12227__$1;(statearr_12249_12290[(1)] = (24));
} else
{var statearr_12250_12291 = state_12227__$1;(statearr_12250_12291[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (19)))
{var inst_12209 = (state_12227[(2)]);var state_12227__$1 = state_12227;if(cljs.core.truth_(inst_12209))
{var statearr_12251_12292 = state_12227__$1;(statearr_12251_12292[(1)] = (20));
} else
{var statearr_12252_12293 = state_12227__$1;(statearr_12252_12293[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (11)))
{var inst_12186 = (state_12227[(8)]);var inst_12192 = (inst_12186 == null);var state_12227__$1 = state_12227;if(cljs.core.truth_(inst_12192))
{var statearr_12253_12294 = state_12227__$1;(statearr_12253_12294[(1)] = (14));
} else
{var statearr_12254_12295 = state_12227__$1;(statearr_12254_12295[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (9)))
{var inst_12179 = (state_12227[(10)]);var inst_12179__$1 = (state_12227[(2)]);var inst_12180 = cljs.core.get.call(null,inst_12179__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12181 = cljs.core.get.call(null,inst_12179__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12182 = cljs.core.get.call(null,inst_12179__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12227__$1 = (function (){var statearr_12255 = state_12227;(statearr_12255[(15)] = inst_12182);
(statearr_12255[(17)] = inst_12181);
(statearr_12255[(10)] = inst_12179__$1);
return statearr_12255;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12227__$1,(10),inst_12180);
} else
{if((state_val_12228 === (5)))
{var inst_12171 = (state_12227[(7)]);var inst_12174 = cljs.core.seq_QMARK_.call(null,inst_12171);var state_12227__$1 = state_12227;if(inst_12174)
{var statearr_12256_12296 = state_12227__$1;(statearr_12256_12296[(1)] = (7));
} else
{var statearr_12257_12297 = state_12227__$1;(statearr_12257_12297[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (14)))
{var inst_12187 = (state_12227[(16)]);var inst_12194 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12187);var state_12227__$1 = state_12227;var statearr_12258_12298 = state_12227__$1;(statearr_12258_12298[(2)] = inst_12194);
(statearr_12258_12298[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (26)))
{var inst_12217 = (state_12227[(2)]);var state_12227__$1 = state_12227;var statearr_12259_12299 = state_12227__$1;(statearr_12259_12299[(2)] = inst_12217);
(statearr_12259_12299[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (16)))
{var inst_12197 = (state_12227[(2)]);var inst_12198 = calc_state.call(null);var inst_12171 = inst_12198;var state_12227__$1 = (function (){var statearr_12260 = state_12227;(statearr_12260[(18)] = inst_12197);
(statearr_12260[(7)] = inst_12171);
return statearr_12260;
})();var statearr_12261_12300 = state_12227__$1;(statearr_12261_12300[(2)] = null);
(statearr_12261_12300[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (10)))
{var inst_12186 = (state_12227[(8)]);var inst_12187 = (state_12227[(16)]);var inst_12185 = (state_12227[(2)]);var inst_12186__$1 = cljs.core.nth.call(null,inst_12185,(0),null);var inst_12187__$1 = cljs.core.nth.call(null,inst_12185,(1),null);var inst_12188 = (inst_12186__$1 == null);var inst_12189 = cljs.core._EQ_.call(null,inst_12187__$1,change);var inst_12190 = (inst_12188) || (inst_12189);var state_12227__$1 = (function (){var statearr_12262 = state_12227;(statearr_12262[(8)] = inst_12186__$1);
(statearr_12262[(16)] = inst_12187__$1);
return statearr_12262;
})();if(cljs.core.truth_(inst_12190))
{var statearr_12263_12301 = state_12227__$1;(statearr_12263_12301[(1)] = (11));
} else
{var statearr_12264_12302 = state_12227__$1;(statearr_12264_12302[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (18)))
{var inst_12182 = (state_12227[(15)]);var inst_12181 = (state_12227[(17)]);var inst_12187 = (state_12227[(16)]);var inst_12204 = cljs.core.empty_QMARK_.call(null,inst_12182);var inst_12205 = inst_12181.call(null,inst_12187);var inst_12206 = cljs.core.not.call(null,inst_12205);var inst_12207 = (inst_12204) && (inst_12206);var state_12227__$1 = state_12227;var statearr_12265_12303 = state_12227__$1;(statearr_12265_12303[(2)] = inst_12207);
(statearr_12265_12303[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12228 === (8)))
{var inst_12171 = (state_12227[(7)]);var state_12227__$1 = state_12227;var statearr_12266_12304 = state_12227__$1;(statearr_12266_12304[(2)] = inst_12171);
(statearr_12266_12304[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
}
}
}
}
}
});})(c__5725__auto___12274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5710__auto__,c__5725__auto___12274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_12270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12270[(0)] = state_machine__5711__auto__);
(statearr_12270[(1)] = (1));
return statearr_12270;
});
var state_machine__5711__auto____1 = (function (state_12227){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_12227);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e12271){if((e12271 instanceof Object))
{var ex__5714__auto__ = e12271;var statearr_12272_12305 = state_12227;(statearr_12272_12305[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12227);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12271;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12306 = state_12227;
state_12227 = G__12306;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_12227){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_12227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___12274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5727__auto__ = (function (){var statearr_12273 = f__5726__auto__.call(null);(statearr_12273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___12274);
return statearr_12273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___12274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12308 = {};return obj12308;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3560__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3560__auto__,mults){
return (function (p1__12309_SHARP_){if(cljs.core.truth_(p1__12309_SHARP_.call(null,topic)))
{return p1__12309_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12309_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3560__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12432 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12432 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12433){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12433 = meta12433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12432.cljs$lang$type = true;
cljs.core.async.t12432.cljs$lang$ctorStr = "cljs.core.async/t12432";
cljs.core.async.t12432.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12432");
});})(mults,ensure_mult))
;
cljs.core.async.t12432.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12432.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12432.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12432.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12432.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12432.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12432.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12434){var self__ = this;
var _12434__$1 = this;return self__.meta12433;
});})(mults,ensure_mult))
;
cljs.core.async.t12432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12434,meta12433__$1){var self__ = this;
var _12434__$1 = this;return (new cljs.core.async.t12432(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12433__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12432 = ((function (mults,ensure_mult){
return (function __GT_t12432(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12433){return (new cljs.core.async.t12432(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12433));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12432(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5725__auto___12554 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___12554,mults,ensure_mult,p){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___12554,mults,ensure_mult,p){
return (function (state_12506){var state_val_12507 = (state_12506[(1)]);if((state_val_12507 === (7)))
{var inst_12502 = (state_12506[(2)]);var state_12506__$1 = state_12506;var statearr_12508_12555 = state_12506__$1;(statearr_12508_12555[(2)] = inst_12502);
(statearr_12508_12555[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (20)))
{var state_12506__$1 = state_12506;var statearr_12509_12556 = state_12506__$1;(statearr_12509_12556[(2)] = null);
(statearr_12509_12556[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (1)))
{var state_12506__$1 = state_12506;var statearr_12510_12557 = state_12506__$1;(statearr_12510_12557[(2)] = null);
(statearr_12510_12557[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (24)))
{var inst_12485 = (state_12506[(7)]);var inst_12494 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12485);var state_12506__$1 = state_12506;var statearr_12511_12558 = state_12506__$1;(statearr_12511_12558[(2)] = inst_12494);
(statearr_12511_12558[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (4)))
{var inst_12437 = (state_12506[(8)]);var inst_12437__$1 = (state_12506[(2)]);var inst_12438 = (inst_12437__$1 == null);var state_12506__$1 = (function (){var statearr_12512 = state_12506;(statearr_12512[(8)] = inst_12437__$1);
return statearr_12512;
})();if(cljs.core.truth_(inst_12438))
{var statearr_12513_12559 = state_12506__$1;(statearr_12513_12559[(1)] = (5));
} else
{var statearr_12514_12560 = state_12506__$1;(statearr_12514_12560[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (15)))
{var inst_12479 = (state_12506[(2)]);var state_12506__$1 = state_12506;var statearr_12515_12561 = state_12506__$1;(statearr_12515_12561[(2)] = inst_12479);
(statearr_12515_12561[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (21)))
{var inst_12499 = (state_12506[(2)]);var state_12506__$1 = (function (){var statearr_12516 = state_12506;(statearr_12516[(9)] = inst_12499);
return statearr_12516;
})();var statearr_12517_12562 = state_12506__$1;(statearr_12517_12562[(2)] = null);
(statearr_12517_12562[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (13)))
{var inst_12461 = (state_12506[(10)]);var inst_12463 = cljs.core.chunked_seq_QMARK_.call(null,inst_12461);var state_12506__$1 = state_12506;if(inst_12463)
{var statearr_12518_12563 = state_12506__$1;(statearr_12518_12563[(1)] = (16));
} else
{var statearr_12519_12564 = state_12506__$1;(statearr_12519_12564[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (22)))
{var inst_12491 = (state_12506[(2)]);var state_12506__$1 = state_12506;if(cljs.core.truth_(inst_12491))
{var statearr_12520_12565 = state_12506__$1;(statearr_12520_12565[(1)] = (23));
} else
{var statearr_12521_12566 = state_12506__$1;(statearr_12521_12566[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (6)))
{var inst_12437 = (state_12506[(8)]);var inst_12485 = (state_12506[(7)]);var inst_12487 = (state_12506[(11)]);var inst_12485__$1 = topic_fn.call(null,inst_12437);var inst_12486 = cljs.core.deref.call(null,mults);var inst_12487__$1 = cljs.core.get.call(null,inst_12486,inst_12485__$1);var state_12506__$1 = (function (){var statearr_12522 = state_12506;(statearr_12522[(7)] = inst_12485__$1);
(statearr_12522[(11)] = inst_12487__$1);
return statearr_12522;
})();if(cljs.core.truth_(inst_12487__$1))
{var statearr_12523_12567 = state_12506__$1;(statearr_12523_12567[(1)] = (19));
} else
{var statearr_12524_12568 = state_12506__$1;(statearr_12524_12568[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (25)))
{var inst_12496 = (state_12506[(2)]);var state_12506__$1 = state_12506;var statearr_12525_12569 = state_12506__$1;(statearr_12525_12569[(2)] = inst_12496);
(statearr_12525_12569[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (17)))
{var inst_12461 = (state_12506[(10)]);var inst_12470 = cljs.core.first.call(null,inst_12461);var inst_12471 = cljs.core.async.muxch_STAR_.call(null,inst_12470);var inst_12472 = cljs.core.async.close_BANG_.call(null,inst_12471);var inst_12473 = cljs.core.next.call(null,inst_12461);var inst_12447 = inst_12473;var inst_12448 = null;var inst_12449 = (0);var inst_12450 = (0);var state_12506__$1 = (function (){var statearr_12526 = state_12506;(statearr_12526[(12)] = inst_12447);
(statearr_12526[(13)] = inst_12449);
(statearr_12526[(14)] = inst_12450);
(statearr_12526[(15)] = inst_12472);
(statearr_12526[(16)] = inst_12448);
return statearr_12526;
})();var statearr_12527_12570 = state_12506__$1;(statearr_12527_12570[(2)] = null);
(statearr_12527_12570[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (3)))
{var inst_12504 = (state_12506[(2)]);var state_12506__$1 = state_12506;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12506__$1,inst_12504);
} else
{if((state_val_12507 === (12)))
{var inst_12481 = (state_12506[(2)]);var state_12506__$1 = state_12506;var statearr_12528_12571 = state_12506__$1;(statearr_12528_12571[(2)] = inst_12481);
(statearr_12528_12571[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (2)))
{var state_12506__$1 = state_12506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12506__$1,(4),ch);
} else
{if((state_val_12507 === (23)))
{var state_12506__$1 = state_12506;var statearr_12529_12572 = state_12506__$1;(statearr_12529_12572[(2)] = null);
(statearr_12529_12572[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (19)))
{var inst_12437 = (state_12506[(8)]);var inst_12487 = (state_12506[(11)]);var inst_12489 = cljs.core.async.muxch_STAR_.call(null,inst_12487);var state_12506__$1 = state_12506;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12506__$1,(22),inst_12489,inst_12437);
} else
{if((state_val_12507 === (11)))
{var inst_12461 = (state_12506[(10)]);var inst_12447 = (state_12506[(12)]);var inst_12461__$1 = cljs.core.seq.call(null,inst_12447);var state_12506__$1 = (function (){var statearr_12530 = state_12506;(statearr_12530[(10)] = inst_12461__$1);
return statearr_12530;
})();if(inst_12461__$1)
{var statearr_12531_12573 = state_12506__$1;(statearr_12531_12573[(1)] = (13));
} else
{var statearr_12532_12574 = state_12506__$1;(statearr_12532_12574[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (9)))
{var inst_12483 = (state_12506[(2)]);var state_12506__$1 = state_12506;var statearr_12533_12575 = state_12506__$1;(statearr_12533_12575[(2)] = inst_12483);
(statearr_12533_12575[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (5)))
{var inst_12444 = cljs.core.deref.call(null,mults);var inst_12445 = cljs.core.vals.call(null,inst_12444);var inst_12446 = cljs.core.seq.call(null,inst_12445);var inst_12447 = inst_12446;var inst_12448 = null;var inst_12449 = (0);var inst_12450 = (0);var state_12506__$1 = (function (){var statearr_12534 = state_12506;(statearr_12534[(12)] = inst_12447);
(statearr_12534[(13)] = inst_12449);
(statearr_12534[(14)] = inst_12450);
(statearr_12534[(16)] = inst_12448);
return statearr_12534;
})();var statearr_12535_12576 = state_12506__$1;(statearr_12535_12576[(2)] = null);
(statearr_12535_12576[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (14)))
{var state_12506__$1 = state_12506;var statearr_12539_12577 = state_12506__$1;(statearr_12539_12577[(2)] = null);
(statearr_12539_12577[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (16)))
{var inst_12461 = (state_12506[(10)]);var inst_12465 = cljs.core.chunk_first.call(null,inst_12461);var inst_12466 = cljs.core.chunk_rest.call(null,inst_12461);var inst_12467 = cljs.core.count.call(null,inst_12465);var inst_12447 = inst_12466;var inst_12448 = inst_12465;var inst_12449 = inst_12467;var inst_12450 = (0);var state_12506__$1 = (function (){var statearr_12540 = state_12506;(statearr_12540[(12)] = inst_12447);
(statearr_12540[(13)] = inst_12449);
(statearr_12540[(14)] = inst_12450);
(statearr_12540[(16)] = inst_12448);
return statearr_12540;
})();var statearr_12541_12578 = state_12506__$1;(statearr_12541_12578[(2)] = null);
(statearr_12541_12578[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (10)))
{var inst_12447 = (state_12506[(12)]);var inst_12449 = (state_12506[(13)]);var inst_12450 = (state_12506[(14)]);var inst_12448 = (state_12506[(16)]);var inst_12455 = cljs.core._nth.call(null,inst_12448,inst_12450);var inst_12456 = cljs.core.async.muxch_STAR_.call(null,inst_12455);var inst_12457 = cljs.core.async.close_BANG_.call(null,inst_12456);var inst_12458 = (inst_12450 + (1));var tmp12536 = inst_12447;var tmp12537 = inst_12449;var tmp12538 = inst_12448;var inst_12447__$1 = tmp12536;var inst_12448__$1 = tmp12538;var inst_12449__$1 = tmp12537;var inst_12450__$1 = inst_12458;var state_12506__$1 = (function (){var statearr_12542 = state_12506;(statearr_12542[(12)] = inst_12447__$1);
(statearr_12542[(13)] = inst_12449__$1);
(statearr_12542[(14)] = inst_12450__$1);
(statearr_12542[(17)] = inst_12457);
(statearr_12542[(16)] = inst_12448__$1);
return statearr_12542;
})();var statearr_12543_12579 = state_12506__$1;(statearr_12543_12579[(2)] = null);
(statearr_12543_12579[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (18)))
{var inst_12476 = (state_12506[(2)]);var state_12506__$1 = state_12506;var statearr_12544_12580 = state_12506__$1;(statearr_12544_12580[(2)] = inst_12476);
(statearr_12544_12580[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12507 === (8)))
{var inst_12449 = (state_12506[(13)]);var inst_12450 = (state_12506[(14)]);var inst_12452 = (inst_12450 < inst_12449);var inst_12453 = inst_12452;var state_12506__$1 = state_12506;if(cljs.core.truth_(inst_12453))
{var statearr_12545_12581 = state_12506__$1;(statearr_12545_12581[(1)] = (10));
} else
{var statearr_12546_12582 = state_12506__$1;(statearr_12546_12582[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
}
}
}
}
});})(c__5725__auto___12554,mults,ensure_mult,p))
;return ((function (switch__5710__auto__,c__5725__auto___12554,mults,ensure_mult,p){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_12550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12550[(0)] = state_machine__5711__auto__);
(statearr_12550[(1)] = (1));
return statearr_12550;
});
var state_machine__5711__auto____1 = (function (state_12506){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_12506);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e12551){if((e12551 instanceof Object))
{var ex__5714__auto__ = e12551;var statearr_12552_12583 = state_12506;(statearr_12552_12583[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12506);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12584 = state_12506;
state_12506 = G__12584;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_12506){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_12506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___12554,mults,ensure_mult,p))
})();var state__5727__auto__ = (function (){var statearr_12553 = f__5726__auto__.call(null);(statearr_12553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___12554);
return statearr_12553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___12554,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5725__auto___12721 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___12721,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___12721,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12691){var state_val_12692 = (state_12691[(1)]);if((state_val_12692 === (7)))
{var state_12691__$1 = state_12691;var statearr_12693_12722 = state_12691__$1;(statearr_12693_12722[(2)] = null);
(statearr_12693_12722[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12692 === (1)))
{var state_12691__$1 = state_12691;var statearr_12694_12723 = state_12691__$1;(statearr_12694_12723[(2)] = null);
(statearr_12694_12723[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12692 === (4)))
{var inst_12655 = (state_12691[(7)]);var inst_12657 = (inst_12655 < cnt);var state_12691__$1 = state_12691;if(cljs.core.truth_(inst_12657))
{var statearr_12695_12724 = state_12691__$1;(statearr_12695_12724[(1)] = (6));
} else
{var statearr_12696_12725 = state_12691__$1;(statearr_12696_12725[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12692 === (15)))
{var inst_12687 = (state_12691[(2)]);var state_12691__$1 = state_12691;var statearr_12697_12726 = state_12691__$1;(statearr_12697_12726[(2)] = inst_12687);
(statearr_12697_12726[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12692 === (13)))
{var inst_12680 = cljs.core.async.close_BANG_.call(null,out);var state_12691__$1 = state_12691;var statearr_12698_12727 = state_12691__$1;(statearr_12698_12727[(2)] = inst_12680);
(statearr_12698_12727[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12692 === (6)))
{var state_12691__$1 = state_12691;var statearr_12699_12728 = state_12691__$1;(statearr_12699_12728[(2)] = null);
(statearr_12699_12728[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12692 === (3)))
{var inst_12689 = (state_12691[(2)]);var state_12691__$1 = state_12691;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12691__$1,inst_12689);
} else
{if((state_val_12692 === (12)))
{var inst_12677 = (state_12691[(8)]);var inst_12677__$1 = (state_12691[(2)]);var inst_12678 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12677__$1);var state_12691__$1 = (function (){var statearr_12700 = state_12691;(statearr_12700[(8)] = inst_12677__$1);
return statearr_12700;
})();if(cljs.core.truth_(inst_12678))
{var statearr_12701_12729 = state_12691__$1;(statearr_12701_12729[(1)] = (13));
} else
{var statearr_12702_12730 = state_12691__$1;(statearr_12702_12730[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12692 === (2)))
{var inst_12654 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12655 = (0);var state_12691__$1 = (function (){var statearr_12703 = state_12691;(statearr_12703[(9)] = inst_12654);
(statearr_12703[(7)] = inst_12655);
return statearr_12703;
})();var statearr_12704_12731 = state_12691__$1;(statearr_12704_12731[(2)] = null);
(statearr_12704_12731[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12692 === (11)))
{var inst_12655 = (state_12691[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12691,(10),Object,null,(9));var inst_12664 = chs__$1.call(null,inst_12655);var inst_12665 = done.call(null,inst_12655);var inst_12666 = cljs.core.async.take_BANG_.call(null,inst_12664,inst_12665);var state_12691__$1 = state_12691;var statearr_12705_12732 = state_12691__$1;(statearr_12705_12732[(2)] = inst_12666);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12691__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12692 === (9)))
{var inst_12655 = (state_12691[(7)]);var inst_12668 = (state_12691[(2)]);var inst_12669 = (inst_12655 + (1));var inst_12655__$1 = inst_12669;var state_12691__$1 = (function (){var statearr_12706 = state_12691;(statearr_12706[(7)] = inst_12655__$1);
(statearr_12706[(10)] = inst_12668);
return statearr_12706;
})();var statearr_12707_12733 = state_12691__$1;(statearr_12707_12733[(2)] = null);
(statearr_12707_12733[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12692 === (5)))
{var inst_12675 = (state_12691[(2)]);var state_12691__$1 = (function (){var statearr_12708 = state_12691;(statearr_12708[(11)] = inst_12675);
return statearr_12708;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12691__$1,(12),dchan);
} else
{if((state_val_12692 === (14)))
{var inst_12677 = (state_12691[(8)]);var inst_12682 = cljs.core.apply.call(null,f,inst_12677);var state_12691__$1 = state_12691;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12691__$1,(16),out,inst_12682);
} else
{if((state_val_12692 === (16)))
{var inst_12684 = (state_12691[(2)]);var state_12691__$1 = (function (){var statearr_12709 = state_12691;(statearr_12709[(12)] = inst_12684);
return statearr_12709;
})();var statearr_12710_12734 = state_12691__$1;(statearr_12710_12734[(2)] = null);
(statearr_12710_12734[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12692 === (10)))
{var inst_12659 = (state_12691[(2)]);var inst_12660 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12691__$1 = (function (){var statearr_12711 = state_12691;(statearr_12711[(13)] = inst_12659);
return statearr_12711;
})();var statearr_12712_12735 = state_12691__$1;(statearr_12712_12735[(2)] = inst_12660);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12691__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12692 === (8)))
{var inst_12673 = (state_12691[(2)]);var state_12691__$1 = state_12691;var statearr_12713_12736 = state_12691__$1;(statearr_12713_12736[(2)] = inst_12673);
(statearr_12713_12736[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5725__auto___12721,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5710__auto__,c__5725__auto___12721,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_12717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12717[(0)] = state_machine__5711__auto__);
(statearr_12717[(1)] = (1));
return statearr_12717;
});
var state_machine__5711__auto____1 = (function (state_12691){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_12691);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e12718){if((e12718 instanceof Object))
{var ex__5714__auto__ = e12718;var statearr_12719_12737 = state_12691;(statearr_12719_12737[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12691);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12738 = state_12691;
state_12691 = G__12738;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_12691){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_12691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___12721,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5727__auto__ = (function (){var statearr_12720 = f__5726__auto__.call(null);(statearr_12720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___12721);
return statearr_12720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___12721,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5725__auto___12846 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___12846,out){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___12846,out){
return (function (state_12822){var state_val_12823 = (state_12822[(1)]);if((state_val_12823 === (7)))
{var inst_12801 = (state_12822[(7)]);var inst_12802 = (state_12822[(8)]);var inst_12801__$1 = (state_12822[(2)]);var inst_12802__$1 = cljs.core.nth.call(null,inst_12801__$1,(0),null);var inst_12803 = cljs.core.nth.call(null,inst_12801__$1,(1),null);var inst_12804 = (inst_12802__$1 == null);var state_12822__$1 = (function (){var statearr_12824 = state_12822;(statearr_12824[(9)] = inst_12803);
(statearr_12824[(7)] = inst_12801__$1);
(statearr_12824[(8)] = inst_12802__$1);
return statearr_12824;
})();if(cljs.core.truth_(inst_12804))
{var statearr_12825_12847 = state_12822__$1;(statearr_12825_12847[(1)] = (8));
} else
{var statearr_12826_12848 = state_12822__$1;(statearr_12826_12848[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12823 === (1)))
{var inst_12793 = cljs.core.vec.call(null,chs);var inst_12794 = inst_12793;var state_12822__$1 = (function (){var statearr_12827 = state_12822;(statearr_12827[(10)] = inst_12794);
return statearr_12827;
})();var statearr_12828_12849 = state_12822__$1;(statearr_12828_12849[(2)] = null);
(statearr_12828_12849[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12823 === (4)))
{var inst_12794 = (state_12822[(10)]);var state_12822__$1 = state_12822;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12822__$1,(7),inst_12794);
} else
{if((state_val_12823 === (6)))
{var inst_12818 = (state_12822[(2)]);var state_12822__$1 = state_12822;var statearr_12829_12850 = state_12822__$1;(statearr_12829_12850[(2)] = inst_12818);
(statearr_12829_12850[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12823 === (3)))
{var inst_12820 = (state_12822[(2)]);var state_12822__$1 = state_12822;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12822__$1,inst_12820);
} else
{if((state_val_12823 === (2)))
{var inst_12794 = (state_12822[(10)]);var inst_12796 = cljs.core.count.call(null,inst_12794);var inst_12797 = (inst_12796 > (0));var state_12822__$1 = state_12822;if(cljs.core.truth_(inst_12797))
{var statearr_12831_12851 = state_12822__$1;(statearr_12831_12851[(1)] = (4));
} else
{var statearr_12832_12852 = state_12822__$1;(statearr_12832_12852[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12823 === (11)))
{var inst_12794 = (state_12822[(10)]);var inst_12811 = (state_12822[(2)]);var tmp12830 = inst_12794;var inst_12794__$1 = tmp12830;var state_12822__$1 = (function (){var statearr_12833 = state_12822;(statearr_12833[(11)] = inst_12811);
(statearr_12833[(10)] = inst_12794__$1);
return statearr_12833;
})();var statearr_12834_12853 = state_12822__$1;(statearr_12834_12853[(2)] = null);
(statearr_12834_12853[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12823 === (9)))
{var inst_12802 = (state_12822[(8)]);var state_12822__$1 = state_12822;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12822__$1,(11),out,inst_12802);
} else
{if((state_val_12823 === (5)))
{var inst_12816 = cljs.core.async.close_BANG_.call(null,out);var state_12822__$1 = state_12822;var statearr_12835_12854 = state_12822__$1;(statearr_12835_12854[(2)] = inst_12816);
(statearr_12835_12854[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12823 === (10)))
{var inst_12814 = (state_12822[(2)]);var state_12822__$1 = state_12822;var statearr_12836_12855 = state_12822__$1;(statearr_12836_12855[(2)] = inst_12814);
(statearr_12836_12855[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12823 === (8)))
{var inst_12803 = (state_12822[(9)]);var inst_12794 = (state_12822[(10)]);var inst_12801 = (state_12822[(7)]);var inst_12802 = (state_12822[(8)]);var inst_12806 = (function (){var c = inst_12803;var v = inst_12802;var vec__12799 = inst_12801;var cs = inst_12794;return ((function (c,v,vec__12799,cs,inst_12803,inst_12794,inst_12801,inst_12802,state_val_12823,c__5725__auto___12846,out){
return (function (p1__12739_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12739_SHARP_);
});
;})(c,v,vec__12799,cs,inst_12803,inst_12794,inst_12801,inst_12802,state_val_12823,c__5725__auto___12846,out))
})();var inst_12807 = cljs.core.filterv.call(null,inst_12806,inst_12794);var inst_12794__$1 = inst_12807;var state_12822__$1 = (function (){var statearr_12837 = state_12822;(statearr_12837[(10)] = inst_12794__$1);
return statearr_12837;
})();var statearr_12838_12856 = state_12822__$1;(statearr_12838_12856[(2)] = null);
(statearr_12838_12856[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5725__auto___12846,out))
;return ((function (switch__5710__auto__,c__5725__auto___12846,out){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_12842 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12842[(0)] = state_machine__5711__auto__);
(statearr_12842[(1)] = (1));
return statearr_12842;
});
var state_machine__5711__auto____1 = (function (state_12822){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_12822);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e12843){if((e12843 instanceof Object))
{var ex__5714__auto__ = e12843;var statearr_12844_12857 = state_12822;(statearr_12844_12857[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12822);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12858 = state_12822;
state_12822 = G__12858;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_12822){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_12822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___12846,out))
})();var state__5727__auto__ = (function (){var statearr_12845 = f__5726__auto__.call(null);(statearr_12845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___12846);
return statearr_12845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___12846,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5725__auto___12951 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___12951,out){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___12951,out){
return (function (state_12928){var state_val_12929 = (state_12928[(1)]);if((state_val_12929 === (7)))
{var inst_12910 = (state_12928[(7)]);var inst_12910__$1 = (state_12928[(2)]);var inst_12911 = (inst_12910__$1 == null);var inst_12912 = cljs.core.not.call(null,inst_12911);var state_12928__$1 = (function (){var statearr_12930 = state_12928;(statearr_12930[(7)] = inst_12910__$1);
return statearr_12930;
})();if(inst_12912)
{var statearr_12931_12952 = state_12928__$1;(statearr_12931_12952[(1)] = (8));
} else
{var statearr_12932_12953 = state_12928__$1;(statearr_12932_12953[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12929 === (1)))
{var inst_12905 = (0);var state_12928__$1 = (function (){var statearr_12933 = state_12928;(statearr_12933[(8)] = inst_12905);
return statearr_12933;
})();var statearr_12934_12954 = state_12928__$1;(statearr_12934_12954[(2)] = null);
(statearr_12934_12954[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12929 === (4)))
{var state_12928__$1 = state_12928;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12928__$1,(7),ch);
} else
{if((state_val_12929 === (6)))
{var inst_12923 = (state_12928[(2)]);var state_12928__$1 = state_12928;var statearr_12935_12955 = state_12928__$1;(statearr_12935_12955[(2)] = inst_12923);
(statearr_12935_12955[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12929 === (3)))
{var inst_12925 = (state_12928[(2)]);var inst_12926 = cljs.core.async.close_BANG_.call(null,out);var state_12928__$1 = (function (){var statearr_12936 = state_12928;(statearr_12936[(9)] = inst_12925);
return statearr_12936;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12928__$1,inst_12926);
} else
{if((state_val_12929 === (2)))
{var inst_12905 = (state_12928[(8)]);var inst_12907 = (inst_12905 < n);var state_12928__$1 = state_12928;if(cljs.core.truth_(inst_12907))
{var statearr_12937_12956 = state_12928__$1;(statearr_12937_12956[(1)] = (4));
} else
{var statearr_12938_12957 = state_12928__$1;(statearr_12938_12957[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12929 === (11)))
{var inst_12905 = (state_12928[(8)]);var inst_12915 = (state_12928[(2)]);var inst_12916 = (inst_12905 + (1));var inst_12905__$1 = inst_12916;var state_12928__$1 = (function (){var statearr_12939 = state_12928;(statearr_12939[(10)] = inst_12915);
(statearr_12939[(8)] = inst_12905__$1);
return statearr_12939;
})();var statearr_12940_12958 = state_12928__$1;(statearr_12940_12958[(2)] = null);
(statearr_12940_12958[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12929 === (9)))
{var state_12928__$1 = state_12928;var statearr_12941_12959 = state_12928__$1;(statearr_12941_12959[(2)] = null);
(statearr_12941_12959[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12929 === (5)))
{var state_12928__$1 = state_12928;var statearr_12942_12960 = state_12928__$1;(statearr_12942_12960[(2)] = null);
(statearr_12942_12960[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12929 === (10)))
{var inst_12920 = (state_12928[(2)]);var state_12928__$1 = state_12928;var statearr_12943_12961 = state_12928__$1;(statearr_12943_12961[(2)] = inst_12920);
(statearr_12943_12961[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12929 === (8)))
{var inst_12910 = (state_12928[(7)]);var state_12928__$1 = state_12928;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12928__$1,(11),out,inst_12910);
} else
{return null;
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
});})(c__5725__auto___12951,out))
;return ((function (switch__5710__auto__,c__5725__auto___12951,out){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_12947 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12947[(0)] = state_machine__5711__auto__);
(statearr_12947[(1)] = (1));
return statearr_12947;
});
var state_machine__5711__auto____1 = (function (state_12928){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_12928);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e12948){if((e12948 instanceof Object))
{var ex__5714__auto__ = e12948;var statearr_12949_12962 = state_12928;(statearr_12949_12962[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12928);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12963 = state_12928;
state_12928 = G__12963;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_12928){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_12928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___12951,out))
})();var state__5727__auto__ = (function (){var statearr_12950 = f__5726__auto__.call(null);(statearr_12950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___12951);
return statearr_12950;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___12951,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5725__auto___13060 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___13060,out){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___13060,out){
return (function (state_13035){var state_val_13036 = (state_13035[(1)]);if((state_val_13036 === (7)))
{var inst_13030 = (state_13035[(2)]);var state_13035__$1 = state_13035;var statearr_13037_13061 = state_13035__$1;(statearr_13037_13061[(2)] = inst_13030);
(statearr_13037_13061[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13036 === (1)))
{var inst_13012 = null;var state_13035__$1 = (function (){var statearr_13038 = state_13035;(statearr_13038[(7)] = inst_13012);
return statearr_13038;
})();var statearr_13039_13062 = state_13035__$1;(statearr_13039_13062[(2)] = null);
(statearr_13039_13062[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13036 === (4)))
{var inst_13015 = (state_13035[(8)]);var inst_13015__$1 = (state_13035[(2)]);var inst_13016 = (inst_13015__$1 == null);var inst_13017 = cljs.core.not.call(null,inst_13016);var state_13035__$1 = (function (){var statearr_13040 = state_13035;(statearr_13040[(8)] = inst_13015__$1);
return statearr_13040;
})();if(inst_13017)
{var statearr_13041_13063 = state_13035__$1;(statearr_13041_13063[(1)] = (5));
} else
{var statearr_13042_13064 = state_13035__$1;(statearr_13042_13064[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13036 === (6)))
{var state_13035__$1 = state_13035;var statearr_13043_13065 = state_13035__$1;(statearr_13043_13065[(2)] = null);
(statearr_13043_13065[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13036 === (3)))
{var inst_13032 = (state_13035[(2)]);var inst_13033 = cljs.core.async.close_BANG_.call(null,out);var state_13035__$1 = (function (){var statearr_13044 = state_13035;(statearr_13044[(9)] = inst_13032);
return statearr_13044;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13035__$1,inst_13033);
} else
{if((state_val_13036 === (2)))
{var state_13035__$1 = state_13035;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13035__$1,(4),ch);
} else
{if((state_val_13036 === (11)))
{var inst_13015 = (state_13035[(8)]);var inst_13024 = (state_13035[(2)]);var inst_13012 = inst_13015;var state_13035__$1 = (function (){var statearr_13045 = state_13035;(statearr_13045[(7)] = inst_13012);
(statearr_13045[(10)] = inst_13024);
return statearr_13045;
})();var statearr_13046_13066 = state_13035__$1;(statearr_13046_13066[(2)] = null);
(statearr_13046_13066[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13036 === (9)))
{var inst_13015 = (state_13035[(8)]);var state_13035__$1 = state_13035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13035__$1,(11),out,inst_13015);
} else
{if((state_val_13036 === (5)))
{var inst_13015 = (state_13035[(8)]);var inst_13012 = (state_13035[(7)]);var inst_13019 = cljs.core._EQ_.call(null,inst_13015,inst_13012);var state_13035__$1 = state_13035;if(inst_13019)
{var statearr_13048_13067 = state_13035__$1;(statearr_13048_13067[(1)] = (8));
} else
{var statearr_13049_13068 = state_13035__$1;(statearr_13049_13068[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13036 === (10)))
{var inst_13027 = (state_13035[(2)]);var state_13035__$1 = state_13035;var statearr_13050_13069 = state_13035__$1;(statearr_13050_13069[(2)] = inst_13027);
(statearr_13050_13069[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13036 === (8)))
{var inst_13012 = (state_13035[(7)]);var tmp13047 = inst_13012;var inst_13012__$1 = tmp13047;var state_13035__$1 = (function (){var statearr_13051 = state_13035;(statearr_13051[(7)] = inst_13012__$1);
return statearr_13051;
})();var statearr_13052_13070 = state_13035__$1;(statearr_13052_13070[(2)] = null);
(statearr_13052_13070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5725__auto___13060,out))
;return ((function (switch__5710__auto__,c__5725__auto___13060,out){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_13056 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13056[(0)] = state_machine__5711__auto__);
(statearr_13056[(1)] = (1));
return statearr_13056;
});
var state_machine__5711__auto____1 = (function (state_13035){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_13035);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e13057){if((e13057 instanceof Object))
{var ex__5714__auto__ = e13057;var statearr_13058_13071 = state_13035;(statearr_13058_13071[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13035);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13057;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13072 = state_13035;
state_13035 = G__13072;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_13035){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_13035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___13060,out))
})();var state__5727__auto__ = (function (){var statearr_13059 = f__5726__auto__.call(null);(statearr_13059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___13060);
return statearr_13059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___13060,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5725__auto___13207 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___13207,out){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___13207,out){
return (function (state_13177){var state_val_13178 = (state_13177[(1)]);if((state_val_13178 === (7)))
{var inst_13173 = (state_13177[(2)]);var state_13177__$1 = state_13177;var statearr_13179_13208 = state_13177__$1;(statearr_13179_13208[(2)] = inst_13173);
(statearr_13179_13208[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (1)))
{var inst_13140 = (new Array(n));var inst_13141 = inst_13140;var inst_13142 = (0);var state_13177__$1 = (function (){var statearr_13180 = state_13177;(statearr_13180[(7)] = inst_13142);
(statearr_13180[(8)] = inst_13141);
return statearr_13180;
})();var statearr_13181_13209 = state_13177__$1;(statearr_13181_13209[(2)] = null);
(statearr_13181_13209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (4)))
{var inst_13145 = (state_13177[(9)]);var inst_13145__$1 = (state_13177[(2)]);var inst_13146 = (inst_13145__$1 == null);var inst_13147 = cljs.core.not.call(null,inst_13146);var state_13177__$1 = (function (){var statearr_13182 = state_13177;(statearr_13182[(9)] = inst_13145__$1);
return statearr_13182;
})();if(inst_13147)
{var statearr_13183_13210 = state_13177__$1;(statearr_13183_13210[(1)] = (5));
} else
{var statearr_13184_13211 = state_13177__$1;(statearr_13184_13211[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (15)))
{var inst_13167 = (state_13177[(2)]);var state_13177__$1 = state_13177;var statearr_13185_13212 = state_13177__$1;(statearr_13185_13212[(2)] = inst_13167);
(statearr_13185_13212[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (13)))
{var state_13177__$1 = state_13177;var statearr_13186_13213 = state_13177__$1;(statearr_13186_13213[(2)] = null);
(statearr_13186_13213[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (6)))
{var inst_13142 = (state_13177[(7)]);var inst_13163 = (inst_13142 > (0));var state_13177__$1 = state_13177;if(cljs.core.truth_(inst_13163))
{var statearr_13187_13214 = state_13177__$1;(statearr_13187_13214[(1)] = (12));
} else
{var statearr_13188_13215 = state_13177__$1;(statearr_13188_13215[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (3)))
{var inst_13175 = (state_13177[(2)]);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13177__$1,inst_13175);
} else
{if((state_val_13178 === (12)))
{var inst_13141 = (state_13177[(8)]);var inst_13165 = cljs.core.vec.call(null,inst_13141);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13177__$1,(15),out,inst_13165);
} else
{if((state_val_13178 === (2)))
{var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13177__$1,(4),ch);
} else
{if((state_val_13178 === (11)))
{var inst_13157 = (state_13177[(2)]);var inst_13158 = (new Array(n));var inst_13141 = inst_13158;var inst_13142 = (0);var state_13177__$1 = (function (){var statearr_13189 = state_13177;(statearr_13189[(7)] = inst_13142);
(statearr_13189[(8)] = inst_13141);
(statearr_13189[(10)] = inst_13157);
return statearr_13189;
})();var statearr_13190_13216 = state_13177__$1;(statearr_13190_13216[(2)] = null);
(statearr_13190_13216[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (9)))
{var inst_13141 = (state_13177[(8)]);var inst_13155 = cljs.core.vec.call(null,inst_13141);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13177__$1,(11),out,inst_13155);
} else
{if((state_val_13178 === (5)))
{var inst_13142 = (state_13177[(7)]);var inst_13150 = (state_13177[(11)]);var inst_13141 = (state_13177[(8)]);var inst_13145 = (state_13177[(9)]);var inst_13149 = (inst_13141[inst_13142] = inst_13145);var inst_13150__$1 = (inst_13142 + (1));var inst_13151 = (inst_13150__$1 < n);var state_13177__$1 = (function (){var statearr_13191 = state_13177;(statearr_13191[(11)] = inst_13150__$1);
(statearr_13191[(12)] = inst_13149);
return statearr_13191;
})();if(cljs.core.truth_(inst_13151))
{var statearr_13192_13217 = state_13177__$1;(statearr_13192_13217[(1)] = (8));
} else
{var statearr_13193_13218 = state_13177__$1;(statearr_13193_13218[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (14)))
{var inst_13170 = (state_13177[(2)]);var inst_13171 = cljs.core.async.close_BANG_.call(null,out);var state_13177__$1 = (function (){var statearr_13195 = state_13177;(statearr_13195[(13)] = inst_13170);
return statearr_13195;
})();var statearr_13196_13219 = state_13177__$1;(statearr_13196_13219[(2)] = inst_13171);
(statearr_13196_13219[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (10)))
{var inst_13161 = (state_13177[(2)]);var state_13177__$1 = state_13177;var statearr_13197_13220 = state_13177__$1;(statearr_13197_13220[(2)] = inst_13161);
(statearr_13197_13220[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (8)))
{var inst_13150 = (state_13177[(11)]);var inst_13141 = (state_13177[(8)]);var tmp13194 = inst_13141;var inst_13141__$1 = tmp13194;var inst_13142 = inst_13150;var state_13177__$1 = (function (){var statearr_13198 = state_13177;(statearr_13198[(7)] = inst_13142);
(statearr_13198[(8)] = inst_13141__$1);
return statearr_13198;
})();var statearr_13199_13221 = state_13177__$1;(statearr_13199_13221[(2)] = null);
(statearr_13199_13221[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5725__auto___13207,out))
;return ((function (switch__5710__auto__,c__5725__auto___13207,out){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_13203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13203[(0)] = state_machine__5711__auto__);
(statearr_13203[(1)] = (1));
return statearr_13203;
});
var state_machine__5711__auto____1 = (function (state_13177){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_13177);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e13204){if((e13204 instanceof Object))
{var ex__5714__auto__ = e13204;var statearr_13205_13222 = state_13177;(statearr_13205_13222[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13177);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13223 = state_13177;
state_13177 = G__13223;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_13177){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_13177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___13207,out))
})();var state__5727__auto__ = (function (){var statearr_13206 = f__5726__auto__.call(null);(statearr_13206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___13207);
return statearr_13206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___13207,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5725__auto___13366 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___13366,out){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___13366,out){
return (function (state_13336){var state_val_13337 = (state_13336[(1)]);if((state_val_13337 === (7)))
{var inst_13332 = (state_13336[(2)]);var state_13336__$1 = state_13336;var statearr_13338_13367 = state_13336__$1;(statearr_13338_13367[(2)] = inst_13332);
(statearr_13338_13367[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13337 === (1)))
{var inst_13295 = [];var inst_13296 = inst_13295;var inst_13297 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13336__$1 = (function (){var statearr_13339 = state_13336;(statearr_13339[(7)] = inst_13296);
(statearr_13339[(8)] = inst_13297);
return statearr_13339;
})();var statearr_13340_13368 = state_13336__$1;(statearr_13340_13368[(2)] = null);
(statearr_13340_13368[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13337 === (4)))
{var inst_13300 = (state_13336[(9)]);var inst_13300__$1 = (state_13336[(2)]);var inst_13301 = (inst_13300__$1 == null);var inst_13302 = cljs.core.not.call(null,inst_13301);var state_13336__$1 = (function (){var statearr_13341 = state_13336;(statearr_13341[(9)] = inst_13300__$1);
return statearr_13341;
})();if(inst_13302)
{var statearr_13342_13369 = state_13336__$1;(statearr_13342_13369[(1)] = (5));
} else
{var statearr_13343_13370 = state_13336__$1;(statearr_13343_13370[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13337 === (15)))
{var inst_13326 = (state_13336[(2)]);var state_13336__$1 = state_13336;var statearr_13344_13371 = state_13336__$1;(statearr_13344_13371[(2)] = inst_13326);
(statearr_13344_13371[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13337 === (13)))
{var state_13336__$1 = state_13336;var statearr_13345_13372 = state_13336__$1;(statearr_13345_13372[(2)] = null);
(statearr_13345_13372[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13337 === (6)))
{var inst_13296 = (state_13336[(7)]);var inst_13321 = inst_13296.length;var inst_13322 = (inst_13321 > (0));var state_13336__$1 = state_13336;if(cljs.core.truth_(inst_13322))
{var statearr_13346_13373 = state_13336__$1;(statearr_13346_13373[(1)] = (12));
} else
{var statearr_13347_13374 = state_13336__$1;(statearr_13347_13374[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13337 === (3)))
{var inst_13334 = (state_13336[(2)]);var state_13336__$1 = state_13336;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13336__$1,inst_13334);
} else
{if((state_val_13337 === (12)))
{var inst_13296 = (state_13336[(7)]);var inst_13324 = cljs.core.vec.call(null,inst_13296);var state_13336__$1 = state_13336;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13336__$1,(15),out,inst_13324);
} else
{if((state_val_13337 === (2)))
{var state_13336__$1 = state_13336;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13336__$1,(4),ch);
} else
{if((state_val_13337 === (11)))
{var inst_13300 = (state_13336[(9)]);var inst_13304 = (state_13336[(10)]);var inst_13314 = (state_13336[(2)]);var inst_13315 = [];var inst_13316 = inst_13315.push(inst_13300);var inst_13296 = inst_13315;var inst_13297 = inst_13304;var state_13336__$1 = (function (){var statearr_13348 = state_13336;(statearr_13348[(7)] = inst_13296);
(statearr_13348[(11)] = inst_13314);
(statearr_13348[(8)] = inst_13297);
(statearr_13348[(12)] = inst_13316);
return statearr_13348;
})();var statearr_13349_13375 = state_13336__$1;(statearr_13349_13375[(2)] = null);
(statearr_13349_13375[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13337 === (9)))
{var inst_13296 = (state_13336[(7)]);var inst_13312 = cljs.core.vec.call(null,inst_13296);var state_13336__$1 = state_13336;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13336__$1,(11),out,inst_13312);
} else
{if((state_val_13337 === (5)))
{var inst_13300 = (state_13336[(9)]);var inst_13304 = (state_13336[(10)]);var inst_13297 = (state_13336[(8)]);var inst_13304__$1 = f.call(null,inst_13300);var inst_13305 = cljs.core._EQ_.call(null,inst_13304__$1,inst_13297);var inst_13306 = cljs.core.keyword_identical_QMARK_.call(null,inst_13297,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13307 = (inst_13305) || (inst_13306);var state_13336__$1 = (function (){var statearr_13350 = state_13336;(statearr_13350[(10)] = inst_13304__$1);
return statearr_13350;
})();if(cljs.core.truth_(inst_13307))
{var statearr_13351_13376 = state_13336__$1;(statearr_13351_13376[(1)] = (8));
} else
{var statearr_13352_13377 = state_13336__$1;(statearr_13352_13377[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13337 === (14)))
{var inst_13329 = (state_13336[(2)]);var inst_13330 = cljs.core.async.close_BANG_.call(null,out);var state_13336__$1 = (function (){var statearr_13354 = state_13336;(statearr_13354[(13)] = inst_13329);
return statearr_13354;
})();var statearr_13355_13378 = state_13336__$1;(statearr_13355_13378[(2)] = inst_13330);
(statearr_13355_13378[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13337 === (10)))
{var inst_13319 = (state_13336[(2)]);var state_13336__$1 = state_13336;var statearr_13356_13379 = state_13336__$1;(statearr_13356_13379[(2)] = inst_13319);
(statearr_13356_13379[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13337 === (8)))
{var inst_13300 = (state_13336[(9)]);var inst_13296 = (state_13336[(7)]);var inst_13304 = (state_13336[(10)]);var inst_13309 = inst_13296.push(inst_13300);var tmp13353 = inst_13296;var inst_13296__$1 = tmp13353;var inst_13297 = inst_13304;var state_13336__$1 = (function (){var statearr_13357 = state_13336;(statearr_13357[(7)] = inst_13296__$1);
(statearr_13357[(14)] = inst_13309);
(statearr_13357[(8)] = inst_13297);
return statearr_13357;
})();var statearr_13358_13380 = state_13336__$1;(statearr_13358_13380[(2)] = null);
(statearr_13358_13380[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5725__auto___13366,out))
;return ((function (switch__5710__auto__,c__5725__auto___13366,out){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_13362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13362[(0)] = state_machine__5711__auto__);
(statearr_13362[(1)] = (1));
return statearr_13362;
});
var state_machine__5711__auto____1 = (function (state_13336){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_13336);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e13363){if((e13363 instanceof Object))
{var ex__5714__auto__ = e13363;var statearr_13364_13381 = state_13336;(statearr_13364_13381[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13336);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13382 = state_13336;
state_13336 = G__13382;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_13336){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_13336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___13366,out))
})();var state__5727__auto__ = (function (){var statearr_13365 = f__5726__auto__.call(null);(statearr_13365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___13366);
return statearr_13365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___13366,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map