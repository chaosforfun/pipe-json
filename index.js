var stdin = process.stdin

var stdout = process.stdout

var running = false;
var quene = []

stdin.on('data', function(data){
	var theStr
	data = data.toString()
	var inputLines = data.split('\n')
	// console.log(inputLines)
	for(var i = 0, l = inputLines.length; i < l; i++) {
		quene.push(inputLines[i])
	}
	if(running) return;
	running = true
	while(quene.length) {
		theStr = quene.shift()
		console.log(saveJSON(theStr))
		console.log('\n')
	}
	running = false
})

function saveJSON(str) {
	var ret
	try {
		var json = JSON.parse(str)
		return json
	}catch(e) {
		return ''  + str
	}
}
