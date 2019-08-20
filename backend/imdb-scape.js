const request = require("request");
const cheerio = require("cheerio");

const URL = "https://www.imdb.com/list/ls055592025/";

request(URL, (err, response, html) => {
  if (err) return console.error(err);

  const $ = cheerio.load(html);
  const data = [];

  $(".lister-list")
    .children()
    .each((index, child) => {
      const cheerioChild = $(child);

      // const title = cheerioChild
      //   .find(".lister-item-content .lister-item-header a")
      //   .text();

      // const image = cheerioChild
      //   .find(".lister-item-image a img")
      //   .attr("loadlate");

      // const year = cheerioChild
      //   .find(".lister-item-content .lister-item-header :nth-child(3)")
      //   .text()
      //   .slice(1, -1);

      const description = cheerioChild
        .find('.lister-item-content p[class=""]')
        .text();

      // .children(index, child => {
      //   ch
      // });

      console.log(description);

      // data.push({
      //   title,
      //   year,
      //   description,
      //   director,
      //   imdb_rating,
      //   run_time,
      //   thumbnail
      // });
    });
});
