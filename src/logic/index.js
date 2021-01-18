const retriveTitle = async () => {
    const titleUrl = 'https://random-word-api.herokuapp.com/word?number=1';
    const response = await fetch(titleUrl);
    const data = await response.json();
    return data;
}

export default {
    getTitle: retriveTitle,
}