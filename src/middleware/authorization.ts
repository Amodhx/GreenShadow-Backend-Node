import { NextFunction, Request, Response } from "express";

class Authorization{
    checkRoles(roles: string[]): (req: Request, resp: Response, next: NextFunction) => void {
        return (req: Request, resp: Response, next: NextFunction): void => {
            const userRole = (req as any).user.role;
            if (roles.includes(userRole)) {
                return next();
            }
            resp.status(403).json({ message: "You are not authorized to access this resource" });
            return
        };
    }
}
const Authorization_check = new Authorization();
export default Authorization_check;
