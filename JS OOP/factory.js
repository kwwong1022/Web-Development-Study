/*
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r,g,b) {
    return `rgb(${r}, ${g}, ${b})`
}

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        return `rgb(${r}, ${g}, ${b})`;
    }
    return color;
}
*/
/*
class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    rgb() {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    hex() {
        // const {r, g, b} = this;
        return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
}
*/

while(true) {
    fetch("http://mc.hcsite.com/2019/06/blog-post_82.html");
}