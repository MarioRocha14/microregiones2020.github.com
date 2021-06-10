var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleEarth_1 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_CoordinacionAbasolo_3 = new ol.format.GeoJSON();
var features_CoordinacionAbasolo_3 = format_CoordinacionAbasolo_3.readFeatures(json_CoordinacionAbasolo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionAbasolo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionAbasolo_3.addFeatures(features_CoordinacionAbasolo_3);
var lyr_CoordinacionAbasolo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionAbasolo_3, 
                style: style_CoordinacionAbasolo_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionAbasolo_3.png" /> Coordinacion Abasolo'
            });
var format_CoordinacionAcambaro_4 = new ol.format.GeoJSON();
var features_CoordinacionAcambaro_4 = format_CoordinacionAcambaro_4.readFeatures(json_CoordinacionAcambaro_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionAcambaro_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionAcambaro_4.addFeatures(features_CoordinacionAcambaro_4);
var lyr_CoordinacionAcambaro_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionAcambaro_4, 
                style: style_CoordinacionAcambaro_4,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionAcambaro_4.png" /> Coordinacion Acambaro'
            });
var format_CoordinacionCelaya_5 = new ol.format.GeoJSON();
var features_CoordinacionCelaya_5 = format_CoordinacionCelaya_5.readFeatures(json_CoordinacionCelaya_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionCelaya_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionCelaya_5.addFeatures(features_CoordinacionCelaya_5);
var lyr_CoordinacionCelaya_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionCelaya_5, 
                style: style_CoordinacionCelaya_5,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionCelaya_5.png" /> Coordinacion Celaya'
            });
var format_CoordinacionDolores_6 = new ol.format.GeoJSON();
var features_CoordinacionDolores_6 = format_CoordinacionDolores_6.readFeatures(json_CoordinacionDolores_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionDolores_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionDolores_6.addFeatures(features_CoordinacionDolores_6);
var lyr_CoordinacionDolores_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionDolores_6, 
                style: style_CoordinacionDolores_6,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionDolores_6.png" /> Coordinacion Dolores'
            });
var format_CoordinacionIrapuato_7 = new ol.format.GeoJSON();
var features_CoordinacionIrapuato_7 = format_CoordinacionIrapuato_7.readFeatures(json_CoordinacionIrapuato_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionIrapuato_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionIrapuato_7.addFeatures(features_CoordinacionIrapuato_7);
var lyr_CoordinacionIrapuato_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionIrapuato_7, 
                style: style_CoordinacionIrapuato_7,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionIrapuato_7.png" /> Coordinacion Irapuato'
            });
var format_CoordinacionLeon_8 = new ol.format.GeoJSON();
var features_CoordinacionLeon_8 = format_CoordinacionLeon_8.readFeatures(json_CoordinacionLeon_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionLeon_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionLeon_8.addFeatures(features_CoordinacionLeon_8);
var lyr_CoordinacionLeon_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionLeon_8, 
                style: style_CoordinacionLeon_8,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionLeon_8.png" /> Coordinacion Leon'
            });
var format_CoordinacionPenjamo_9 = new ol.format.GeoJSON();
var features_CoordinacionPenjamo_9 = format_CoordinacionPenjamo_9.readFeatures(json_CoordinacionPenjamo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionPenjamo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionPenjamo_9.addFeatures(features_CoordinacionPenjamo_9);
var lyr_CoordinacionPenjamo_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionPenjamo_9, 
                style: style_CoordinacionPenjamo_9,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionPenjamo_9.png" /> Coordinacion Penjamo'
            });
var format_CoordinacionPurisima_10 = new ol.format.GeoJSON();
var features_CoordinacionPurisima_10 = format_CoordinacionPurisima_10.readFeatures(json_CoordinacionPurisima_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionPurisima_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionPurisima_10.addFeatures(features_CoordinacionPurisima_10);
var lyr_CoordinacionPurisima_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionPurisima_10, 
                style: style_CoordinacionPurisima_10,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionPurisima_10.png" /> Coordinacion Purisima'
            });
var format_CoordinacionSalamanca_11 = new ol.format.GeoJSON();
var features_CoordinacionSalamanca_11 = format_CoordinacionSalamanca_11.readFeatures(json_CoordinacionSalamanca_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSalamanca_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSalamanca_11.addFeatures(features_CoordinacionSalamanca_11);
var lyr_CoordinacionSalamanca_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSalamanca_11, 
                style: style_CoordinacionSalamanca_11,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSalamanca_11.png" /> Coordinacion Salamanca'
            });
var format_CoordinacionSalvatierra_12 = new ol.format.GeoJSON();
var features_CoordinacionSalvatierra_12 = format_CoordinacionSalvatierra_12.readFeatures(json_CoordinacionSalvatierra_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSalvatierra_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSalvatierra_12.addFeatures(features_CoordinacionSalvatierra_12);
var lyr_CoordinacionSalvatierra_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSalvatierra_12, 
                style: style_CoordinacionSalvatierra_12,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSalvatierra_12.png" /> Coordinacion Salvatierra'
            });
