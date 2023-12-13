const handler = require("express-async-handler")
const ScheduledTasks = require("../model/taskSheduledModel")
const { Op } = require('sequelize');

const controller = {}

controller.createTaskSheduled = handler(async(req, res)=>{
    if(!req?.body?.taskName) throw "400||TASK_NAME_REQUIRED"
    if(!req?.body?.status) throw "400||STATUS_REQUIRED"
    const createTaskSheduled = await ScheduledTasks.create({
        taskName:req?.body?.taskName,
        status:req?.body?.status,
        execution_time:new Date(),
    })
    if(createTaskSheduled){
       return  res?.json(createTaskSheduled)
    }
 
})

controller.getAllsheduledTask = handler(async(req, res)=>{
    const getAllsheduledTask = await  ScheduledTasks.findAll({
        order:[["id", "DESC"]], 
        limit: 10 ?? req?.body?.limit,
    })
    if(getAllsheduledTask){
       return res.json({status:200,getAllsheduledTask:getAllsheduledTask})
    }else{
        res.json({status:400, message:"SOMETHING_WENT_WRONG"})
    }
})

controller.filterSheduledTask = handler(async(req, res)=>{
    const filterSheduledTask = await ScheduledTasks.findAll({
        where:{
            status:{
                [Op.like]: `%${req?.body?.filter}%`
            }
        }
    })
    if(filterSheduledTask){
        res.json({status:200, message:filterSheduledTask})
    }else{
        res.json({status:400, message:"SOMETHING_WENT_WRONG"})
    }
})

controller.getSpecificTask = handler (async(req, res)=>{
    if(!req?.query?.id) throw "400||ID_REQUIRED"

    const getSpecificTask = await ScheduledTasks.findOne({
        where:{
            id:req?.query?.id
        }
    })
    if(getSpecificTask){
        return res.json({status:200,getSpecificTask})
    }else{
        return res.json("400||SOME_THING_WENT_WRONG")
    }
})

controller.editScheduledTask = handler(async(req, res)=>{
    if(!req?.query?.id) throw "400||ID_REQUIRED"
    const getSpecificTask = await ScheduledTasks.findOne({
        where:{
            id:req?.query?.id
        }
    })
    if(req?.body?.status){
        getSpecificTask.status = req?.body?.status
    }
       await getSpecificTask.save()
       res.json({status:200, message:"UPDATE_SUCCESSFULLY"})
   
    
})

module.exports = controller;