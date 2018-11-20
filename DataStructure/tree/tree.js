class TreeNode {
    constructor(data) {
        this.root;
        this.data = data;
        this.children = [];
        this.parent = null;
        this.level = 0;
    }

    traverse(fn) {
        var result = fn(this);
        if (result) {
            return result;
        }
        var children = this.children;
        for (var i = 0; i < children.length; i++) {
            result = children[i].traverse(fn);
            if (result) {
                break;
            }
        }
        return result
    }

    removeChild(node) {
        var index, removed;
        index = this.children.indexOf(node);
        if (index >= 0) {
            removed = this.children.splice(index, 1)[0];
        }
    }

    insertChild(node, index) {
        if (index === undefined) {
            index = this.children.length;
        }
        if (node.parent) {
            node.parent.removeChild(node);
        }
        node.parent = this;
        node.root = this.root;
        node.level = this.level + 1;
        this.children.splice(index, 0, node);
    }

    preOrder(fn) {
        fn(this);
        var children = this.children;
        children.forEach(function (child) {
            child.preOrder(fn);
        });
    }

    //后序遍历
    postOrder(fn) {
        var children = this.children;
        children.forEach(function (child) {
            child.preOrder(fn);
        });
        fn(this)
    }

    isLeaf() {
        return this.children.length === 0;
    }
}


class Tree {
    constructor(data) {
        this.root = data;
        this.children = [];
        this.parent = null;
    }

    find(data) {
        var fNode = null;
        this.root.traverse(function (node) {
            if (node === data) {
                fNode = node;
                return true;
            }
        });
        return fNode;
    }

    remove(node) {
        node.parent.removeChild(node);
    }

    insert(node, data) {
        var newNode = new TreeNode(data);
        node.insertChild(newNode);
    }

    preOrder(fn) {
        this.root.preOrder(fn);
    }

    postOrder(fn) {
        this.root.postOrder(fn)
    }
}
