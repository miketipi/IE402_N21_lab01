import { point_template_city, point_template_university } from './pointTemplate.js';

export function createPoint(longitude, latitude, name, location, symbol = {
    type: "simple-marker",
    color: [0, 153, 51],
    outline: {
        color: [255, 255, 255],
        width: 1
    }
}, popupTemplate = point_template_university) {
    return {
        type: "point",
        longitude: longitude,
        latitude: latitude,
        Name: name,
        Location: location,
        symbol: symbol,
        popupTemplate: popupTemplate
    }
}
export function createCityPoint(longitude, latitude, name, location, symbol = {
    type: "simple-marker",
    color: [0, 153, 51],
    outline: {
        color: [255, 255, 255],
        width: 1
    }
}, popupTemplate = point_template_city) {
    return {
        type: "point",
        longitude: longitude,
        latitude: latitude,
        Name: name,
        Location: location,
        symbol: symbol,
        popupTemplate: popupTemplate
    }
}