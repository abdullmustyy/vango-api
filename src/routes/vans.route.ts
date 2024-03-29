import { Router } from "express";
// Controllers
import { getAllVans, createVan } from "../controllers/vans.controller";

const vansRouter = Router();
// Get all vans route
vansRouter.get("/vans", getAllVans);
// Create a van route
vansRouter.post("/vans/create", createVan);

module.exports = vansRouter;
