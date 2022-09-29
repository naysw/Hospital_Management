import prisma from "../../src/lib/prisma";
import { userSeeder } from "./userSeeder";

(async () => {
  await userSeeder();
})()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Seeding complete");
    await prisma.$disconnect();
  });