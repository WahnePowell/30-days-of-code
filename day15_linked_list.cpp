Node* insert(Node *head, int data) {
	Node** pp = &head; // pp is the pointer to the pointer head
	
	while(*pp) // While head is not null (the content of pp is not null)
		pp = &((*pp) -> next); // pp receive the address of the pointer to the next node
	    *pp = new Node(data); // In this moment the content of pp is the address to the last node
	
	return head;
}

Node* insert(Node *head, int data) {
	Node* newhead = new Node(data);
	
	if(head != NULL) {
		Node *current = head;
		
		while(current -> next != NULL) {
			current = current -> next;
			}
			current -> next = newhead;
			return head;
	} else {
		return newhead;
	}
}

Node* insert(Node *head, int data) {
	Node* newHead = new Node(data);
	
	if(!head){
		head = newHead;    
	}else{
		Node *start = head;
		while(start -> next){start = start -> next;}
		start -> next = newHead;
    }
	
    return head;
}

Node* insert(Node *head,int data) {
	Node* node = new Node(data);
	
	if(head) {
		Node *current = head;
		
		while(current->next) 
			current = current -> next; //find the tail/end of the list
		    current -> next = node;
		return head; //return the same head
    }      
    return node; //if the list is empty, head is null, node becomes the head
}

Node* insert(Node *head, int data){
	static Node *last;
	Node* n = new Node(data);
	
	if(head == NULL){
		head = n;
    }else{
		last -> next = n;
    }
	
    last = n;
    return head;
}

Node* insert(Node* head, int data) {
	Node* newNode = new Node(data);
    if (head == nullptr) //quickly exclude simple solutions 
	return newNode;
    
    Node* current = head; //Save head to return it
    while (current -> next != nullptr) //Since C++11, prefer nullptr (instead of NULL -> int)
		current = current -> next;

    current -> next = newNode;
    return head;
  }




