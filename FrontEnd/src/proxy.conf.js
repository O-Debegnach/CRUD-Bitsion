const PROXY_CONFIG = [
  {
    context: [
      "/api/customers"
    ],
    target: "https://localhost:7206",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
