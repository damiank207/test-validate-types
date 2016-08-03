function validateTypes(){
    this.typ = function(elem){
        return (elem === null) ? "null" : (elem === undefined) ? "undefined" : elem.constructor.toString().replace("function ","").replace("() { [native code] }","").toLowerCase();
    }
}