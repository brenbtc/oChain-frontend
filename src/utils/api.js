import axios from "axios";

const config = {
  headers: {
      'Authorization': localStorage.getItem('token')
  }
}

// Sign Up \\
export async function signUp(formData) {
  const { data } = await axios.post(
    "https://brenochain.herokuapp.com/user/signup",
    formData,
  )
  return data;
}

// Login \\
export async function accountLogin(formData) {
  const { data } = await axios.post(
    "https://brenochain.herokuapp.com/user/login",
    formData,
    config
  )
  return data
}

// Create Note \\
export async function createNote(formData) {
  const { data } = await axios.post(
    "https://brenochain.herokuapp.com/note/",formData, config)
    return data
}

// Token Show \\
export async function getToken() {
  const { data } = await axios.get('https://brenochain.herokuapp.com/user/token', config)
  return data
}



// Show Note \\
export async function showNote(){
  const { data } = await axios.get("https://brenochain.herokuapp.com/note")
  return data
}



// Update/Edit Note \\
export async function updateNote(note) {
  const { data } = await axios.put(`https://brenochain.herokuapp.com/note/${note._id}`, note, config)
  return data
}

// Delete Note \\
export async function deleteNote(_id) 
{
  await axios.delete(`https://brenochain.herokuapp.com/note/${_id}`, config)
}