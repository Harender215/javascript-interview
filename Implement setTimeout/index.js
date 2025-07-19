function createMySetTimeout() {
    
    let timerId = 0;
    const timerMap = {};

    function mySetTimeout(callback, delay, ...args) {
        const id = scheduleTimer();
        const startTime = Date.now();
        function check() {
            if(!timerMap[id]) return;
            if(Date.now() - startTime >= delay) {
                callback(...args);
            } else {
                requestIdleCallback(() => check());
            }
        }

        requestIdleCallback(() => check());

        return id;
    }

    function myClearTimeout(id) {
        if(timerMap[id]) delete timerMap[id];
    }

    function scheduleTimer() {
        const id = ++timerId;
        timerMap[id] = true;
        return id;
    }

    return {mySetTimeout, myClearTimeout}
}


const {mySetTimeout, myClearTimeout} = createMySetTimeout();

const print = () => console.log(`Timer executed after ${Date.now() - startTime} ms`);

const startTime = Date.now();
const id1 = mySetTimeout(print, 4000);

const id2 = mySetTimeout(print, 1000);

const id3 = mySetTimeout(print, 1000);

const id4 = mySetTimeout(print, 3000);
const id5 = mySetTimeout(print, 1000);
const id6 = mySetTimeout(print, 2000);

mySetTimeout(() => myClearTimeout(id4), 2750)
mySetTimeout(() => myClearTimeout(id6), 1900)