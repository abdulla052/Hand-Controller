import Content from "./Content";
import EmbedVid from "./EmbedVid";
import Button from "./Button";
import icon from "./assets/images/email.png";

const Body = () => {
  return (
    <div className="body-container">
      <Content header={"introduction:"}>
        <p>
          The Hand-Controller project utilizes computer vision techniques to
          track and interpret hand movements, enabling you to interact with
          games and applications. By using your hands as input, you can control
          various aspects of the game or application without the need for a
          traditional controller or keyboard.
        </p>
      </Content>

      <EmbedVid
        src={"https://www.youtube.com/embed/HHwgFWGWMj0?si=5ULteiiDYHQNzGkA"}
      />

      <Button icon={icon} href={'#contact'}>Wanna Try it?</Button>

      <Content>
        <p>
          {`It does not need any equipment, it means it costs zero. It's simple
          just keep your hands in front of the camera properly, then drive.`}
        </p>
      </Content>

      <EmbedVid
        src={"https://www.youtube.com/embed/0wFnioI1gVA?si=wTvvG_UcQO0e_gbE"}
      />

      <Content header={"Features: "}>
        <strong>1. Drifting: </strong> Effortlessly execute precision drifts
        while driving using intuitive hand gestures, by moving up your both
        hands.
      </Content>

      <EmbedVid
        src={"https://www.youtube.com/embed/aapm7UodHo8?si=tgYzhnwBBfTfBCjo"}
      ></EmbedVid>

      <Content>
        <strong>2. Nitro Boost Activation: </strong> Unleash the full power of
        your virtual vehicle with the Nitro Boost feature. By making specific
        hand motions, just move your hands down
      </Content>

      <EmbedVid
        src={"https://www.youtube.com/embed/xd58C-fG8l4?si=RkmZc1fqbnMlBQWb"}
      ></EmbedVid>

      <div id="contact"
        style={{
          fontSize: "1.1em",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          width: "100%",
          // justifyContent: "flex-start",
          // alignItems: "flex-start",
        }}
      >
        <Content header={"Got Questions or Issues?"}>
          Need help or have questions?{" "}
          <a href="mailto:abdullahassan052@gmail.com">Contact me</a> for
          support. Your feedback matters!
        </Content>

        <Content header={"Wanna Try It?"}>
          You can download and try it. See all the details via my{" "}
          <a
            target="_blank"
            href="https://github.com/abdulla052/Hand-Controller"
          >
            Github repository
          </a>
          .
        </Content>
      </div>
    </div>
  );
};

export default Body;
