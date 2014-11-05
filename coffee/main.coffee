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

init()
