/*import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, IconButton, Box, Collapse, Typography, Divider, Paper } from '@mui/material';
import { Delete, Edit, ExpandLess, ExpandMore } from '@mui/icons-material';
import axios from 'axios';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [open, setOpen] = useState(true); // State to manage expansion
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/questions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/questions/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setQuestions(questions.filter((q) => q._id !== id));
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const handleToggle = () => setOpen(!open); // Toggle state for expansion

  return (
    <Paper style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Question List</Typography>
        <IconButton onClick={handleToggle}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </Box>
      <Collapse in={open}>
        <List>
          {questions.map((question) => (
            <ListItem
              key={question._id}
              secondaryAction={
                <Box>
                  <IconButton edge="end" aria-label="edit" onClick={() => alert('Edit functionality not implemented')}>
                    <Edit />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(question._id)}>
                    <Delete />
                  </IconButton>
                </Box>
              }
            >
              <ListItemText
                primary={question.question}
                secondary={question.options.join(', ')}
              />
              <Divider style={{ margin: '10px 0' }} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Paper>
  );
};

export default QuestionList;*/

import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, IconButton, Box, Collapse, Typography, Divider, Paper, Chip, Button } from '@mui/material';
import { Delete, Edit, ExpandLess, ExpandMore } from '@mui/icons-material';
import axios from 'axios';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [open, setOpen] = useState(true); // State to manage expansion
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/questions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/questions/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setQuestions(questions.filter((q) => q._id !== id));
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const handleToggle = () => setOpen(!open); // Toggle state for expansion

  return (
    <Paper style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="16px">
        <Typography variant="h6">Question List</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleToggle}
          endIcon={open ? <ExpandLess /> : <ExpandMore />}
        >
          {open ? 'View Less Questions' : 'View All Questions'}
        </Button>
      </Box>
      <Collapse in={open}>
        <List>
          {questions.map((question) => (
            <ListItem key={question._id} style={{ padding: '10px 0' }}>
              <Box style={{ flex: 1 }}>
                <Typography variant="subtitle1" gutterBottom>
                  {question.question}
                </Typography>
                <Box display="flex" flexDirection="column" gap="8px">
                  {question.options.map((option, index) => (
                    <Chip key={index} label={option} variant="outlined" />
                  ))}
                </Box>
              </Box>
              <Box>
                <IconButton edge="end" aria-label="edit" onClick={() => alert('Edit functionality not implemented')}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(question._id)}>
                  <Delete />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Paper>
  );
};

export default QuestionList;
