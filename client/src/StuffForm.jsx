import { useState } from "react";
import "./StuffForm.css";
import "./App.css";
const defaultFormState = {
  title: "",
  content: "",
  platform_name: "1",
  tags: "1",
};
export default function StuffForm() {
  const [form, setForm] = useState(defaultFormState);

  function handleSubmit(event) {
    event.preventDefault();
    setForm(defaultFormState);
    event.target.reset();

    console.log(form);
    fetch("https://databaseproject-1.onrender.com", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function handleChange(event) {
    console.log(event.target.name);
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Add New Post</h3>
        <p>
          Talk to us about your favourite, most hated or most mid Game tell us
          whats good, bad or great, or even whats just on your mind.
        </p>
        <input name="title" placeholder="title" onChange={handleChange} />
        <select defaultValue="1" name="platform_name" onChange={handleChange}>
          <option value="1">PC</option>

          <option value="2">Playstation</option>

          <option value="3">Xbox</option>

          <option value="4">Switch</option>
        </select>
        <select defaultValue="1" name="tags" onChange={handleChange}>
          <option value="1">Park Builder</option>

          <option value="2">Simulation</option>

          <option value="7">Beat em Up</option>

          <option value="8">Hack and Slash</option>

          <option value="9">Fighting</option>

          <option value="10">Platform</option>

          <option value="11">Shooter</option>

          <option value="12">Survival</option>

          <option value="13">Battle Royal</option>

          <option value="14">Action-Adventure</option>

          <option value="15">Stealth</option>

          <option value="16">Adventure</option>

          <option value="17">Interactive Fiction</option>

          <option value="18">Interactive Movie</option>

          <option value="19">Visual Novel</option>

          <option value="20">Gacha</option>

          <option value="21">Horror</option>

          <option value="22">Survival Horror</option>

          <option value="23">Licensed</option>

          <option value="24">Masocore</option>

          <option value="25">MMO</option>

          <option value="26">RPGMMO</option>

          <option value="27">Action Role-Play</option>

          <option value="28">Tactical Role-Play</option>

          <option value="29">Sci-Fi</option>

          <option value="30">Construction and Management</option>

          <option value="31">Life Simulation</option>

          <option value="32">Sports</option>

          <option value="33">Driving-Arcade</option>

          <option value="34">Driving-Sim</option>

          <option value="35">Strategy</option>

          <option value="36">4X</option>

          <option value="37">Auto-Battler</option>

          <option value="38">MOBA</option>

          <option value="39">RTS</option>

          <option value="40">Real-Time Tactics</option>

          <option value="41">Tower Defense</option>

          <option value="42">Turn-Based Strategy</option>

          <option value="43">Turn-Based Tactics</option>

          <option value="44">Cozy Game</option>

          <option value="45">Rhythm</option>

          <option value="46">Flying-Arcade</option>

          <option value="47">Flying-Simulation</option>

          <option value="48">FPS</option>

          <option value="49">Third Person Shooter</option>

          <option value="50">Puzzle</option>

          <option value="51">Rougelike</option>

          <option value="52">Monster Tamer</option>

          <option value="53">Train simulators</option>

          <option value="54">Vehicular combat</option>

          <option value="55">TCGO</option>

          <option value="56">Party</option>

          <option value="57">Clicker</option>

          <option value="58">Sandbox</option>

          <option value="59">Open World</option>
        </select>
        <textarea
          id="content"
          height="400px"
          name="content"
          type="text"
          placeholder="write content here"
          onChange={handleChange}
        />
        <input
          name="username"
          type="text"
          placeholder="enter name"
          onChange={handleChange}
        />
        <button>Add Post</button>
      </form>
    </>
  );
}
