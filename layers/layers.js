var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LimitesdistritalesIriondo_1 = new ol.format.GeoJSON();
var features_LimitesdistritalesIriondo_1 = format_LimitesdistritalesIriondo_1.readFeatures(json_LimitesdistritalesIriondo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesdistritalesIriondo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesdistritalesIriondo_1.addFeatures(features_LimitesdistritalesIriondo_1);
var lyr_LimitesdistritalesIriondo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesdistritalesIriondo_1, 
                style: style_LimitesdistritalesIriondo_1,
                popuplayertitle: 'Limites distritales Iriondo',
                interactive: false,
                title: '<img src="styles/legend/LimitesdistritalesIriondo_1.png" /> Limites distritales Iriondo'
            });
var format_EjidosurbanosIriondo_2 = new ol.format.GeoJSON();
var features_EjidosurbanosIriondo_2 = format_EjidosurbanosIriondo_2.readFeatures(json_EjidosurbanosIriondo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EjidosurbanosIriondo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EjidosurbanosIriondo_2.addFeatures(features_EjidosurbanosIriondo_2);
var lyr_EjidosurbanosIriondo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EjidosurbanosIriondo_2, 
                style: style_EjidosurbanosIriondo_2,
                popuplayertitle: 'Ejidos urbanos Iriondo',
                interactive: false,
                title: '<img src="styles/legend/EjidosurbanosIriondo_2.png" /> Ejidos urbanos Iriondo'
            });
var format_puentesIriondo_3 = new ol.format.GeoJSON();
var features_puentesIriondo_3 = format_puentesIriondo_3.readFeatures(json_puentesIriondo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puentesIriondo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puentesIriondo_3.addFeatures(features_puentesIriondo_3);
var lyr_puentesIriondo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puentesIriondo_3, 
                style: style_puentesIriondo_3,
                popuplayertitle: 'puentes Iriondo',
                interactive: false,
                title: '<img src="styles/legend/puentesIriondo_3.png" /> puentes Iriondo'
            });
var format_CaminoscomunalesIriondo_4 = new ol.format.GeoJSON();
var features_CaminoscomunalesIriondo_4 = format_CaminoscomunalesIriondo_4.readFeatures(json_CaminoscomunalesIriondo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaminoscomunalesIriondo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminoscomunalesIriondo_4.addFeatures(features_CaminoscomunalesIriondo_4);
var lyr_CaminoscomunalesIriondo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaminoscomunalesIriondo_4, 
                style: style_CaminoscomunalesIriondo_4,
                popuplayertitle: 'Caminos comunales - Iriondo',
                interactive: false,
                title: '<img src="styles/legend/CaminoscomunalesIriondo_4.png" /> Caminos comunales - Iriondo'
            });
var format_redvialIriondo_5 = new ol.format.GeoJSON();
var features_redvialIriondo_5 = format_redvialIriondo_5.readFeatures(json_redvialIriondo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_redvialIriondo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_redvialIriondo_5.addFeatures(features_redvialIriondo_5);
var lyr_redvialIriondo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_redvialIriondo_5, 
                style: style_redvialIriondo_5,
                popuplayertitle: 'red vial - Iriondo',
                interactive: false,
                title: '<img src="styles/legend/redvialIriondo_5.png" /> red vial - Iriondo'
            });
var format_cursosdeaguaIriondo_6 = new ol.format.GeoJSON();
var features_cursosdeaguaIriondo_6 = format_cursosdeaguaIriondo_6.readFeatures(json_cursosdeaguaIriondo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cursosdeaguaIriondo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cursosdeaguaIriondo_6.addFeatures(features_cursosdeaguaIriondo_6);
var lyr_cursosdeaguaIriondo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cursosdeaguaIriondo_6, 
                style: style_cursosdeaguaIriondo_6,
                popuplayertitle: 'cursos de agua - Iriondo',
                interactive: false,
                title: '<img src="styles/legend/cursosdeaguaIriondo_6.png" /> cursos de agua - Iriondo'
            });
var format_CanalesIriondo_7 = new ol.format.GeoJSON();
var features_CanalesIriondo_7 = format_CanalesIriondo_7.readFeatures(json_CanalesIriondo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanalesIriondo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanalesIriondo_7.addFeatures(features_CanalesIriondo_7);
var lyr_CanalesIriondo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanalesIriondo_7, 
                style: style_CanalesIriondo_7,
                popuplayertitle: 'Canales - Iriondo',
                interactive: false,
                title: '<img src="styles/legend/CanalesIriondo_7.png" /> Canales - Iriondo'
            });
