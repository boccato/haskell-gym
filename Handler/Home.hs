{-# LANGUAGE TupleSections, OverloadedStrings #-}
module Handler.Home where

import Import

getHomeR :: Handler RepHtml
getHomeR = do
    defaultLayout $ do
        aDomId <- lift newIdent
        setTitle "Welcome To Haskell Gym!"
        $(widgetFile "homepage")
