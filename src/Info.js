import React, { useState, useEffect } from "react";

const SignupPage = () => {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requestData, setRequestData] = useState({
    name: "",
    email: "",
    uID: "",
  });
  const [submit, setSubmit] = useState(false);

  // Fetch the 'uid' from the URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const uid = params.get("uid");
    if (uid) {
      setUserId(uid);
    }
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Prepare data object for submission
    setRequestData({
      name: name,
      email: email,
      uID: userId,
    });
    // Log the submission data - in real scenarios, you would likely send this to a backend server
    console.log("Submitting info:", requestData);
    // Implement submission logic here, such as an API call
    setSubmit(true);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] gap-y-4">
      <div className="flex gap-y-4 flex-col">
        <h1 className="text-center text-4xl font-bold">Signup</h1>
        <form
          className="flex flex-col gap-y-8 items-center"
          onSubmit={handleFormSubmit}
        >
          <input
            className="p-4 text-lg rounded-2xl"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="p-4 text-lg rounded-2xl"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="bg-blue-500 text-white py-3 rounded-lg w-4/6 text-xl"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {submit && (
        <div>
          <h2>Info Submitted:</h2>
          <div>
            <h3 className="text-2xl">Name: {requestData.email}</h3>
            <h3 className="text-2xl">Email: {requestData.name}</h3>
            <h3 className="text-2xl">Unique ID: {requestData.uID}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
