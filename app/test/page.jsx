// app/test/page.jsx
import clientPromise from '@/lib/mongodb';
import fetchUsers from '../api/user'

export default async function Page() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}