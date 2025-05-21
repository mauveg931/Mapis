const ciudades = [
    
    { name: "San Petersburgo", lat: 59.936765618998884, lng: 30.35364971061799 },
    { name: "Nashville", lat: 36.16336090305764, lng: -86.78720688633328 },
    { name: "Vigo", lat: 42.24224453558687, lng: -8.720965458927786 },
];

const leon = [
    { name: "Catedral", lat: 42.5994603360669, lng: -5.5671718763307085 },
    { name: "Hospital Universitario Monte San Isidro", lat: 42.639469898018476, lng: -5.593990658634236 },
    { name: "Espacio León", lat: 42.61397398195876, lng: -5.5957198594532445 },
    { name: "Basílica de San Isidoro", lat: 42.601350001587875, lng: -5.570845043345689 },
];

const toro = [
    { name: "Alcázar de Toro", lat: 41.51998732265016, lng: -5.392119666731056 },
    { name: "Paseo del Espolón", lat: 41.5171275319311, lng: -5.394994994529564 },
    { name: "Mirador El banco de Toro", lat: 41.517591220401755, lng: -5.411359370578888 },
    { name: "Monumento a la Batalla de Toro", lat: 41.50705075133617, lng: -5.406638682379866 },
];

const sanpetersburgo = [
    { name: "Lyubashinsky Garden", lat: 59.97293618701417, lng: 30.397908507044125 },
    { name: "Palacio de Invierno", lat: 59.94813375697961, lng: 30.311729901713647 },
    { name: "Aeropuerto Internacional Púlkovo", lat: 59.81064906257848, lng: 30.268471236369663 },
    { name: "Palacio de Catalina", lat: 59.732523017946036, lng: 30.394127362714542 },
];

const nashville = [
    { name: "Lane Motor Museum", lat: 36.145203677234875, lng: -86.73553682128426 },
    { name: "Cornelia Fort Airpark at Shelby Bottoms", lat: 36.195900436583194, lng: -86.70385437579058 },
    { name: "Aeropuerto Internacional de Nashville", lat: 36.129514010513674, lng: -86.67550074833615 },
    { name: "Hattie B's Hot Chicken - Nashville - Midtown", lat: 36.15441062753463, lng: -86.79686545557149 },
];

const vigo = [
    { name: "Parque de Castrelos", lat: 42.214745529842276, lng: -8.730235047744902 },
    { name: "Castelo do Castro", lat: 42.233181356401815,lng: -8.726710784476142 },
    { name: "Iglesia de San Miguel de Bouzas", lat: 42.227909607946614, lng: -8.752756120589835 },
    { name: "Museo do Mar de Galicia", lat: 42.22553233410909, lng: -8.7699706809974 },
];

  <select class="selector" id="selectorCiudad">
        <option value="0" selected disabled>Seleccione una localización</option>
        <option value="1">León</option>
        <option value="2">Toro</option>
        <option value="3">San Petersburgo</option>
        <option value="4">Nashville</option>
        <option value="5">Vigo</option>
    </select>

  <select class="selector" id="selectorCategoria"> YA ESTA IMPLEMENTADO EN EL HTML
        <option value="0" selected disabled>Seleccione una categoría</option>
        <option value="1">Iglesia</option>
        <option value="2">Parque aéreo</option>
        <option value="3">Aeropuerto</option>
        <option value="4">Castillo</option>
        <option value="5">Parrilla</option>
        <option value="6">Estatua/Monumento</option>
        <option value="7">Hospital</option>
        <option value="8">Centro Comercial</option>
        <option value="9">Mirador</option>
        <option value="10">Museo</option>
        <option value="11">Palacio</option>
        <option value="12">Parque</option>
        <option value="13">Restaurante</option>
        <option value="14">Paseo</option>
    </select>