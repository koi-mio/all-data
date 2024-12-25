import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="p-4 text-black bg-green-400 rounded-xl">
        kio-tailwind_css
      </h1>
      <hr />
      <Cards
        img={"https://wallpapercave.com/wp/wp6226389.jpg"}
        username={"kaosioe"}
        pr={"nio kio lio mio vio joint adventure "}
        role={"software enginer"}
      />
      <Cards
        img={
          "https://66.media.tumblr.com/7755f90217b4aa427dd4f32fb50fd356/tumblr_nylgqdzkgJ1qb1vnmo1_500.jpg"
        }
        username={"kio-mio"}
        pr={"kio developer is web3 developer"}
        role={"blockchain developer"}
      />

      <Cards
        img={"https://wallpapercave.com/wp/wp6226389.jpg"}
        username={"nio-mio"}a
        pr={"nio developer is web3 developer"}
        role={" java and blockchain developer"}
      />
      <Cards
        img={"https://wallpapercave.com/wp/wp6226389.jpg"}
        username={"vio-mio"}
        pr={"vio developer is web3 developer"}
        role={" full-stack-developer and blockchain developer"}
      />
    </div>
  );
}

export default App;
