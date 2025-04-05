import env from '@/app/env';

import { Client, Account, Avatars, Databases, Storage } from 'appwrite';



export const avatars = [
  '/avatars/avatar-1.png',
  '/avatars/avatar-2.png',
  '/avatars/avatar-3.png',
  // Add actual avatar paths used in your project
];




const client = new Client()
  .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
  .setProject(env.appwrite.projectId); // Your project ID

const databases = new Databases(client);
const account = new Account(client);
const avtars = new Avatars(client);
const storage = new Storage(client);

export { client, databases, account, avtars, storage };
