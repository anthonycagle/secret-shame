(ns secret-shame.core
  (:import [goog.net XhrIo]
           goog.History 
           goog.history.EventType
           goog.net.EventType
           [goog.events EventType]
           )
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [goog.dom :as gdom]
            
            [clojure.string :refer [join split] :as str]
            [cljs.reader :as reader :refer [read-string]]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [reagent.core :refer [atom] :as reagent]
            [secretary.core :as secretary
             :include-macros true :refer [defroute]]
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

(defn widget-view "widget pane"
  [id]
  
  [:div.col.col-xs-12.col-md-12.bootcards-cards
   [:div.panel.panel-default
    [:div.panel-heading.clearfix
     [:h3.panel-title.pull-left "Widget Card Title: The Quantum Thief"]
     [:a.btn.btn-primary.pull-right {:href "#"}
      [:i.fa.fa-pencil] "Edit"]]
    [:div.list-group
     [:div.list-group.item
      [:p.list-group-item-text "Name"]
      [:h4.list-group-item-heading "Jean Leflambeur"]]
     [:div.list-group.item
      [:p.list-group-item-text "Occupation"]
      [:h4.list-group-item-heading "Thief"]]
     [:div.list-group.item
      [:p.list-group-item-text
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
      mauris tellus, vehicula ut tellus id, suscipit dapibus tortor.
      Integer viverra turpis ac fringilla hendrerit. Sed faucibus
      posuere felis et pe."]]]
    [:div.panel-footer
     [:small "Take a card, any card"]]]])

(defn widget-item "a widget"
  [{:keys [name] :as x}]
  ;; (println "widget " x)
  ;; :li.widget
  [:a.widget.list-group-item {:href (str "#/" (last (split name #" ")))}
   [:h4..list-group-item-heading "widget card"] 
   [:label.list-group-item-text name]
   ;; [:span.glyphicon.glyphicon-chevron-right.pull-right]
   ])

(defn widget-list "display list of widgets"
  []   
  [:div.widget-list
     [:h3 "widget-list"]
     [:ul.list-group
         (for [item  @state]
           ^{:key (str "widget" (rand-int 100))} [widget-item item])]])

(defn widget-box []
  [:div.widget-box.panel.panel-default
     [:h2 "widget-box"]
     [widget-list]])

(defn main-page []
  [:div.col.col-xs-12.col-md-12.bootcards-list {:id "main-page"}
   [:h1 "main-page"]
   [widget-box]])

(defroute widget-route "/:id" [id]
  (.log js/console  "widget-route" id) 
  (let [widget-id (read-string id)] 
    (reagent/render-component [widget-view widget-id] (gdom/getElement "content"))))

(let [h (History.)]
  (goog.events/listen h goog.history.EventType.NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h
    (.setEnabled true)))

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
