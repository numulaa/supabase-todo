import React, { useState } from 'react';
import { IconButton, useToast } from '@chakra-ui/react';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import { supabase } from '../supabase';

function UpdateTask({ id, completed, tasks, setTasks }) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  //update data
  async function handleUpdate() {
    setLoading(true);
    const { todos, error } = await supabase
      .from('todos')
      .update({ completed: !completed })
      .eq('id', id);
    // setTasks({ ...tasks, ...completed });
    setLoading(false);
    toast({
      title: error || 'Task has been updated.',
      status: error ? 'error' : 'success',
      position: 'top',
      duration: 2000,
      isClosable: true,
    });
  }
  return (
    <IconButton
      bgColor={completed ? '#82CD47' : ''}
      icon={
        completed ? (
          <FiCheckSquare color="green" size="1.5rem" />
        ) : (
          <FiSquare size="1.5rem" />
        )
      }
      onClick={handleUpdate}
      isLoading={loading}
    />
  );
}

export default UpdateTask;
