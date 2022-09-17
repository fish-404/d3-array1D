import Array1D, * as array1D from "https://npmjs.com/package/d3-array1d";

let config = {
    selector: "#testArray1D"
    , width: 1000
    , boxLen: 50
    , margin: 10
    , dataSet: [
        1, 2, 3, 4, 5, 5, 7
    ]
    , lineColor: "black"
    , lineWidth: 2
    , fillColor: "white"
}

let testArray1D = new Array1D(config);
testArray1D.drawArray1D();