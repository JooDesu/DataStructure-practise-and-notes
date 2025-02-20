class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}//a rule:always go from left to right for all orders and node is always the one at the top of the binary tree graph

function inOrderTraversal(node) {
    if (node) {//inorder the node will always be in the middle:中部
        inOrderTraversal(node.left); // Visit left subtree
        console.log(node.value);      // Visit node
        inOrderTraversal(node.right); // Visit right subtree
    }
}

function preOrderTraversal(node) {
    if (node) {//preorder the node will always at the front:前部
        console.log(node.value);      // Visit node
        preOrderTraversal(node.left); // Visit left subtree
        preOrderTraversal(node.right); // Visit right subtree
    }
}

function postOrderTraversal(node) {
    if (node) {//postorder the node will always at the back:後部
        postOrderTraversal(node.left); // Visit left subtree
        postOrderTraversal(node.right); // Visit right subtree
        console.log(node.value);        // Visit node
    }
}

 // Creating a simple binary tree
const root = new TreeNode("A");
root.left = nodeB = new TreeNode("B");
root.right = nodeC = new TreeNode("C");
nodeB.right = new TreeNode("D");
nodeC.right = nodeE = new TreeNode("E");
nodeE.left = new TreeNode("F");

// Testing the traversals
console.log("In-Order Traversal:");
inOrderTraversal(root); // Should print: 4, 2, 5, 1, 3

console.log("Pre-Order Traversal:");
preOrderTraversal(root); // Should print: 1, 2, 4, 5, 3

console.log("Post-Order Traversal:");
postOrderTraversal(root); // Should print: 4, 5, 2, 3, 1