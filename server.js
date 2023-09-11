const express = require("express");
const app = express();
app.use(express.json());
port = 3500;

app.get("", (req, res) => {
  res.json({ message: "endpoint is working" });
});

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  if (!slack_name || !track) {
    return res.status(400).json({
      error: "Missing required query parameters",
    });
  }
  const current_day = new Date().toLocaleString("en-US", { weekday: "long" });
  //   const utc_time = new Date().toISOString();
  const utc_time = new Date().toISOString().slice(0, -5) + "Z";
  const response = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url: "https://github.com/ochosteve08/HNG/blob/main/server.js",
    github_repo_url: "https://github.com/ochosteve08/HNG",
    status_code: 200,
  };

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
