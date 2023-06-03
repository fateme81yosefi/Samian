import './Home.css';



function Home() {

  const fs = require('fs');

  // خواندن فایل JSON
  fs.readFile('path/to/file.json', 'utf8', (err, data) => {
    if (err) throw err;
    // پارس کردن داده های JSON
    const jsonData = JSON.parse(data);
    // چاپ داده ها در کنسول
    console.log(jsonData);
  });

  return (
    <div className="Home">
        <p>sfdnkfnsdasdf</p>
    </div>
  );
}

export default Home;
