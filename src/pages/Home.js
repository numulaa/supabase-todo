import React from 'react';
import img from '../images/empty.svg';
import { Heading, VStack, Spacer } from '@chakra-ui/react';
import AuthModal from '../components/AuthModal';
import { supabase } from '../supabase';
function Home() {
  return (
    <VStack p={4} minH="100vh">
      <main>
        <section>
          <img src={img} alt="home image" />
        </section>
        <Spacer />
        <section>
          <Heading
            mt="5"
            mx="auto"
            py="5"
            position="center"
            fontWeight="extrabold"
            size="xl"
            bgGradient="linear(to-l, teal.300, blue.500)"
            bgClip="text"
          >
            Todo List App
          </Heading>
          <AuthModal supabaseAuthClient={supabase} />
        </section>
      </main>
    </VStack>
  );
}

export default Home;
