import { Request, Response } from "express";

import { CreateDoctorStandardUseCase } from './CreateDoctorStandardUseCase'

export class CreateDoctorStandardController {
  async handle(req: Request, res: Response) {
    const createDoctorStandardUseCase = new CreateDoctorStandardUseCase()
    const result = await createDoctorStandardUseCase.execute()

    return res.json(result)
  }
}