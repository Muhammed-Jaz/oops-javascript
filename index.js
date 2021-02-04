// object literals

const circle ={
    radius : 100,
    location:{
        x:1,
        y:1
    },
    draw:()=>{
        console.log("draw");
    }
}
circle.draw()

 
// Factory Functions

function createCircle(radius){
    return {
        radius,
        draw:()=>{
            console.log("factory draw");
        }
    }
}
const vattom=createCircle(1)
console.log(vattom);

// constructor function

function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log("draw circle");
    }
}
Circle.call({},1)
Circle.apply({},[1])
const unda= new Circle(1)

// primitive type
let x=10
 let y=x
x=20
console.log(x);
console.log(y);

let number =10
function increase(number){
    number++;
}
increase(number )
console.log(number);


// refrence types

let q  ={value:20}
let z=q
q.value=40
console.log(q);
console.log(z);


let obj ={value:20}
function increase(obj){
    obj.value++;
}
increase(obj )
console.log(obj);

// abstraction
function Sphere(radius){
    this.radius=radius;
    this.defaultLocation={x:0,y:0};
    this.computeOptimumLocation=function(factory){
        //  ...
    }
    this.draw=function(){
        this.computeOptmimumLocation(0.1);
        console.log('draw');
    }
}
const sphere=new Sphere()

sphere.draw()



