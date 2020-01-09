import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import './StreetMap.scss';

const StreetMap = () => {
	const id = "map";
	const [latlng, setLatlng] = useState([57.1497, -2.0943]);
	
	const mapRef = useRef(null);
	useEffect(() => {
		mapRef.current = L.map(id, {
			center: [57.1497, -2.0943],
			zoom: 13,
			layers: [
				L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
					attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
				}),
			],
		});
	}, []);
	
	const markerRef = useRef(null);
	useEffect(() => {
		markerRef.current = L.marker(latlng).addTo(mapRef.current);
	}, [latlng]);

	const clickMap = e => {
		console.log(e);
		const { lat, lng } = mapRef.current.mouseEventToLatLng(e.originalEvent);
		console.log(lat + ', ' + lng);
		setLatlng([lat, lng]);
	};

	return (
		<div id={id} className="map" onClick={clickMap}></div>
	);
};

export default StreetMap;
