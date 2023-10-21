import { Router } from "express";
import StockController from "../contollers/stock-controller";

export const stockRouter = Router()
stockRouter.get('/',StockController.getInfo)
stockRouter.get('/stocks',StockController.getAll)
stockRouter.get('/stocks/:name',StockController.getbyName)

stockRouter.post('/stocks',StockController.createStock)

stockRouter.patch('/stocks/:name',StockController.deleteByName)

stockRouter.delete('/stocks/:name',StockController.deleteByName)