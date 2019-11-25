import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import './StreetMap.scss';

const StreetMap = () => {
	const id = "map";
	const [latlng, setLatlng] = useState([57.1497, -2.0943]);
	
	const loadMap = () => {
		const osm = L.map(id, {
			center: latlng,
			zoom: 13,
			layers: [
				L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
					attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
				}),
			],
		});

		L.marker(latlng).addTo(osm);
	};
	
	const moveMarker = () => {
		
	};

	useEffect(loadMap, []);
	useEffect(moveMarker, [latlng]);

	return (
		<div id={id} className="map" onClick={e => setLatlng(e.latlng)}></div>
	);
};

export default StreetMap;
