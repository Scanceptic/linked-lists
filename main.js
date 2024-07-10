function createLinkedList() {
	/* 
        Linkedlist stores the headnode, and then every new node
        has to be attached to the headnode or become the new headnode
    */
	return {
		// Initially there is no defined headnode (empty list)
		headNode: null,
		// prepend a node to the front of the list
		prepend: function (value) {
			console.log("prepend...");
			// next node is null
			let node = null;
			// if headnode exists
			if (this.headNode !== null) {
				// make it the next node
				node = this.headNode;
			}
			// make a new headnode with the given value
			// if headnode existed prior, make it the next node pointer
			// otherwise nextnode is null
			this.headNode = createNode(value, node);
		},
		append: function (value) {
			console.log("append...");
			// set selected node to headNode
			let node = this.headNode;
			// if no nodes then prepend does the same thing
			if (node === null) {
				this.prepend(value);
			} else {
				// jump through list to find where nextnode is null
				while (node.nextNode !== null) {
					// go a layer further into list
					node = node.nextNode;
				}
				// make nextnode
				node.nextNode = createNode(value);
			}
		},

		size: function () {
			console.log("size...");
			// select node
			let node = this.headNode;
			// initialize size counter
			let counter = 0;
			// loop through list while node isnt null
			while (node !== null) {
				// increment counter
				counter++;
				// go a layer further
				node = node.nextNode;
			}
			// return count
			return counter;
		},
		head: function () {
			console.log("head...");
			// select node
			let node = this.headNode;
			return node;
		},
		tail: function () {
			console.log("tail...");
			// select node
			let node = this.headNode;
			// if node is null return null
			if (node === null) return node;
			// loop through list while nextNode isnt null
			while (node.nextNode !== null) {
				// go a layer further
				node = node.nextNode;
			}
			// return node at end
			return node;
		},
		at: function (index) {
			console.log("at...");
			// select node
			let node = this.headNode;
			// initialize index counter
			let counter = 0;
			// loop through list while counter is less than index
			while (counter < index) {
				// if node is null return null
				if (node === null) return node;
				// increment counter
				counter++;
				// go a layer further
				node = node.nextNode;
			}
			// return node at index
			return node;
		},
		pop: function () {
			console.log("pop...");
			// find second last node
			node = this.at(this.size() - 2);
			// remove last node
			node.nextNode = null;
		},
		contains: function (value) {
			console.log("contains...");
			// select node
			let node = this.headNode;
			// loop through list
			while (node !== null) {
				// if node matches value return true
				if (node.value === value) return true;
				// go a layer further
				node = node.nextNode;
			}
			// return false if no matches
			return false;
		},
		find: function (value) {
			console.log("find...");
			// select node
			let node = this.headNode;
			// make index counter
			let counter = 0;
			// loop through list
			while (node !== null) {
				// if node matches value return index
				if (node.value === value) return counter;
				// increment counter
				counter++;
				// go a layer further
				node = node.nextNode;
			}
			// return null if no matches
			return null;
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
// create test nodes
for (let i = 1; i <= 5; i++) {
	LinkedList.append(i * 2);
}
