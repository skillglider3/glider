<script type="module">
  import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
  
const supabaseUrl = 'https://qataihohmogsjgtdnarz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhdGFpaG9obW9nc2pndGRuYXJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3ODk1NzAsImV4cCI6MjA4MzM2NTU3MH0.F6nqNwnBZA5AQDBNtQNcW9AHd16QUFib9jBshKNGIKk';

window.supabase = createClient(supabaseUrl, supabaseAnonKey);
</script>
