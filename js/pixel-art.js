var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var colorElegido;
var estaPresionado;

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorElegido = colorActual;
    $('#indicador-de-color').css('background-color', colorElegido); 
  })
);

var paleta = document.getElementById('paleta');
var grilla = document.getElementById('grilla-pixeles');

function generarPaleta(){
  
  for(let i = 0; i < nombreColores.length; i++){
    let colorActual = nombreColores[i];
    var unColor = document.createElement('div');
    
    $(unColor).css('background-color', colorActual);
    $(unColor).attr('class', 'color-paleta');
    var paleta = document.getElementById('paleta');
    paleta.appendChild(unColor);
  }
}

function generarGrilla(){
  var grilla = document.getElementById('grilla-pixeles');
  $(grilla).css('width', '795px');
  var filas = 495 / 15;
  var columnas = 795 / 15;

  for(let i = 0; i < filas; i++){
    for(let j = 0; j < columnas; j++){
      var unPixel = document.createElement('div');
      grilla.appendChild(unPixel);
    }
  }
}

generarPaleta();
generarGrilla();

$('.color-paleta').click(function(){
  colorElegido = $(this).css('background-color');
  $('#indicador-de-color').css('background-color', colorElegido);
}); 

$('#grilla-pixeles div').click(function(){
  $(this).css('background-color', colorElegido);
});

// onmousedown: Se pulsa un botón del ratón sobre un elemento
// onmouseup: Un botón del ratón se libera estando sobre un elemento

$('#grilla-pixeles div').mousedown(function(){
  estaPresionado = true;
});

$('#grilla-pixeles div').mouseup(function(){
  estaPresionado = false;
});

$('#grilla-pixeles div').hover(function(){
  if(estaPresionado){
    $(this).css('background-color', colorElegido);
  }
});

$('#borrar').click(function(){
  $('#grilla-pixeles').children().animate({'background-color': 'white'}, 1000);
});

// Paso 2: Cargá a los superhéroes en forma de píxeles
$('#batman').click(function(){
  cargarSuperheroe(batman);
});

$('#wonder').click(function(){
  cargarSuperheroe(wonder);
});

$('#flash').click(function(){
  cargarSuperheroe(flash);
});

$('#invisible').click(function(){
  cargarSuperheroe(invisible);
});

// Paso 3: Habilitá la descarga de cada obra de arte
$('#guardar').click(function(){
  guardarPixelArt();
});