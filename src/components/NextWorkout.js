import React from 'react';
import { getWorkouts, getDisplayName } from '../utils/workout';
import Button from './Button';

const NextWorkout = ({ liftVariant, masterWeights, onStartWorkout }) => {
    return (  
        <div className="next-workout card">
            <h2>Next Workout</h2>
            <div className="next-workout__lifts">
                {getWorkouts(liftVariant).map(workout => {
                    return (
                        <p key={workout} className="next-workout__lift">
                            {getDisplayName(workout)}
                            <span className="next-workout__weight">
                                {workout !== 'chinup' ? ` @${masterWeights[workout]}lbs` : ''}
                            </span>
                        </p>
                    );
                })}
            </div>
            <Button variant="primary" className="next-workout__button" clickHandler={() => {onStartWorkout()}}>Start workout</Button>
        </div>
    );
}
NextWorkout.defaultProps = {
    liftVariant: { a:0, b:0 },
    masterWeights: {
        bench: 0,
        row: 0,
        squat: 0,
        deadlift: 0,
        overhead: 0,
        chinup: {}
    },
    onStartWorkout: () => {console.log('on start workout (default prop)')}
};
 
export default NextWorkout;