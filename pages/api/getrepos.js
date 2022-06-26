// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getrepos(req, res) {
    let url = `https://api.github.com/users/${process.env.GITHUB_USER}/repos?per_page=5`;
    await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            'Authorization': `token ${process.env.GITHUB_ACCESS_TOKEN}` 
        },
    })
        .then((response) => response.json())
        .then((js) => {
            res.status(200).send(js);
        })
        .catch(e => {
            console.log(e.message);
            res.status(400).send(e);
        });
}
