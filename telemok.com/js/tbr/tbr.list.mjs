/*
* Copyright Telemok.com
* */

/*
example:

*/
import {tbr} from "https://cdn.jsdelivr.net/gh/telemok/telemok.github.io@b48a139/telemok.com/js/tbr/tbr.assert.mjs"
export {tbr};

class DoublyLinkedListNode
{
	constructor(value, next = null, previous = null)
	{
		this.value = value;
		this.next = next;
		this.previous = previous;
	}
	toString(callback)
	{
		return callback ? callback(this.value) : `${this.value}`;
	}
}

class DoublyLinkedList
{
	constructor()
	{
		this.clear();
		this.indexMap = new Map();//Index for speed up and security
	}
	clear()
	{
		this.head = null;
		this.tail = null;
		this.countNodes = 0;
	}

	assertNode(node, comment = "")
	{
		if(comment.length)
			comment = `.${comment}`;

		if(!(node instanceof DoublyLinkedList))
			throw new Error(`${comment} tbr.List( wrong instanceof node = "${typeof node}")`);
	}
	push(value)
	{
		const newNode = new DoublyLinkedListNode(value);
		if(this.tail)
			this.tail.next = newNode;
		newNode.previous = this.tail;
		this.tail = newNode;
		if(!this.head)
		{
			this.head = newNode;
		}
		this.countNodes++;
		return newNode;
	}
	insertAfter(node, value)
	{
		this.assertNode(node, "insertAfter");
		if(node === this.tail)
			return this.push(value);
		const newNode = new DoublyLinkedListNode(value);
		newNode.previous = node;
		newNode.next = node.next;
		node.next = newNode;
		newNode.next.previous = newNode;
		this.countNodes++;
		return newNode;
	}
	insertBefore(node, value)
	{
		this.assertNode(node, "insertBefore");
		if(node === this.head)
			return this.unshift(value);

		const newNode = new DoublyLinkedListNode(value);
		newNode.previous = node.previous;
		newNode.next = node;
		node.previous = newNode;
		newNode.previous.next = newNode;

		this.countNodes++;
		return newNode;
	}
	unshift(value)
	{
		const newNode = new DoublyLinkedListNode(value);
		newNode.next = this.head;
		if(this.head)
			this.head.previous = newNode;
		this.head = newNode;
		if(!this.tail)
			this.tail = newNode;
		this.countNodes++;
		return newNode;
	}
	deleteNode(deletedNode)
	{
		this.assertNode(deletedNode, "deletedNode");
		if(deletedNode === this.head)
		{
			this.head = deletedNode.next;
			if(this.head)
				this.head.previous = null;
			if(deletedNode === this.tail)
				this.tail = null;
		}
		else if(deletedNode === this.tail)
		{
			this.tail = deletedNode.previous;
			this.tail.next = null;
		}
		else
		{
			const previousNode = deletedNode.previous;
			const nextNode = deletedNode.next;
			previousNode.next = nextNode;
			nextNode.previous = previousNode;
		}
		this.countNodes--;
	}
	delete(value)
	{
		// Если нет head значит список пуст.

		let node = this.findNode(value);
		if(node)
			this.deleteNode(node);
		// this.forEach((valueInList, currentNode)=>{
		// 	if (valueInList === value) {
		// 		// Сохраняем значение текущего узла как удаленное.
		// 		this.deleteNode(currentNode);
		// 	}
		// });
		//this.countNodes--;

		//return deletedNode;
		return node;
	}
	deleteEach(callback)//callback can be undefined or function
	{
		if(typeof callback !== 'undefined')
			Tbr.Assert.func(callback, "tbr.List.deleteEach(callback must be function)");
		this.forEach((valueInList, currentNode)=>
		{
			if(typeof callback === 'function')
				callback(valueInList);
			this.deleteNode(currentNode);
		});
	}
	clear()
	{
		this.deleteEach();
	}
	every(callback)
	{
		tbr.assert.function(callback, 'tbr.List.every');
		for(let currentNode = this.head; currentNode; currentNode = currentNode.next)
		{
			let result = callback(currentNode.value, currentNode);
			if(!result)
				return false;
		}
		return true;
	}
	some(callback)
	{
		tbr.assert.function(callback, 'tbr.List.every');
		for(let currentNode = this.head; currentNode; currentNode = currentNode.next)
		{
			let result = callback(currentNode.value, currentNode);
			if(result)
				return true;
		}
		return false;
	}
	forEach(callback)
	{
		tbr.assert.function(callback, "tbr.List.forEach");
		let currentNode = this.head;
		for(let currentNode = this.head; currentNode; currentNode = currentNode.next)
			callback(currentNode.value, currentNode);
	}
	findNode(value)
	{
		this.forEach((valueInList, node) =>
		{
			if(value === valueInList)
				return node;
		});
		return null;
	}
	move(value, shift)//shift from -9999999 to 99999999
	{
		console.log(`move`)
		console.log(`move(${value.toString()},shift=${shift})`)
		Tbr.Assert.floor(shift);
		let node = this.findNode(value);
		if(!node)
			throw new Error("Tbr.List.move(value not finded)");
		let node2 = node;
		if(shift > 0)
		{
			while(node2 && shift > 0)
			{
				node2 = node2.next;
				shift--;
			}
			console.log("del node")
			this.deleteNode(node);//Delete list item, but not value
			this.insertAfter(node2, value);
			//node2.push(value);
		}
		else if(shift < 0)
		{
			while(node2 && shift < 0)
			{
				node2 = node2.previous;
				shift++;
			}
			this.deleteNode(node);//Delete list item, but not value
			this.insertBefore(node2, value);
			//node2.unshift(value);
		}
		else
			throw new Error("Tbr.List.move(shift can not be 0)");

		//this.deleteNode(node);//Delete list item, but not value


	}
	toArray() {
		const nodes = [];

		let currentNode = this.head;

		// Перебираем все узлы и добавляем в массив.
		while (currentNode) {
			nodes.push(currentNode);
			currentNode = currentNode.next;
		}

		// Возвращаем массив из всех узлов.
		return nodes;
	}


