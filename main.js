// const urlBase = `https://apps.galilea.cl/`
const urlBase = `https://odoo.appsgalilea.cl/`

const getPathName = () => window.location.pathname;
// var postVentaCount = 0;

const proyectosCodigos = [
  { url: 'huertos-de-kennedy-ii', codigo: '02340000' },
  { url: 'praderas-de-kennedy', codigo: '02330000' },
  { url: 'villa-galilea-norte', codigo: '02520000' },
  { url: 'cumbres-de-santa-blanca', codigo: '01670000' },
  { url: 'cumbres-de-san-damian', codigo: '02610000' },
  { url: 'el-madero-polo-machali', codigo: '02280000' },
  { url: 'brisas-de-machali', codigo: '02300000' },
  { url: 'brisas-de-rengo', codigo: '02640000' },
  { url: 'villa-galilea-curico', codigo: '00720000' },
  { url: 'dona-elisa', codigo: '02130000' },
  { url: 'reserva-de-tutuquen', codigo: '02590000' },
  { url: 'parque-zapallar', codigo: '01850000' },
  { url: 'el-avellano-ii', codigo: '02470000' },
  { url: 'dona-antonia-iii', codigo: '02040000' },
  { url: 'dona-antonia-v', codigo: '02420000' },
  { url: 'cumbres-de-las-rastras-ii', codigo: '02540000' },
  { url: 'don-alfonso', codigo: '02370000' },
  { url: 'praderas-de-san-miguel', codigo: '02380000' },
  { url: 'cumbres-de-las-rastras-iii', codigo: '02540000' },
  { url: 'altos-de-tejas-verdes', codigo: '02550000' },
  { url: 'cumbres-de-linares-ii', codigo: '01920000' },
  { url: 'villa-galilea-linares', codigo: '02410000' },
  { url: 'huertos-de-linares', codigo: '02090000' },
  { url: 'dona-javiera-iii', codigo: '02310000' },
  { url: 'don-clemente', codigo: '02450000' },
  { url: 'cumbres-de-chillan-iii', codigo: '02360000' },
  { url: 'parque-universitario', codigo: '01730000' },
  // { url: 'huertos-de-chillan', codigo: '02200000' },
  { url: 'huertos-de-chillan-ii', codigo: '02200000' },
  { url: 'huertos-de-chillan-iii', codigo: '02430000' },
  { url: 'cumbres-de-lomas-verdes', codigo: '02290000' },
  { url: 'praderas-de-junquillar', codigo: '02490000' },
  { url: 'praderas-de-coronel', codigo: '02230000' },
  { url: 'cumbres-del-retiro-sur-ii', codigo: '02260000' },
  { url: 'altos-de-parque-norte', codigo: '02530000' },
  { url: 'retiro-del-sur', codigo: '02500000' },
  // { url: 'retiro-del-sur-c', codigo: '02500000' },
  // { url: 'villa-galilea-valdivia', codigo: '01520000' },
  // { url: 'parque-fundadores', codigo: '01940000' },
  // agregar praderas del recreo 21-09-2022
  { url: 'praderas-del-recreo', codigo: '02480000' },
  { url: 'brisas-de-san-miguel', codigo: '02510000' },
  { url: 'vista-la-vina', codigo: '02790000' },
  { url: 'dona-matilde', codigo: '02770000' },


]

const proyectosSub = [

  // { ciudad: 'Rancagua', proyecto: 'Huertos de Kennedy II', codigo: '02340000' },
  // { ciudad: 'Rancagua', proyecto: 'Praderas de Kennedy', codigo: '02330000' },
  // { ciudad: 'Rancagua', proyecto: 'Cumbres de Santa Blanca', codigo: '01670000' },
  // { ciudad: 'Rancagua', proyecto: 'Villa Galilea Norte', codigo: '02520000' },
  //  { ciudad: 'Machalí', proyecto: 'El Madero Polo de Machalí', codigo: '02280000' },
  // { ciudad: 'Machalí', proyecto: 'Brisas de Machalí', codigo: '02300000' },
  // agregar praderas del recreo 21-09-2022
  // { ciudad: 'Machalí', proyecto: 'Praderas del Recreo', codigo: '02480000' },
  { ciudad: 'Rengo', proyecto: 'Brisas de Rengo', codigo: '02640000' },
  // { ciudad: 'Curico', proyecto: 'Parque Zapallar', codigo: '01850000' },
  { ciudad: 'Curicó', proyecto: 'Doña Elisa', codigo: '02130000' },
  { ciudad: 'Curicó', proyecto: 'Doña Matilde', codigo: '02770000' },
  { ciudad: 'Talca', proyecto: 'Brisas de San Miguel', codigo: '02510000' },
  // { ciudad: 'Talca', proyecto: 'Praderas de San Miguel', codigo: '02380000' },
  // { ciudad: 'Talca', proyecto: 'Cumbres de Las Rastras III', codigo: '02540000' },
  // { ciudad: 'Talca', proyecto: 'Doña Antonia III', codigo: '02040000' },
  { ciudad: 'Talca', proyecto: 'Doña Antonia V', codigo: '02420000' },
  // { ciudad: 'Talca', proyecto: 'Don Alfonso II', codigo: '02370000' },
  // { ciudad: 'Talca', proyecto: 'Vista la Viña', codigo: '02790000' },
  // { ciudad: 'Talca', proyecto: 'Parque El Avellano II', codigo: '02470000' },
  { ciudad: 'Linares', proyecto: 'Villa Galilea Linares', codigo: '02410000' },
  { ciudad: 'Linares', proyecto: 'Huertos de Linares', codigo: '02090000' },
  { ciudad: 'San Carlos', proyecto: 'Doña Javiera III', codigo: '02090000' },
  { ciudad: 'Chillán', proyecto: 'Don Clemente', codigo: '02450000' },
  { ciudad: 'Chillán', proyecto: 'Huertos de Chillán II', codigo: '02200000' },
  { ciudad: 'Chillán', proyecto: 'Huertos de Chillán III', codigo: '02430000' },
  // { ciudad: 'Chillán', proyecto: 'Huertos de Chillán', codigo: '02200000' },
  { ciudad: 'Concepción', proyecto: 'Cumbres de Lomas Verdes', codigo: '02290000' },
  { ciudad: 'Concepción', proyecto: 'Praderas de Coronel', codigo: '02230000' },
  /* {ciudad: 'Concepción', proyecto: 'Praderas de Pilauco', codigo: '02490000'}, */
  { ciudad: 'Los Ángeles', proyecto: 'Cumbres del Retiro Sur II', codigo: '02260000' },
  { ciudad: 'Los Ángeles', proyecto: 'Altos de Parque Norte', codigo: '02530000' },
  { ciudad: 'Los Ángeles', proyecto: 'Retiro Sur', codigo: '02500000' },
  // { ciudad: 'Valdivia', proyecto: 'Villa Galilea Valdivia', codigo: '01520000' },
  // { ciudad: 'Puerto Montt', proyecto: 'Parque Fundadores', codigo: '01940000' },
]

