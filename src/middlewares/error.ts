import { NextFunction, Request, response, Response } from "express";

const errorMiddleware = ((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message
    })
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

export {errorMiddleware}