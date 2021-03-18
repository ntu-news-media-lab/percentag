const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = process.env.PORT || 5000;
let tags;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const getPostTitles = async () => {
	try {
		const { data } = await axios.get(
			'https://www.dealstreetasia.com/stories/airasia-tpg-execs-aimia-232207/'
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

getPostTitles()
.then((postTitles) => {console.log(postTitles), tags = postTitles});

app.get('/api/scrap', (req, res) => {
  res.send({ express:  tags});
});


app.post('/api/forms', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));