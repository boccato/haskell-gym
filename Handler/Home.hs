{-# LANGUAGE TupleSections, OverloadedStrings #-}
module Handler.Home where

import Import

getHomeR :: Handler RepHtml
getHomeR = do
    defaultLayout $ do
        aDomId <- lift newIdent
        setTitle "Haskell Gym"
        addStylesheetRemote  "static/lib/cm/codemirror.css"
        addScriptRemote "static/lib/cm/codemirror.js"
        addScriptRemote "static/lib/cm/mode/javascript/javascript.js"
        addScriptRemote "static/lib/jquery-1.6.4.min.js"
        addScriptRemote "static/lib/layout.js"
        $(widgetFile "homepage")