//   modal
const openPostVentaModal = (modal) => {
  modal.style.display = "block";
}

// upgrade request
if (window.location.protocol.indexOf('https') == 0) {
  var el = document.createElement('meta')
  el.setAttribute('http-equiv', 'Content-Security-Policy')
  el.setAttribute('content', 'upgrade-insecure-requests')
  document.head.append(el)
}

const validaNumeros = (numeros) => {
  $(`input[name=${numeros}]`).on('input', function (e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });
}

const descriptionSpecial = (id) => {
  $(`#${id}`).on('input', function (e) {
    var str = $(this).val()
    // a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    //var res = str.replace(/[^\w?!¡¿.,;:$% \u00E0-\u00FC\u00d1\u00f1 ]+/gi, "");
    var res = str.replace(/#/g, "");
    $(this).val(res)
  });
}

const phoneLength = (phoneLength) => {
  if (phoneLength > 9 || phoneLength < 8) {
    return false
  }
  return true
}

const validaEmail = (email) => {
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (emailRegex.test(email)) {
    return true
  } else {
    return false
  }
}

var Fn = {

  validaRut: function (rutCompleto) {
    for (i in rutCompleto) {
      rutCompleto = rutCompleto.replace('.', '')
    }

    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
      return false;
    var tmp = rutCompleto.split('-');
    var digv = tmp[1];
    var rut = tmp[0];
    if (digv == 'K') digv = 'k';
    return (Fn.dv(rut) == digv);
  },
  dv: function (T) {
    var M = 0, S = 1;
    for (; T; T = Math.floor(T / 10))
      S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
  }

}

const getDate = () => {

  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();

  return d.getFullYear() + (month < 10 ? '0' : '') + month + (day < 10 ? '0' : '') + day;

}

// validacion registros

const validateRecord = async (rut) => {

  const rawResponse = await fetch('https://bloop.cl/galilearecords/validate', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ rut: rut, timeStamp: new Date().getTime() })
  });

  const result = await rawResponse.json();
  return result;
}

// Guardar registros

const saveRecord = async (rut) => {

  const rawResponse = await fetch('https://bloop.cl/galilearecords/saverecord', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ rut: rut, timeStamp: new Date().getTime() })
  });

  const result = await rawResponse.json();
  return result;
}

