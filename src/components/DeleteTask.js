import React, { useState } from 'react';
import { IconButton, useToast } from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import { supabase } from '../supabase';

function DeleteTask({ id }) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  async function handleDelete() {
    setLoading(true);
    const { todos, error } = await supabase.from('todos').delete().eq('id', id);
    setLoading(false);
    toast({
      title: error || 'Task has been deleted.',
      status: error ? 'error' : 'success',
      position: 'top',
      duration: 2000,
      isClosable: true,
    });
  }
  return (
    <IconButton
      isRound="true"
      icon={<FiTrash2 />}
      onClick={handleDelete}
      isLoading={loading}
    />
  );
}

export default DeleteTask;
