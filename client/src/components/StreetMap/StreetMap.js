import React, { useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import './StreetMap.scss';

const StreetMap = ({ latlng, setLatlng }) => {
	const [zoom, setZoom] = useState(13);
	
	const handleClick = e => setLatlng([e.latlng.lat, e.latlng.lng]);
	const handleZoom = e => setZoom(e.target._zoom);

	return (
		<Map 
			className="map"
			center={latlng}
			zoom={zoom}
			onClick={handleClick}
			onZoom={handleZoom}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
			/>
			<Marker position={latlng} />
		</Map>
	);
};

export default StreetMap;
