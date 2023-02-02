/* Índice de Regiones:
[0] = Arica
[1] = Tarapacá
[2] = Antofagasta
[3] = Atacama
[4] = Coquimbo
[5] = Valparaíso
[6] = Metropolitana
[7] = O'Higgins
[8] = Maule
[9] = Ñuble
[10] = Biobío
[11] = Araucanía
[12] = Los Ríos
[13] = Los Lagos
[14] = Aysén
[15] = Magallanes */
const divregion = document.querySelector('.tarjetaregion');
const region = {
    nombre: [
        'de Arica y Parinacota',
        'de Tarapacá',
        'de Antofagasta',
        'de Atacama',
        'de Coquimbo',
        'de Valparaíso',
        'Metropolitana de Santiago',
        'del Libertador General Bernardo O\'Higgins',
        'del Maule',
        'de Ñuble',
        'del Biobío',
        'de La Araucanía',
        'de Los Ríos',
        'de Los Lagos',
        'de Aysén del General Carlos Ibañez del Campo',
        'de Magallanes y de la Antártica Chilena'
    ],
    // Info sacada de https://faro.travel/blog/suenos-viajeros/principales-destinos-turisticos-chile-region/
    descripcion: [
        'Arica es el lugar perfecto para quienes aman los paisajes áridos y disfrutar horas bajo el sol y en exquisitas playas. Pero además de las maravillas que ofrece la ciudad, existen otros destinos imperdibles de la región como visitar el lago Chungará, ubicado en el Parque Nacional Lauca.',
        'Iquique es una de las ciudades costeras que enamoran a los turistas con sus playas de oleaje suave, pero ideales para practicar surf, o con un paseo por el día para conocer su arquitectura y sitios históricos. También es famosa porque en la pampa encuentras lugares llenos de historia como las ex salitreras de Humberstone y Santa Laura.',
        'Uno de los destinos más visitados de la Región de Antofagasta es San Pedro de Atacama, ubicado en pleno Desierto de Atacama y a una altitud superior a los 2.400 msnm. Puedes partir la ruta tomando un bus desde Antofagasta o Calama, según lo que te quede más cerca. Nuestros recomendados en este poblado altiplánico son el Valle de la Luna, los Geysers del Tatio y las lagunas altiplánicas.',
        'Uno de los lugares favoritos de quienes visitan la Región de Atacama son sus maravillosos balnearios de aguas turquesas como Bahía Inglesa y Caldera. Si inicias tu viaje desde Copiapó, aprovecha de recorrer las principales calles de la ciudad.',
        'La Serena es el segundo lugar turístico más importante de Chile, especialmente en verano donde miles de turistas aprovechan de descansar en la playa. Visita su Casco Histórico y no dejes de probar la gastronomía típica de la región.',
        'Recorrer Valparaíso es como un viaje en el tiempo y es que sus ascensores se roban todas las miradas. De los 27 originales, actualmente 9 están en funcionamiento: Artillería, Barón, Concepción, Cordillera, El Peral, Espíritu Santo, Polanco, Reina Victoria y San Agustín. Descubre alguno de ellos con un city tour por Valparaíso y Viña del Mar.',
        'Santiago no sólo es la capital de la Región Metropolitana, sino que también una ciudad llena de panoramas para hacer cada día. Si estás de paso porque tienes un vuelo después o simplemente vives ahí pero aún no descubres todo lo que puede ofrecer Santiago, te recomendamos hacer un walking tour por el centro de la ciudad o animarte con un tour gastronómico que incluye una clase de cocina chilena. ¡Verás la capital con nuevos ojos de turista!',
        'A 64 kilómetros de Rancagua se encuentra la ex ciudad minera de Sewell, ubicada a 2.140 metros de altura en plena cordillera de Los Andes. Este maravilloso lugar es conocido como la «ciudad de las escaleras» debido a que no tiene calles, sino escaleras que conectan este antiguo campamento. En 1998 Sewell fue declarado monumento nacional y en julio de 2006 fue declarado Patrimonio de la Humanidad por la Unesco.',
        'Partiendo desde Talca puedes aprovechar de descubrir dos destinos imperdibles para los amantes de la naturaleza. El primero es la Reserva Nacional Altos de Lircay, que posee una rica flora y fauna; y el segundo es el Parque Nacional Radal Siete Tazas, que cuenta con 7 caídas de agua y pozas naturales. Además de disfrutar una jornada de trekking, puedes bañarte en sus pozas, hacer cabalgatas y practicar canopy. ¡De seguro querrás volver al Maule en tus próximas vacaciones!',
        'La nueva Región de Ñuble tiene como capital a Chillán y justamente desde ahí puedes partir tu ruta por la zona visitando sus principales atractivos turísticos. No dejes de probar las famosas longanizas de Chillán ni de recorrer el Valle del Itata para degustar los mejores vinos de la región.',
        'El destino más visitado de la Región del Biobío es el Salto del Laja, que cuenta con una variada oferta gastronómica y alojamientos para quienes quieran quedarse en el sector. Otro destino para recorrer es la capital regional, Concepción, desde donde también puedes llegar hasta la costa y aprovechar una tarde en Dichato.',
        'Si viajas a la Región de la Araucanía no puedes dejar de visitar el Parque Nacional Conguillío o el Parque Nacional Huerquehue. También puedes aprovechar de visitar dos de sus principales ciudades: Pucón, ideal para quienes aman los deportes náuticos y; Temuco, con una amplia oferta hotelera y gastronómica.',
        'Si hablamos de la Región de Los Ríos de inmediato pensamos en Valdivia. Una ciudad que combina ríos y lagos con volcanes y bosques. No dejes de ahcer kayak en el río Calle Calle y de disfrutar una buena cerveza artesanal en algún local de la zona. A media hora en auto puedes llegar hasta Niebla, donde te recomendamos visitar el fuerte.',
        'Al pensar en la Región de Los Lagos es difícil escoger un sólo destino porque es una de las zonas más visitadas de Chile, cautivando a turistas de todo el mundo con sus paisajes entorno al lago Llanquihue —no dejes de hacer un city tour por Puerto Varas y probar un buen kuchen en Frutillar— y también con las vistas de la Isla de Chiloé, que con sus palafitos de colores es un lugar que jamás olvidarás.',
        'Visitar esta región es pensar automáticamente en la ruta de la carretera austral, donde pasarás por imponentes paisajes como el Ventisquero Colgante en el Parque Nacional Queulat o la laguna San Rafael. No dejes de hacer un city tour por Coyhaique y visitar una cervecería local.',
        'Punta Arenas es uno de los destinos imperdibles de la Patagonia chilena, por lo que hacer un city tour es perfecto para aprovechar de conocer sus principales atractivos en un día. Si quieres continuar la ruta por esta región, no puedes dejar de visitar el famoso Parque Nacional Torres del Paine. ¡Quedarás sin palabras!'
    ],
    tamano: [
        16873.3,
        42225.8,
        126049.1,
        75176.2,
        40579.9,
        16396.1,
        15403.2,
        16387.0,
        30296.1,
        13178.5,
        23890.2,
        31842.3,
        18429.5,
        48583.6,
        108494.4,
        132297.2
    ],
    poblacion: [
        226068,
        330508,
        607534,
        286168,
        757586,
        1815902,
        7112808,
        914555,
        1044950,
        480609,
        1556805,
        957224,
        384837,
        828708,
        103158,
        166533
    ]
}