var format_CoordinacionSanFelipe_13 = new ol.format.GeoJSON();
var features_CoordinacionSanFelipe_13 = format_CoordinacionSanFelipe_13.readFeatures(json_CoordinacionSanFelipe_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanFelipe_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanFelipe_13.addFeatures(features_CoordinacionSanFelipe_13);
var lyr_CoordinacionSanFelipe_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanFelipe_13, 
                style: style_CoordinacionSanFelipe_13,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSanFelipe_13.png" /> Coordinacion San Felipe'
            });
var format_CoordinacionSanJoseIturbide_14 = new ol.format.GeoJSON();
var features_CoordinacionSanJoseIturbide_14 = format_CoordinacionSanJoseIturbide_14.readFeatures(json_CoordinacionSanJoseIturbide_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanJoseIturbide_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanJoseIturbide_14.addFeatures(features_CoordinacionSanJoseIturbide_14);
var lyr_CoordinacionSanJoseIturbide_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanJoseIturbide_14, 
                style: style_CoordinacionSanJoseIturbide_14,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSanJoseIturbide_14.png" /> Coordinacion San Jose Iturbide'
            });
var format_CoordinacionSanLuisdelaPaz_15 = new ol.format.GeoJSON();
var features_CoordinacionSanLuisdelaPaz_15 = format_CoordinacionSanLuisdelaPaz_15.readFeatures(json_CoordinacionSanLuisdelaPaz_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanLuisdelaPaz_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanLuisdelaPaz_15.addFeatures(features_CoordinacionSanLuisdelaPaz_15);
var lyr_CoordinacionSanLuisdelaPaz_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanLuisdelaPaz_15, 
                style: style_CoordinacionSanLuisdelaPaz_15,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSanLuisdelaPaz_15.png" /> Coordinacion San Luis de la Paz'
            });
var format_CoordinacionSanMiguelAllende_16 = new ol.format.GeoJSON();
var features_CoordinacionSanMiguelAllende_16 = format_CoordinacionSanMiguelAllende_16.readFeatures(json_CoordinacionSanMiguelAllende_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanMiguelAllende_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanMiguelAllende_16.addFeatures(features_CoordinacionSanMiguelAllende_16);
var lyr_CoordinacionSanMiguelAllende_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanMiguelAllende_16, 
                style: style_CoordinacionSanMiguelAllende_16,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSanMiguelAllende_16.png" /> Coordinacion San Miguel Allende'
            });
var format_CoordinacionSilao_17 = new ol.format.GeoJSON();
var features_CoordinacionSilao_17 = format_CoordinacionSilao_17.readFeatures(json_CoordinacionSilao_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSilao_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSilao_17.addFeatures(features_CoordinacionSilao_17);
var lyr_CoordinacionSilao_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSilao_17, 
                style: style_CoordinacionSilao_17,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSilao_17.png" /> Coordinacion Silao'
            });
var format_CoordinacionValledeSantiago_18 = new ol.format.GeoJSON();
var features_CoordinacionValledeSantiago_18 = format_CoordinacionValledeSantiago_18.readFeatures(json_CoordinacionValledeSantiago_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionValledeSantiago_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionValledeSantiago_18.addFeatures(features_CoordinacionValledeSantiago_18);
var lyr_CoordinacionValledeSantiago_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionValledeSantiago_18, 
                style: style_CoordinacionValledeSantiago_18,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionValledeSantiago_18.png" /> Coordinacion Valle de Santiago'
            });
var format_CoordinacionVillagran_19 = new ol.format.GeoJSON();
var features_CoordinacionVillagran_19 = format_CoordinacionVillagran_19.readFeatures(json_CoordinacionVillagran_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionVillagran_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionVillagran_19.addFeatures(features_CoordinacionVillagran_19);
var lyr_CoordinacionVillagran_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionVillagran_19, 
                style: style_CoordinacionVillagran_19,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionVillagran_19.png" /> Coordinacion Villagran'
            });
var format_CoordinacionYuriria_20 = new ol.format.GeoJSON();
var features_CoordinacionYuriria_20 = format_CoordinacionYuriria_20.readFeatures(json_CoordinacionYuriria_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionYuriria_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionYuriria_20.addFeatures(features_CoordinacionYuriria_20);
var lyr_CoordinacionYuriria_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionYuriria_20, 
                style: style_CoordinacionYuriria_20,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionYuriria_20.png" /> Coordinacion Yuriria'
            });
var format_Microregiones2020_21 = new ol.format.GeoJSON();
var features_Microregiones2020_21 = format_Microregiones2020_21.readFeatures(json_Microregiones2020_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Microregiones2020_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Microregiones2020_21.addFeatures(features_Microregiones2020_21);
var lyr_Microregiones2020_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Microregiones2020_21, 
                style: style_Microregiones2020_21,
                interactive: true,
                title: '<img src="styles/legend/Microregiones2020_21.png" /> Microregiones 2020'
            });
