import Image from "next/image"
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import Board from "./Board"

type Player = {
  name: string
}

function PlayerMovement( {name}: Player ){
  return (
    <div >
      <FormControl>
      <FormLabel>{name} Player</FormLabel>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="human"
          control={<Radio />}
          label="Human"
        />
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="S"
              control={<Radio />}
              label="S"
              style={{ marginLeft: '10px' }}
            />
            <FormControlLabel
              value="O"
              control={<Radio />}
              label="O"
              style={{ marginLeft: '10px' }}
            />
          </RadioGroup>
        <FormControlLabel
          value="computer"
          control={<Radio />}
          label="Computer"
        />
      </RadioGroup>
    </FormControl>
  </div>
  )
}

export default function GUI() {
  return (
    <>
      <main className="flex flex-col max-w-4xl w-full h-fit rounded-xl gap-4 p-4 m-auto bg-gray-200 mt-5">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between items-center gap-4">
          <Image 
            src='/images/logo.webp' 
            alt='Logo' 
            width={64} 
            height={64}
            priority={true} />
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
            <FormControlLabel
                value="simple"
                control={<Radio />}
                label="Simple Game"
            />
            <FormControlLabel
              value="general"
              control={<Radio />}
              label="General Game"
            />
            </RadioGroup>
          </FormControl>
          <p><strong>Board Size: </strong>3x3</p>
        </div>
        <div className="flex flex-col items-center md:items-stretch md:flex-row gap-4">
          <div className="flex flex-col justify-between w-1/2 md:w-[18%]">
            <PlayerMovement name="Blue" />
            <Button variant="contained">Record Game</Button>
          </div>
          <div className="flex flex-col flex-grow gap-4 items-center">
            <Board/>
            <p><strong>Current Turn: </strong>blue (or red)</p>
          </div>
          <div className="flex flex-col justify-between w-1/2 md:w-[18%]">
            <PlayerMovement name="Red" />
            <div className="flex flex-col gap-2">
              <Button variant="contained">Replay</Button>
              <Button variant="contained">New Game</Button>
            </div>
          </div>
        </div>
      </main>
    </>    
  )
}