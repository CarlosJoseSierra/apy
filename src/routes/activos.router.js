import { Router } from "express";
const storage = require('../libs/multer');

import {
  getActivos,
  createNewActivo,
  updateActivoById,
  getActivoByCodTag,
  getActivosXUsuario,
  getcountActivo,
  getTipoInventario,
  getTipoActivo,
  getActivosById,
} from "../controllers/activos.controller";

const router = Router();

router.get("/activos", getActivos);

router.get("/activos/y/:idUsuario", getActivosXUsuario);

//router.post("/activos/new", createNewActivo);
router.post("/activos/new", storage.array('image',3),createNewActivo);

router.get("/activos/count", getcountActivo);

router.get("/activos1/:EQC_codTag", getActivoByCodTag);

router.get("/activos/tipo", getTipoInventario);

router.get("/activos/tipoA", getTipoActivo);

router.get("/activos/x/:idActivo", getActivosById);
//router.put("/activos/x/:id", updateActivoById);
router.put("/activos/x/:id", storage.array('image',3),updateActivoById);

export default router;
