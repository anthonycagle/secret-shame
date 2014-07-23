// Compiled by ClojureScript 0.0-2268
goog.provide('aa_atw_om.core');
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
aa_atw_om.core.state = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
aa_atw_om.core.fetch_widgets = (function fetch_widgets(url){cljs.core.println.call(null,"fetch-widgets");
var c = cljs.core.async.chan.call(null);var c__5725__auto___10949 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___10949,c){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___10949,c){
return (function (state_10935){var state_val_10936 = (state_10935[(1)]);if((state_val_10936 === (6)))
{var inst_10933 = (state_10935[(2)]);var state_10935__$1 = state_10935;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10935__$1,inst_10933);
} else
{if((state_val_10936 === (5)))
{var inst_10929 = (state_10935[(2)]);var inst_10930 = cljs.core.get.call(null,inst_10929,new cljs.core.Keyword(null,"body","body",-2049205669));var inst_10931 = cljs.core.vec.call(null,inst_10930);var state_10935__$1 = state_10935;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10935__$1,(6),c,inst_10931);
} else
{if((state_val_10936 === (4)))
{var inst_10923 = (state_10935[(7)]);var state_10935__$1 = state_10935;var statearr_10937_10950 = state_10935__$1;(statearr_10937_10950[(2)] = inst_10923);
(statearr_10937_10950[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10936 === (3)))
{var inst_10923 = (state_10935[(7)]);var inst_10926 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10923);var state_10935__$1 = state_10935;var statearr_10938_10951 = state_10935__$1;(statearr_10938_10951[(2)] = inst_10926);
(statearr_10938_10951[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10936 === (2)))
{var inst_10923 = (state_10935[(7)]);var inst_10923__$1 = (state_10935[(2)]);var inst_10924 = cljs.core.seq_QMARK_.call(null,inst_10923__$1);var state_10935__$1 = (function (){var statearr_10939 = state_10935;(statearr_10939[(7)] = inst_10923__$1);
return statearr_10939;
})();if(inst_10924)
{var statearr_10940_10952 = state_10935__$1;(statearr_10940_10952[(1)] = (3));
} else
{var statearr_10941_10953 = state_10935__$1;(statearr_10941_10953[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10936 === (1)))
{var inst_10921 = cljs_http.client.get.call(null,url);var state_10935__$1 = state_10935;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10935__$1,(2),inst_10921);
} else
{return null;
}
}
}
}
}
}
});})(c__5725__auto___10949,c))
;return ((function (switch__5710__auto__,c__5725__auto___10949,c){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_10945 = [null,null,null,null,null,null,null,null];(statearr_10945[(0)] = state_machine__5711__auto__);
(statearr_10945[(1)] = (1));
return statearr_10945;
});
var state_machine__5711__auto____1 = (function (state_10935){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_10935);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e10946){if((e10946 instanceof Object))
{var ex__5714__auto__ = e10946;var statearr_10947_10954 = state_10935;(statearr_10947_10954[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10935);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10946;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10955 = state_10935;
state_10935 = G__10955;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_10935){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_10935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___10949,c))
})();var state__5727__auto__ = (function (){var statearr_10948 = f__5726__auto__.call(null);(statearr_10948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___10949);
return statearr_10948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___10949,c))
);
return c;
});
/**
* a widget
*/
aa_atw_om.core.widget = (function widget(p__10956){var map__10958 = p__10956;var map__10958__$1 = ((cljs.core.seq_QMARK_.call(null,map__10958))?cljs.core.apply.call(null,cljs.core.hash_map,map__10958):map__10958);var x = map__10958__$1;var name = cljs.core.get.call(null,map__10958__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.println.call(null,"widget ",x);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"widget"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),name], null)], null)], null);
});
/**
* display list of widgets
*/
aa_atw_om.core.widget_list = (function widget_list(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"widget-list"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),(function (){var iter__4285__auto__ = (function iter__10963(s__10964){return (new cljs.core.LazySeq(null,(function (){var s__10964__$1 = s__10964;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10964__$1);if(temp__4126__auto__)
{var s__10964__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10964__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10964__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10966 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10965 = (0);while(true){
if((i__10965 < size__4284__auto__))
{var item = cljs.core._nth.call(null,c__4283__auto__,i__10965);cljs.core.chunk_append.call(null,b__10966,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aa_atw_om.core.widget,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("widget"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(100))))], null)));
{
var G__10967 = (i__10965 + (1));
i__10965 = G__10967;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10966),iter__10963.call(null,cljs.core.chunk_rest.call(null,s__10964__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10966),null);
}
} else
{var item = cljs.core.first.call(null,s__10964__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aa_atw_om.core.widget,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("widget"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(100))))], null)),iter__10963.call(null,cljs.core.rest.call(null,s__10964__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,cljs.core.deref.call(null,aa_atw_om.core.state));
})()], null)], null);
});
aa_atw_om.core.widget_box = (function widget_box(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"widget-box"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aa_atw_om.core.widget_list], null)], null);
});
aa_atw_om.core.main_page = (function main_page(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-xs-12.col-md-12","div.col.col-xs-12.col-md-12",145203282),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"main-page"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aa_atw_om.core.widget_box], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aa_atw_om.core.main_page], null),goog.dom.getElement("content"));
var url_11015 = "/widgets";var poll_interval_11016 = (5000);var c__5725__auto___11017 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5725__auto___11017,url_11015,poll_interval_11016){
return (function (){var f__5726__auto__ = (function (){var switch__5710__auto__ = ((function (c__5725__auto___11017,url_11015,poll_interval_11016){
return (function (state_10992){var state_val_10993 = (state_10992[(1)]);if((state_val_10993 === (7)))
{var inst_10972 = (state_10992[(7)]);var inst_10972__$1 = (state_10992[(2)]);var inst_10973 = cljs.core.deref.call(null,aa_atw_om.core.state);var inst_10974 = cljs.core._EQ_.call(null,inst_10973,inst_10972__$1);var state_10992__$1 = (function (){var statearr_10994 = state_10992;(statearr_10994[(7)] = inst_10972__$1);
return statearr_10994;
})();if(inst_10974)
{var statearr_10995_11018 = state_10992__$1;(statearr_10995_11018[(1)] = (8));
} else
{var statearr_10996_11019 = state_10992__$1;(statearr_10996_11019[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10993 === (1)))
{var state_10992__$1 = state_10992;var statearr_10997_11020 = state_10992__$1;(statearr_10997_11020[(2)] = null);
(statearr_10997_11020[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10993 === (4)))
{var inst_10970 = aa_atw_om.core.fetch_widgets.call(null,url_11015);var state_10992__$1 = state_10992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10992__$1,(7),inst_10970);
} else
{if((state_val_10993 === (6)))
{var inst_10988 = (state_10992[(2)]);var state_10992__$1 = state_10992;var statearr_10998_11021 = state_10992__$1;(statearr_10998_11021[(2)] = inst_10988);
(statearr_10998_11021[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10993 === (3)))
{var inst_10990 = (state_10992[(2)]);var state_10992__$1 = state_10992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10992__$1,inst_10990);
} else
{if((state_val_10993 === (2)))
{var state_10992__$1 = state_10992;if(true)
{var statearr_10999_11022 = state_10992__$1;(statearr_10999_11022[(1)] = (4));
} else
{var statearr_11000_11023 = state_10992__$1;(statearr_11000_11023[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10993 === (11)))
{var inst_10984 = (state_10992[(2)]);var state_10992__$1 = (function (){var statearr_11001 = state_10992;(statearr_11001[(8)] = inst_10984);
return statearr_11001;
})();var statearr_11002_11024 = state_10992__$1;(statearr_11002_11024[(2)] = null);
(statearr_11002_11024[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10993 === (9)))
{var inst_10972 = (state_10992[(7)]);var inst_10977 = cljs.core.reset_BANG_.call(null,aa_atw_om.core.state,inst_10972);var inst_10978 = cljs.core.pr_str.call(null,aa_atw_om.core.state);var inst_10979 = cljs.core.println.call(null,"state ",inst_10978);var state_10992__$1 = (function (){var statearr_11003 = state_10992;(statearr_11003[(9)] = inst_10977);
return statearr_11003;
})();var statearr_11004_11025 = state_10992__$1;(statearr_11004_11025[(2)] = inst_10979);
(statearr_11004_11025[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10993 === (5)))
{var state_10992__$1 = state_10992;var statearr_11005_11026 = state_10992__$1;(statearr_11005_11026[(2)] = null);
(statearr_11005_11026[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10993 === (10)))
{var inst_10981 = (state_10992[(2)]);var inst_10982 = cljs.core.async.timeout.call(null,poll_interval_11016);var state_10992__$1 = (function (){var statearr_11006 = state_10992;(statearr_11006[(10)] = inst_10981);
return statearr_11006;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10992__$1,(11),inst_10982);
} else
{if((state_val_10993 === (8)))
{var state_10992__$1 = state_10992;var statearr_11007_11027 = state_10992__$1;(statearr_11007_11027[(2)] = null);
(statearr_11007_11027[(1)] = (10));
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
});})(c__5725__auto___11017,url_11015,poll_interval_11016))
;return ((function (switch__5710__auto__,c__5725__auto___11017,url_11015,poll_interval_11016){
return (function() {
var state_machine__5711__auto__ = null;
var state_machine__5711__auto____0 = (function (){var statearr_11011 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11011[(0)] = state_machine__5711__auto__);
(statearr_11011[(1)] = (1));
return statearr_11011;
});
var state_machine__5711__auto____1 = (function (state_10992){while(true){
var ret_value__5712__auto__ = (function (){try{while(true){
var result__5713__auto__ = switch__5710__auto__.call(null,state_10992);if(cljs.core.keyword_identical_QMARK_.call(null,result__5713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5713__auto__;
}
break;
}
}catch (e11012){if((e11012 instanceof Object))
{var ex__5714__auto__ = e11012;var statearr_11013_11028 = state_10992;(statearr_11013_11028[(5)] = ex__5714__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10992);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11029 = state_10992;
state_10992 = G__11029;
continue;
}
} else
{return ret_value__5712__auto__;
}
break;
}
});
state_machine__5711__auto__ = function(state_10992){
switch(arguments.length){
case 0:
return state_machine__5711__auto____0.call(this);
case 1:
return state_machine__5711__auto____1.call(this,state_10992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5711__auto____0;
state_machine__5711__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5711__auto____1;
return state_machine__5711__auto__;
})()
;})(switch__5710__auto__,c__5725__auto___11017,url_11015,poll_interval_11016))
})();var state__5727__auto__ = (function (){var statearr_11014 = f__5726__auto__.call(null);(statearr_11014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5725__auto___11017);
return statearr_11014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5727__auto__);
});})(c__5725__auto___11017,url_11015,poll_interval_11016))
);

//# sourceMappingURL=core.js.map