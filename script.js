window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var videosection = document.querySelector(".video-section");
    header.classList.toggle("abajo",window.scrollY>0)
    videosection.classList.toggle("abajo",window.scrollY>0)
})

function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.footerexpand');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const ul = button.nextElementSibling;
            const isActive = ul.style.display === 'block';

            document.querySelectorAll('.footerpeque ul').forEach(list => {
                list.style.display = 'none';
            });

            if (!isActive) {
                ul.style.display = 'block';
            } else {
                ul.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider input');
    const totalSlides = slides.length;
    let interval;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].checked = true;
    }

    function startAutoSlide() {
        interval = setInterval(showNextSlide, 5000);
    }

    function resetAutoSlide(index) {
        clearInterval(interval);
        currentIndex = index;
        startAutoSlide();
    }

    slides.forEach((slide, index) => {
        slide.addEventListener('change', () => {
            resetAutoSlide(index);
        });
    });

    startAutoSlide();
});

window.addEventListener('load', function() {
    window.addEventListener('beforeunload', function() {
      window.scrollTo(0, window.scrollY);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const materialCheckboxes = document.querySelectorAll('.material-filter');
    const collectionCheckboxes = document.querySelectorAll('.collection-filter');
    const productosContainers = document.querySelectorAll('.productos');
  
    function renderRings() {
      const selectedMaterials = Array.from(materialCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
  
      const selectedCollections = Array.from(collectionCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
  
      productosContainers.forEach(container => {
        const material = container.classList[1].split("-")[1];
        const collection = container.classList[2];
  
        const matchesMaterial = selectedMaterials.includes(material) || selectedMaterials.length === 0;
        const matchesCollection = selectedCollections.includes(collection) || selectedCollections.length === 0;
  
        if (matchesMaterial && matchesCollection) {
          container.style.display = 'flex';
        } else {
          container.style.display = 'none';
        }
      });
    }
  
    materialCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', renderRings);
    });
  
    collectionCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', renderRings);
    });
  
    renderRings();
  });

  document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".producto");
    const buttons = document.querySelectorAll(".btndestac");

            const productDetails = {
                //Anillos
                "1a": {
                    mainImage: "images/anillos/nature1.PNG",
                    thumbnails: [
                        "images/anillos/nature1_1.PNG",
                        "images/anillos/nature1_2.PNG",
                        "images/anillos/nature1_3.PNG"
                    ],
                    name: "Anillo Hoja Dorada",
                    price: "$873.00",
                    description: "El anillo Hoja Dorada de la colección Wildlife Whispers es una joya excepcional que captura la esencia encantadora de la naturaleza. Hecho de oro, este anillo presenta un diseño adornado con una delicada flor que lleva un diamante, junto con una hoja que realza su belleza natural. Cada detalle de esta pieza está inspirado en la gracia y los patrones orgánicos de las hojas, transmitiendo la magia y la serenidad de la colección Wildlife Whispers. Es perfecto para aquellos que encuentran inspiración en la flora y fauna, llevando consigo el encanto y la elegancia de la naturaleza en cada momento."
                },
                "1.2a": {
                    mainImage: "images/anillos/nature2.PNG",
                    thumbnails: [
                        "images/anillos/nature2_1.PNG",
                        "images/anillos/nature2_2.PNG",
                        "images/anillos/nature2_3.PNG"
                    ],
                    name: "Anillo Flor de Aurora",
                    price: "$873.00",
                    description: "El anillo Flor de Aurora es una exquisita pieza de oro rosa que captura la esencia de la belleza natural en su diseño. Con una delicada flor esculpida en su superficie, este anillo destaca un diamante centelleante en el centro, simbolizando la pureza y la luz del amanecer. Inspirado en la magia de los jardines al alba, Flor de Aurora es el accesorio perfecto para quienes desean llevar consigo un toque de naturaleza y elegancia en cada paso."
                },
                "1.3a": {
                    mainImage: "images/anillos/nature3.PNG",
                    thumbnails: [
                        "images/anillos/nature3_1.PNG",
                        "images/anillos/nature3_2.PNG",
                        "images/anillos/nature3_3.PNG"
                    ],
                    name: "Anillo Acephali",
                    price: "$817.00",
                    description: "El Anillo Acephali es una obra maestra en oro rosa que pertenece a la colección Wildlife Whispers. Esta sofisticada pieza presenta un diseño innovador que da el efecto de dos anillos en uno. El primer anillo ostenta una delicada flor, mientras que el segundo exhibe una mariposa elegantemente detallada con incrustaciones de diamantes que añaden un brillo cautivador. Inspirado en la belleza y la gracia de la naturaleza, el Anillo Acephali es perfecto para aquellos que desean llevar consigo un toque de la magia del mundo natural en cada jornada."
                },
                "1.4a": {
                    mainImage: "images/anillos/nature4.PNG",
                    thumbnails: [
                        "images/anillos/nature4_1.PNG",
                        "images/anillos/nature4_2.PNG",
                        "images/anillos/nature4_3.PNG"
                    ],
                    name: "Anillo Flora Silvestre",
                    price: "$738.00",
                    description: "El Anillo Flora Silvestre, parte de la colección Wildlife Whispers, es una pieza de oro que encapsula la elegancia y el encanto de la naturaleza. Diseñado para dar el efecto de doble anillo en la parte superior, este exquisito accesorio presenta una delicada flor con diamantes incrustados, irradiando un brillo sutil y sofisticado. Acompañando la flor, una hoja decorativa añade un toque de frescura y armonía. El Anillo Flora Silvestre es ideal para aquellos que desean llevar consigo la gracia y los detalles delicados del mundo natural en cada jornada."
                },
                "1.5a": {
                    mainImage: "images/anillos/nature5.PNG",
                    thumbnails: [
                        "images/anillos/nature5_1.PNG",
                        "images/anillos/nature5_2.PNG",
                        "images/anillos/nature5_3.PNG"
                    ],
                    name: "Anillo Perspective",
                    price: "$548.00",
                    description: "El Anillo Perspective, perteneciente a la colección Wildlife Whispers, es una joya de oro que captura la esencia de la naturaleza en su diseño. Esta hermosa pieza destaca por sus dos flores doradas, cada una incrustada con deslumbrantes diamantes que aportan un brillo incomparable. Una hoja decorativa complementa el diseño, añadiendo un toque de frescura y elegancia. Inspirado en los encantos del mundo natural, el Anillo Perspective es perfecto para quienes desean llevar consigo una conexión con la naturaleza y su belleza en cada momento."
                },
                "1.6a": {
                    mainImage: "images/anillos/nature6.PNG",
                    thumbnails: [
                        "images/anillos/nature6_1.PNG",
                        "images/anillos/nature6_2.PNG",
                        "images/anillos/nature6_3.PNG"
                    ],
                    name: "Anillo Pagliara",
                    price: "$604.00",
                    description: "El Anillo Pagliara, una pieza destacada de la colección Wildlife Whispers, combina la elegancia de la plata con la calidez del oro rosa. Este anillo único presenta una delicada flor de oro rosa en el centro, creando un contraste armonioso y sofisticado. Inspirado en la belleza natural y los detalles intrincados del mundo que nos rodea, el Anillo Pagliara es perfecto para aquellos que buscan un toque de naturaleza y distinción en su joyería. Lleva contigo la magia de la naturaleza en cada jornada con este exquisito accesorio."
                },
                "1.7a": {
                    mainImage: "images/anillos/nature7.PNG",
                    thumbnails: [
                        "images/anillos/nature7_1.PNG",
                        "images/anillos/nature7_2.PNG",
                        "images/anillos/nature7_3.PNG"
                    ],
                    name: "Anillo Dubuc",
                    price: "$866.00",
                    description: "El Anillo Dubuc, una joya exclusiva de la colección Wildlife Whispers, captura la esencia de la naturaleza con su diseño encantador. Este anillo de plata presenta una decoración detallada de hojas que envuelven el dedo con elegancia. En el centro, una delicada libélula de oro resplandece, simbolizando la ligereza y la libertad del mundo natural. Inspirado en los sutiles matices y la belleza de la vida silvestre, el Anillo Dubuc es perfecto para quienes desean llevar consigo un toque de la naturaleza en cada momento. Celebra la gracia y los detalles delicados del mundo natural con este magnífico accesorio."
                },
                "1.8a": {
                    mainImage: "images/anillos/nature8.PNG",
                    thumbnails: [
                        "images/anillos/nature8_1.PNG",
                        "images/anillos/nature8_2.PNG",
                        "images/anillos/nature8_3.PNG"
                    ],
                    name: "Anillo Bioche",
                    price: "$1,052.00",
                    description: "Sumérgete en la elegancia natural con el Anillo Bioche, una obra maestra de la colección Wildlife Whispers. Este exquisito anillo de oro está adornado con diamantes incrustados alrededor de toda su superficie, que brillan como estrellas en la noche. En el centro, una mariposa decorativa, también engastada con diamantes, añade un toque de gracia y belleza. Inspirado en la delicadeza y la armonía del mundo natural, el Anillo Bioche es una declaración de amor por la naturaleza en su forma más brillante y exquisita. Lleva contigo la magia y la gracia de la naturaleza en cada jornada con este deslumbrante accesorio."
                },
                "1.9a": {
                    mainImage: "images/anillos/nature9.PNG",
                    thumbnails: [
                        "images/anillos/nature9_1.PNG",
                        "images/anillos/nature9_2.PNG",
                        "images/anillos/nature9_3.PNG"
                    ],
                    name: "Anillo Suva",
                    price: "$1,387.00",
                    description: "Sumérgete en la belleza natural con el Anillo Suva de la colección Wildlife Whispers. Este anillo dual, elaborado en oro rosa, envuelve elegantemente dos dedos con su diseño único. Cada banda del anillo está adornada con una delicada flor de oro rosa, simbolizando la gracia y la belleza del mundo natural. En el centro, una catarina añade un toque de encanto y suerte, capturando la esencia de las pequeñas criaturas que habitan nuestro entorno. Celebra la magia y los delicados detalles de la naturaleza con el Anillo Suva, un compañero elegante para cada jornada."
                },
                "1.10a": {
                    mainImage: "images/anillos/nature10.PNG",
                    thumbnails: [
                        "images/anillos/nature10_1.PNG",
                        "images/anillos/nature10_2.PNG",
                        "images/anillos/nature10_3.PNG"
                    ],
                    name: "Anillo Avala",
                    price: "$1,319.00",
                    description: "Sumérgete en la serenidad de la naturaleza con el Anillo Avala de la colección Wildlife Whispers. Este impresionante anillo de doble banda en oro rosa está meticulosamente decorado con delicadas incrustaciones de diamantes amarillos que evocan la luz del sol entre las hojas de un bosque encantado. En el centro, una catarina añade un toque de magia, simbolizando la buena fortuna y la conexión con la naturaleza. El Anillo Avala es más que una joya; es un recordatorio diario de la belleza y la gracia del mundo natural, perfecto para acompañarte en cada aventura."
                },
                "1.11a": {
                    mainImage: "images/anillos/nature11.PNG",
                    thumbnails: [
                        "images/anillos/nature11_1.PNG",
                        "images/anillos/nature11_2.PNG",
                        "images/anillos/nature11_3.PNG"
                    ],
                    name: "Anillo Conventio",
                    price: "$937.00",
                    description: "Sumérgete en la magia de la naturaleza con el Anillo Conventio de la colección Wildlife Whispers. Este elegante anillo de plata está adornado con una delicada flor de oro rosa en su centro, resaltada por brillantes diamantes incrustados que capturan la luz como gotas de rocío al amanecer. Inspirado en los patrones naturales de hojas y la gracia de las mariposas, este anillo celebra la belleza y los detalles delicados del mundo natural. Lleva contigo la elegancia y la conexión con la naturaleza en cada jornada con el Anillo Conventio."
                },
                "1.12a": {
                    mainImage: "images/anillos/nature12.PNG",
                    thumbnails: [
                        "images/anillos/nature12_1.PNG",
                        "images/anillos/nature12_2.PNG",
                        "images/anillos/nature12_3.PNG"
                    ],
                    name: "Anillo Terrasini",
                    price: "$764.00",
                    description: "Sumérgete en la serenidad de la naturaleza con el Anillo Terrasini de la colección Wildlife Whispers. Este elegante anillo de plata está meticulosamente adornado con diamantes incrustados que capturan la luz con cada movimiento. En el centro del anillo, una mariposa delicadamente esculpida evoca la gracia y la belleza de estos seres alados. En el extremo del anillo, una perla iridiscente añade un toque de sofisticación y elegancia natural. Inspirado en los patrones de hojas y la vibrante vida de las mariposas, el Anillo Terrasini celebra la magia y los delicados detalles del mundo natural, siendo el compañero perfecto para cada jornada."
                },
                "2a": {
                    mainImage: "images/anillos/enlace1.PNG",
                    thumbnails: [
                        "images/anillos/enlace1_1.PNG",
                        "images/anillos/enlace1_2.PNG",
                        "images/anillos/enlace1_3.PNG"
                    ],
                    name: "Anillo Miorbhuil",
                    price: "$1,049.00",
                    description: "El anillo Miorbhuil de la colección Enlace Celestial fusiona elegancia y resistencia en un diseño de oro adornado con eslabones que simbolizan conexiones duraderas. Destacando en el centro, una perla aporta sofisticación y distinción. Este diseño captura la armonía entre líneas suaves y contornos definidos, celebrando la fuerza y la belleza de las relaciones humanas que inspiran la colección Enlace Celestial. Perfecto para quienes valoran la profundidad y el significado de las conexiones personales."
                },
                "2.2a": {
                    mainImage: "images/anillos/enlace2.PNG",
                    thumbnails: [
                        "images/anillos/enlace2_1.PNG",
                        "images/anillos/enlace2_2.PNG",
                        "images/anillos/enlace2_3.PNG"
                    ],
                    name: "Anillo Hilimi",
                    price: "$912.00",
                    description: "Sumérgete en la elegancia etérea de la Colección Enlace Celestial con el Anillo Hilimi. Este anillo de oro presenta un diseño alargado tipo envolvente, inspirado en la idea de conexiones que dan forma a nuestro mundo. Los eslabones estilizados simbolizan la unión y el crecimiento, mientras que los diamantes incrustados a lo largo del borde final añaden un brillo sutil y majestuoso. Con líneas suaves y contornos definidos, el Anillo Hilimi cuenta una historia de resistencia y adaptabilidad, capturando la esencia de constelaciones de belleza y gracia en cada detalle."
                },
                "2.3a": {
                    mainImage: "images/anillos/enlace3.PNG",
                    thumbnails: [
                        "images/anillos/enlace3_1.PNG",
                        "images/anillos/enlace3_2.PNG",
                        "images/anillos/enlace3_3.PNG"
                    ],
                    name: "Anillo Xancira",
                    price: "$1,087.00",
                    description: "Sumérgete en la Colección Enlace Celestial con el Anillo Xancira. Este elegante anillo de oro está dividido en tres secciones, cada una decorada con diamantes incrustados que brillan con sutileza. En el centro, una figura similar al signo infinito simboliza la conexión eterna y la gracia del universo. Con líneas suaves y contornos definidos, el Anillo Xancira fusiona la elegancia de las formas orgánicas con la majestuosidad de los materiales, contando una historia de unión y crecimiento en cada detalle."
                },
                "2.4a": {
                    mainImage: "images/anillos/enlace4.PNG",
                    thumbnails: [
                        "images/anillos/enlace4_1.PNG",
                        "images/anillos/enlace4_2.PNG",
                        "images/anillos/enlace4_3.PNG"
                    ],
                    name: "Anillo Mujijat",
                    price: "$882.00",
                    description: "Sumérgete en la Colección Enlace Celestial con el Anillo Mujijat. Este anillo de oro presenta un diseño elegante y sofisticado, con un rectángulo central que simboliza la conexión y la continuidad. Diamantes incrustados alrededor del anillo capturan la luz con destellos que evocan la majestuosidad de las constelaciones. Con líneas suaves y contornos definidos, el Anillo Mujijat fusiona la elegancia de las formas orgánicas con la resistencia de los materiales preciosos, contando una historia de unión y crecimiento en cada detalle."
                },
                "2.5a": {
                    mainImage: "images/anillos/enlace5.PNG",
                    thumbnails: [
                        "images/anillos/enlace5_1.PNG",
                        "images/anillos/enlace5_2.PNG",
                        "images/anillos/enlace5_3.PNG"
                    ],
                    name: "Anillo Pastiche",
                    price: "$1,004.00",
                    description: "Sumérgete en la Colección Enlace Celestial con el Anillo Pastiche. Este anillo de oro envuelve elegantemente el dedo, fusionando la elegancia con la funcionalidad. Con incrustaciones de diamantes en la parte superior e inferior, captura la esencia de la resistencia y la adaptabilidad. Cada detalle de este diseño armoniza líneas suaves y contornos definidos, contando una historia de unión y crecimiento. Descubre un universo donde cada conexión se convierte en una constelación de belleza y gracia con el Anillo Pastiche."
                },
                "2.6a": {
                    mainImage: "images/anillos/enlace6.PNG",
                    thumbnails: [
                        "images/anillos/enlace6_1.PNG",
                        "images/anillos/enlace6_2.PNG",
                        "images/anillos/enlace6_3.PNG"
                    ],
                    name: "Anillo Matimba",
                    price: "$723.00",
                    description: "Sumérgete en la Colección Enlace Celestial con el Anillo Matimba. Este anillo de oro presenta dos bandas entrelazadas en el mismo dedo, simbolizando la conexión y la continuidad. En el centro, un símbolo similar al infinito enlazado con detalles blancos y diamantes incrustados captura la esencia de la resistencia y la adaptabilidad. Fusionando elegancia y significado, el Anillo Matimba cuenta una historia de unión y crecimiento con cada detalle."
                },
                "2.7a": {
                    mainImage: "images/anillos/enlace7.PNG",
                    thumbnails: [
                        "images/anillos/enlace7_1.PNG",
                        "images/anillos/enlace7_2.PNG",
                        "images/anillos/enlace7_3.PNG"
                    ],
                    name: "Anillo Ruiva",
                    price: "$679.00",
                    description: "Descubre el Anillo Ruiva, una obra de la Colección Enlace Celestial que captura la esencia de las conexiones que dan forma a nuestro mundo. Este anillo de oro presenta un rombo central con una perla delicadamente ubicada en su interior, rodeado por diamantes incrustados que añaden un brillo sutil y majestuoso. Con líneas suaves y contornos definidos, el Anillo Ruiva fusiona la elegancia de las formas orgánicas con la resistencia de los materiales, contando una historia de unión y crecimiento en cada detalle."
                },
                "2.8a": {
                    mainImage: "images/anillos/enlace8.PNG",
                    thumbnails: [
                        "images/anillos/enlace8_1.PNG",
                        "images/anillos/enlace8_2.PNG",
                        "images/anillos/enlace8_3.PNG"
                    ],
                    name: "Anillo Oprana",
                    price: "$943.00",
                    description: "Sumérgete en la Colección Enlace Celestial con el Anillo Oprana, una expresión sublime de las conexiones que dan forma a nuestro mundo. Este anillo presenta dos formas tipo infinito en el centro, adornadas con incrustaciones de diamantes que capturan la luz con elegancia. Una perla delicadamente colocada entre las formas simboliza la continuidad y la unión. Con líneas suaves y contornos definidos, el Anillo Oprana fusiona la elegancia de las formas orgánicas con la majestuosidad de los materiales, contando una historia de unión y crecimiento en cada detalle."
                },
                "3a": {
                    mainImage: "images/anillos/eterna1.PNG",
                    thumbnails: [
                        "images/anillos/eterna1_1.PNG",
                        "images/anillos/eterna1_2.PNG",
                        "images/anillos/eterna1_3.PNG"
                    ],
                    name: "Anillo Antimilos",
                    price: "$1,199.00",
                    description: "El anillo Antimilos de la colección Eterna Promesa es una declaración de amor eterno. Hecho de diamante, su diseño envolvente y elegante abraza el dedo, adornado con una joya en cada extremo. Esta pieza simboliza la unión indestructible y la belleza del compromiso duradero, perfecta para celebrar momentos inolvidables de amor."
                },
                "3.2a": {
                    mainImage: "images/anillos/eterna2.PNG",
                    thumbnails: [
                        "images/anillos/eterna2_1.PNG",
                        "images/anillos/eterna2_2.PNG",
                        "images/anillos/eterna2_3.PNG"
                    ],
                    name: "Anillo Kalolimnos",
                    price: "$902.00",
                    description: "Descubre el Anillo Kalolimnos de la Colección Eterna Promesa, una pieza diseñada para simbolizar el amor perdurable y el compromiso eterno. Este anillo de diamante presenta una forma irregular de entrelazamientos que capturan la esencia de una unión única y especial. Los diamantes incrustados a lo largo de los entrelazamientos añaden un brillo deslumbrante, reflejando la elegancia y el significado profundo de tu historia de amor. Con cada destello, el Anillo Kalolimnos se convierte en un testimonio de momentos inolvidables y un símbolo de un compromiso eterno."
                },
                "3.3a": {
                    mainImage: "images/anillos/eterna3.PNG",
                    thumbnails: [
                        "images/anillos/eterna3_1.PNG",
                        "images/anillos/eterna3_2.PNG",
                        "images/anillos/eterna3_3.PNG"
                    ],
                    name: "Anillo de compromiso Armonía Eterna",
                    price: "$1,081.00",
                    description: "Embárcate en el viaje del compromiso eterno con el Anillo Armonía Eterna de la Colección Eterna Promesa. Diseñado para simbolizar el amor duradero, este anillo de compromiso presenta un deslumbrante diamante incrustado en el centro, capturando la esencia de tu historia única. Con su brillo y elegancia, este anillo es el compañero perfecto para tu día especial, adornando tus sueños con la belleza y el significado que merecen. Cada destello del diamante refleja momentos inolvidables y un compromiso eterno."
                },
                "3.4a": {
                    mainImage: "images/anillos/eterna4.PNG",
                    thumbnails: [
                        "images/anillos/eterna4_1.PNG",
                        "images/anillos/eterna4_2.PNG",
                        "images/anillos/eterna4_3.PNG"
                    ],
                    name: "Anillo de compromiso Vitmein",
                    price: "$1,044.00",
                    description: "Embárcate en el viaje del compromiso eterno con el Anillo de compromiso Vitmein de la Colección Eterna Promesa. Este anillo presenta un deslumbrante rombo de diamante en el centro, simbolizando la pureza y el brillo de tu amor. Compuesto por dos anillos entrelazados irregularmente, refleja la unión única y especial de dos almas. Con su diseño elegante y significativo, el Anillo Vitmein adorna tus sueños y celebra el compromiso eterno, convirtiéndose en un testimonio de momentos inolvidables y amor perdurable."
                },
                "3.5a": {
                    mainImage: "images/anillos/eterna5.PNG",
                    thumbnails: [
                        "images/anillos/eterna5_1.PNG",
                        "images/anillos/eterna5_2.PNG",
                        "images/anillos/eterna5_3.PNG"
                    ],
                    name: "Anillo Rouen",
                    price: "$1,328.00",
                    description: "Embárcate en el viaje del compromiso eterno con el Anillo Rouen de la Colección Eterna Promesa. Este exquisito anillo de diamante presenta diamantes incrustados a lo largo de su diseño, creando un brillo deslumbrante. El Anillo Rouen está diseñado para dar el efecto de dos anillos en la parte delantera, simbolizando la unión de dos almas en un compromiso eterno. Con su elegancia y significado, este anillo es el símbolo perfecto de amor duradero y momentos inolvidables."
                },
                "3.6a": {
                    mainImage: "images/anillos/eterna6.PNG",
                    thumbnails: [
                        "images/anillos/eterna6_1.PNG",
                        "images/anillos/eterna6_2.PNG",
                        "images/anillos/eterna6_3.PNG"
                    ],
                    name: "Anillo Antitilos",
                    price: "$706.00",
                    description: "Embárcate en el viaje del compromiso eterno con el Anillo Antitilos de la Colección Eterna Promesa. Este anillo de diamante destaca por su estructura irregular, adornada con diamantes incrustados a lo largo de su diseño. En el centro, un deslumbrante rombo de diamante capta la esencia de tu amor único. El Anillo Antitilos simboliza la belleza de un compromiso eterno y celebra momentos inolvidables con su elegancia y brillo incomparables."
                },
                "3.7a": {
                    mainImage: "images/anillos/eterna7.PNG",
                    thumbnails: [
                        "images/anillos/eterna7_1.PNG",
                        "images/anillos/eterna7_2.PNG",
                        "images/anillos/eterna7_3.PNG"
                    ],
                    name: "Anillo Estepa",
                    price: "$1,025.00",
                    description: "Embárcate en el viaje del compromiso eterno con el Anillo Estepa de la Colección Eterna Promesa. Este elegante anillo de diamante presenta un diseño doble, con diamantes incrustados que añaden un brillo deslumbrante a su estructura. El Anillo Estepa simboliza la unión de dos almas y celebra el compromiso eterno con su sofisticada belleza y resplandor. Perfecto para momentos inolvidables, este anillo es un testimonio de amor perdurable y elegancia atemporal."
                },
                "3.8a": {
                    mainImage: "images/anillos/eterna8.PNG",
                    thumbnails: [
                        "images/anillos/eterna8_1.PNG",
                        "images/anillos/eterna8_2.PNG",
                        "images/anillos/eterna8_3.PNG"
                    ],
                    name: "Anillo Finally",
                    price: "$1,132.00",
                    description: "Embárcate en el viaje del compromiso eterno con el Anillo Finally de la Colección Eterna Promesa. Este exquisito anillo de diamante presenta un diseño central que forma un corazón, símbolo del amor verdadero. Incrustado con diamantes alrededor del corazón y a lo largo de la banda, el Anillo Finally captura la esencia de un compromiso duradero con su resplandor y elegancia. Perfecto para momentos inolvidables, este anillo es un emblema de amor perdurable y belleza eterna."
                },
                "3.9a": {
                    mainImage: "images/anillos/eterna9.PNG",
                    thumbnails: [
                        "images/anillos/eterna9_1.PNG",
                        "images/anillos/eterna9_2.PNG",
                        "images/anillos/eterna9_3.PNG"
                    ],
                    name: "Anillo Grenoble",
                    price: "$1,184.00",
                    description: "Embárcate en el viaje del compromiso eterno con el Anillo Grenoble de la Colección Eterna Promesa. Este anillo de oro destaca por su forma irregular, adornada con diamantes incrustados que capturan la luz de manera deslumbrante. El Anillo Grenoble es un símbolo de amor duradero y elegancia única, perfecto para celebrar momentos inolvidables y representar un compromiso eterno."
                },
                "3.10a": {
                    mainImage: "images/anillos/eterna10.PNG",
                    thumbnails: [
                        "images/anillos/eterna10_1.PNG",
                        "images/anillos/eterna10_2.PNG",
                        "images/anillos/eterna10_3.PNG"
                    ],
                    name: "Anillo Etretat",
                    price: "$1,421.00",
                    description: "Sumérgete en la elegancia eterna con el Anillo Etretat de la Colección Eterna Promesa. Este anillo de oro presenta un diseño impresionante con un gran diamante central que captura la luz con cada movimiento. Los diamantes incrustados alrededor del diamante central realzan su brillo, creando un símbolo deslumbrante de amor perdurable y compromiso eterno. Perfecto para celebrar momentos inolvidables y embellecer tu historia única con significado y belleza incomparables."
                },
                "3.11a": {
                    mainImage: "images/anillos/eterna11.PNG",
                    thumbnails: [
                        "images/anillos/eterna11_1.PNG",
                        "images/anillos/eterna11_2.PNG",
                        "images/anillos/eterna11_3.PNG"
                    ],
                    name: "Anillo Vertou",
                    price: "$1,231.00",
                    description: "Descubre el encanto eterno del Anillo Vertou de la Colección Eterna Promesa. Este anillo de oro envuelve delicadamente el dedo, adornado con diamantes incrustados que brillan con elegancia. En su centro, una perla escarlata en forma de corazón irradia pasión y significado, simbolizando un amor perdurable y un compromiso eterno. Perfecto para celebrar momentos inolvidables y embellecer tu historia única con belleza y gracia incomparables."
                },
                "3.12a": {
                    mainImage: "images/anillos/eterna12.PNG",
                    thumbnails: [
                        "images/anillos/eterna12_1.PNG",
                        "images/anillos/eterna12_2.PNG",
                        "images/anillos/eterna12_3.PNG"
                    ],
                    name: "Anillo Voiron",
                    price: "$1,165.00",
                    description: "Sumérgete en la elegancia atemporal del Anillo Voiron de la Colección Eterna Promesa. Este anillo de oro presenta una forma irregular que captura la esencia única de cada conexión amorosa. En su centro, un gran diamante brilla con intensidad, simbolizando el compromiso eterno y la promesa de un amor perdurable. Los diamantes incrustados a lo largo de su trayectoria añaden un brillo adicional, haciendo de esta pieza un símbolo inolvidable de belleza y significado. Perfecto para adornar momentos especiales con la majestuosidad que merecen tus sueños más preciados."
                },
                //collares
                "1c": {
                    mainImage: "images/collar/nature1.PNG",
                    thumbnails: [
                        "images/collar/nature1_1.PNG",
                        "images/collar/nature1_2.PNG",
                        "images/collar/nature1_3.PNG"
                    ],
                    name: "Collar de Mujer Dirillo",
                    price: "$450.00",
                    description: "El collar Dirillo de la colección Wildlife Whispers es una expresión encantadora de la naturaleza en oro. Está adornado con dos flores delicadas y una hoja central, capturando la belleza y los detalles inspirados en las hojas y la flora natural. Cada elemento de esta joya celebra la gracia y la elegancia del mundo natural, ideal para quienes encuentran inspiración en la serenidad de la naturaleza en su día a día."
                },
                "1.2c": {
                    mainImage: "images/collar/nature2.PNG",
                    thumbnails: [
                        "images/collar/nature2_1.PNG",
                        "images/collar/nature2_2.PNG",
                        "images/collar/nature2_3.PNG"
                    ],
                    name: "Collar de Mujer Bornes",
                    price: "$888.00",
                    description: "El collar Bornes, una pieza destacada de la colección Wildlife Whispers, captura la esencia etérea de la naturaleza con una elegancia inigualable. Este delicado collar de oro presenta un encantador dije de libélula, cuyas alas están meticulosamente incrustadas con diamantes deslumbrantes. Cada destello de los diamantes refleja la belleza y la gracia de estos delicados insectos, evocando la magia de un jardín encantado. Bornes no es solo un accesorio, es una celebración de la naturaleza y su infinita belleza, perfecto para aquellos que desean llevar consigo un toque de naturaleza pura y sofisticación en cada jornada."
                },
                "1.3c": {
                    mainImage: "images/collar/nature3.PNG",
                    thumbnails: [
                        "images/collar/nature3_1.PNG",
                        "images/collar/nature3_2.PNG",
                        "images/collar/nature3_3.PNG"
                    ],
                    name: "Collar de Mujer Gunjur",
                    price: "$1,173.00",
                    description: "El collar Gunjur, parte de la encantadora colección Wildlife Whispers, es una expresión sublime de la delicadeza y el esplendor de la naturaleza. Este exquisito collar de oro presenta dos finas cadenas. En la primera cadena, tres diamantes rectangulares perfectamente alineados brillan con una elegancia discreta. La segunda cadena, más larga, culmina en un encantador dije de libélula, adornado con detalles de diamantes que capturan la luz y reflejan un destello de magia natural. Gunjur es una pieza ideal para quienes buscan un toque de naturaleza sofisticada y una belleza atemporal en su día a día."
                },
                "1.4c": {
                    mainImage: "images/collar/nature4.PNG",
                    thumbnails: [
                        "images/collar/nature4_1.PNG",
                        "images/collar/nature4_2.PNG",
                        "images/collar/nature4_3.PNG"
                    ],
                    name: "Collar de Mujer Dittaino",
                    price: "$357.00",
                    description: "El collar Dittaino, parte de la encantadora colección Wildlife Whispers, encapsula la esencia de la naturaleza con un toque de elegancia refinada. Este collar de oro destaca por su diseño central: una delicada flor que simboliza la belleza y la pureza del mundo natural. En el corazón de la flor, un diamante resplandece con una brillantez que capta la luz de manera sutil y sofisticada. Dittaino es una pieza ideal para quienes desean llevar consigo un recordatorio constante de la gracia y la maravilla de la naturaleza, combinando la simplicidad con un destello de lujo."
                },
                "1.5c": {
                    mainImage: "images/collar/nature5.PNG",
                    thumbnails: [
                        "images/collar/nature5_1.PNG",
                        "images/collar/nature5_2.PNG",
                        "images/collar/nature5_3.PNG"
                    ],
                    name: "Collar de Mujer Joliend",
                    price: "$512.00",
                    description: "El collar Joliend, de la encantadora colección Wildlife Whispers, captura la esencia de la naturaleza con su diseño etéreo y delicado. Este collar de oro rosa destaca por su exquisito centro, donde una mariposa elegantemente tallada despliega sus alas. La mariposa, símbolo de transformación y belleza, aporta un toque de magia y encanto al conjunto. Joliend es la elección perfecta para quienes desean llevar consigo un fragmento de la naturaleza, celebrando su delicadeza y esplendor en cada momento del día."
                },
                "1.6c": {
                    mainImage: "images/collar/nature6.PNG",
                    thumbnails: [
                        "images/collar/nature6_1.PNG",
                        "images/collar/nature6_2.PNG",
                        "images/collar/nature6_3.PNG"
                    ],
                    name: "Collar de Mujer Bucegi",
                    price: "$1,021.00",
                    description: "El collar Bucegi, una joya distintiva de la colección Wildlife Whispers, está diseñado en oro rosa y celebra la esencia de la naturaleza con su armonioso diseño. En el centro del collar se encuentra una delicada flor, seguida por otra justo debajo, creando una elegante cascada floral. Abajo de las flores, una encantadora catarina con detalles de oro añade un toque de alegría y color. Bucegi es el complemento perfecto para quienes desean llevar consigo la delicada belleza de la naturaleza, irradiando gracia y encanto en cada ocasión."
                },
                "1.7c": {
                    mainImage: "images/collar/nature7.PNG",
                    thumbnails: [
                        "images/collar/nature7_1.PNG",
                        "images/collar/nature7_2.PNG",
                        "images/collar/nature7_3.PNG"
                    ],
                    name: "Collar de Mujer Casulo",
                    price: "$906.00",
                    description: "El collar Casulo, parte de la encantadora colección Wildlife Whispers, está diseñado en oro rosa y evoca la delicadeza y la magia de la naturaleza. Este collar consta de dos finas cadenas: la primera cadena luce tres pequeños dijes de diamantes al centro, añadiendo un toque de brillo y elegancia. La segunda cadena culmina en una hermosa mariposa al centro, simbolizando la transformación y la belleza natural. Casulo es una pieza perfecta para quienes desean llevar consigo la esencia de la naturaleza, reflejando gracia y sofisticación en cada momento."
                },
                "1.8c": {
                    mainImage: "images/collar/nature8.PNG",
                    thumbnails: [
                        "images/collar/nature8_1.PNG",
                        "images/collar/nature8_2.PNG",
                        "images/collar/nature8_3.PNG"
                    ],
                    name: "Collar de Mujer Elimin",
                    price: "$540.00",
                    description: "El collar Elimin, perteneciente a la exquisita colección Wildlife Whispers, está creado en oro rosa y captura la esencia de la naturaleza en su diseño. Este collar presenta dos delicados detalles de hojas a los costados, simbolizando la frescura y vitalidad del follaje. En el centro, una hermosa flor con un diamante brillante en su núcleo añade un toque de elegancia y resplandor. Elimin es una pieza que combina la gracia natural con la sofisticación, perfecta para quienes desean llevar consigo la belleza del mundo natural en cada momento."
                },
                "1.9c": {
                    mainImage: "images/collar/nature9.PNG",
                    thumbnails: [
                        "images/collar/nature9_1.PNG",
                        "images/collar/nature9_2.PNG",
                        "images/collar/nature9_3.PNG"
                    ],
                    name: "Collar de Mujer Tirrena",
                    price: "$869.00",
                    description: "El collar Tirrena, de la encantadora colección Wildlife Whispers, es una celebración de la naturaleza en su forma más pura. Fabricado en plata fina, este collar presenta delicados adornos florales y hojas que evocan un jardín encantado. Cada flor y hoja está meticulosamente detallada, reflejando la belleza y fragilidad del mundo natural. Tirrena es una pieza elegante y sofisticada, ideal para quienes buscan un accesorio que combine la frescura de la naturaleza con un diseño atemporal y refinado."
                },
                "1.10c": {
                    mainImage: "images/collar/nature10.PNG",
                    thumbnails: [
                        "images/collar/nature10_1.PNG",
                        "images/collar/nature10_2.PNG",
                        "images/collar/nature10_3.PNG"
                    ],
                    name: "Collar de Mujer Venetico",
                    price: "$903.00",
                    description: "El collar Venetico, perteneciente a la exquisita colección Wildlife Whispers, es una obra maestra en plata fina que celebra la delicadeza y la belleza de la naturaleza. En el centro del collar, tres pequeñas flores meticulosamente elaboradas se entrelazan, creando un diseño sutil y encantador. Cada flor está cuidadosamente detallada, evocando la fragilidad y la perfección del mundo floral. Venetico es un accesorio elegante y sofisticado, ideal para aquellos que buscan llevar consigo un pedacito de naturaleza en su día a día."
                },
                "1.11c": {
                    mainImage: "images/collar/nature11.PNG",
                    thumbnails: [
                        "images/collar/nature11_1.PNG",
                        "images/collar/nature11_2.PNG",
                        "images/collar/nature11_3.PNG"
                    ],
                    name: "Collar de Mujer Antillo",
                    price: "$567.00",
                    description: "El collar Antillo, una joya central en la colección Wildlife Whispers, es un símbolo de la delicadeza y la elegancia natural. Fabricado en fina plata, este collar destaca por su hermoso dije de flor ubicado en el centro. La flor, con pétalos meticulosamente esculpidos, captura la esencia de la naturaleza en su forma más pura y serena. El diseño simple y sofisticado del collar Antillo lo convierte en una pieza versátil, ideal para cualquier ocasión."
                },
                "1.12c": {
                    mainImage: "images/collar/nature12.PNG",
                    thumbnails: [
                        "images/collar/nature12_1.PNG",
                        "images/collar/nature12_2.PNG",
                        "images/collar/nature12_3.PNG"
                    ],
                    name: "Collar de Mujer Caronia",
                    price: "$524.00",
                    description: "El collar Caronia es una pieza exquisita de la colección Wildlife Whispers, diseñado para capturar la esencia etérea de la naturaleza. Fabricado en plata de la más alta calidad, este collar presenta una perla central que emana elegancia y serenidad. Suspendidas de esta perla, tres delicadas flores caen en vertical, creando un diseño armonioso y encantador. Cada flor está finamente detallada, reflejando la belleza sutil de la flora natural."
                },
                "1.12c": {
                    mainImage: "images/collar/nature12.PNG",
                    thumbnails: [
                        "images/collar/nature12_1.PNG",
                        "images/collar/nature12_2.PNG",
                        "images/collar/nature12_3.PNG"
                    ],
                    name: "Collar de Mujer",
                    price: "$.00",
                    description: ""
                },
                "2c": {
                    mainImage: "images/collar/enlace1.PNG",
                    thumbnails: [
                        "images/collar/enlace1_1.PNG",
                        "images/collar/enlace1_2.PNG",
                        "images/collar/enlace1_3.PNG"
                    ],
                    name: "Collar de Mujer Prietenie",
                    price: "$519.0",
                    description: "El collar Prietenie de la colección Enlace Celestial es una obra de oro que celebra conexiones significativas con eslabones que simbolizan resistencia y adaptabilidad. Combina elegancia con formas orgánicas y materiales majestuosos, ideal para quienes valoran la belleza y la gracia de las conexiones humanas."
                },
                "2.2c": {
                    mainImage: "images/collar/enlace2.PNG",
                    thumbnails: [
                        "images/collar/enlace2_1.PNG",
                        "images/collar/enlace2_2.PNG",
                        "images/collar/enlace2_3.PNG"
                    ],
                    name: "Collar de Mujer Mengubah",
                    price: "$373.0",
                    description: "El collar Mengubah de la colección Enlace Celestial es una verdadera obra maestra de la joyería. Fabricado en oro de la más alta calidad, este collar irradia una elegancia atemporal. En el centro, un dije magnífico se adorna con diamantes incrustados, que destellan con cada movimiento y capturan la luz de manera deslumbrante. El diseño del dije evoca una sensación de transformación y conexión, simbolizando los enlaces invisibles que nos unen y nos hacen crecer. "
                },
                "2.3c": {
                    mainImage: "images/collar/enlace3.PNG",
                    thumbnails: [
                        "images/collar/enlace3_1.PNG",
                        "images/collar/enlace3_2.PNG",
                        "images/collar/enlace3_3.PNG"
                    ],
                    name: "Collar de Mujer Pettiness",
                    price: "$767.0",
                    description: "El collar Pettiness de la colección Enlace Celestial es una pieza extraordinaria que combina el lujo del oro con la exquisitez de las piedras preciosas. Este elegante collar presenta un diseño refinado con un dije central adornado con diamantes incrustados que brillan con una intensidad cautivadora. En el corazón del dije, una deslumbrante esmeralda añade un toque de color y sofisticación, simbolizando la belleza y la fuerza de la naturaleza."
                },
                "2.4c": {
                    mainImage: "images/collar/enlace4.PNG",
                    thumbnails: [
                        "images/collar/enlace4_1.PNG",
                        "images/collar/enlace4_2.PNG",
                        "images/collar/enlace4_3.PNG"
                    ],
                    name: "Collar de Mujer Csodo",
                    price: "$976.0",
                    description: "El collar Csodo de la colección Enlace Celestial es una obra maestra que exalta la belleza y la sofisticación en su máxima expresión. Este collar, elaborado en oro de la más alta calidad, presenta un diseño exquisito centrado en eslabones adornados con diamantes incrustados. Cada eslabón brilla con una intensidad cautivadora, creando un efecto deslumbrante que simboliza la interconexión y la fortaleza."
                },
                "2.5c": {
                    mainImage: "images/collar/enlace5.PNG",
                    thumbnails: [
                        "images/collar/enlace5_1.PNG",
                        "images/collar/enlace5_2.PNG",
                        "images/collar/enlace5_3.PNG"
                    ],
                    name: "Collar de Mujer Verenag",
                    price: "$762.0",
                    description: "El collar Verenag de la colección Enlace Celestial es una exquisita manifestación de elegancia y sofisticación. Este collar de oro se compone de dos delicadas cadenas que se entrelazan con gracia, creando una estructura que simboliza la conexión y la armonía. Al centro de cada cadena, resplandecen dijes adornados con diamantes, cuidadosamente seleccionados para captar y reflejar la luz de manera deslumbrante."
                },
                "2.6c": {
                    mainImage: "images/collar/enlace6.PNG",
                    thumbnails: [
                        "images/collar/enlace6_1.PNG",
                        "images/collar/enlace6_2.PNG",
                        "images/collar/enlace6_3.PNG"
                    ],
                    name: "Collar de Mujer Olesya",
                    price: "$1,073.0",
                    description: "El collar Olesya de la colección Enlace Celestial es una obra maestra de delicadeza y opulencia. Este collar de oro se destaca por su diseño refinado y su atención meticulosa a los detalles. En el centro, un imponente dije se adorna con exquisitas esmeraldas, irradiando un brillo intenso y cautivador. Las esmeraldas, cuidadosamente incrustadas, evocan la vitalidad y la riqueza de la naturaleza, fusionando el esplendor de lo orgánico con la elegancia atemporal del oro."
                },
                "2.7c": {
                    mainImage: "images/collar/enlace7.PNG",
                    thumbnails: [
                        "images/collar/enlace7_1.PNG",
                        "images/collar/enlace7_2.PNG",
                        "images/collar/enlace7_3.PNG"
                    ],
                    name: "Collar de Mujer Meangadh",
                    price: "$731.0",
                    description: "El collar Meangdh de la colección Enlace Celestial es una verdadera joya de sofisticación y elegancia. Este collar de oro se distingue por sus intrincados eslabones ubicados a un costado, cada uno meticulosamente incrustado con deslumbrantes diamantes. Los eslabones, como símbolos de las conexiones inquebrantables, resplandecen con el brillo eterno de los diamantes, reflejando la luz con una intensidad cautivadora."
                },
                "2.8c": {
                    mainImage: "images/collar/enlace8.PNG",
                    thumbnails: [
                        "images/collar/enlace8_1.PNG",
                        "images/collar/enlace8_2.PNG",
                        "images/collar/enlace8_3.PNG"
                    ],
                    name: "Collar de Mujer Smysl",
                    price: "$393.0",
                    description: "El collar Smysl de la colección Enlace Celestial es una obra maestra de la elegancia y la sofisticación. Confeccionado en oro, este collar presenta un dije rectangular adornado con deslumbrantes incrustaciones de diamantes. Cada diamante, cuidadosamente seleccionado y colocado, captura y refleja la luz, creando un brillo hipnótico que realza la belleza de la pieza."
                },
                "3c": {
                    mainImage: "images/collar/eterna1.PNG",
                    thumbnails: [
                        "images/collar/eterna1_1.PNG",
                        "images/collar/eterna1_2.PNG",
                        "images/collar/eterna1_3.PNG"
                    ],
                    name: "Collar de Mujer Umbrete",
                    price: "$556.00",
                    description: "El collar Umbrete de la colección Eterna Promesa es una elegante pieza de diamante que simboliza el compromiso eterno. Con un diseño refinado y delicado, este collar captura la esencia de la colección al combinar amor y elegancia. Perfecto para embellecer momentos especiales con su belleza atemporal y significado profundo."
                },
                "3.2c": {
                    mainImage: "images/collar/eterna2.PNG",
                    thumbnails: [
                        "images/collar/eterna2_1.PNG",
                        "images/collar/eterna2_2.PNG",
                        "images/collar/eterna2_3.PNG"
                    ],
                    name: "Collar de Mujer Tomares",
                    price: "$988.00",
                    description: "El collar Tomares de la colección Eterna Promesa es una pieza exquisita que encarna la esencia del amor eterno. Confeccionado con los más finos diamantes, Tomares destaca por su diseño central, donde un conjunto de diamantes perfectamente engarzados forma un punto focal deslumbrante. Del centro del collar, una elegante cascada de diamantes colgantes añade movimiento y brillo, creando un efecto visual hipnótico y sofisticado. "
                },
                "3.3c": {
                    mainImage: "images/collar/eterna3.PNG",
                    thumbnails: [
                        "images/collar/eterna3_1.PNG",
                        "images/collar/eterna3_2.PNG",
                        "images/collar/eterna3_3.PNG"
                    ],
                    name: "Collar de Mujer Moncoeur",
                    price: "$914.00",
                    description: "El collar Moncoeur de la colección Eterna Promesa es la personificación del amor eterno y la sofisticación. Este exquisito collar de diamantes destaca por su delicado diseño central, donde un brillante dije de diamantes cuelga con gracia. El dije, compuesto por un conjunto armonioso de diamantes, emana un resplandor que captura y refleja la luz con cada movimiento, simbolizando el brillo constante del amor verdadero."
                },
                "3.4c": {
                    mainImage: "images/collar/eterna4.PNG",
                    thumbnails: [
                        "images/collar/eterna4_1.PNG",
                        "images/collar/eterna4_2.PNG",
                        "images/collar/eterna4_3.PNG"
                    ],
                    name: "Collar de Mujer Loirevalley",
                    price: "$568.00",
                    description: "El collar Loirevalley, parte de la colección Eterna Promesa, es una verdadera joya de elegancia y amor eterno. Este exquisito collar de diamantes presenta una delicada decoración central de diamantes que resplandece con cada movimiento. La pieza central, un brillante diamante tallado con precisión, es rodeada por un halo de pequeños diamantes que amplifican su esplendor, creando un efecto visual deslumbrante."
                },
                "3.5c": {
                    mainImage: "images/collar/eterna5.PNG",
                    thumbnails: [
                        "images/collar/eterna5_1.PNG",
                        "images/collar/eterna5_2.PNG",
                        "images/collar/eterna5_3.PNG"
                    ],
                    name: "Collar de Mujer Metz",
                    price: "$678.00",
                    description: "Embárcate en el viaje del compromiso eterno con la Colección Eterna Promesa, donde el amor, la elegancia y tu historia única se entrelazan para crear momentos inolvidables. Permítenos ser testigos y compañeros en tu día especial, donde tus sueños se adornan con la belleza y el significado que merecen. Desde el brillo de un anillo de compromiso hasta la delicadeza de un conjunto de joyas nupciales, cada pieza de la Colección Eterna Promesa está diseñada para ser un símbolo de amor perdurable y compromiso eterno."
                },
                "3.6c": {
                    mainImage: "images/collar/eterna6.PNG",
                    thumbnails: [
                        "images/collar/eterna6_1.PNG",
                        "images/collar/eterna6_2.PNG",
                        "images/collar/eterna6_3.PNG"
                    ],
                    name: "Collar de Mujer Eiffel",
                    price: "$563.00",
                    description: "El collar Eiffel, una obra maestra de la Colección Eterna Promesa, encarna la elegancia y la sofisticación del amor eterno. Este exquisito collar de oro presenta un delicado diseño en el que los dijes de diamantes se encuentran meticulosamente dispuestos en el centro. Cada diamante brilla con una intensidad cautivadora, capturando y reflejando la luz en un resplandor deslumbrante."
                },
                "3.7c": {
                    mainImage: "images/collar/eterna7.PNG",
                    thumbnails: [
                        "images/collar/eterna7_1.PNG",
                        "images/collar/eterna7_2.PNG",
                        "images/collar/eterna7_3.PNG"
                    ],
                    name: "Collar de Mujer Chaumont",
                    price: "$669.00",
                    description: "El collar Chaumont, una joya exquisita de la Colección Eterna Promesa, captura la esencia de la elegancia y el compromiso eterno. Este majestuoso collar de oro se centra en un impresionante dije de esmeralda, una gema que simboliza la renovación y el amor perdurable. La esmeralda, de un verde profundo y vibrante, está magistralmente engarzada, destacando su brillo y su belleza natural."
                },
                "3.8c": {
                    mainImage: "images/collar/eterna8.PNG",
                    thumbnails: [
                        "images/collar/eterna8_1.PNG",
                        "images/collar/eterna8_2.PNG",
                        "images/collar/eterna8_3.PNG"
                    ],
                    name: "Collar de Mujer Beaunez",
                    price: "$698.00",
                    description: "El collar Beaunez de la Colección Eterna Promesa es la encarnación de la elegancia y el amor eterno. Esta impresionante joya está confeccionada en oro puro, destacando un diseño sofisticado y atemporal que realza la belleza de quien lo lleva. En el centro del collar, decoraciones con diamantes finamente incrustados forman un patrón elegante, irradiando un brillo resplandeciente que captura la luz y la mirada de todos los presentes."
                },
                //aretes
                "1ar": {
                    mainImage: "images/aretes/nature1.PNG",
                    thumbnails: [
                        "images/aretes/nature1_1.PNG",
                        "images/aretes/nature1_2.PNG",
                        "images/aretes/nature1_3.PNG"
                    ],
                    name: "Aretes de mujer Lipari",
                    price: "$442.00",
                    description: "Los aretes Lipari de la colección Wildlife Whispers son una delicada muestra de la naturaleza en oro. Cada par presenta una hoja, una perla y una flor, combinando elementos inspirados en la belleza natural. Este diseño celebra la elegancia y los detalles del mundo natural, ideal para quienes aprecian la serenidad y el encanto de la flora en cada ocasión."
                },
                "1.2ar": {
                    mainImage: "images/aretes/nature2.PNG",
                    thumbnails: [
                        "images/aretes/nature2_1.PNG",
                        "images/aretes/nature2_2.PNG",
                        "images/aretes/nature2_3.PNG"
                    ],
                    name: "Aretes de mujer Altofonte",
                    price: "$754.00",
                    description: "Los aretes Altofonte de la colección Wildlife Whispers son una exquisita representación de la naturaleza en oro. Cada arete presenta dos delicadas flores adornadas con diamantes decorativos, capturando la belleza y la gracia de los detalles naturales. Diseñados para los amantes de la flora y la fauna, estos aretes celebran la elegancia y la serenidad del mundo natural, añadiendo un toque de encanto a cualquier ocasión."
                },
                "1.3ar": {
                    mainImage: "images/aretes/nature3.PNG",
                    thumbnails: [
                        "images/aretes/nature3_1.PNG",
                        "images/aretes/nature3_2.PNG",
                        "images/aretes/nature3_3.PNG"
                    ],
                    name: "Aretes de mujer Conicatti",
                    price: "$370.00",
                    description: "Los aretes Conicatti de la colección Wildlife Whispers son una elegante manifestación de la naturaleza en oro. Cada arete presenta una flor con un diamante en el centro, de la cual cuelga una delicada cadena de eslabones. Este diseño captura la esencia de la belleza natural, combinando la gracia de los detalles florales con la elegancia de los diamantes y las cadenas finas."
                },
                "1.4ar": {
                    mainImage: "images/aretes/nature4.PNG",
                    thumbnails: [
                        "images/aretes/nature4_1.PNG",
                        "images/aretes/nature4_2.PNG",
                        "images/aretes/nature4_3.PNG"
                    ],
                    name: "Aretes de mujer Bisceglie",
                    price: "$912.00",
                    description: "Los aretes Bisceglie de la colección Wildlife Whispers son una encantadora representación de la naturaleza en forma de argollas de oro. A lo largo de toda su longitud, estos aretes están adornados con delicadas flores, capturando la esencia de la belleza natural. Diseñados para los amantes de la flora, estos aretes celebran los detalles y la gracia del mundo natural, añadiendo un toque de elegancia y encanto a cualquier ocasión."
                },
                "1.5ar": {
                    mainImage: "images/aretes/nature5.PNG",
                    thumbnails: [
                        "images/aretes/nature5_1.PNG",
                        "images/aretes/nature5_2.PNG",
                        "images/aretes/nature5_3.PNG"
                    ],
                    name: "Aretes de mujer Galatea",
                    price: "$883.00",
                    description: "Los aretes Galatea de la colección Wildlife Whispers son una exquisita representación de la naturaleza en oro rosa. Cada arete presenta una mariposa adornada con diamantes, de la cual cuelgan delicadas cadenas que añaden movimiento y elegancia. Este diseño captura la belleza y la magia de las mariposas, celebrando los detalles encantadores del mundo natural. Perfectos para quienes aman la naturaleza, estos aretes aportan un toque de gracia y sofisticación a cualquier conjunto."
                },
                "1.6ar": {
                    mainImage: "images/aretes/nature6.PNG",
                    thumbnails: [
                        "images/aretes/nature6_1.PNG",
                        "images/aretes/nature6_2.PNG",
                        "images/aretes/nature6_3.PNG"
                    ],
                    name: "Aretes de mujer Halti",
                    price: "$1,392.00",
                    description: "Los aretes Halti de la colección Wildlife Whispers son una encantadora representación de la naturaleza en oro rosa. Cada arete presenta una delicada catarina, de la cual cuelgan finas cadenas que añaden movimiento y elegancia al diseño. Inspirados en la magia de las mariquitas, estos aretes celebran los detalles y la gracia del mundo natural, perfectos para quienes aman la naturaleza y desean llevar su belleza consigo en cada jornada"
                },
                "1.7ar": {
                    mainImage: "images/aretes/nature7.PNG",
                    thumbnails: [
                        "images/aretes/nature7_1.PNG",
                        "images/aretes/nature7_2.PNG",
                        "images/aretes/nature7_3.PNG"
                    ],
                    name: "Aretes de mujer Rosabella",
                    price: "$805.00",
                    description: "Los aretes Rosabella de la colección Wildlife Whispers son una exquisita manifestación de la naturaleza en oro rosa. Estos aretes colgantes terminan en una delicada flor, cada una con un diamante centelleante en su centro. Celebrando la belleza y los detalles del mundo natural, los aretes Rosabella son perfectos para quienes aman la naturaleza y buscan llevar su encanto y gracia en cada ocasión."
                },
                "1.8ar": {
                    mainImage: "images/aretes/nature8.PNG",
                    thumbnails: [
                        "images/aretes/nature8_1.PNG",
                        "images/aretes/nature8_2.PNG",
                        "images/aretes/nature8_3.PNG"
                    ],
                    name: "Aretes de mujer Floralis",
                    price: "$415.00",
                    description: "Los aretes Floralis de la colección Wildlife Whispers son una exquisita muestra de la naturaleza en oro rosa. Estos aretes colgantes presentan una hoja y una flor al final, resaltando con elegancia un diamante en el centro de la flor. Inspirados en la belleza y los detalles naturales, los aretes Floralis lucen encantadores y son perfectos para quienes aprecian la serenidad y la gracia de la naturaleza en cada momento."
                },
                "1.9ar": {
                    mainImage: "images/aretes/nature9.PNG",
                    thumbnails: [
                        "images/aretes/nature9_1.PNG",
                        "images/aretes/nature9_2.PNG",
                        "images/aretes/nature9_3.PNG"
                    ],
                    name: "Aretes de mujer Palagonia",
                    price: "$512.00",
                    description: "Los aretes Palagonia de la colección Wildlife Whispers son una elegante celebración de la naturaleza en plata. Diseñados como argollas colgantes, cada arete termina con una delicada hoja que captura la belleza y la serenidad del mundo natural. Perfectos para quienes aman los detalles sutiles y desean llevar consigo el encanto de la naturaleza en cada ocasión."
                },
                "1.10ar": {
                    mainImage: "images/aretes/nature10.PNG",
                    thumbnails: [
                        "images/aretes/nature10_1.PNG",
                        "images/aretes/nature10_2.PNG",
                        "images/aretes/nature10_3.PNG"
                    ],
                    name: "Aretes de mujer Saponara",
                    price: "$997.00",
                    description: "Los aretes Saponara de la colección Wildlife Whispers son una encantadora expresión de la naturaleza en plata. Cada arete presenta una flor decorada con diamantes y delicadas cadenas que culminan en una hoja, capturando la gracia y la belleza de los detalles naturales. Inspirados en la magia de las flores y las hojas, estos aretes son ideales para quienes encuentran alegría en los patrones y la vibrante vida de la naturaleza, agregando un toque de elegancia a cualquier ocasión."
                },
                "1.11ar": {
                    mainImage: "images/aretes/nature11.PNG",
                    thumbnails: [
                        "images/aretes/nature11_1.PNG",
                        "images/aretes/nature11_2.PNG",
                        "images/aretes/nature11_3.PNG"
                    ],
                    name: "Aretes de mujer Acquedolci",
                    price: "$1,087.00",
                    description: "Los aretes Acquedolci de la colección Wildlife Whispers son una hermosa manifestación de la naturaleza en plata. Cada arete presenta una flor central que se desglosa en tres flores más pequeñas, simbolizando la expansión y la vitalidad del mundo natural. Además, cuentan con tres cadenas colgantes que añaden movimiento y elegancia al diseño. Inspirados en la belleza de las flores y los detalles orgánicos, estos aretes son perfectos para quienes aprecian la delicadeza y la gracia de la naturaleza, complementando cualquier atuendo con su encanto único."
                },
                "1.12ar": {
                    mainImage: "images/aretes/nature12.PNG",
                    thumbnails: [
                        "images/aretes/nature12_1.PNG",
                        "images/aretes/nature12_2.PNG",
                        "images/aretes/nature12_3.PNG"
                    ],
                    name: "Aretes de mujer Imprecise",
                    price: "$580.00",
                    description: "Los aretes Imprecise de la colección Wildlife Whispers son una elegante expresión de la naturaleza en plata. Cada arete presenta una delicada flor acompañada de una hoja, capturando la esencia y la belleza de los detalles naturales. Inspirados en la gracia de las flores y las hojas, estos aretes son perfectos para quienes aman la naturaleza y desean llevar consigo su encanto en cada ocasión. Añaden un toque de sofisticación y conexión con el mundo natural a cualquier conjunto."
                },
                "2ar": {
                    mainImage: "images/aretes/enlace1.PNG",
                    thumbnails: [
                        "images/aretes/enlace1_1.PNG",
                        "images/aretes/enlace1_2.PNG",
                        "images/aretes/enlace1_3.PNG"
                    ],
                    name: "Aretes de mujer Netross",
                    price: "$469.00",
                    description: "Los aretes Netross de la colección Enlace Celestial son elegantes y sofisticados. Elaborados en oro, estos aretes colgantes están decorados con diamantes que añaden un brillo sutil y una perla al final que aporta un toque de refinamiento. Capturan la esencia de la colección al fusionar la elegancia con la simbología de las conexiones significativas. Ideales para quienes aprecian la belleza atemporal y la delicadeza de los detalles en la joyería."
                },
                "2.2ar": {
                    mainImage: "images/aretes/enlace2.PNG",
                    thumbnails: [
                        "images/aretes/enlace2_1.PNG",
                        "images/aretes/enlace2_2.PNG",
                        "images/aretes/enlace2_3.PNG"
                    ],
                    name: "Aretes de mujer Dianas",
                    price: "$288.00",
                    description: "Los aretes Dianas de la colección Enlace Celestial son una deslumbrante muestra de elegancia y simbolismo en oro. Diseñados como colgantes, estos aretes presentan una forma de infinito adornada con diamantes incrustados, simbolizando la eternidad y las conexiones perdurables. Una delicada cadena añade un toque de sofisticación y movimiento. Estos aretes capturan la esencia de la colección, fusionando líneas suaves y contornos definidos para contar una historia de unión y crecimiento. Perfectos para quienes valoran la elegancia y el significado profundo en sus joyas."
                },
                "2.3ar": {
                    mainImage: "images/aretes/enlace3.PNG",
                    thumbnails: [
                        "images/aretes/enlace3_1.PNG",
                        "images/aretes/enlace3_2.PNG",
                        "images/aretes/enlace3_3.PNG"
                    ],
                    name: "Aretes de mujer Couple",
                    price: "$713.00",
                    description: "Los aretes Couple de la colección Enlace Celestial son una exquisita manifestación de la conexión y la elegancia en oro. Estas pequeñas argollas están decoradas con eslabones, cada uno adornado con diamantes incrustados que añaden un brillo deslumbrante. Capturando la esencia de la resistencia y la adaptabilidad, los aretes Couple fusionan formas orgánicas con la majestuosidad de los materiales, contando una historia de unión y crecimiento. Perfectos para quienes valoran la belleza y el simbolismo en sus joyas, estos aretes son una elegante adición a cualquier colección."
                },
                "2.4ar": {
                    mainImage: "images/aretes/enlace4.PNG",
                    thumbnails: [
                        "images/aretes/enlace4_1.PNG",
                        "images/aretes/enlace4_2.PNG",
                        "images/aretes/enlace4_3.PNG"
                    ],
                    name: "Aretes de mujer Lilijaj",
                    price: "$494.00",
                    description: "Los aretes Lilijaj de la colección Enlace Celestial son una sofisticada expresión de la conexión y la elegancia en oro. Con una forma peculiar y distintiva, estos aretes presentan delicadas cadenas colgantes que añaden movimiento y gracia. Capturando la esencia de la resistencia y la adaptabilidad, los aretes Lilijaj fusionan líneas suaves y contornos definidos, contando una historia de unión y crecimiento. Perfectos para quienes valoran la singularidad y el simbolismo en sus joyas, estos aretes son una adición elegante y significativa a cualquier colección."
                },
                "2.5ar": {
                    mainImage: "images/aretes/enlace5.PNG",
                    thumbnails: [
                        "images/aretes/enlace5_1.PNG",
                        "images/aretes/enlace5_2.PNG",
                        "images/aretes/enlace5_3.PNG"
                    ],
                    name: "Aretes de mujer Feja",
                    price: "$822.00",
                    description: "Los aretes Feja de la colección Enlace Celestial son una sublime representación de la conexión y la elegancia en oro. Estas pequeñas argollas presentan un diseño único, de las cuales cuelga otra argolla adornada con diamantes incrustados en toda su longitud, añadiendo un brillo deslumbrante. Capturando la esencia de la resistencia y la adaptabilidad, los aretes Feja combinan formas orgánicas y materiales majestuosos, contando una historia de unión y crecimiento. Perfectos para quienes valoran la sofisticación y el simbolismo en sus joyas, estos aretes son una adición encantadora a cualquier colección."
                },
                "2.6ar": {
                    mainImage: "images/aretes/enlace6.PNG",
                    thumbnails: [
                        "images/aretes/enlace6_1.PNG",
                        "images/aretes/enlace6_2.PNG",
                        "images/aretes/enlace6_3.PNG"
                    ],
                    name: "Aretes de mujer Idaeus",
                    price: "$632.00",
                    description: "Los aretes Ideaeus de la colección Enlace Celestial son una exquisita representación de la conexión y la elegancia en oro. Con una forma peculiar y distintiva, estos aretes están adornados con diamantes incrustados que añaden un brillo deslumbrante. Capturando la esencia de la resistencia y la adaptabilidad, los aretes Ideaeus combinan líneas suaves y contornos definidos, narrando una historia de unión y crecimiento. Perfectos para quienes valoran la sofisticación y el simbolismo en sus joyas, estos aretes son una adición encantadora y significativa a cualquier colección."
                },
                "2.7ar": {
                    mainImage: "images/aretes/enlace7.PNG",
                    thumbnails: [
                        "images/aretes/enlace7_1.PNG",
                        "images/aretes/enlace7_2.PNG",
                        "images/aretes/enlace7_3.PNG"
                    ],
                    name: "Aretes de mujer Parcha",
                    price: "$563.00",
                    description: "Los aretes Parcha de la colección Enlace Celestial son una exquisita manifestación de la elegancia y la conexión en oro. Estos aretes colgantes presentan una forma ondulada distintiva, adornada con diamantes incrustados que añaden un brillo deslumbrante. Capturando la esencia de la resistencia y la adaptabilidad, los aretes Parcha combinan líneas suaves y contornos definidos, contando una historia de unión y crecimiento. Perfectos para quienes valoran la sofisticación y el simbolismo en sus joyas, estos aretes son una adición encantadora y significativa a cualquier colección."
                },
                "2.8ar": {
                    mainImage: "images/aretes/enlace8.PNG",
                    thumbnails: [
                        "images/aretes/enlace8_1.PNG",
                        "images/aretes/enlace8_2.PNG",
                        "images/aretes/enlace8_3.PNG"
                    ],
                    name: "Aretes de mujer Tamu",
                    price: "$661.00",
                    description: "Los aretes Tamu de la colección Enlace Celestial son una elegante representación de la conexión y la belleza en oro. Estas pequeñas argollas están adornadas con diamantes incrustados y presentan una forma triangular en la parte central, culminando en una delicada perla. Capturando la esencia de la resistencia y la adaptabilidad, los aretes Tamu combinan líneas suaves y contornos definidos, narrando una historia de unión y crecimiento. Perfectos para quienes valoran la sofisticación y el simbolismo en sus joyas, estos aretes son una adición encantadora a cualquier colección."
                },
                "3ar": {
                    mainImage: "images/aretes/eterna1.PNG",
                    thumbnails: [
                        "images/aretes/eterna1_1.PNG",
                        "images/aretes/eterna1_2.PNG",
                        "images/aretes/eterna1_3.PNG"
                    ],
                    name: "Aretes de mujer Duygus",
                    price: "$1,039.00",
                    description: "Los aretes Duygus de la colección Eterna Promesa son una declaración de elegancia y compromiso en diamante. Con un diseño refinado y delicado, estos aretes capturan la esencia de la colección, simbolizando el amor perdurable y el compromiso eterno. Ideales para embellecer momentos especiales con su belleza atemporal y significado profundo."
                },
                "3.2ar": {
                    mainImage: "images/aretes/eterna2.PNG",
                    thumbnails: [
                        "images/aretes/eterna2_1.PNG",
                        "images/aretes/eterna2_2.PNG",
                        "images/aretes/eterna2_3.PNG"
                    ],
                    name: "Aretes de mujer Chaumont",
                    price: "$970.00",
                    description: "Los aretes Chaumont de la colección Eterna Promesa son una exquisita manifestación de amor y elegancia en oro. Estos aretes colgantes presentan una deslumbrante esmeralda en el centro, rodeada de diamantes incrustados que realzan su brillo y sofisticación. Diseñados para simbolizar un compromiso eterno, los aretes Chaumont capturan la esencia de momentos inolvidables y el significado profundo del amor duradero. Perfectos para el día especial, estos aretes combinan la belleza clásica con un toque de lujo, siendo una adición ideal a cualquier conjunto de joyas nupciales."
                },
                "3.3ar": {
                    mainImage: "images/aretes/eterna3.PNG",
                    thumbnails: [
                        "images/aretes/eterna3_1.PNG",
                        "images/aretes/eterna3_2.PNG",
                        "images/aretes/eterna3_3.PNG"
                    ],
                    name: "Aretes de mujer Eiffel",
                    price: "$851.00",
                    description: "Los aretes Eiffel de la colección Eterna Promesa son una muestra sublime de amor y elegancia en oro. Estos pendientes deslumbrantes están adornados con diamantes incrustados que añaden un brillo excepcional, culminando en una delicada perla al final. Diseñados para simbolizar un compromiso eterno, los aretes Eiffel capturan la esencia de momentos inolvidables y la belleza duradera del amor verdadero. Perfectos para el día especial, estos aretes combinan la sofisticación clásica con un toque de lujo, convirtiéndose en una pieza ideal dentro de cualquier conjunto de joyas nupciales."
                },
                "3.4ar": {
                    mainImage: "images/aretes/eterna4.PNG",
                    thumbnails: [
                        "images/aretes/eterna4_1.PNG",
                        "images/aretes/eterna4_2.PNG",
                        "images/aretes/eterna4_3.PNG"
                    ],
                    name: "Aretes de mujer Trouville",
                    price: "$782.00",
                    description: "Sumérgete en la elegancia atemporal de los aretes Trouville de la colección Eterna Promesa. Estos exquisitos aretes de oro capturan la esencia del compromiso eterno con su diseño meticuloso y refinado. Cada detalle está adornado con brillantes diamantes que rodean una perla central, creando una expresión sublime de amor y elegancia. Desde el brillo resplandeciente de los diamantes hasta la suavidad de la perla, cada pieza de la colección está diseñada para adornar tus momentos especiales con significado y belleza perdurable."
                },
                "3.5ar": {
                    mainImage: "images/aretes/eterna5.PNG",
                    thumbnails: [
                        "images/aretes/eterna5_1.PNG",
                        "images/aretes/eterna5_2.PNG",
                        "images/aretes/eterna5_3.PNG"
                    ],
                    name: "Aretes de mujer Vannes",
                    price: "$539.00",
                    description: "Sumérgete en la esencia etérea de los aretes Vannes de la Colección Eterna Promesa. Estos exquisitos aretes de oro capturan la promesa de amor eterno con su diseño distintivo y elegante. Formas triangulares delicadamente adornadas con diamantes incrustados brillan con la misma intensidad que tus sueños de compromiso. Cada detalle está cuidadosamente diseñado para reflejar la belleza y el significado duradero de tu historia única. Celebra cada momento especial con la elegancia y el brillo que mereces."
                },
                "3.6ar": {
                    mainImage: "images/aretes/eterna6.PNG",
                    thumbnails: [
                        "images/aretes/eterna6_1.PNG",
                        "images/aretes/eterna6_2.PNG",
                        "images/aretes/eterna6_3.PNG"
                    ],
                    name: "Aretes de mujer Pedrera",
                    price: "$1,052.00",
                    description: "Embárcate en la elegancia eterna con los aretes Pedrera de la Colección Eterna Promesa. Estas argollas pequeñas, adornadas con diamantes brillantes, capturan la esencia del compromiso eterno y el amor perdurable. Cada destello de diamante refleja la belleza y la promesa de momentos inolvidables, celebrando la delicadeza y la majestuosidad de tu historia única. Con los aretes Pedrera, tus sueños se adornan con significado y belleza, marcando cada momento especial con un símbolo de amor eterno."
                },
                "3.7ar": {
                    mainImage: "images/aretes/eterna7.PNG",
                    thumbnails: [
                        "images/aretes/eterna7_1.PNG",
                        "images/aretes/eterna7_2.PNG",
                        "images/aretes/eterna7_3.PNG"
                    ],
                    name: "Aretes de mujer Region",
                    price: "$945.00",
                    description: "Embárcate en la elegancia eterna con los aretes Region de la Colección Eterna Promesa. Estos aretes colgantes, adornados con diamantes incrustados en una forma irregular, capturan la esencia del compromiso eterno y la belleza del amor perdurable. Cada diamante brilla con la promesa de momentos inolvidables, reflejando la delicadeza y la majestuosidad de tu historia única. Con los aretes Region, tus sueños se adornan con significado y belleza, marcando cada día especial con un símbolo de amor eterno."
                },
                "3.8ar": {
                    mainImage: "images/aretes/eterna8.PNG",
                    thumbnails: [
                        "images/aretes/eterna8_1.PNG",
                        "images/aretes/eterna8_2.PNG",
                        "images/aretes/eterna8_3.PNG"
                    ],
                    name: "Aretes de mujer Purchaser",
                    price: "$455.00",
                    description: "Sumérgete en la elegancia atemporal con los aretes Purchaser de la Colección Eterna Promesa. Estos exquisitos aretes en forma de V están adornados con diamantes incrustados a lo largo de su longitud, capturando la esencia del compromiso eterno y la belleza del amor perdurable. Cada diamante brilla con la promesa de momentos inolvidables, reflejando la delicadeza y la majestuosidad de tu historia única. Con los aretes Purchaser, tus sueños se adornan con significado y belleza, marcando cada día especial con un símbolo de amor eterno."
                },
                "3.9ar": {
                    mainImage: "images/aretes/eterna9.PNG",
                    thumbnails: [
                        "images/aretes/eterna9_1.PNG",
                        "images/aretes/eterna9_2.PNG",
                        "images/aretes/eterna9_3.PNG"
                    ],
                    name: "Aretes de mujer Marathos",
                    price: "$575.00",
                    description: "Explora la sublime elegancia de los aretes Marathos de la Colección Eterna Promesa. Estos deslumbrantes aretes colgantes están meticulosamente adornados con relucientes diamantes a lo largo de toda su longitud. Capturan la esencia del compromiso eterno y la promesa de amor perdurable, reflejando la belleza y el significado de momentos inolvidables. Con cada destello, los aretes Marathos celebran la unión de dos almas en un viaje hacia la eternidad, embelleciendo cada ocasión especial con su gracia y majestuosidad incomparables."
                },
                "3.10ar": {
                    mainImage: "images/aretes/eterna10.PNG",
                    thumbnails: [
                        "images/aretes/eterna10_1.PNG",
                        "images/aretes/eterna10_2.PNG",
                        "images/aretes/eterna10_3.PNG"
                    ],
                    name: "Aretes de mujer Security",
                    price: "$784.00",
                    description: "Descubre la sublime elegancia de los aretes Security de la Colección Eterna Promesa. Este cautivador diseño presenta un gran diamante rectangular en su centro, resaltando su belleza y brillo incomparables. Cada detalle de estos aretes está meticulosamente diseñado para simbolizar el compromiso eterno y la promesa de amor perdurable. Desde su imponente presencia hasta su sofisticada artesanía, los aretes Security son el complemento perfecto para celebrar momentos inolvidables y adornar tus sueños con significado y elegancia."
                },
                "3.11ar": {
                    mainImage: "images/aretes/eterna11.PNG",
                    thumbnails: [
                        "images/aretes/eterna11_1.PNG",
                        "images/aretes/eterna11_2.PNG",
                        "images/aretes/eterna11_3.PNG"
                    ],
                    name: "Aretes de mujer Larochelle",
                    price: "$479.00",
                    description: "Explora la sublime elegancia de los aretes Larochelle de la Colección Eterna Promesa. Estos impresionantes aretes están adornados con diamantes dispuestos en forma de rombo, creando una brillante armonía de luz y forma. Cada diamante está meticulosamente seleccionado y engastado para capturar la esencia del amor perdurable y el compromiso eterno. Con un diseño que fusiona la sofisticación atemporal con la delicadeza moderna, los aretes Larochelle son el símbolo perfecto para acompañar tus momentos más especiales, llenándolos de belleza y significado inolvidables."
                },
                "3.12ar": {
                    mainImage: "images/aretes/eterna12.PNG",
                    thumbnails: [
                        "images/aretes/eterna12_1.PNG",
                        "images/aretes/eterna12_2.PNG",
                        "images/aretes/eterna12_3.PNG"
                    ],
                    name: "Aretes de mujer Regulator",
                    price: "$642.00",
                    description: "Sumérgete en la sublime elegancia de los aretes Regulator de la Colección Eterna Promesa. Estos impresionantes aretes capturan la esencia del compromiso eterno con un gran diamante central en forma de óvalo, rodeado delicadamente por más diamantes que resplandecen con luz propia. Cada detalle está meticulosamente diseñado para celebrar la unión y el amor perdurable, fusionando la majestuosidad de los diamantes con la delicadeza de su forma ovalada. Los aretes Regulator son el complemento perfecto para iluminar tus momentos más especiales con una belleza que perdura a través del tiempo y el significado que trasciende las palabras."
                },
                "1p": {
                    mainImage: "images/pulseras/nature1.PNG",
                    thumbnails: [
                        "images/pulseras/nature1_1.PNG",
                        "images/pulseras/nature1_2.PNG",
                        "images/pulseras/nature1_3.PNG"
                    ],
                    name: "Brazalete de mujer Fiumicino",
                    price: "$1,691.00",
                    description: "El brazalete Fiumicino de oro es una pieza impresionante que destaca por su adorno floral. Este diseño elegante y sofisticado captura la esencia de la colección con su detalle floral, que refleja la belleza y la delicadeza de la naturaleza. Ideal para quienes buscan una joya que combine elegancia con la inspiración de la flora, este brazalete es perfecto para cualquier ocasión especial."
                },
                "1.2p": {
                    mainImage: "images/pulseras/nature2.PNG",
                    thumbnails: [
                        "images/pulseras/nature2_1.PNG",
                        "images/pulseras/nature2_2.PNG",
                        "images/pulseras/nature2_3.PNG"
                    ],
                    name: "Brazalete de mujer Villafranca",
                    price: "$1,836.00",
                    description: "Explora la exquisita pulsera Villafranca de la colección Wildlife Whispers, donde la naturaleza cobra vida en cada detalle. Esta pulsera de oro celebra la belleza natural con tres delicadas flores en su centro, cada una adornada con un brillante diamante que resalta su elegancia. Los diamantes incrustados a lo largo de la pulsera capturan la luz y añaden un brillo sutil, recordándonos la gracia y la majestuosidad de las maravillas naturales. Lleva contigo la magia de la naturaleza con la pulsera Villafranca, una pieza diseñada para los corazones que encuentran la belleza en los patrones inspirados en hojas y las vibrantes mariposas."
                },
                "1.3p": {
                    mainImage: "images/pulseras/nature3.PNG",
                    thumbnails: [
                        "images/pulseras/nature3_1.PNG",
                        "images/pulseras/nature3_2.PNG",
                        "images/pulseras/nature3_3.PNG"
                    ],
                    name: "Pulsera de Mujer Pasig",
                    price: "$610.00",
                    description: "Explora la pulsera de oro Pasig de la colección Wildlife Whispers, una pieza que captura la esencia encantadora de la naturaleza. Esta pulsera está compuesta por delicadas cadenas que se entrelazan con gracia, creando un efecto sutil y elegante alrededor de la muñeca. En el centro de la pulsera, brilla una libélula adornada con pequeños diamantes, que reflejan la luz con cada movimiento. La libélula, con su simbolismo de transformación y adaptabilidad, evoca la magia de la naturaleza y la conexión con su belleza efímera. Con la pulsera Pasig, lleva contigo la gracia y el encanto de las criaturas naturales que inspiran cada detalle de esta colección."
                },
                "1.4p": {
                    mainImage: "images/pulseras/nature4.PNG",
                    thumbnails: [
                        "images/pulseras/nature4_1.PNG",
                        "images/pulseras/nature4_2.PNG",
                        "images/pulseras/nature4_3.PNG"
                    ],
                    name: "Brazalete de mujer Girokomeio",
                    price: "$1,265.00",
                    description: "Explora el encanto natural de la pulsera de oro Girokomeio de la colección Wildlife Whispers. Este brazalete está meticulosamente diseñado con un patrón de panal de abeja que captura la esencia de la laboriosa naturaleza. En el centro del brazalete, una abeja meticulosamente detallada añade un toque de vida y movimiento, con pequeños detalles que resaltan su belleza. Las líneas limpias y el brillo del oro realzan la estructura geométrica del panal, mientras que los delicados detalles evocan la conexión con la naturaleza. Con la pulsera Girokomeio, lleva contigo la elegancia inspirada en la vida y la energía del mundo natural, destacando la gracia de cada momento con su diseño único y significativo."
                },
                "1.5p": {
                    mainImage: "images/pulseras/nature5.PNG",
                    thumbnails: [
                        "images/pulseras/nature5_1.PNG",
                        "images/pulseras/nature5_2.PNG",
                        "images/pulseras/nature5_3.PNG"
                    ],
                    name: "Pulsera de Mujer Nessie",
                    price: "$615.00",
                    description: "Explora la pulsera Nessie de la colección Wildlife Whispers, una joya que captura la esencia de la naturaleza con elegancia y gracia. Este brazalete está elaborado en oro rosa, destacando por su delicada cadena que resalta la sutileza y la belleza de los detalles naturales. En el centro de la pulsera, una mariposa vibrante y detallada emerge como símbolo de libertad y transformación. Sus alas adornadas con pequeños diamantes capturan la luz de manera encantadora, creando un efecto deslumbrante que complementa la calidez del oro rosa."
                },
                "1.6p": {
                    mainImage: "images/pulseras/nature6.PNG",
                    thumbnails: [
                        "images/pulseras/nature6_1.PNG",
                        "images/pulseras/nature6_2.PNG",
                        "images/pulseras/nature6_3.PNG"
                    ],
                    name: "Brazalete de mujer Clancy",
                    price: "$1,311.00",
                    description: "Explora la pulsera Clancy de la colección Wildlife Whispers. Este brazalete de oro rosa está adornado con delicadas decoraciones de flores, mariposas y hojas, capturando la esencia de la naturaleza en cada detalle. Cada elemento está meticulosamente diseñado para celebrar la belleza y la gracia del mundo natural, acompañándote con su encanto en cada ocasión especial."
                },
                "1.7p": {
                    mainImage: "images/pulseras/nature7.PNG",
                    thumbnails: [
                        "images/pulseras/nature7_1.PNG",
                        "images/pulseras/nature7_2.PNG",
                        "images/pulseras/nature7_3.PNG"
                    ],
                    name: "Pulsera de Mujer Mandanici",
                    price: "$594.00",
                    description: "La pulsera Mandanici de la colección Wildlife Whispers es un refinado brazalete de oro rosa con tres cadenas delicadamente entrelazadas. En el centro, tres flores adornadas con detalles inspirados en la naturaleza capturan la esencia de hojas, mariposas y mariquitas. Es una joya que celebra la belleza y los detalles del mundo natural, diseñada para acompañarte con gracia en cada ocasión."
                },
                "1.8p": {
                    mainImage: "images/pulseras/nature8.PNG",
                    thumbnails: [
                        "images/pulseras/nature8_1.PNG",
                        "images/pulseras/nature8_2.PNG",
                        "images/pulseras/nature8_3.PNG"
                    ],
                    name: "Pulsera de Mujer Yushan",
                    price: "$1,014.00",
                    description: "La pulsera Yushan de la colección Wildlife Whispers captura la esencia del mundo natural con su diseño delicado y elegante. Fabricada en oro rosa, presenta dos cadenas que envuelven la muñeca con gracia. En el centro, una catarina brilla como punto focal, rodeada de pequeñas flores que adornan la pulsera con detalles inspirados en hojas y mariposas. Es una joya que celebra la belleza y la magia de la naturaleza, perfecta para acompañarte en cada jornada con su gracia única."
                },
                "1.9p": {
                    mainImage: "images/pulseras/nature9.PNG",
                    thumbnails: [
                        "images/pulseras/nature9_1.PNG",
                        "images/pulseras/nature9_2.PNG",
                        "images/pulseras/nature9_3.PNG"
                    ],
                    name: "Pulsera de Mujer Serekunda",
                    price: "$1,782.00",
                    description: "La pulsera Serekunda de la colección Wildlife Whispers es una exquisita pieza de plata diseñada para envolver elegantemente la muñeca. Su diseño en espiral permite que la pulsera se ajuste con comodidad y estilo. En el extremo, una delicada libélula añade un toque de magia y naturaleza, evocando la gracia y ligereza de este hermoso insecto. Esta pulsera es el complemento perfecto para quienes desean llevar consigo un pedacito de la belleza natural en cada momento."
                },
                "1.10p": {
                    mainImage: "images/pulseras/nature10.PNG",
                    thumbnails: [
                        "images/pulseras/nature10_1.PNG",
                        "images/pulseras/nature10_2.PNG",
                        "images/pulseras/nature10_3.PNG"
                    ],
                    name: "Brazalete de mujer Colihaut",
                    price: "$1,948.00",
                    description: "La pulsera Colihaut de la colección Wildlife Whispers es una obra maestra de plata diseñada para capturar la esencia de la naturaleza. Este elegante brazalete presenta una delicada libélula de oro en el centro, simbolizando la gracia y la ligereza. Alrededor de la libélula, diamantes incrustados añaden un brillo exquisito, realzando la belleza natural de la pieza. Perfecta para quienes aprecian los detalles finos y la armonía con el entorno natural, la pulsera Colihaut es un tributo a la magia de la vida silvestre."
                },
                "1.11p": {
                    mainImage: "images/pulseras/nature11.PNG",
                    thumbnails: [
                        "images/pulseras/nature11_1.PNG",
                        "images/pulseras/nature11_2.PNG",
                        "images/pulseras/nature11_3.PNG"
                    ],
                    name: "Pulsera de Mujer Castelmola",
                    price: "$1,419.00",
                    description: "La pulsera Castelmola de la colección Wildlife Whispers es una exquisita joya de plata que encapsula la belleza de la naturaleza. Esta pieza delicada y elegante está adornada con flores esculpidas meticulosamente, que se distribuyen a lo largo de toda la pulsera. Pequeños diamantes incrustados en el centro de cada flor añaden un brillo sutil y encantador. La pulsera Castelmola es perfecta para quienes desean llevar consigo un toque de la naturaleza, celebrando su esplendor en cada detalle."
                },
                "1.12p": {
                    mainImage: "images/pulseras/nature12.PNG",
                    thumbnails: [
                        "images/pulseras/nature12_1.PNG",
                        "images/pulseras/nature12_2.PNG",
                        "images/pulseras/nature12_3.PNG"
                    ],
                    name: "Pulsera de Mujer Canefield",
                    price: "$1,841.00",
                    description: "La pulsera Canefield de la colección Wildlife Whispers es una exquisita creación en plata que captura la esencia de la naturaleza. En el centro, una delicada libélula se posa con gracia, simbolizando transformación y libertad. Diamantes incrustados alrededor de la libélula añaden un destello de elegancia y sofisticación. Esta pulsera es el complemento perfecto para quienes buscan llevar un pedacito de la naturaleza consigo, brillando con la magia de los detalles naturales en cada jornada."
                },
                "2p": {
                    mainImage: "images/pulseras/enlace1.PNG",
                    thumbnails: [
                        "images/pulseras/enlace1_1.PNG",
                        "images/pulseras/enlace1_2.PNG",
                        "images/pulseras/enlace1_3.PNG"
                    ],
                    name: "Pulsera de Mujer Intsomi",
                    price: "$558.00",
                    description: "La pulsera Intsomi de la colección Enlace Celestial es una elegante joya de oro. Con su diseño de eslabones, esta pulsera captura la esencia de las conexiones significativas y la elegancia atemporal. Ideal para quienes aprecian la belleza y el simbolismo de las relaciones humanas, es perfecta para llevar en cualquier ocasión especial."
                },
                "2.2p": {
                    mainImage: "images/pulseras/enlace2.PNG",
                    thumbnails: [
                        "images/pulseras/enlace2_1.PNG",
                        "images/pulseras/enlace2_2.PNG",
                        "images/pulseras/enlace2_3.PNG"
                    ],
                    name: "Pulsera de Mujer Hilama",
                    price: "$1,252.00",
                    description: "La pulsera Hilama de la colección Enlace Celestial es una obra maestra de la joyería, diseñada en oro y compuesta por eslabones que se entrelazan con elegancia. Cada eslabón está adornado con diamantes incrustados, creando un resplandor que capta la luz desde todos los ángulos. Este diseño no solo simboliza la resistencia y adaptabilidad, sino también la unión y el crecimiento. Hilama es el accesorio perfecto para quienes buscan una expresión de conexión y sofisticación en cada momento especial."
                },
                "2.3p": {
                    mainImage: "images/pulseras/enlace3.PNG",
                    thumbnails: [
                        "images/pulseras/enlace3_1.PNG",
                        "images/pulseras/enlace3_2.PNG",
                        "images/pulseras/enlace3_3.PNG"
                    ],
                    name: "Brazalete de Mujer Mirakel",
                    price: "$1,087.00",
                    description: "La pulsera Mirakel de la colección Enlace Celestial es una pieza envolvente que abraza la muñeca con una elegancia sin igual. Fabricada en oro, su diseño fluido se adapta con suavidad, destacando la armonía entre las formas orgánicas y la majestuosidad de los materiales. Los diamantes incrustados a lo largo de su estructura añaden un brillo deslumbrante, simbolizando la unión y el crecimiento. Mirakel es más que una pulsera; es un testimonio de las conexiones eternas que nos unen y embellecen cada momento especial."
                },
                "2.4p": {
                    mainImage: "images/pulseras/enlace4.PNG",
                    thumbnails: [
                        "images/pulseras/enlace4_1.PNG",
                        "images/pulseras/enlace4_2.PNG",
                        "images/pulseras/enlace4_3.PNG"
                    ],
                    name: "Brazalete de Mujer Pora",
                    price: "$1,937.00",
                    description: "La pulsera Pora de la colección Enlace Celestial es un brazalete de oro que exuda elegancia y sofisticación. En el centro, los eslabones decorativos se entrelazan en un diseño armonioso, simbolizando las conexiones que nos unen. Diamantes incrustados a lo largo de los eslabones añaden un brillo resplandeciente, elevando la belleza de esta pieza. Pora es más que una joya, es una representación de la fuerza y la adaptabilidad, ideal para celebrar los momentos más especiales y las conexiones que perduran."
                },
                "2.5p": {
                    mainImage: "images/pulseras/enlace5.PNG",
                    thumbnails: [
                        "images/pulseras/enlace5_1.PNG",
                        "images/pulseras/enlace5_2.PNG",
                        "images/pulseras/enlace5_3.PNG"
                    ],
                    name: "Pulsera de Mujer Lamaane",
                    price: "$631.00",
                    description: "La pulsera Lamaane de la colección Enlace Celestial es una obra maestra de elegancia y sutileza. Con una delicada cadena de oro, esta pieza captura la esencia de la simplicidad sofisticada. Los pequeños dijes colgantes, distribuidos a lo largo de la pulsera, añaden un toque de movimiento y encanto. Cada dije simboliza las conexiones y los momentos preciosos de la vida, adornados con detalles minuciosos que reflejan la majestuosidad de los materiales y la belleza de las formas orgánicas. Lamaane es una celebración de la unión y el crecimiento, una joya que acompaña con gracia cada paso de su viaje."
                },
                "2.6p": {
                    mainImage: "images/pulseras/enlace6.PNG",
                    thumbnails: [
                        "images/pulseras/enlace6_1.PNG",
                        "images/pulseras/enlace6_2.PNG",
                        "images/pulseras/enlace6_3.PNG"
                    ],
                    name: "Brazalete de Mujer Tsukor",
                    price: "$1,957.00",
                    description: "La pulsera Tsukor de la colección Enlace Celestial es un brazalete que personifica la fusión perfecta entre la elegancia clásica y el lujo moderno. Elaborada en oro, su diseño robusto y sofisticado está adornado con diamantes incrustados a lo largo de su estructura, creando un brillo deslumbrante que captura la luz desde todos los ángulos. Tsukor simboliza la fortaleza y la belleza atemporal, representando las conexiones profundas y las historias de unión y crecimiento que definen nuestras vidas. Esta pieza se destaca por su estilo majestuoso y su capacidad para complementar cualquier ocasión con un toque de esplendor celestial."
                },
                "2.7p": {
                    mainImage: "images/pulseras/enlace7.PNG",
                    thumbnails: [
                        "images/pulseras/enlace7_1.PNG",
                        "images/pulseras/enlace7_2.PNG",
                        "images/pulseras/enlace7_3.PNG"
                    ],
                    name: "Brazalete de Mujer Jurnee",
                    price: "$1,523.00",
                    description: "La pulsera Jurnee de la colección Enlace Celestial es una joya de oro que encarna la sofisticación y el encanto. Su diseño se destaca por los eslabones decorativos que se entrelazan elegantemente, formando una cadena armoniosa y fluida. Cada eslabón está embellecido con diamantes incrustados, añadiendo un brillo deslumbrante que refleja la luz con cada movimiento. Jurnee es una pieza que simboliza la resistencia y la conexión, convirtiéndose en un recordatorio constante de las relaciones y los momentos que iluminan nuestras vidas. Esta pulsera es el complemento perfecto para cualquier ocasión, aportando un toque de lujo y gracia celestial a su portadora."
                },
                "2.8p": {
                    mainImage: "images/pulseras/enlace8.PNG",
                    thumbnails: [
                        "images/pulseras/enlace8_1.PNG",
                        "images/pulseras/enlace8_2.PNG",
                        "images/pulseras/enlace8_3.PNG"
                    ],
                    name: "Pulsera de Mujer Hadlee",
                    price: "$976.00",
                    description: "La pulsera Hadlee de la colección Enlace Celestial es una obra maestra de delicadeza y elegancia. Elaborada en oro, esta pulsera presenta finas cadenas que se entrelazan suavemente, formando un diseño etéreo y sofisticado. A lo largo de estas cadenas, pequeñas perlas de esmeralda están dispuestas estratégicamente, añadiendo un toque de color y sofisticación. Cada esmeralda brilla con un verde intenso, simbolizando la conexión profunda y la armonía natural. Hadlee es una pieza que celebra la belleza de las uniones y el crecimiento, convirtiéndose en un accesorio perfecto para cualquier ocasión especial, irradiando un encanto celestial y una gracia atemporal."
                },
                "3p": {
                    mainImage: "images/pulseras/eterna1.PNG",
                    thumbnails: [
                        "images/pulseras/eterna1_1.PNG",
                        "images/pulseras/eterna1_2.PNG",
                        "images/pulseras/eterna1_3.PNG"
                    ],
                    name: "Pulsera de Mujer Ronquillo",
                    price: "$269.00",
                    description: "La pulsera Ronquillo de la colección Eterna Promesa es una joya de plata que encarna el compromiso eterno. Destaca por su diseño elegante con una hermosa perla en el centro, simbolizando la pureza y la belleza del amor duradero. Perfecta para celebrar momentos especiales con su elegancia atemporal y significado profundo."
                },
                "3.2p": {
                    mainImage: "images/pulseras/eterna2.PNG",
                    thumbnails: [
                        "images/pulseras/eterna2_1.PNG",
                        "images/pulseras/eterna2_2.PNG",
                        "images/pulseras/eterna2_3.PNG"
                    ],
                    name: "Pulsera de Mujer Chaumont",
                    price: "$595.00",
                    description: "La pulsera Chaumont de la colección Eterna Promesa es una celebración de la elegancia y el compromiso eterno. Fabricada en oro de la más alta calidad, esta exquisita pulsera destaca por sus delicadas cadenas que se entrelazan con gracia alrededor de la muñeca. En el centro, una brillante esmeralda capta la atención, simbolizando la fuerza y la belleza del amor duradero. La pulsera Chaumont no solo embellece, sino que también lleva consigo un profundo significado de unión y promesa, perfecta para acompañar los momentos más especiales y memorables de tu vida."
                },
                "3.3p": {
                    mainImage: "images/pulseras/eterna3.PNG",
                    thumbnails: [
                        "images/pulseras/eterna3_1.PNG",
                        "images/pulseras/eterna3_2.PNG",
                        "images/pulseras/eterna3_3.PNG"
                    ],
                    name: "Pulsera de Mujer Regulate",
                    price: "$407.00",
                    description: "La pulsera Regulate de la colección Eterna Promesa es una obra maestra de elegancia y sofisticación. Confeccionada en oro, esta pulsera presenta finas cadenas que se ajustan delicadamente alrededor de la muñeca, ofreciendo un toque sutil y refinado. En el centro, una exquisita decoración de diamantes resplandece, simbolizando la pureza y la fortaleza del amor eterno. La pulsera Regulate no solo adorna, sino que también encapsula la esencia del compromiso y la belleza duradera, haciendo de ella una pieza perfecta para celebrar los momentos más significativos de tu vida."
                },
                "3.4p": {
                    mainImage: "images/pulseras/eterna4.PNG",
                    thumbnails: [
                        "images/pulseras/eterna4_1.PNG",
                        "images/pulseras/eterna4_2.PNG",
                        "images/pulseras/eterna4_3.PNG"
                    ],
                    name: "Pulsera de Mujer Trouville",
                    price: "$749.00",
                    description: "La pulsera Trouville de la colección Eterna Promesa es una expresión de elegancia y compromiso eterno. Esta pulsera de oro destaca por sus dos finas cadenas que se entrelazan delicadamente alrededor de la muñeca, creando un diseño sofisticado y ligero. En el centro, una deslumbrante decoración de diamante captura la luz, simbolizando la pureza y el brillo del amor verdadero. La pulsera Trouville es el accesorio perfecto para acompañar momentos inolvidables, reflejando la belleza y el significado de un compromiso eterno."
                },
                "3.5p": {
                    mainImage: "images/pulseras/eterna5.PNG",
                    thumbnails: [
                        "images/pulseras/eterna5_1.PNG",
                        "images/pulseras/eterna5_2.PNG",
                        "images/pulseras/eterna5_3.PNG"
                    ],
                    name: "Pulsera de Mujer Beaunez",
                    price: "$542.00",
                    description: "La pulsera Beaunez de la colección Eterna Promesa es una joya exquisita que captura la esencia del compromiso eterno y la elegancia atemporal. Confeccionada en oro, presenta una fina cadena que envuelve delicadamente la muñeca, ofreciendo ligereza y sofisticación. En el centro de la pulsera, destaca una decoración de diamante que añade un brillo deslumbrante, simbolizando la pureza y la intensidad del amor perdurable. Beaunez es más que una joya; es un símbolo de la unión eterna y la belleza sublime que acompaña cada momento especial."
                },
                "3.6p": {
                    mainImage: "images/pulseras/eterna6.PNG",
                    thumbnails: [
                        "images/pulseras/eterna6_1.PNG",
                        "images/pulseras/eterna6_2.PNG",
                        "images/pulseras/eterna6_3.PNG"
                    ],
                    name: "Pulsera de Mujer Reconstruction",
                    price: "$460.00",
                    description: "La pulsera Reconstruction de la colección Eterna Promesa encapsula la esencia del compromiso eterno con un diseño de elegancia incomparable. Fabricada con diamantes, esta joya presenta una fina cadena que resalta la delicadeza y la sofisticación. En el centro de la pulsera brilla un hermoso diamante rectangular, simbolizando la fuerza y la singularidad del amor perdurable. Cada detalle de Reconstruction está meticulosamente diseñado para capturar la belleza y el significado profundo de un compromiso eterno, haciendo de esta pieza un símbolo sublime de unión y promesa."
                },
                "3.7p": {
                    mainImage: "images/pulseras/eterna7.PNG",
                    thumbnails: [
                        "images/pulseras/eterna7_1.PNG",
                        "images/pulseras/eterna7_2.PNG",
                        "images/pulseras/eterna7_3.PNG"
                    ],
                    name: "Pulsera de Mujer Regulator",
                    price: "$895.00",
                    description: "La pulsera Regulator de la colección Eterna Promesa personifica la elegancia y la solemnidad del compromiso eterno. Cada detalle de esta exquisita joya está diseñado para capturar la esencia del amor perdurable y la promesa de unión. Con un diseño meticuloso, Regulator presenta una serie de diamantes incrustados alrededor, que brillan con la luz y simbolizan la fuerza y la belleza del compromiso compartido. Esta pulsera no solo adorna la muñeca, sino que también cuenta una historia de conexión y amor que perdura a través del tiempo."
                },
                "3.8p": {
                    mainImage: "images/pulseras/eterna8.PNG",
                    thumbnails: [
                        "images/pulseras/eterna8_1.PNG",
                        "images/pulseras/eterna8_2.PNG",
                        "images/pulseras/eterna8_3.PNG"
                    ],
                    name: "Pulsera de Mujer Security",
                    price: "$1,829.00",
                    description: "La pulsera Security de la Colección Eterna Promesa personifica la esencia del compromiso eterno con su diseño meticuloso y elegante. Confeccionada en diamantes que se extienden a lo largo de toda su longitud, esta pulsera está adornada con un impresionante diamante rectangular en su centro. Cada diamante simboliza la promesa de amor perdurable y la belleza que acompaña a cada momento especial. Con Security, cada detalle resalta la solemnidad y la magnificencia de un compromiso único y eterno."
                },
                "1r": {
                    mainImage: "images/relojes/reloj1.PNG",
                    thumbnails: [
                        "images/relojes/reloj1_1.PNG",
                        "images/relojes/reloj1_2.PNG",
                        "images/relojes/reloj1_3.PNG"
                        
                    ],
                    name: "Reloj Ring Watch Tempus Rosa",
                    price: "$998.00",
                    description: "Descubre la elegancia atemporal con el anillo-reloj Tempus Rosa, una joya que combina la sofisticación de un anillo de oro rosa con la funcionalidad de un reloj de precisión. Su diseño innovador presenta una esfera de reloj minimalista y discreta, perfectamente incrustada en el anillo, permitiéndote llevar el tiempo con estilo. La correa ajustable asegura un ajuste cómodo y seguro, mientras que los detalles meticulosos y el acabado pulido reflejan la artesanía de alta calidad. Ideal para quienes aprecian la unión de belleza y utilidad, el Tempus Rosa es una pieza única que añade un toque de lujo y modernidad a cualquier ocasión."
                },
                "2r": {
                    mainImage: "images/relojes/reloj2.PNG",
                    thumbnails: [
                        "images/relojes/reloj2_1.PNG",
                        "images/relojes/reloj2_2.PNG",
                        "images/relojes/reloj2_3.PNG"
                        
                    ],
                    name: "Reloj Ring Watch AuroChrono",
                    price: "$998.00",
                    description: "El AuroChrono redefine la elegancia y funcionalidad con su innovador diseño que fusiona la belleza de un anillo de oro con la precisión de un reloj. Este exquisito anillo-reloj está fabricado en oro de 18 quilates, ofreciendo un brillo lujoso y duradero. La delicada esfera del reloj, perfectamente integrada en el anillo, presenta un diseño minimalista con manecillas doradas y una sutil marca de horas, brindando una lectura clara y elegante del tiempo. La banda ajustable asegura un ajuste perfecto y cómodo en cualquier dedo, mientras que el acabado meticuloso y los detalles finamente trabajados reflejan una artesanía excepcional."
                },
                "3r": {
                    mainImage: "images/relojes/reloj3.PNG",
                    thumbnails: [
                        "images/relojes/reloj3_1.PNG",
                        "images/relojes/reloj3_2.PNG",
                        "images/relojes/reloj3_3.PNG"
                        
                    ],
                    name: "Reloj Rosabelle",
                    price: "$848.00",
                    description: "El Rosabelle es la perfecta amalgama de sofisticación y feminidad, diseñado para quienes buscan un reloj que trascienda la mera funcionalidad para convertirse en una verdadera joya. La correa, en un elegante tono rosa suave, está fabricada con cuero de alta calidad, garantizando comodidad y durabilidad. La caja del reloj, confeccionada en acero inoxidable pulido, resplandece con un sutil brillo rosado, complementando a la perfección la correa."
                },
                "4r": {
                    mainImage: "images/relojes/reloj4.PNG",
                    thumbnails: [
                        "images/relojes/reloj4_1.PNG",
                        "images/relojes/reloj4_2.PNG",
                        "images/relojes/reloj4_3.PNG"
                        
                    ],
                    name: "Reloj Eternidad Nocturna",
                    price: "$760.00",
                    description: "El Eternidad Nocturna es una pieza de relojería que evoca el misterio y la elegancia de la noche. Este reloj, con una correa negra de cuero genuino, se adapta cómodamente a la muñeca mientras añade un toque de sofisticación a cualquier atuendo. La correa, suave al tacto y resistente, está diseñada para durar, combinando estilo y funcionalidad."
                },
                "5r": {
                    mainImage: "images/relojes/reloj5.PNG",
                    thumbnails: [
                        "images/relojes/reloj5_1.PNG",
                        "images/relojes/reloj5_2.PNG",
                        "images/relojes/reloj5_3.PNG"
                        
                    ],
                    name: "Reloj Luminiscent Golden",
                    price: "$969.00",
                    description: "El reloj Luminiscent Golden fusiona la opulencia del oro con la sofisticación de la plata en una pieza de relojería excepcional. Su correa de oro está meticulosamente decorada con finos detalles de plata que contornean elegantemente su contorno, añadiendo un brillo sutil y un toque de distinción."
                },
                "6r": {
                    mainImage: "images/relojes/reloj6.PNG",
                    thumbnails: [
                        "images/relojes/reloj6_1.PNG",
                        "images/relojes/reloj6_2.PNG",
                        "images/relojes/reloj6_3.PNG"
                        
                    ],
                    name: "Reloj Rose Dazzle",
                    price: "$688.00",
                    description: "El reloj Rose Dazzle personifica la elegancia y el lujo con su correa de oro rosa adornada con diamantes incrustados alrededor de toda la circunferencia. Cada diamante, cuidadosamente seleccionado por su brillo y claridad, añade un destello deslumbrante a esta pieza de relojería excepcional."
                },
                "7r": {
                    mainImage: "images/relojes/reloj7.PNG",
                    thumbnails: [
                        "images/relojes/reloj7_1.PNG",
                        "images/relojes/reloj7_2.PNG",
                        "images/relojes/reloj7_3.PNG"
                        
                    ],
                    name: "Reloj Obsidian Golden",
                    price: "$716.00",
                    description: "El reloj Obsidian Golden fusiona la sofisticación del negro con la elegancia del oro en una pieza de relojería excepcional. Su correa de cuero negro fino, con costuras delicadamente doradas, ofrece un contraste impresionante que realza su diseño contemporáneo y atemporal."
                },
                "8r": {
                    mainImage: "images/relojes/reloj8.PNG",
                    thumbnails: [
                        "images/relojes/reloj8_1.PNG",
                        "images/relojes/reloj8_2.PNG",
                        "images/relojes/reloj8_3.PNG"
                        
                    ],
                    name: "Reloj Serenity Blush",
                    price: "$1,759.00",
                    description: "El reloj Serenity Blush combina la sutileza del oro rosa con la resplandeciente elegancia de los diamantes. Su correa de oro rosa está meticulosamente diseñada para envolver la muñeca con gracia y sofisticación, mientras que los diamantes incrustados alrededor de la circunferencia añaden un toque de brillo deslumbrante. La pulsera en conjunto, una delicada cadena adornada con diamantes incrustados al centro, completa este conjunto extraordinario, creando una sinfonía de lujo y estilo refinado."
                },
                "9r": {
                    mainImage: "images/relojes/reloj9.PNG",
                    thumbnails: [
                        "images/relojes/reloj9_1.PNG",
                        "images/relojes/reloj9_2.PNG",
                        "images/relojes/reloj9_3.PNG"
                        
                    ],
                    name: "Reloj Radiant Rectanglure",
                    price: "$1,060.00",
                    description: "Radiant Rectanglure personifica la elegancia atemporal con un toque de lujo contemporáneo. Este reloj presenta una correa de oro que envuelve la muñeca con gracia y estilo. Su diseño rectangular ofrece un contraste sofisticado y moderno, ideal para quienes aprecian la precisión y el diseño impecable."
                },
                "10r": {
                    mainImage: "images/relojes/reloj10.PNG",
                    thumbnails: [
                        "images/relojes/reloj10_1.PNG",
                        "images/relojes/reloj10_2.PNG",
                        "images/relojes/reloj10_3.PNG"
                        
                    ],
                    name: "Reloj Midnight Elegance",
                    price: "$945.00",
                    description: "Midnight Elegance redefine el concepto de sofisticación con su diseño audaz y contemporáneo. La correa negra de este reloj se fusiona perfectamente con detalles de plata que adornan tanto la esfera interior como el borde del cristal. Esta combinación de colores contrastantes crea un efecto visual impactante y elegante."
                },
                "11r": {
                    mainImage: "images/relojes/reloj11.PNG",
                    thumbnails: [
                        "images/relojes/reloj11_1.PNG",
                        "images/relojes/reloj11_2.PNG",
                        "images/relojes/reloj11_3.PNG"
                        
                    ],
                    name: "Reloj Aurum Noir",
                    price: "$1,446.00",
                    description: "Aurum Noir es un reloj que fusiona el misterio del negro profundo con el brillo del oro radiante en una obra de arte horológica. Su correa de plata pulida está meticulosamente decorada con sutiles adornos de oro rosa, que añaden un toque de sofisticación y elegancia. La esfera de Aurum Noir está enmarcada por una delicada incrustación de diamantes alrededor, que destella con cada movimiento."
                },
                "12r": {
                    mainImage: "images/relojes/reloj12.PNG",
                    thumbnails: [
                        "images/relojes/reloj12_1.PNG",
                        "images/relojes/reloj12_2.PNG",
                        "images/relojes/reloj12_3.PNG"
                        
                    ],
                    name: "Luminous Alabaster",
                    price: "$934.00",
                    description: "Luminous Alabaster es un reloj que irradia elegancia y sofisticación con su correa blanca adornada con exquisitas decoraciones de oro. Cada detalle de este reloj está meticulosamente diseñado para captar la luz y reflejar la pureza y el lujo en cada ángulo. La esfera de Luminous Alabaster presenta un diseño minimalista y moderno, en perfecta armonía con la correa blanca y los acentos de oro que realzan su belleza."
                },
                "1d": {
                    mainImage: "images/destacado/anillo1.PNG",
                    thumbnails: [
                        "images/destacado/anillo1_1.PNG",
                        "images/destacado/anillo1_2.PNG",
                        "images/destacado/anillo1_3.PNG"
                        
                    ],
                    name: "Anillo Radiant Rose",
                    price: "$658.00",
                    description: "El anillo Radiant Rose es una obra maestra de elegancia y refinamiento. Fabricado en oro rosa, su diseño sofisticado y contemporáneo envuelve delicadamente el dedo con una suavidad incomparable. La corona del anillo está adornada con una serie de diamantes cuidadosamente seleccionados, incrustados a lo largo de toda su circunferencia. Estos diamantes no solo añaden un brillo excepcional, sino que también capturan la luz de manera brillante, creando destellos que iluminan cualquier ocasión."
                },
                "2d": {
                    mainImage: "images/destacado/pulsera2.PNG",
                    thumbnails: [
                        "images/destacado/pulsera2_1.PNG",
                        "images/destacado/pulsera2_2.PNG",
                        "images/destacado/pulsera2_3.PNG"
                        
                    ],
                    name: "Pulsera Eclisse Dorée",
                    price: "$877.00",
                    description: "La pulsera Eclisse Dorée es una obra maestra de elegancia y lujo, diseñada para cautivar con su exquisita combinación de oro rosa y diamantes incrustados en una doble hilera. Cada diamante refleja la luz con un brillo deslumbrante, creando un efecto celestial que envuelve la muñeca con un resplandor sutil pero impactante. Esta pulsera no solo es un símbolo de sofisticación y refinamiento, sino también una declaración de estilo que complementa cualquier atuendo con su belleza atemporal y su diseño meticuloso. Perfecta para ocasiones especiales donde cada detalle cuenta, la pulsera Eclisse Dorée asegura destacar y dejar una impresión duradera."
                },
                "3d": {
                    mainImage: "images/destacado/anillo3.PNG",
                    thumbnails: [
                        "images/destacado/anillo3_1.PNG",
                        "images/destacado/anillo3_2.PNG",
                        "images/destacado/anillo3_3.PNG"
                        
                    ],
                    name: "Anillo Celestial Grace",
                    price: "$1,087.00",
                    description: "El anillo Celestial Grace es una joya que exuda elegancia y lujo atemporal. Confeccionado en plata reluciente y embellecido con delicados detalles en oro, este anillo captura la esencia de la sofisticación. Los 16 diamantes que adornan su circunferencia añaden un toque de brillantez inigualable, reflejando la luz en cada movimiento. Celestial Grace no es solo un anillo, sino una declaración de estilo y distinción, ideal para quienes buscan una pieza que combine belleza clásica y modernidad en perfecta armonía."
                },
                "4d": {
                    mainImage: "images/destacado/collar4.PNG",
                    thumbnails: [
                        "images/destacado/collar4_1.PNG",
                        "images/destacado/collar4_2.PNG",
                        "images/destacado/collar4_3.PNG"
                        
                    ],
                    name: "Collar Aurelia Royale",
                    price: "$1,087.00",
                    description: "El collar Aurelia Royale es la encarnación de la opulencia y la sofisticación. Fabricado en oro brillante, este exquisito collar presenta una serie de eslabones cuidadosamente diseñados que se entrelazan con gracia. Diamantes deslumbrantes están incrustados en puntos estratégicos, añadiendo destellos de luz que realzan su belleza y magnificencia. Ideal para ocasiones especiales, Aurelia Royale transforma cualquier atuendo en una declaración de elegancia y lujo, ofreciendo una armoniosa combinación de diseño clásico y moderno."
                },
                "5d": {
                    mainImage: "images/destacado/pulsera5.PNG",
                    thumbnails: [
                        "images/destacado/pulsera5_1.PNG",
                        "images/destacado/pulsera5_2.PNG",
                        "images/destacado/pulsera5_3.PNG"
                        
                    ],
                    name: "Pulsera Elysian Gleam",
                    price: "$985.00",
                    description: "La pulsera Elysian Gleam es una creación sublime que encapsula la elegancia celestial y el resplandor terrenal. Forjada en oro rosa, esta exquisita pieza presenta una doble hilera de diamantes meticulosamente incrustados que destellan con cada movimiento, evocando la imagen de estrellas brillando en un cielo crepuscular. Cada diamante ha sido seleccionado con precisión y cuidado para garantizar un brillo constante y deslumbrante. Elysian Gleam es más que una pulsera; es una celebración de la belleza eterna y la sofisticación moderna, perfecta para realzar tu estilo en cualquier ocasión."
                }
                

            };

            function showProductDetails(productId) {
                const details = productDetails[productId];
                if (details) {
                    console.log(details);
                    localStorage.setItem("selectedProduct", JSON.stringify(details));
                    window.location.href = "productoselect.html";
                }
            }
    
            function addProductClickListener(element) {
                element.addEventListener("click", function() {
                    const productId = this.dataset.id;
                    showProductDetails(productId);
                });
            }
    
            products.forEach(product => {
                addProductClickListener(product);
            });
    
            buttons.forEach(button => {
                addProductClickListener(button);
            });
        });
    

