import React,{ useState } from 'react'
import './Faqs.css'
const Faqs = () => {
    // State to track which question is expanded
  const [expanded, setExpanded] = useState(null);

  // Data for FAQs
  const faqData = [
    {
      question: "Who can participate in AICrusade 2024 Hackathon?",
      answer:
        "AICrusade is open to all undergraduate students. Whether you are good at coding, just starting, or have creative ideas, you can join. Teams with different skills are encouraged.",
    },
    {
      question: "Is it mandatory to include AI in our project?",
      answer:
        "The answer is No; however, incorporating AI can help your project stand out.",
    },
    {
      question: "What do I need to bring to the event?",
      answer: "Just bring your laptop, chargers, and anything else you think will help your project come to life (yes, even that “lucky” flash drive). If you need specific hardware, make sure to pack it—better safe than sorry! We’ve got you covered with Wi-Fi, workstations, food, drinks, and everything else to keep you powered up. Basically, you bring the ideas, and we’ll handle the rest!",
    },
    {
      question: "Can I participate virtually?",
      answer: "Unfortunately, AICrusade is an in-person event only. You’ll need to be there, in person at the venue, to join the action. But don’t worry—being physically present means you get to enjoy all the excitement, energy, and possibly some cool snacks along the way!",
    },
    {
      question: "How much does it cost to participate?",
      answer:
        "If you're selected, simply pay a registration fee of Rs. 1500 per team to secure your spot. This fee covers everything you’ll need to make the most of the event!",
    },
    {
      question: "What are the hackathon dates?",
      answer: "The hackathon runs from Nov 30 - Dec 1, 2024.",
    },
    {
      question: "Need help?",
      answer: "Don’t hesitate to get in touch with our support team for any assistance you need! Phone Number: 9823424160 Email:siddhartha.devkota@gmail.com aiclub@ku.edu.np",
    },
  ];

  // Function to toggle the expanded question
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle the selected question
  };
  return (
    <div>
        <h1 className="text-4xl font-bold mt-28 p-2 text-center"style={{
            color: '#283346',
        }}>Frequently asked questions.

        </h1>
    <div className="faq-container">
      
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleExpand(index)}>
            <span style={{
        fontFamily:'monospace',
    }}>{item.question}</span>
            <span className="icon">{expanded === index ? "−" : "＋"}</span>
          </div>
          {expanded === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Faqs