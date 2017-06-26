function flight() {

	var flights = [
{id: 0, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 1, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 2, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 3, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 4, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 5, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 6, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 7, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 8, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
];

 
  // funcion que calcula el precio medio de los vuelos
  // funcion que mira cuantos vuelos tienen escala 
  //El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
  var numberFlights = flights.length;
  
  var name = prompt('Hey, what is your name?');
  alert('Welcome ' + name + ' :).');
  
  var scale = 'no realiza';
  for (var i = 0; i < numberFlights; i++) {
    showFlights(flights[i]);
  } 


    function showFlights(element) {
      if (element.scale) {
  		scale = 'realiza';
  	} else {
  	  scale = 'no realiza';
  	}
  	console.log('El vuelo con origen: ' + element.to + ', y destino: ' + element.from + ' tiene un coste de ' + element.cost + '€ y ' + scale +  ' escalas.' );
    }

    function avPrice(array) {
    	var sum = array.map(function(obj){
    		return obj.cost;
    	});
    	return sum.reduce((a,b) => a + b);
    }
    
  	console.log('The average price is: '  + avPrice(flights) / numberFlights);

}

flight();

// pro

function skyLab() {
  
  var flights = [
{id: 0, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 1, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 2, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 3, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 4, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 5, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 6, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 7, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 8, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
];

  // devuelve array con vuelos formateados
  function formatFlight(flights) {
    return flights.map(function(flight) {
      var scale = (flight.scale) ? 'realiza' : 'no realiza';
      return 'El vuelo con origen: ' + flight.to + ', y destino: ' + flight.from + ' tiene un coste de ' + flight.cost + '€ y ' + scale + ' escalas y su id es: ' + flight.id;
    });
  }

  // guarda en una variable el formato sin array preparado para mostrar
  function print(listOfFlights) {
    var list = '\nVuelos disponibles';
    listOfFlights.forEach(function(flight) {
      list += '\n' + flight;
    });
    return list;
  }

  // muestra precio medio de los vuelos
  function avPriceFlight(array) {
    var numberFlights = array.length;
    var sum = array.map(function(obj) {
      return obj.cost;
    });
    var avPrice = sum.reduce((a, b) => a + b) / numberFlights;
    if (Math.floor(avPrice) === avPrice) {
      avPrice = avPrice;
    } else {
      avPrice = avPrice.toFixed(2);
    }
    console.log('\nEl precio medio es de: ' + avPrice + '€');
  }

  // muestra los vuelos con escala
  function flightsWithScale(array) {
    var flights = array.filter(function(flight) {
      if (flight.scale) {
        return true;
      } else {
        return false;
      }
    });
    console.log('\nHay ' + flights.length + ' vuelos con escala. ');
  }

  // Muestra ultimos 5 vuelos
  function lastFiveFlights(array) {
    array = array.slice(-5);
    array = array.map(function(flight) {
      return flight.from;
    });

    // devuelve las destionaciones no repetidas
    var repeatedDestinations = function() {
      var repeated = [];
      for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
          if (i !== j && array[i] === array[j] && repeated.indexOf(array[i]) === -1) {
            repeated.push(array[i]);
            break;
          } else if (array[i] !== array[j] && repeated.indexOf(array[i]) === -1) {
            repeated.push(array[i]);
          }
        }
      }
      return repeated;
    };
    var destinations = repeatedDestinations();
    console.log('\nLos ultimos 5 vuelos son con destino a: ' + destinations + '.');
  }

  // Llama a las funciones de arriba
  function show() {
    console.log(print(formatFlight(flights)));
    avPriceFlight(flights);
    flightsWithScale(flights);
    lastFiveFlights(flights);
  }

  // devuelve los vuelos filtrados por precio
  function availableFlights(price) {
    p = parseInt(price);
    var copyFlights = flights.filter(function(el) {
      if (el.cost <= price) {
        return true;
      } else {
        return false;
      }
    });
    return copyFlights;
  }

  // Si el usuario quiere comprar el vuelo
  function buyF(flightsAtPrice, id) {
    id = Number(id);
    var idFlight = flightsAtPrice.map((el) => el.id);
    if (idFlight.indexOf(id) !== -1) {
      var pos = idFlight.indexOf(id);
      alert('Has comprado el vuelo con origen ' + flightsAtPrice[pos].to + ' y destino ' + flightsAtPrice[pos].from + ' .Gracias por tu comra.');
    } else {
      alert('No existe el vuelo con ese ID');
    }

  }
  // funcion que pregunta por el precio, y muestra los vuelos filtrados
  function user(name) {
    alert('Bienvenido ' + name);
    var price = prompt('Escribe el precio máximo que pretendes gastar');
    var flightsAtPrice = availableFlights(price); //almacenamos vuelos que se adaptan al precio min
    var flightsFormatted = formatFlight(flightsAtPrice); // formateamos la salida de los vuelos
    var displayFlights = print(flightsFormatted); // almacenamos el print 
    var buy = prompt(displayFlights, 'Si deseas comprar algun vuelo, escribe su ID');
    buyF(flightsAtPrice, buy);
  }

  // funcion que añade mas vuelos , hasta 15
  function createFlights(listFlights) {
    var maxF = 15;
    var more = true;
    var filterID = listFlights.map((el) => el.id); // array que almacena las id de los vuelos
    while (more) {
      var id = prompt('Indica el ID');
      id = Number(id);
      // Se comprueba que no este el id declarado en algun otro vuelo, si fuera así te pide de nuevo id
      if (filterID.indexOf(id) !== -1) {
        alert('ID incorrecto ya está especificado');
        id = prompt('Indica el ID');
        id = Number(id);
      }
      var to = prompt('Indica vuelo origen');
      var from = prompt('Indica destino');
      var cost = prompt('Indica precio');
      cost = Number(cost);
      var scale = confirm('Realiza escalas?');
      flights.push({
        id: id,
        to: to,
        from: from,
        cost: cost,
        scale: scale
      });
      maxF--;
      if (maxF === 0) {
        alert('Has superado el número máximo de creacion de vuelos.');
        more = false;
      } else {
        more = confirm('Mas vuelos?');
      }
    }
  }

  // funcion que elimina el vuelo por id
  function deleteFlights(listFlights) {
    var flightsFormatted = formatFlight(listFlights);
    var printFlights = print(flightsFormatted);
    var remove = prompt(printFlights, "Escoge el ID del vuelo a eliminar");
    remove = Number(remove);

    var removeObjbyID = function(arr, id) {
      arr.forEach(function(flight, i, arr) {
        if (flight.id === id) {
          arr.splice(i, 1);
        }
      });
      return arr;
    };
    removeObjbyID(listFlights, remove);
    print(listFlights);
  }
  // funcion que segun la opcion escogida manda a una llamada u otra
  function admin(name) {
    alert('Bienvenido ' + name);
    var options = '1) Crear mas vuelos\n2) Eliminar vuelos';
    var chooseOpt = prompt(options, 'Marca el numero que desees');
    if (chooseOpt == '1') {
      createFlights(flights);
    } else {
      deleteFlights(flights);
    }
  }

  var name = prompt('Bienvenido a Skylab Airlines, como te llamas?');
  var admini = confirm('Eres ADMIN?');
  if (admini) {
    admin(name);
  } else {
    user(name);
  }
  show();
}

skyLab();