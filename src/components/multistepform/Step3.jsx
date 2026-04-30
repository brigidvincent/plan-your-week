import Button from "../Button";
import WeeklyCalendar from "./Calendar7days";

function Step3({ prevStep, handleChange, values, goToPlanner}){
    return (
        <div>
            <h3 className="step-subtitle"> Upcoming events </h3>
            <h4> Fill in any events for this week: </h4>
            <div className="calendar">
                <WeeklyCalendar/>
            </div>
            <div className="button-row">
                <Button className="progress-btn" onClick={prevStep}>
                    Back
                    </Button>
                <Button className="progress-btn" onClick={goToPlanner}>
                    Finish
                    </Button>
            </div>
        </div>
    )
}

export default Step3;