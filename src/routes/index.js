import authRouter from "./auth";
import insertRouter from "./insert"
import cveRouter from "../routes/cve.route";
import cvssRouter from "../routes/cvss.route";
import cweRouter from "../routes/cwe.route";
import cpeRouter from "./cpe.route";
import capecRouter from "./capec.route";
import postRouter from "./post.route";
import userRouter from "./user.route";
import commentRouter from "./comment.route";
import likeRouter from "./like.route";
const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/insert", insertRouter);
  app.use("/api/v1/cve",cveRouter)
  app.use("/api/v1/cvss",cvssRouter)
  app.use("/api/v1/cwe",cweRouter)
  app.use("/api/v1/cpe",cpeRouter)
  app.use("/api/v1/capec",capecRouter)
  app.use("/api/v1/posts",postRouter)
  app.use("/api/v1/users",userRouter)
  app.use("/api/v1/comments",commentRouter)
  app.use("/api/v1/likes",likeRouter)
  return app.use("/", (req, res) => {
    res.send("server on....");
  });
};

export default initRoutes;
