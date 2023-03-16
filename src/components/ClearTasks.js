import React, { useState } from 'react';
import { Flex, Button, useToast } from '@chakra-ui/react';
import { supabase } from '../supabase';
function ClearTasks() {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  //remove all of the tasks
  async function handleClear() {
    setLoading(true);
    const { data, error } = await supabase
      .from('todos')
      .delete()
      .not('task_title', 'eq', 'do not delete me');
    setLoading(false);
    toast({
      title: error || 'All tasks has been deleted.',
      status: error ? 'error' : 'success',
      position: 'top',
      duration: 2000,
      isClosable: true,
    });
  }
  return (
    <Flex>
      <Button
        colorScheme="gray"
        px="8"
        h="45"
        color="gray.500"
        mt="10"
        loadingText="Clearing tasks"
        onClick={handleClear}
      >
        Clear Tasks
      </Button>
    </Flex>
  );
}

export default ClearTasks;
