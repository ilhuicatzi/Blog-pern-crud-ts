import { Router } from "express";
import { registerHandler, loginHandler, logoutHandler } from "controllers/auth.controllers";

const router = Router();

router.post('/register', registerHandler)

router.post('/login', loginHandler)

router.post('/logout', logoutHandler)

export default router;
