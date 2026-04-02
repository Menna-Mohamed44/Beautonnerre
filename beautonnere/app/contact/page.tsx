"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", topic: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <div className={styles.contactBox}>
            <div className={styles.leftSection}>
              <div>
                <h1 className={styles.leftTitle}>Get in Touch</h1>
                <p className={styles.leftSubtitle}>We&apos;d love to hear from you.</p>
              </div>

              <div className={styles.contactInfo}>
                <div className={styles.contactInfoItem}>
                  <svg className={styles.contactInfoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Contact@Beautonnerre.com</span>
                </div>
              </div>
            </div>

            <form className={styles.rightSection} onSubmit={handleSubmit}>
              <div className={styles.nameRow}>
                <div className={styles.nameField}>
                  <label className={styles.fieldLabel}>First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    className={styles.input} 
                    placeholder="John" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.nameField}>
                  <label className={styles.fieldLabel}>Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    className={styles.input} 
                    placeholder="Doe" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Email</label>
                <input 
                  type="email" 
                  name="email"
                  className={styles.input} 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Topic</label>
                <input 
                  type="text" 
                  name="topic"
                  className={styles.input} 
                  placeholder="How can we help?" 
                  value={formData.topic}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Message</label>
                <textarea 
                  name="message"
                  className={styles.textarea} 
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status !== "idle" && (
                <p className={`${styles.statusMessage} ${status === "success" ? styles.success : status === "error" ? styles.error : ""}`}>
                  {status === "loading" ? "Sending..." : statusMessage}
                </p>
              )}

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </main>
    </div>
  );
}
