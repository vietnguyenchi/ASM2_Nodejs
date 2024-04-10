import express from "express";
import { create, getAll, getStudentById, remove, update } from "../controllers/student";

const studentRouter = express.Router();

studentRouter.post('/', create);
studentRouter.get('/', getAll);
studentRouter.get('/:id', getStudentById);
studentRouter.patch('/:id', update);
studentRouter.delete('/:id', remove);

export default studentRouter;