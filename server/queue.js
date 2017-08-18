function Queue(capacity) {
	this.storage = [];
	this.capacity = capacity;
}

Queue.prototype.enqueue = function(element){
	this.storage.push(element);
	if (!!this.capacity && this.storage.length > this.capacity) {
		this.dequeue();
	}
};

Queue.prototype.dequeue = function() {
	return this.storage.shift();
};

Queue.prototype.toArray = function() {
	return this.storage;
}

module.exports = Queue;
