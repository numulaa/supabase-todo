import React from 'react';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/dashboard'} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React from 'react';
// import { Heading, VStack } from '@chakra-ui/react';
// import AddTask from './components/AddTask';
// import TaskList from './components/TaskList';

// function App() {
//   return (
//     <VStack p={4} minH="100vh">
//       <Heading
//         mt="5"
//         p="5"
//         fontWeight="extrabold"
//         size="xl"
//         bgGradient="linear(to-l, teal.300, blue.500)"
//         bgClip="text"
//       >
//         Todo List
//       </Heading>
//       <AddTask />
//       <TaskList />
//     </VStack>
//   );
// }

// export default App;
