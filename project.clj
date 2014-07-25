(defproject secret-shame "0.1.0"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :javac-options     ["-target" "1.7" "-source" "1.7"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/tools.reader "0.8.5"]
                 [org.clojure/clojurescript "0.0-2268"] 
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [ring "1.3.0"]
                 [ring/ring-core "1.3.0"]
                 [ring/ring-json "0.3.1"]
                 [ring/ring-jetty-adapter "1.3.0"]
                 [compojure "1.1.8"]
                 [reagent "0.4.2"] ;; [om "0.6.5"]
                 [cljs-http "0.1.15" :exclusions [commons-codec]]
                 [environ "0.5.0"]
                 [hiccup "1.0.5"]
                 [secretary "1.2.0"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.11"]
            [lein-pdo "0.1.1"]]

  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}

  :min-lein-version "2.0.0"
  :uberjar-name "secret-shame-standalone.jar"

  :ring {:handler secret-shame.core/app
         :init secret-shame.core/init}

  :source-paths ["src/clj"]
  
  :hooks [leiningen.cljsbuild]
  
  :profiles {:dev {:dependencies [[ring-mock "0.1.5"]]
                   :repl-options {:init-ns secret-shame.core}
                   :source-paths ["dev"]}
             :production {:environment {:env {:production true}}}}

  :cljsbuild {:builds
              {:dev {:source-paths ["src/cljs"]
                     :compiler {:optimizations :none
                                :pretty-print true 
                                :libs [""] 
                                :source-map true
                                :output-dir "resources/public/js/out"
                                :output-to "resources/public/js/app.js"}}
                :production {:source-paths ["src/cljs"]
                             :compiler {:optimizations :advanced
                                        :pretty-print false
                                        ;; :preamble ["react/react.min.js"]
                                        ;; :externs ["react/externs/react.js"]
                                        :output-to "resources/public/js/appadv.js"}}}})





