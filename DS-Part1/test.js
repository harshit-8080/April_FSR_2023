console.clear();
// Question 1. Delete the elements in an linked list whose sum is equal to zero
// Input: head = [1,2,-3,3,1]
// Output: [3,1]

// Input: head = [1,2,3,-3,4]
// Output: [1,2,4]

// Input: head = [1,2,3,-3,-2]
// Output: [1]

function ListNode(value1, next) {
  this.value1 = value1;
  this.next = null;
}

let removeZeroSumSublists = function (head) {
  const dummy = new ListNode();
  dummy.next = head;
  const hm = new Map();
  let pSum = 0;
  hm.set(pSum, dummy);

  while (head) {
    pSum += head.val;
    if (hm.has(pSum)) {
      //remove entries
      let to_remove = hm.get(pSum).next,
        SUM = pSum;
      while (to_remove !== head) {
        SUM += to_remove.val;
        hm.delete(SUM);
        to_remove = to_remove.next;
      }
      //draw link (delete nodes)
      hm.get(pSum).next = head.next;
    } else hm.get(pSum, head);
    head = head.next;
  }
  return dummy.next;
};

head1 = [1, 2, 3, -3, -2];
let res1 = removeZeroSumSublists(head1);
console.log(res1);
