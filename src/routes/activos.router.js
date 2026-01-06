import { Router } from "express";
import {
  getActivos,
  createNewActivo,
  updateActivoById,
  getActivoByCodTag,
  getActivosXUsuario,
  getcountActivo,
  getTipoInventario,
  getTipoActivo,
} from "../controllers/activos.controller";

const router = Router();

router.get("/activos", getActivos);

router.get("/activos/y/:idUsuario", getActivosXUsuario);

//router.post("/activos/new", createNewActivo);
router.post("/activos/new", storage.array('3',7),createNewActivo);

router.get("/activos/count", getcountActivo);

router.get("/activos1/:EQC_codTag", getActivoByCodTag);

router.get("/activos/tipo", getTipoInventario);

router.get("/activos/tipoA", getTipoActivo);

router.put("/activos/x/:id", updateActivoById);

export default router;
