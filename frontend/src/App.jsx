/*import './App.css'
import Hero from './Components/Hero'

function App() {
  
  return (
    <div className='app'>
      <h1 className='header'>SMEs Assessment Tool</h1>
     <Hero/>
    </div>
  )
}

export default App*/
import './App.css';
import Hero from './Components/Hero';
import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions,CircularProgress, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');
function App() {
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [adminUsername,setAdminUsername] = useState('')
  const [adminPassword,setAdminPassword] = useState('')
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const openAdminModal = () => {
    setAdminModalOpen(true);
  };

  const closeAdminModal = () => {
    setAdminModalOpen(false);
    setError('')
  };

  const adminLogin = async (e)  => {
    e.preventDefault();
    try {
      const data ={
        "username":adminUsername,
        "password":adminPassword
      }
      const response = await axios.post('http://localhost:5000/api/admin/login',data);
      const {token} = response.data;
      localStorage.setItem('adminToken', token);
      navigate('/admindashboard');
    } catch (error){
      console.log(error)
      setError('Invalid Credentials')
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='app'>
      <div className="navbar">
        <h1 className='header'>SMEs Assessment Tool</h1>
        <button className="admin-button" onClick={openAdminModal}>
          Login
        </button>
      </div>

      <Hero />

      {/* Admin Login Modal */}
      <Modal isOpen={adminModalOpen}
      contentLabel="Get Started Modal"
      className="custom-modal"
      overlayClassName="modal-overlay"
       onRequestClose={closeAdminModal} >
        <DialogContent style={{color:"white"}}>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            onChange={(e) => setAdminUsername(e.target.value)} 
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            onChange={(e) => setAdminPassword(e.target.value)} 
          />
         {error && <Typography color="error" style={{ marginTop: 10 }}>{error}</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAdminModal} style={{color:'#003366'}}>
            Cancel
          </Button>
          <button
            className='admin-login'
            onClick={adminLogin}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </button>
        </DialogActions>
      </Modal>
    </div>
  );
}

export default App;
