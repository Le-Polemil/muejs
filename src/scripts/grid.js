document.querySelectorAll('.grid').forEach((gridNode) => {
    const nbCol = gridNode.querySelectorAll('.grid-element').length;
    gridNode.classList.add('grid-template-columns')
});