const postApi = (urlApi, params, cb) => {

  var createCORSRequest = function (method, url) {
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      xhr = null;
    }
    return xhr;
  };

  var url = `${urlBase}${urlApi}${params}`;
  var method = 'POST';
  var xhr = createCORSRequest(method, url);

  xhr.onreadystatechange = function () {

    if (xhr.readyState === XMLHttpRequest.DONE) {
      cb(xhr.response)
    }
  }

  xhr.onerror = function (e) {
    console.log(e);
  };

  xhr.send();

}
const postRequest = (urlApi, params, cb) => {

  var createCORSRequest = function (method, url, params) {
    console.log(params)
    console.log(url)
    var xhr = new XMLHttpRequest();


    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);

    } else if (typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest();
      xhr.open(method, url);

    } else {
      xhr = null;
    }

    //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //xhr.send(JSON.stringify(params));
    // xhr.send(params);
    return xhr;
  };

  var url = `${urlBase}${urlApi}`;
  var method = 'POST';
  var xhr = createCORSRequest(method, url, params);

  xhr.onreadystatechange = function () {

    if (xhr.readyState === XMLHttpRequest.DONE) {
      cb(xhr.response)
    }
  }

  xhr.onerror = function (e) {
    console.log(e);
  };

  xhr.send(params);

}
const postVenta = (rut) => {
  const lockModal = $("#lock-modal");
  const loadingCircle = $("#loading-circle");
  descriptionSpecial('post-venta-description');
  // lock down the form
  lockModal.css("display", "block");
  loadingCircle.css("display", "block");
  postApi('api/clientes-proyectos?', `cliente_rut=${rut}`, async function (data) {


    let email = null;
    let phone = null;
    let description = null;
    let proyecto = null;
    let codigo_proyecto = null;

    data = JSON.parse(data)

    for (x in data.proyectos) {
      $('#post-venta-proyect').append(`<option value="${data.proyectos[x]}" >${x}</option>`);
    }

    if (data.is_valid) {
      var resultValidation = await validateRecord(rut);
      console.log(resultValidation)
      if (resultValidation == true) {

        alert('Este Rut ya tiene un registro activo.');
        lockModal.css("display", "none");
        loadingCircle.css("display", "none");
        postVentaDisabled();
        return
        
      }

      // re-enable the form
      lockModal.css("display", "none");
      loadingCircle.css("display", "none");
      postVentaEnabled();
      validaNumeros('phone')
      // descriptionSpecial('post-venta-description')
      $('#post-venta-nombre').val(data.nombre)
      $("#post-venta-email").on("input", function () {
        email = $(this).val()
      });
      $("#post-venta-phone").on("input", function () {
        phone = $(this).val()
      });
      $("#post-venta-description").on("input", function () {
        description = $(this).val();

        // show character remaining
        var characterCount = description.length;

        $("#counter").html("Caracteres utilizados " + characterCount + "/600");
        $("#counter").css({ "color": "#555", "font-size": "16px" });
        if (characterCount == 600) {
          $("#counter").html("Máximo de caracteres utilizados " + characterCount + "/600");
          $("#counter").css({ "color": "red", "font-size": "16px" });
        }



      });
      $("#post-venta-proyect").on("change", function () {
        proyect = $(this).val()
      });

      $("#post-venta-button").click(function (e) {
        e.preventDefault()


        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("post-venta-button");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        codigo_proyecto = $('#post-venta-proyect').children("option:selected").val()
        proyecto = $("#post-venta-proyect option:selected").text();

        if (phone == null || !phoneLength(phone.length)) {
          alert("La cantidad de números debe ser entre 8 y 9.");
        } else if (!validaEmail(email)) {
          alert("La dirección de email es incorrecta.");
        } else if (email === null || phone === null || description === null) {
          $('#info').html('Debes completar toda la información.')
        } else {
          let fecha = getDate()
          params = `nombre=${data.nombre}&rut=${rut}&email=${email}&telefono=${phone}&proyecto=${proyecto}&comentario=${encodeURIComponent(description)}&fecha=${fecha}&codigo_proyecto=${codigo_proyecto}`
          // boton deshabilitado una vez hecho el click 09-02-23
          $("#post-venta-button").prop("disabled", true);

          // postVentaCount++;
          // console.log("Post Venta Conteo", postVentaCount)														

          // cambio de modal 31-07-23
          postRequest('api/post-venta?', params, async function (data) {
            if (data) {
              if (data == ! "True") {
                $("#post-venta-button").prop("disabled", false);
              }
              // validacion guardar registro 
              saveRecord(rut);
              postVentaDisabled();              // alert('Se ha enviado tu solicitud de inspección técnica, pronto nos pondremos en contacto contigo.')
              openPostVentaModal(modal);
              // When the user clicks on <span> (x), close the modal
              span.onclick = function () {
                modal.style.display = "none";
              };

              // When the user clicks anywhere outside of the modal, close it
              window.onclick = function (event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              };
              $('email').val('')
              $('phone').val('')
              $('description').val('')
              $('#post-venta-proyect').val('')

              // mailing system
              var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 

              xmlhttp.open("POST", "https://bloop.cl/mailingsystem", true);

              xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
              xmlhttp.send(JSON.stringify({ "name": data.nombre, "email": email }));
              // xmlhttp.send();
              /* const dataMail = { "email": email, "name": data.nombre };
              const payload = JSON.stringify(dataMail)

              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', "ngrok-skip-browser-warning": 'any' },
                body: payload,
              };

              const response = await fetch('https://dc83-45-236-128-157.ngrok.io/api/postventamailing', requestOptions); */
            } else {
              alert('Hubo un error, por favor, intenta más tarde.')

            }
          })
        }
      });
    }
    else {
      alert('Por favor, ingresa un RUT válido')
      lockModal.css("display", "none");
      loadingCircle.css("display", "none");

    }
  })
}

const getProyectCode = () => {

  let url = getPathName()
  url = url.replace('proyectos', '')
  url = url.replaceAll('/', '')

  for (x in proyectosCodigos) {
    if (proyectosCodigos[x].url === url) {
      return proyectosCodigos[x].codigo
    }
  }
}

const setupPostula = () => {
  for (x in proyectosSub) {
    $('#proyect-sur').append(`<option value="${proyectosSub[x].codigo}" >${proyectosSub[x].ciudad} - ${proyectosSub[x].proyecto}</option>`);
  }
}

const postulaConNosotros = () => {
  setupPostula()
  validaNumeros('telmovil')
  $("#btn-sur").click(function (e) {
    e.preventDefault()

    let nombreCompleto = $('#nombre-sur').val() + ' ' + $('#apellido-sur').val()
    let rut = $('#rut-sur').val()
    let email = $('#email-sur').val()
    let phone = $('#phone-sur').val()
    let codigo_proyecto = $('#proyect-sur').children("option:selected").val()
    let rango = $('#renta-sur').children("option:selected").val()
    let libreta = $('#libreta-sur').children("option:selected").val()
    let vigencia = $('#libreta-vigencia-sur').children("option:selected").val()
    let socialHogares = $('#social-sur').children("option:selected").val()

    if (!phoneLength(phone.length)) {
      alert("La cantidad de números debe ser entre 8 y 9.");
    } else if (!validaEmail(email)) {
      alert("La dirección de email es incorrecta.");
    } else if (!Fn.validaRut(rut)) {
      alert('Por favor, ingresa un RUT válido')
    } else if (nombreCompleto === '' || rut === '' || email === '' || phone === '' || codigo_proyecto === '' || rango === '' || libreta === '' || vigencia === '' || socialHogares === '') {
      alert('Debes completar toda la información.')
    } else {
      postApi('api/lead?', `nombre_completo=${nombreCompleto}&rut=${rut}&email=${email}&phone=${phone}&proyecto=${codigo_proyecto}&datos={"rango": "${rango}", "libreta": "${libreta}", "socialHogares": "${socialHogares}", "vigencia": "${vigencia}"}`, function (data) {
        //el campo JSON se vera similar a: %22rango%22:%20%22${rango}%22,%20%22libreta%22:%20%22${libreta}%22,%20%22socialHogares%22:%20%22${socialHogares}%22,%20%22vigencia%22:%20%22${vigencia}%22
        if (data) {
          alert('Tu información ha sido enviada. ¡Te contactaremos pronto!')
          $('#nombre-sur').val('')
          $('#apellido-sur').val('')
          $('#rut-sur').val('')
          $('#phone-sur').val('')
          $('#email-sur').val('')
          $('#email-sur-confirm').val('')
          $('#proyect-sur').val('')
          $('#renta-sur').val('')
          $('#libreta-sur').val('')
          $('#libreta-vigencia-sur').val('')
          $('#social-sur').val('')
        } else {
          alert('Ha ocurrido un error, por favor intenta más tarde.')
        }
      })
    }
  })
}

