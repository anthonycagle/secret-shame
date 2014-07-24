// Compiled by ClojureScript 0.0-2268
goog.provide('secret_shame.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
secret_shame.core.state = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
secret_shame.core.new_state = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
secret_shame.core.fetch_widgets = (function fetch_widgets(url){cljs.core.println.call(null,"fetch-widgets");
var c = cljs.core.async.chan.call(null);var c__5725__auto___9019 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___9019,c){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___9019,c){
return (function (state_9005){var state_val_9006 = (state_9005[(1)]);if((state_val_9006 === (6)))
{var inst_9003 = (state_9005[(2)]);var state_9005__$1 = state_9005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9005__$1,inst_9003);
} else
{if((state_val_9006 === (5)))
{var inst_8999 = (state_9005[(2)]);var inst_9000 = cljs.core.get.call(null,inst_8999,new cljs.core.Keyword(null,"body","body",-2049205669));var inst_9001 = cljs.core.vec.call(null,inst_9000);var state_9005__$1 = state_9005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9005__$1,(6),c,inst_9001);
} else
{if((state_val_9006 === (4)))
{var inst_8993 = (state_9005[(7)]);var state_9005__$1 = state_9005;var statearr_9007_9020 = state_9005__$1;(statearr_9007_9020[(2)] = inst_8993);
(statearr_9007_9020[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9006 === (3)))
{var inst_8993 = (state_9005[(7)]);var inst_8996 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8993);var state_9005__$1 = state_9005;var statearr_9008_9021 = state_9005__$1;(statearr_9008_9021[(2)] = inst_8996);
(statearr_9008_9021[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9006 === (2)))
{var inst_8993 = (state_9005[(7)]);var inst_8993__$1 = (state_9005[(2)]);var inst_8994 = cljs.core.seq_QMARK_.call(null,inst_8993__$1);var state_9005__$1 = (function (){var statearr_9009 = state_9005;(statearr_9009[(7)] = inst_8993__$1);
return statearr_9009;
})();if(inst_8994)
{var statearr_9010_9022 = state_9005__$1;(statearr_9010_9022[(1)] = (3));
} else
{var statearr_9011_9023 = state_9005__$1;(statearr_9011_9023[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9006 === (1)))
{var inst_8991 = cljs_http.client.get.call(null,url);var state_9005__$1 = state_9005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9005__$1,(2),inst_8991);
} else
{return null;
}
}
}
}
}
}
});})(c__5725__auto___9019,c))
;return ((function (switch__5710__auto__,c__5725__auto___9019,c){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_9015 = [null,null,null,null,null,null,null,null];(statearr_9015[(0)] = state_machine__5711__auto__);
(statearr_9015[(1)] = (1));
return statearr_9015;
});
var state_machine__5711__auto____1 = (function (state_9005){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_9005);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e9016){if((e9016 instanceof Object))
{var ex__5714__auto__ = e9016;var statearr_9017_9024 = state_9005;(statearr_9017_9024[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9005);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9016;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9025 = state_9005;
state_9005 = G__9025;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_9005){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_9005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___9019,c))
})();var state__5727__auto__ = (function (){var statearr_9018 = f__5726__auto__.call(null);(statearr_9018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___9019);
return statearr_9018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___9019,c))
);
return c;
});
/**
* a widget
*/
secret_shame.core.widget = (function widget(p__9026){var map__9028 = p__9026;var map__9028__$1 = ((cljs.core.seq_QMARK_.call(null,map__9028))?cljs.core.apply.call(null,cljs.core.hash_map,map__9028):map__9028);var x = map__9028__$1;var name = cljs.core.get.call(null,map__9028__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.println.call(null,"widget ",x);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),widget,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"widget"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),name], null)], null)], null);
});
/**
* display list of widgets
*/
secret_shame.core.widget_list = (function widget_list(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-list","div.widget-list",1728316965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"widget-list"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),(function (){var iter__4285__auto__ = (function iter__9033(s__9034){return (new cljs.core.LazySeq(null,(function (){var s__9034__$1 = s__9034;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9034__$1);if(temp__4126__auto__)
{var s__9034__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9034__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__9034__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__9036 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__9035 = (0);while(true){
if((i__9035 < size__4284__auto__))
{var item = cljs.core._nth.call(null,c__4283__auto__,i__9035);cljs.core.chunk_append.call(null,b__9036,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_shame.core.widget,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("widget"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(100))))], null)));
{
var G__9037 = (i__9035 + (1));
i__9035 = G__9037;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9036),iter__9033.call(null,cljs.core.chunk_rest.call(null,s__9034__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9036),null);
}
} else
{var item = cljs.core.first.call(null,s__9034__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_shame.core.widget,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("widget"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(100))))], null)),iter__9033.call(null,cljs.core.rest.call(null,s__9034__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,cljs.core.deref.call(null,secret_shame.core.state));
})()], null)], null);
});
secret_shame.core.widget_box = (function widget_box(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-box","div.widget-box",-1695663486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"widget-box"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_shame.core.widget_list], null)], null);
});
secret_shame.core.main_page = (function main_page(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-xs-12.col-md-12","div.col.col-xs-12.col-md-12",145203282),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"main-page"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_shame.core.widget_box], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_shame.core.main_page], null),goog.dom.getElement("content"));
var url_9085 = "/widgets";var poll_interval_9086 = (5000);var c__5725__auto___9087 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___9087,url_9085,poll_interval_9086){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___9087,url_9085,poll_interval_9086){
return (function (state_9062){var state_val_9063 = (state_9062[(1)]);if((state_val_9063 === (7)))
{var inst_9042 = (state_9062[(7)]);var inst_9042__$1 = (state_9062[(2)]);var inst_9043 = cljs.core.deref.call(null,secret_shame.core.state);var inst_9044 = cljs.core._EQ_.call(null,inst_9043,inst_9042__$1);var state_9062__$1 = (function (){var statearr_9064 = state_9062;(statearr_9064[(7)] = inst_9042__$1);
return statearr_9064;
})();if(inst_9044)
{var statearr_9065_9088 = state_9062__$1;(statearr_9065_9088[(1)] = (8));
} else
{var statearr_9066_9089 = state_9062__$1;(statearr_9066_9089[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9063 === (1)))
{var state_9062__$1 = state_9062;var statearr_9067_9090 = state_9062__$1;(statearr_9067_9090[(2)] = null);
(statearr_9067_9090[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9063 === (4)))
{var inst_9040 = secret_shame.core.fetch_widgets.call(null,url_9085);var state_9062__$1 = state_9062;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9062__$1,(7),inst_9040);
} else
{if((state_val_9063 === (6)))
{var inst_9058 = (state_9062[(2)]);var state_9062__$1 = state_9062;var statearr_9068_9091 = state_9062__$1;(statearr_9068_9091[(2)] = inst_9058);
(statearr_9068_9091[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9063 === (3)))
{var inst_9060 = (state_9062[(2)]);var state_9062__$1 = state_9062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9062__$1,inst_9060);
} else
{if((state_val_9063 === (2)))
{var state_9062__$1 = state_9062;if(true)
{var statearr_9069_9092 = state_9062__$1;(statearr_9069_9092[(1)] = (4));
} else
{var statearr_9070_9093 = state_9062__$1;(statearr_9070_9093[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9063 === (11)))
{var inst_9054 = (state_9062[(2)]);var state_9062__$1 = (function (){var statearr_9071 = state_9062;(statearr_9071[(8)] = inst_9054);
return statearr_9071;
})();var statearr_9072_9094 = state_9062__$1;(statearr_9072_9094[(2)] = null);
(statearr_9072_9094[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9063 === (9)))
{var inst_9042 = (state_9062[(7)]);var inst_9047 = cljs.core.reset_BANG_.call(null,secret_shame.core.state,inst_9042);var inst_9048 = cljs.core.pr_str.call(null,secret_shame.core.state);var inst_9049 = cljs.core.println.call(null,"state ",inst_9048);var state_9062__$1 = (function (){var statearr_9073 = state_9062;(statearr_9073[(9)] = inst_9047);
return statearr_9073;
})();var statearr_9074_9095 = state_9062__$1;(statearr_9074_9095[(2)] = inst_9049);
(statearr_9074_9095[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9063 === (5)))
{var state_9062__$1 = state_9062;var statearr_9075_9096 = state_9062__$1;(statearr_9075_9096[(2)] = null);
(statearr_9075_9096[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9063 === (10)))
{var inst_9051 = (state_9062[(2)]);var inst_9052 = cljs.core.async.timeout.call(null,poll_interval_9086);var state_9062__$1 = (function (){var statearr_9076 = state_9062;(statearr_9076[(10)] = inst_9051);
return statearr_9076;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9062__$1,(11),inst_9052);
} else
{if((state_val_9063 === (8)))
{var state_9062__$1 = state_9062;var statearr_9077_9097 = state_9062__$1;(statearr_9077_9097[(2)] = null);
(statearr_9077_9097[(1)] = (10));
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
});})(c__5725__auto___9087,url_9085,poll_interval_9086))
;return ((function (switch__5710__auto__,c__5725__auto___9087,url_9085,poll_interval_9086){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_9081 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9081[(0)] = state_machine__5711__auto__);
(statearr_9081[(1)] = (1));
return statearr_9081;
});
var state_machine__5711__auto____1 = (function (state_9062){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_9062);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e9082){if((e9082 instanceof Object))
{var ex__5714__auto__ = e9082;var statearr_9083_9098 = state_9062;(statearr_9083_9098[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9062);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9099 = state_9062;
state_9062 = G__9099;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_9062){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_9062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___9087,url_9085,poll_interval_9086))
})();var state__5727__auto__ = (function (){var statearr_9084 = f__5726__auto__.call(null);(statearr_9084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___9087);
return statearr_9084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___9087,url_9085,poll_interval_9086))
);

//# sourceMappingURL=core.js.map