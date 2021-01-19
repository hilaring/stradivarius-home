const generateTitle = async () => {
    const titleUrl = 'https://random-word-api.herokuapp.com/word?number=1';
    const response = await fetch(titleUrl);
    const data = await response.json();
    return data;
}

const generateTitleSections = async () => {
    const titleUrl = 'https://random-word-api.herokuapp.com/word?number=5';
    const response = await fetch(titleUrl);
    const data = await response.json();
    return data;
}

const generateImgSlider = async () => {
    const imgUrl = 'https://static.e-stradivarius.net/5/static2/itxwebstandard/logo/logo.png?t=20210118023002269000767';
    const response = await fetch(imgUrl, {method: 'get', mode: 'cors'});
    const data = await response.json();
    return data;
}

export default {
    getTitle: generateTitle,
    getTitleSection: generateTitleSections,
    getBackgroundSlider: generateImgSlider
}