function clearCheckboxes() {
    var materialCheckboxes = document.querySelectorAll('.material-filter');
    
    materialCheckboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
    
    var collectionCheckboxes = document.querySelectorAll('.collection-filter');
    
    collectionCheckboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
  }
  
  document.addEventListener('DOMContentLoaded', clearCheckboxes);
  window.addEventListener('pageshow', clearCheckboxes);

  const policies = {
    privacy: `
        <h2>Política de Privacidad</h2>
        <p>Última actualización: 30 de mayo de 2024</p>
        <p>En BetMor, nos comprometemos a proteger la privacidad de nuestros clientes y a manejar sus datos personales con el mayor cuidado y seguridad. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos su información personal cuando visita nuestro sitio web o interactúa con nosotros.</p>
        <h3>1. Información que Recopilamos</h3>
        <h4>1.1 Información de Contacto:</h4>
        <ul>
            <li>Nombre</li>
            <li>Dirección postal</li>
            <li>Número de teléfono</li>
            <li>Dirección de correo electrónico</li>
        </ul>
        <h4>1.2 Información Técnica:</h4>
        <ul>
            <li>Dirección IP</li>
            <li>Tipo y versión de navegador</li>
            <li>Sistema operativo</li>
            <li>Resolución de pantalla y profundidad de color</li>
        </ul>
        <h4>1.3 Información de Navegación:</h4>
        <ul>
            <li>Páginas visitadas</li>
            <li>Fecha y hora de las visitas</li>
            <li>Duración de la visita</li>
            <li>Datos de tráfico</li>
        </ul>
        <h4>1.4 Información Adicional:</h4>
        <ul>
            <li>Correspondencia y comunicaciones con nuestro servicio al cliente</li>
            <li>Fotos, videos y otra información en caso de participar en loterías, campañas u otros eventos (si proporciona su consentimiento explícito).</li>
        </ul>
        <h3>2. Uso de su Información</h3>
        <h4>2.1 Para Proporcionar Nuestros Servicios:</h4>
        <ul>
            <li>Gestionar y responder a sus consultas y pedidos</li>
            <li>Mejorar la navegación y funcionalidad de nuestro sitio web</li>
        </ul>
        <h4>2.2 Para Fines Legales:</h4>
        <ul>
            <li>Cumplir con obligaciones legales y reglamentarias</li>
            <li>Prevenir fraudes y proteger contra robos de identidad</li>
        </ul>
        <h4>2.3 Para Comunicación y Marketing:</h4>
        <ul>
            <li>Enviar boletines informativos y material promocional (con su consentimiento)</li>
            <li>Realizar encuestas de satisfacción del cliente y programas de lealtad</li>
        </ul>
        <h3>3. Retención de Datos</h3>
        <p>Conservamos sus datos personales durante el tiempo necesario para cumplir con los fines para los cuales fueron recopilados, incluyendo cualquier obligación legal, contable o de informe. En particular:</p>
        <ul>
            <li>Datos de contacto y navegación: mientras mantenga su cuenta activa o según sea necesario para proporcionarle servicios.</li>
            <li>Datos relacionados con comunicaciones: hasta que resuelva su consulta o solicitud.</li>
        </ul>
        <h3>4. Compartición de Información</h3>
        <h4>4.1 Con Proveedores de Servicios:</h4>
        <ul>
            <li>Empresas de mensajería para la entrega de productos</li>
            <li>Proveedores de servicios de pago para procesar transacciones</li>
            <li>Autoridades fiscales y otras autoridades públicas cuando lo requiera la ley</li>
        </ul>
        <h3>5. Sus Derechos</h3>
        <p>Tiene derecho a:</p>
        <ul>
            <li>Acceder a sus datos personales</li>
            <li>Solicitar la corrección de datos incorrectos</li>
            <li>Solicitar la eliminación de sus datos personales</li>
            <li>Retirar su consentimiento para el uso de sus datos en cualquier momento</li>
        </ul>
        <p>Para ejercer cualquiera de estos derechos, puede contactarnos en betmor.jewelry@gmail.com.</p>
        <h3>6. Seguridad de Datos</h3>
        <p>Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la destrucción.</p>
        <h3>7. Cambios en la Política de Privacidad</h3>
        <p>Podemos actualizar esta política de privacidad de vez en cuando. La versión más reciente siempre estará disponible en nuestro sitio web.</p>
    `,
    cookies: `
        <h2>Política de Cookies</h2>
        <p>Última actualización: 30 de mayo de 2024</p>
        <h3>1. Qué Son las Cookies</h3>
        <p>Las cookies son pequeños archivos de datos que se almacenan en su navegador cuando visita nuestro sitio web. Las cookies nos permiten recordar sus preferencias y mejorar su experiencia en nuestro sitio.</p>
        <h3>2. Tipos de Cookies que Utilizamos</h3>
        <h4>2.1 Cookies Necesarias:</h4>
        <p>Estas cookies son esenciales para el funcionamiento del sitio web y le permiten navegar y utilizar sus funciones.</p>
        <h4>2.2 Cookies de Rendimiento:</h4>
        <p>Recopilan información sobre cómo los usuarios interactúan con nuestro sitio, lo que nos ayuda a mejorar su funcionalidad.</p>
        <h4>2.3 Cookies de Funcionalidad:</h4>
        <p>Permiten al sitio recordar las elecciones que hace (como su nombre de usuario o idioma) y proporcionar características mejoradas y más personales.</p>
        <h4>2.4 Cookies de Terceros:</h4>
        <p>Utilizamos cookies de terceros, como las de Google Analytics, para analizar el tráfico del sitio web y entender mejor cómo se utiliza.</p>
        <h3>3. Gestión de Cookies</h3>
        <p>Puede configurar su navegador para bloquear o eliminar cookies, pero esto puede afectar su experiencia en nuestro sitio web. Para deshabilitar cookies de Google Analytics, puede visitar: [Google Analytics Opt-out Browser Add-on].</p>
    `,
    security: `
        <h2>Política de Seguridad</h2>
        <p>Última actualización: 30 de mayo de 2024</p>
        <p>En BetMor, valoramos la seguridad de su información personal y nos comprometemos a protegerla mediante las siguientes medidas:</p>
        <h3>1. Cifrado SSL</h3>
        <p>Utilizamos tecnología SSL (Secure Socket Layer) para cifrar la información transmitida entre su navegador y nuestros servidores, garantizando que sus datos se mantengan confidenciales y seguros.</p>
        <h3>2. Almacenamiento Seguro</h3>
        <p>Todos los datos se almacenan en servidores seguros que cumplen con las normas de la industria, incluidas las normativas PCI (Payment Card Industry) para proteger la información de pago.</p>
        <h3>3. Acceso Restringido</h3>
        <p>Solo el personal autorizado tiene acceso a los datos personales, y se les exige que mantengan la confidencialidad de esta información.</p>
        <h3>4. Actualizaciones de Seguridad</h3>
        <p>Realizamos actualizaciones y auditorías regulares de nuestros sistemas para asegurarnos de que seguimos las mejores prácticas en ciberseguridad y protección de datos.</p>
        <h3>5. Recomendaciones para los Usuarios</h3>
        <p>Le recomendamos que mantenga su contraseña segura y que no la comparta con terceros. En caso de sospecha de acceso no autorizado, póngase en contacto con nosotros de inmediato.</p>
    `
};

function showPolicy(policy) {
    document.getElementById('policyContent').innerHTML = policies[policy];
}