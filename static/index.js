const mq = window.matchMedia( "(min-width: 500px)" );
if (mq.matches) {
    // window width is at least 500px
    } else {
    // window width is less than 500px
    }

 
// You can also add an event listener which fires when a change is detected:

// media query event handler
if (matchMedia) {
const mq = window.matchMedia("(min-width: 500px)");
mq.addListener(WidthChange);
WidthChange(mq);
}

// media query change
function WidthChange(mq) {
if (mq.matches) {
// window width is at least 500px
} else {
// window width is less than 500px
}

}