import Button from "../Button";

function Step1({ nextStep, handleChange, values }) {
    return (
        <div>
            <h3 className="step-subtitle">Basic Info</h3>
            <div className="form-row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange("name")}/>
            </div>
            <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange("email")}
            />
            </div>
            <div className="form-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"
                name="password"
                placeholder="Set a password"
                value={values.password}
                onChange={handleChange("password")}/>
            </div>
            <Button className="progress-btn" onClick={nextStep}>
                Next
            </Button>
        </div>
    );
}

export default Step1;