import axios from "axios";

export default async function getData(user_Id) {
    const { data: user } = await axios('https://jsonplaceholder.typicode.com/users/' + user_Id);
    const { data: post } = await axios('https://jsonplaceholder.typicode.com/posts?id=' + user_Id);

    console.log(user);
    console.log(post);
}

