import React from 'react'
import {minutesToDuration} from '../utils/duration'

export default function FocusControl({isTimerRunning, setFocusDuration,focusDuration}){
    const handleDecreaseFocus = () => {
        if(isTimerRunning !== true){
        setFocusDuration(Math.max(5, focusDuration - 5));
        }
      }

      const handleIncreaseFocus = () => {
        if(isTimerRunning !== true){
        setFocusDuration(Math.min(60, focusDuration + 5));
        }
      }

      return(
      <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {minutesToDuration(focusDuration)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={handleDecreaseFocus}
              >
   
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={handleIncreaseFocus}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div> 
      )
}