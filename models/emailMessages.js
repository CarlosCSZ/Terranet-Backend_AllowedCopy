const { emailsStructure } = require('.');

const emailsModel = async (type, body) => {
  let vessel = {
    to: '',
    subject: '',
    html: '',
  };

  const emails = await emailsStructure.find({});

  if(type === 'contracts'){
    vessel.to = emails[0].email,
    vessel.subject = emails[0].subject,
    vessel.html = `<table id="u_content_text_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 50px 40px;font-family:'Montserrat',sans-serif;" align="left">

    <div class="v-line-height" style="line-height: 160%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Plan: ${body.plan}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Código de descuento: ${body.discountCode}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">c.i.: ${body.ci}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Nombres: ${body.name}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Correo: ${body.email}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Celular: ${body.phone}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Domicilio: ${body.address}</p>
    </div>

          </td>
        </tr>
      </tbody>
    </table><br/>`
  };

  if(type === 'business'){
    vessel.to = emails[9].email,
    vessel.subject = emails[9].subject,
    vessel.html = `<table id="u_content_text_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 50px 40px;font-family:'Montserrat',sans-serif;" align="left">

    <div class="v-line-height" style="line-height: 160%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 160%; text-align: left;">ruc: ${body.ruc}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Nombre de la empresa: ${body.name}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">correo: ${body.email}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Celular: ${body.phone}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Dispositivos: detalle</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">    Computadoras: ${body.devices.computers}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">    Tablets: ${body.devices.tabletsPhones}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">    SmartTv: ${body.devices.smartTv}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">    Otros dispositivos: ${body.devices.otherDevices}</p>
    </div>

          </td>
        </tr>
      </tbody>
    </table><br/>`
  };

  if(type === 'changeOwner'){
    vessel.to = emails[1].email,
    vessel.subject = emails[1].subject,
    vessel.html = `<table id="u_content_text_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 50px 40px;font-family:'Montserrat',sans-serif;" align="left">

    <div class="v-line-height" style="line-height: 160%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Titular actual: detalles</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       c.i.: ${body.previousOwner.id}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       Nombres: ${body.previousOwner.names}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       Apellidos: ${body.previousOwner.lastNames}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Titular cambiante: detalles</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       c.i.: ${body.newOwner.id}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       Nombres: ${body.newOwner.names}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       Apellidos: ${body.newOwner.lastNames}</p>
    </div>

          </td>
        </tr>
      </tbody>
    </table><br/>`
  };

  if(type === 'updateData'){
    vessel.to = emails[1].email,
    vessel.subject = emails[1].subject,
    vessel.html = `<table id="u_content_text_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 50px 40px;font-family:'Montserrat',sans-serif;" align="left">

    <div class="v-line-height" style="line-height: 160%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Titular actual: detalles</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       c.i.: ${body.previousData.id}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       Nombres: ${body.previousData.names}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       Numero de telefónico: ${body.previousData.phoneNumber}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       Correo: ${body.previousData.email}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       Direccion: ${body.previousData.address}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Titular cambiante: detalles</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       c.i.: ${body.newData.id}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       Nombres: ${body.newData.names}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       Direccion: ${body.newData.phoneNumber}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       Correo: ${body.newData.email}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">       Direccion: ${body.newData.address}</p>
    </div>

          </td>
        </tr>
      </tbody>
    </table><br/>`
  };

  if(type === 'homeTrans'){
    vessel.to = emails[2].email,
    vessel.subject = emails[2].subject,
    vessel.html = `<table id="u_content_text_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 50px 40px;font-family:'Montserrat',sans-serif;" align="left">

      <div class="v-line-height" style="line-height: 160%; text-align: center; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 160%; text-align: left;">c.i.: ${body.idUser}</p>
      <p style="font-size: 14px; line-height: 160%; text-align: left;">Dirección actual: ${body.address1}</p>
      <p style="font-size: 14px; line-height: 160%; text-align: left;">Dirección a cambiar: ${body.address2}</p>
      <p style="font-size: 14px; line-height: 160%; text-align: left;">Referencias: ${body.reference}</p>
      </div>

        </td>
        </tr>
      </tbody>
    </table><br/>`
  };

  if(type === ''){
      vessel.to = emails[3].email,
      vessel.subject = emails[3].subject
  };

  if(type === 'contactUs'){
      vessel.to = emails[4].email,
      vessel.subject = emails[4].subject,
      vessel.html = `<table id="u_content_text_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 50px 40px;font-family:'Montserrat',sans-serif;" align="left">

      <div class="v-line-height" style="line-height: 160%; text-align: center; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 160%; text-align: left;">c.i.: ${body.idUser}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Nombre: ${body.name}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Celular: ${body.phone}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Correo: ${body.email}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Solicitud: ${body.message}</p>
      </div>

          </td>
        </tr>
      </tbody>
    </table><br/>`
  };

  if(type === 'recommendations'){
    vessel.to = emails[5].email,
    vessel.subject = emails[5].subject,
    vessel.html = `<table id="u_content_text_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 50px 40px;font-family:'Montserrat',sans-serif;" align="left">

      <div class="v-line-height" style="line-height: 160%; text-align: center; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 160%; text-align: left;">Nombres: ${body.names}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Apellidos: ${body.lastNames}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Celular: ${body.phone}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Correo: ${body.email}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Mensaje: ${body.message}</p>
      </div>

          </td>
        </tr>
      </tbody>
    </table><br/>`
  };

  if(type === 'applicants'){
    vessel.to = emails[6].email,
    vessel.subject = emails[6].subject,
    vessel.html = `<table id="u_content_text_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 50px 40px;font-family:'Montserrat',sans-serif;" align="left">

      <div class="v-line-height" style="line-height: 160%; text-align: center; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 160%; text-align: left;">Nombres: ${body.name}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Apellidos: ${body.lastName}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">c.i.: ${body.id}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Domicilio: ${body.address}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">correo: ${body.email}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Celular: ${body.phone}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Vacante: ${body.vacant}</p>
      </div>

          </td>
        </tr>
      </tbody>
    </table><br/>`
  };

  if(type === 'pago'){
    vessel.to = emails[7].email,
    vessel.subject = emails[7].subject,
    vessel.html = `<table id="u_content_text_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 50px 40px;font-family:'Montserrat',sans-serif;" align="left">

      <div class="v-line-height" style="line-height: 160%; text-align: center; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 160%; text-align: left;">Nombres: ${body.names}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Apellidos: ${body.lastNames}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">c.i.: ${body.ci}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Fecha de corte: ${body.cutOffDate}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Plan: ${body.plan}</p>
    <p style="font-size: 14px; line-height: 160%; text-align: left;">Forma de pago: ${body.paymentType}</p>
      </div>

          </td>
        </tr>
      </tbody>
    </table><br/>`
  };

  if(type === 'information'){
    vessel.to = emails[8].email,
    vessel.subject = emails[8].subject,
    vessel.html = `<table id="u_content_text_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 50px 40px;font-family:'Montserrat',sans-serif;" align="left">

    <div class="v-line-height" style="line-height: 160%; text-align: center; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 160%; text-align: left;">Número de celular: ${body.phoneNumber}</p>
    </div>

          </td>
        </tr>
      </tbody>
    </table><br/>`
  };

  return vessel
};


module.exports = emailsModel;
