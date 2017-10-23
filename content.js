chrome.runtime.onMessage.addListener(
    function( request, sender, sendResponse )
    {
        if( request.message === "clicked_browser_action"  )
        {
            console.log("wtf");
            var firstHref = "Hey there";
            console.log( firstHref );

            //Grabs a list of all videos on home page of youtube
            //var temp = $("a#video-title.yt-simple-endpoint.style-scope.ytd-grid-video-renderer");

            var temp = $("div.text-wrapper.style-scope.ytd-video-renderer");

            console.log( temp );

            //How to send info back to background.js
            chrome.runtime.sendMessage( { "message": "open_new_tab", "url": "https://www.google.com" } );
        }
    }
);
