import React from 'react'
import styled from 'styled-components'

const StyledReadMe = styled.div`
  h1 {
    font-weight: 400;

    a {
      color: lightblue;
    }
  }

  > *:not(h1) {
    margin-bottom: 2em;
  }

  ul {
    list-style-type: disc;

    li {
      margin-left: 2em;
    }
  }
`

function ReadMe() {
  return (
    <StyledReadMe>
      <h1 id="hello">HELLO :D</h1>
      <p>Welcome to my project! Please refer to my <a href="https://github.com/slampham/10x-Dev">README</a> on GitHub for a more in-depth analysis on this project. This page is just a guide to navigating the website.</p>
      <h1 id="github-facts"><a href="https://ghtorrent.org/relational.html">GITHUB FACTS</a></h1>
      <p>Compare the types of statistics, facts, and actions that top developers make compared to normal developers on GitHub. The x-axis on each chart represent the top x% of developers. For example, <code>5%</code> means that is the top 5% most starred developers on GitHub.</p>
      <p>Also, note that you can set a different metric to analyze each chart. The default metric is the median count of a fact, but you can change it with the buttons on the "Median Star Count" chart.</p>
      <p>
        <code>Metrics</code>:
        <ul>
          <li><code>Median</code>: take the median number of a fact in each percentile</li>
          <li><code>Percent Change</code>: take the percent change from the 100% group to the corresponding percentile</li>
          <li><code>Count</code>: sum the entire percentile's count (note: there's 160 users per percentile)</li>
        </ul>
      </p>
      <h1 id="code-complexity"><a href="https://radon.readthedocs.io/en/latest/intro.html">CODE COMPLEXITY</a></h1>
      <p>Compare the code metrics of top developers vs normal developers. Each metric chart uses the median for calculation.</p>
      <h1 id="google-colab">GOOGLE COLAB</h1>
      <p>This colab shows how I got the data for the analysis through BigQuery / GitHub API.</p>
      <h1 id="research-paper">RESEARCH PAPER</h1>
      <p>This is the research paper I published with my team.</p>
    </StyledReadMe>
  )
}

export default ReadMe