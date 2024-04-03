export default async function register(data){
    const res = await fetch('http://localhost:8080/public/php/register.php', {
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