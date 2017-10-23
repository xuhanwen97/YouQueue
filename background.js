chrome.browserAction.onClicked.addListener( function( tab ) {
    chrome.tabs.query( { active: true, currentWindow: true  }, function( tabs ) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage( activeTab.id, { "message": "clicked_browser_action" } );

        //Listens for the new tab command sent
        chrome.runtime.onMessage.addListener(
            function( request, sender, sendResponse )
            {
                if( request.message === "open_new_tab" )
                {
                    //chrome.tabs.create( { "url": request.url } );
                }
            }
        );


    } );
} );

function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}

chrome.contextMenus.create({"title": title, "contexts":[context], "onclick": genericOnClick});
