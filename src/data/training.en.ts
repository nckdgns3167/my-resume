import type { Training } from "./types";

export const training = {
  online: [
    {
      name: "Google AI Professional Certificate",
      institution: "Google",
      period: "2026.03",
      certificateFileName: "Google-AI-Essentials.pdf",
      link: "https://www.coursera.org/professional-certificates/google-ai",
      details: [
        "Strategic Prompt Design: Improved accuracy and consistency of role-specific responses through [detail=persona]persona configuration and prompt structuring[/detail]",
        "Workflow Automation: Streamlined repetitive planning drafts with [detail=gems]Custom Gems[/detail] and shortened technical document analysis with [detail=notebooklm]NotebookLM[/detail]",
        "Vibe Coding in Practice: Accelerated [detail=vibe]the development cycle from logic design to prototyping[/detail] through generative AI collaboration",
        "AI Reliability Verification: Applied source-based fact-checking to identify [detail=hallucination]hallucinations[/detail] and responsible AI principles adhering to security guidelines",
      ],
      detailDialogs: [
        {
          id: "persona",
          title: "Persona Configuration & Prompt Structuring",
          subtitle:
            "Key Takeaway: 'Context Design' that determines AI response quality",
          sections: [
            {
              term: "Persona",
              desc: "Assigning AI a specific expert identity such as 'Senior Frontend Architect with 10 years of experience' rather than a generic responder, to control domain depth of responses.",
            },
            {
              term: "Structuring Framework",
              desc: "Applying Google's recommended P-T-C-F (Persona, Task, Context, Format) structure.",
              subItems: [
                {
                  term: "Context",
                  desc: "Specifying constraints like 'low-spec user devices' or 'legacy code environments' rather than simple requests, to increase practical relevance.",
                },
                {
                  term: "Format",
                  desc: "Standardizing outputs into developer-ready formats such as JSON, Markdown, or library-specific code snippets.",
                },
              ],
            },
          ],
        },
        {
          id: "gems",
          title: "Custom Gems",
          subtitle:
            "Key Takeaway: Building 'Personal AI Assistants' for repetitive tasks",
          sections: [
            {
              term: "Fixed System Prompts",
              desc: "Custom chatbots with pre-saved instructions optimized for specific tasks (e.g., PR reviewer, API design assistant), eliminating the need to re-enter guidelines each time.",
            },
            {
              term: "Consistency",
              desc: "Injecting shared 'code conventions' or 'planning guidelines' into Gems, standardizing workflows so anyone produces the same quality output.",
            },
          ],
        },
        {
          id: "notebooklm",
          title: "NotebookLM",
          subtitle:
            "Key Takeaway: Ensuring data reliability through RAG (Retrieval-Augmented Generation)",
          sections: [
            {
              term: "Source-Based Analysis",
              desc: "Forcing responses to rely solely on user-uploaded internal documents such as 'project wikis', 'API specifications', and 'tech blogs', maximizing information accuracy.",
            },
            {
              term: "Context Integration",
              desc: "Understanding relationships across thousands of pages of technical documentation and dramatically reducing analysis time by connecting scattered information.",
            },
          ],
        },
        {
          id: "vibe",
          title: "Development Cycle from Logic Design to Prototyping",
          subtitle:
            "Key Takeaway: High-speed development strategy based on Vibe Coding",
          sections: [
            {
              term: "Vibe Coding",
              desc: "A high-productivity collaboration method where developers design the overall logic flow and architecture (Vibe), while AI handles specific boilerplate code and repetitive logic implementation.",
            },
            {
              term: "Cycle Reduction",
              desc: "Accelerating the speed of turning ideas into working prototypes, speeding up planning review and feedback cycles. This is a core competency in environments requiring rapid iteration.",
            },
          ],
        },
        {
          id: "hallucination",
          title: "Hallucination",
          subtitle:
            "Key Takeaway: 'Verification Automation & Responsibility' for filtering AI errors",
          sections: [
            {
              term: "Citation Verification",
              desc: "Clicking citation numbers in AI responses to cross-reference the exact source passages in original documents, performing a verification process.",
            },
            {
              term: "Security Guidelines",
              desc: "Adhering to anonymization and secure interface usage principles to prevent sensitive user data or proprietary code from being used in external model training.",
            },
            {
              term: "Critical Thinking",
              desc: "Establishing a 'Human-in-the-loop' structure where human developers retain final decision-making authority by evaluating technical feasibility and ethical bias rather than blindly trusting AI suggestions.",
            },
          ],
        },
      ],
    },
  ] satisfies Training[],
  offline: [
    {
      name: "Advanced SW Development Course (Residential AWS Training)",
      institution: "YoungWoo Digital",
      period: "2019.10 ~ 2019.10",
      posterFileName: "SW개발자 심화(후속)과정(AWS활용교육)_Cloud한잔.jpg",
      details: [
        "Studied core AWS functionality theory and hands-on practice at YoungWoo Digital headquarters in Seoul.",
        "4-day residential training at Ramada Hotel.",
        "Curriculum: Core concepts, EC2, S3, RDS, etc.",
      ],
    },
    {
      name: "Advanced SW Development Course (Residential Java Training)",
      institution: "Jeju Center for Creative Economy & Innovation · Oracle · YoungWoo Digital",
      period: "2019.07.15 ~ 2019.08.10",
      posterFileName: "SW개발자 심화과정(합숙형 Java교육)_Java한잔.jpg",
      details: [
        "One-month residential training at Ramada Hotel in Jeju, completing 4 weeks (140+ hours) of intensive Java education. (25 trainees including myself)",
        "Week 1: Java SE 8 Programming, Data Structures & Algorithms",
        "Week 2: Network Application Development, Modern OOP Trends & Framework",
        "Week 3: SQL Practice, JDBC Practice, JSP Programming",
        "Week 4: JSP & JDBC Micro Project, Web Standards, Hackathon Project & Presentation",
        "Formed teams and participated in a hackathon (built a 'Wait for You' web service for Jeju tourists)",
      ],
    },
  ] satisfies Training[],
};
