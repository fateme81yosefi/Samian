import './Home.css';



function Home() {

  const fs = require('fs');

  // خواندن فایل JSON
  fs.readFile('../../Date/json', 'utf8', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  });

  return (
    <div className="Home">
        <p>sfdnkfnsdasdf</p>
    </div>
  );
}

export default Home;
