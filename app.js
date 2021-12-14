// HINTS

// body => what we will be chnaging the background color of 

// document.addEventListener('') 

// window.innerWidth
// window.innerHeight

// rbg(0,0,0) => rgb(255,255,255); how to map x and y coordinates;  don't touch green, makes it harder

document.addEventListener('mousemove', function(e) {
    // console.log('e.pageX, e.pageY');
    const r = Math.round(e.pageX * 255 / window.innerWidth);
    const b = Math.round(e.pageY * 255 / window.innerHeight);
    const color = `rgb(${r}, 0, ${b})`;
    document.body.style.backgroundColor = color;
    console.log(color);

});