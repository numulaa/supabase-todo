import React, { useEffect, useState } from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

function Dashboard() {
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  //get user data
  useEffect(() => {
    async function getUserData() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
      setUser(user);
    }
    getUserData();
  }, []);

  //fetching data
  useEffect(() => {
    async function fetchData() {
      let { data: tasks, error } = await supabase.from('todos').select();
      setTasks(tasks);
    }
    fetchData();
  }, []);

  //realtime subscription
  //not working
  //connection to socket failed
  useEffect(() => {
    //this should be the alternative of eocket
    if (tasks) {
      const todos = supabase
        .channel('custom-all-channel')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'todos' },
          payload => {
            setTasks({ ...tasks, ...payload.new });
            console.log('Change received!', payload);
          }
        )
        .subscribe();
    }
    return () => {
      supabase.removeAllChannels();
    };
  }, [tasks]);
  return (
    <VStack p={4} minH="100vh">
      <Heading
        mt="5"
        p="5"
        fontWeight="extrabold"
        size="xl"
        bgGradient="linear(to-l, teal.300, blue.500)"
        bgClip="text"
      >
        Todo List
      </Heading>
      <AddTask userId={user.id} tasks={tasks} setTasks={setTasks} />
      <TaskList userId={user.id} tasks={tasks} setTasks={setTasks} />
    </VStack>
  );
}

export default Dashboard;
