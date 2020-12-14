var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Company1_1 = new ol.format.GeoJSON();
var features_Company1_1 = format_Company1_1.readFeatures(json_Company1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Company1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Company1_1.addFeatures(features_Company1_1);
var lyr_Company1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Company1_1, 
                style: style_Company1_1,
                interactive: true,
                title: '<img src="styles/legend/Company1_1.png" /> Company1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Company1_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Company1_1];
lyr_Company1_1.set('fieldAliases', {'Company': 'Company', 'Phone_Number': 'Phone_Number', 'HR': 'HR', 'Email_Id': 'Email_Id', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', });
lyr_Company1_1.set('fieldImages', {'Company': 'TextEdit', 'Phone_Number': 'TextEdit', 'HR': 'TextEdit', 'Email_Id': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', });
lyr_Company1_1.set('fieldLabels', {'Company': 'header label', 'Phone_Number': 'inline label', 'HR': 'inline label', 'Email_Id': 'inline label', 'Location': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'field_8': 'inline label', 'field_9': 'inline label', 'field_10': 'inline label', 'field_11': 'inline label', 'field_12': 'inline label', 'field_13': 'inline label', });
lyr_Company1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});