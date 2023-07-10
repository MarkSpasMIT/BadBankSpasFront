import '../App.css';
import React from 'react';
import Card from './Card';
import { UserContext } from './context';

function CreateAccount() {
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  React.useEffect(() => {
    if (name !== "" && email !== "" && password !== "") {
      setNameError('');
      setEmailError('');
      setPasswordError('');
    }
  }, [name, email, password]);

  function validate(field, label) {
    if (!field) {
      return `Error: ${label} is required`;
    }

    if (label === 'password' && field.length < 8) {
      return 'Error: password must contain at least 8 characters';
    }

    if (label === 'email' && !field.includes('@')) {
      return 'Error: Invalid email address';
    }

    return '';
  }

  function handleCreate() {
    const nameErr = validate(name, 'name');
    const emailErr = validate(email, 'email');
    const passwordErr = validate(password, 'password');

    setNameError(nameErr);
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (nameErr || emailErr || passwordErr) {
      return;
    }

    // Delete initial placeholder user account
    if (ctx.users[0].name === 'abel') {
      ctx.users.length = 0;
    }
    // Seed all new accounts with $100
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function handleChange(e, setField) {
    setField(e.currentTarget.value);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      body={show ? (
        <>
          Name<br /><br />
          <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => handleChange(e, setName)} /><br /><br />
          Email address<br /><br />
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => handleChange(e, setEmail)} /><br /><br />
          Password<br /><br />
          <input type="password" className="form-control" id="password" placeholder="Enter password : must contain at least 8 characters" value={password} onChange={e => handleChange(e, setPassword)} /><br /><br />
          <div className="error">{nameError}</div>
          <div className="error">{emailError}</div>
          <div className="error">{passwordError}</div><br />
          <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!name && !email && !password}>Create Account</button>
        </>
      ) : (
        <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
        </>
      )}
    />
  )
}

export default CreateAccount;
