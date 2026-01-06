import { getConnection, querys, sql } from "../database";
const cloudinary = require("../libs/cloudinary");

export const getActivos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllActivos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getcountActivo = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getCountAllActive);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewActivo = async (req, res) => {
  //const { EQC_serie, EQC_placa, EQC_EQUIP_id,EQC_MARCA_id,EQC_MAP_ciudad,EQC_MAP_provincia,EQC_MAP_address,EQC_USU_ing,
    //EQC_codTag,EQC_LOGO_id,EQC_nombreCliente,EQC_identificacionCliente,EQC_direccionCliente,EQC_NegocioCliente,
    //EQC_telefonoCliente,EQC_cambio,EQC_estadoEquipo,EQC_observacion,EQC_TI_id,EQC_USU_edit,EQC_UBIC_id,
    //EQC_provincia,EQC_cabezales, EQC_SubCanal, EQC_Grupocliente, EQC_Ubicacion} = req.body;
  
  // validating
  //if (EQC_serie == null || EQC_placa == null ||  EQC_EQUIP_id==null || EQC_USU_ing == null || EQC_codTag == null || EQC_LOGO_id == null) {
    //return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  //}

  //try {
    //const pool = await getConnection();
    //const result = await pool
      //.request()
      //.input("EQC_serie", sql.VarChar, EQC_serie)
      //.input("EQC_placa", sql.VarChar, EQC_placa)
      //.input("EQC_EQUIP_id", sql.Decimal, EQC_EQUIP_id)
      //.input("EQC_MARCA_id", sql.Decimal, EQC_MARCA_id)
      //.input("EQC_MAP_ciudad", sql.VarChar, EQC_MAP_ciudad)
      //.input("EQC_MAP_provincia", sql.VarChar, EQC_MAP_provincia)
      //.input("EQC_MAP_address", sql.VarChar, EQC_MAP_address)
      //.input("EQC_USU_ing", sql.Decimal, EQC_USU_ing)
      //.input("EQC_USU_edit", sql.Decimal, EQC_USU_edit)
      //.input("EQC_codTag", sql.VarChar, EQC_codTag)
      //.input("EQC_LOGO_id", sql.Decimal(18,2), EQC_LOGO_id)
      //.input("EQC_nombreCliente", sql.VarChar, EQC_nombreCliente)
      //.input("EQC_identificacionCliente", sql.VarChar, EQC_identificacionCliente)
      //.input("EQC_direccionCliente", sql.VarChar, EQC_direccionCliente)
      //.input("EQC_NegocioCliente", sql.VarChar, EQC_NegocioCliente)
      //.input("EQC_telefonoCliente", sql.VarChar, EQC_telefonoCliente)
      //.input("EQC_cambio",sql.Decimal,EQC_cambio)
      //.input("EQC_estadoEquipo",sql.Decimal,EQC_estadoEquipo)
      //.input("EQC_observacion",sql.VarChar,EQC_observacion)
      //.input("EQC_TI_id", sql.Decimal, EQC_TI_id)
      //.input("EQC_UBIC_id",sql.Decimal,EQC_UBIC_id)
      //.input("EQC_provincia",sql.VarChar,EQC_provincia)
      //.input("EQC_cabezales", sql.Decimal, EQC_cabezales)
      //.input("EQC_SubCanal", sql.VarChar, EQC_SubCanal)
      //.input("EQC_Grupocliente", sql.VarChar, EQC_Grupocliente)
      //.input("EQC_Ubicacion", sql.VarChar, EQC_Ubicacion)
      //.query(querys.addNewActivo);
      //if(result.rowsAffected==1){
        //return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
      //}else{
        //return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
      //}
    
  //} catch (error) {
    //res.status(500);
    //console.log(error.message);
    //res.send(error.message);
  //}
  let image1= '',image2= '',image3= ''; 
  if(req.files.length>0)
  {
    if(req.files[0]!=undefined)
    {
        const img = await cloudinary.uploader.upload(req.files[0].path);
        image1 = img.secure_url;
    }
    if(req.files[1]!=undefined)
    {
        const img = await cloudinary.uploader.upload(req.files[1].path);
        image2 = img.secure_url;
    }
    if(req.files[2]!=undefined)
    {
        const img = await cloudinary.uploader.upload(req.files[2].path);
        image3 = img.secure_url;
    }

    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("EQC_serie", sql.VarChar, req.body.EQC_serie)
        .input("EQC_placa", sql.VarChar, req.body.EQC_placa)
        .input("EQC_EQUIP_id", sql.Decimal, req.body.EQC_EQUIP_id)
        .input("EQC_MARCA_id", sql.Decimal, req.body.EQC_MARCA_id)
        .input("EQC_MAP_ciudad", sql.VarChar, req.body.EQC_MAP_ciudad)
        .input("EQC_MAP_provincia", sql.VarChar, req.body.EQC_MAP_provincia)
        .input("EQC_MAP_address", sql.VarChar, req.body.EQC_MAP_address)
        .input("EQC_USU_ing", sql.Decimal, req.body.EQC_USU_ing)
        .input("EQC_USU_edit", sql.Decimal, req.body.EQC_USU_edit)
        .input("EQC_codTag", sql.VarChar, req.body.EQC_codTag)
        .input("EQC_LOGO_id", sql.Decimal(18,2), req.body.EQC_LOGO_id)
        .input("EQC_nombreCliente", sql.VarChar, req.body.EQC_nombreCliente)
        .input("EQC_identificacionCliente", sql.VarChar, req.body.EQC_identificacionCliente)
        .input("EQC_direccionCliente", sql.VarChar, req.body.EQC_direccionCliente)
        .input("EQC_NegocioCliente", sql.VarChar, req.body.EQC_NegocioCliente)
        .input("EQC_telefonoCliente", sql.VarChar, req.body.EQC_telefonoCliente)
        .input("EQC_cambio",sql.Decimal,req.body.EQC_cambio)
        .input("EQC_estadoEquipo",sql.Decimal,req.body.EQC_estadoEquipo)
        .input("EQC_observacion",sql.VarChar,req.body.EQC_observacion)
        .input("EQC_TI_id", sql.Decimal, req.body.EQC_TI_id)
        .input("EQC_UBIC_id",sql.Decimal,req.body.EQC_UBIC_id)
        .input("EQC_provincia",sql.VarChar,req.body.EQC_provincia)
        .input("EQC_cabezales", sql.Decimal, req.body.EQC_cabezales)
        .input("EQC_SubCanal", sql.VarChar, req.body.EQC_SubCanal)
        .input("EQC_Grupocliente", sql.VarChar, req.body.EQC_Grupocliente)
        .input("EQC_Ubicacion", sql.VarChar, req.body.EQC_Ubicacion)
        .input("REQ_imagen1", sql.VarChar, image1)
        .input("REQ_imagen2", sql.VarChar, image2)
        .input("REQ_imagen3", sql.VarChar, image3)
        .query(querys.addNewActivo);
        if(result.rowsAffected==1){
          return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
        }else{
          return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
        }
    } catch (error) {
      res.status(500);
      console.log(error.message);
      res.send(error.message);
    }
  }
};

