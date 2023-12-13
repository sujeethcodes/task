const express = require("express")
const router = express.Router()

const taskSheduled = require("./routes/taskRoutes")

router.use("/taskSheduled", taskSheduled)
module.exports = router