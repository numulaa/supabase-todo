import React, { useEffect, useState } from 'react';
import { VStack, StackDivider, HStack, Text, Box } from '@chakra-ui/react';
import img from '../images/empty.svg';
import { supabase } from '../supabase';
import ClearTasks from './ClearTasks';
import DeleteTask from './DeleteTask';
import UpdateTask from './UpdateTask';

function TaskList({ userId, tasks, setTasks }) {
  //getting data from the server
  async function fetchData() {
    let { data: tasks, error } = await supabase.from('todos').select();
    setTasks(tasks);
  }
  useEffect(() => {
    fetchData();
  }, []);

  //if there's no task, it'll display an image
  if (!tasks.length) {
    return (
      <Box align="center">
        <img src={img} mt="2rem" maxW="95%" />
      </Box>
    );
  }
  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        borderRadius="lg"
        w="100%"
        maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
        alignItems="stretch"
      >
        {tasks.map(task => (
          <HStack key={task.id} p="5">
            <UpdateTask
              id={task.id}
              completed={task.completed}
              tasks={tasks}
              setTasks={setTasks}
              getData={fetchData}
            />
            <Text w="100%" p="8px" borderRadius="lg">
              {task.task_title}
            </Text>
            <DeleteTask id={task.id} />
          </HStack>
        ))}
      </VStack>
      <ClearTasks />
    </>
  );
}

export default TaskList;
