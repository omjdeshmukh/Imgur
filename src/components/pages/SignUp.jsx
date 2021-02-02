import React from 'react';
import './r.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
  return (
    <>
      <div className="signup page">
      <h1>Sign Up</h1>
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="firstName" class="form-label">First name</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
            <div class="invalid-feedback">
              Valid first name is required.
                </div>
          </div>

          <div class="col-sm-6">
            <label for="lastName" class="form-label">Last name</label>
            <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
            <div class="invalid-feedback">
              Valid last name is required.
                </div>
          </div>

          <div class="col-12">
            <label for="username" class="form-label">Username</label>
            <div class="input-group">
              <span class="input-group-text">@</span>
              <input type="text" class="form-control" id="username" placeholder="Username" required="" />
              <div class="invalid-feedback">
                Your username is required.
                  </div>
            </div>
          </div>

          <div class="col-12">
            <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
            <input type="email" class="form-control" id="email" placeholder="you@example.com" />
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
                </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default SignUp;