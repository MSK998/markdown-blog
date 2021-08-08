import * as axios from 'axios';

function upload(formData) {
    const url = `${process.env.VUE_APP_API}/images/upload`;
    return axios.post(url, formData)
        // get data
        .then(x => x.data)
        // add url field
        .then(x => x.map(img => Object.assign({},
            img, { url: `${process.env.VUE_APP_API}/images/${img.filename}` })));
}

export { upload }