
// let btn = document.querySelector('.btn');
let form = document.querySelector('.form');
let inputForSize = document.querySelector('.inputForSize');
let elInputForTypeElement = document.querySelector(".inputForTypeElement");
let elForBgColor = document.querySelector('.forBgColor')
let elSelect = document.querySelector('.select');

class Shape {
  constructor(options) {
    this.element = document.createElement(options.elementType);
    this.element.style.backgroundColor = options.backgroundColor;

    this.wrapper = document.querySelector(`.${options.holder}`);
    this.wrapper.append(this.element);
  }
  hide() {
    this.element.style.display = "none";
  }
}
class Square extends Shape {
    constructor(options){
        super(options);
        this.element.style.height = options.size + 'px';
        this.element.style.width = options.size + 'px';
    }
}

class Rounded extends Shape {
    constructor(options){
        super(options)
        this.element.style.height = options.size + "px"
        this.element.style.width = options.size + 'px'
        this.element.style.borderRadius = options.size + 'px'
    }
}

class Triangle extends Shape {
    constructor(options){
        super(options);
        this.element.style.borderTop = options.size + "px solid transparent"
        this.element.style.borderLeft = options.size + "px solid transparent"
        this.element.style.borderRight = options.size + 'px solid transparent'
        this.element.style.borderBottom = options.size + "px solid"
        this.element.style.height = 0 + 'px'
        this.element.style.width = 0 + 'px'
        this.element.style.display = "inline-block"
    }
}


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    // console.log('submitted');
    if(elSelect.value === "square"){
    let createdSquare = new Square({
        elementType: elInputForTypeElement.value,
        backgroundColor: elForBgColor.value,
        holder: 'wrapper',
        size: inputForSize.value
    })
    form.reset();
    createdSquare.element.addEventListener('click', (e)=>{
        createdSquare.hide();
    })}
    else if (elSelect.value === "circle"){
        let circledEl = new Rounded({
            elementType: elInputForTypeElement.value,
            backgroundColor: elForBgColor.value,
            holder: 'wrapper',
            size: inputForSize.value
        })
        form.reset();
        circledEl.element.addEventListener('click', ()=>{
            circledEl.hide();
        })
    }else if(elSelect.value === "triangle"){
        let triangleClass = new Triangle({
            elementType: elInputForTypeElement.value,
            // backgroundColor: elForBgColor.value,
            holder: 'wrapper',
            size: inputForSize.value
        })
        form.reset();
        triangleClass.element.addEventListener('click',() => {
            triangleClass.hide();
        })
    }
})

// class Shape {
//     constructor(options){
//         this.element = document.querySelector(`${options.elementType}`);
//         this.element.style.backgroundColor = (`${options.backgroundColor}`);
//         this.wrapper = document.querySelector(`${options.holder}`);
//         this.element = 
//     }
// }

// class Square extends Shape {
//     constructor(options){
//         super(options)
//         this.element.style.height = options.size + 'px'
//         this.element.style.width = options.size + 'px'
//     }
// }
// let form = document.querySelector('.form');
// let input = document.querySelector('.input');

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();

//     let inputForSize = document.querySelector('.inputForSize');
//     let forBgColor = document.querySelector('.forBgColor');
//     let inputForTypeElement = document.querySelector('.inputForTypeElement')
//     let newSquare = new Square ({
//         elementType: `${elInputForTypeElement}`,
//         backgroundColor: `${forBgColor}`,
//         holder: `${inputForTypeElement}`,
//         size: `${inputForSize}`,
//     })
// })