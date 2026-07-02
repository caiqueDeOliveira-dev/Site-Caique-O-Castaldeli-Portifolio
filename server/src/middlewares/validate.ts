import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export function validate(schema: ZodSchema, source: "body" | "query" | "params" = "body") {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = schema.parse(req[source]);
      req[source] = data;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.errors.map((e) => ({
          campo: e.path.join("."),
          mensagem: e.message,
        }));
        return res.status(400).json({
          success: false,
          error: "Dados invalidos",
          errors,
        });
      }
      next(error);
    }
  };
}
