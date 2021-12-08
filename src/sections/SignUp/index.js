import { useState } from "react";

const SignUpSection = ({ onSign }) => {
  const [firstName, setFirstName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [terms, setTerms] = useState(false);

  // function handleFirstNameInput(event) {}
  // function handleEmailInput(event) {}
  // function handlePasswordInput(event) {}
  // function handleTermsCheckbox(event) {}

  const onSubmit = (e) => {
    e.preventDefault();

    if (!firstName) {
      alert("Enter first name before submitting");
      return;
    }

    onSign({ firstName, email, password, terms });

    setFirstName("");
    setEmail("");
    setPassword("");
    setTerms(false);
  };

  return (
    <section className="shadow pad-lg">
      <h2>Sign Up</h2>

      <form className="form-stack" onSubmit={onSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          //onChange={handleFirstNameInput}
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //onChange={handleEmailInput}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          //onChange={handlePasswordInput}
        />

        <div>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            onChange={(e) => setTerms(e.currentTarget.checked)}
            //onChange={handleTermsCheckbox}
            checked={terms}
          />
          <label htmlFor="terms">I accept Terms and Conditons</label>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default SignUpSection;
