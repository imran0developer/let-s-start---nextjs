import { addUser, fetchAllUsers } from "@/db/user";

async function handleGet(request) {
    try {
        const users = await fetchAllUsers();
        return new Response(JSON.stringify(users), { status: 200 });
    } catch (error) {
        console.error('Error in GET handler:', error);
        return new Response(JSON.stringify({ error: 'Failed to handle GET request' }), { status: 500 });
    }
}

async function handlePost(request){
    try {
        const newUser = await request.json();
        const result = await addUser(newUser)
        return new Response(JSON.stringify(result), { status: 201 });
    } catch (error) {
        console.error('Error in POST handler:', error);
        return new Response(JSON.stringify({ error: 'Failed to handle POST request' }), { status: 500 });
    }
}

export const GET = handleGet;
export const POST = handlePost;