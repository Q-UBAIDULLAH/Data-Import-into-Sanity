import { createClient } from '@sanity/client';
// import dotenv from 'dotenv';
// dotenv.config();
const client = createClient({
  projectId:"ly1auv56",
  dataset:"production",
  useCdn: false, // Disable CDN for real-time updates
  token:"sk6aAXYKA3MHjVOj1RCRDEoWSn5MwfX5r6APStlKLGAyGHcdgcDmxIjFNIvHTIyf5d41V8C1xnrYKMxijLXpK6M4rAneP9siaOKQbQrQp9z7CapoL2AAyGwx5Qh7bFFJ0fXsAThamcGdxHQUaGFZ78YuKQ9cUavHAIX1NTYOU16TybF2YMVv", // Required for write operations
  apiVersion: '2021-08-31',
});

export default client;
