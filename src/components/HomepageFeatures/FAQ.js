import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Link,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { keyframes } from "@emotion/react";

// Animations (same as before)
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;


const FAQ_DATA = [
  {
    question: "What is Ghumman Tech and what does it offer?",
    answer:
      "Ghumman Tech is a learning platform for lifelong learners. We focus on STEM, languages, programming, and robotics, and we also host extracurricular courses like religion, chess, music, and outdoor activities.",
  },
  {
    question: "Who can join Ghumman Tech?",
    answer:
      "Anyone can join! While our main audience is kids and teens, we welcome lifelong learners of all ages.",
  },
  {
    question: "How do I register on Ghumman Tech?",
    answer:
      "You can register using your Google account or by signing up with an email and password. Registration is completely free.",
  },
  {
    question: "Can I also teach on Ghumman Tech?",
    answer:
      "Yes! Every user has the ability to teach. Once you create a course or seminar, you are automatically registered as a teacher.",
  },
  {
    question: "Is there a fee to join Ghumman Tech or take courses?",
    answer:
      'No, registering is free. Many courses are also free and can be found using the "Free" checkbox when searching.',
  },
  {
    question: "Are the classes live or pre-recorded?",
    answer:
      "We offer both live classes and pre-recorded video lessons, depending on the course and instructor.",
  },
  {
    question: "Do I get access to course materials?",
    answer:
      "Yes. You can message teachers, make notes inside the course, and download files (like code or worksheets) when available.",
  },
  {
    question: "Do you provide certificates after course completion?",
    answer:
      "Yes. A certificate of completion is issued when you successfully complete a course.",
  },
  {
    question: "How do I know which age group a course is for?",
    answer:
      "Each course has the recommended age group listed in the description. You can also message the teacher for clarification.",
  },
  {
    question: "In which languages are the courses offered?",
    answer:
      "Our main language is English, but we offer around 150 different language courses. Teachers can also create content in other languages.",
  },
  {
    question: "Do I need special software for live classes?",
    answer:
      "Yes. Most live classes use Zoom, Google Meet, or Microsoft Teams. You'll need to install or access these platforms online.",
  },
  {
    question: "I forgot my password. How do I reset it?",
    answer:
      'Use the "Forgot Password" option on the login page or contact us via chatbot or email at admin@ghummantech.com.',
  },
  {
    question: "How do I contact support?",
    answer:
      "You can email us at admin@ghummantech.com or use the chatbot on our website.",
  },
  {
    question: "Can I teach even if I'm not a professional educator?",
    answer:
      "Yes! If you have skills or knowledge to share, you can create a course. Once approved, you'll become a teacher on Ghumman Tech. [Onboarding Link](https://ghummantech.com/Onboarding)",
  },
  {
    question: "What is 'Build and Sell By Kids'?",
    answer:
      "It's a program where kids learn to build real products and sell them. Kids can host and sell these products right from Ghumman Tech.",
  },
  {
    question: "Can users from any country join?",
    answer:
      "Absolutely. Both learners and teachers can join from anywhere in the world.",
  },
  {
    question: "What is the Kahoot feature and how does it work?",
    answer:
      "Kahoot, along with quizzes, flashcards, drawing tools, and games, can be accessed directly from your course page.",
  },
  {
    question: "Can I access courses on my phone or tablet?",
    answer: "Yes. Our platform works on both desktop and mobile devices.",
  },
  {
    question: "How does Ghumman Tech handle privacy and data?",
    answer:
      "We strictly follow privacy laws and never sell your data. You may also request removal of your profile and content anytime by emailing admin@ghummantech.com.",
  },
  {
    question: "Do you offer group plans for schools or institutions?",
    answer:
      "Yes. Schools and organizations can reach out to admin@ghummantech.com to discuss custom group plans.",
  },
  {
    question: "Do teachers need to set their timezone?",
    answer:
      "Yes. Teachers set their class times in their own timezone. Students will automatically see the time converted to their local timezone.",
  },
  {
    question: "Where can I apply for jobs or internships at Ghumman Tech?",
    answer:
      "Visit our Careers Page or email your resume and interest to admin@ghummantech.com.",
  },
  {
    question: "Where can I learn more or find tutorials?",
    answer:
      "Our complete documentation, tutorials, and blog posts are available at [Docs Page](https://www.ghummantech.com/Docs)",
  },
  {
    question: "Where can I find Ghumman Tech on social media?",
    answer: "All our social links are listed at [Contact Us Page](https://www.ghummantech.com/ContactUs)",
  },
];

// Helper component to render text with markdown-style links
const TextWithLinks = ({ text }) => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add the link
    parts.push(
      <Link
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        key={match[2]}
        sx={{
          color: "#e53e3e",
          fontWeight: 500,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        {match[1]}
      </Link>
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after last link
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <>{parts}</>;
};

export default function FAQ({ colorMode }) {
  return (
    <Box
      sx={{
        py: 10,
        bgcolor: colorMode === "dark" ? "background.default" : "#f9fafb",
        background:
          colorMode === "dark"
            ? "linear-gradient(145deg, #1a1a1a, #2a2a2a)"
            : "linear-gradient(145deg, #f3f4f6, #ffffff)",
      }}
      id="faq"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 6,
            color: "text.primary",
            animation: `${fadeIn} 0.5s ease-out`,
            position: "relative",
            "&::after": {
              content: '""',
              display: "block",
              width: "80px",
              height: "4px",
              bgcolor: "#e53e3e",
              mx: "auto",
              mt: 2,
              borderRadius: "2px",
            },
          }}
        >
          ❓ Frequently Asked Questions
        </Typography>
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          {FAQ_DATA.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: 2,
                boxShadow: "none",
                border: colorMode === "dark" ? "1px solid #333" : "1px solid #e5e7eb",
                "&:before": {
                  display: "none",
                },
                animation: `${fadeIn} 0.5s ease-out`,
                animationDelay: `${index * 0.05}s`,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow:
                    colorMode === "dark"
                      ? "0 4px 12px rgba(229, 62, 62, 0.15)"
                      : "0 4px 12px rgba(229, 62, 62, 0.1)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#e53e3e",
                      transition: "transform 0.3s ease",
                    }}
                  />
                }
                sx={{
                  bgcolor: colorMode === "dark" ? "background.paper" : "#ffffff",
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: colorMode === "dark" ? "#2a2a2a" : "#f9fafb",
                  },
                  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                    transform: "rotate(180deg)",
                  },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    "&::before": {
                      content: '"Q."',
                      color: "#e53e3e",
                      fontWeight: 700,
                      fontSize: "0.9em",
                    },
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: colorMode === "dark" ? "background.paper" : "#ffffff",
                  borderTop: colorMode === "dark" ? "1px solid #333" : "1px solid #e5e7eb",
                  borderRadius: "0 0 8px 8px",
                  animation: `${pulse} 0.5s ease-out`,
                }}
              >
                <Typography variant="body1" color="text.secondary">
                  <TextWithLinks text={item.answer} />
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
            Still have questions?
          </Typography>
          <Button
            variant="contained"
            href="mailto:admin@ghummantech.com"
            sx={{
              bgcolor: "#e53e3e",
              color: "white",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              animation: `${pulse} 2s infinite`,
              "&:hover": {
                bgcolor: "#c53030",
                transform: "scale(1.02)",
              },
            }}
          >
            Contact Support
          </Button>
        </Box>
      </Container>
    </Box>
  );
}