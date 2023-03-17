

function App() {

  return (
    <main>
      <form class="form contact-form">
        <h5>login/register</h5>
        <div class="form-row">
          <label for="username" class="form-label">username</label>
          <input type="text" class="form-input username-input" />
        </div>
        <div class="form-row">
          <label for="password" class="form-label">password</label>
          <input type="password" class="form-input password-input" />
        </div>
        <div class="text-small form-alert">there was an error</div>
        <button type="submit" class="btn btn-block">submit</button>
      </form>
      <div class="container">
        <h4>Dashboard</h4>
        <p class="token">no token present</p>
        <div class="result"></div>
        <button class="btn btn-block" id="data">get data</button>
      </div>
    </main>
  )
}

export default App
