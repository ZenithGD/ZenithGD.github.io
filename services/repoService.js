const getRepos = async () => {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + "/getrepos")
        .then(response => response.json())
}

const getRepoInfo = (url, formatter) => {
    return async () => await fetch(url)
        .then(response => response.json())
        .then(r => formatter(r));
}


const repoService = {
    getRepos,
    getRepoInfo
}

export default repoService;