const express = require("express");
const axios = require("axios");
const app = express();
const port = 8008;

app.use(express.json());

app.get("/numbers", async (req, res) => {
  const urls = req.query.url;

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: "Invalid" });
  }

  const mergedNumbers = [];

  const promises = urls.map(async (url) => {
    try {
      const response = await axios.get(url, { timeout: 500 });
      if (response.status === 200 && response.data && response.data.numbers) {
        mergedNumbers.push(...response.data.numbers);
      }
    } catch (error) {
      console.error(`Error fetching data from ${url}: ${error.message}`);
    }
  });

  await Promise.all(promises);

  const uniqueSortedNumbers = Array.from(new Set(mergedNumbers)).sort(
    (a, b) => a - b
  );

  res.json({ numbers: uniqueSortedNumbers });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
