import CustomInput from "./CustomInput";
import Section from "./Section";
import { useState } from "react";

export default function MainApp() {
  const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
  const [isGeneralSubmitted, setIsGeneralSubmitted] = useState(false);

  const [edu, setEdu] = useState({
    school: "",
    study: "",
    startDate: "",
    endDate: "",
  });
  const [isEduSubmitted, setIsEduSubmitted] = useState(false);

  const [exp, setExp] = useState({
    company: "",
    position: "",
    fromDate: "",
    untilDate: "",
    isCurrent: false,
    responsibility: "",
  });
  const [isExpSubmitted, setIsExpsubmitted] = useState(false);

  const handleGeneralChange = (e) => {
    setGeneral({ ...general, [e.target.name]: e.target.value });
  };

  const handleEduChange = (e) => {
    setEdu({ ...edu, [e.target.name]: e.target.value });
  };

  const handleExpChange = (e) => {
    const { name, value, checked } = e.target;

    setExp((currentExp) =>
      name === "isCurrent"
        ? { ...currentExp, isCurrent: checked, untilDate: checked ? "" : currentExp.untilDate }
        : { ...currentExp, [name]: value },
    );
  };

  return (
    <main className="main-container">
      <Section
        title="General Information"
        isSubmitted={isGeneralSubmitted}
        setIsSubmitted={setIsGeneralSubmitted}
      >
        {isGeneralSubmitted ? (
          <div>
            <p>
              <strong>Name: </strong> {general.name}
            </p>
            <p>
              <strong>Email: </strong> {general.email}
            </p>
            <p>
              <strong>Phone: </strong> {general.phone}
            </p>
          </div>
        ) : (
          <>
            <CustomInput
              labelText="Full Name"
              forLabel="name"
              inputType="text"
              placeHolder="Little Monster"
              value={general.name}
              onChange={handleGeneralChange}
            />

            <CustomInput
              labelText="Email"
              forLabel="email"
              inputType="email"
              placeHolder="littlemonster@gmail.com"
              value={general.email}
              onChange={handleGeneralChange}
            />

            <CustomInput
              labelText="Phone"
              forLabel="phone"
              inputType="tel"
              placeHolder="+234 804 5500 778"
              value={general.phone}
              onChange={handleGeneralChange}
            />
          </>
        )}
      </Section>

      <Section
        title="EDUCATION"
        isSubmitted={isEduSubmitted}
        setIsSubmitted={setIsEduSubmitted}
      >
        {isEduSubmitted ? (
          <div>
            <p>
              <strong>School:</strong> {edu.school}
            </p>
            <p>
              <strong>Title of Study:</strong> {edu.study}
            </p>
            <p>
              <strong>Dates:</strong> {edu.startDate} - {edu.endDate}
            </p>
          </div>
        ) : (
          <>
            <CustomInput
              labelText="SCHOOL"
              forLabel="school"
              inputType="text"
              placeHolder="Federal University"
              value={edu.school}
              onChange={handleEduChange}
            />

            <CustomInput
              labelText="TITLE OF STUDY"
              forLabel="study"
              inputType="text"
              placeHolder="B.Sc Computer Science"
              value={edu.study}
              onChange={handleEduChange}
            />

            <CustomInput
              labelText="START DATE"
              forLabel="startDate"
              inputType="month"
              value={edu.startDate}
              onChange={handleEduChange}
            />
            <CustomInput
              labelText="END DATE"
              forLabel="endDate"
              inputType="month"
              value={edu.endDate}
              onChange={handleEduChange}
            />
          </>
        )}
      </Section>

      <Section
        title="PRACTICAL EXPERIENCE"
        isSubmitted={isExpSubmitted}
        setIsSubmitted={setIsExpsubmitted}
      >
        {isExpSubmitted ? (
          <div>
            <p>
              <strong>Company:</strong> {exp.company}
            </p>
            <p>
              <strong>Position:</strong> {exp.position}
            </p>
            <p>
              <strong>Dates:</strong> {exp.fromDate} - {exp.isCurrent ? "Present" : exp.untilDate}
            </p>
            <p>
              <strong>Responsibility:</strong> {exp.responsibility}
            </p>
          </div>
        ) : (
          <>
            <CustomInput
              labelText="COMPANY"
              forLabel="company"
              inputType="text"
              placeHolder="Acme Corp"
              value={exp.company}
              onChange={handleExpChange}
            />

            <CustomInput
              labelText="POSITION"
              forLabel="position"
              inputType="text"
              placeHolder="Frontend Developer"
              value={exp.position}
              onChange={handleExpChange}
            />

            <div className="date-group">
              <CustomInput
                labelText="FROM"
                forLabel="fromDate"
                inputType="month"
                value={exp.fromDate}
                onChange={handleExpChange}
              />

              <CustomInput
                labelText="UNTIL"
                forLabel="untilDate"
                inputType="month"
                value={exp.untilDate}
                onChange={handleExpChange}
                disabled={exp.isCurrent}
              />

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="isCurrent"
                  checked={exp.isCurrent}
                  onChange={handleExpChange}
                />
                I currently work here
              </label>
            </div>

            <div className="input-group">
              <label htmlFor="responsibility">MAIN RESPONSIBILITY</label>
              <textarea
                name="responsibility"
                id="responsibility"
                placeholder="responsibility of your job"
                value={exp.responsibility}
                onChange={handleExpChange}
              ></textarea>
            </div>
          </>
        )}
      </Section>
    </main>
  );
}