var format_Huellasvariadas_8 = new ol.format.GeoJSON();
var features_Huellasvariadas_8 = format_Huellasvariadas_8.readFeatures(json_Huellasvariadas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellasvariadas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellasvariadas_8.addFeatures(features_Huellasvariadas_8);
var lyr_Huellasvariadas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellasvariadas_8, 
                style: style_Huellasvariadas_8,
                popuplayertitle: 'Huellas variadas',
                interactive: true,
                title: '<img src="styles/legend/Huellasvariadas_8.png" /> Huellas variadas'
            });
var format_Huellasdelaenergia_9 = new ol.format.GeoJSON();
var features_Huellasdelaenergia_9 = format_Huellasdelaenergia_9.readFeatures(json_Huellasdelaenergia_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellasdelaenergia_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellasdelaenergia_9.addFeatures(features_Huellasdelaenergia_9);
var lyr_Huellasdelaenergia_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellasdelaenergia_9, 
                style: style_Huellasdelaenergia_9,
                popuplayertitle: 'Huellas de la energia',
                interactive: true,
                title: '<img src="styles/legend/Huellasdelaenergia_9.png" /> Huellas de la energia'
            });
var format_Huellasdelainfraestructura_10 = new ol.format.GeoJSON();
var features_Huellasdelainfraestructura_10 = format_Huellasdelainfraestructura_10.readFeatures(json_Huellasdelainfraestructura_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellasdelainfraestructura_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellasdelainfraestructura_10.addFeatures(features_Huellasdelainfraestructura_10);
var lyr_Huellasdelainfraestructura_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellasdelainfraestructura_10, 
                style: style_Huellasdelainfraestructura_10,
                popuplayertitle: 'Huellas de la infraestructura',
                interactive: true,
                title: '<img src="styles/legend/Huellasdelainfraestructura_10.png" /> Huellas de la infraestructura'
            });
var format_Huellasdefamiliasypersonalidades_11 = new ol.format.GeoJSON();
var features_Huellasdefamiliasypersonalidades_11 = format_Huellasdefamiliasypersonalidades_11.readFeatures(json_Huellasdefamiliasypersonalidades_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellasdefamiliasypersonalidades_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellasdefamiliasypersonalidades_11.addFeatures(features_Huellasdefamiliasypersonalidades_11);
var lyr_Huellasdefamiliasypersonalidades_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellasdefamiliasypersonalidades_11, 
                style: style_Huellasdefamiliasypersonalidades_11,
                popuplayertitle: 'Huellas de familias y personalidades',
                interactive: true,
                title: '<img src="styles/legend/Huellasdefamiliasypersonalidades_11.png" /> Huellas de familias y personalidades'
            });
var format_Huellasdeltrabajo_12 = new ol.format.GeoJSON();
var features_Huellasdeltrabajo_12 = format_Huellasdeltrabajo_12.readFeatures(json_Huellasdeltrabajo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellasdeltrabajo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellasdeltrabajo_12.addFeatures(features_Huellasdeltrabajo_12);
var lyr_Huellasdeltrabajo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellasdeltrabajo_12, 
                style: style_Huellasdeltrabajo_12,
                popuplayertitle: 'Huellas del trabajo ',
                interactive: true,
                title: '<img src="styles/legend/Huellasdeltrabajo_12.png" /> Huellas del trabajo '
            });
var format_Huellasdeltransporte_13 = new ol.format.GeoJSON();
var features_Huellasdeltransporte_13 = format_Huellasdeltransporte_13.readFeatures(json_Huellasdeltransporte_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellasdeltransporte_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellasdeltransporte_13.addFeatures(features_Huellasdeltransporte_13);
var lyr_Huellasdeltransporte_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellasdeltransporte_13, 
                style: style_Huellasdeltransporte_13,
                popuplayertitle: 'Huellas del transporte',
                interactive: true,
                title: '<img src="styles/legend/Huellasdeltransporte_13.png" /> Huellas del transporte'
            });
