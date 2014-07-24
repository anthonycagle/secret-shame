(ns secret-shame.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [goog.dom :as gdom]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [reagent.core :refer [atom] :as reagent]
            ;; [om.core :as om :include-macros true]                  
            ;; [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]))

(enable-console-print!)

(def state (atom []))

(defn fetch-widgets
  [url]
  (println "fetch-widgets")
  (let [c (chan)]
    (go (let [{widgets :body} (<! (http/get url))] 
          (>! c (vec widgets))))
    
    c))

(defn widget "a widget"
  [{:keys [name] :as x}]
  ;; (println "widget " x)
  [:li
   [:div.widget
    [:h4 "widget"]
    [:label name]]])

(defn widget-list "display list of widgets"
  []   
  [:div.widget-list
     [:h3 "widget-list"]
     [:ul.list-group
         (for [item  @state]
           ^{:key (str "widget" (rand-int 100))} [widget item])]])

(defn widget-box []
  [:div.widget-box
     [:h2 "widget-box"]
     [widget-list]])

(defn main-page []
  [:div.col.col-xs-12.col-md-12 {:id "main-page"}
   [:h1 "main-page"]
   [widget-box]])

(reagent/render-component [main-page] (gdom/getElement "content"))

(let [url "/widgets"
        poll-interval 5000]

    (go (while true
          (let [widgets (<! (fetch-widgets url))] 
            (when-not (= @state widgets)
                    (reset! state widgets)
                    (println "state " (pr-str state)))
            
            state) 
          (<! (timeout poll-interval)))))
