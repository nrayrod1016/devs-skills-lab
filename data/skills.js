export { 
	find,
  findById,
  create,
  findByIdAndDelete
}

const skills = [
  {text: 'HTML5', done: true, _id: 125223},
  {text: 'CSS', done: true, _id: 127904},
  {text: 'JAVASCRIPT', done: false, _id: 139608},
]

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the todo object
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = skill.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

function create(skill, callback) {
  // Add the id (random)
  skill._id = Date.now() % 1000000
  // Set new todos as false
  todo.done = false
  console.log(skill)
  skills.push(skill)
  return callback(null, skill)
}


const findById = (id, callback) =>{
  try {
    const todo = todos.find(todo => todo._id === parseInt(id))
    if (!todo) throw new Error ('No todo was found')
    return callback(null, todo)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, todos)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}