var format_Huellasdelacomunicacin_14 = new ol.format.GeoJSON();
var features_Huellasdelacomunicacin_14 = format_Huellasdelacomunicacin_14.readFeatures(json_Huellasdelacomunicacin_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huellasdelacomunicacin_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huellasdelacomunicacin_14.addFeatures(features_Huellasdelacomunicacin_14);
var lyr_Huellasdelacomunicacin_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huellasdelacomunicacin_14, 
                style: style_Huellasdelacomunicacin_14,
                popuplayertitle: 'Huellas de la comunicación',
                interactive: true,
                title: '<img src="styles/legend/Huellasdelacomunicacin_14.png" /> Huellas de la comunicación'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_LimitesdistritalesIriondo_1.setVisible(true);lyr_EjidosurbanosIriondo_2.setVisible(false);lyr_puentesIriondo_3.setVisible(false);lyr_CaminoscomunalesIriondo_4.setVisible(true);lyr_redvialIriondo_5.setVisible(true);lyr_cursosdeaguaIriondo_6.setVisible(true);lyr_CanalesIriondo_7.setVisible(true);lyr_Huellasvariadas_8.setVisible(true);lyr_Huellasdelaenergia_9.setVisible(true);lyr_Huellasdelainfraestructura_10.setVisible(true);lyr_Huellasdefamiliasypersonalidades_11.setVisible(true);lyr_Huellasdeltrabajo_12.setVisible(true);lyr_Huellasdeltransporte_13.setVisible(true);lyr_Huellasdelacomunicacin_14.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_LimitesdistritalesIriondo_1,lyr_EjidosurbanosIriondo_2,lyr_puentesIriondo_3,lyr_CaminoscomunalesIriondo_4,lyr_redvialIriondo_5,lyr_cursosdeaguaIriondo_6,lyr_CanalesIriondo_7,lyr_Huellasvariadas_8,lyr_Huellasdelaenergia_9,lyr_Huellasdelainfraestructura_10,lyr_Huellasdefamiliasypersonalidades_11,lyr_Huellasdeltrabajo_12,lyr_Huellasdeltransporte_13,lyr_Huellasdelacomunicacin_14];
