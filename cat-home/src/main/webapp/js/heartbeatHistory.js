function disksGraph(size, diskHistoryGraph) {
	if (size > 0) {
		// this.parentNode.parentNode.rowIndex
		var graphID = document.getElementById('graph');
		var memoryGraph = document.getElementById('memoryGraph');
		var memroyIndex = memoryGraph.rowIndex;
		var diskInfoHead = graphID.insertRow(memroyIndex + 1);
		diskInfoHead.innerHTML = '<th colspan="3">Disk Info</th>';
		for (len = 0; len < size / 3; len++) {
			var id = "diskGraph" + len;
			var graphRow = graphID.insertRow(memroyIndex + 2 + len);
			graphRow.setAttribute("id", id);
		}
		for (i = 0; i < size; i++) {
			var index = Math.floor(i / 3);
			var id = "diskGraph" + index;
			var graphData = diskHistoryGraph[i];
			var graphCell = document.getElementById(id).insertCell();
			var div = document.createElement("div");
			graphCell.appendChild(div);
			div.setAttribute("class", "graph");
			graphReal(div, graphData,60*1000);
		}
	}
}

function graphOnMinute(div,graphData){
	graphReal(div, graphData,60*1000);
}
