"use client";
import Image from "next/image";
import React, { useState } from "react";

const AlumniLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login attempt:", { username, password });
    // Add your login logic here
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    // Add your forgot password logic here
  };

  return (
    <div className="alumni_portal_container">
      {/* Top Accent Border */}
      <div className="top_accent_border"></div>

      {/* Background Image */}
      <div className="alumni_bg_wrapper">
          <Image
                    src="/alumni/alumni_login_bg.png"
                    alt="Alumni celebration background"
                    width={1400}
                    height={750}
                    priority
                    className="alumni_bg_image"
                  />
        <div className="alumni_bg_overlay"></div>
      </div>

      {/* Content */}
      <div className="alumni_content_wrapper">
        {/* Left Side - Title */}
        <div className="alumni_title_section">
          <h1 className="alumni_title">
            Alumni
            <br />
            Portal
          </h1>
        </div>

        {/* Right Side - Login Card */}
        <div className="alumni_login_card">
          <h2 className="login_heading">Welcome Back</h2>

          <div className="login_form">
            {/* Username Input */}
            <div className="input_group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login_input"
              />
            </div>

            {/* Password Input */}
            <div className="input_group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login_input"
              />
            </div>

            {/* Login Button */}
            <button onClick={handleLogin} className="login_button">
              Login
            </button>

            {/* Forgot Password Link */}
            <div className="forgot_password_wrapper">
              <button
                onClick={handleForgotPassword}
                className="forgot_password_link"
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniLogin;