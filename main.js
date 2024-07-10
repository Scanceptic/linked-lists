function createLinkedList() {
	return {
        headNode: null,
        prepend: function (value) {
			console.log("prepend...");
			let node = null;
            if (headNode !== null) {
                node = headNode;
            }
            headNode = createNode(value, node);
		},
		append: function (value) {
			console.log("append...");
            
			
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

const LinkedList = createLinkedList();
console.log(LinkedList);