export const updateActivoById = async (req, res) => {
  const { EQC_serie, EQC_placa, EQC_EQUIP_id,EQC_MARCA_id,EQC_MAP_ciudad,EQC_MAP_provincia,EQC_MAP_address,EQC_USU_ing,
    EQC_codTag,EQC_LOGO_id,EQC_nombreCliente,EQC_identificacionCliente,EQC_direccionCliente,EQC_NegocioCliente,EQC_telefonoCliente,
    EQC_cambio,EQC_estadoEquipo,EQC_observacion,EQC_TI_id,EQC_USU_edit,EQC_UBIC_id,
    EQC_provincia,EQC_cabezales,EQC_SubCanal, EQC_Grupocliente, EQC_Ubicacion} = req.body;

  // validating
  //if (EQC_serie == null || EQC_placa == null ||  EQC_EQUIP_id==null  || EQC_USU_edit == null || EQC_codTag == null || EQC_LOGO_id == null) {
   // return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  //}

  try {
    //console.log('no se conecto');
    const pool = await getConnection();
    
    const result = await pool
      .request()
      .input("id", req.params.id)
      .input("EQC_serie", sql.VarChar, EQC_serie)
      .input("EQC_placa", sql.VarChar, EQC_placa)
      .input("EQC_EQUIP_id", sql.Decimal, EQC_EQUIP_id)
      .input("EQC_MARCA_id", sql.Decimal, EQC_MARCA_id)
      .input("EQC_MAP_ciudad", sql.VarChar, EQC_MAP_ciudad)
      .input("EQC_MAP_provincia", sql.VarChar, EQC_MAP_provincia)
      .input("EQC_MAP_address", sql.VarChar, EQC_MAP_address)
      .input("EQC_USU_ing", sql.Decimal, EQC_USU_ing)
      .input("EQC_USU_edit", sql.Decimal, EQC_USU_edit)
      .input("EQC_codTag", sql.VarChar, EQC_codTag)
      .input("EQC_LOGO_id", sql.Decimal(18,2), EQC_LOGO_id)
      .input("EQC_nombreCliente", sql.VarChar, EQC_nombreCliente)
      .input("EQC_identificacionCliente", sql.VarChar, EQC_identificacionCliente)
      .input("EQC_direccionCliente", sql.VarChar, EQC_direccionCliente)
      .input("EQC_NegocioCliente", sql.VarChar, EQC_NegocioCliente)
      .input("EQC_telefonoCliente", sql.VarChar, EQC_telefonoCliente)
      .input("EQC_cambio",sql.Decimal,EQC_cambio)
      .input("EQC_estadoEquipo",sql.Decimal,EQC_estadoEquipo)
      .input("EQC_observacion",sql.VarChar,EQC_observacion)
      .input("EQC_TI_id", sql.Decimal, EQC_TI_id)
      .input("EQC_UBIC_id",sql.Decimal,EQC_UBIC_id)
      .input("EQC_provincia",sql.VarChar,EQC_provincia)
      .input("EQC_cabezales", sql.Decimal, EQC_cabezales)
      .input("EQC_SubCanal", sql.VarChar, EQC_SubCanal)
      .input("EQC_Grupocliente", sql.VarChar, EQC_Grupocliente)
      .input("EQC_Ubicacion", sql.VarChar, EQC_Ubicacion)
      .query(querys.updateActivoById);

   if(result.rowsAffected==1){
    return res.status(200).json({ status: "ok", msg: "Actualizacion exitosa" ,token:0});
  }else{
    return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0});
  }
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
};

export const getActivoById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getActivoById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getActivoByCodTag = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("EQC_codTag", req.params.EQC_codTag)
      .query(querys.getActivoByTag);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteActivoById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteActivo);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalActivos = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalActivos);
  //console.log(result);
  res.json(result.recordset[0][""]);
};

export const getActivosXUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input("idUsuario", req.params.idUsuario)
    
    .query(querys.getActivoByUsuario);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTipoInventario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTipoInventario);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTipoActivo = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTipoActivo);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
