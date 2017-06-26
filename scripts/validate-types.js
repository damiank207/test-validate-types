this.typ = function(elem){
    return (elem === null) ? "null" : (elem === undefined) ? "undefined" : elem.constructor.toString().replace("function ","").replace(/\n|\s/g,"").replace("(){[nativecode]}","").toLowerCase();
}
