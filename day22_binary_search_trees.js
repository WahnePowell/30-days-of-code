
function calculateHeight(root, maxHeight = -1) {
    if (root) {
      maxHeight += 1;
      return Math.max(calculateHeight(root.left, maxHeight),
                      calculateHeight(root.right, maxHeight));
    } else {
      return maxHeight;
    }
}
return calculateHeight(root);

/*
this.getHeight = function(root) {
    //node is null, no childen for parent
    if (root == undefined) {
        return -1;
    }
    // get the max of the between left and right
    var max = Math.max(this.getHeight(root.left), this.getHeight(root.right));

    return 1 + max;
}
*/
/*
this.getHeight = function (root) {
    let height = -1, nodeCount;
    const visiting = [root];

    while (nodeCount = visiting.length) {
        height++;
        while (nodeCount-- > 0) {
            const node = visiting.shift();
            if (node.left) visiting.push(node.left);
            if (node.right) visiting.push(node.right);
        }
    }

    return height;
};
*/