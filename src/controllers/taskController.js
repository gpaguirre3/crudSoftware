let tasks = [
    { id: 1, description: 'Hacer la compra' },
    { id: 2, description: 'Estudiar para el examen' },
    { id: 3, description: 'Llamar a Juan' }
  ];
  let nextTaskId = 4;
  
  const getAllTasks = (req, res) => {
    res.json(tasks);
  };
  
  const getTaskById = (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);
  
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
  
    res.json(task);
  };
  
  const createTask = (req, res) => {
    const { description } = req.body;
    const newTask = { id: nextTaskId, description };
    tasks.push(newTask);
    nextTaskId++;
    res.status(201).json(newTask);
  };
  
  const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const { description } = req.body;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
  
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
  
    tasks[taskIndex].description = description;
    res.json(tasks[taskIndex]);
  };
  
  const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
  
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
  
    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);
  };
  
  module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
  };
  