const cotizarSurPost = () => {
  validaNumeros('tel-512')
  $("#submit-sur").click(function (e) {
    e.preventDefault()

    let nombreCompleto = $('#name-sur').val()
    let rut = $('#rut-sur').val()
    let email = $('#email-sur').val()
    let phone = $('#phone-sur').val()
    let datos = ''

    if (!phoneLength(phone.length)) {
      alert("La cantidad de números debe ser entre 8 y 9.");
    } else if (!validaEmail(email)) {
      alert("La dirección de email es incorrecta.");
    } else if (!Fn.validaRut(rut)) {
      alert('Por favor, ingresa un RUT válido')
    } else if (nombreCompleto === '' || rut === '' || email === '' || phone === '') {
      alert('Debes completar toda la información.')
    } else {
      let codigoProyecto = getProyectCode()
      postApi('api/lead?', `nombre_completo=${nombreCompleto}&rut=${rut}&email=${email}&phone=${phone}&proyecto=${codigoProyecto}&datos=${datos}`, function (data) {
        if (data) {
          alert('La cotización ha sido solicitada, ¡Te contactaremos pronto!')
          $('#name-sur').val('')
          $('#rut-sur').val('')
          $('#email-sur').val('')
          $('#phone-sur').val('')
        } else {
          alert('Ha ocurrido un error, por favor intenta más tarde.')
        }
      })
    }
  })
}

const getCiudadValue = (name) => {
  let ciudad;
  switch (name) {
    case 'Talca':
      ciudad = '1'
      break;
    case 'Chillán':
      ciudad = '2'
      break;
    case 'San Carlos':
      ciudad = '2'
      break;
    case 'Los Angeles':
      ciudad = '3'
    case 'Curicó':
      ciudad = '4'
      break;
    case 'Rancagua':
      ciudad = '5'
      break;
    case 'Machalí':
      ciudad = '5'
      break;
    case 'Concepción':
      ciudad = '6'
      break;
    // case 'Puerto Montt':
    //     ciudad = '7'
    //     break;
    case 'Rengo':
      ciudad = '8'
      break;
    case 'Linares':
      ciudad = '9'
      break;
    // case 'Osorno':
    //     ciudad = '10'
    //     break;
    // case 'Valdivia':
    //     ciudad = '11'
    //     break;
    case 'San Fernando':
      ciudad = '12'
      break;
  }
  return ciudad
}

const escribenosSur = () => {
  validaNumeros('telmovil')
  descriptionSpecial('message-sur')
  $("#btn-sur").click(function (e) {
    e.preventDefault()

    let nombre = $('#nombre-sur').val()
    let s_nombre = $('#snombre-sur').val('null')
    let apellido = $('#apellido-sur').val()
    let s_apellido = $('#sapellido-sur').val()
    let rut = $('#rut-sur').val()
    let phone = $('#phone-sur').val()
    let email = $('#email-sur').val()
    let ciudadName = $('#ciudad-sur').children("option:selected").val()
    let ciudad = getCiudadValue(ciudadName)
    let subject = $('#subject-sur').val()
    let subcategory = $('#subcategory-sur').children("option:selected").val()
    let mensaje = $('#message-sur').val()

    if (!phoneLength(phone.length)) {
      alert("La cantidad de números debe ser entre 8 y 9.");
    } else if (!validaEmail(email)) {
      alert("La dirección de email es incorrecta.");
    } else if (!Fn.validaRut(rut)) {
      alert('Por favor, ingresa un RUT válido')
    } else if (nombre === '' || apellido === '' || s_apellido === '' || rut === '' || email === '' || ciudad === '' || subject === '' || mensaje === '') {
      alert('Debes completar toda la información.')
    } else {
      postApi('support/ticket/escribenos?', `nombre=${nombre}&s_nombre=${s_nombre}&apellido=${apellido}&s_apellido=${s_apellido}&rut=${rut}&phone=${phone}&email=${email}&ciudad=${ciudad}&subject=${subject}&mensaje=${mensaje}&subcategory=${subcategory}`, function (data) {
        if (data) {
          alert('Tu mensaje ha sido enviado, ¡Muchas gracias!')
          $('#nombre-sur').val('')
          // $('#snombre-sur').val('')
          $('#apellido-sur').val('')
          $('#sapellido-sur').val('')
          $('#rut-sur').val('')
          $('#phone-sur').val('')
          $('#email-sur').val('')
          $('#email-sur-confirm').val('')
          $('#ciudad-sur').val('')
          $('#subject-sur').val('')
          $('#message-sur').val('')
        } else {
          alert('Ha ocurrido un error, por favor intenta más tarde.')
        }
      })
    }
  })
}

const postVentaDisabled = () => {

  // $("#post-venta-nombre").prop("disabled", true);
  $("#post-venta-nombre").prop("readonly", true);
  $("#post-venta-email").prop("disabled", true);
  $("#post-venta-phone").prop("disabled", true);
  $("#post-venta-description").prop("disabled", true);
  $("#post-venta-button").prop("disabled", true);
  $("#post-venta-proyect").prop("disabled", true);
  $("#post-venta-nombre").val('')
  $("#post-venta-email").val('')
  $("#post-venta-phone").val('')
  $("#post-venta-description").val('')

}

