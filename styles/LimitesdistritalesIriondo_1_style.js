var size = 0;
var placement = 'point';

var style_LimitesdistritalesIriondo_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "15.600000000000001px \'Microsoft YaHei\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,255,41,1.0)', lineDash: [1.14,0.22799999999999998], lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(178,223,138,0.12941176470588237)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
