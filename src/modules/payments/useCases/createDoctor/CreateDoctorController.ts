import { Request, Response } from "express";

import { CreateDoctorUserCase } from './CreateDoctorUseCase'

export class CreateDoctorController {
  async handle(req: Request, res: Response) {
    const createDoctorUserCase = new CreateDoctorUserCase()
    const result = await createDoctorUserCase.execute()

    return res.json(result)
  }
}