const tasks= require('../models/task.json');
let lastIndex=tasks.tasks.length;
const getAllTasks=async(req,res)=>{
    const { completed } =req.query;
    const sortedTasks= tasks.tasks.sort((x,y)=>new Date(x.creationDate)-new Date(y.creationDate));
    if("completed" in req.query){
        const completedBool = completed === 'true';
        const filteredtasks=sortedTasks.filter((item)=> item.completed==completedBool);
        return res.status(200).send(
            filteredtasks
        )
    }
    res.status(200).send(
        sortedTasks
    )
}
const getTasksByPriority=async(req,res)=>{
    const { level } =req.params;
    const filteredtasks=tasks.tasks.filter((item)=>item.priority==level);
    res.status(200).send(
        filteredtasks
    )
}
const getTaskById=async(req,res)=>{
    const { id }=req.params;
    
    const fetchedTask=tasks.tasks.find((t)=>t.id==Number(id));
    if(!fetchedTask){
        return res.status(404).send({
            message: `Task not present with ${id}`
        })
    }
    res.status(200).send(fetchedTask)

}
const createTask=async(req,res)=>{
    const task=req.body;
    if(!task.description || !task.title|| !("completed" in req.body)){
        return res.status(400).send({
            message: "Invalid Input"
        })
    }
    lastIndex++;
    task.id=lastIndex;
    task.creationDate=new Date().toISOString();
    if(!task.completed){
        task.completed=false;
    }
    if(!task.priority){
        task.priority="low";
    }
    tasks.tasks.push(task);
    res.status(201).send({
        message: "Task Created SuccessFully",
        data: tasks.tasks[lastIndex-1]
    })
}

const updateTask= async(req,res)=>{
    const {id} =req.params;
    const body = req.body;
    
    if(!id || !('completed' in req.body) || !body.description || !body.title || typeof body.completed !=="boolean"){
        return res.status(400).send({
            message:"Invalid Input"
        })
    }
    if(tasks.tasks.findIndex(t=>t.id==id)==-1){
        return res.status(404).send({
            message: "ID does not exist"
        })
    }

    const updatedTask={
        id: id,
        title: body.title,
        description: body.description,
        completed: body.completed,
        priority: body.priority?body.priority:"low"
    }
    tasks.tasks[id-1] = updatedTask;
     res.status(200).send({
        message:"Task Updated Successfully",
        data: tasks.tasks[id-1]
    })
    

}

const patchTask=async(req,res)=>{
    const { id } =req.params;
    const body = req.body;
    if(!id){
        return res.status(400).send({
            message: "Invalid Input"
        })
    }
    if(!body){
        return res.status(404).json({
            message:"Nothing to update"
        })
    }
    if(tasks.tasks.findIndex(t=>t.id==id)==-1){
        return res.status(404).send({
            message: "ID does not exist"
        })
    }
    let patchObject=tasks.tasks[id-1];
    if(body.description){
        patchObject.description=body.description;
    }
    if(body.title){
        patchObject.title = body.title;
    }
    if('completed' in req.body){
        patchObject.completed=body.completed;
    }
    if(body.priority){
        patchObject.priority=body.priority;
    }
    return res.status(200).send({
        message: "Item patched successfully",
        data: patchObject
    })
}
const deleteTask=async(req,res)=>{
    const {id} =req.params;
    if(!id){
        return res.status(400).send({
            message: "Invalid Input"
        })
    }
    if(tasks.tasks.findIndex(t=>t.id==id)==-1){
        return res.status(404).send({
            message: "ID does not exist"
        })
    }
    // delete from array
    tasks.tasks.splice(id-1,1);
    // to find all elements after it and then update there id = id-1;
    for(let i=id-1;i<tasks.tasks.length;i++){
        tasks.tasks[i].id=i+1;
    }

    return res.status(200).send({
        message:"Successfully Deleted the Item",
        data: tasks
    })
    

}

module.exports={getAllTasks,getTaskById,createTask,updateTask,patchTask,deleteTask,getTasksByPriority};