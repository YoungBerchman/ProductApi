import express from "express";
import cors from "cors";
import router from "./route/fanRoute";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`server is connected to https://loclahost:${PORT}`);
});
