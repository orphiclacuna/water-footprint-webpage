import React from 'react';
import solutionImg from '../solution.jpg';
import infoImg from '../water_footprint_info2.png';

const Solutions = () => (
  <section id="solutions">
    <h2>💡 Solutions to Reduce Water Footprint</h2>

    <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
      <ul style={{ flex: 1, lineHeight: "1.7" }}>
        <li>
          💧 <strong>Water-Efficient Agriculture:</strong><br />
          Embracing water-efficient technologies in agriculture can significantly reduce freshwater consumption while maintaining or increasing productivity. One of the most effective techniques is <em>drip irrigation</em>, which delivers water directly to plant roots, minimizing waste and evaporation. <em>Precision farming</em> leverages data and sensors to optimize irrigation based on real-time soil and climate conditions. Additionally, cultivating <em>drought-resistant crops</em> helps farmers sustain yields even in arid and water-stressed environments.
        </li>
      </ul>
      <img
        src={solutionImg}
        alt="Water-efficient solutions"
        className="section-img"
        style={{ width: "300px", height: "300px", marginLeft: "20px", borderRadius: "12px" }}
      />
    </div>

    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <ul style={{ flex: 1, lineHeight: "1.8" }}>
        <li>
          ♻️ <strong>Industrial Recycling:</strong><br />
          Industries can dramatically cut down water waste through closed-loop systems and advanced wastewater treatment. Technologies like <em>reverse osmosis</em> and <em>membrane filtration</em> allow water to be purified and reused in processes such as dyeing, cleaning, or cooling — reducing dependency on fresh water and preventing pollution.
        </li>
        <br />

        <li>
          🧠 <strong>Policy Strengthening:</strong><br />
          Governments and corporations must adopt and enforce stronger policies to guide responsible water use. This includes <em>conservation incentives</em>, transparent reporting of water footprints, <em>investment in water-efficient infrastructure</em>, and environmental accountability at all levels.
        </li>
        <br />
      </ul>
    </div>

    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img
        src={infoImg}
        alt="Water-efficient solutions"
        className="section-img"
        style={{ width: "550px", height: "550px", marginBottom: "20px", borderRadius: "12px" }}
      />
      <ul style={{ flex: 1, lineHeight: "1.8",}}>
        <li>
          🛒 <strong>Mindful Consumer Choices:</strong><br />
          Individuals can make a difference by supporting sustainable products and reducing demand for water-intensive goods. Choosing <em>plant-based foods</em>, avoiding fast fashion, minimizing waste, and understanding the <em>hidden water cost</em> of products are all powerful steps toward reducing our personal water footprint.
        </li>
        <br />

        <li>
          🤝 <strong>Collaboration:</strong><br />
          Sustainable water management requires coordinated efforts across society. Public-private partnerships, community-led conservation, inter-industry cooperation, and education campaigns are all crucial to reducing water consumption and protecting global freshwater ecosystems.
        </li>
      </ul>
    </div>
  </section>
);

export default Solutions;
