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
secret_shame.core.fetch_widgets = (function fetch_widgets(url){cljs.core.println.call(null,"fetch-widgets");
var c = cljs.core.async.chan.call(null);var c__5725__auto___11095 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___11095,c){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___11095,c){
return (function (state_11081){var state_val_11082 = (state_11081[(1)]);if((state_val_11082 === (6)))
{var inst_11079 = (state_11081[(2)]);var state_11081__$1 = state_11081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11081__$1,inst_11079);
} else
{if((state_val_11082 === (5)))
{var inst_11075 = (state_11081[(2)]);var inst_11076 = cljs.core.get.call(null,inst_11075,new cljs.core.Keyword(null,"body","body",-2049205669));var inst_11077 = cljs.core.vec.call(null,inst_11076);var state_11081__$1 = state_11081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11081__$1,(6),c,inst_11077);
} else
{if((state_val_11082 === (4)))
{var inst_11069 = (state_11081[(7)]);var state_11081__$1 = state_11081;var statearr_11083_11096 = state_11081__$1;(statearr_11083_11096[(2)] = inst_11069);
(statearr_11083_11096[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11082 === (3)))
{var inst_11069 = (state_11081[(7)]);var inst_11072 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11069);var state_11081__$1 = state_11081;var statearr_11084_11097 = state_11081__$1;(statearr_11084_11097[(2)] = inst_11072);
(statearr_11084_11097[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11082 === (2)))
{var inst_11069 = (state_11081[(7)]);var inst_11069__$1 = (state_11081[(2)]);var inst_11070 = cljs.core.seq_QMARK_.call(null,inst_11069__$1);var state_11081__$1 = (function (){var statearr_11085 = state_11081;(statearr_11085[(7)] = inst_11069__$1);
return statearr_11085;
})();if(inst_11070)
{var statearr_11086_11098 = state_11081__$1;(statearr_11086_11098[(1)] = (3));
} else
{var statearr_11087_11099 = state_11081__$1;(statearr_11087_11099[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11082 === (1)))
{var inst_11067 = cljs_http.client.get.call(null,url);var state_11081__$1 = state_11081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11081__$1,(2),inst_11067);
} else
{return null;
}
}
}
}
}
}
});})(c__5725__auto___11095,c))
;return ((function (switch__5710__auto__,c__5725__auto___11095,c){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_11091 = [null,null,null,null,null,null,null,null];(statearr_11091[(0)] = state_machine__5711__auto__);
(statearr_11091[(1)] = (1));
return statearr_11091;
});
var state_machine__5711__auto____1 = (function (state_11081){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11081);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11092){if((e11092 instanceof Object))
{var ex__5714__auto__ = e11092;var statearr_11093_11100 = state_11081;(statearr_11093_11100[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11081);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11101 = state_11081;
state_11081 = G__11101;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11081){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___11095,c))
})();var state__5727__auto__ = (function (){var statearr_11094 = f__5726__auto__.call(null);(statearr_11094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___11095);
return statearr_11094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___11095,c))
);
return c;
});
/**
* a widget
*/
secret_shame.core.widget = (function widget(p__11102){var map__11104 = p__11102;var map__11104__$1 = ((cljs.core.seq_QMARK_.call(null,map__11104))?cljs.core.apply.call(null,cljs.core.hash_map,map__11104):map__11104);var x = map__11104__$1;var name = cljs.core.get.call(null,map__11104__$1,new cljs.core.Keyword(null,"name","name",1843675177));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.widget.list-group-item","a.widget.list-group-item",1667529964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4..list-group-item-heading","h4..list-group-item-heading",-1375813272),"widget card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.list-group-item-text","label.list-group-item-text",169656155),name], null)], null);
});
/**
* display list of widgets
*/
secret_shame.core.widget_list = (function widget_list(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-list","div.widget-list",1728316965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"widget-list"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),(function (){var iter__4285__auto__ = (function iter__11109(s__11110){return (new cljs.core.LazySeq(null,(function (){var s__11110__$1 = s__11110;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11110__$1);if(temp__4126__auto__)
{var s__11110__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11110__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__11110__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__11112 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__11111 = (0);while(true){
if((i__11111 < size__4284__auto__))
{var item = cljs.core._nth.call(null,c__4283__auto__,i__11111);cljs.core.chunk_append.call(null,b__11112,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_shame.core.widget,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("widget"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(100))))], null)));
{
var G__11113 = (i__11111 + (1));
i__11111 = G__11113;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11112),iter__11109.call(null,cljs.core.chunk_rest.call(null,s__11110__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11112),null);
}
} else
{var item = cljs.core.first.call(null,s__11110__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_shame.core.widget,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("widget"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(100))))], null)),iter__11109.call(null,cljs.core.rest.call(null,s__11110__$2)));
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
secret_shame.core.widget_box = (function widget_box(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-box.panel.panel-default","div.widget-box.panel.panel-default",-171490358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"widget-box"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_shame.core.widget_list], null)], null);
});
secret_shame.core.main_page = (function main_page(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-xs-12.col-md-12.bootcards-list","div.col.col-xs-12.col-md-12.bootcards-list",1926723537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"main-page"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_shame.core.widget_box], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_shame.core.main_page], null),goog.dom.getElement("content"));
var url_11161 = "/widgets";var poll_interval_11162 = (5000);var c__5725__auto___11163 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___11163,url_11161,poll_interval_11162){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___11163,url_11161,poll_interval_11162){
return (function (state_11138){var state_val_11139 = (state_11138[(1)]);if((state_val_11139 === (7)))
{var inst_11118 = (state_11138[(7)]);var inst_11118__$1 = (state_11138[(2)]);var inst_11119 = cljs.core.deref.call(null,secret_shame.core.state);var inst_11120 = cljs.core._EQ_.call(null,inst_11119,inst_11118__$1);var state_11138__$1 = (function (){var statearr_11140 = state_11138;(statearr_11140[(7)] = inst_11118__$1);
return statearr_11140;
})();if(inst_11120)
{var statearr_11141_11164 = state_11138__$1;(statearr_11141_11164[(1)] = (8));
} else
{var statearr_11142_11165 = state_11138__$1;(statearr_11142_11165[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11139 === (1)))
{var state_11138__$1 = state_11138;var statearr_11143_11166 = state_11138__$1;(statearr_11143_11166[(2)] = null);
(statearr_11143_11166[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11139 === (4)))
{var inst_11116 = secret_shame.core.fetch_widgets.call(null,url_11161);var state_11138__$1 = state_11138;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11138__$1,(7),inst_11116);
} else
{if((state_val_11139 === (6)))
{var inst_11134 = (state_11138[(2)]);var state_11138__$1 = state_11138;var statearr_11144_11167 = state_11138__$1;(statearr_11144_11167[(2)] = inst_11134);
(statearr_11144_11167[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11139 === (3)))
{var inst_11136 = (state_11138[(2)]);var state_11138__$1 = state_11138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11138__$1,inst_11136);
} else
{if((state_val_11139 === (2)))
{var state_11138__$1 = state_11138;if(true)
{var statearr_11145_11168 = state_11138__$1;(statearr_11145_11168[(1)] = (4));
} else
{var statearr_11146_11169 = state_11138__$1;(statearr_11146_11169[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11139 === (11)))
{var inst_11130 = (state_11138[(2)]);var state_11138__$1 = (function (){var statearr_11147 = state_11138;(statearr_11147[(8)] = inst_11130);
return statearr_11147;
})();var statearr_11148_11170 = state_11138__$1;(statearr_11148_11170[(2)] = null);
(statearr_11148_11170[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11139 === (9)))
{var inst_11118 = (state_11138[(7)]);var inst_11123 = cljs.core.reset_BANG_.call(null,secret_shame.core.state,inst_11118);var inst_11124 = cljs.core.pr_str.call(null,secret_shame.core.state);var inst_11125 = cljs.core.println.call(null,"state ",inst_11124);var state_11138__$1 = (function (){var statearr_11149 = state_11138;(statearr_11149[(9)] = inst_11123);
return statearr_11149;
})();var statearr_11150_11171 = state_11138__$1;(statearr_11150_11171[(2)] = inst_11125);
(statearr_11150_11171[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11139 === (5)))
{var state_11138__$1 = state_11138;var statearr_11151_11172 = state_11138__$1;(statearr_11151_11172[(2)] = null);
(statearr_11151_11172[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11139 === (10)))
{var inst_11127 = (state_11138[(2)]);var inst_11128 = cljs.core.async.timeout.call(null,poll_interval_11162);var state_11138__$1 = (function (){var statearr_11152 = state_11138;(statearr_11152[(10)] = inst_11127);
return statearr_11152;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11138__$1,(11),inst_11128);
} else
{if((state_val_11139 === (8)))
{var state_11138__$1 = state_11138;var statearr_11153_11173 = state_11138__$1;(statearr_11153_11173[(2)] = null);
(statearr_11153_11173[(1)] = (10));
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
});})(c__5725__auto___11163,url_11161,poll_interval_11162))
;return ((function (switch__5710__auto__,c__5725__auto___11163,url_11161,poll_interval_11162){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_11157 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11157[(0)] = state_machine__5711__auto__);
(statearr_11157[(1)] = (1));
return statearr_11157;
});
var state_machine__5711__auto____1 = (function (state_11138){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_11138);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11158){if((e11158 instanceof Object))
{var ex__5714__auto__ = e11158;var statearr_11159_11174 = state_11138;(statearr_11159_11174[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11138);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11175 = state_11138;
state_11138 = G__11175;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_11138){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_11138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___11163,url_11161,poll_interval_11162))
})();var state__5727__auto__ = (function (){var statearr_11160 = f__5726__auto__.call(null);(statearr_11160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___11163);
return statearr_11160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___11163,url_11161,poll_interval_11162))
);

//# sourceMappingURL=core.js.map