function getPi(){
    var value = 4;
    var znam = 3;
    var bool = false;
    while (value != Math.PI && znam != 0) {
        if (bool){
            value = value + 4/znam;
            bool = false;
        } else {
            value = value - 4/znam;
            bool = true;
        }
        znam = znam +2;
        iter++;
        t--; 
        if (t == 0) {
            var out = Math.abs(value - Math.PI);
            var timeGlobal = (Date.now() - startGlobal) / 1000
            console.log(out+" --- "+iter+" --- "+timeGlobal+" sec.");  
            t = 1000000000;  
        }
    }
    return value;
}

function go(){
    var start = Date.now();
    var result = getPi()-Math.PI;
    var finish = Date.now();
    var time = finish - start;
    console.log(time/1000 + "  ===  "+ result + " itercount: "+iter);
}

var startGlobal = Date.now();
var t = 1000000000;
var iter = 0;
go();
