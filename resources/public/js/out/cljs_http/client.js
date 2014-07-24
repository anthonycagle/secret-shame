// Compiled by ClojureScript 0.0-2268
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3548__auto__ = v;if(cljs.core.truth_(and__3548__auto__))
{return (v > (0));
} else
{return and__3548__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__10419_SHARP_,p2__10418_SHARP_){var vec__10421 = clojure.string.split.call(null,p2__10418_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__10421,(0),null);var v = cljs.core.nth.call(null,vec__10421,(1),null);return cljs.core.assoc.call(null,p1__10419_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__10422_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__10422_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__10423){var vec__10425 = p__10423;var k = cljs.core.nth.call(null,vec__10425,(0),null);var v = cljs.core.nth.call(null,vec__10425,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__3548__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__3548__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content_type))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__3548__auto__;
}
})()))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__5725__auto___10462 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___10462,channel){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___10462,channel){
return (function (state_10452){var state_val_10453 = (state_10452[(1)]);if((state_val_10453 === (2)))
{var inst_10446 = (state_10452[(2)]);var inst_10447 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_10448 = cljs_http.client.decode_body.call(null,inst_10446,cljs.reader.read_string,"application/edn",inst_10447);var inst_10449 = cljs.core.async.put_BANG_.call(null,channel,inst_10448);var inst_10450 = cljs.core.async.close_BANG_.call(null,channel);var state_10452__$1 = (function (){var statearr_10454 = state_10452;(statearr_10454[(7)] = inst_10449);
return statearr_10454;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10452__$1,inst_10450);
} else
{if((state_val_10453 === (1)))
{var inst_10444 = client.call(null,request);var state_10452__$1 = state_10452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10452__$1,(2),inst_10444);
} else
{return null;
}
}
});})(c__5725__auto___10462,channel))
;return ((function (switch__5710__auto__,c__5725__auto___10462,channel){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_10458 = [null,null,null,null,null,null,null,null];(statearr_10458[(0)] = state_machine__5711__auto__);
(statearr_10458[(1)] = (1));
return statearr_10458;
});
var state_machine__5711__auto____1 = (function (state_10452){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_10452);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e10459){if((e10459 instanceof Object))
{var ex__5714__auto__ = e10459;var statearr_10460_10463 = state_10452;(statearr_10460_10463[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10452);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10459;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10464 = state_10452;
state_10452 = G__10464;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_10452){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_10452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___10462,channel))
})();var state__5727__auto__ = (function (){var statearr_10461 = f__5726__auto__.call(null);(statearr_10461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___10462);
return statearr_10461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___10462,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__10465){var vec__10467 = p__10465;var accept = cljs.core.nth.call(null,vec__10467,(0),null);return ((function (vec__10467,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3560__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__10467,accept))
};
var wrap_accept = function (client,var_args){
var p__10465 = null;if (arguments.length > 1) {
  p__10465 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__10465);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__10468){
var client = cljs.core.first(arglist__10468);
var p__10465 = cljs.core.rest(arglist__10468);
return wrap_accept__delegate(client,p__10465);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__10469){var vec__10471 = p__10469;var content_type = cljs.core.nth.call(null,vec__10471,(0),null);return ((function (vec__10471,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3560__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__10471,content_type))
};
var wrap_content_type = function (client,var_args){
var p__10469 = null;if (arguments.length > 1) {
  p__10469 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__10469);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__10472){
var client = cljs.core.first(arglist__10472);
var p__10469 = cljs.core.rest(arglist__10472);
return wrap_content_type__delegate(client,p__10469);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__5725__auto___10509 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___10509,channel){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___10509,channel){
return (function (state_10499){var state_val_10500 = (state_10499[(1)]);if((state_val_10500 === (2)))
{var inst_10493 = (state_10499[(2)]);var inst_10494 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_10495 = cljs_http.client.decode_body.call(null,inst_10493,cljs_http.util.json_decode,"application/json",inst_10494);var inst_10496 = cljs.core.async.put_BANG_.call(null,channel,inst_10495);var inst_10497 = cljs.core.async.close_BANG_.call(null,channel);var state_10499__$1 = (function (){var statearr_10501 = state_10499;(statearr_10501[(7)] = inst_10496);
return statearr_10501;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10499__$1,inst_10497);
} else
{if((state_val_10500 === (1)))
{var inst_10491 = client.call(null,request);var state_10499__$1 = state_10499;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10499__$1,(2),inst_10491);
} else
{return null;
}
}
});})(c__5725__auto___10509,channel))
;return ((function (switch__5710__auto__,c__5725__auto___10509,channel){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_10505 = [null,null,null,null,null,null,null,null];(statearr_10505[(0)] = state_machine__5711__auto__);
(statearr_10505[(1)] = (1));
return statearr_10505;
});
var state_machine__5711__auto____1 = (function (state_10499){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_10499);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e10506){if((e10506 instanceof Object))
{var ex__5714__auto__ = e10506;var statearr_10507_10510 = state_10499;(statearr_10507_10510[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10499);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10511 = state_10499;
state_10499 = G__10511;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_10499){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_10499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___10509,channel))
})();var state__5727__auto__ = (function (){var statearr_10508 = f__5726__auto__.call(null);(statearr_10508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___10509);
return statearr_10508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___10509,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__10514){var map__10515 = p__10514;var map__10515__$1 = ((cljs.core.seq_QMARK_.call(null,map__10515))?cljs.core.apply.call(null,cljs.core.hash_map,map__10515):map__10515);var req = map__10515__$1;var query_params = cljs.core.get.call(null,map__10515__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__10518){var map__10519 = p__10518;var map__10519__$1 = ((cljs.core.seq_QMARK_.call(null,map__10519))?cljs.core.apply.call(null,cljs.core.hash_map,map__10519):map__10519);var request = map__10519__$1;var request_method = cljs.core.get.call(null,map__10519__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__10519__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__3548__auto__ = form_params;if(cljs.core.truth_(and__3548__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__3548__auto__;
}
})()))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else
{return client.call(null,request);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__10520_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__10520_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__10524){var map__10525 = p__10524;var map__10525__$1 = ((cljs.core.seq_QMARK_.call(null,map__10525))?cljs.core.apply.call(null,cljs.core.hash_map,map__10525):map__10525);var req = map__10525__$1;var query_params = cljs.core.get.call(null,map__10525__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__10525,map__10525__$1,req,query_params){
return (function (p1__10521_SHARP_){return cljs.core.merge.call(null,p1__10521_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__10525,map__10525__$1,req,query_params))
));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__10526){var vec__10528 = p__10526;var credentials = cljs.core.nth.call(null,vec__10528,(0),null);return ((function (vec__10528,credentials){
return (function (req){var credentials__$1 = (function (){var or__3560__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__10528,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__10526 = null;if (arguments.length > 1) {
  p__10526 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__10526);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__10529){
var client = cljs.core.first(arglist__10529);
var p__10526 = cljs.core.rest(arglist__10529);
return wrap_basic_auth__delegate(client,p__10526);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token))));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__10530){var vec__10532 = p__10530;var req = cljs.core.nth.call(null,vec__10532,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__10530 = null;if (arguments.length > 1) {
  p__10530 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__10530);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__10533){
var url = cljs.core.first(arglist__10533);
var p__10530 = cljs.core.rest(arglist__10533);
return delete$__delegate(url,p__10530);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__10534){var vec__10536 = p__10534;var req = cljs.core.nth.call(null,vec__10536,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__10534 = null;if (arguments.length > 1) {
  p__10534 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__10534);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__10537){
var url = cljs.core.first(arglist__10537);
var p__10534 = cljs.core.rest(arglist__10537);
return get__delegate(url,p__10534);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__10538){var vec__10540 = p__10538;var req = cljs.core.nth.call(null,vec__10540,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__10538 = null;if (arguments.length > 1) {
  p__10538 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__10538);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__10541){
var url = cljs.core.first(arglist__10541);
var p__10538 = cljs.core.rest(arglist__10541);
return head__delegate(url,p__10538);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__10542){var vec__10544 = p__10542;var req = cljs.core.nth.call(null,vec__10544,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__10542 = null;if (arguments.length > 1) {
  p__10542 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__10542);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__10545){
var url = cljs.core.first(arglist__10545);
var p__10542 = cljs.core.rest(arglist__10545);
return move__delegate(url,p__10542);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__10546){var vec__10548 = p__10546;var req = cljs.core.nth.call(null,vec__10548,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__10546 = null;if (arguments.length > 1) {
  p__10546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__10546);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__10549){
var url = cljs.core.first(arglist__10549);
var p__10546 = cljs.core.rest(arglist__10549);
return options__delegate(url,p__10546);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__10550){var vec__10552 = p__10550;var req = cljs.core.nth.call(null,vec__10552,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__10550 = null;if (arguments.length > 1) {
  p__10550 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__10550);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__10553){
var url = cljs.core.first(arglist__10553);
var p__10550 = cljs.core.rest(arglist__10553);
return patch__delegate(url,p__10550);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__10554){var vec__10556 = p__10554;var req = cljs.core.nth.call(null,vec__10556,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__10554 = null;if (arguments.length > 1) {
  p__10554 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__10554);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__10557){
var url = cljs.core.first(arglist__10557);
var p__10554 = cljs.core.rest(arglist__10557);
return post__delegate(url,p__10554);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__10558){var vec__10560 = p__10558;var req = cljs.core.nth.call(null,vec__10560,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__10558 = null;if (arguments.length > 1) {
  p__10558 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__10558);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__10561){
var url = cljs.core.first(arglist__10561);
var p__10558 = cljs.core.rest(arglist__10561);
return put__delegate(url,p__10558);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map