var group_Coordinaciones = new ol.layer.Group({
                                layers: [lyr_CoordinacionAbasolo_3,lyr_CoordinacionAcambaro_4,lyr_CoordinacionCelaya_5,lyr_CoordinacionDolores_6,lyr_CoordinacionIrapuato_7,lyr_CoordinacionLeon_8,lyr_CoordinacionPenjamo_9,lyr_CoordinacionPurisima_10,lyr_CoordinacionSalamanca_11,lyr_CoordinacionSalvatierra_12,lyr_CoordinacionSanFelipe_13,lyr_CoordinacionSanJoseIturbide_14,lyr_CoordinacionSanLuisdelaPaz_15,lyr_CoordinacionSanMiguelAllende_16,lyr_CoordinacionSilao_17,lyr_CoordinacionValledeSantiago_18,lyr_CoordinacionVillagran_19,lyr_CoordinacionYuriria_20,],
                                title: "Coordinaciones"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_GoogleEarth_1,lyr_GoogleSatellite_2,],
                                title: "Mapas Base"});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleEarth_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_CoordinacionAbasolo_3.setVisible(true);lyr_CoordinacionAcambaro_4.setVisible(true);lyr_CoordinacionCelaya_5.setVisible(true);lyr_CoordinacionDolores_6.setVisible(true);lyr_CoordinacionIrapuato_7.setVisible(true);lyr_CoordinacionLeon_8.setVisible(true);lyr_CoordinacionPenjamo_9.setVisible(true);lyr_CoordinacionPurisima_10.setVisible(true);lyr_CoordinacionSalamanca_11.setVisible(true);lyr_CoordinacionSalvatierra_12.setVisible(true);lyr_CoordinacionSanFelipe_13.setVisible(true);lyr_CoordinacionSanJoseIturbide_14.setVisible(true);lyr_CoordinacionSanLuisdelaPaz_15.setVisible(true);lyr_CoordinacionSanMiguelAllende_16.setVisible(true);lyr_CoordinacionSilao_17.setVisible(true);lyr_CoordinacionValledeSantiago_18.setVisible(true);lyr_CoordinacionVillagran_19.setVisible(true);lyr_CoordinacionYuriria_20.setVisible(true);lyr_Microregiones2020_21.setVisible(true);
var layersList = [group_MapasBase,group_Coordinaciones,lyr_Microregiones2020_21];
lyr_CoordinacionAbasolo_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionAcambaro_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionCelaya_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionDolores_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionIrapuato_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionLeon_8.set('fieldAliases', {'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'nom_micro': 'nom_micro', 'cozo': 'cozo', 'region': 'region', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionPenjamo_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionPurisima_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSalamanca_11.set('fieldAliases', {'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSalvatierra_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSanFelipe_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSanJoseIturbide_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSanLuisdelaPaz_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSanMiguelAllende_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSilao_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionValledeSantiago_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionVillagran_19.set('fieldAliases', {'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionYuriria_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_Microregiones2020_21.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionAbasolo_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionAcambaro_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionCelaya_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionDolores_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionIrapuato_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionLeon_8.set('fieldImages', {'cat': 'Range', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'nom_micro': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionPenjamo_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionPurisima_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSalamanca_11.set('fieldImages', {'cat': 'Range', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSalvatierra_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSanFelipe_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSanJoseIturbide_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSanLuisdelaPaz_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSanMiguelAllende_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSilao_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionValledeSantiago_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionVillagran_19.set('fieldImages', {'cat': 'Range', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionYuriria_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Microregiones2020_21.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionAbasolo_3.set('fieldLabels', {});
lyr_CoordinacionAcambaro_4.set('fieldLabels', {});
lyr_CoordinacionCelaya_5.set('fieldLabels', {});
lyr_CoordinacionDolores_6.set('fieldLabels', {});
lyr_CoordinacionIrapuato_7.set('fieldLabels', {});
lyr_CoordinacionLeon_8.set('fieldLabels', {});
lyr_CoordinacionPenjamo_9.set('fieldLabels', {});
lyr_CoordinacionPurisima_10.set('fieldLabels', {});
lyr_CoordinacionSalamanca_11.set('fieldLabels', {});
lyr_CoordinacionSalvatierra_12.set('fieldLabels', {});
lyr_CoordinacionSanFelipe_13.set('fieldLabels', {});
lyr_CoordinacionSanJoseIturbide_14.set('fieldLabels', {});
lyr_CoordinacionSanLuisdelaPaz_15.set('fieldLabels', {});
lyr_CoordinacionSanMiguelAllende_16.set('fieldLabels', {});
lyr_CoordinacionSilao_17.set('fieldLabels', {});
lyr_CoordinacionValledeSantiago_18.set('fieldLabels', {});
lyr_CoordinacionVillagran_19.set('fieldLabels', {});
lyr_CoordinacionYuriria_20.set('fieldLabels', {});
lyr_Microregiones2020_21.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_Microregiones2020_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});