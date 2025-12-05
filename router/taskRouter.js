const router = require('express').Router();
const {getAllTasks,getTaskById,createTask,updateTask,patchTask,deleteTask,getTasksByPriority}=require('../controllers/taskController');
// create routes
router.get('/tasks',getAllTasks);
router.get('/tasks/priority/:level',getTasksByPriority);
router.get('/tasks/:id',getTaskById);
router.post('/tasks',createTask);
router.put('/tasks/:id',updateTask);
router.patch('/tasks/:id', patchTask);
router.delete('/tasks/:id',deleteTask);
module.exports=router;