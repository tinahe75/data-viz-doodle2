function onSelectPlot(clickedButton, plot, displayId) {
    const plotObject = document.getElementById(displayId);
    if(plotObject) {
        plotObject.data = "plots/"+plot;
    }

    // Get the parent group of the clicked button
    const group = clickedButton.closest('.button-wrapper');
    const buttons = group.querySelectorAll('.my-button');

    buttons.forEach(button => {
        button.classList.remove('highlighted');
    });
    clickedButton.classList.add('highlighted');

}