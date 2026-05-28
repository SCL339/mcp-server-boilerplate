1|     1|     1|# scl339-mcp-server
     2|     2|     2|
     3|     3|     3|---
     4|     4|     4|
     5|     5|     5|
     6|     6|     6|[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
     7|     7|     7|
     8|     8|     8|---
     9|     9|     9|
    10|    10|    10|
    11|    11|    11|npx scl339-mcp-server create my-mcp-server
    12|    12|    12|
    13|    13|    13|# Navigate to the project
    14|    14|    14|cd my-mcp-server
    15|    15|    15|
    16|    16|    16|# Install dependencies
    17|    17|    17|npm install
    18|    18|    18|
    19|    19|    19|# Start the server
    20|    20|    20|npm start
    21|    21|    21|```
    22|    22|    22|
    23|    23|    23|---
    24|    24|    24|
    25|    25|    25|
    26|    26|    26|cd my-mcp-server
    27|    27|    27|npm install
    28|    28|    28|# Copy and configure .env
    29|    29|    29|cp .env.example .env
    30|    30|    30|npm start
    31|    31|    31|```
    32|    32|    32|
    33|    33|    33|---
    34|    34|    34|
    35|    35|    35|
    36|    36|    36|Usage: scl339-mcp-server create [options] <name>
    37|    37|    37|
    38|    38|    38|---
    39|    39|    39|
    40|    40|    40|
    41|    41|    41|  name                   Name of your MCP server project
    42|    42|    42|
    43|    43|    43|Options:
    44|    44|    44|  -d, --directory <path> Target directory (default: ./<name>)
    45|    45|    45|  --http                 Include HTTP transport support
    46|    46|    46|  --all                  Include both stdio and HTTP transports
    47|    47|    47|  -h, --help             Display help for command
    48|    48|    48|```
    49|    49|    49|
    50|    50|    50|---
    51|    51|    51|
    52|    52|    52|
    53|    53|    53|my-mcp-server/
    54|    54|    54|├── index.js          # MCP server with tools & resources
    55|    55|    55|├── package.json      # Dependencies and scripts
    56|    56|    56|├── README.md         # Project documentation
    57|    57|    57|├── .env.example      # Environment configuration
    58|    58|    58|└── .gitignore        # Git ignore rules
    59|    59|    59|```
    60|    60|    60|
    61|    61|    61|---
    62|    62|    62|
    63|    63|    63|

---

## 🤝 赞助支持 (Sponsor)

如果这个项目对你有帮助，可以请我喝杯咖啡 ☕

- 💖 **支付宝 (Alipay)**: `18559219554` | 邮箱联系: `530765059@qq.com`
- ☁️ **DigitalOcean 联盟链接**: [免费 $200 额度](https://www.digitalocean.com/?refcode=scl339-01&utm_campaign=Referral_Invite&utm_medium=opensource&utm_source=SCL339)
- ⭐ **在 GitHub 上点 Star** 帮助更多人发现这个项目

## 📄 License
