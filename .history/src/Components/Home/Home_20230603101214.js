import './Home.css';



function Home() {

  const fs =JSON.parse("../../Date/json") ;

  fs.readFile('../../Date/json', 'utf8', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  });

  return (
    <div className="Home">
    </div>
  );
}

export default Home;
