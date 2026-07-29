/* Demo app bundle — intentionally leaky. Nothing here is a live credential. */
const SUPABASE_URL = "https://demo-not-real.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbW8tbm90LXJlYWwiLCJyb2xlIjoic2VydmljZV9yb2xlIn0.not-a-real-signature-this-is-a-demo-0000";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbW8tbm90LXJlYWwiLCJyb2xlIjoiYW5vbiJ9.not-a-real-signature-this-is-a-demo-1111";
const ANTHROPIC_API_KEY = "sk-ant-api03-DEMOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxNOTREAL";

function boot() {
  document.getElementById('status').textContent = 'Demo app loaded.';
}
document.addEventListener('DOMContentLoaded', boot);
//# sourceMappingURL=app.js.map