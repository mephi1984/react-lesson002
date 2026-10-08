import Card from './Card.tsx'
import ExperienceFrame from './ExperienceFrame.tsx'
function App() {

  return (
    <>
    <h1>Vladislav Khorev Resume</h1>
    <div className="container">
      <ExperienceFrame>
        <Card name="C++" years={15}/>
        <Card name="JavaScript" years={7}/>
        <Card name="Python" years={9}/>
        <Card name="Lua" years={4}/>
      </ExperienceFrame>
      
    </div>
    </>
  )
}

export default App
