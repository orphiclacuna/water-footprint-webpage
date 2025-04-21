import React from 'react';
import waterCrisisImg from '../water_crisis.jpg'; 
import waterFootprintImg from '../water_footprint_info.png'; 

const Challenges = () => (
  <section id="challenges">
    <h2>💧 Major Challenges Impacting the Global Water Footprint</h2>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={waterCrisisImg}
        alt="Water scarcity and pollution"
        className="section-image"
        style={{ width: "270px", height: "270px", marginRight: "20px" }}
      />
      <div>
        <h3>🌊 Excessive Consumption</h3>
        <p>
          Excessive consumption of freshwater resources puts immense strain on available water supplies across all major sectors:
        </p>
        <ul>
          <li><strong>Agriculture:</strong> Accounts for about <strong>70% of global water use</strong>, mostly for irrigation.</li>
          <li><strong>Industry:</strong> Manufacturing and energy production require large volumes for cooling, cleaning, and processing.</li>
          <li><strong>Households:</strong> Everyday tasks like <em>showering, laundry, and cleaning</em> add up to significant water use.</li>
        </ul>
        <p>💡 <em>Even routine daily activities can contribute significantly to global freshwater demand.</em></p>
      </div>
    </div>

    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1 }}>
        <h3>🏭 Pollution Impact (Grey Water Footprint)</h3>
        <p>
          Water pollution increases the <strong>grey water footprint</strong>, which is the amount of clean water needed to dilute and neutralize pollutants:
        </p>
        <ul>
          <li>Industries release dyes, heavy metals, and toxic compounds into water systems</li>
          <li>Agricultural runoff carries <em>fertilizers and pesticides</em> into freshwater bodies</li>
          <li>This contaminated water requires additional clean water to be made safe again</li>
        </ul>
        <p>⚠️ <em>Pollution doesn’t just make water unusable — it demands more clean water to fix the damage.</em></p>
        <br />
      </div>
    </div>

    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1 }}>
        <h3>⚠️ Hidden Water Usage (Virtual Water)</h3>
        <p>
          Also known as <strong>virtual water</strong>, this is the indirect water embedded in the supply chains of goods we consume — and it's often invisible to consumers:
        </p>
        <ul>
          <li><strong>A cotton T-shirt:</strong> ~10,000 liters of water to produce</li>
          <li><strong>1 kg of beef:</strong> ~15,000 liters</li>
          <li>Includes products like <em>food, clothing, electronics, and industrial goods</em></li>
          <li>Countries importing goods are also importing water indirectly from producing regions</li>
        </ul>
        <p>🌐 <em>Our consumption patterns directly affect water use around the world.</em></p>
        <br />
      </div>
      <img
        src={waterFootprintImg}
        alt="Water footprint information"
        className="section-image"
        style={{ width: "400px", height: "450px", marginLeft: "20px" }}
      />
    </div>

    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1 }}>
        <h3>🌡️ Climate Change & Water Scarcity</h3>
        <p>
          Climate change, population growth, and poor water governance are amplifying water-related challenges:
        </p>
        <ul>
          <li><strong>Rising temperatures:</strong> Increase evaporation and dry up water sources</li>
          <li><strong>Unpredictable weather:</strong> Droughts and floods affect rainfall and water availability</li>
          <li><strong>Population growth:</strong> Drives demand, especially in already water-stressed regions</li>
          <li><strong>Inefficient systems:</strong> Outdated infrastructure and poor water management make matters worse</li>
        </ul>
        <p>🌍 <em>These changes are leading to widespread water insecurity and scarcity.</em></p>
        <br />

        <h3>🐟 Ecological Disruption</h3>
        <p>
          Over-extraction and pollution are damaging aquatic ecosystems and reducing biodiversity:
        </p>
        <ul>
          <li><strong>Habitat loss:</strong> Rivers and lakes shrink, threatening aquatic species</li>
          <li><strong>Toxic pollutants:</strong> Chemicals, waste, and sewage introduce harmful substances</li>
          <li><strong>Eutrophication:</strong> Excess nutrients from fertilizers deplete oxygen, killing fish and aquatic life</li>
        </ul>
        <p>🐠 <em>Protecting water ecosystems means conserving both quantity and quality of water.</em></p>
      </div>
    </div>
  </section>
);

export default Challenges;
