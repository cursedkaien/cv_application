import { useState } from "react";

function Section({ children }) {
  return (
    <section>
      <div className="card">{children}</div>
    </section>
  );
}

export default function MainApp() {
  return (
    <>
      <Section>
        <h2>General Information</h2>

        <CustomInput
          labelText="Full Name"
          forLabel="name"
          inputType="text"
          placeHolder="Little Monster"
        />

        <CustomInput
          labelText="Email"
          forLabel="email"
          inputType="email"
          placeHolder="littlemonster@gmail.com"
        />

        <CustomInput
          labelText="Phone"
          forLabel="phone"
          inputType="tel"
          placeHolder="+234 804 5500"
        />
      </Section>

      <Section>
        <h2>EDUCATION</h2>

        <CustomInput
          labelText="SCHOOL"
          forLabel="school"
          inputType="text"
          placeHolder="Federal University"
        />

        <CustomInput
          labelText="TITLE OF STUDY"
          forLabel="study"
          inputType="text"
          placeHolder="B.Sc Computer Science"
        />

        <CustomInput
          labelText="DATES"
          forLabel="date"
          inputType="date"
          placeHolder="2020 - 2024"
        />
      </Section>

      <Section>
        <h2>PRACTICAL EXPERIENCE</h2>

        <CustomInput
          labelText="COMPANY"
          forLabel="company"
          inputType="text"
          placeHolder="Acme Corp"
        />

        <CustomInput
          labelText="POSITION"
          forLabel="position"
          inputType="text"
          placeHolder="Frontend Developer"
        />

        <CustomInput
          labelText="FROM"
          forLabel="from_date"
          inputType="text"
          placeHolder="Jan 2025"
        />

        <CustomInput
          labelText="UNTIL"
          forLabel="until_date"
          inputType="text"
          placeHolder="Present"
        />

        <label htmlFor="user-message">MAIN RESPONSIBILITY</label>
        <textarea
          name="message"
          id="user-message"
          placeholder="responsibility of your job"
        ></textarea>
      </Section>
    </>
  );
}
