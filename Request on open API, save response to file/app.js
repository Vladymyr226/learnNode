const axios = require('axios')
const fs = require('fs')


axios({
    method: 'get',
    url: 'https://api.thecatapi.com/v1/images/search'
})
    .then(response => {
        console.log(response.data[0].url)

        let data = JSON.stringify(response.data, null, 2)
        fs.writeFileSync('file.txt', data)
    })
    .catch(function (error) {
        console.log(error)
    })  