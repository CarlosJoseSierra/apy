export const querys = {
  //Querys Tabla Equipo_Completo
  getAllActivos: "SELECT EQC_id,EQC_serie,EQC_placa,EQC_EQUIP_id,EQC_MARCA_id,EQC_MAP_ciudad,EQC_MAP_provincia,EQC_MAP_address,EQC_USU_ing,EQC_fecha_ing,EQC_codTag,EQC_LOGO_id,EQC_nombreCliente,EQC_identificacionCliente,EQC_direccionCliente,EQC_NegocioCliente,EQC_telefonoCliente,EQC_cambio,EQC_estadoEquipo,EQC_observacion,EQC_TI_id,EQC_UBIC_id,EQC_provincia,EQC_cabezales,USU_nombre,EQC_SubCanal,EQC_Grupocliente,TA_descripcion AS MARCA_descripcion, TI_descripcion AS EQUIP_descripcion, UBIC_ciudad FROM EQUIPO_COMPLETO AS E INNER JOIN USUARIOS ON EQC_USU_ing = USU_id INNER JOIN TIPO_ACTIVO ON EQC_EQUIP_id = TA_id INNER JOIN TIPO_INVENTARIO ON EQC_TI_id = TI_id INNER JOIN UBICACION ON EQC_UBIC_id = UBIC_id",
  getCountAllActive: "SELECT count(*) CONTEOEQUIPO FROM EQUIPO_COMPLETO",
  getActivoByUsuario: "SELECT EQC_id,EQC_serie,EQC_placa,EQC_EQUIP_id,EQC_MARCA_id,EQC_MAP_ciudad,EQC_MAP_provincia,EQC_MAP_address,EQC_USU_ing,EQC_fecha_ing,EQC_codTag,EQC_LOGO_id,EQC_nombreCliente,EQC_identificacionCliente,EQC_direccionCliente,EQC_NegocioCliente,EQC_telefonoCliente,EQC_cambio,EQC_estadoEquipo,EQC_observacion,EQC_TI_id,EQC_UBIC_id,EQC_provincia,EQC_cabezales,USU_nombre,EQC_SubCanal,EQC_Grupocliente,TA_descripcion AS MARCA_descripcion, TI_descripcion AS EQUIP_descripcion, UBIC_ciudad FROM EQUIPO_COMPLETO AS E INNER JOIN USUARIOS ON EQC_USU_ing = USU_id INNER JOIN TIPO_ACTIVO ON EQC_EQUIP_id = TA_id INNER JOIN TIPO_INVENTARIO ON EQC_TI_id = TI_id INNER JOIN UBICACION ON EQC_UBIC_id = UBIC_id WHERE EQC_USU_ing = @idUsuario",  
  getActivoById: "SELECT * FROM EQUIPO_COMPLETO Where EQC_id = @Id",
  getActivoByTag: "SELECT EQC_id,EQC_serie,EQC_placa,EQC_EQUIP_id,EQC_MARCA_id,EQC_MAP_ciudad,EQC_MAP_provincia,EQC_MAP_address,EQC_USU_ing,EQC_fecha_ing,EQC_codTag,EQC_LOGO_id,EQC_nombreCliente,EQC_identificacionCliente,EQC_direccionCliente,EQC_NegocioCliente,EQC_telefonoCliente,EQC_cambio,EQC_estadoEquipo,EQC_observacion,EQC_TI_id,EQC_UBIC_id,EQC_provincia,EQC_cabezales,USU_nombre,EQC_SubCanal,EQC_Grupocliente,TA_descripcion AS MARCA_descripcion, TI_descripcion AS EQUIP_descripcion, UBIC_ciudad FROM EQUIPO_COMPLETO AS E INNER JOIN USUARIOS ON EQC_USU_ing = USU_id INNER JOIN TIPO_ACTIVO ON EQC_EQUIP_id = TA_id INNER JOIN TIPO_INVENTARIO ON EQC_TI_id = TI_id INNER JOIN UBICACION ON EQC_UBIC_id = UBIC_id WHERE EQC_codTag = @EQC_codTag",
  addNewActivo:
    "INSERT INTO EQUIPO_COMPLETO(EQC_serie,EQC_placa,EQC_EQUIP_id,EQC_MARCA_id,EQC_MAP_ciudad,EQC_MAP_provincia,EQC_MAP_address,EQC_USU_ing,EQC_fecha_ing,EQC_codTag,EQC_LOGO_id,EQC_nombreCliente,EQC_identificacionCliente,EQC_direccionCliente,EQC_NegocioCliente,EQC_telefonoCliente,EQC_estadoEquipo,EQC_cambio,EQC_observacion,EQC_TI_id,EQC_USU_edit,EQC_fecha_edit,EQC_UBIC_id,EQC_provincia,EQC_cabezales,EQC_SubCanal, EQC_GrupoCliente) VALUES(@EQC_serie,@EQC_placa,@EQC_EQUIP_id,@EQC_MARCA_id,@EQC_MAP_ciudad,@EQC_MAP_provincia,@EQC_MAP_address,@EQC_USU_ing,GETDATE(),@EQC_codTag,@EQC_LOGO_id,@EQC_nombreCliente,@EQC_identificacionCliente,@EQC_direccionCliente,@EQC_NegocioCliente,@EQC_telefonoCliente,@EQC_estadoEquipo,@EQC_cambio,@EQC_observacion,@EQC_TI_id,@EQC_USU_edit,GETDATE(),@EQC_UBIC_id,@EQC_provincia,@EQC_cabezales,@EQC_SubCanal, @EQC_Grupocliente)",
  deleteActivo: "DELETE FROM EQUIPO_COMPLETO WHERE EQC_id= @Id",
  getTotalActivos: "SELECT COUNT(*) FROM EQUIPO_COMPLETO",
  updateActivoById:
    "UPDATE EQUIPO_COMPLETO SET EQC_serie = @EQC_serie,EQC_placa = @EQC_placa,EQC_EQUIP_id = @EQC_EQUIP_id,EQC_MARCA_id = @EQC_MARCA_id,EQC_MAP_ciudad = @EQC_MAP_ciudad,EQC_MAP_provincia = @EQC_MAP_provincia,EQC_USU_edit = @EQC_USU_edit,EQC_fecha_edit = GETDATE(),EQC_codTag = @EQC_codTag,EQC_LOGO_id = @EQC_LOGO_id,EQC_nombreCliente = @EQC_nombreCliente,EQC_identificacionCliente = @EQC_identificacionCliente,EQC_direccionCliente = @EQC_direccionCliente,EQC_NegocioCliente = @EQC_NegocioCliente,EQC_telefonoCliente = @EQC_telefonoCliente,EQC_cambio = @EQC_cambio,EQC_estadoEquipo = @EQC_estadoEquipo,EQC_observacion = @EQC_observacion, EQC_TI_id = @EQC_TI_id, EQC_UBIC_id = @EQC_UBIC_id,EQC_provincia = @EQC_provincia,EQC_cabezales =@EQC_cabezales,EQC_SubCanal=@EQC_SubCanal, EQC_Grupocliente=@EQC_Grupocliente  WHERE EQC_id = @Id",
  
    //Querys Tabla Tipo Inventario
    getAllTipoInventario: "SELECT TI_id, TI_descripcion FROM TIPO_INVENTARIO",

   //Querys Tabla Modelos de Equipos
  getAllEquipos: "SELECT * FROM TIPO_ACTIVO", 
  getEquipoById: "SELECT * FROM EQUIPO Where EQ_id = @Id",
  //Querys Tabla Modelos de Usuarios
  getAllUsuarios: "SELECT * FROM USUARIOS", 
  getUsuarioById: "SELECT * FROM USUARIOS Where USU_id = @Id",
  getUserPass: "SELECT * FROM USUARIOS Where USU_usuario like @USU_usuario",
  //getVendedores:"SELECT AS USU_nombre FROM USUARIOS where USU_ROL like 'VENDEDOR'",
  getVendedores:"SELECT DISTINCT(EQC_identificacionCliente) AS USU_nombre FROM EQUIPO_COMPLETO ORDER BY EQC_identificacionCliente",
  //Querys Tabla Historial Equipos
  getTopFiveItems: "SELECT TOP 5 count(AS_DET_cantidad) AS CANTIDAD, AS_DET_PROD_descripcion AS DESCRIPCION FROM AREA_SERVICIODETALLE INNER JOIN AREA_SERVICIO ON AS_DET_AS_id = AS_id WHERE (AS_DET_Estado = 1 ) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) and (AS_OT_id>1)  AND AS_DET_PROD_codigo like 'SERVICIO' GROUP BY AS_DET_PROD_descripcion ORDER BY CANTIDAD DESC",
  geoTotalItemsServicios: "SELECT TOP 5 count(AS_DET_cantidad) AS CANTIDAD, AS_DET_PROD_descripcion AS DESCRIPCION FROM AREA_SERVICIODETALLE INNER JOIN AREA_SERVICIO ON AS_DET_AS_id = AS_id WHERE (AS_DET_Estado = 1 ) AND (AS_OT_id>1)  AND AS_DET_PROD_codigo like 'SERVICIO' GROUP BY AS_DET_PROD_descripcion ORDER BY CANTIDAD DESC",
  getHistorialReparacion: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) AND (HIST_AS_TPS_id = 1 OR HIST_AS_TPS_id = 2 OR HIST_AS_TPS_id = 3 OR HIST_AS_TPS_id = 4 OR HIST_AS_TPS_id = 5 OR HIST_AS_TPS_id = 6 OR HIST_AS_TPS_id = 8) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id",
  getHistorialDisponible: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) AND (HIST_AS_TPS_id = 7) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id ",
  getHistorialEquipos: "SELECT HIST_id,HIST_EQC_id,HIST_placa,HIST_serie,HIST_codTag,CONVERT(varchar,HIST_FECHA_ing,3) as HIST_FECHA_ing,HIST_USU_ing,HIST_MAP_ciudad,HIST_MAP_provincia,HIST_MAP_address,HIST_nombreCliente,HIST_identificacionCliente,HIST_direccionCliente,HIST_NegocioCliente,HIST_telefonoCliente,HIST_provincia,UBIC_ciudad,USU_nombre AS HIST_USU_nombre,HIST_estadoEquipo FROM HISTORIAL_MOVIMIENTOEQUIPO INNER JOIN USUARIOS ON HIST_USU_ing = USU_id INNER JOIN UBICACION ON HIST_UBIC_id = UBIC_id WHERE HIST_EQC_id = @Id",

  //Totales
  /* store procedure comentado porque este cliente no trabaja con el google maps*/
  //getDataEquiposMapa:  "SELECT T.EQC_MAP_provincia AS EQC_MAP_provincia,COUNT(DISTINCT(T.EQC_id))AS CONTEO FROM(SELECT EQC_MAP_provincia,EQC_id FROM EQUIPO_COMPLETO)  T GROUP BY T.EQC_MAP_provincia ",
  getDataEquiposMapa:  "SELECT T.EQC_provincia AS EQC_MAP_provincia,COUNT(DISTINCT(T.EQC_id))AS CONTEO FROM(SELECT EQC_provincia,EQC_id FROM EQUIPO_COMPLETO)  T GROUP BY T.EQC_provincia",
  getDataTopFiveVendedores:"SELECT TOP 5 USU_nombre AS DESCRIPCION,count(DISTINCT(HIST_EQC_id)) AS CONTEO FROM HISTORIAL_MOVIMIENTOEQUIPO INNER JOIN USUARIOS ON HIST_USU_ing = USU_id WHERE HIST_id in (SELECT min(HIST_id) FROM HISTORIAL_MOVIMIENTOEQUIPO GROUP BY HIST_EQC_id) GROUP BY USU_nombre, HIST_USU_ing ORDER BY CONTEO DESC",
  getDataEntregadosTotal: "SELECT T.MES,COUNT(DISTINCT(T.HIST_AS_id))AS CONTEO FROM(SELECT DATENAME(MONTH, HIST_AS_fecha ) AS MES, HIST_AS_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE  HIST_AS_TPS_id = 10 GROUP BY HIST_AS_fecha,HIST_AS_id) T GROUP BY T.MES ORDER BY (CASE WHEN T.MES='Enero' THEN 1 WHEN T.MES='Febrero' THEN 2 WHEN T.MES='Marzo' THEN 3 WHEN T.MES='Abril' THEN 4 WHEN T.MES='Mayo' THEN 5 WHEN T.MES='Junio' THEN 6 WHEN T.MES='Julio' THEN 7 WHEN T.MES='Agosto' THEN 8 WHEN T.MES='Septiembre' THEN 9 WHEN T.MES='Octubre' THEN 10 WHEN T.MES='Noviembre' THEN 11 WHEN T.MES='Deciembre' THEN 12 ELSE 0 END)",

  //Obtener Equipos Reparados, Disponibles, Totales
  getHistorialTotalReparacion: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (HIST_AS_TPS_id = 1 OR HIST_AS_TPS_id = 2 OR HIST_AS_TPS_id = 3 OR HIST_AS_TPS_id = 4 OR HIST_AS_TPS_id = 5 OR HIST_AS_TPS_id = 6 OR HIST_AS_TPS_id = 8) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id",
  getHistorialTotalDisponible: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (HIST_AS_TPS_id = 7) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id ",
  getHistorialTotalEntregados: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (HIST_AS_TPS_id = 10) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id ",

  //Querys Tabla Area Servicio
  getTopSevenModelos: "SELECT TOP 7 COUNT(AS_id) AS CONTEO,EQUIP_modelo  FROM AREA_SERVICIO INNER JOIN EQUIPO ON AS_EQUIP_id = EQUIP_id WHERE (AS_OT_id>0) AND (AS_CLI_id = @id or AS_CLI_id = @id2) GROUP BY EQUIP_modelo ORDER BY CONTEO DESC",
  //getTotalModelos: "SELECT T.EQUIP_modelo,COUNT(DISTINCT(T.EQC_id))AS CONTEO FROM(SELECT EQC_EQUIP_id,EQC_id,EQUIP_modelo FROM EQUIPO_COMPLETO INNER JOIN EQUIPO ON EQC_EQUIP_id = EQUIP_id)  T GROUP BY T.EQUIP_modelo ORDER BY CONTEO DESC",
  getTotalModelos: "SELECT TOP 5 T.MARCA_descripcion AS EQUIP_modelo,COUNT(DISTINCT(T.EQC_id))AS CONTEO FROM(SELECT EQC_MARCA_id,EQC_id,MARCA_descripcion FROM EQUIPO_COMPLETO INNER JOIN MARCA ON EQC_MARCA_id = MARCA_id)  T GROUP BY T.MARCA_descripcion ORDER BY CONTEO DESC",

  //Querys Tabla Logos
  getAllLogos: "SELECT LOGO_id,LOGO_nombre FROM LOGO", 
  getLogoById: "SELECT LOGO_id,LOGO_nombre FROM LOGO Where LOGO_id = @Id",

  //Nuevos
  getAllRoles: "SELECT * FROM ROL",
  getAllCargos: "SELECT * FROM CARGO",

  addNewUser:
    "INSERT INTO USUARIOS(USU_nombre,USU_usuario,USU_clave,USU_cargo,USU_rol,USU_estado,USU_conectado) VALUES(@USU_nombre,@USU_usuario,@USU_clave,@USU_cargo,@USU_rol,1,0)",
  
    updateUserById:
    "UPDATE USUARIOS SET USU_nombre = @USU_nombre,USU_usuario = @USU_usuario,USU_clave = @USU_clave,USU_cargo = @USU_cargo,USU_rol = @USU_rol WHERE USU_id = @Id",

    //Marcas
    getAllMarcas:"SELECT MARCA_id,MARCA_descripcion FROM MARCA",
    addNewMarca:
    "INSERT INTO MARCA(MARCA_id,MARCA_descripcion) VALUES(@MARCA_id,@MARCA_descripcion)",

    //getAllCiudad:"SELECT DISTINCT(EQC_MAP_ciudad) AS FROM EQUIPO_COMPLETO ORDER BY EQC_MAP_ciudad",
    getAllCiudad:"SELECT DISTINCT(EQC_provincia) AS EQC_MAP_ciudad FROM EQUIPO_COMPLETO ORDER BY EQC_provincia",
    getAllProvincia:"SELECT DISTINCT(EQC_provincia) AS EQC_MAP_provincia FROM EQUIPO_COMPLETO ORDER BY EQC_provincia",

    getAllUbicacion: "SELECT UBIC_id, UBIC_ciudad, UBIC_provincia FROM UBICACION ORDER BY UBIC_ciudad",

    getDataEtiquetas: "SELECT T.TI_descripcion AS DESCRIPCION,COUNT(DISTINCT(T.EQC_id))AS CANTIDAD FROM(SELECT EQC_TI_id,EQC_id,TI_descripcion FROM EQUIPO_COMPLETO INNER JOIN TIPO_INVENTARIO ON EQC_TI_id = TI_id) T GROUP BY T.TI_descripcion",
};
