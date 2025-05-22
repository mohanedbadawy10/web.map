var wms_layers = [];


        var lyr_basemap_0 = new ol.layer.Tile({
            'title': 'basemap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_____1 = new ol.format.GeoJSON();
var features_____1 = format_____1.readFeatures(json_____1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_____1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_____1.addFeatures(features_____1);
var lyr_____1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_____1, 
                style: style_____1,
                popuplayertitle: 'مؤشرات_التربه_في_مشتهر',
                interactive: true,
                title: '<img src="styles/legend/____1.png" /> مؤشرات_التربه_في_مشتهر'
            });

lyr_basemap_0.setVisible(true);lyr_____1.setVisible(true);
var layersList = [lyr_basemap_0,lyr_____1];
lyr_____1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'صحه': 'صحه', 'رطوبه': 'رطوبه', });
lyr_____1.set('fieldImages', {'Id': '', 'gridcode': '', 'صحه': '', 'رطوبه': '', });
lyr_____1.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'صحه': 'inline label - visible with data', 'رطوبه': 'inline label - visible with data', });
lyr_____1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});