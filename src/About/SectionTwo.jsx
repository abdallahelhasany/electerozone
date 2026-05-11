import React from "react";

function SectionTwo() {
  return (
    <div>
      <>
        {/* Analytics Section */}
        <section className="analytics-section" id="analytics">
          <div className="dashboard-container">
            <h2 className="section-title">Advanced Analytics</h2>
            {/* Key Metrics Overview */}
            <div className="metrics-grid">
              <div className="metric-item">
                <div className="metric-value">2.4M</div>
                <div className="metric-label">Page Views</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">156K</div>
                <div className="metric-label">Unique Visitors</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">4.2min</div>
                <div className="metric-label">Avg Session</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">68%</div>
                <div className="metric-label">Return Rate</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">89</div>
                <div className="metric-label">NPS Score</div>
              </div>
            </div>
            {/* Chart Cards */}
            <div className="charts-grid">
              <div className="chart-card">
                <div className="chart-header">
                  <h3 className="chart-title">📈 Monthly Trends</h3>
                  <div className="chart-options">
                    <span className="chart-option active">2024</span>
                    <span className="chart-option">2023</span>
                    <span className="chart-option">2022</span>
                  </div>
                </div>
                <div className="chart-container">
                  <div className="bar-chart" id="barChart">
                    <div className="bar" style={{ height: "60%" }}>
                      <span className="bar-value">120</span>
                      <span className="bar-label">Jan</span>
                    </div>
                    <div className="bar" style={{ height: "80%" }}>
                      <span className="bar-value">180</span>
                      <span className="bar-label">Feb</span>
                    </div>
                    <div className="bar" style={{ height: "45%" }}>
                      <span className="bar-value">90</span>
                      <span className="bar-label">Mar</span>
                    </div>
                    <div className="bar" style={{ height: "70%" }}>
                      <span className="bar-value">140</span>
                      <span className="bar-label">Apr</span>
                    </div>
                    <div className="bar" style={{ height: "90%" }}>
                      <span className="bar-value">200</span>
                      <span className="bar-label">May</span>
                    </div>
                    <div className="bar" style={{ height: "65%" }}>
                      <span className="bar-value">130</span>
                      <span className="bar-label">Jun</span>
                    </div>
                    <div className="bar" style={{ height: "75%" }}>
                      <span className="bar-value">150</span>
                      <span className="bar-label">Jul</span>
                    </div>
                    <div className="bar" style={{ height: "85%" }}>
                      <span className="bar-value">170</span>
                      <span className="bar-label">Aug</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-card">
                <div className="chart-header">
                  <h3 className="chart-title">📊 Growth Analytics</h3>
                  <div className="chart-options">
                    <span className="chart-option active">Week</span>
                    <span className="chart-option">Month</span>
                    <span className="chart-option">Year</span>
                  </div>
                </div>
                <div className="chart-container">
                  <div className="line-chart">
                    <svg className="line-chart-svg" viewBox="0 0 500 300">
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: "#0084ff", stopOpacity: "0.5" }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#0084ff", stopOpacity: 0 }}
                          />
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      <line
                        x1={0}
                        y1={50}
                        x2={500}
                        y2={50}
                        className="chart-grid-line"
                      />
                      <line
                        x1={0}
                        y1={100}
                        x2={500}
                        y2={100}
                        className="chart-grid-line"
                      />
                      <line
                        x1={0}
                        y1={150}
                        x2={500}
                        y2={150}
                        className="chart-grid-line"
                      />
                      <line
                        x1={0}
                        y1={200}
                        x2={500}
                        y2={200}
                        className="chart-grid-line"
                      />
                      <line
                        x1={0}
                        y1={250}
                        x2={500}
                        y2={250}
                        className="chart-grid-line"
                      />
                      {/* Area */}
                      <path
                        d="M 0,200 L 62,180 L 125,150 L 187,170 L 250,120 L 312,140 L 375,100 L 437,130 L 500,110 L 500,300 L 0,300 Z"
                        className="chart-area"
                      />
                      {/* Line */}
                      <path
                        d="M 0,200 L 62,180 L 125,150 L 187,170 L 250,120 L 312,140 L 375,100 L 437,130 L 500,110"
                        className="chart-line"
                      />
                      {/* Dots */}
                      <circle cx={0} cy={200} className="chart-dot" />
                      <circle cx={62} cy={180} className="chart-dot" />
                      <circle cx={125} cy={150} className="chart-dot" />
                      <circle cx={187} cy={170} className="chart-dot" />
                      <circle cx={250} cy={120} className="chart-dot" />
                      <circle cx={312} cy={140} className="chart-dot" />
                      <circle cx={375} cy={100} className="chart-dot" />
                      <circle cx={437} cy={130} className="chart-dot" />
                      <circle cx={500} cy={110} className="chart-dot" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="chart-card">
                <div className="chart-header">
                  <h3 className="chart-title">🌍 Geographic Distribution</h3>
                  <div className="chart-options">
                    <span className="chart-option active">Global</span>
                    <span className="chart-option">US</span>
                    <span className="chart-option">EU</span>
                  </div>
                </div>
                <div className="chart-container">
                  <div className="bar-chart">
                    <div
                      className="bar"
                      style={{
                        height: "85%",
                        background:
                          "linear-gradient(180deg, #002fff 0%, #000000 100%)",
                      }}
                    >
                      <span className="bar-value">42%</span>
                      <span className="bar-label">USA</span>
                    </div>
                    <div
                      className="bar"
                      style={{
                        height: "65%",
                        background:
                          "linear-gradient(180deg, #0084ff 0%, #0011ff 100%)",
                      }}
                    >
                      <span className="bar-value">28%</span>
                      <span className="bar-label">EU</span>
                    </div>
                    <div
                      className="bar"
                      style={{
                        height: "45%",
                        background:
                          "linear-gradient(180deg, #026fff 0%, #0004ff 100%)",
                      }}
                    >
                      <span className="bar-value">18%</span>
                      <span className="bar-label">Asia</span>
                    </div>
                    <div
                      className="bar"
                      style={{
                        height: "25%",
                        background:
                          "linear-gradient(180deg, #6c69ff 0%, #0c00b8 100%)",
                      }}
                    >
                      <span className="bar-value">12%</span>
                      <span className="bar-label">Other</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-card">
                <div className="chart-header">
                  <h3 className="chart-title">📱 Device Analytics</h3>
                  <div className="chart-options">
                    <span className="chart-option active">This Month</span>
                    <span className="chart-option">Last Month</span>
                    <span className="chart-option">YTD</span>
                  </div>
                </div>
                <div className="chart-container">
                  <div className="line-chart">
                    <svg className="line-chart-svg" viewBox="0 0 500 300">
                      <defs>
                        <linearGradient
                          id="gradient2"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: "#ff9100", stopOpacity: "0.5" }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#ff9100", stopOpacity: 0 }}
                          />
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      <line
                        x1={0}
                        y1={60}
                        x2={500}
                        y2={60}
                        className="chart-grid-line"
                      />
                      <line
                        x1={0}
                        y1={120}
                        x2={500}
                        y2={120}
                        className="chart-grid-line"
                      />
                      <line
                        x1={0}
                        y1={180}
                        x2={500}
                        y2={180}
                        className="chart-grid-line"
                      />
                      <line
                        x1={0}
                        y1={240}
                        x2={500}
                        y2={240}
                        className="chart-grid-line"
                      />
                      {/* Mobile Line */}
                      <path
                        d="M 0,180 L 71,160 L 142,140 L 214,120 L 285,100 L 357,90 L 428,80 L 500,70"
                        stroke="#ff9100"
                        strokeWidth={2}
                        fill="none"
                        filter="drop-shadow(0 0 10px rgba(255, 145, 0, 0.5))"
                      />
                      {/* Desktop Line */}
                      <path
                        d="M 0,220 L 71,210 L 142,200 L 214,190 L 285,185 L 357,180 L 428,175 L 500,170"
                        stroke="#0084ff"
                        strokeWidth={2}
                        fill="none"
                        filter="drop-shadow(0 0 10px rgba(0, 132, 255, 0.5))"
                      />
                      {/* Mobile dots */}
                      <circle cx={0} cy={180} r={4} fill="#ff9100" />
                      <circle cx={71} cy={160} r={4} fill="#ff9100" />
                      <circle cx={142} cy={140} r={4} fill="#ff9100" />
                      <circle cx={214} cy={120} r={4} fill="#ff9100" />
                      <circle cx={285} cy={100} r={4} fill="#ff9100" />
                      <circle cx={357} cy={90} r={4} fill="#ff9100" />
                      <circle cx={428} cy={80} r={4} fill="#ff9100" />
                      <circle cx={500} cy={70} r={4} fill="#ff9100" />
                      {/* Desktop dots */}
                      <circle cx={0} cy={220} r={4} fill="#0084ff" />
                      <circle cx={71} cy={210} r={4} fill="#0084ff" />
                      <circle cx={142} cy={200} r={4} fill="#0084ff" />
                      <circle cx={214} cy={190} r={4} fill="#0084ff" />
                      <circle cx={285} cy={185} r={4} fill="#0084ff" />
                      <circle cx={357} cy={180} r={4} fill="#0084ff" />
                      <circle cx={428} cy={175} r={4} fill="#0084ff" />
                      <circle cx={500} cy={170} r={4} fill="#0084ff" />
                      {/* Labels */}
                      <text x={20} y={50} fill="#ff9100" fontSize={12}>
                        Mobile
                      </text>
                      <text x={20} y={35} fill="#0084ff" fontSize={12}>
                        Desktop
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default SectionTwo;
