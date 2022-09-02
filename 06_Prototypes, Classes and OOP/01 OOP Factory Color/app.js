
//factory function

// //it convert rbg to hex color 
// function hex (r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// // hex(255, 35, 15)

// // //result
// // "#ff230f"
// // 'rgb(255, 35, 15)'

// function rgb (r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`
// }




// //factory function to convert hex to rgb and rgb to hex
// function makeColor (r,g,b) {
//     const color = {};  //color is object and this referss to the nearest objct which is color here
//     color.r = r;   //color.r, g,b are properties of makecolor and rbg can be accesed aywhere
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const {r, g, b} = this;   //refer to rbg colors
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     color.hex = function () {
//         const {r, g, b} = this;   //this refers rgb color
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }


// // const firstColor = makCeColor(35, 255, 150)
// firstColor.hex(); //firstColor.hex();
// firstColor.rgb(); //rgb(35, 255, 150)

// const black = makeColor(0, 0, 0);
// black.hex(); //"#0000s00"
// black.rbg();  //"rgb(0, 0, 0)"







//new operator
//constructor function 
function Color(r, b, g) {
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this)
}

// new Color(255, 40, 100)    //if we dont use new then this refers to the nearest object which is window but using new behaves differently it refers to the property rbg

//constructor prototype or function is defined in prototype outside the constructor function 
Color.prototype.rgb = function () {
            const {r, g, b} = this;   //refer to rbg colors
            return `rgb(${r}, ${g}, ${b})`;
};


Color.prototype.hex = function () {
    const {r, g, b} = this;   //this refers rgb color
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
    const {r, g, b} = this;   //refer to rbg colors
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}


const color1  = new Color (40, 255, 60);


// passing in console
// color1.rgba();
// //gives color 1 in rgba form with a = 1 opacity default value
