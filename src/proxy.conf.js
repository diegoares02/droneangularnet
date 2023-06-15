const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/drone",
      "/location",
    ],
    target: "https://localhost:7049",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