lyr_LimitesdistritalesIriondo_1.set('fieldAliases', {'DISTRITO': 'DISTRITO', 'NOMBRE': 'NOMBRE', });
lyr_EjidosurbanosIriondo_2.set('fieldAliases', {'Objeto': 'Objeto', 'FNA': 'FNA', 'GNA': 'GNA', 'NAm': 'NAm', 'SAG': 'SAG', });
lyr_puentesIriondo_3.set('fieldAliases', {'Objeto': 'Objeto', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'FUN': 'FUN', 'SAG': 'SAG', });
lyr_CaminoscomunalesIriondo_4.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', });
lyr_redvialIriondo_5.set('fieldAliases', {'Objeto': 'Objeto', 'FNA1': 'FNA1', 'GNA1': 'GNA1', 'NAM1': 'NAM1', 'FNA2': 'FNA2', 'GNA2': 'GNA2', 'NAM2': 'NAM2', 'FUN': 'FUN', 'RST': 'RST', 'TYP': 'TYP', 'MES': 'MES', 'HCT': 'HCT', 'LOC': 'LOC', 'SAG': 'SAG', });
lyr_cursosdeaguaIriondo_6.set('fieldAliases', {'UNION': 'UNION', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'REGIMEN': 'REGIMEN', 'NAVEGABILI': 'NAVEGABILI', 'PROVINCIA': 'PROVINCIA', 'PAIS': 'PAIS', 'OBSERVACIO': 'OBSERVACIO', 'HOJA': 'HOJA', 'FUENTE': 'FUENTE', });
lyr_CanalesIriondo_7.set('fieldAliases', {'ID': 'ID', 'ENTITY': 'ENTITY', 'TEXTO': 'TEXTO', });
lyr_Huellasvariadas_8.set('fieldAliases', {'id': 'id', 'Titulo': 'Titulo', 'Ano': 'Ano', 'Fuente': 'Fuente', 'Pag': 'Pag', 'Link': 'Link', 'Fecha': 'Fecha', 'Realto': 'Realto', });
lyr_Huellasdelaenergia_9.set('fieldAliases', {'id': 'id', 'Ano': 'Ano', 'Fecha': 'Fecha', 'Fuente': 'Fuente', 'Titulo': 'Titulo', 'Link': 'Link', 'Relato': 'Relato', 'PAg': 'PAg', });
lyr_Huellasdelainfraestructura_10.set('fieldAliases', {'id': 'id', 'Ano': 'Ano', 'Fecha': 'Fecha', 'Fuente': 'Fuente', 'Pag': 'Pag', 'Titulo': 'Titulo', 'Link': 'Link', 'Relato': 'Relato', });
lyr_Huellasdefamiliasypersonalidades_11.set('fieldAliases', {'id': 'id', 'Ano': 'Ano', 'Fecha': 'Fecha', 'Fuente': 'Fuente', 'Titulo': 'Titulo', 'Pag': 'Pag', 'Relato': 'Relato', 'Link': 'Link', });
lyr_Huellasdeltrabajo_12.set('fieldAliases', {'id': 'id', 'Ano': 'Ano', 'Fecha': 'Fecha', 'Fuente': 'Fuente', 'Titulo': 'Titulo', 'Pag': 'Pag', 'Link': 'Link', 'Relato': 'Relato', });
lyr_Huellasdeltransporte_13.set('fieldAliases', {'id': 'id', 'Ano': 'Ano', 'Fechas': 'Fechas', 'pag': 'pag', 'Link': 'Link', 'Titulo': 'Titulo', 'Fuente': 'Fuente', 'Relato': 'Relato', });
lyr_Huellasdelacomunicacin_14.set('fieldAliases', {'id': 'id', 'A?o': 'A?o', 'Pág libro': 'Pág libro', 'Link': 'Link', 'Fecha': 'Fecha', 'Fuente': 'Fuente', 'Titulo': 'Titulo', 'Relato': 'Relato', });
lyr_LimitesdistritalesIriondo_1.set('fieldImages', {'DISTRITO': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_EjidosurbanosIriondo_2.set('fieldImages', {'Objeto': 'TextEdit', 'FNA': 'TextEdit', 'GNA': 'TextEdit', 'NAm': 'TextEdit', 'SAG': 'TextEdit', });
lyr_puentesIriondo_3.set('fieldImages', {'Objeto': 'TextEdit', 'FNA': 'TextEdit', 'GNA': 'TextEdit', 'NAM': 'TextEdit', 'FUN': 'TextEdit', 'SAG': 'TextEdit', });
lyr_CaminoscomunalesIriondo_4.set('fieldImages', {'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_redvialIriondo_5.set('fieldImages', {'Objeto': '', 'FNA1': '', 'GNA1': '', 'NAM1': '', 'FNA2': '', 'GNA2': '', 'NAM2': '', 'FUN': '', 'RST': '', 'TYP': '', 'MES': '', 'HCT': '', 'LOC': '', 'SAG': '', });
lyr_cursosdeaguaIriondo_6.set('fieldImages', {'UNION': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'REGIMEN': 'TextEdit', 'NAVEGABILI': 'TextEdit', 'PROVINCIA': 'TextEdit', 'PAIS': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'HOJA': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_CanalesIriondo_7.set('fieldImages', {'ID': 'TextEdit', 'ENTITY': 'TextEdit', 'TEXTO': 'TextEdit', });
lyr_Huellasvariadas_8.set('fieldImages', {'id': 'TextEdit', 'Titulo': 'TextEdit', 'Ano': 'Range', 'Fuente': 'TextEdit', 'Pag': 'Range', 'Link': 'TextEdit', 'Fecha': 'DateTime', 'Realto': 'TextEdit', });
lyr_Huellasdelaenergia_9.set('fieldImages', {'id': 'TextEdit', 'Ano': '', 'Fecha': '', 'Fuente': '', 'Titulo': '', 'Link': '', 'Relato': '', 'PAg': '', });
lyr_Huellasdelainfraestructura_10.set('fieldImages', {'id': 'TextEdit', 'Ano': '', 'Fecha': '', 'Fuente': '', 'Pag': '', 'Titulo': '', 'Link': '', 'Relato': '', });
lyr_Huellasdefamiliasypersonalidades_11.set('fieldImages', {'id': 'TextEdit', 'Ano': '', 'Fecha': '', 'Fuente': '', 'Titulo': '', 'Pag': '', 'Relato': '', 'Link': '', });
lyr_Huellasdeltrabajo_12.set('fieldImages', {'id': 'TextEdit', 'Ano': '', 'Fecha': '', 'Fuente': '', 'Titulo': '', 'Pag': '', 'Link': '', 'Relato': '', });
lyr_Huellasdeltransporte_13.set('fieldImages', {'id': 'TextEdit', 'Ano': '', 'Fechas': '', 'pag': '', 'Link': '', 'Titulo': '', 'Fuente': '', 'Relato': '', });
lyr_Huellasdelacomunicacin_14.set('fieldImages', {'id': 'TextEdit', 'A?o': '', 'Pág libro': '', 'Link': '', 'Fecha': '', 'Fuente': '', 'Titulo': '', 'Relato': '', });
lyr_LimitesdistritalesIriondo_1.set('fieldLabels', {'DISTRITO': 'no label', 'NOMBRE': 'no label', });
lyr_EjidosurbanosIriondo_2.set('fieldLabels', {'Objeto': 'no label', 'FNA': 'no label', 'GNA': 'no label', 'NAm': 'no label', 'SAG': 'no label', });
lyr_puentesIriondo_3.set('fieldLabels', {'Objeto': 'no label', 'FNA': 'no label', 'GNA': 'no label', 'NAM': 'no label', 'FUN': 'no label', 'SAG': 'no label', });
lyr_CaminoscomunalesIriondo_4.set('fieldLabels', {'NOMBRE': 'no label', 'TIPO': 'no label', });
lyr_redvialIriondo_5.set('fieldLabels', {'Objeto': 'no label', 'FNA1': 'no label', 'GNA1': 'no label', 'NAM1': 'no label', 'FNA2': 'no label', 'GNA2': 'no label', 'NAM2': 'no label', 'FUN': 'no label', 'RST': 'no label', 'TYP': 'no label', 'MES': 'no label', 'HCT': 'no label', 'LOC': 'no label', 'SAG': 'no label', });
lyr_cursosdeaguaIriondo_6.set('fieldLabels', {'UNION': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'REGIMEN': 'no label', 'NAVEGABILI': 'no label', 'PROVINCIA': 'no label', 'PAIS': 'no label', 'OBSERVACIO': 'no label', 'HOJA': 'no label', 'FUENTE': 'no label', });
lyr_CanalesIriondo_7.set('fieldLabels', {'ID': 'no label', 'ENTITY': 'no label', 'TEXTO': 'no label', });
lyr_Huellasvariadas_8.set('fieldLabels', {'id': 'hidden field', 'Titulo': 'no label', 'Ano': 'no label', 'Fuente': 'no label', 'Pag': 'hidden field', 'Link': 'no label', 'Fecha': 'no label', 'Realto': 'no label', });
lyr_Huellasdelaenergia_9.set('fieldLabels', {'id': 'hidden field', 'Ano': 'no label', 'Fecha': 'no label', 'Fuente': 'no label', 'Titulo': 'no label', 'Link': 'no label', 'Relato': 'no label', 'PAg': 'hidden field', });
lyr_Huellasdelainfraestructura_10.set('fieldLabels', {'id': 'hidden field', 'Ano': 'no label', 'Fecha': 'no label', 'Fuente': 'no label', 'Pag': 'hidden field', 'Titulo': 'no label', 'Link': 'no label', 'Relato': 'no label', });
lyr_Huellasdefamiliasypersonalidades_11.set('fieldLabels', {'id': 'hidden field', 'Ano': 'no label', 'Fecha': 'no label', 'Fuente': 'no label', 'Titulo': 'no label', 'Pag': 'hidden field', 'Relato': 'no label', 'Link': 'no label', });
lyr_Huellasdeltrabajo_12.set('fieldLabels', {'id': 'hidden field', 'Ano': 'no label', 'Fecha': 'no label', 'Fuente': 'no label', 'Titulo': 'no label', 'Pag': 'hidden field', 'Link': 'no label', 'Relato': 'no label', });
lyr_Huellasdeltransporte_13.set('fieldLabels', {'id': 'hidden field', 'Ano': 'no label', 'Fechas': 'no label', 'pag': 'hidden field', 'Link': 'no label', 'Titulo': 'no label', 'Fuente': 'no label', 'Relato': 'no label', });
lyr_Huellasdelacomunicacin_14.set('fieldLabels', {'id': 'hidden field', 'A?o': 'no label', 'Pág libro': 'hidden field', 'Link': 'no label', 'Fecha': 'no label', 'Fuente': 'no label', 'Titulo': 'no label', 'Relato': 'no label', });
lyr_Huellasdelacomunicacin_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});