const postVentaEnabled = () => {

  $("#post-venta-email").prop("disabled", false);
  $("#post-venta-phone").prop("disabled", false);
  $("#post-venta-description").prop("disabled", false);
  $("#post-venta-button").prop("disabled", false);
  $("#post-venta-proyect").prop("disabled", false);

}

jQuery(document).ready(function ($) {

  $('.collapse').on('shown.bs.collapse', function () {
    $(this).prev().addClass('active-acc');
  });

  $('.collapse').on('hidden.bs.collapse', function () {
    $(this).prev().removeClass('active-acc');
  });

  if (getPathName() === '/post-venta-galilea-SA/') {
    postVentaDisabled()

    $("#post-venta-rut").on("input", function () {

      if (Fn.validaRut($(this).val())) {
        postVenta($(this).val())
      } else {
        postVentaDisabled()
      }

    });
  }

  if (getPathName().includes('proyectos')) {
    cotizarSurPost()
  }

  if (getPathName() === '/escribenos-galilea-SA/') {
    escribenosSur()
  }

  if (getPathName() === '/postula-con-nosotros-galilea-SA/') {
    postulaConNosotros()
  }


  var Proyecto = $('#page-title h1').text().toUpperCase().replace('\n', ' ');
  $('.form-cotizacion-proyecto').find('#nombre-proyecto').val(Proyecto);

  var ProyectoEmail = $('#page-title h1').text().replace('\n', ' ');
  $('.form-cotizacion-proyecto').find('#nombre-proyecto-email').val(ProyectoEmail);





  const proyectos = $('#proyectos-select');
  proyectos.find("option").hide();

  const etapas = $('#etapasselect');
  etapas.find("option").hide();

  $('#city-select').on('change', function () {
    var citySelected = $(this).val();

    etapas.find('option:selected').removeAttr('selected');
    proyectos.find('option:selected').removeAttr('selected');
    proyectos.find("option").hide();
    proyectos.find("option[value*='" + citySelected + "']").show();

  });

  proyectos.on('change', function () {
    var projectSelected = $(this).val();
    var proyectoArray = projectSelected.split('-'); // ["miproyecto", "talca"]
    var proyecto = proyectoArray[0]; // "miproyecto"
    //console.log(projectSelected);
    etapas.find('option:selected').removeAttr('selected');
    etapas.find("option").hide();
    etapas.find("option[value*='" + proyecto + "']").show();

  });


});




