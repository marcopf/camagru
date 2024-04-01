export default async function login(data){
    console.log(data)
    const res = await fetch('http://localhost:8080/public/php/login.php', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (res.ok)
        return true;
    return false;
}