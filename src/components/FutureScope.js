import React from 'react';
import futureScopeImg from '../future_scope.jpg'; 

const FutureScope = () => (
  <section id="futureScope">
  <h2>🚀 Future Scope for Improvement</h2>

  <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "30px" }}>
    <img
      src={futureScopeImg}
      alt="Futuristic water technologies"
      className="section-image"
      style={{ width: "390px", height: "270px", marginRight: "20px", borderRadius: "12px" }}
    />
    <ul style={{ flex: 1, lineHeight: "1.7" }}>
      <li>
        🤖 <strong>AI and Smart Sensors:</strong><br />
        The integration of artificial intelligence and smart sensors is revolutionizing water management. These technologies provide real-time monitoring of water flow, detect leaks, and analyze consumption patterns. In agriculture, they help optimize irrigation by delivering water only when and where it’s needed. In industries and urban areas, AI can automate water use to prevent waste and improve distribution efficiency.
      </li>
    </ul>
  </div>

  <div style={{ display: "flex", alignItems: "flex-start" }}>
    <ul style={{ flex: 1, lineHeight: "1.7" }}>
      <li>
        📚 <strong>Global Education:</strong><br />
        Raising global awareness of the water footprint behind everyday products is essential. Education initiatives — in schools, universities, and public campaigns — can help individuals understand the impact of their consumption habits. When people learn that producing a single t-shirt can use up to 10,000 liters of water, they’re more likely to support sustainable practices and brands.
      </li>
      <br />

      <li>
        🌿 <strong>Water-Neutral Processes:</strong><br />
        The concept of water-neutrality encourages industries to balance the amount of water they use by restoring an equivalent volume through conservation efforts. This includes investing in rainwater harvesting, replenishing aquifers, or supporting ecosystem restoration projects. Water-neutral production is becoming a key goal for companies aiming to reduce environmental impact.
      </li>
      <br />

      <li>
        🌐 <strong>International Cooperation:</strong><br />
        Freshwater scarcity is a global challenge that doesn’t respect borders. Shared rivers, lakes, and aquifers require cooperative agreements between nations. International partnerships can promote fair usage, joint conservation projects, and the exchange of sustainable technologies. Collaboration also helps prevent conflicts over water access and ensures long-term resource security.
      </li>
      <br />

      <li>
        💡 <strong>Innovative Tech Integration:</strong><br />
        The future of water sustainability lies in widespread adoption of smart, water-saving technologies. In homes, this means installing low-flow fixtures, smart irrigation systems, and leak-detecting devices. In industries, it means investing in closed-loop systems that recycle water on-site. When innovation meets daily use, the cumulative savings can be massive.
      </li>
    </ul>
  </div>
  </section>
);

export default FutureScope;