/* Reembolsos */
jQuery(document).ready(function ($) {

  const proyectos_zona = {
    "talca": [
      {

        "Vista la Viña": {
          "nombre": "Vista la Viña",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
          ]*/
        },

        "Altos de Tejas Verdes": {
          "nombre": "Altos de Tejas Verdes",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
          ]*/
        },

        "Brisas de San Miguel": {
          "nombre": "Brisas de San Miguel",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
          ]*/
        },

        "El Avellano": {
          "nombre": "El Avellano",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            {"key" : "etapa11", "nombre" : "Etapa 11"},
            {"key" : "etapa12", "nombre" : "Etapa 12"},
            {"key" : "etapa13", "nombre" : "Etapa 13"},
            {"key" : "etapa14", "nombre" : "Etapa 14"},
            {"key" : "etapa15", "nombre" : "Etapa 15"},
          ]*/
        },

        "Doña Antonia": {
          "nombre": "Doña Antonia",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            {"key" : "etapa11", "nombre" : "Etapa 11"},
            {"key" : "etapa12", "nombre" : "Etapa 12"},
            {"key" : "etapa13", "nombre" : "Etapa 13"},
            {"key" : "etapa14", "nombre" : "Etapa 14"},
            {"key" : "etapa15", "nombre" : "Etapa 15"},
            {"key" : "etapa16", "nombre" : "Etapa 16"},
            {"key" : "etapa17", "nombre" : "Etapa 17"},
            {"key" : "etapa18", "nombre" : "Etapa 18"},
            {"key" : "etapa19", "nombre" : "Etapa 19"},
            {"key" : "etapa20", "nombre" : "Etapa 20"},
            {"key" : "etapa21", "nombre" : "Etapa 21"},
            {"key" : "etapa22", "nombre" : "Etapa 22"},
            {"key" : "etapa23", "nombre" : "Etapa 23"},
            {"key" : "etapa24", "nombre" : "Etapa 24"},
          ]*/
        },

        "Don Alfonso": {
          "nombre": "Don Alfonso",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            {"key" : "etapa11", "nombre" : "Etapa 11"},
            {"key" : "etapa12", "nombre" : "Etapa 12"},
            {"key" : "etapa13", "nombre" : "Etapa 13"},
          ]*/
        },

        "Cumbres de las Rastras": {
          "nombre": "Cumbres de las Rastras",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
          ]*/
        },

        "Praderas de San Miguel": {
          "nombre": "Praderas de San Miguel",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
          ]*/
        }

      },
    ],

    "curico": [
      {

        "Doña Elisa": {
          "nombre": "Doña Elisa",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            ]*/
        },

        "Zapallar B": {
          "nombre": "Zapallar B",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            {"key" : "etapa11", "nombre" : "Etapa 11"},
            {"key" : "etapa12", "nombre" : "Etapa 12"},
            {"key" : "etapa13", "nombre" : "Etapa 13"},
            {"key" : "etapa14", "nombre" : "Etapa 14"},
            {"key" : "etapa15", "nombre" : "Etapa 15"},
            {"key" : "etapa16", "nombre" : "Etapa 16"},
            {"key" : "etapa17", "nombre" : "Etapa 17"},
            {"key" : "etapa18", "nombre" : "Etapa 18"},
            {"key" : "etapa19", "nombre" : "Etapa 19"},
            {"key" : "etapa20", "nombre" : "Etapa 20"},
            {"key" : "etapa21", "nombre" : "Etapa 21"},
            {"key" : "etapa22", "nombre" : "Etapa 22"},
            {"key" : "etapa23", "nombre" : "Etapa 23"},
            {"key" : "etapa24", "nombre" : "Etapa 24"},
            {"key" : "etapa25", "nombre" : "Etapa 25"},
            {"key" : "etapa26", "nombre" : "Etapa 26"},
            {"key" : "etapa27", "nombre" : "Etapa 27"},
            {"key" : "etapa28", "nombre" : "Etapa 28"},
            {"key" : "etapa29", "nombre" : "Etapa 29"},
            {"key" : "etapa30", "nombre" : "Etapa 30"},
            {"key" : "etapa31", "nombre" : "Etapa 31"},
            {"key" : "etapa32", "nombre" : "Etapa 32"},
            {"key" : "etapa33", "nombre" : "Etapa 33"},
            {"key" : "etapa34", "nombre" : "Etapa 34"},
            {"key" : "etapa35", "nombre" : "Etapa 35"},
            {"key" : "etapa36", "nombre" : "Etapa 36"},
            ]*/
        },

        "Doña Matilde": {
          "nombre": "Doña Matilde",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            ]*/
        },

      }
    ],

    "chillan": [
      {

        "Don Clemente": {
          "nombre": "Don Clemente",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            ]*/
        },

        "Huertos de Chillán": {
          "nombre": "Huertos de Chillán",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            {"key" : "etapa11", "nombre" : "Etapa 11"},
            {"key" : "etapa12", "nombre" : "Etapa 12"},
            {"key" : "etapa13", "nombre" : "Etapa 13"},
            {"key" : "etapa14", "nombre" : "Etapa 14"},
            ]*/
        },

        "Cumbres de Chillán": {
          "nombre": "Cumbres de Chillán",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            ]*/
        },

        "Parque Universitario": {
          "nombre": "Parque Universitario",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa1b", "nombre" : "Etapa 1B"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            {"key" : "etapa11", "nombre" : "Etapa 11"},
            {"key" : "etapa12", "nombre" : "Etapa 12"},
            {"key" : "etapa13", "nombre" : "Etapa 13"},
            {"key" : "etapa14", "nombre" : "Etapa 14"},
            {"key" : "etapa15", "nombre" : "Etapa 15"},
            {"key" : "etapa16", "nombre" : "Etapa 16"},
            {"key" : "etapa17", "nombre" : "Etapa 17"},
            {"key" : "etapa18", "nombre" : "Etapa 18"},
            {"key" : "etapa19", "nombre" : "Etapa 19"},
            {"key" : "etapa20", "nombre" : "Etapa 20"},
            {"key" : "etapa21", "nombre" : "Etapa 21"},
            {"key" : "etapa22", "nombre" : "Etapa 22"},
            ]*/
        },


      }
    ],

    "concepcion": [
      {

        "Praderas de Junquillar": {
          "nombre": "Praderas de Junquillar",
          /*"etapas": [
              {"key" : "etapa1", "nombre" : "Etapa 1"},
              {"key" : "etapa2", "nombre" : "Etapa 2"},
              {"key" : "etapa3", "nombre" : "Etapa 3"},
              {"key" : "etapa4", "nombre" : "Etapa 4"},
              {"key" : "etapa5", "nombre" : "Etapa 5"},
              {"key" : "etapa6", "nombre" : "Etapa 6"},
              {"key" : "etapa7", "nombre" : "Etapa 7"},
              {"key" : "etapa8", "nombre" : "Etapa 8"},
              {"key" : "etapa9", "nombre" : "Etapa 9"},
            ]*/
        },

        "Cumbres de Lomas Verdes": {
          "nombre": "Cumbres de Lomas Verdes",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            ]*/
        },

        "Praderas de Coronel": {
          "nombre": "Praderas de Coronel",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            {"key" : "etapa11", "nombre" : "Etapa 11"},
            {"key" : "etapa12", "nombre" : "Etapa 12"},
            {"key" : "etapa13", "nombre" : "Etapa 13"},
            {"key" : "etapa14", "nombre" : "Etapa 14"},
            {"key" : "etapa15", "nombre" : "Etapa 15"},
            {"key" : "etapa16", "nombre" : "Etapa 16"},
            {"key" : "etapa17", "nombre" : "Etapa 17"},
            ]*/
        },

      }
    ],

    "linares": [
      {

        "Villa Galilea Linares": {
          "nombre": "Villa Galilea Linares",
          /*"etapas": [
              {"key" : "etapa1", "nombre" : "Etapa 1"},
              {"key" : "etapa2", "nombre" : "Etapa 2"},
              {"key" : "etapa3", "nombre" : "Etapa 3"},
              {"key" : "etapa4", "nombre" : "Etapa 4"},
              {"key" : "etapa5", "nombre" : "Etapa 5"},
              {"key" : "etapa6", "nombre" : "Etapa 6"},
              {"key" : "etapa7", "nombre" : "Etapa 7"},
              {"key" : "etapa8", "nombre" : "Etapa 8"},
              {"key" : "etapa9", "nombre" : "Etapa 9"},
              {"key" : "etapa10", "nombre" : "Etapa 10"},
              {"key" : "etapa11", "nombre" : "Etapa 11"},
              {"key" : "etapa12", "nombre" : "Etapa 12"},
              {"key" : "etapa13", "nombre" : "Etapa 13"},
              {"key" : "etapa14", "nombre" : "Etapa 14"},
              {"key" : "etapa15", "nombre" : "Etapa 15"},
              {"key" : "etapa16", "nombre" : "Etapa 16"},
              {"key" : "etapa17", "nombre" : "Etapa 17"},
              {"key" : "etapa18", "nombre" : "Etapa 18"},
            ]*/
        },

        "Cumbres de Linares": {
          "nombre": "Cumbres de Linares",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            {"key" : "etapa11", "nombre" : "Etapa 11"},
            {"key" : "etapa12", "nombre" : "Etapa 12"},
            ]*/
        },

        "Huertos de Linares": {
          "nombre": "Huertos de Linares",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            {"key" : "etapa11", "nombre" : "Etapa 11"},
            {"key" : "etapa12", "nombre" : "Etapa 12"},
            {"key" : "etapa13", "nombre" : "Etapa 13"},
            {"key" : "etapa14", "nombre" : "Etapa 14"},
            {"key" : "etapa15", "nombre" : "Etapa 15"},
            {"key" : "etapa16", "nombre" : "Etapa 16"},
            {"key" : "etapa17", "nombre" : "Etapa 17"},
            {"key" : "etapa18", "nombre" : "Etapa 18"},
            {"key" : "etapa19", "nombre" : "Etapa 19"},
            {"key" : "etapa20", "nombre" : "Etapa 20"},
            {"key" : "etapa21", "nombre" : "Etapa 21"},
            {"key" : "etapa22", "nombre" : "Etapa 22"},
            ]*/
        },

        //"Cumbres de Linares II" : {
        //"nombre": "Cumbres de Linares II",
        /*"etapas": [
          {"key" : "etapa1", "nombre" : "Etapa 1"},
          {"key" : "etapa2", "nombre" : "Etapa 2"},
          {"key" : "etapa3", "nombre" : "Etapa 3"},
          {"key" : "etapa4", "nombre" : "Etapa 4"},
          ]*/
        //},

      }
    ],

    "losangeles": [
      {

        "Altos de Parque Norte": {
          "nombre": "Altos de Parque Norte",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            ]*/
        },

        "Retiro Sur C": {
          "nombre": "Retiro Sur C",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            {"key" : "etapa11", "nombre" : "Etapa 11"},
            {"key" : "etapa12", "nombre" : "Etapa 12"},
            {"key" : "etapa13", "nombre" : "Etapa 13"},
            {"key" : "etapa14", "nombre" : "Etapa 14"},
            {"key" : "etapa15", "nombre" : "Etapa 15"},
            {"key" : "etapa16", "nombre" : "Etapa 16"},
            {"key" : "etapa17", "nombre" : "Etapa 17"},
            {"key" : "etapa18", "nombre" : "Etapa 18"},
            {"key" : "etapa19", "nombre" : "Etapa 19"},
            {"key" : "etapa20", "nombre" : "Etapa 20"},
            {"key" : "etapa21", "nombre" : "Etapa 21"},
            {"key" : "etapa22", "nombre" : "Etapa 22"},
            {"key" : "etapa23", "nombre" : "Etapa 23"},
            {"key" : "etapa24", "nombre" : "Etapa 24"},
            {"key" : "etapa25", "nombre" : "Etapa 25"},
            {"key" : "etapa26", "nombre" : "Etapa 26"},
            {"key" : "etapa27", "nombre" : "Etapa 27"},
            {"key" : "etapa28", "nombre" : "Etapa 28"},
            ]*/
        },

        "Cumbres del Retiro Sur": {
          "nombre": "Cumbres del Retiro Sur",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            ]*/
        },

      }
    ],

    "machali": [
      {

        "Praderas del Recreo": {
          "nombre": "Praderas del Recreo",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            ]*/
        },

        "Brisas de Machalí": {
          "nombre": "Brisas de Machalí",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            {"key" : "etapa11", "nombre" : "Etapa 11"},
            ]*/
        },

        "El Madero Polo Machalí": {
          "nombre": "El Madero Polo Machalí",
          /*"etapas": [
            {"key" : "etapa31", "nombre" : "Etapa 31"},
            {"key" : "etapa32", "nombre" : "Etapa 32"},
            {"key" : "etapa33", "nombre" : "Etapa 33"},
            {"key" : "etapa34", "nombre" : "Etapa 34"},
            {"key" : "etapa41", "nombre" : "Etapa 41"},
            {"key" : "etapa42", "nombre" : "Etapa 42"},
            {"key" : "etapa43", "nombre" : "Etapa 43"},
            {"key" : "etapa44", "nombre" : "Etapa 44"},
            {"key" : "etapa51", "nombre" : "Etapa 51"},
            {"key" : "etapa52", "nombre" : "Etapa 52"},
            {"key" : "etapa53", "nombre" : "Etapa 53"},
            {"key" : "etapa61", "nombre" : "Etapa 61"},
            {"key" : "etapa62", "nombre" : "Etapa 62"},
            {"key" : "etapa63", "nombre" : "Etapa 63"},
            ]*/
        },

      }
    ],

    "rancagua": [
      {

        "Cumbres de San Damián": {
          "nombre": "Cumbres de San Damián",
          /*"etapas": [
              {"key" : "etapa1", "nombre" : "Etapa 1"},
              {"key" : "etapa2", "nombre" : "Etapa 2"},
              {"key" : "etapa3", "nombre" : "Etapa 3"},
              {"key" : "etapa4", "nombre" : "Etapa 4"},
              {"key" : "etapa5", "nombre" : "Etapa 5"},
              {"key" : "etapa6", "nombre" : "Etapa 6"},
              {"key" : "etapa7", "nombre" : "Etapa 7"},
              {"key" : "etapa8", "nombre" : "Etapa 8"},
              {"key" : "etapa9", "nombre" : "Etapa 9"},
              {"key" : "etapa10", "nombre" : "Etapa 10"},
              {"key" : "etapa11", "nombre" : "Etapa 11"},
            ]*/
        },

        "Villa Galilea Norte": {
          "nombre": "Villa Galilea Norte",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            ]*/
        },

        "Huertos de Kennedy": {
          "nombre": "Huertos de Kennedy",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            ]*/
        },

        "Praderas de Kennedy": {
          "nombre": "Praderas de Kennedy",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
            {"key" : "etapa2", "nombre" : "Etapa 2"},
            {"key" : "etapa3", "nombre" : "Etapa 3"},
            {"key" : "etapa4", "nombre" : "Etapa 4"},
            {"key" : "etapa5", "nombre" : "Etapa 5"},
            {"key" : "etapa6", "nombre" : "Etapa 6"},
            {"key" : "etapa7", "nombre" : "Etapa 7"},
            {"key" : "etapa8", "nombre" : "Etapa 8"},
            {"key" : "etapa9", "nombre" : "Etapa 9"},
            {"key" : "etapa10", "nombre" : "Etapa 10"},
            {"key" : "etapa11", "nombre" : "Etapa 11"},
            {"key" : "etapa12", "nombre" : "Etapa 12"},
            {"key" : "etapa13", "nombre" : "Etapa 13"},
            {"key" : "etapa14", "nombre" : "Etapa 14"},
            {"key" : "etapa15", "nombre" : "Etapa 15"},
            {"key" : "etapa16", "nombre" : "Etapa 16"},
            {"key" : "etapa17", "nombre" : "Etapa 17"},
            {"key" : "etapa18", "nombre" : "Etapa 18"},
            ]*/
        },

      }
    ],

    "rengo": [
      {

        "Brisas de Rengo": {
          "nombre": "Brisas de Rengo",
          /*"etapas": [
            {"key" : "etapa1", "nombre" : "Etapa 1"},
              {"key" : "etapa2", "nombre" : "Etapa 2"},
              {"key" : "etapa3", "nombre" : "Etapa 3"},
              {"key" : "etapa4", "nombre" : "Etapa 4"},
              {"key" : "etapa5", "nombre" : "Etapa 5"},
              {"key" : "etapa6", "nombre" : "Etapa 6"},
              {"key" : "etapa7", "nombre" : "Etapa 7"},
              {"key" : "etapa8", "nombre" : "Etapa 8"},
              {"key" : "etapa9", "nombre" : "Etapa 9"},
              {"key" : "etapa10", "nombre" : "Etapa 10"},
              {"key" : "etapa11", "nombre" : "Etapa 11"},
              {"key" : "etapa12", "nombre" : "Etapa 12"},
            ]*/
        },

      }
    ],

    "sancarlos": [
      {

        "Doña Javiera": {
          "nombre": "Doña Javiera",
          /*"etapas": [
             {"key" : "etapa1", "nombre" : "Etapa 1"},
               {"key" : "etapa2", "nombre" : "Etapa 2"},
               {"key" : "etapa3", "nombre" : "Etapa 3"},
               {"key" : "etapa4", "nombre" : "Etapa 4"},
               {"key" : "etapa5", "nombre" : "Etapa 5"},
               {"key" : "etapa6", "nombre" : "Etapa 6"},
               {"key" : "etapa7", "nombre" : "Etapa 7"},
               {"key" : "etapa8", "nombre" : "Etapa 8"},
               {"key" : "etapa9", "nombre" : "Etapa 9"},
               {"key" : "etapa10", "nombre" : "Etapa 10"},
               {"key" : "etapa11", "nombre" : "Etapa 11"},
               {"key" : "etapa12", "nombre" : "Etapa 12"},
               {"key" : "etapa13", "nombre" : "Etapa 13"},
               {"key" : "etapa14", "nombre" : "Etapa 14"},
               {"key" : "etapa15", "nombre" : "Etapa 15"},
               {"key" : "etapa16", "nombre" : "Etapa 16"},
               {"key" : "etapa17", "nombre" : "Etapa 17"},
               {"key" : "etapa18", "nombre" : "Etapa 18"},
               {"key" : "etapa19", "nombre" : "Etapa 19"},
               {"key" : "etapa20", "nombre" : "Etapa 20"},
               {"key" : "etapa21", "nombre" : "Etapa 21"},
               {"key" : "etapa22", "nombre" : "Etapa 22"},
             ]*/
        },

      }
    ],

  };


  var citySelected;

  $('#proyectos-select').prepend($('<option>', {
    value: '',
    text: '- Seleccione un proyecto -'
  }));

  $('#city-select').on('change', function () {
    var citySelected = $(this).val();

    // Obtener los proyectos de la ciudad seleccionada
    var proyectos = proyectos_zona[citySelected];

    // Limpiar el select de proyectos
    $('#proyectos-select').empty();

    // Agregar opción por defecto
    $('#proyectos-select').append($('<option>', {
      value: '',
      text: '- Seleccione un proyecto -'
    }));

    // Agregar opciones de proyectos
    proyectos.forEach(function (proyecto) {
      Object.keys(proyecto).forEach(function (key) {
        var nombre = proyecto[key].nombre;
        //console.log(nombre);
        $('#proyectos-select').append($('<option>', {
          value: key,
          text: nombre
        }));
      });
    });
  });


  /* Seagrega dinamicamente etapas de proyectos, se comenta por petición de cliente
  $('#etapasselect').append($('<option>', {
    value: '',
    text: '- Seleccione una etapa -'
  }));

  $('#proyectos-select').on('change', function() {
    var proyectoSelected = $(this).val();
    var citySelected = $('#city-select').val();

    var proyecto = proyectos_zona[citySelected][0][proyectoSelected];
    //console.log(proyectos_zona);
    // Limpiar el select de etapas
    $('#etapasselect').empty();
    
    // Agregar opción por defecto
    $('#etapasselect').append($('<option>', {
      value: '',
      text: '- Seleccione una etapa -'
    }));
    
    // Agregar opciones de etapas
    proyecto.etapas.forEach(function(etapa) {
      var key = etapa.nombre; //etapa.key
      var nombre = etapa.nombre;
      $('#etapasselect').append($('<option>', {
        value: key,
        text: nombre
      }));
    })*/

});
