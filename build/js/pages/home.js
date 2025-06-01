// Description:
// This is the homepage component.
// In this component, we will render a role selector
// to choose what the site needs to show us.

export default function Homepage() {
  return (
    <>
      <div className="container_page">
        <h1>MrKappa's Tales</h1>
        <p>Seleziona il tuo ruolo per iniziare:</p>

        <div className="role_selector">
          <div className="role_button">
            <input type="button" id="role_user" name="role" value="user">
              <label>Avventuriero</label>
            </input>
            <br />
            <input type="button" id="role_user" name="role" value="master">
              <label>Master</label>
            </input>
          </div>
        </div>
      </div>
    </>
  );
}
