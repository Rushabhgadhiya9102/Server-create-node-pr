const http = require("http");
const fs = require('fs')
const PORT = 8083;

const requestHandler = (req, res) => {
  let filename = "";

  switch (req.url) {

    case "/":
      filename = "index.html";
      break;

    case "/trips":
      filename = "trips.html";
      break;

    case "/stories":
      filename = "stories.html";
      break;

    case "/ourteam":
      filename = "ourteam.html";
      break;

    default:
      filename = "404.html";
  }

  fs.readFile(filename,(err,result)=>{
    if(!err){
        res.end(result)
    }
  })
};

const server = http.createServer(requestHandler);

server.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
