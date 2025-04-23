"use client";

export default function Contact() {
  return (
    <div className="p-8 text-foreground bg-background min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="mb-6">Feel free to reach out using any of the links below:</p>
      <ul className="space-y-4 text-lg">
        <li>
          <a
            href="https://linkedin.com/in/isaac-brian-zurita-montano-03a234332"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500"
          >
            LinkedIn 
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ibzm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500"
          >
            GitHub 
          </a>
        </li>
        <li>
          <a
            href="mailto:ibzm99@outlook.com"
            className="hover:underline text-blue-500"
          >
            Email Me 
          </a>
        </li>
      </ul>
    </div>
  );
}
