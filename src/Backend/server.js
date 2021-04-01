const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cheerio = require('cheerio');
const natural = require('natural');

const app = express();
const port = process.env.PORT || 5000;
let tags;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var d = new Date();
var year = d.getFullYear().toString();
var month = d.getMonth();
var savedTags;
month = month + 1;
if (month <= 10) {
    month = '0' + month;
}
let siteurl = 'https://www.dealstreetasia.com/sitemap-posttype-stories.' + year + month + '.xml'
// let siteurl = 'https://www.dealstreetasia.com/sitemap-posttype-stories.202103.xml'

//hardcode url
let url = 'https://www.dealstreetasia.com/stories/tvm-capital-healthcare-2-232270/'
let url1 = 'https://www.dealstreetasia.com/stories/boe-mark-carney-stripe-228604/'
let url2 = 'https://www.dealstreetasia.com/stories/mars-growth-hiver-strip-safepay-227585/'
let url3 = 'https://www.dealstreetasia.com/stories/vietnam-edtech-edmicro-2m-232597/'
const urlArr = [url1, url2, url3];
var tempResults;
//get tags from DSA news web
const getPostTags = async () => {
    try {
        const { data } = await axios.get(
            url
        );
        const $ = cheerio.load(data);
        const postTitles = [];

        $('.tag').each((_idx, el) => {
            const postTitle = $(el).text()
            postTitles.push(postTitle)
        });

        return postTitles;
    } catch (error) {
        throw error;
    }
};
async function fetchHTML(u) {
    const { data } = await axios.get(u)
    return cheerio.load(data)
}

const getAllURLLink = async () => {

    try {
        const $ = await fetchHTML(siteurl)
        // console.log(`Site HTML: ${$.html()}\n\n`)
        // const { data } = await axios.get(siteurl);
        // const $ = cheerio.load(data);
        let urlLinks = ["empty"];
        // let temp = $('.high').children().find('td')
        // console.log((temp[0]));
        return urlLinks;
        // const urlLinks = [];
        // $('a').each((_idx, element) => {
        //     console.log(element)
        //     const urlLink = $(element).text()
        //     urlLinks.push(urlLink)
        // });
        // console.log(urlLinks)
        // return urlLinks;
    }
    catch (error) {
        throw error;
    }
}

const getMatch = async () => {
    
    try {
        urlArr.forEach(link => {
            getNewsTitle(link).then(
                (title) => {
                    matchAlgo(title).then(
                        (scores) => {
                            tempResults = scores;
                        }
                    )
                }
            )
        })
    }
    catch (e) {
        throw e;
    }

}

const matchAlgo = async (document) => {
    var scores = [];
    const TfIdf = natural.TfIdf
    const tfidf = new TfIdf()
    tfidf.addDocument(document);
    savedTags.forEach(tag => {
        tfidf.tfidfs(tag, function (i, measure) {
            console.log('document #' + i + ' is ' + measure)
            scores.push(measure);
        })
    });


    // console.log('your tag here --------------------------------')
    // tfidf.tfidfs('<tag>', function (i, measure) {
    //     console.log('document #' + i + ' is ' + measure)
    // })
    // console.log(scores)
    return scores
}

//get The entire chunk of text from DSA, but limited text so not using
const getNewsText = async () => {
    try {
        const { data } = await axios.get(
            url
        );
        const $ = cheerio.load(data);
        const text = $('#article').text();
    }
    catch (error) {
        throw error
    }
}

//get The entire chunk of text from DSA
const getNewsTitle = async (link) => {
    try {
        const { data } = await axios.get(
            link
        );
        const $ = cheerio.load(data);
        const title = $("h1:first").text()
        // console.log(title)
        return title;
    }
    catch (error) {
        throw error
    }
}

//scrapTags
app.post('/api/scrap', (req, res) => {
    url = req.body.url
    getPostTags()
        .then((postTags) => { tags = postTags });
    res.send({ express: tags });
});


app.post('/api/getReco', async (req, res) => {
    savedTags = req.body.tags
    console.log(savedTags);
    await getMatch().then(
        (result) => console.log(result)
    )
   
});

app.listen(port, () => console.log(`Listening on port ${port}`));