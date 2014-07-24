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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10722 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10722 = (function (f,fn_handler,meta10723){
this.f = f;
this.fn_handler = fn_handler;
this.meta10723 = meta10723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10722.cljs$lang$type = true;
cljs.core.async.t10722.cljs$lang$ctorStr = "cljs.core.async/t10722";
cljs.core.async.t10722.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10722");
});
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10724){var self__ = this;
var _10724__$1 = this;return self__.meta10723;
});
cljs.core.async.t10722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10724,meta10723__$1){var self__ = this;
var _10724__$1 = this;return (new cljs.core.async.t10722(self__.f,self__.fn_handler,meta10723__$1));
});
cljs.core.async.__GT_t10722 = (function __GT_t10722(f__$1,fn_handler__$1,meta10723){return (new cljs.core.async.t10722(f__$1,fn_handler__$1,meta10723));
});
}
return (new cljs.core.async.t10722(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10726 = buff;if(G__10726)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__10726.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10726.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10726);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10726);
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
{var val_10727 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10727);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10727,ret){
return (function (){return fn1.call(null,val_10727);
});})(val_10727,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4416__auto___10728 = n;var x_10729 = (0);while(true){
if((x_10729 < n__4416__auto___10728))
{(a[x_10729] = (0));
{
var G__10730 = (x_10729 + (1));
x_10729 = G__10730;
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
var G__10731 = (i + (1));
i = G__10731;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10735 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10735 = (function (flag,alt_flag,meta10736){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10736 = meta10736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10735.cljs$lang$type = true;
cljs.core.async.t10735.cljs$lang$ctorStr = "cljs.core.async/t10735";
cljs.core.async.t10735.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10735");
});})(flag))
;
cljs.core.async.t10735.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10737){var self__ = this;
var _10737__$1 = this;return self__.meta10736;
});})(flag))
;
cljs.core.async.t10735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10737,meta10736__$1){var self__ = this;
var _10737__$1 = this;return (new cljs.core.async.t10735(self__.flag,self__.alt_flag,meta10736__$1));
});})(flag))
;
cljs.core.async.__GT_t10735 = ((function (flag){
return (function __GT_t10735(flag__$1,alt_flag__$1,meta10736){return (new cljs.core.async.t10735(flag__$1,alt_flag__$1,meta10736));
});})(flag))
;
}
return (new cljs.core.async.t10735(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10741 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10741 = (function (cb,flag,alt_handler,meta10742){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10742 = meta10742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10741.cljs$lang$type = true;
cljs.core.async.t10741.cljs$lang$ctorStr = "cljs.core.async/t10741";
cljs.core.async.t10741.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10741");
});
cljs.core.async.t10741.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10743){var self__ = this;
var _10743__$1 = this;return self__.meta10742;
});
cljs.core.async.t10741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10743,meta10742__$1){var self__ = this;
var _10743__$1 = this;return (new cljs.core.async.t10741(self__.cb,self__.flag,self__.alt_handler,meta10742__$1));
});
cljs.core.async.__GT_t10741 = (function __GT_t10741(cb__$1,flag__$1,alt_handler__$1,meta10742){return (new cljs.core.async.t10741(cb__$1,flag__$1,alt_handler__$1,meta10742));
});
}
return (new cljs.core.async.t10741(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10744_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10744_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10745_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10745_SHARP_,port], null));
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
var G__10746 = (i + (1));
i = G__10746;
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
var alts_BANG___delegate = function (ports,p__10747){var map__10749 = p__10747;var map__10749__$1 = ((cljs.core.seq_QMARK_.call(null,map__10749))?cljs.core.apply.call(null,cljs.core.hash_map,map__10749):map__10749);var opts = map__10749__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10747 = null;if (arguments.length > 1) {
  p__10747 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10747);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10750){
var ports = cljs.core.first(arglist__10750);
var p__10747 = cljs.core.rest(arglist__10750);
return alts_BANG___delegate(ports,p__10747);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10758 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10758 = (function (ch,f,map_LT_,meta10759){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10759 = meta10759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10758.cljs$lang$type = true;
cljs.core.async.t10758.cljs$lang$ctorStr = "cljs.core.async/t10758";
cljs.core.async.t10758.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10758");
});
cljs.core.async.t10758.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10758.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10758.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10758.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10761 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10761 = (function (fn1,_,meta10759,ch,f,map_LT_,meta10762){
this.fn1 = fn1;
this._ = _;
this.meta10759 = meta10759;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10762 = meta10762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10761.cljs$lang$type = true;
cljs.core.async.t10761.cljs$lang$ctorStr = "cljs.core.async/t10761";
cljs.core.async.t10761.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10761");
});})(___$1))
;
cljs.core.async.t10761.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10761.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10751_SHARP_){return f1.call(null,(((p1__10751_SHARP_ == null))?null:self__.f.call(null,p1__10751_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10763){var self__ = this;
var _10763__$1 = this;return self__.meta10762;
});})(___$1))
;
cljs.core.async.t10761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10763,meta10762__$1){var self__ = this;
var _10763__$1 = this;return (new cljs.core.async.t10761(self__.fn1,self__._,self__.meta10759,self__.ch,self__.f,self__.map_LT_,meta10762__$1));
});})(___$1))
;
cljs.core.async.__GT_t10761 = ((function (___$1){
return (function __GT_t10761(fn1__$1,___$2,meta10759__$1,ch__$2,f__$2,map_LT___$2,meta10762){return (new cljs.core.async.t10761(fn1__$1,___$2,meta10759__$1,ch__$2,f__$2,map_LT___$2,meta10762));
});})(___$1))
;
}
return (new cljs.core.async.t10761(fn1,___$1,self__.meta10759,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10758.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10758.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10758.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10760){var self__ = this;
var _10760__$1 = this;return self__.meta10759;
});
cljs.core.async.t10758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10760,meta10759__$1){var self__ = this;
var _10760__$1 = this;return (new cljs.core.async.t10758(self__.ch,self__.f,self__.map_LT_,meta10759__$1));
});
cljs.core.async.__GT_t10758 = (function __GT_t10758(ch__$1,f__$1,map_LT___$1,meta10759){return (new cljs.core.async.t10758(ch__$1,f__$1,map_LT___$1,meta10759));
});
}
return (new cljs.core.async.t10758(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10767 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10767 = (function (ch,f,map_GT_,meta10768){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10768 = meta10768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10767.cljs$lang$type = true;
cljs.core.async.t10767.cljs$lang$ctorStr = "cljs.core.async/t10767";
cljs.core.async.t10767.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10767");
});
cljs.core.async.t10767.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10767.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10767.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10769){var self__ = this;
var _10769__$1 = this;return self__.meta10768;
});
cljs.core.async.t10767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10769,meta10768__$1){var self__ = this;
var _10769__$1 = this;return (new cljs.core.async.t10767(self__.ch,self__.f,self__.map_GT_,meta10768__$1));
});
cljs.core.async.__GT_t10767 = (function __GT_t10767(ch__$1,f__$1,map_GT___$1,meta10768){return (new cljs.core.async.t10767(ch__$1,f__$1,map_GT___$1,meta10768));
});
}
return (new cljs.core.async.t10767(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10773 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10773 = (function (ch,p,filter_GT_,meta10774){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10774 = meta10774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10773.cljs$lang$type = true;
cljs.core.async.t10773.cljs$lang$ctorStr = "cljs.core.async/t10773";
cljs.core.async.t10773.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t10773");
});
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10773.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10775){var self__ = this;
var _10775__$1 = this;return self__.meta10774;
});
cljs.core.async.t10773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10775,meta10774__$1){var self__ = this;
var _10775__$1 = this;return (new cljs.core.async.t10773(self__.ch,self__.p,self__.filter_GT_,meta10774__$1));
});
cljs.core.async.__GT_t10773 = (function __GT_t10773(ch__$1,p__$1,filter_GT___$1,meta10774){return (new cljs.core.async.t10773(ch__$1,p__$1,filter_GT___$1,meta10774));
});
}
return (new cljs.core.async.t10773(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5725__auto___10858 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___10858,out){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___10858,out){
return (function (state_10837){var state_val_10838 = (state_10837[(1)]);if((state_val_10838 === (7)))
{var inst_10833 = (state_10837[(2)]);var state_10837__$1 = state_10837;var statearr_10839_10859 = state_10837__$1;(statearr_10839_10859[(2)] = inst_10833);
(statearr_10839_10859[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10838 === (1)))
{var state_10837__$1 = state_10837;var statearr_10840_10860 = state_10837__$1;(statearr_10840_10860[(2)] = null);
(statearr_10840_10860[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10838 === (4)))
{var inst_10819 = (state_10837[(7)]);var inst_10819__$1 = (state_10837[(2)]);var inst_10820 = (inst_10819__$1 == null);var state_10837__$1 = (function (){var statearr_10841 = state_10837;(statearr_10841[(7)] = inst_10819__$1);
return statearr_10841;
})();if(cljs.core.truth_(inst_10820))
{var statearr_10842_10861 = state_10837__$1;(statearr_10842_10861[(1)] = (5));
} else
{var statearr_10843_10862 = state_10837__$1;(statearr_10843_10862[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10838 === (6)))
{var inst_10819 = (state_10837[(7)]);var inst_10824 = p.call(null,inst_10819);var state_10837__$1 = state_10837;if(cljs.core.truth_(inst_10824))
{var statearr_10844_10863 = state_10837__$1;(statearr_10844_10863[(1)] = (8));
} else
{var statearr_10845_10864 = state_10837__$1;(statearr_10845_10864[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10838 === (3)))
{var inst_10835 = (state_10837[(2)]);var state_10837__$1 = state_10837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10837__$1,inst_10835);
} else
{if((state_val_10838 === (2)))
{var state_10837__$1 = state_10837;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10837__$1,(4),ch);
} else
{if((state_val_10838 === (11)))
{var inst_10827 = (state_10837[(2)]);var state_10837__$1 = state_10837;var statearr_10846_10865 = state_10837__$1;(statearr_10846_10865[(2)] = inst_10827);
(statearr_10846_10865[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10838 === (9)))
{var state_10837__$1 = state_10837;var statearr_10847_10866 = state_10837__$1;(statearr_10847_10866[(2)] = null);
(statearr_10847_10866[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10838 === (5)))
{var inst_10822 = cljs.core.async.close_BANG_.call(null,out);var state_10837__$1 = state_10837;var statearr_10848_10867 = state_10837__$1;(statearr_10848_10867[(2)] = inst_10822);
(statearr_10848_10867[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10838 === (10)))
{var inst_10830 = (state_10837[(2)]);var state_10837__$1 = (function (){var statearr_10849 = state_10837;(statearr_10849[(8)] = inst_10830);
return statearr_10849;
})();var statearr_10850_10868 = state_10837__$1;(statearr_10850_10868[(2)] = null);
(statearr_10850_10868[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10838 === (8)))
{var inst_10819 = (state_10837[(7)]);var state_10837__$1 = state_10837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10837__$1,(11),out,inst_10819);
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
});})(c__5725__auto___10858,out))
;return ((function (switch__5710__auto__,c__5725__auto___10858,out){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_10854 = [null,null,null,null,null,null,null,null,null];(statearr_10854[(0)] = state_machine__5711__auto__);
(statearr_10854[(1)] = (1));
return statearr_10854;
});
var state_machine__5711__auto____1 = (function (state_10837){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_10837);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e10855){if((e10855 instanceof Object))
{var ex__5714__auto__ = e10855;var statearr_10856_10869 = state_10837;(statearr_10856_10869[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10837);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10855;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10870 = state_10837;
state_10837 = G__10870;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_10837){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_10837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___10858,out))
})();var state__5727__auto__ = (function (){var statearr_10857 = f__5726__auto__.call(null);(statearr_10857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___10858);
return statearr_10857;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___10858,out))
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
return (function (state_11036){var state_val_11037 = (state_11036[(1)]);if((state_val_11037 === (7)))
{var inst_11032 = (state_11036[(2)]);var state_11036__$1 = state_11036;var statearr_11038_11079 = state_11036__$1;(statearr_11038_11079[(2)] = inst_11032);
(statearr_11038_11079[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (20)))
{var inst_11002 = (state_11036[(7)]);var inst_11013 = (state_11036[(2)]);var inst_11014 = cljs.core.next.call(null,inst_11002);var inst_10988 = inst_11014;var inst_10989 = null;var inst_10990 = (0);var inst_10991 = (0);var state_11036__$1 = (function (){var statearr_11039 = state_11036;(statearr_11039[(8)] = inst_10991);
(statearr_11039[(9)] = inst_11013);
(statearr_11039[(10)] = inst_10988);
(statearr_11039[(11)] = inst_10989);
(statearr_11039[(12)] = inst_10990);
return statearr_11039;
})();var statearr_11040_11080 = state_11036__$1;(statearr_11040_11080[(2)] = null);
(statearr_11040_11080[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (1)))
{var state_11036__$1 = state_11036;var statearr_11041_11081 = state_11036__$1;(statearr_11041_11081[(2)] = null);
(statearr_11041_11081[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (4)))
{var inst_10977 = (state_11036[(13)]);var inst_10977__$1 = (state_11036[(2)]);var inst_10978 = (inst_10977__$1 == null);var state_11036__$1 = (function (){var statearr_11042 = state_11036;(statearr_11042[(13)] = inst_10977__$1);
return statearr_11042;
})();if(cljs.core.truth_(inst_10978))
{var statearr_11043_11082 = state_11036__$1;(statearr_11043_11082[(1)] = (5));
} else
{var statearr_11044_11083 = state_11036__$1;(statearr_11044_11083[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (15)))
{var state_11036__$1 = state_11036;var statearr_11048_11084 = state_11036__$1;(statearr_11048_11084[(2)] = null);
(statearr_11048_11084[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (21)))
{var state_11036__$1 = state_11036;var statearr_11049_11085 = state_11036__$1;(statearr_11049_11085[(2)] = null);
(statearr_11049_11085[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (13)))
{var inst_10991 = (state_11036[(8)]);var inst_10988 = (state_11036[(10)]);var inst_10989 = (state_11036[(11)]);var inst_10990 = (state_11036[(12)]);var inst_10998 = (state_11036[(2)]);var inst_10999 = (inst_10991 + (1));var tmp11045 = inst_10988;var tmp11046 = inst_10989;var tmp11047 = inst_10990;var inst_10988__$1 = tmp11045;var inst_10989__$1 = tmp11046;var inst_10990__$1 = tmp11047;var inst_10991__$1 = inst_10999;var state_11036__$1 = (function (){var statearr_11050 = state_11036;(statearr_11050[(8)] = inst_10991__$1);
(statearr_11050[(14)] = inst_10998);
(statearr_11050[(10)] = inst_10988__$1);
(statearr_11050[(11)] = inst_10989__$1);
(statearr_11050[(12)] = inst_10990__$1);
return statearr_11050;
})();var statearr_11051_11086 = state_11036__$1;(statearr_11051_11086[(2)] = null);
(statearr_11051_11086[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (22)))
{var state_11036__$1 = state_11036;var statearr_11052_11087 = state_11036__$1;(statearr_11052_11087[(2)] = null);
(statearr_11052_11087[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (6)))
{var inst_10977 = (state_11036[(13)]);var inst_10986 = f.call(null,inst_10977);var inst_10987 = cljs.core.seq.call(null,inst_10986);var inst_10988 = inst_10987;var inst_10989 = null;var inst_10990 = (0);var inst_10991 = (0);var state_11036__$1 = (function (){var statearr_11053 = state_11036;(statearr_11053[(8)] = inst_10991);
(statearr_11053[(10)] = inst_10988);
(statearr_11053[(11)] = inst_10989);
(statearr_11053[(12)] = inst_10990);
return statearr_11053;
})();var statearr_11054_11088 = state_11036__$1;(statearr_11054_11088[(2)] = null);
(statearr_11054_11088[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (17)))
{var inst_11002 = (state_11036[(7)]);var inst_11006 = cljs.core.chunk_first.call(null,inst_11002);var inst_11007 = cljs.core.chunk_rest.call(null,inst_11002);var inst_11008 = cljs.core.count.call(null,inst_11006);var inst_10988 = inst_11007;var inst_10989 = inst_11006;var inst_10990 = inst_11008;var inst_10991 = (0);var state_11036__$1 = (function (){var statearr_11055 = state_11036;(statearr_11055[(8)] = inst_10991);
(statearr_11055[(10)] = inst_10988);
(statearr_11055[(11)] = inst_10989);
(statearr_11055[(12)] = inst_10990);
return statearr_11055;
})();var statearr_11056_11089 = state_11036__$1;(statearr_11056_11089[(2)] = null);
(statearr_11056_11089[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (3)))
{var inst_11034 = (state_11036[(2)]);var state_11036__$1 = state_11036;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11036__$1,inst_11034);
} else
{if((state_val_11037 === (12)))
{var inst_11022 = (state_11036[(2)]);var state_11036__$1 = state_11036;var statearr_11057_11090 = state_11036__$1;(statearr_11057_11090[(2)] = inst_11022);
(statearr_11057_11090[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (2)))
{var state_11036__$1 = state_11036;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11036__$1,(4),in$);
} else
{if((state_val_11037 === (23)))
{var inst_11030 = (state_11036[(2)]);var state_11036__$1 = state_11036;var statearr_11058_11091 = state_11036__$1;(statearr_11058_11091[(2)] = inst_11030);
(statearr_11058_11091[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (19)))
{var inst_11017 = (state_11036[(2)]);var state_11036__$1 = state_11036;var statearr_11059_11092 = state_11036__$1;(statearr_11059_11092[(2)] = inst_11017);
(statearr_11059_11092[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (11)))
{var inst_10988 = (state_11036[(10)]);var inst_11002 = (state_11036[(7)]);var inst_11002__$1 = cljs.core.seq.call(null,inst_10988);var state_11036__$1 = (function (){var statearr_11060 = state_11036;(statearr_11060[(7)] = inst_11002__$1);
return statearr_11060;
})();if(inst_11002__$1)
{var statearr_11061_11093 = state_11036__$1;(statearr_11061_11093[(1)] = (14));
} else
{var statearr_11062_11094 = state_11036__$1;(statearr_11062_11094[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (9)))
{var inst_11024 = (state_11036[(2)]);var inst_11025 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11036__$1 = (function (){var statearr_11063 = state_11036;(statearr_11063[(15)] = inst_11024);
return statearr_11063;
})();if(cljs.core.truth_(inst_11025))
{var statearr_11064_11095 = state_11036__$1;(statearr_11064_11095[(1)] = (21));
} else
{var statearr_11065_11096 = state_11036__$1;(statearr_11065_11096[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (5)))
{var inst_10980 = cljs.core.async.close_BANG_.call(null,out);var state_11036__$1 = state_11036;var statearr_11066_11097 = state_11036__$1;(statearr_11066_11097[(2)] = inst_10980);
(statearr_11066_11097[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (14)))
{var inst_11002 = (state_11036[(7)]);var inst_11004 = cljs.core.chunked_seq_QMARK_.call(null,inst_11002);var state_11036__$1 = state_11036;if(inst_11004)
{var statearr_11067_11098 = state_11036__$1;(statearr_11067_11098[(1)] = (17));
} else
{var statearr_11068_11099 = state_11036__$1;(statearr_11068_11099[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (16)))
{var inst_11020 = (state_11036[(2)]);var state_11036__$1 = state_11036;var statearr_11069_11100 = state_11036__$1;(statearr_11069_11100[(2)] = inst_11020);
(statearr_11069_11100[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11037 === (10)))
{var inst_10991 = (state_11036[(8)]);var inst_10989 = (state_11036[(11)]);var inst_10996 = cljs.core._nth.call(null,inst_10989,inst_10991);var state_11036__$1 = state_11036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11036__$1,(13),out,inst_10996);
} else
{if((state_val_11037 === (18)))
{var inst_11002 = (state_11036[(7)]);var inst_11011 = cljs.core.first.call(null,inst_11002);var state_11036__$1 = state_11036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11036__$1,(20),out,inst_11011);
} else
{if((state_val_11037 === (8)))
{var inst_10991 = (state_11036[(8)]);var inst_10990 = (state_11036[(12)]);var inst_10993 = (inst_10991 < inst_10990);var inst_10994 = inst_10993;var state_11036__$1 = state_11036;if(cljs.core.truth_(inst_10994))
{var statearr_11070_11101 = state_11036__$1;(statearr_11070_11101[(1)] = (10));
} else
{var statearr_11071_11102 = state_11036__$1;(statearr_11071_11102[(1)] = (11));
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
var state_machine__5711__auto____0 = (function (){var statearr_11075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11075[(0)] = state_machine__5711__auto__);
(statearr_11075[(1)] = (1));
return statearr_11075;
});
var state_machine__5711__auto____1 = (function (state_11036){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11036);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11076){if((e11076 instanceof Object))
{var ex__5714__auto__ = e11076;var statearr_11077_11103 = state_11036;(statearr_11077_11103[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11036);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11076;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11104 = state_11036;
state_11036 = G__11104;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11036){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto__))
})();var state__5727__auto__ = (function (){var statearr_11078 = f__5726__auto__.call(null);(statearr_11078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto__);
return statearr_11078;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5725__auto___11199 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___11199){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___11199){
return (function (state_11175){var state_val_11176 = (state_11175[(1)]);if((state_val_11176 === (7)))
{var inst_11171 = (state_11175[(2)]);var state_11175__$1 = state_11175;var statearr_11177_11200 = state_11175__$1;(statearr_11177_11200[(2)] = inst_11171);
(statearr_11177_11200[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11176 === (1)))
{var state_11175__$1 = state_11175;var statearr_11178_11201 = state_11175__$1;(statearr_11178_11201[(2)] = null);
(statearr_11178_11201[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11176 === (4)))
{var inst_11154 = (state_11175[(7)]);var inst_11154__$1 = (state_11175[(2)]);var inst_11155 = (inst_11154__$1 == null);var state_11175__$1 = (function (){var statearr_11179 = state_11175;(statearr_11179[(7)] = inst_11154__$1);
return statearr_11179;
})();if(cljs.core.truth_(inst_11155))
{var statearr_11180_11202 = state_11175__$1;(statearr_11180_11202[(1)] = (5));
} else
{var statearr_11181_11203 = state_11175__$1;(statearr_11181_11203[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11176 === (13)))
{var state_11175__$1 = state_11175;var statearr_11182_11204 = state_11175__$1;(statearr_11182_11204[(2)] = null);
(statearr_11182_11204[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11176 === (6)))
{var inst_11154 = (state_11175[(7)]);var state_11175__$1 = state_11175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11175__$1,(11),to,inst_11154);
} else
{if((state_val_11176 === (3)))
{var inst_11173 = (state_11175[(2)]);var state_11175__$1 = state_11175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11175__$1,inst_11173);
} else
{if((state_val_11176 === (12)))
{var state_11175__$1 = state_11175;var statearr_11183_11205 = state_11175__$1;(statearr_11183_11205[(2)] = null);
(statearr_11183_11205[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11176 === (2)))
{var state_11175__$1 = state_11175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11175__$1,(4),from);
} else
{if((state_val_11176 === (11)))
{var inst_11164 = (state_11175[(2)]);var state_11175__$1 = state_11175;if(cljs.core.truth_(inst_11164))
{var statearr_11184_11206 = state_11175__$1;(statearr_11184_11206[(1)] = (12));
} else
{var statearr_11185_11207 = state_11175__$1;(statearr_11185_11207[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11176 === (9)))
{var state_11175__$1 = state_11175;var statearr_11186_11208 = state_11175__$1;(statearr_11186_11208[(2)] = null);
(statearr_11186_11208[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11176 === (5)))
{var state_11175__$1 = state_11175;if(cljs.core.truth_(close_QMARK_))
{var statearr_11187_11209 = state_11175__$1;(statearr_11187_11209[(1)] = (8));
} else
{var statearr_11188_11210 = state_11175__$1;(statearr_11188_11210[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11176 === (14)))
{var inst_11169 = (state_11175[(2)]);var state_11175__$1 = state_11175;var statearr_11189_11211 = state_11175__$1;(statearr_11189_11211[(2)] = inst_11169);
(statearr_11189_11211[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11176 === (10)))
{var inst_11161 = (state_11175[(2)]);var state_11175__$1 = state_11175;var statearr_11190_11212 = state_11175__$1;(statearr_11190_11212[(2)] = inst_11161);
(statearr_11190_11212[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11176 === (8)))
{var inst_11158 = cljs.core.async.close_BANG_.call(null,to);var state_11175__$1 = state_11175;var statearr_11191_11213 = state_11175__$1;(statearr_11191_11213[(2)] = inst_11158);
(statearr_11191_11213[(1)] = (10));
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
});})(c__5725__auto___11199))
;return ((function (switch__5710__auto__,c__5725__auto___11199){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_11195 = [null,null,null,null,null,null,null,null];(statearr_11195[(0)] = state_machine__5711__auto__);
(statearr_11195[(1)] = (1));
return statearr_11195;
});
var state_machine__5711__auto____1 = (function (state_11175){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11175);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11196){if((e11196 instanceof Object))
{var ex__5714__auto__ = e11196;var statearr_11197_11214 = state_11175;(statearr_11197_11214[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11215 = state_11175;
state_11175 = G__11215;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11175){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___11199))
})();var state__5727__auto__ = (function (){var statearr_11198 = f__5726__auto__.call(null);(statearr_11198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___11199);
return statearr_11198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___11199))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5725__auto___11316 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___11316,tc,fc){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___11316,tc,fc){
return (function (state_11291){var state_val_11292 = (state_11291[(1)]);if((state_val_11292 === (7)))
{var inst_11287 = (state_11291[(2)]);var state_11291__$1 = state_11291;var statearr_11293_11317 = state_11291__$1;(statearr_11293_11317[(2)] = inst_11287);
(statearr_11293_11317[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11292 === (1)))
{var state_11291__$1 = state_11291;var statearr_11294_11318 = state_11291__$1;(statearr_11294_11318[(2)] = null);
(statearr_11294_11318[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11292 === (4)))
{var inst_11268 = (state_11291[(7)]);var inst_11268__$1 = (state_11291[(2)]);var inst_11269 = (inst_11268__$1 == null);var state_11291__$1 = (function (){var statearr_11295 = state_11291;(statearr_11295[(7)] = inst_11268__$1);
return statearr_11295;
})();if(cljs.core.truth_(inst_11269))
{var statearr_11296_11319 = state_11291__$1;(statearr_11296_11319[(1)] = (5));
} else
{var statearr_11297_11320 = state_11291__$1;(statearr_11297_11320[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11292 === (13)))
{var state_11291__$1 = state_11291;var statearr_11298_11321 = state_11291__$1;(statearr_11298_11321[(2)] = null);
(statearr_11298_11321[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11292 === (6)))
{var inst_11268 = (state_11291[(7)]);var inst_11274 = p.call(null,inst_11268);var state_11291__$1 = state_11291;if(cljs.core.truth_(inst_11274))
{var statearr_11299_11322 = state_11291__$1;(statearr_11299_11322[(1)] = (9));
} else
{var statearr_11300_11323 = state_11291__$1;(statearr_11300_11323[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11292 === (3)))
{var inst_11289 = (state_11291[(2)]);var state_11291__$1 = state_11291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11291__$1,inst_11289);
} else
{if((state_val_11292 === (12)))
{var state_11291__$1 = state_11291;var statearr_11301_11324 = state_11291__$1;(statearr_11301_11324[(2)] = null);
(statearr_11301_11324[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11292 === (2)))
{var state_11291__$1 = state_11291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11291__$1,(4),ch);
} else
{if((state_val_11292 === (11)))
{var inst_11268 = (state_11291[(7)]);var inst_11278 = (state_11291[(2)]);var state_11291__$1 = state_11291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11291__$1,(8),inst_11278,inst_11268);
} else
{if((state_val_11292 === (9)))
{var state_11291__$1 = state_11291;var statearr_11302_11325 = state_11291__$1;(statearr_11302_11325[(2)] = tc);
(statearr_11302_11325[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11292 === (5)))
{var inst_11271 = cljs.core.async.close_BANG_.call(null,tc);var inst_11272 = cljs.core.async.close_BANG_.call(null,fc);var state_11291__$1 = (function (){var statearr_11303 = state_11291;(statearr_11303[(8)] = inst_11271);
return statearr_11303;
})();var statearr_11304_11326 = state_11291__$1;(statearr_11304_11326[(2)] = inst_11272);
(statearr_11304_11326[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11292 === (14)))
{var inst_11285 = (state_11291[(2)]);var state_11291__$1 = state_11291;var statearr_11305_11327 = state_11291__$1;(statearr_11305_11327[(2)] = inst_11285);
(statearr_11305_11327[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11292 === (10)))
{var state_11291__$1 = state_11291;var statearr_11306_11328 = state_11291__$1;(statearr_11306_11328[(2)] = fc);
(statearr_11306_11328[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11292 === (8)))
{var inst_11280 = (state_11291[(2)]);var state_11291__$1 = state_11291;if(cljs.core.truth_(inst_11280))
{var statearr_11307_11329 = state_11291__$1;(statearr_11307_11329[(1)] = (12));
} else
{var statearr_11308_11330 = state_11291__$1;(statearr_11308_11330[(1)] = (13));
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
});})(c__5725__auto___11316,tc,fc))
;return ((function (switch__5710__auto__,c__5725__auto___11316,tc,fc){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_11312 = [null,null,null,null,null,null,null,null,null];(statearr_11312[(0)] = state_machine__5711__auto__);
(statearr_11312[(1)] = (1));
return statearr_11312;
});
var state_machine__5711__auto____1 = (function (state_11291){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11291);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11313){if((e11313 instanceof Object))
{var ex__5714__auto__ = e11313;var statearr_11314_11331 = state_11291;(statearr_11314_11331[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11291);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11313;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11332 = state_11291;
state_11291 = G__11332;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11291){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___11316,tc,fc))
})();var state__5727__auto__ = (function (){var statearr_11315 = f__5726__auto__.call(null);(statearr_11315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___11316);
return statearr_11315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___11316,tc,fc))
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
return (function (state_11379){var state_val_11380 = (state_11379[(1)]);if((state_val_11380 === (7)))
{var inst_11375 = (state_11379[(2)]);var state_11379__$1 = state_11379;var statearr_11381_11397 = state_11379__$1;(statearr_11381_11397[(2)] = inst_11375);
(statearr_11381_11397[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11380 === (6)))
{var inst_11368 = (state_11379[(7)]);var inst_11365 = (state_11379[(8)]);var inst_11372 = f.call(null,inst_11365,inst_11368);var inst_11365__$1 = inst_11372;var state_11379__$1 = (function (){var statearr_11382 = state_11379;(statearr_11382[(8)] = inst_11365__$1);
return statearr_11382;
})();var statearr_11383_11398 = state_11379__$1;(statearr_11383_11398[(2)] = null);
(statearr_11383_11398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11380 === (5)))
{var inst_11365 = (state_11379[(8)]);var state_11379__$1 = state_11379;var statearr_11384_11399 = state_11379__$1;(statearr_11384_11399[(2)] = inst_11365);
(statearr_11384_11399[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11380 === (4)))
{var inst_11368 = (state_11379[(7)]);var inst_11368__$1 = (state_11379[(2)]);var inst_11369 = (inst_11368__$1 == null);var state_11379__$1 = (function (){var statearr_11385 = state_11379;(statearr_11385[(7)] = inst_11368__$1);
return statearr_11385;
})();if(cljs.core.truth_(inst_11369))
{var statearr_11386_11400 = state_11379__$1;(statearr_11386_11400[(1)] = (5));
} else
{var statearr_11387_11401 = state_11379__$1;(statearr_11387_11401[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11380 === (3)))
{var inst_11377 = (state_11379[(2)]);var state_11379__$1 = state_11379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11379__$1,inst_11377);
} else
{if((state_val_11380 === (2)))
{var state_11379__$1 = state_11379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11379__$1,(4),ch);
} else
{if((state_val_11380 === (1)))
{var inst_11365 = init;var state_11379__$1 = (function (){var statearr_11388 = state_11379;(statearr_11388[(8)] = inst_11365);
return statearr_11388;
})();var statearr_11389_11402 = state_11379__$1;(statearr_11389_11402[(2)] = null);
(statearr_11389_11402[(1)] = (2));
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
var state_machine__5711__auto____0 = (function (){var statearr_11393 = [null,null,null,null,null,null,null,null,null];(statearr_11393[(0)] = state_machine__5711__auto__);
(statearr_11393[(1)] = (1));
return statearr_11393;
});
var state_machine__5711__auto____1 = (function (state_11379){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11379);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11394){if((e11394 instanceof Object))
{var ex__5714__auto__ = e11394;var statearr_11395_11403 = state_11379;(statearr_11395_11403[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11379);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11394;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11404 = state_11379;
state_11379 = G__11404;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11379){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto__))
})();var state__5727__auto__ = (function (){var statearr_11396 = f__5726__auto__.call(null);(statearr_11396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto__);
return statearr_11396;
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
return (function (state_11478){var state_val_11479 = (state_11478[(1)]);if((state_val_11479 === (7)))
{var inst_11460 = (state_11478[(2)]);var state_11478__$1 = state_11478;var statearr_11480_11503 = state_11478__$1;(statearr_11480_11503[(2)] = inst_11460);
(statearr_11480_11503[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11479 === (1)))
{var inst_11454 = cljs.core.seq.call(null,coll);var inst_11455 = inst_11454;var state_11478__$1 = (function (){var statearr_11481 = state_11478;(statearr_11481[(7)] = inst_11455);
return statearr_11481;
})();var statearr_11482_11504 = state_11478__$1;(statearr_11482_11504[(2)] = null);
(statearr_11482_11504[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11479 === (4)))
{var inst_11455 = (state_11478[(7)]);var inst_11458 = cljs.core.first.call(null,inst_11455);var state_11478__$1 = state_11478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11478__$1,(7),ch,inst_11458);
} else
{if((state_val_11479 === (13)))
{var inst_11472 = (state_11478[(2)]);var state_11478__$1 = state_11478;var statearr_11483_11505 = state_11478__$1;(statearr_11483_11505[(2)] = inst_11472);
(statearr_11483_11505[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11479 === (6)))
{var inst_11463 = (state_11478[(2)]);var state_11478__$1 = state_11478;if(cljs.core.truth_(inst_11463))
{var statearr_11484_11506 = state_11478__$1;(statearr_11484_11506[(1)] = (8));
} else
{var statearr_11485_11507 = state_11478__$1;(statearr_11485_11507[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11479 === (3)))
{var inst_11476 = (state_11478[(2)]);var state_11478__$1 = state_11478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11478__$1,inst_11476);
} else
{if((state_val_11479 === (12)))
{var state_11478__$1 = state_11478;var statearr_11486_11508 = state_11478__$1;(statearr_11486_11508[(2)] = null);
(statearr_11486_11508[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11479 === (2)))
{var inst_11455 = (state_11478[(7)]);var state_11478__$1 = state_11478;if(cljs.core.truth_(inst_11455))
{var statearr_11487_11509 = state_11478__$1;(statearr_11487_11509[(1)] = (4));
} else
{var statearr_11488_11510 = state_11478__$1;(statearr_11488_11510[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11479 === (11)))
{var inst_11469 = cljs.core.async.close_BANG_.call(null,ch);var state_11478__$1 = state_11478;var statearr_11489_11511 = state_11478__$1;(statearr_11489_11511[(2)] = inst_11469);
(statearr_11489_11511[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11479 === (9)))
{var state_11478__$1 = state_11478;if(cljs.core.truth_(close_QMARK_))
{var statearr_11490_11512 = state_11478__$1;(statearr_11490_11512[(1)] = (11));
} else
{var statearr_11491_11513 = state_11478__$1;(statearr_11491_11513[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11479 === (5)))
{var inst_11455 = (state_11478[(7)]);var state_11478__$1 = state_11478;var statearr_11492_11514 = state_11478__$1;(statearr_11492_11514[(2)] = inst_11455);
(statearr_11492_11514[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11479 === (10)))
{var inst_11474 = (state_11478[(2)]);var state_11478__$1 = state_11478;var statearr_11493_11515 = state_11478__$1;(statearr_11493_11515[(2)] = inst_11474);
(statearr_11493_11515[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11479 === (8)))
{var inst_11455 = (state_11478[(7)]);var inst_11465 = cljs.core.next.call(null,inst_11455);var inst_11455__$1 = inst_11465;var state_11478__$1 = (function (){var statearr_11494 = state_11478;(statearr_11494[(7)] = inst_11455__$1);
return statearr_11494;
})();var statearr_11495_11516 = state_11478__$1;(statearr_11495_11516[(2)] = null);
(statearr_11495_11516[(1)] = (2));
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
var state_machine__5711__auto____0 = (function (){var statearr_11499 = [null,null,null,null,null,null,null,null];(statearr_11499[(0)] = state_machine__5711__auto__);
(statearr_11499[(1)] = (1));
return statearr_11499;
});
var state_machine__5711__auto____1 = (function (state_11478){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11478);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11500){if((e11500 instanceof Object))
{var ex__5714__auto__ = e11500;var statearr_11501_11517 = state_11478;(statearr_11501_11517[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11478);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11518 = state_11478;
state_11478 = G__11518;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11478){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto__))
})();var state__5727__auto__ = (function (){var statearr_11502 = f__5726__auto__.call(null);(statearr_11502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto__);
return statearr_11502;
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
cljs.core.async.Mux = (function (){var obj11520 = {};return obj11520;
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
cljs.core.async.Mult = (function (){var obj11522 = {};return obj11522;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11744 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11744 = (function (cs,ch,mult,meta11745){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11745 = meta11745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11744.cljs$lang$type = true;
cljs.core.async.t11744.cljs$lang$ctorStr = "cljs.core.async/t11744";
cljs.core.async.t11744.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11744");
});})(cs))
;
cljs.core.async.t11744.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11744.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11744.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11744.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11744.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11746){var self__ = this;
var _11746__$1 = this;return self__.meta11745;
});})(cs))
;
cljs.core.async.t11744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11746,meta11745__$1){var self__ = this;
var _11746__$1 = this;return (new cljs.core.async.t11744(self__.cs,self__.ch,self__.mult,meta11745__$1));
});})(cs))
;
cljs.core.async.__GT_t11744 = ((function (cs){
return (function __GT_t11744(cs__$1,ch__$1,mult__$1,meta11745){return (new cljs.core.async.t11744(cs__$1,ch__$1,mult__$1,meta11745));
});})(cs))
;
}
return (new cljs.core.async.t11744(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5725__auto___11965 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___11965,cs,m,dchan,dctr,done){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___11965,cs,m,dchan,dctr,done){
return (function (state_11877){var state_val_11878 = (state_11877[(1)]);if((state_val_11878 === (7)))
{var inst_11873 = (state_11877[(2)]);var state_11877__$1 = state_11877;var statearr_11879_11966 = state_11877__$1;(statearr_11879_11966[(2)] = inst_11873);
(statearr_11879_11966[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (20)))
{var inst_11778 = (state_11877[(7)]);var inst_11788 = cljs.core.first.call(null,inst_11778);var inst_11789 = cljs.core.nth.call(null,inst_11788,(0),null);var inst_11790 = cljs.core.nth.call(null,inst_11788,(1),null);var state_11877__$1 = (function (){var statearr_11880 = state_11877;(statearr_11880[(8)] = inst_11789);
return statearr_11880;
})();if(cljs.core.truth_(inst_11790))
{var statearr_11881_11967 = state_11877__$1;(statearr_11881_11967[(1)] = (22));
} else
{var statearr_11882_11968 = state_11877__$1;(statearr_11882_11968[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (27)))
{var inst_11818 = (state_11877[(9)]);var inst_11825 = (state_11877[(10)]);var inst_11749 = (state_11877[(11)]);var inst_11820 = (state_11877[(12)]);var inst_11825__$1 = cljs.core._nth.call(null,inst_11818,inst_11820);var inst_11826 = cljs.core.async.put_BANG_.call(null,inst_11825__$1,inst_11749,done);var state_11877__$1 = (function (){var statearr_11883 = state_11877;(statearr_11883[(10)] = inst_11825__$1);
return statearr_11883;
})();if(cljs.core.truth_(inst_11826))
{var statearr_11884_11969 = state_11877__$1;(statearr_11884_11969[(1)] = (30));
} else
{var statearr_11885_11970 = state_11877__$1;(statearr_11885_11970[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (1)))
{var state_11877__$1 = state_11877;var statearr_11886_11971 = state_11877__$1;(statearr_11886_11971[(2)] = null);
(statearr_11886_11971[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (24)))
{var inst_11778 = (state_11877[(7)]);var inst_11795 = (state_11877[(2)]);var inst_11796 = cljs.core.next.call(null,inst_11778);var inst_11758 = inst_11796;var inst_11759 = null;var inst_11760 = (0);var inst_11761 = (0);var state_11877__$1 = (function (){var statearr_11887 = state_11877;(statearr_11887[(13)] = inst_11795);
(statearr_11887[(14)] = inst_11758);
(statearr_11887[(15)] = inst_11760);
(statearr_11887[(16)] = inst_11759);
(statearr_11887[(17)] = inst_11761);
return statearr_11887;
})();var statearr_11888_11972 = state_11877__$1;(statearr_11888_11972[(2)] = null);
(statearr_11888_11972[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (39)))
{var state_11877__$1 = state_11877;var statearr_11892_11973 = state_11877__$1;(statearr_11892_11973[(2)] = null);
(statearr_11892_11973[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (4)))
{var inst_11749 = (state_11877[(11)]);var inst_11749__$1 = (state_11877[(2)]);var inst_11750 = (inst_11749__$1 == null);var state_11877__$1 = (function (){var statearr_11893 = state_11877;(statearr_11893[(11)] = inst_11749__$1);
return statearr_11893;
})();if(cljs.core.truth_(inst_11750))
{var statearr_11894_11974 = state_11877__$1;(statearr_11894_11974[(1)] = (5));
} else
{var statearr_11895_11975 = state_11877__$1;(statearr_11895_11975[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (15)))
{var inst_11758 = (state_11877[(14)]);var inst_11760 = (state_11877[(15)]);var inst_11759 = (state_11877[(16)]);var inst_11761 = (state_11877[(17)]);var inst_11774 = (state_11877[(2)]);var inst_11775 = (inst_11761 + (1));var tmp11889 = inst_11758;var tmp11890 = inst_11760;var tmp11891 = inst_11759;var inst_11758__$1 = tmp11889;var inst_11759__$1 = tmp11891;var inst_11760__$1 = tmp11890;var inst_11761__$1 = inst_11775;var state_11877__$1 = (function (){var statearr_11896 = state_11877;(statearr_11896[(14)] = inst_11758__$1);
(statearr_11896[(15)] = inst_11760__$1);
(statearr_11896[(16)] = inst_11759__$1);
(statearr_11896[(18)] = inst_11774);
(statearr_11896[(17)] = inst_11761__$1);
return statearr_11896;
})();var statearr_11897_11976 = state_11877__$1;(statearr_11897_11976[(2)] = null);
(statearr_11897_11976[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (21)))
{var inst_11799 = (state_11877[(2)]);var state_11877__$1 = state_11877;var statearr_11901_11977 = state_11877__$1;(statearr_11901_11977[(2)] = inst_11799);
(statearr_11901_11977[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (31)))
{var inst_11825 = (state_11877[(10)]);var inst_11829 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11830 = cljs.core.async.untap_STAR_.call(null,m,inst_11825);var state_11877__$1 = (function (){var statearr_11902 = state_11877;(statearr_11902[(19)] = inst_11829);
return statearr_11902;
})();var statearr_11903_11978 = state_11877__$1;(statearr_11903_11978[(2)] = inst_11830);
(statearr_11903_11978[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (32)))
{var inst_11818 = (state_11877[(9)]);var inst_11820 = (state_11877[(12)]);var inst_11819 = (state_11877[(20)]);var inst_11817 = (state_11877[(21)]);var inst_11832 = (state_11877[(2)]);var inst_11833 = (inst_11820 + (1));var tmp11898 = inst_11818;var tmp11899 = inst_11819;var tmp11900 = inst_11817;var inst_11817__$1 = tmp11900;var inst_11818__$1 = tmp11898;var inst_11819__$1 = tmp11899;var inst_11820__$1 = inst_11833;var state_11877__$1 = (function (){var statearr_11904 = state_11877;(statearr_11904[(22)] = inst_11832);
(statearr_11904[(9)] = inst_11818__$1);
(statearr_11904[(12)] = inst_11820__$1);
(statearr_11904[(20)] = inst_11819__$1);
(statearr_11904[(21)] = inst_11817__$1);
return statearr_11904;
})();var statearr_11905_11979 = state_11877__$1;(statearr_11905_11979[(2)] = null);
(statearr_11905_11979[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (40)))
{var inst_11845 = (state_11877[(23)]);var inst_11849 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11850 = cljs.core.async.untap_STAR_.call(null,m,inst_11845);var state_11877__$1 = (function (){var statearr_11906 = state_11877;(statearr_11906[(24)] = inst_11849);
return statearr_11906;
})();var statearr_11907_11980 = state_11877__$1;(statearr_11907_11980[(2)] = inst_11850);
(statearr_11907_11980[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (33)))
{var inst_11836 = (state_11877[(25)]);var inst_11838 = cljs.core.chunked_seq_QMARK_.call(null,inst_11836);var state_11877__$1 = state_11877;if(inst_11838)
{var statearr_11908_11981 = state_11877__$1;(statearr_11908_11981[(1)] = (36));
} else
{var statearr_11909_11982 = state_11877__$1;(statearr_11909_11982[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (13)))
{var inst_11768 = (state_11877[(26)]);var inst_11771 = cljs.core.async.close_BANG_.call(null,inst_11768);var state_11877__$1 = state_11877;var statearr_11910_11983 = state_11877__$1;(statearr_11910_11983[(2)] = inst_11771);
(statearr_11910_11983[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (22)))
{var inst_11789 = (state_11877[(8)]);var inst_11792 = cljs.core.async.close_BANG_.call(null,inst_11789);var state_11877__$1 = state_11877;var statearr_11911_11984 = state_11877__$1;(statearr_11911_11984[(2)] = inst_11792);
(statearr_11911_11984[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (36)))
{var inst_11836 = (state_11877[(25)]);var inst_11840 = cljs.core.chunk_first.call(null,inst_11836);var inst_11841 = cljs.core.chunk_rest.call(null,inst_11836);var inst_11842 = cljs.core.count.call(null,inst_11840);var inst_11817 = inst_11841;var inst_11818 = inst_11840;var inst_11819 = inst_11842;var inst_11820 = (0);var state_11877__$1 = (function (){var statearr_11912 = state_11877;(statearr_11912[(9)] = inst_11818);
(statearr_11912[(12)] = inst_11820);
(statearr_11912[(20)] = inst_11819);
(statearr_11912[(21)] = inst_11817);
return statearr_11912;
})();var statearr_11913_11985 = state_11877__$1;(statearr_11913_11985[(2)] = null);
(statearr_11913_11985[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (41)))
{var inst_11836 = (state_11877[(25)]);var inst_11852 = (state_11877[(2)]);var inst_11853 = cljs.core.next.call(null,inst_11836);var inst_11817 = inst_11853;var inst_11818 = null;var inst_11819 = (0);var inst_11820 = (0);var state_11877__$1 = (function (){var statearr_11914 = state_11877;(statearr_11914[(27)] = inst_11852);
(statearr_11914[(9)] = inst_11818);
(statearr_11914[(12)] = inst_11820);
(statearr_11914[(20)] = inst_11819);
(statearr_11914[(21)] = inst_11817);
return statearr_11914;
})();var statearr_11915_11986 = state_11877__$1;(statearr_11915_11986[(2)] = null);
(statearr_11915_11986[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (43)))
{var state_11877__$1 = state_11877;var statearr_11916_11987 = state_11877__$1;(statearr_11916_11987[(2)] = null);
(statearr_11916_11987[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (29)))
{var inst_11861 = (state_11877[(2)]);var state_11877__$1 = state_11877;var statearr_11917_11988 = state_11877__$1;(statearr_11917_11988[(2)] = inst_11861);
(statearr_11917_11988[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (44)))
{var inst_11870 = (state_11877[(2)]);var state_11877__$1 = (function (){var statearr_11918 = state_11877;(statearr_11918[(28)] = inst_11870);
return statearr_11918;
})();var statearr_11919_11989 = state_11877__$1;(statearr_11919_11989[(2)] = null);
(statearr_11919_11989[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (6)))
{var inst_11809 = (state_11877[(29)]);var inst_11808 = cljs.core.deref.call(null,cs);var inst_11809__$1 = cljs.core.keys.call(null,inst_11808);var inst_11810 = cljs.core.count.call(null,inst_11809__$1);var inst_11811 = cljs.core.reset_BANG_.call(null,dctr,inst_11810);var inst_11816 = cljs.core.seq.call(null,inst_11809__$1);var inst_11817 = inst_11816;var inst_11818 = null;var inst_11819 = (0);var inst_11820 = (0);var state_11877__$1 = (function (){var statearr_11920 = state_11877;(statearr_11920[(9)] = inst_11818);
(statearr_11920[(12)] = inst_11820);
(statearr_11920[(30)] = inst_11811);
(statearr_11920[(20)] = inst_11819);
(statearr_11920[(29)] = inst_11809__$1);
(statearr_11920[(21)] = inst_11817);
return statearr_11920;
})();var statearr_11921_11990 = state_11877__$1;(statearr_11921_11990[(2)] = null);
(statearr_11921_11990[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (28)))
{var inst_11836 = (state_11877[(25)]);var inst_11817 = (state_11877[(21)]);var inst_11836__$1 = cljs.core.seq.call(null,inst_11817);var state_11877__$1 = (function (){var statearr_11922 = state_11877;(statearr_11922[(25)] = inst_11836__$1);
return statearr_11922;
})();if(inst_11836__$1)
{var statearr_11923_11991 = state_11877__$1;(statearr_11923_11991[(1)] = (33));
} else
{var statearr_11924_11992 = state_11877__$1;(statearr_11924_11992[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (25)))
{var inst_11820 = (state_11877[(12)]);var inst_11819 = (state_11877[(20)]);var inst_11822 = (inst_11820 < inst_11819);var inst_11823 = inst_11822;var state_11877__$1 = state_11877;if(cljs.core.truth_(inst_11823))
{var statearr_11925_11993 = state_11877__$1;(statearr_11925_11993[(1)] = (27));
} else
{var statearr_11926_11994 = state_11877__$1;(statearr_11926_11994[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (34)))
{var state_11877__$1 = state_11877;var statearr_11927_11995 = state_11877__$1;(statearr_11927_11995[(2)] = null);
(statearr_11927_11995[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (17)))
{var state_11877__$1 = state_11877;var statearr_11928_11996 = state_11877__$1;(statearr_11928_11996[(2)] = null);
(statearr_11928_11996[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (3)))
{var inst_11875 = (state_11877[(2)]);var state_11877__$1 = state_11877;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11877__$1,inst_11875);
} else
{if((state_val_11878 === (12)))
{var inst_11804 = (state_11877[(2)]);var state_11877__$1 = state_11877;var statearr_11929_11997 = state_11877__$1;(statearr_11929_11997[(2)] = inst_11804);
(statearr_11929_11997[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (2)))
{var state_11877__$1 = state_11877;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11877__$1,(4),ch);
} else
{if((state_val_11878 === (23)))
{var state_11877__$1 = state_11877;var statearr_11930_11998 = state_11877__$1;(statearr_11930_11998[(2)] = null);
(statearr_11930_11998[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (35)))
{var inst_11859 = (state_11877[(2)]);var state_11877__$1 = state_11877;var statearr_11931_11999 = state_11877__$1;(statearr_11931_11999[(2)] = inst_11859);
(statearr_11931_11999[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (19)))
{var inst_11778 = (state_11877[(7)]);var inst_11782 = cljs.core.chunk_first.call(null,inst_11778);var inst_11783 = cljs.core.chunk_rest.call(null,inst_11778);var inst_11784 = cljs.core.count.call(null,inst_11782);var inst_11758 = inst_11783;var inst_11759 = inst_11782;var inst_11760 = inst_11784;var inst_11761 = (0);var state_11877__$1 = (function (){var statearr_11932 = state_11877;(statearr_11932[(14)] = inst_11758);
(statearr_11932[(15)] = inst_11760);
(statearr_11932[(16)] = inst_11759);
(statearr_11932[(17)] = inst_11761);
return statearr_11932;
})();var statearr_11933_12000 = state_11877__$1;(statearr_11933_12000[(2)] = null);
(statearr_11933_12000[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (11)))
{var inst_11758 = (state_11877[(14)]);var inst_11778 = (state_11877[(7)]);var inst_11778__$1 = cljs.core.seq.call(null,inst_11758);var state_11877__$1 = (function (){var statearr_11934 = state_11877;(statearr_11934[(7)] = inst_11778__$1);
return statearr_11934;
})();if(inst_11778__$1)
{var statearr_11935_12001 = state_11877__$1;(statearr_11935_12001[(1)] = (16));
} else
{var statearr_11936_12002 = state_11877__$1;(statearr_11936_12002[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (9)))
{var inst_11806 = (state_11877[(2)]);var state_11877__$1 = state_11877;var statearr_11937_12003 = state_11877__$1;(statearr_11937_12003[(2)] = inst_11806);
(statearr_11937_12003[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (5)))
{var inst_11756 = cljs.core.deref.call(null,cs);var inst_11757 = cljs.core.seq.call(null,inst_11756);var inst_11758 = inst_11757;var inst_11759 = null;var inst_11760 = (0);var inst_11761 = (0);var state_11877__$1 = (function (){var statearr_11938 = state_11877;(statearr_11938[(14)] = inst_11758);
(statearr_11938[(15)] = inst_11760);
(statearr_11938[(16)] = inst_11759);
(statearr_11938[(17)] = inst_11761);
return statearr_11938;
})();var statearr_11939_12004 = state_11877__$1;(statearr_11939_12004[(2)] = null);
(statearr_11939_12004[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (14)))
{var state_11877__$1 = state_11877;var statearr_11940_12005 = state_11877__$1;(statearr_11940_12005[(2)] = null);
(statearr_11940_12005[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (45)))
{var inst_11867 = (state_11877[(2)]);var state_11877__$1 = state_11877;var statearr_11941_12006 = state_11877__$1;(statearr_11941_12006[(2)] = inst_11867);
(statearr_11941_12006[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (26)))
{var inst_11809 = (state_11877[(29)]);var inst_11863 = (state_11877[(2)]);var inst_11864 = cljs.core.seq.call(null,inst_11809);var state_11877__$1 = (function (){var statearr_11942 = state_11877;(statearr_11942[(31)] = inst_11863);
return statearr_11942;
})();if(inst_11864)
{var statearr_11943_12007 = state_11877__$1;(statearr_11943_12007[(1)] = (42));
} else
{var statearr_11944_12008 = state_11877__$1;(statearr_11944_12008[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (16)))
{var inst_11778 = (state_11877[(7)]);var inst_11780 = cljs.core.chunked_seq_QMARK_.call(null,inst_11778);var state_11877__$1 = state_11877;if(inst_11780)
{var statearr_11945_12009 = state_11877__$1;(statearr_11945_12009[(1)] = (19));
} else
{var statearr_11946_12010 = state_11877__$1;(statearr_11946_12010[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (38)))
{var inst_11856 = (state_11877[(2)]);var state_11877__$1 = state_11877;var statearr_11947_12011 = state_11877__$1;(statearr_11947_12011[(2)] = inst_11856);
(statearr_11947_12011[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (30)))
{var state_11877__$1 = state_11877;var statearr_11948_12012 = state_11877__$1;(statearr_11948_12012[(2)] = null);
(statearr_11948_12012[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (10)))
{var inst_11759 = (state_11877[(16)]);var inst_11761 = (state_11877[(17)]);var inst_11767 = cljs.core._nth.call(null,inst_11759,inst_11761);var inst_11768 = cljs.core.nth.call(null,inst_11767,(0),null);var inst_11769 = cljs.core.nth.call(null,inst_11767,(1),null);var state_11877__$1 = (function (){var statearr_11949 = state_11877;(statearr_11949[(26)] = inst_11768);
return statearr_11949;
})();if(cljs.core.truth_(inst_11769))
{var statearr_11950_12013 = state_11877__$1;(statearr_11950_12013[(1)] = (13));
} else
{var statearr_11951_12014 = state_11877__$1;(statearr_11951_12014[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (18)))
{var inst_11802 = (state_11877[(2)]);var state_11877__$1 = state_11877;var statearr_11952_12015 = state_11877__$1;(statearr_11952_12015[(2)] = inst_11802);
(statearr_11952_12015[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (42)))
{var state_11877__$1 = state_11877;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11877__$1,(45),dchan);
} else
{if((state_val_11878 === (37)))
{var inst_11845 = (state_11877[(23)]);var inst_11749 = (state_11877[(11)]);var inst_11836 = (state_11877[(25)]);var inst_11845__$1 = cljs.core.first.call(null,inst_11836);var inst_11846 = cljs.core.async.put_BANG_.call(null,inst_11845__$1,inst_11749,done);var state_11877__$1 = (function (){var statearr_11953 = state_11877;(statearr_11953[(23)] = inst_11845__$1);
return statearr_11953;
})();if(cljs.core.truth_(inst_11846))
{var statearr_11954_12016 = state_11877__$1;(statearr_11954_12016[(1)] = (39));
} else
{var statearr_11955_12017 = state_11877__$1;(statearr_11955_12017[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11878 === (8)))
{var inst_11760 = (state_11877[(15)]);var inst_11761 = (state_11877[(17)]);var inst_11763 = (inst_11761 < inst_11760);var inst_11764 = inst_11763;var state_11877__$1 = state_11877;if(cljs.core.truth_(inst_11764))
{var statearr_11956_12018 = state_11877__$1;(statearr_11956_12018[(1)] = (10));
} else
{var statearr_11957_12019 = state_11877__$1;(statearr_11957_12019[(1)] = (11));
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
});})(c__5725__auto___11965,cs,m,dchan,dctr,done))
;return ((function (switch__5710__auto__,c__5725__auto___11965,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_11961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11961[(0)] = state_machine__5711__auto__);
(statearr_11961[(1)] = (1));
return statearr_11961;
});
var state_machine__5711__auto____1 = (function (state_11877){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11877);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11962){if((e11962 instanceof Object))
{var ex__5714__auto__ = e11962;var statearr_11963_12020 = state_11877;(statearr_11963_12020[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11877);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12021 = state_11877;
state_11877 = G__12021;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11877){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___11965,cs,m,dchan,dctr,done))
})();var state__5727__auto__ = (function (){var statearr_11964 = f__5726__auto__.call(null);(statearr_11964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___11965);
return statearr_11964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___11965,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12023 = {};return obj12023;
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
;var m = (function (){if(typeof cljs.core.async.t12143 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12143 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12144){
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
this.meta12144 = meta12144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12143.cljs$lang$type = true;
cljs.core.async.t12143.cljs$lang$ctorStr = "cljs.core.async/t12143";
cljs.core.async.t12143.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12143");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12143.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12143.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12143.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12143.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12143.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12143.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12143.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12145){var self__ = this;
var _12145__$1 = this;return self__.meta12144;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12145,meta12144__$1){var self__ = this;
var _12145__$1 = this;return (new cljs.core.async.t12143(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12144__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12143 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12143(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12144){return (new cljs.core.async.t12143(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12144));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12143(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5725__auto___12262 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___12262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___12262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12215){var state_val_12216 = (state_12215[(1)]);if((state_val_12216 === (7)))
{var inst_12159 = (state_12215[(7)]);var inst_12164 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12159);var state_12215__$1 = state_12215;var statearr_12217_12263 = state_12215__$1;(statearr_12217_12263[(2)] = inst_12164);
(statearr_12217_12263[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (20)))
{var inst_12174 = (state_12215[(8)]);var state_12215__$1 = state_12215;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12215__$1,(23),out,inst_12174);
} else
{if((state_val_12216 === (1)))
{var inst_12149 = (state_12215[(9)]);var inst_12149__$1 = calc_state.call(null);var inst_12150 = cljs.core.seq_QMARK_.call(null,inst_12149__$1);var state_12215__$1 = (function (){var statearr_12218 = state_12215;(statearr_12218[(9)] = inst_12149__$1);
return statearr_12218;
})();if(inst_12150)
{var statearr_12219_12264 = state_12215__$1;(statearr_12219_12264[(1)] = (2));
} else
{var statearr_12220_12265 = state_12215__$1;(statearr_12220_12265[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (24)))
{var inst_12167 = (state_12215[(10)]);var inst_12159 = inst_12167;var state_12215__$1 = (function (){var statearr_12221 = state_12215;(statearr_12221[(7)] = inst_12159);
return statearr_12221;
})();var statearr_12222_12266 = state_12215__$1;(statearr_12222_12266[(2)] = null);
(statearr_12222_12266[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (4)))
{var inst_12149 = (state_12215[(9)]);var inst_12155 = (state_12215[(2)]);var inst_12156 = cljs.core.get.call(null,inst_12155,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12157 = cljs.core.get.call(null,inst_12155,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12158 = cljs.core.get.call(null,inst_12155,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12159 = inst_12149;var state_12215__$1 = (function (){var statearr_12223 = state_12215;(statearr_12223[(11)] = inst_12157);
(statearr_12223[(12)] = inst_12156);
(statearr_12223[(13)] = inst_12158);
(statearr_12223[(7)] = inst_12159);
return statearr_12223;
})();var statearr_12224_12267 = state_12215__$1;(statearr_12224_12267[(2)] = null);
(statearr_12224_12267[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (15)))
{var state_12215__$1 = state_12215;var statearr_12225_12268 = state_12215__$1;(statearr_12225_12268[(2)] = null);
(statearr_12225_12268[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (21)))
{var inst_12167 = (state_12215[(10)]);var inst_12159 = inst_12167;var state_12215__$1 = (function (){var statearr_12226 = state_12215;(statearr_12226[(7)] = inst_12159);
return statearr_12226;
})();var statearr_12227_12269 = state_12215__$1;(statearr_12227_12269[(2)] = null);
(statearr_12227_12269[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (13)))
{var inst_12211 = (state_12215[(2)]);var state_12215__$1 = state_12215;var statearr_12228_12270 = state_12215__$1;(statearr_12228_12270[(2)] = inst_12211);
(statearr_12228_12270[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (22)))
{var inst_12209 = (state_12215[(2)]);var state_12215__$1 = state_12215;var statearr_12229_12271 = state_12215__$1;(statearr_12229_12271[(2)] = inst_12209);
(statearr_12229_12271[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (6)))
{var inst_12213 = (state_12215[(2)]);var state_12215__$1 = state_12215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12215__$1,inst_12213);
} else
{if((state_val_12216 === (25)))
{var state_12215__$1 = state_12215;var statearr_12230_12272 = state_12215__$1;(statearr_12230_12272[(2)] = null);
(statearr_12230_12272[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (17)))
{var inst_12189 = (state_12215[(14)]);var state_12215__$1 = state_12215;var statearr_12231_12273 = state_12215__$1;(statearr_12231_12273[(2)] = inst_12189);
(statearr_12231_12273[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (3)))
{var inst_12149 = (state_12215[(9)]);var state_12215__$1 = state_12215;var statearr_12232_12274 = state_12215__$1;(statearr_12232_12274[(2)] = inst_12149);
(statearr_12232_12274[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (12)))
{var inst_12175 = (state_12215[(15)]);var inst_12189 = (state_12215[(14)]);var inst_12170 = (state_12215[(16)]);var inst_12189__$1 = inst_12170.call(null,inst_12175);var state_12215__$1 = (function (){var statearr_12233 = state_12215;(statearr_12233[(14)] = inst_12189__$1);
return statearr_12233;
})();if(cljs.core.truth_(inst_12189__$1))
{var statearr_12234_12275 = state_12215__$1;(statearr_12234_12275[(1)] = (17));
} else
{var statearr_12235_12276 = state_12215__$1;(statearr_12235_12276[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (2)))
{var inst_12149 = (state_12215[(9)]);var inst_12152 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12149);var state_12215__$1 = state_12215;var statearr_12236_12277 = state_12215__$1;(statearr_12236_12277[(2)] = inst_12152);
(statearr_12236_12277[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (23)))
{var inst_12200 = (state_12215[(2)]);var state_12215__$1 = state_12215;if(cljs.core.truth_(inst_12200))
{var statearr_12237_12278 = state_12215__$1;(statearr_12237_12278[(1)] = (24));
} else
{var statearr_12238_12279 = state_12215__$1;(statearr_12238_12279[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (19)))
{var inst_12197 = (state_12215[(2)]);var state_12215__$1 = state_12215;if(cljs.core.truth_(inst_12197))
{var statearr_12239_12280 = state_12215__$1;(statearr_12239_12280[(1)] = (20));
} else
{var statearr_12240_12281 = state_12215__$1;(statearr_12240_12281[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (11)))
{var inst_12174 = (state_12215[(8)]);var inst_12180 = (inst_12174 == null);var state_12215__$1 = state_12215;if(cljs.core.truth_(inst_12180))
{var statearr_12241_12282 = state_12215__$1;(statearr_12241_12282[(1)] = (14));
} else
{var statearr_12242_12283 = state_12215__$1;(statearr_12242_12283[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (9)))
{var inst_12167 = (state_12215[(10)]);var inst_12167__$1 = (state_12215[(2)]);var inst_12168 = cljs.core.get.call(null,inst_12167__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12169 = cljs.core.get.call(null,inst_12167__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12170 = cljs.core.get.call(null,inst_12167__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12215__$1 = (function (){var statearr_12243 = state_12215;(statearr_12243[(10)] = inst_12167__$1);
(statearr_12243[(16)] = inst_12170);
(statearr_12243[(17)] = inst_12169);
return statearr_12243;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12215__$1,(10),inst_12168);
} else
{if((state_val_12216 === (5)))
{var inst_12159 = (state_12215[(7)]);var inst_12162 = cljs.core.seq_QMARK_.call(null,inst_12159);var state_12215__$1 = state_12215;if(inst_12162)
{var statearr_12244_12284 = state_12215__$1;(statearr_12244_12284[(1)] = (7));
} else
{var statearr_12245_12285 = state_12215__$1;(statearr_12245_12285[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (14)))
{var inst_12175 = (state_12215[(15)]);var inst_12182 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12175);var state_12215__$1 = state_12215;var statearr_12246_12286 = state_12215__$1;(statearr_12246_12286[(2)] = inst_12182);
(statearr_12246_12286[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (26)))
{var inst_12205 = (state_12215[(2)]);var state_12215__$1 = state_12215;var statearr_12247_12287 = state_12215__$1;(statearr_12247_12287[(2)] = inst_12205);
(statearr_12247_12287[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (16)))
{var inst_12185 = (state_12215[(2)]);var inst_12186 = calc_state.call(null);var inst_12159 = inst_12186;var state_12215__$1 = (function (){var statearr_12248 = state_12215;(statearr_12248[(18)] = inst_12185);
(statearr_12248[(7)] = inst_12159);
return statearr_12248;
})();var statearr_12249_12288 = state_12215__$1;(statearr_12249_12288[(2)] = null);
(statearr_12249_12288[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (10)))
{var inst_12174 = (state_12215[(8)]);var inst_12175 = (state_12215[(15)]);var inst_12173 = (state_12215[(2)]);var inst_12174__$1 = cljs.core.nth.call(null,inst_12173,(0),null);var inst_12175__$1 = cljs.core.nth.call(null,inst_12173,(1),null);var inst_12176 = (inst_12174__$1 == null);var inst_12177 = cljs.core._EQ_.call(null,inst_12175__$1,change);var inst_12178 = (inst_12176) || (inst_12177);var state_12215__$1 = (function (){var statearr_12250 = state_12215;(statearr_12250[(8)] = inst_12174__$1);
(statearr_12250[(15)] = inst_12175__$1);
return statearr_12250;
})();if(cljs.core.truth_(inst_12178))
{var statearr_12251_12289 = state_12215__$1;(statearr_12251_12289[(1)] = (11));
} else
{var statearr_12252_12290 = state_12215__$1;(statearr_12252_12290[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (18)))
{var inst_12175 = (state_12215[(15)]);var inst_12170 = (state_12215[(16)]);var inst_12169 = (state_12215[(17)]);var inst_12192 = cljs.core.empty_QMARK_.call(null,inst_12170);var inst_12193 = inst_12169.call(null,inst_12175);var inst_12194 = cljs.core.not.call(null,inst_12193);var inst_12195 = (inst_12192) && (inst_12194);var state_12215__$1 = state_12215;var statearr_12253_12291 = state_12215__$1;(statearr_12253_12291[(2)] = inst_12195);
(statearr_12253_12291[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12216 === (8)))
{var inst_12159 = (state_12215[(7)]);var state_12215__$1 = state_12215;var statearr_12254_12292 = state_12215__$1;(statearr_12254_12292[(2)] = inst_12159);
(statearr_12254_12292[(1)] = (9));
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
});})(c__5725__auto___12262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5710__auto__,c__5725__auto___12262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_12258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12258[(0)] = state_machine__5711__auto__);
(statearr_12258[(1)] = (1));
return statearr_12258;
});
var state_machine__5711__auto____1 = (function (state_12215){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_12215);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e12259){if((e12259 instanceof Object))
{var ex__5714__auto__ = e12259;var statearr_12260_12293 = state_12215;(statearr_12260_12293[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12215);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12294 = state_12215;
state_12215 = G__12294;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_12215){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_12215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___12262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5727__auto__ = (function (){var statearr_12261 = f__5726__auto__.call(null);(statearr_12261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___12262);
return statearr_12261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___12262,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12296 = {};return obj12296;
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
return (function (p1__12297_SHARP_){if(cljs.core.truth_(p1__12297_SHARP_.call(null,topic)))
{return p1__12297_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12297_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3560__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12420 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12420 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12421){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12421 = meta12421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12420.cljs$lang$type = true;
cljs.core.async.t12420.cljs$lang$ctorStr = "cljs.core.async/t12420";
cljs.core.async.t12420.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12420");
});})(mults,ensure_mult))
;
cljs.core.async.t12420.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12420.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12420.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12420.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12420.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12420.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12422){var self__ = this;
var _12422__$1 = this;return self__.meta12421;
});})(mults,ensure_mult))
;
cljs.core.async.t12420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12422,meta12421__$1){var self__ = this;
var _12422__$1 = this;return (new cljs.core.async.t12420(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12421__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12420 = ((function (mults,ensure_mult){
return (function __GT_t12420(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12421){return (new cljs.core.async.t12420(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12421));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12420(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5725__auto___12542 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___12542,mults,ensure_mult,p){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___12542,mults,ensure_mult,p){
return (function (state_12494){var state_val_12495 = (state_12494[(1)]);if((state_val_12495 === (7)))
{var inst_12490 = (state_12494[(2)]);var state_12494__$1 = state_12494;var statearr_12496_12543 = state_12494__$1;(statearr_12496_12543[(2)] = inst_12490);
(statearr_12496_12543[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (20)))
{var state_12494__$1 = state_12494;var statearr_12497_12544 = state_12494__$1;(statearr_12497_12544[(2)] = null);
(statearr_12497_12544[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (1)))
{var state_12494__$1 = state_12494;var statearr_12498_12545 = state_12494__$1;(statearr_12498_12545[(2)] = null);
(statearr_12498_12545[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (24)))
{var inst_12473 = (state_12494[(7)]);var inst_12482 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12473);var state_12494__$1 = state_12494;var statearr_12499_12546 = state_12494__$1;(statearr_12499_12546[(2)] = inst_12482);
(statearr_12499_12546[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (4)))
{var inst_12425 = (state_12494[(8)]);var inst_12425__$1 = (state_12494[(2)]);var inst_12426 = (inst_12425__$1 == null);var state_12494__$1 = (function (){var statearr_12500 = state_12494;(statearr_12500[(8)] = inst_12425__$1);
return statearr_12500;
})();if(cljs.core.truth_(inst_12426))
{var statearr_12501_12547 = state_12494__$1;(statearr_12501_12547[(1)] = (5));
} else
{var statearr_12502_12548 = state_12494__$1;(statearr_12502_12548[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (15)))
{var inst_12467 = (state_12494[(2)]);var state_12494__$1 = state_12494;var statearr_12503_12549 = state_12494__$1;(statearr_12503_12549[(2)] = inst_12467);
(statearr_12503_12549[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (21)))
{var inst_12487 = (state_12494[(2)]);var state_12494__$1 = (function (){var statearr_12504 = state_12494;(statearr_12504[(9)] = inst_12487);
return statearr_12504;
})();var statearr_12505_12550 = state_12494__$1;(statearr_12505_12550[(2)] = null);
(statearr_12505_12550[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (13)))
{var inst_12449 = (state_12494[(10)]);var inst_12451 = cljs.core.chunked_seq_QMARK_.call(null,inst_12449);var state_12494__$1 = state_12494;if(inst_12451)
{var statearr_12506_12551 = state_12494__$1;(statearr_12506_12551[(1)] = (16));
} else
{var statearr_12507_12552 = state_12494__$1;(statearr_12507_12552[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (22)))
{var inst_12479 = (state_12494[(2)]);var state_12494__$1 = state_12494;if(cljs.core.truth_(inst_12479))
{var statearr_12508_12553 = state_12494__$1;(statearr_12508_12553[(1)] = (23));
} else
{var statearr_12509_12554 = state_12494__$1;(statearr_12509_12554[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (6)))
{var inst_12475 = (state_12494[(11)]);var inst_12425 = (state_12494[(8)]);var inst_12473 = (state_12494[(7)]);var inst_12473__$1 = topic_fn.call(null,inst_12425);var inst_12474 = cljs.core.deref.call(null,mults);var inst_12475__$1 = cljs.core.get.call(null,inst_12474,inst_12473__$1);var state_12494__$1 = (function (){var statearr_12510 = state_12494;(statearr_12510[(11)] = inst_12475__$1);
(statearr_12510[(7)] = inst_12473__$1);
return statearr_12510;
})();if(cljs.core.truth_(inst_12475__$1))
{var statearr_12511_12555 = state_12494__$1;(statearr_12511_12555[(1)] = (19));
} else
{var statearr_12512_12556 = state_12494__$1;(statearr_12512_12556[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (25)))
{var inst_12484 = (state_12494[(2)]);var state_12494__$1 = state_12494;var statearr_12513_12557 = state_12494__$1;(statearr_12513_12557[(2)] = inst_12484);
(statearr_12513_12557[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (17)))
{var inst_12449 = (state_12494[(10)]);var inst_12458 = cljs.core.first.call(null,inst_12449);var inst_12459 = cljs.core.async.muxch_STAR_.call(null,inst_12458);var inst_12460 = cljs.core.async.close_BANG_.call(null,inst_12459);var inst_12461 = cljs.core.next.call(null,inst_12449);var inst_12435 = inst_12461;var inst_12436 = null;var inst_12437 = (0);var inst_12438 = (0);var state_12494__$1 = (function (){var statearr_12514 = state_12494;(statearr_12514[(12)] = inst_12460);
(statearr_12514[(13)] = inst_12436);
(statearr_12514[(14)] = inst_12437);
(statearr_12514[(15)] = inst_12438);
(statearr_12514[(16)] = inst_12435);
return statearr_12514;
})();var statearr_12515_12558 = state_12494__$1;(statearr_12515_12558[(2)] = null);
(statearr_12515_12558[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (3)))
{var inst_12492 = (state_12494[(2)]);var state_12494__$1 = state_12494;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12494__$1,inst_12492);
} else
{if((state_val_12495 === (12)))
{var inst_12469 = (state_12494[(2)]);var state_12494__$1 = state_12494;var statearr_12516_12559 = state_12494__$1;(statearr_12516_12559[(2)] = inst_12469);
(statearr_12516_12559[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (2)))
{var state_12494__$1 = state_12494;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12494__$1,(4),ch);
} else
{if((state_val_12495 === (23)))
{var state_12494__$1 = state_12494;var statearr_12517_12560 = state_12494__$1;(statearr_12517_12560[(2)] = null);
(statearr_12517_12560[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (19)))
{var inst_12475 = (state_12494[(11)]);var inst_12425 = (state_12494[(8)]);var inst_12477 = cljs.core.async.muxch_STAR_.call(null,inst_12475);var state_12494__$1 = state_12494;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12494__$1,(22),inst_12477,inst_12425);
} else
{if((state_val_12495 === (11)))
{var inst_12449 = (state_12494[(10)]);var inst_12435 = (state_12494[(16)]);var inst_12449__$1 = cljs.core.seq.call(null,inst_12435);var state_12494__$1 = (function (){var statearr_12518 = state_12494;(statearr_12518[(10)] = inst_12449__$1);
return statearr_12518;
})();if(inst_12449__$1)
{var statearr_12519_12561 = state_12494__$1;(statearr_12519_12561[(1)] = (13));
} else
{var statearr_12520_12562 = state_12494__$1;(statearr_12520_12562[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (9)))
{var inst_12471 = (state_12494[(2)]);var state_12494__$1 = state_12494;var statearr_12521_12563 = state_12494__$1;(statearr_12521_12563[(2)] = inst_12471);
(statearr_12521_12563[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (5)))
{var inst_12432 = cljs.core.deref.call(null,mults);var inst_12433 = cljs.core.vals.call(null,inst_12432);var inst_12434 = cljs.core.seq.call(null,inst_12433);var inst_12435 = inst_12434;var inst_12436 = null;var inst_12437 = (0);var inst_12438 = (0);var state_12494__$1 = (function (){var statearr_12522 = state_12494;(statearr_12522[(13)] = inst_12436);
(statearr_12522[(14)] = inst_12437);
(statearr_12522[(15)] = inst_12438);
(statearr_12522[(16)] = inst_12435);
return statearr_12522;
})();var statearr_12523_12564 = state_12494__$1;(statearr_12523_12564[(2)] = null);
(statearr_12523_12564[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (14)))
{var state_12494__$1 = state_12494;var statearr_12527_12565 = state_12494__$1;(statearr_12527_12565[(2)] = null);
(statearr_12527_12565[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (16)))
{var inst_12449 = (state_12494[(10)]);var inst_12453 = cljs.core.chunk_first.call(null,inst_12449);var inst_12454 = cljs.core.chunk_rest.call(null,inst_12449);var inst_12455 = cljs.core.count.call(null,inst_12453);var inst_12435 = inst_12454;var inst_12436 = inst_12453;var inst_12437 = inst_12455;var inst_12438 = (0);var state_12494__$1 = (function (){var statearr_12528 = state_12494;(statearr_12528[(13)] = inst_12436);
(statearr_12528[(14)] = inst_12437);
(statearr_12528[(15)] = inst_12438);
(statearr_12528[(16)] = inst_12435);
return statearr_12528;
})();var statearr_12529_12566 = state_12494__$1;(statearr_12529_12566[(2)] = null);
(statearr_12529_12566[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (10)))
{var inst_12436 = (state_12494[(13)]);var inst_12437 = (state_12494[(14)]);var inst_12438 = (state_12494[(15)]);var inst_12435 = (state_12494[(16)]);var inst_12443 = cljs.core._nth.call(null,inst_12436,inst_12438);var inst_12444 = cljs.core.async.muxch_STAR_.call(null,inst_12443);var inst_12445 = cljs.core.async.close_BANG_.call(null,inst_12444);var inst_12446 = (inst_12438 + (1));var tmp12524 = inst_12436;var tmp12525 = inst_12437;var tmp12526 = inst_12435;var inst_12435__$1 = tmp12526;var inst_12436__$1 = tmp12524;var inst_12437__$1 = tmp12525;var inst_12438__$1 = inst_12446;var state_12494__$1 = (function (){var statearr_12530 = state_12494;(statearr_12530[(13)] = inst_12436__$1);
(statearr_12530[(17)] = inst_12445);
(statearr_12530[(14)] = inst_12437__$1);
(statearr_12530[(15)] = inst_12438__$1);
(statearr_12530[(16)] = inst_12435__$1);
return statearr_12530;
})();var statearr_12531_12567 = state_12494__$1;(statearr_12531_12567[(2)] = null);
(statearr_12531_12567[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (18)))
{var inst_12464 = (state_12494[(2)]);var state_12494__$1 = state_12494;var statearr_12532_12568 = state_12494__$1;(statearr_12532_12568[(2)] = inst_12464);
(statearr_12532_12568[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12495 === (8)))
{var inst_12437 = (state_12494[(14)]);var inst_12438 = (state_12494[(15)]);var inst_12440 = (inst_12438 < inst_12437);var inst_12441 = inst_12440;var state_12494__$1 = state_12494;if(cljs.core.truth_(inst_12441))
{var statearr_12533_12569 = state_12494__$1;(statearr_12533_12569[(1)] = (10));
} else
{var statearr_12534_12570 = state_12494__$1;(statearr_12534_12570[(1)] = (11));
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
});})(c__5725__auto___12542,mults,ensure_mult,p))
;return ((function (switch__5710__auto__,c__5725__auto___12542,mults,ensure_mult,p){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_12538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12538[(0)] = state_machine__5711__auto__);
(statearr_12538[(1)] = (1));
return statearr_12538;
});
var state_machine__5711__auto____1 = (function (state_12494){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_12494);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e12539){if((e12539 instanceof Object))
{var ex__5714__auto__ = e12539;var statearr_12540_12571 = state_12494;(statearr_12540_12571[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12494);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12572 = state_12494;
state_12494 = G__12572;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_12494){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_12494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___12542,mults,ensure_mult,p))
})();var state__5727__auto__ = (function (){var statearr_12541 = f__5726__auto__.call(null);(statearr_12541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___12542);
return statearr_12541;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___12542,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5725__auto___12709 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___12709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___12709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12679){var state_val_12680 = (state_12679[(1)]);if((state_val_12680 === (7)))
{var state_12679__$1 = state_12679;var statearr_12681_12710 = state_12679__$1;(statearr_12681_12710[(2)] = null);
(statearr_12681_12710[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12680 === (1)))
{var state_12679__$1 = state_12679;var statearr_12682_12711 = state_12679__$1;(statearr_12682_12711[(2)] = null);
(statearr_12682_12711[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12680 === (4)))
{var inst_12643 = (state_12679[(7)]);var inst_12645 = (inst_12643 < cnt);var state_12679__$1 = state_12679;if(cljs.core.truth_(inst_12645))
{var statearr_12683_12712 = state_12679__$1;(statearr_12683_12712[(1)] = (6));
} else
{var statearr_12684_12713 = state_12679__$1;(statearr_12684_12713[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12680 === (15)))
{var inst_12675 = (state_12679[(2)]);var state_12679__$1 = state_12679;var statearr_12685_12714 = state_12679__$1;(statearr_12685_12714[(2)] = inst_12675);
(statearr_12685_12714[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12680 === (13)))
{var inst_12668 = cljs.core.async.close_BANG_.call(null,out);var state_12679__$1 = state_12679;var statearr_12686_12715 = state_12679__$1;(statearr_12686_12715[(2)] = inst_12668);
(statearr_12686_12715[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12680 === (6)))
{var state_12679__$1 = state_12679;var statearr_12687_12716 = state_12679__$1;(statearr_12687_12716[(2)] = null);
(statearr_12687_12716[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12680 === (3)))
{var inst_12677 = (state_12679[(2)]);var state_12679__$1 = state_12679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12679__$1,inst_12677);
} else
{if((state_val_12680 === (12)))
{var inst_12665 = (state_12679[(8)]);var inst_12665__$1 = (state_12679[(2)]);var inst_12666 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12665__$1);var state_12679__$1 = (function (){var statearr_12688 = state_12679;(statearr_12688[(8)] = inst_12665__$1);
return statearr_12688;
})();if(cljs.core.truth_(inst_12666))
{var statearr_12689_12717 = state_12679__$1;(statearr_12689_12717[(1)] = (13));
} else
{var statearr_12690_12718 = state_12679__$1;(statearr_12690_12718[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12680 === (2)))
{var inst_12642 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12643 = (0);var state_12679__$1 = (function (){var statearr_12691 = state_12679;(statearr_12691[(9)] = inst_12642);
(statearr_12691[(7)] = inst_12643);
return statearr_12691;
})();var statearr_12692_12719 = state_12679__$1;(statearr_12692_12719[(2)] = null);
(statearr_12692_12719[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12680 === (11)))
{var inst_12643 = (state_12679[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12679,(10),Object,null,(9));var inst_12652 = chs__$1.call(null,inst_12643);var inst_12653 = done.call(null,inst_12643);var inst_12654 = cljs.core.async.take_BANG_.call(null,inst_12652,inst_12653);var state_12679__$1 = state_12679;var statearr_12693_12720 = state_12679__$1;(statearr_12693_12720[(2)] = inst_12654);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12679__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12680 === (9)))
{var inst_12643 = (state_12679[(7)]);var inst_12656 = (state_12679[(2)]);var inst_12657 = (inst_12643 + (1));var inst_12643__$1 = inst_12657;var state_12679__$1 = (function (){var statearr_12694 = state_12679;(statearr_12694[(7)] = inst_12643__$1);
(statearr_12694[(10)] = inst_12656);
return statearr_12694;
})();var statearr_12695_12721 = state_12679__$1;(statearr_12695_12721[(2)] = null);
(statearr_12695_12721[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12680 === (5)))
{var inst_12663 = (state_12679[(2)]);var state_12679__$1 = (function (){var statearr_12696 = state_12679;(statearr_12696[(11)] = inst_12663);
return statearr_12696;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12679__$1,(12),dchan);
} else
{if((state_val_12680 === (14)))
{var inst_12665 = (state_12679[(8)]);var inst_12670 = cljs.core.apply.call(null,f,inst_12665);var state_12679__$1 = state_12679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12679__$1,(16),out,inst_12670);
} else
{if((state_val_12680 === (16)))
{var inst_12672 = (state_12679[(2)]);var state_12679__$1 = (function (){var statearr_12697 = state_12679;(statearr_12697[(12)] = inst_12672);
return statearr_12697;
})();var statearr_12698_12722 = state_12679__$1;(statearr_12698_12722[(2)] = null);
(statearr_12698_12722[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12680 === (10)))
{var inst_12647 = (state_12679[(2)]);var inst_12648 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12679__$1 = (function (){var statearr_12699 = state_12679;(statearr_12699[(13)] = inst_12647);
return statearr_12699;
})();var statearr_12700_12723 = state_12679__$1;(statearr_12700_12723[(2)] = inst_12648);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12679__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12680 === (8)))
{var inst_12661 = (state_12679[(2)]);var state_12679__$1 = state_12679;var statearr_12701_12724 = state_12679__$1;(statearr_12701_12724[(2)] = inst_12661);
(statearr_12701_12724[(1)] = (5));
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
});})(c__5725__auto___12709,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5710__auto__,c__5725__auto___12709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_12705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12705[(0)] = state_machine__5711__auto__);
(statearr_12705[(1)] = (1));
return statearr_12705;
});
var state_machine__5711__auto____1 = (function (state_12679){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_12679);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e12706){if((e12706 instanceof Object))
{var ex__5714__auto__ = e12706;var statearr_12707_12725 = state_12679;(statearr_12707_12725[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12679);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12726 = state_12679;
state_12679 = G__12726;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_12679){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_12679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___12709,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5727__auto__ = (function (){var statearr_12708 = f__5726__auto__.call(null);(statearr_12708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___12709);
return statearr_12708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___12709,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5725__auto___12834 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___12834,out){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___12834,out){
return (function (state_12810){var state_val_12811 = (state_12810[(1)]);if((state_val_12811 === (7)))
{var inst_12789 = (state_12810[(7)]);var inst_12790 = (state_12810[(8)]);var inst_12789__$1 = (state_12810[(2)]);var inst_12790__$1 = cljs.core.nth.call(null,inst_12789__$1,(0),null);var inst_12791 = cljs.core.nth.call(null,inst_12789__$1,(1),null);var inst_12792 = (inst_12790__$1 == null);var state_12810__$1 = (function (){var statearr_12812 = state_12810;(statearr_12812[(9)] = inst_12791);
(statearr_12812[(7)] = inst_12789__$1);
(statearr_12812[(8)] = inst_12790__$1);
return statearr_12812;
})();if(cljs.core.truth_(inst_12792))
{var statearr_12813_12835 = state_12810__$1;(statearr_12813_12835[(1)] = (8));
} else
{var statearr_12814_12836 = state_12810__$1;(statearr_12814_12836[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (1)))
{var inst_12781 = cljs.core.vec.call(null,chs);var inst_12782 = inst_12781;var state_12810__$1 = (function (){var statearr_12815 = state_12810;(statearr_12815[(10)] = inst_12782);
return statearr_12815;
})();var statearr_12816_12837 = state_12810__$1;(statearr_12816_12837[(2)] = null);
(statearr_12816_12837[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (4)))
{var inst_12782 = (state_12810[(10)]);var state_12810__$1 = state_12810;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12810__$1,(7),inst_12782);
} else
{if((state_val_12811 === (6)))
{var inst_12806 = (state_12810[(2)]);var state_12810__$1 = state_12810;var statearr_12817_12838 = state_12810__$1;(statearr_12817_12838[(2)] = inst_12806);
(statearr_12817_12838[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (3)))
{var inst_12808 = (state_12810[(2)]);var state_12810__$1 = state_12810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12810__$1,inst_12808);
} else
{if((state_val_12811 === (2)))
{var inst_12782 = (state_12810[(10)]);var inst_12784 = cljs.core.count.call(null,inst_12782);var inst_12785 = (inst_12784 > (0));var state_12810__$1 = state_12810;if(cljs.core.truth_(inst_12785))
{var statearr_12819_12839 = state_12810__$1;(statearr_12819_12839[(1)] = (4));
} else
{var statearr_12820_12840 = state_12810__$1;(statearr_12820_12840[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (11)))
{var inst_12782 = (state_12810[(10)]);var inst_12799 = (state_12810[(2)]);var tmp12818 = inst_12782;var inst_12782__$1 = tmp12818;var state_12810__$1 = (function (){var statearr_12821 = state_12810;(statearr_12821[(11)] = inst_12799);
(statearr_12821[(10)] = inst_12782__$1);
return statearr_12821;
})();var statearr_12822_12841 = state_12810__$1;(statearr_12822_12841[(2)] = null);
(statearr_12822_12841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (9)))
{var inst_12790 = (state_12810[(8)]);var state_12810__$1 = state_12810;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12810__$1,(11),out,inst_12790);
} else
{if((state_val_12811 === (5)))
{var inst_12804 = cljs.core.async.close_BANG_.call(null,out);var state_12810__$1 = state_12810;var statearr_12823_12842 = state_12810__$1;(statearr_12823_12842[(2)] = inst_12804);
(statearr_12823_12842[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (10)))
{var inst_12802 = (state_12810[(2)]);var state_12810__$1 = state_12810;var statearr_12824_12843 = state_12810__$1;(statearr_12824_12843[(2)] = inst_12802);
(statearr_12824_12843[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (8)))
{var inst_12791 = (state_12810[(9)]);var inst_12789 = (state_12810[(7)]);var inst_12782 = (state_12810[(10)]);var inst_12790 = (state_12810[(8)]);var inst_12794 = (function (){var c = inst_12791;var v = inst_12790;var vec__12787 = inst_12789;var cs = inst_12782;return ((function (c,v,vec__12787,cs,inst_12791,inst_12789,inst_12782,inst_12790,state_val_12811,c__5725__auto___12834,out){
return (function (p1__12727_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12727_SHARP_);
});
;})(c,v,vec__12787,cs,inst_12791,inst_12789,inst_12782,inst_12790,state_val_12811,c__5725__auto___12834,out))
})();var inst_12795 = cljs.core.filterv.call(null,inst_12794,inst_12782);var inst_12782__$1 = inst_12795;var state_12810__$1 = (function (){var statearr_12825 = state_12810;(statearr_12825[(10)] = inst_12782__$1);
return statearr_12825;
})();var statearr_12826_12844 = state_12810__$1;(statearr_12826_12844[(2)] = null);
(statearr_12826_12844[(1)] = (2));
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
});})(c__5725__auto___12834,out))
;return ((function (switch__5710__auto__,c__5725__auto___12834,out){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_12830 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12830[(0)] = state_machine__5711__auto__);
(statearr_12830[(1)] = (1));
return statearr_12830;
});
var state_machine__5711__auto____1 = (function (state_12810){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_12810);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e12831){if((e12831 instanceof Object))
{var ex__5714__auto__ = e12831;var statearr_12832_12845 = state_12810;(statearr_12832_12845[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12846 = state_12810;
state_12810 = G__12846;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_12810){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_12810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___12834,out))
})();var state__5727__auto__ = (function (){var statearr_12833 = f__5726__auto__.call(null);(statearr_12833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___12834);
return statearr_12833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___12834,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5725__auto___12939 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___12939,out){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___12939,out){
return (function (state_12916){var state_val_12917 = (state_12916[(1)]);if((state_val_12917 === (7)))
{var inst_12898 = (state_12916[(7)]);var inst_12898__$1 = (state_12916[(2)]);var inst_12899 = (inst_12898__$1 == null);var inst_12900 = cljs.core.not.call(null,inst_12899);var state_12916__$1 = (function (){var statearr_12918 = state_12916;(statearr_12918[(7)] = inst_12898__$1);
return statearr_12918;
})();if(inst_12900)
{var statearr_12919_12940 = state_12916__$1;(statearr_12919_12940[(1)] = (8));
} else
{var statearr_12920_12941 = state_12916__$1;(statearr_12920_12941[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12917 === (1)))
{var inst_12893 = (0);var state_12916__$1 = (function (){var statearr_12921 = state_12916;(statearr_12921[(8)] = inst_12893);
return statearr_12921;
})();var statearr_12922_12942 = state_12916__$1;(statearr_12922_12942[(2)] = null);
(statearr_12922_12942[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12917 === (4)))
{var state_12916__$1 = state_12916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12916__$1,(7),ch);
} else
{if((state_val_12917 === (6)))
{var inst_12911 = (state_12916[(2)]);var state_12916__$1 = state_12916;var statearr_12923_12943 = state_12916__$1;(statearr_12923_12943[(2)] = inst_12911);
(statearr_12923_12943[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12917 === (3)))
{var inst_12913 = (state_12916[(2)]);var inst_12914 = cljs.core.async.close_BANG_.call(null,out);var state_12916__$1 = (function (){var statearr_12924 = state_12916;(statearr_12924[(9)] = inst_12913);
return statearr_12924;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12916__$1,inst_12914);
} else
{if((state_val_12917 === (2)))
{var inst_12893 = (state_12916[(8)]);var inst_12895 = (inst_12893 < n);var state_12916__$1 = state_12916;if(cljs.core.truth_(inst_12895))
{var statearr_12925_12944 = state_12916__$1;(statearr_12925_12944[(1)] = (4));
} else
{var statearr_12926_12945 = state_12916__$1;(statearr_12926_12945[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12917 === (11)))
{var inst_12893 = (state_12916[(8)]);var inst_12903 = (state_12916[(2)]);var inst_12904 = (inst_12893 + (1));var inst_12893__$1 = inst_12904;var state_12916__$1 = (function (){var statearr_12927 = state_12916;(statearr_12927[(8)] = inst_12893__$1);
(statearr_12927[(10)] = inst_12903);
return statearr_12927;
})();var statearr_12928_12946 = state_12916__$1;(statearr_12928_12946[(2)] = null);
(statearr_12928_12946[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12917 === (9)))
{var state_12916__$1 = state_12916;var statearr_12929_12947 = state_12916__$1;(statearr_12929_12947[(2)] = null);
(statearr_12929_12947[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12917 === (5)))
{var state_12916__$1 = state_12916;var statearr_12930_12948 = state_12916__$1;(statearr_12930_12948[(2)] = null);
(statearr_12930_12948[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12917 === (10)))
{var inst_12908 = (state_12916[(2)]);var state_12916__$1 = state_12916;var statearr_12931_12949 = state_12916__$1;(statearr_12931_12949[(2)] = inst_12908);
(statearr_12931_12949[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12917 === (8)))
{var inst_12898 = (state_12916[(7)]);var state_12916__$1 = state_12916;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12916__$1,(11),out,inst_12898);
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
});})(c__5725__auto___12939,out))
;return ((function (switch__5710__auto__,c__5725__auto___12939,out){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_12935 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12935[(0)] = state_machine__5711__auto__);
(statearr_12935[(1)] = (1));
return statearr_12935;
});
var state_machine__5711__auto____1 = (function (state_12916){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_12916);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e12936){if((e12936 instanceof Object))
{var ex__5714__auto__ = e12936;var statearr_12937_12950 = state_12916;(statearr_12937_12950[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12916);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12936;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12951 = state_12916;
state_12916 = G__12951;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_12916){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_12916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___12939,out))
})();var state__5727__auto__ = (function (){var statearr_12938 = f__5726__auto__.call(null);(statearr_12938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___12939);
return statearr_12938;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___12939,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5725__auto___13048 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___13048,out){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___13048,out){
return (function (state_13023){var state_val_13024 = (state_13023[(1)]);if((state_val_13024 === (7)))
{var inst_13018 = (state_13023[(2)]);var state_13023__$1 = state_13023;var statearr_13025_13049 = state_13023__$1;(statearr_13025_13049[(2)] = inst_13018);
(statearr_13025_13049[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (1)))
{var inst_13000 = null;var state_13023__$1 = (function (){var statearr_13026 = state_13023;(statearr_13026[(7)] = inst_13000);
return statearr_13026;
})();var statearr_13027_13050 = state_13023__$1;(statearr_13027_13050[(2)] = null);
(statearr_13027_13050[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (4)))
{var inst_13003 = (state_13023[(8)]);var inst_13003__$1 = (state_13023[(2)]);var inst_13004 = (inst_13003__$1 == null);var inst_13005 = cljs.core.not.call(null,inst_13004);var state_13023__$1 = (function (){var statearr_13028 = state_13023;(statearr_13028[(8)] = inst_13003__$1);
return statearr_13028;
})();if(inst_13005)
{var statearr_13029_13051 = state_13023__$1;(statearr_13029_13051[(1)] = (5));
} else
{var statearr_13030_13052 = state_13023__$1;(statearr_13030_13052[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (6)))
{var state_13023__$1 = state_13023;var statearr_13031_13053 = state_13023__$1;(statearr_13031_13053[(2)] = null);
(statearr_13031_13053[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (3)))
{var inst_13020 = (state_13023[(2)]);var inst_13021 = cljs.core.async.close_BANG_.call(null,out);var state_13023__$1 = (function (){var statearr_13032 = state_13023;(statearr_13032[(9)] = inst_13020);
return statearr_13032;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13023__$1,inst_13021);
} else
{if((state_val_13024 === (2)))
{var state_13023__$1 = state_13023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13023__$1,(4),ch);
} else
{if((state_val_13024 === (11)))
{var inst_13003 = (state_13023[(8)]);var inst_13012 = (state_13023[(2)]);var inst_13000 = inst_13003;var state_13023__$1 = (function (){var statearr_13033 = state_13023;(statearr_13033[(7)] = inst_13000);
(statearr_13033[(10)] = inst_13012);
return statearr_13033;
})();var statearr_13034_13054 = state_13023__$1;(statearr_13034_13054[(2)] = null);
(statearr_13034_13054[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (9)))
{var inst_13003 = (state_13023[(8)]);var state_13023__$1 = state_13023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13023__$1,(11),out,inst_13003);
} else
{if((state_val_13024 === (5)))
{var inst_13000 = (state_13023[(7)]);var inst_13003 = (state_13023[(8)]);var inst_13007 = cljs.core._EQ_.call(null,inst_13003,inst_13000);var state_13023__$1 = state_13023;if(inst_13007)
{var statearr_13036_13055 = state_13023__$1;(statearr_13036_13055[(1)] = (8));
} else
{var statearr_13037_13056 = state_13023__$1;(statearr_13037_13056[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (10)))
{var inst_13015 = (state_13023[(2)]);var state_13023__$1 = state_13023;var statearr_13038_13057 = state_13023__$1;(statearr_13038_13057[(2)] = inst_13015);
(statearr_13038_13057[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13024 === (8)))
{var inst_13000 = (state_13023[(7)]);var tmp13035 = inst_13000;var inst_13000__$1 = tmp13035;var state_13023__$1 = (function (){var statearr_13039 = state_13023;(statearr_13039[(7)] = inst_13000__$1);
return statearr_13039;
})();var statearr_13040_13058 = state_13023__$1;(statearr_13040_13058[(2)] = null);
(statearr_13040_13058[(1)] = (2));
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
});})(c__5725__auto___13048,out))
;return ((function (switch__5710__auto__,c__5725__auto___13048,out){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_13044 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13044[(0)] = state_machine__5711__auto__);
(statearr_13044[(1)] = (1));
return statearr_13044;
});
var state_machine__5711__auto____1 = (function (state_13023){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_13023);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e13045){if((e13045 instanceof Object))
{var ex__5714__auto__ = e13045;var statearr_13046_13059 = state_13023;(statearr_13046_13059[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13023);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13060 = state_13023;
state_13023 = G__13060;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_13023){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_13023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___13048,out))
})();var state__5727__auto__ = (function (){var statearr_13047 = f__5726__auto__.call(null);(statearr_13047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___13048);
return statearr_13047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___13048,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5725__auto___13195 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___13195,out){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___13195,out){
return (function (state_13165){var state_val_13166 = (state_13165[(1)]);if((state_val_13166 === (7)))
{var inst_13161 = (state_13165[(2)]);var state_13165__$1 = state_13165;var statearr_13167_13196 = state_13165__$1;(statearr_13167_13196[(2)] = inst_13161);
(statearr_13167_13196[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13166 === (1)))
{var inst_13128 = (new Array(n));var inst_13129 = inst_13128;var inst_13130 = (0);var state_13165__$1 = (function (){var statearr_13168 = state_13165;(statearr_13168[(7)] = inst_13130);
(statearr_13168[(8)] = inst_13129);
return statearr_13168;
})();var statearr_13169_13197 = state_13165__$1;(statearr_13169_13197[(2)] = null);
(statearr_13169_13197[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13166 === (4)))
{var inst_13133 = (state_13165[(9)]);var inst_13133__$1 = (state_13165[(2)]);var inst_13134 = (inst_13133__$1 == null);var inst_13135 = cljs.core.not.call(null,inst_13134);var state_13165__$1 = (function (){var statearr_13170 = state_13165;(statearr_13170[(9)] = inst_13133__$1);
return statearr_13170;
})();if(inst_13135)
{var statearr_13171_13198 = state_13165__$1;(statearr_13171_13198[(1)] = (5));
} else
{var statearr_13172_13199 = state_13165__$1;(statearr_13172_13199[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13166 === (15)))
{var inst_13155 = (state_13165[(2)]);var state_13165__$1 = state_13165;var statearr_13173_13200 = state_13165__$1;(statearr_13173_13200[(2)] = inst_13155);
(statearr_13173_13200[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13166 === (13)))
{var state_13165__$1 = state_13165;var statearr_13174_13201 = state_13165__$1;(statearr_13174_13201[(2)] = null);
(statearr_13174_13201[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13166 === (6)))
{var inst_13130 = (state_13165[(7)]);var inst_13151 = (inst_13130 > (0));var state_13165__$1 = state_13165;if(cljs.core.truth_(inst_13151))
{var statearr_13175_13202 = state_13165__$1;(statearr_13175_13202[(1)] = (12));
} else
{var statearr_13176_13203 = state_13165__$1;(statearr_13176_13203[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13166 === (3)))
{var inst_13163 = (state_13165[(2)]);var state_13165__$1 = state_13165;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13165__$1,inst_13163);
} else
{if((state_val_13166 === (12)))
{var inst_13129 = (state_13165[(8)]);var inst_13153 = cljs.core.vec.call(null,inst_13129);var state_13165__$1 = state_13165;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13165__$1,(15),out,inst_13153);
} else
{if((state_val_13166 === (2)))
{var state_13165__$1 = state_13165;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13165__$1,(4),ch);
} else
{if((state_val_13166 === (11)))
{var inst_13145 = (state_13165[(2)]);var inst_13146 = (new Array(n));var inst_13129 = inst_13146;var inst_13130 = (0);var state_13165__$1 = (function (){var statearr_13177 = state_13165;(statearr_13177[(10)] = inst_13145);
(statearr_13177[(7)] = inst_13130);
(statearr_13177[(8)] = inst_13129);
return statearr_13177;
})();var statearr_13178_13204 = state_13165__$1;(statearr_13178_13204[(2)] = null);
(statearr_13178_13204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13166 === (9)))
{var inst_13129 = (state_13165[(8)]);var inst_13143 = cljs.core.vec.call(null,inst_13129);var state_13165__$1 = state_13165;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13165__$1,(11),out,inst_13143);
} else
{if((state_val_13166 === (5)))
{var inst_13133 = (state_13165[(9)]);var inst_13138 = (state_13165[(11)]);var inst_13130 = (state_13165[(7)]);var inst_13129 = (state_13165[(8)]);var inst_13137 = (inst_13129[inst_13130] = inst_13133);var inst_13138__$1 = (inst_13130 + (1));var inst_13139 = (inst_13138__$1 < n);var state_13165__$1 = (function (){var statearr_13179 = state_13165;(statearr_13179[(11)] = inst_13138__$1);
(statearr_13179[(12)] = inst_13137);
return statearr_13179;
})();if(cljs.core.truth_(inst_13139))
{var statearr_13180_13205 = state_13165__$1;(statearr_13180_13205[(1)] = (8));
} else
{var statearr_13181_13206 = state_13165__$1;(statearr_13181_13206[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13166 === (14)))
{var inst_13158 = (state_13165[(2)]);var inst_13159 = cljs.core.async.close_BANG_.call(null,out);var state_13165__$1 = (function (){var statearr_13183 = state_13165;(statearr_13183[(13)] = inst_13158);
return statearr_13183;
})();var statearr_13184_13207 = state_13165__$1;(statearr_13184_13207[(2)] = inst_13159);
(statearr_13184_13207[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13166 === (10)))
{var inst_13149 = (state_13165[(2)]);var state_13165__$1 = state_13165;var statearr_13185_13208 = state_13165__$1;(statearr_13185_13208[(2)] = inst_13149);
(statearr_13185_13208[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13166 === (8)))
{var inst_13138 = (state_13165[(11)]);var inst_13129 = (state_13165[(8)]);var tmp13182 = inst_13129;var inst_13129__$1 = tmp13182;var inst_13130 = inst_13138;var state_13165__$1 = (function (){var statearr_13186 = state_13165;(statearr_13186[(7)] = inst_13130);
(statearr_13186[(8)] = inst_13129__$1);
return statearr_13186;
})();var statearr_13187_13209 = state_13165__$1;(statearr_13187_13209[(2)] = null);
(statearr_13187_13209[(1)] = (2));
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
});})(c__5725__auto___13195,out))
;return ((function (switch__5710__auto__,c__5725__auto___13195,out){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_13191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13191[(0)] = state_machine__5711__auto__);
(statearr_13191[(1)] = (1));
return statearr_13191;
});
var state_machine__5711__auto____1 = (function (state_13165){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_13165);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e13192){if((e13192 instanceof Object))
{var ex__5714__auto__ = e13192;var statearr_13193_13210 = state_13165;(statearr_13193_13210[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13165);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13192;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13211 = state_13165;
state_13165 = G__13211;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_13165){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_13165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___13195,out))
})();var state__5727__auto__ = (function (){var statearr_13194 = f__5726__auto__.call(null);(statearr_13194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___13195);
return statearr_13194;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___13195,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5725__auto___13354 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___13354,out){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___13354,out){
return (function (state_13324){var state_val_13325 = (state_13324[(1)]);if((state_val_13325 === (7)))
{var inst_13320 = (state_13324[(2)]);var state_13324__$1 = state_13324;var statearr_13326_13355 = state_13324__$1;(statearr_13326_13355[(2)] = inst_13320);
(statearr_13326_13355[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13325 === (1)))
{var inst_13283 = [];var inst_13284 = inst_13283;var inst_13285 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13324__$1 = (function (){var statearr_13327 = state_13324;(statearr_13327[(7)] = inst_13284);
(statearr_13327[(8)] = inst_13285);
return statearr_13327;
})();var statearr_13328_13356 = state_13324__$1;(statearr_13328_13356[(2)] = null);
(statearr_13328_13356[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13325 === (4)))
{var inst_13288 = (state_13324[(9)]);var inst_13288__$1 = (state_13324[(2)]);var inst_13289 = (inst_13288__$1 == null);var inst_13290 = cljs.core.not.call(null,inst_13289);var state_13324__$1 = (function (){var statearr_13329 = state_13324;(statearr_13329[(9)] = inst_13288__$1);
return statearr_13329;
})();if(inst_13290)
{var statearr_13330_13357 = state_13324__$1;(statearr_13330_13357[(1)] = (5));
} else
{var statearr_13331_13358 = state_13324__$1;(statearr_13331_13358[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13325 === (15)))
{var inst_13314 = (state_13324[(2)]);var state_13324__$1 = state_13324;var statearr_13332_13359 = state_13324__$1;(statearr_13332_13359[(2)] = inst_13314);
(statearr_13332_13359[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13325 === (13)))
{var state_13324__$1 = state_13324;var statearr_13333_13360 = state_13324__$1;(statearr_13333_13360[(2)] = null);
(statearr_13333_13360[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13325 === (6)))
{var inst_13284 = (state_13324[(7)]);var inst_13309 = inst_13284.length;var inst_13310 = (inst_13309 > (0));var state_13324__$1 = state_13324;if(cljs.core.truth_(inst_13310))
{var statearr_13334_13361 = state_13324__$1;(statearr_13334_13361[(1)] = (12));
} else
{var statearr_13335_13362 = state_13324__$1;(statearr_13335_13362[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13325 === (3)))
{var inst_13322 = (state_13324[(2)]);var state_13324__$1 = state_13324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13324__$1,inst_13322);
} else
{if((state_val_13325 === (12)))
{var inst_13284 = (state_13324[(7)]);var inst_13312 = cljs.core.vec.call(null,inst_13284);var state_13324__$1 = state_13324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13324__$1,(15),out,inst_13312);
} else
{if((state_val_13325 === (2)))
{var state_13324__$1 = state_13324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13324__$1,(4),ch);
} else
{if((state_val_13325 === (11)))
{var inst_13288 = (state_13324[(9)]);var inst_13292 = (state_13324[(10)]);var inst_13302 = (state_13324[(2)]);var inst_13303 = [];var inst_13304 = inst_13303.push(inst_13288);var inst_13284 = inst_13303;var inst_13285 = inst_13292;var state_13324__$1 = (function (){var statearr_13336 = state_13324;(statearr_13336[(7)] = inst_13284);
(statearr_13336[(11)] = inst_13302);
(statearr_13336[(8)] = inst_13285);
(statearr_13336[(12)] = inst_13304);
return statearr_13336;
})();var statearr_13337_13363 = state_13324__$1;(statearr_13337_13363[(2)] = null);
(statearr_13337_13363[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13325 === (9)))
{var inst_13284 = (state_13324[(7)]);var inst_13300 = cljs.core.vec.call(null,inst_13284);var state_13324__$1 = state_13324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13324__$1,(11),out,inst_13300);
} else
{if((state_val_13325 === (5)))
{var inst_13285 = (state_13324[(8)]);var inst_13288 = (state_13324[(9)]);var inst_13292 = (state_13324[(10)]);var inst_13292__$1 = f.call(null,inst_13288);var inst_13293 = cljs.core._EQ_.call(null,inst_13292__$1,inst_13285);var inst_13294 = cljs.core.keyword_identical_QMARK_.call(null,inst_13285,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13295 = (inst_13293) || (inst_13294);var state_13324__$1 = (function (){var statearr_13338 = state_13324;(statearr_13338[(10)] = inst_13292__$1);
return statearr_13338;
})();if(cljs.core.truth_(inst_13295))
{var statearr_13339_13364 = state_13324__$1;(statearr_13339_13364[(1)] = (8));
} else
{var statearr_13340_13365 = state_13324__$1;(statearr_13340_13365[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13325 === (14)))
{var inst_13317 = (state_13324[(2)]);var inst_13318 = cljs.core.async.close_BANG_.call(null,out);var state_13324__$1 = (function (){var statearr_13342 = state_13324;(statearr_13342[(13)] = inst_13317);
return statearr_13342;
})();var statearr_13343_13366 = state_13324__$1;(statearr_13343_13366[(2)] = inst_13318);
(statearr_13343_13366[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13325 === (10)))
{var inst_13307 = (state_13324[(2)]);var state_13324__$1 = state_13324;var statearr_13344_13367 = state_13324__$1;(statearr_13344_13367[(2)] = inst_13307);
(statearr_13344_13367[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13325 === (8)))
{var inst_13284 = (state_13324[(7)]);var inst_13288 = (state_13324[(9)]);var inst_13292 = (state_13324[(10)]);var inst_13297 = inst_13284.push(inst_13288);var tmp13341 = inst_13284;var inst_13284__$1 = tmp13341;var inst_13285 = inst_13292;var state_13324__$1 = (function (){var statearr_13345 = state_13324;(statearr_13345[(7)] = inst_13284__$1);
(statearr_13345[(8)] = inst_13285);
(statearr_13345[(14)] = inst_13297);
return statearr_13345;
})();var statearr_13346_13368 = state_13324__$1;(statearr_13346_13368[(2)] = null);
(statearr_13346_13368[(1)] = (2));
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
});})(c__5725__auto___13354,out))
;return ((function (switch__5710__auto__,c__5725__auto___13354,out){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_13350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13350[(0)] = state_machine__5711__auto__);
(statearr_13350[(1)] = (1));
return statearr_13350;
});
var state_machine__5711__auto____1 = (function (state_13324){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_13324);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e13351){if((e13351 instanceof Object))
{var ex__5714__auto__ = e13351;var statearr_13352_13369 = state_13324;(statearr_13352_13369[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13324);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13370 = state_13324;
state_13324 = G__13370;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_13324){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_13324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___13354,out))
})();var state__5727__auto__ = (function (){var statearr_13353 = f__5726__auto__.call(null);(statearr_13353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___13354);
return statearr_13353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___13354,out))
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