import { useState } from "react";
import Button from "../Button";

function Step2({ nextStep, prevStep, handleChange, values }) {

    const [habit, setHabit] = useState("");
    const [frequency, setFrequency] = useState("");
    const [habitsList, setHabitsList] = useState([]);

    const [editingID, setEditingID] = useState(null);
    const [editHabit, setEditHabit] = useState("");
    const [editFrequency, setEditFrequency] = useState("");

    const handleDelete = (id) => {
        setHabitsList(habitsList.filter((item) => item.id !== id));
    };

    const handleEdit = (item) => {
        setEditingID(item.id);
        setEditHabit(item.habit);
        setEditFrequency(item.frequency);
    };

    const handleSaveEdit = (id) => {
        const updatedList = habitsList.map((item) =>
            item.id === id
                ? { ...item, habit: editHabit, frequency: editFrequency }
                : item
        );
        setHabitsList(updatedList);
        setEditingID(null);
    };

    const handleAddHabit = () => {
        if (!habit || !frequency) return;

        const newHabit = {
            id: Date.now(),
            habit,
            frequency
        };

        setHabitsList([...habitsList, newHabit]);
        setHabit("");
        setFrequency("");
    };

    return (
        <div>
            <h3 className="step-subtitle">Set up your weekly habits...</h3>
            <h4>What habits do you want to upkeep every week, and how often?</h4>

            <div>
                <input
                    placeholder="Enter habit (e.g. Gym @ 8am)"
                    value={habit}
                    onChange={(e) => setHabit(e.target.value)}
                />

                <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                >
                    <option value="">Select frequency</option>
                    <option value="1x">1x a week</option>
                    <option value="2x">2x a week</option>
                    <option value="3x">3x a week</option>
                    <option value="4x">4x a week</option>
                    <option value="5x">5x a week</option>
                    <option value="6x">6x a week</option>
                    <option value="daily">Daily</option>
                </select>

                <Button className="habit-btn" onClick={handleAddHabit}>
                    Add
                </Button>
            </div>

            <div className="habits-list">
                <ul>
                    {habitsList.map((item) => (
                        <li className="habit-item" key={item.id}>
                            {editingID === item.id ? (
                                <>
                                    <input
                                        value={editHabit}
                                        onChange={(e) => setEditHabit(e.target.value)}
                                    />

                                    <select
                                        value={editFrequency}
                                        onChange={(e) => setEditFrequency(e.target.value)}
                                    >
                                        <option value="">Select frequency</option>
                                        <option value="1x">1x a week</option>
                                        <option value="2x">2x a week</option>
                                        <option value="3x">3x a week</option>
                                        <option value="4x">4x a week</option>
                                        <option value="5x">5x a week</option>
                                        <option value="6x">6x a week</option>
                                        <option value="daily">Daily</option>
                                    </select>

                                    <Button className="habit-btn" onClick={() => handleSaveEdit(item.id)}>
                                        Save
                                    </Button>
                                </>
                            ) : (
                                <>
                                    {item.habit} - {item.frequency} a week
                                    <Button className="habit-btn" onClick={() => handleEdit(item)}>
                                        Edit
                                    </Button>
                                    <Button className="habit-btn" onClick={() => handleDelete(item.id)}>
                                        Delete
                                    </Button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="button-row">
                <Button className="progress-btn" onClick={prevStep}>
                    Back
                    </Button>
                <Button className="progress-btn" onClick={nextStep}>
                    Next
                    </Button>
            </div>
        </div>
    );
}

export default Step2;