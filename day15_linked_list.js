this.insert=function(head,data){
       if(head == null){
            return new Node(data);
       } else if(head.next == null){
            head.next = new Node(data);
       } else {
            this.insert(head.next,data);
       }
       return head;
};

this.insert=function(head,data){
	//complete this method
	// Set the current node as the passed in head
	curNode = head;
	// Create a new node with the data passed in
	newNode = new Node(data);

	// If the current node is not null (it has values), walk the node list
	if (curNode != null ){
		while (curNode.next != null){
			curNode = curNode.next;
        }
            curNode.next = newNode;
    }
    // Otherwise, if the list is empty, return the created node
    else{
		head = newNode;
	}
    
    return head;
    };
}

// JavaScript version using recursion 
this.insert=function(curNode, curData){
	//Complete this method
    // If current node is null, create a new one
    if (curNode == null){
		return new Node(curData);
    }
        // Else if the next node is null, create a new attached to next
    else if (curNode.next == null){
		curNode.next = new Node(curData);
    }
        // Otherwise continue traversing linked list
    else{
		this.insert(curNode.next,curData);
    }

    return curNode;
};

this.insert=function(head, data){
       if(head == null){
            return new Node(data);
       }else if(head.next == null){
            head.next = new Node(data);
       }else{
            this.insert(head.next, data);
       }
       return head;
};



