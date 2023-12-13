const express = require("express")
const router = express.Router()
const  taskController  = require("../controller/sheduledController")
router.post("/newTask", taskController.createTaskSheduled)
router.get("/getAllsheduledTask", taskController.getAllsheduledTask)
router.get("/specificTask",taskController.getSpecificTask)
router.put("/editScheduledTask", taskController.editScheduledTask)
module.exports = router