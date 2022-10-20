
const getGoals = (req, res)=>{
  res.status(200).json({message:'get goals'})
}
const setGoal = (req, res)=>{
  if(!req.body.text){
    res.status(400)
    
  }
  res.status(200).json({message:'post goals'})
}
const updateGoal = (req, res)=>{
  res.status(200).json({message:`Update goal ${req.params.id}`})
}
const deleteGoal = (req, res)=>{
  res.status(200).json({message:`Delete goal ${req.params.id}`})
}

module.exports= {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}