	pop()
	{
		if(!this.tail)
			return null;

		// Сохраняем значение последнего узла.
		const deletedTail = this.tail;

		// Если у tail есть ссылка на предыдущий узел,
		if (this.tail.previous) {
			// переназначаем tail на предыдущий узел,
			this.tail = this.tail.previous;
			// обновляем ссылку на следующий узел.
			this.tail.next = null;
		} else {
			// Если есть tail, но у него нет ссылки на предыдущий узел,
			// значит в списке только один узел и мы его удалили.
			// Поэтому обнуляем всё.
			this.head = null;
			this.tail = null;
		}
		this.countNodes--;

		return deletedTail;
	}





	shift()
	{
		if(!this.head)
			return null;
		// Сохраняем значение первого узла.
		const deletedHead = this.head;

		// Если у head есть ссылка на следующий узел,
		if (this.head.next) {
			// переназначаем head на следующий узел,
			this.head = this.head.next;
			// обновляем ссылку на следующий узел.
			this.head.previous = null;
		} else {
			// Если есть head, но у него нет ссылки на следующий узел,
			// значит в списке только один узел и мы его удалили.
			// Поэтому обнуляем всё.
			this.head = null;
			this.tail = null;
		}
		this.countNodes--;

		return deletedHead;
	}
	fromArray(values) {
		values.forEach(value => this.push(value));

		return this;
	}
	reverse() {
		let currNode = this.head;
		let prevNode = null;
		let nextNode = null;

		// Перебираем все узлы.
		while (currNode) {
			// Сохраняем предыдущий и следующий узлы.
			nextNode = currNode.next;
			prevNode = currNode.previous;

			// Меняем ссылку на следующий "next" узел текущего узла,
			// чтобы он ссылался на предыдущий узел.
			// Так как мы меняем их местами, нужно поменять и ссылки на узлы.
			// Изначально, первый узел не имеет предыдущего узла,
			// поэтому после перестановки его "next" станет "null".
			currNode.next = prevNode;

			// Меняем ссылку на предыдущий "previous" узел текущего узла,
			currNode.previous = nextNode;

			// Перемещаем узлы prevNode и currNode на один шаг вперед.

			// Текущий узел делаем предыдущим.
			prevNode = currNode;

			// Следующий узел становится текущим.
			currNode = nextNode;
		}

		// Меняем head и tail местами.
		this.tail = this.head;

		// В данном случае prevNode это последний узел,
		// поэтому, после reverse, он становится первым.
		this.head = prevNode;

		// Возвращаем список.
		return this;
	}
}
tbr.List = DoublyLinkedList;