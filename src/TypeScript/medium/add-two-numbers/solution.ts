/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode(0); //placeholder node
  let current = dummyHead; //a pointer to help us build the result list
  let carry = 0; //to hold any overflow from adding two digits that sum to a value greater than 9

  while (l1 !== null || l2 !== null || carry > 0) {
    // Get values from l1 and l2, or 0 if the node is null
    const val1 = l1 !== null ? l1.val : 0;
    const val2 = l2 !== null ? l2.val : 0;

    // Calculate the sum and update carry
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // New carry (0 or 1)
    const newVal = sum % 10; // New node value

    // Add the new value as a node in the result list
    current.next = new ListNode(newVal);
    current = current.next;

    // Move to the next nodes in l1 and l2 if available
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return dummyHead.next;
}
