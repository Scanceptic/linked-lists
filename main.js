function createLinkedList(nodes) {
	nodeList = nodes;
	return {
		nodeList,
		append: function (value) {
			console.log("append...");
			nodeList.push(createNode(value));
			nodeList[nodeList.length - 2].nextNode = value;
		},
		prepend: function (value) {
			console.log("prepend...");
			nodeList.unshift(createNode(value, nodeList[0].value));
		},
		size: function () {
			console.log("size...");
			return nodeList.length;
		},
		head: function () {
			console.log("head...");
			return nodeList[0];
		},
		tail: function () {
			console.log("tail...");
			return nodeList[nodeList.length - 1];
		},
		at: function (index) {
			console.log("at...");
		},
		pop: function () {
			console.log("pop...");
		},
		contains: function (value) {
			console.log("contains...");
		},
		find: function (value) {
			console.log("find...");
		},
		toString: function () {
			console.log("toString...");
		},
	};
}

function createNode(value = null, nextNode = null) {
	return {
		value,
		nextNode,
	};
}

const LinkedList = createLinkedList([
	createNode(2, 5),
	createNode(5, 9),
	createNode(9, 12),
	createNode(12, 1),
	createNode(1, 55),
	createNode(55, 277),
]);
