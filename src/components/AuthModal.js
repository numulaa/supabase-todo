import React, { useState } from 'react';
import { Auth, ThemeMinimal, ThemeSupa } from '@supabase/auth-ui-react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';

function AuthModal() {
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange(event => {
    if (event !== 'SIGNED_OUT') {
      //forward to dashboard => success
      navigate('/dashboard');
    } else {
      //forward to home
      navigate('/');
    }
  });

  return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
}

export default AuthModal;
