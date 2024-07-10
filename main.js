function createLinkedList(nodes) {
	nodeList = nodes;
	return {
		nodeList,
		append: function (value) {
			this.nodeList.push(createNode(value));
			this.nodeList[this.nodeList.length - 2].nextNode = value;
			console.log("append...");
		},
		prepend: function (value) {
			this.nodeList.unshift(createNode(value, this.nodeList[0].value));
			console.log("prepend...");
		},
		size: function () {
			console.log("size...");
		},
		head: function () {
			console.log("head...");
		},
		tail: function () {
			console.log("tail...");
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
