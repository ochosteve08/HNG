const express = require("express");

const app = express();
app.use(express.json());
port = 3500;

app.get("", (req, res) => {
  res.json({ message: "api is working" });
});

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  if (!slack_name || !track) {
    return res.status(400).json({
      error: "Missing required query parameters",
    });
  }

  const response = {
    slack_name: slack_name,
    current_day: new Date().toLocaleString("en-US", { weekday: "long" }),
    utc_time: new Date().toISOString(),
    track: track,
    github_file_url: `https://github.com/${slack_name}/hngx-be/blob/main/s-1/app.js`,
    github_repo_url: `https://github.com/${slack_name}/hngx-be`,
    status_code: 200,
  };

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(response);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


