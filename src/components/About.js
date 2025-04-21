import React from 'react';
import waterFootprintImg from '../water_footprint.png';

const About = () => (
  <section id="about">
    <div>
  <h2>💧 What is Water Footprint?</h2>

  <div style={{ display: "flex", alignItems: "flex-start" }}>
    <p style={{ flex: 1 }}>
      The <strong> water footprint</strong> is a powerful, modern method used to measure the total volume of freshwater that is consumed or polluted in the production of goods and services. It goes beyond just the water that comes out of our taps or the water seen in rivers and lakes, offering a more comprehensive view of our water usage.
      <br /><br />
      Understanding the water footprint is crucial in the context of sustainability, as it helps us see the hidden water use embedded in the products we consume daily. This measurement includes not only the water directly consumed in everyday activities but also the water used throughout the entire lifecycle of products—from raw material extraction to production, transportation, and disposal.
    </p>
    <img
      src={waterFootprintImg}
      alt="Water footprint illustration"
      className="section-img"
      style={{ width: "120px", height: "250px", marginLeft: "20px" }}
    />
  </div>

  <p>A water footprint consists of three key components:</p>
  <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
    <li>
      🌱 <strong>Green Water:</strong> The rainwater absorbed by crops and vegetation. It's stored in soil and used by plants for growth, especially in agriculture.
    </li>
    <li>
      🚰 <strong>Blue Water:</strong> Freshwater withdrawn from rivers, lakes, and aquifers for irrigation, industrial use, and household needs. This is the most visible and measurable form of water use.
    </li>
    <li>
      🧪 <strong>Grey Water:</strong> The volume of freshwater needed to dilute and safely absorb pollutants generated during production processes or consumption, such as chemical runoff or industrial waste.
    </li>
  </ul>
  <br />

  <h3>🌍 Why is it Important?</h3>
  <p>
    The water footprint offers a more holistic view of water usage than traditional methods that only focus on direct consumption. By considering the full lifecycle of products—from the water used to grow food and manufacture goods, to the water required to manage pollutants—we can better understand how our choices affect global water resources.
  </p>

  <p>
    ☕ For example, the water footprint of a cup of coffee isn’t just the water you drink, but also the water needed to grow the coffee beans, process them, and transport them to your cup. 👖 Similarly, the water footprint of a pair of jeans includes the water used to cultivate cotton, dye the fabric, and manufacture the final product.
  </p>
  <br />

  <h3>📏 Measuring Water Impact</h3>
  <p>
    By calculating the water footprint of products and activities, we can identify areas where water is being used inefficiently or where pollution is overwhelming freshwater systems. This information can guide individuals, businesses, and policymakers in making more sustainable choices and reducing the strain on water resources globally.
  </p>
</div>

  </section>
);

export default About;
