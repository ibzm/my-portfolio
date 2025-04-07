
import Link from 'next/link';
import React from 'react';
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <div className="text-center text-lg text-gray-800">
        <p>Email: <Link href="mailto:Ibzm99@outlook.com" className="text-blue-600">Ibzm99@outlook.com</Link></p>
        <p>Phone: <Link href="tel:+447734354599" className="text-blue-600">07734354599</Link></p>
        <p>
          GitHub: <Link href="https://github.com/ibzm" className="text-blue-600">GitHub Link</Link>
        </p>
        <p>
          LinkedIn: <Link href="https://www.linkedin.com/in/isaac-brian-zurita-montano-03a234332/" className="text-blue-600">LinkedIn Link</Link>
        </p>
      </div>
    </section>
  );
};

export default Contact;
