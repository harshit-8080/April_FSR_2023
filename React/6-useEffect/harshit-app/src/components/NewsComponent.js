import React, { useEffect, useState } from "react";

function NewsComponent() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async function f1() {
      const response = await fetch(
        "https://gnews.io/api/v4/search?q=india&lang=en&country=us&max=10&apikey=916088ba02890add290f53c6f0e2f386"
      );
      const data = await response.json();

      setNews(data["articles"]);
    })();
  }, []);

  if (news.length == 0) {
    return (
      <img
        style={{ width: "500px" }}
        src="data:image/jpeg;base64,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"
        alt=""
      />
    );
  }

  return (
    <div>
      <img style={{ width: "500px" }} src={news[0]["image"]} alt="" />
      <h1>{news[0]["title"]}</h1>
      <p>{news[0]["description"]}</p>
      <p>{news[0]["content"]}</p>
      <h2>{news[0]["publishedAt"]}</h2>
    </div>
  );
}

export default NewsComponent;
