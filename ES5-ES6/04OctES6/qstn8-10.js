        // Qstn 9
// const nums = [1,5,2,5,2,3,5,1,3,4,7];
// console.log("Original array is ",...nums);
// // Implementing Set
// const numset = new Set();
// for(let i=0;i<nums.length;i++){
//     numset.add(nums[i]);
// }
// console.log("After removing duplicates using Set, array becomes ",...numset);
// // Implementing Map
// const nummap = new Map()
// for(let i=0;i<nums.length;i++){
//     nummap.set(i,nums[i]);
// }
// console.log(nummap);
 
//          Qstn 8
// class Node{
//     constructor(data, next = null){
//         this.data = data,
//         this.next = next
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null;
//     }
// }
// LinkedList.prototype.addFirst = function(data){
// //    new node creation
//         let newNode = new Node(data);
    
//         newNode.next = this.head;
   
        
//         this.head = newNode;
//         return this.head;
//     }
// LinkedList.prototype.addLast = function(data){
//     let newNode =new Node(data);
// // when head is null i.e list is empty
//     if(!this.head){
//         this.head = newNode;
//         return this.head;
//     }
//     let tail = this.head;
//     while(tail.next !== null){
//         tail = tail.next;
//     }
//     tail.next = newNode;
//     return this.head;
// }
// LinkedList.prototype.getLength = function() {
//     let current = this.head;
//     let count = 0;
//     while(current) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }
//   LinkedList.prototype.getLast =function() {
//     let lastNode = this.head;
//     if (lastNode) {
//         while (lastNode.next) {
//             lastNode = lastNode.next
//         }
//     }
//     return lastNode;
// }
// LinkedList.prototype.getFirst = function(){
//     return this.head;
// }
// const linked_node1 = new LinkedList();

// linked_node1.addFirst(5),
// linked_node1.addFirst(1);
// linked_node1.addLast(10);
// console.log(linked_node1.getLast());