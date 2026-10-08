import {type ReactNode} from 'react'

interface ExpCardProps{
        children: ReactNode;
}

function ExperienceFrame({children}:ExpCardProps)
{
    return (
        <div className="border border-black border-2 rounded p-2">
      <div className="row">
        <h2> My work experience:</h2>
        {children}
        </div>
    </div>
    )
}

export default ExperienceFrame;