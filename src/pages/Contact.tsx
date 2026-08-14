import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">CONTACT US</h1>

        {submitted ? (
          <div className="border-2 border-foreground bg-card p-10 pixel-shadow text-center">
            <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl mb-2">MESSAGE SENT!</h2>
            <p className="font-body text-sm text-muted-foreground">
              We will get back to you within 24-48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="border-2 border-foreground bg-card p-6 pixel-shadow space-y-4">
            <p className="font-body text-sm text-muted-foreground mb-2">
              Have a suggestion, issue, or just want to say hello? Drop us a message below or email us at
              <span className="text-accent font-bold ml-1">hello@pawsandpets.in</span>
            </p>
            <div>
              <label className="font-display text-sm block mb-1">YOUR NAME</label>
              <input type="text" required
                className="w-full border-2 border-foreground bg-background px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div>
              <label className="font-display text-sm block mb-1">EMAIL</label>
              <input type="email" required
                className="w-full border-2 border-foreground bg-background px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div>
              <label className="font-display text-sm block mb-1">TOPIC</label>
              <select required className="w-full border-2 border-foreground bg-background px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                <option value="">Select a topic</option>
                <option value="suggestion">Suggestion</option>
                <option value="issue">Report an Issue</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="font-display text-sm block mb-1">MESSAGE</label>
              <textarea required rows={5}
                className="w-full border-2 border-foreground bg-background px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
            </div>
            <button type="submit" className="pixel-btn bg-accent text-accent-foreground text-lg w-full flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> SEND MESSAGE
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
