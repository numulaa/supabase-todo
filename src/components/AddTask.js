import React, { useState, useEffect } from 'react';
import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { supabase } from '../supabase';

function AddTask({ userId, tasks, setTasks }) {
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase
      .from('todos')
      .insert([{ task_title: newTask, user_id: userId }]);
    // setTasks({ ...tasks, ...data });
    setLoading(false);
    setNewTask('');
    toast({
      title: error || 'Task has been added.',
      status: error ? 'error' : 'success',
      position: 'top',
      duration: 2000,
      isClosable: true,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <HStack my="4" h="45">
        <Input
          h="100%"
          variant="filled"
          placeholder="Add your task"
          isLoading={loading}
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <Button
          px="10"
          colorScheme="blue"
          h="100%"
          type="submit"
          isLoading={loading}
        >
          Add
        </Button>
      </HStack>
    </form>
  );
}

export default AddTask;
