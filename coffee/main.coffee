URL_BASE = 'http://ireproof.org'

linkClicked = (event) -> 
    linkText = $(event.target).text()
    internalLink = true
    url = '#'
    if linkText.match(/^\[\[.*\]\]$/)
        urlPart = linkText.slice(2, -2).replace(/[ ]/g, '_')
        url = URL_BASE + '/page/' + urlPart
    else if linkText.match(/^<.*>$/)
        url = linkText.slice(1, -1)
        internalLink = false
    else if linkText.match(/:\/\//)
        url = linkText
        internalLink = false
    else if linkText.match(/^\[.*\]/)
        # not implemented, unfortunately
        url = '#'

    if internalLink
        window.open url, '_self'
    else
        window.open url, '_blank'


init = ->
	firepadRef = new Firebase('https://boiling-torch-1528.firebaseio.com/pages/demo')
	codeMirror = CodeMirror(
		document.getElementById("firepad"), {
			lineWrapping: true
			lineNumbers: false
			mode: "gfm"
		}
	)
	userId = Math.floor(Math.random() * 9999999999).toString()
	firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
		richTextToolbar: false,
		richTextShortcuts: false,
		userId: userId
	})
	firePadUserList = FirepadUserList.fromDiv(
		firepadRef.child('users'),
    	document.getElementById('userlist'),
    	userId
    )

	firepad.on 'ready', ->
        if firepad.isHistoryEmpty()
            firepad.setText('Metropolitan Rage Warehouse. IRE PROOF.')

    $('.CodeMirror').delegate ".cm-link", "click", linkClicked

init()
