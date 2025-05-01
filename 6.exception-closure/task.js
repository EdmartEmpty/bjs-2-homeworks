function parseCount (string){
    if(isNaN(Number.parseFloat(string))) throw new Error("Невалидное значение");
    return Number.parseFloat(string);
}

function validateCount(string){
    try {
        return  parseCount (string);
    } catch (error) {
        return error;
    }
}

 class Triangle{
    constructor(a,b,c){
        this.a = a;
        this.b = b; 
        this.c = c;
        if(a+b < c || a+c < b || b + c < a) throw new Error("Треугольник с такими сторонами не существует");
        this._premetr = 0;
        this._area = 0;
    }

    get perimeter() {
        this._premetr = this.a+this.b+this.c;
        return  this._premetr;
    }

    get area(){
        let p = 0.5 * (this.a+this.b+this.c);
        this._area = Math.sqrt(p * (p-this.a)*(p-this.b)*(p-this.c)).toFixed(3);
        return +this._area;
    }
 }

 function getTriangle(a,b,c){
    try {
        return new Triangle(a,b,c);;
    } catch (error) {
       let ErrorTriangle = {
        _area: 0,
        _premetr: 0,
        get area(){
            this._area = "Ошибка! Треугольник не существует";
            return this._area;
        },
        get perimeter(){
            this._premetr = "Ошибка! Треугольник не существует";
            return this._premetr;
        }
       }
       return ErrorTriangle;
 }
}
