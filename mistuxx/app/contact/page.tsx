"use client";

import { useState, FormEvent } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className={styles.contactPage}>
        <div className={styles.successContainer}>
          <div className={styles.successContent}>
            <div className={styles.successIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className={styles.successTitle}>Message Received</h2>
            <p className={styles.successText}>
              Thank you for reaching out. I personally read every message and try to 
              respond within 48 hours.
            </p>
            <button 
              className={styles.successButton}
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", subject: "", message: "" });
              }}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.contactPage}>
      {/* Header */}
      <header className={styles.header}>
        <span className={styles.eyebrow}>Get in Touch</span>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.subtitle}>
          For inquiries regarding commissions, acquisitions, or exhibitions
        </p>
      </header>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Contact Info */}
        <aside className={styles.sidebar}>
          <div className={styles.infoSection}>
            <h3>Studio</h3>
            <p>Ottawa, Ontario<br />Canada</p>
          </div>
          
          <div className={styles.infoSection}>
            <h3>Email</h3>
            <a href="mailto:aannaammoun@gmail.com">aannaammoun@gmail.com</a>
          </div>

          <div className={styles.infoSection}>
            <h3>Social Media</h3>
            <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/mitsuxx.co/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
                </a>
                <a href="https://www.linkedin.com/in/annaammoun123/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="2" />
                    <path d="M7 11v6M7 7v.01M11 11v6m0-3a2 2 0 1 1 4 0v3" />
                </svg>
                </a>
            </div>
          </div>


        </aside>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Please select...</option>
              <option value="commission">Commission Inquiry</option>
              <option value="acquisition">Artwork Acquisition</option>
              <option value="exhibition">Exhibition Proposal</option>
              <option value="press">Press & Media</option>
              <option value="studio">Studio Visit Request</option>
              <option value="other">General Inquiry</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={8}
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className={styles.submitting}>Sending...</span>
            ) : (
              <>
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}