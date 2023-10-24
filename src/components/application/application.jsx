export const Application = () => {
  return (
    <>
      {/* getbyrole heading testing */}
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      {/* getbytitle testing */}
      <span title="close">XXX</span>
      {/* getbyalttext testing */}
      <img
        src="//www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg"
        alt="mamad is here"
      />
      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          {/* getByDisplayValue testing
          getByPlaceholderText testing */}
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="mamad"
            onChange={() => {}}
          />
        </div>
        <div>
          {/* getByLabelText testing */}
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </>
  );
};
