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
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [cljs-http.client :as http]))

(enable-console-print!)

(def state (atom []))
(def editing?  (atom false))

(defn fetch-widgets
  [url]
  (println "fetch-widgets")
  (let [c (chan)]
    (go (let [{widgets :body} (<! (http/get url))] 
          (>! c (vec widgets))))
    
    c))

(defn editing-button
  [id]

  [:a.btn.btn-primary.pull-right
   (if-not @editing? {:href (str "#/edit/" id)} {:href (str "#/" id)})
   (if-not @editing?  [:i.fa.fa-pencil] [:i.fa.fa-stop])
   (if-not @editing? "Edit" "Dismiss")])

(defn widget-view "widget pane"
  [id]
  
  [:div.col.col-xs-12.col-md-12.bootcards-cards.widget.widget-list
   [:div.panel.panel-default.widget.widget-card
    [:div.panel-heading.clearfix.widget.widget-card
     [:h3.panel-title.pull-left
      (if-not @editing?
        "Widget Card Title: The Quantum Thief"
        "@Editing?g: The Quantum Thief")]
     
     [editing-button id]]
    
    [:div.list-group
     [:div.list-group.item.widget.widget-card
      [:p.list-group-item-text "Name"]
      (if-not @editing?
        [:h4.list-group-item-heading "Jean Leflambeur"]
        [:input.list-group-item-heading.editing
         {:onChange (fn [e] (.log js/console "name changed"))
          :value "Jean Leflambeur"}])]
     
     [:div.list-group.item.widget.widget-card
      [:p.list-group-item-text "Occupation"]
      (if-not @editing?
        [:h4.list-group-item-heading "Reformed Thief"]
        [:input.list-group-item-heading.editing
         {:onChange (fn [e] (.log js/console "occupation changed"))
          :value "Unreformed Thief"}])]
     
     [:div.list-group.item.widget.widget-card
      
      (if-not @editing?

        [:p.list-group-item-text "Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nullam mauris tellus,
        vehicula ut tellus id, suscipit dapibus tortor. Integer
        viverra turpis ac fringilla hendrerit. Sed faucibus posuere
        felis et pe."]

        [:textarea.list-group-item-text.editing
         {:onChange (fn [e] (.log js/console "textarea changed"))
          :value "Lorem ipsum dolor sit amet,consectetur adipiscing
          elit. Nullam mauris tellus,vehicula ut tellus id, suscipit
          dapibus tortor. Integer viverra turpis ac fringilla
          hendrerit. Sed faucibus posuere felis et pe."}])]]
    
    [:div.panel-footer.widget.widget-card
     [:small "Take a card, any card"]]]])

(defn widget-item "a widget"
  [{:keys [name] :as x}]
  ;; (println "widget " x)
  ;; :li.widget
  [:a.list-group-item.widget.widget-list-item
   {:href (str "#/" (last (split name #" ")))}
   [:h4..list-group-item-heading "widget card"] 
   [:label.list-group-item-text name]])

(defn widget-list "display list of widgets"
  []   
  [:div.widget.widget-list
     [:h3 "widget-list"]
     [:ul.list-group
         (for [item  @state]
           ^{:key (str "widget" (rand-int 100))} [widget-item item])]])

(defn widget-box []
  [:div.panel.panel-default.widget.widget-box
     [:h2 "widget-box"]
     [widget-list]])

(defn main-page []
  [:div.col.col-xs-12.col-md-12.bootcards-list.widget.widget-page
   {:id "main-page"}
   [:h1 "widgets-page"]
   [widget-box]])

(defroute widget-route "/:id" [id]
  (.log js/console  "widget-route" id) 
  (reset! editing? false)
  (let [widget-id (read-string id)] 
       (reagent/render-component [widget-view widget-id] (gdom/getElement "content"))))

(defroute widget-edit-route "/edit/:id" [id]
  (.log js/console  "widget-edit-route" id) 
  (reset! editing? true)
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
