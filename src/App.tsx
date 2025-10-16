import './App.css'
import { ChatWidget } from '@infranodus/infranodus-ai'

// Import CSS for the AI chat widget
if (typeof window !== 'undefined') {
  import('@infranodus/infranodus-ai/css')
}

function App() {
  return (
    <>
      <ul>
        <button
          id="sumbutton"
          data-id="analytics_summary"
        >
          1. AI Insights
        </button>
        <button
          id="analbutton"
          data-id="analytics">
          2. Main Ideas
        </button>
        <button
          id="insightbutton"
          data-id="analytics_insight"
        >
          3. Content Gaps
        </button>
        <button
          id="relationsbutton"
          data-id="relations_analytics"
        >
          4. Relations
        </button>
        <button
          id="sentimentbutton"
          data-id="sentiment_analytics"
        >
          5. Sentiment
        </button>
        <button
          id="statsbutton"
          data-id="stats_analytics"
        >
          6. Stats
        </button>
        <button
          id="trendsbutton"
          data-id="trends_analytics"
        >
          7. Trends
        </button>
        <button
          id="networkstructurebutton"
          data-id="network_structure_analytics"
        >
          8. Structure
        </button>
      </ul>
      <ChatWidget darkMode={true} />;
    </>
  );
}


// function App() {
//   return (
//     <ChatWidget isOpen={true} darkMode={false} />
//   )
// }

export default App
