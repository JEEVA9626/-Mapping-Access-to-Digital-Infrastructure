// Create the map
let map = L.map('map').setView([20, 0], 2);
L.tileLayer('https:                                                
    attribution: '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https:                                             
    subdomains: ['a', 'b', 'c']
}).addTo(map);

                                                
let digitalInfrastructureData = [
    {
        "//www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);

// Sample data for digital infrastructure access
let digitalInfrastructureData = [
    {
        "lat": 37.7749,
        "lng": -122.4194,
        "city": "San Francisco",
        "access": "High"
    },
    {
        "lat": 40.7128,
        "lng": -74.0060,
        "city": "New York City",
        "access": "High"
    },
    {
        "lat": 34.0522,
        "lng": -118.2437,
        "city": "Los Angeles",
        "access": "Medium"
    },
    {
        "lat": 51.5074,
        "lng": -0.1278,
        "city": "London",
        "access": "High"
    },
    {
        "lat": 48.8566,
        "lng": 2.3522,
        "city": "Paris",
        "access": "High"
    }
];

// Add markers to the map
digitalInfrastructureData.forEach(data => {
    let marker = L.marker([data.lat, data.lng]).addTo(map);
    marker.bindPopup(`<b>${data.city}</b><br>Access: ${data.access}`);
});
