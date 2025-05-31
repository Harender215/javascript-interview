function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function() {
        const context = this;
        const args = arguments;
        if(!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if((Date.now() - lastRan) >= limit) { // if the time passed since lastRan >= limit then executes this function again.
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan)); // if a scoll at this moment, it will check how much time is left sice the last execution of funciton and the limit
        }
    }

}



// Dom element to display mouse coordinates
const output = document.getElementById('output');

//function to update position
function updateMousePosition(event) {
    output.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
}

//Throttle the update function to run every 500ms
const throlledMouseMove = throttle(updateMousePosition, 500);

window.addEventListener('mousemove', throlledMouseMove);


