
class Node {
   constructor(data){
       this.data=data;
       this.prev=null;
       this.next=null;
   }
}

class LinkedList {
   constructor(data,left,right){
       this.head = new Node("head");
   }

   find (data) {
        var currNode = this.head;
        while (currNode && currNode.data != data) {
            currNode = currNode.next;
        }
        return currNode;
   }

   remove (data) {
        var currNode = this.find(data);
        if (currNode&&currNode.next != null) {
            currNode.prev.next = currNode.next;
            currNode.next.prev = currNode.prev;
            currNode.next = null;
            currNode.prev = null;
        }
   }

   insert (node,data) {
        var newNode = new Node(data);
       
        newNode.next = node.next;
        newNode.prev = node;

        node.next = newNode;
        node.next.prev = newNode;
   }

   clear () {
       this.head.next=null;
   }
}