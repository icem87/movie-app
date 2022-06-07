import { Carousel } from "antd";
import Header from "../Header";

const contentStyle = {
  height: "600px",
  background: "#364d79",
  lineHeight: "2px",
};

const Carousels = () => (
  <Carousel effect="fade" dotPosition="bottom" autoplay>
    <div>
      <div style={contentStyle}>
        <Header
          bgImage="bg-john-wick"
          movieDesc="John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere."
          movieTitle="John Wick 3 : Parabellum"
        />
      </div>
    </div>

    <div>
      <div style={contentStyle}>
        <Header
          bgImage="bg-endgame"
          movieDesc="After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
          movieTitle="Avengers : Endgame
"
        />
      </div>
    </div>

    <div>
      <div style={contentStyle}>
        <Header bgImage="bg-joker" movieDesc="A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain." movieTitle="Joker" />
      </div>
    </div>

    <div>
      <div style={contentStyle}>
        <Header bgImage="bg-peaky" movieDesc="A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby." movieTitle="Peaky Blinders" />
      </div>
    </div>
  </Carousel>
);

export default Carousels;
