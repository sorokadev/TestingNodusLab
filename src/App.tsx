import './App.css'
import { ChatWidget } from '@infranodus/infranodus-ai'

// Import CSS for the AI chat widget dynamically
if (typeof window !== 'undefined') {
  import('@infranodus/infranodus-ai/css').catch(console.error)
}

function App() {
  return (
    <>
      <div className="old-style-container">
        <h1 className="old-style-title">Testing Nodus Lab - AI Integration</h1>
        <p className="old-style-text">
        This application is designed to test the integration of the AI module with various dummy elements and old styles.
        </p>
      </div>

      <div className="old-style-container">
        <h2 className="old-style-title">Analytics Panel Controls</h2>
        <div>
          <button
            id="sumbutton"
            className="panelControlBtn"
            data-id="analytics_summary"
          >
            1. AI Insights
          </button>
          <button id="analbutton" className="panelControlBtn" data-id="analytics">
            2. Main Ideas
          </button>
          <button
            id="insightbutton"
            className="panelControlBtn"
            data-id="analytics_insight"
          >
            3. Content Gaps
          </button>
          <button
            id="relationsbutton"
            className="panelControlBtn"
            data-id="relations_analytics"
          >
            4. Relations
          </button>
          <button
            id="sentimentbutton"
            className="panelControlBtn"
            data-id="sentiment_analytics"
          >
            5. Sentiment
          </button>
          <button
            id="statsbutton"
            className="panelControlBtn"
            data-id="stats_analytics"
          >
            6. Stats
          </button>
          <button
            id="trendsbutton"
            className="panelControlBtn researchpane"
            data-id="trends_analytics"
          >
            7. Trends
          </button>
          <button
            id="networkstructurebutton"
            className="panelControlBtn researchpane"
            data-id="network_structure_analytics"
          >
            8. Structure
          </button>
        </div>
      </div>

      <ChatWidget isOpen={true} darkMode={true} />
    </>
  );
}


// function App() {
//   return (
//     <ChatWidget isOpen={true} darkMode={false} />
//   )
// }

export default App
