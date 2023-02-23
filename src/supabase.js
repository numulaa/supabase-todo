import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
//this should be the alternatice of eocket
// const todos = supabase
//   .channel('custom-all-channel')
//   .on(
//     'postgres_changes',
//     { event: '*', schema: 'public', table: 'todos' },
//     payload => {
//       console.log('Change received!', payload);
//     }
//   )
//   .subscribe();
