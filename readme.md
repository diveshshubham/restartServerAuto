# Restart a node server when CPU usage exceeds more than 70%

## Details

- In this section when we hit a path http://localhost:8090/restart then your CPU usage exceeds more than 70% and server will get restarted 

## How to Start

- install the pacakages and dependencies by running npm install --save
- after installation of npm pacakages run the command  pm2 start index.js  in the default project directory
- hit the path GET http://localhost:8090/restart and check the pm2 logs by typing pm2 logs 0
in your terminal


## Author

**Shubham Divesh**

- [Profile](https://github.com/diveshshubham "Shubham Divesh")
- [Email](mailto:divesh.shubham@gmail.com?subject=Hi "Hi!")


## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!