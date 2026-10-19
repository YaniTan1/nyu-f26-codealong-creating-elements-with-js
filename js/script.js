const gallery = document.getElementById("tree-gellery");

trees.forEach(funtion (tree) {

    const treeDiv = document.createElement("div");
    treeDiv.className = "tree"

    const treeName = document.createElement("h2")
    treeName.textContent = tree.name);

    treeDiv.appendChild(treeName);

    gallery.append.Child(treeDiv);
});