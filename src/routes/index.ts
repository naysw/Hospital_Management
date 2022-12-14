import { Router } from "express";
import { HttpStatus } from "../nsw/types/http-status";
import appointmentRoutes from "./appointments.route";
import authRoutes from "./auth.route";
import doctorRoutes from "./doctors.route";
import hospitalRoutes from "./hospitals.route";
import patientRoutes from "./patients.route";
import specialistRoutes from "./specialists.route";

const router = Router();

router.get("/", (req, res) => {
  console.log(process.env.ACCESS_TOKEN_SECRET);

  res.status(HttpStatus.OK).json({
    message: "Hello World!",
  });
});

router.use("/specialists", specialistRoutes);
router.use("/doctors", doctorRoutes);
router.use("/hospitals", hospitalRoutes);
router.use("/patients", patientRoutes);
router.use("/appointments", appointmentRoutes);
router.use(authRoutes);

export default router;
