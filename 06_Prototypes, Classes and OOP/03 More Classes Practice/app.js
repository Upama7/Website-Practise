

class Color {    //constructor function and classes must be first letter capital
    constructor(r, g, b) {
        // console.log('INSIIDE CONSTRUCTOR');
        // console.log(r, g, b);
        
        this.r = r;       //these are properties of object and this create a new onject with the valur refering to r b and g.
        this.g = g;
        this.b = b;
        this.colorName = name;
    }

    innerRGB() {
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`
    }

    rgb () {
        return `rgb(${this.innerRGB()} )`;  //innerRGB() should be call since it is a function
    }

    rgba (a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`
    }


    hex () {
        const {r, g, b} = this;   //this refers rgb color
        return (
         '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1) )
         ;
    }
}
