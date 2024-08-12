import { Response, Request } from "express";

export const registerHandler = (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.status(200).json({
    message: "user register",
  });
};

export const loginHandler = (req: Request, res: Response) => {
    const data = req.body
    console.log(data)
    res.status(200).json({
        "message": "user login"
    })
}

export const logoutHandler = (req: Request, res: Response) => {
    const data = req.body
    console.log(data)
    res.status(200).json({
        "message": "user logout"
    })
}