/**
 *
 *
 * @param {Number} degrees
 * @returns {Number} the value in Radians
 */
function degreesToRadians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}



/**
 *
 *
 * @param {object} point1
 * @param {object} point2
 * @returns {Number} distance in km
 */
function getDistance(point1, point2)
{
    //Earth radius 
    var R = 6371;
  
    var dLat = degreesToRadians(point2.lat-point1.lat);
    var dLon = degreesToRadians(point2.lon-point1.lon);
  
    lat1 = degreesToRadians(point1.lat);
    lat2 = degreesToRadians(point2.lat);
  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(point1.lat) * Math.cos(point2.lat); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return R * c;
}


function getBounds(area)
{
    let minLat = area[0].lat;
    let minLong = area[0].lon;
    let maxLat = area[0].lat;
    let maxLong = area[0].lon;

    for (let i = 0; i < area.length; i++) {
        let y = area[i].lat,
            x = area[i].lon;

        if (x > maxLong) {
            maxLong = x;
        }
        if (x < minLong) {
            minLong = x;
        }
        
        if (y > maxLat) {
            maxLat = y;
        }
        if (y < minLat) {
            minLat = y;
        }
    }
    return JSON.parse({ "minLat": minLat, "maxLat": maxLat, "minLon": minLong, "maxLon": maxLong });
}