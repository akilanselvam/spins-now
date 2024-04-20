problemsRouter.route("/postAllOneProblems").get(problemController.postAllOneProblems);

const lightweightProblems = [
  {
    title: "Optimize Message Header Size",
    description:
      "Discuss strategies to reduce the size of message headers in the communication protocol to conserve bandwidth and improve efficiency.",
    category: "Protocol Optimization",
    urgency: "high",
    impactPotential: "medium",
    status: "pending",
    submittedBy: "662209e3f560c30994d2bc50", // Randomly selected from the createdBy IDs
    communityId: "66220f6e4ba9e96600b12977" // Community ID for Lightweight
  },
  {
    title: "Implement Data Compression Techniques",
    description:
      "Explore methods for implementing data compression techniques in the communication protocol to minimize data transmission overhead and improve performance.",
    category: "Data Compression",
    urgency: "medium",
    impactPotential: "high",
    status: "pending",
    submittedBy: "66220a17f560c30994d2bc56", // Randomly selected from the createdBy IDs
    communityId: "66220f6e4ba9e96600b12977" // Community ID for Lightweight
  },
  {
    title: "Research on Lightweight Encryption Algorithms",
    description:
      "Conduct research on lightweight encryption algorithms suitable for resource-constrained IoT devices to ensure data security without compromising performance.",
    category: "Encryption Algorithms",
    urgency: "medium",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209e3f560c30994d2bc50", // Randomly selected from the createdBy IDs
    communityId: "66220f6e4ba9e96600b12977" // Community ID for Lightweight
  }
];

const encryptionProblems = [
  {
    title: "Integration of AES Encryption",
    description:
      "Discuss the integration of Advanced Encryption Standard (AES) encryption algorithm in the communication protocol to ensure secure data transmission.",
    category: "Encryption Integration",
    urgency: "high",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209e3f560c30994d2bc50", // Randomly selected from the createdBy IDs
    communityId: "66220fcc4ba9e96600b12979" // Community ID for Encryption
  },
  {
    title: "Key Management Strategies",
    description:
      "Explore key management strategies for securely managing encryption keys in the IoT device network to prevent unauthorized access.",
    category: "Key Management",
    urgency: "medium",
    impactPotential: "medium",
    status: "pending",
    submittedBy: "66220a17f560c30994d2bc56", // Randomly selected from the createdBy IDs
    communityId: "66220fcc4ba9e96600b12979" // Community ID for Encryption
  },
  {
    title: "Hardware Acceleration for Encryption",
    description:
      "Discuss the implementation of hardware acceleration techniques to optimize encryption performance on resource-constrained IoT devices.",
    category: "Hardware Optimization",
    urgency: "medium",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209e3f560c30994d2bc50", // Randomly selected from the createdBy IDs
    communityId: "66220fcc4ba9e96600b12979" // Community ID for Encryption
  }
];

const authenticationProblems = [
  {
    title: "Two-Factor Authentication Implementation",
    description:
      "Discuss the implementation of two-factor authentication (2FA) mechanisms in the communication protocol to enhance IoT device security.",
    category: "Authentication Mechanisms",
    urgency: "high",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209e3f560c30994d2bc50", // Randomly selected from the createdBy IDs
    communityId: "66220ff74ba9e96600b1297b" // Community ID for Authentication
  },
  {
    title: "Biometric Authentication Research",
    description:
      "Conduct research on biometric authentication methods suitable for IoT devices to provide secure and convenient access control.",
    category: "Biometric Authentication",
    urgency: "medium",
    impactPotential: "medium",
    status: "pending",
    submittedBy: "66220a17f560c30994d2bc56", // Randomly selected from the createdBy IDs
    communityId: "66220ff74ba9e96600b1297b" // Community ID for Authentication
  },
  {
    title: "OAuth Integration for Device Authentication",
    description:
      "Explore the integration of OAuth authentication framework for secure device authentication and authorization in the IoT network.",
    category: "OAuth Integration",
    urgency: "medium",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209e3f560c30994d2bc50", // Randomly selected from the createdBy IDs
    communityId: "66220ff74ba9e96600b1297b" // Community ID for Authentication
  }
];

const uiDesignProblems = [
  {
    title: "Responsive Design for Mobile Devices",
    description:
      "Discuss strategies for designing a responsive user interface that adapts seamlessly to various screen sizes and resolutions, particularly focusing on mobile devices.",
    category: "Responsive Design",
    urgency: "high",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209d2f560c30994d2bc4e", // Randomly selected from the createdBy IDs
    communityId: "662210654ba9e96600b1297d" // Community ID for UI Design
  },
  {
    title: "Optimizing Page Load Speed",
    description:
      "Explore techniques for optimizing page load speed and performance to enhance the browsing experience and reduce bounce rates.",
    category: "Performance Optimization",
    urgency: "medium",
    impactPotential: "high",
    status: "pending",
    submittedBy: "6622098ff560c30994d2bc46", // Randomly selected from the createdBy IDs
    communityId: "662210654ba9e96600b1297d" // Community ID for UI Design
  },
  {
    title: "User Interface Accessibility",
    description:
      "Discuss strategies for designing an accessible user interface that accommodates users with disabilities and adheres to web accessibility standards.",
    category: "Accessibility",
    urgency: "medium",
    impactPotential: "medium",
    status: "pending",
    submittedBy: "662209d2f560c30994d2bc4e", // Randomly selected from the createdBy IDs
    communityId: "662210654ba9e96600b1297d" // Community ID for UI Design
  }
];

const backendProblems = [
  {
    title: "Database Schema Design",
    description:
      "Discuss best practices for designing database schemas to ensure efficient data storage, retrieval, and management for a scalable e-commerce platform backend.",
    category: "Database Design",
    urgency: "high",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209d2f560c30994d2bc4e", // Randomly selected from the createdBy IDs
    communityId: "662210a54ba9e96600b1297f" // Community ID for Backend
  },
  {
    title: "Scalability and Performance Optimization",
    description:
      "Explore strategies for optimizing backend performance and scalability to handle increasing user traffic and growing data volumes effectively.",
    category: "Scalability",
    urgency: "medium",
    impactPotential: "high",
    status: "pending",
    submittedBy: "6622098ff560c30994d2bc46", // Randomly selected from the createdBy IDs
    communityId: "662210a54ba9e96600b1297f" // Community ID for Backend
  },
  {
    title: "API Design and Documentation",
    description:
      "Discuss principles and best practices for designing and documenting RESTful APIs to ensure clarity, consistency, and ease of integration with frontend applications.",
    category: "API Design",
    urgency: "medium",
    impactPotential: "medium",
    status: "pending",
    submittedBy: "662209d2f560c30994d2bc4e", // Randomly selected from the createdBy IDs
    communityId: "662210a54ba9e96600b1297f" // Community ID for Backend
  }
];

const paymentIntegrationProblems = [
  {
    title: "Integration with Payment Gateway APIs",
    description:
      "Discuss the integration of popular payment gateway APIs such as PayPal, Stripe, and Square for secure and hassle-free transactions on the e-commerce platform.",
    category: "Payment Gateway Integration",
    urgency: "high",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209d2f560c30994d2bc4e", // Randomly selected from the createdBy IDs
    communityId: "662211474ba9e96600b12981" // Community ID for Payment Integration
  },
  {
    title: "Subscription Management System",
    description:
      "Explore the implementation of a subscription management system to handle recurring payments, subscription plans, and billing cycles for subscription-based services.",
    category: "Subscription Management",
    urgency: "medium",
    impactPotential: "high",
    status: "pending",
    submittedBy: "6622098ff560c30994d2bc46", // Randomly selected from the createdBy IDs
    communityId: "662211474ba9e96600b12981" // Community ID for Payment Integration
  },
  {
    title: "Secure Transaction Handling",
    description:
      "Discuss strategies for ensuring secure transaction handling, including data encryption, PCI compliance, and fraud detection mechanisms, to protect sensitive customer information.",
    category: "Transaction Security",
    urgency: "medium",
    impactPotential: "medium",
    status: "pending",
    submittedBy: "662209d2f560c30994d2bc4e", // Randomly selected from the createdBy IDs
    communityId: "662211474ba9e96600b12981" // Community ID for Payment Integration
  }
];

const oralHygieneEducationProblems = [
  {
    title: "Workshop Content Development",
    description:
      "Collaborate on developing engaging and informative content for interactive workshops focused on oral hygiene education, covering topics such as brushing techniques, dental care tips, and preventive measures.",
    category: "Content Development",
    urgency: "high",
    impactPotential: "high",
    status: "pending",
    submittedBy: "66220986f560c30994d2bc44", // Randomly selected from the createdBy IDs
    communityId: "662211974ba9e96600b12983" // Community ID for Oral Hygiene Education
  },
  {
    title: "Workshop Venue Coordination",
    description:
      "Coordinate with venues for hosting interactive workshops, ensuring adequate facilities and resources are available to facilitate engaging and effective educational sessions.",
    category: "Event Coordination",
    urgency: "medium",
    impactPotential: "medium",
    status: "pending",
    submittedBy: "662209b4f560c30994d2bc4a", // Randomly selected from the createdBy IDs
    communityId: "662211974ba9e96600b12983" // Community ID for Oral Hygiene Education
  },
  {
    title: "Participant Engagement Strategies",
    description:
      "Discuss strategies for maximizing participant engagement during workshops, including interactive activities, group discussions, and hands-on demonstrations to reinforce learning outcomes.",
    category: "Engagement Strategies",
    urgency: "medium",
    impactPotential: "high",
    status: "pending",
    submittedBy: "66220986f560c30994d2bc44", // Randomly selected from the createdBy IDs
    communityId: "662211974ba9e96600b12983" // Community ID for Oral Hygiene Education
  }
];

const dentalCheckupCampsProblems = [
  {
    title: "Camp Logistics Planning",
    description:
      "Plan logistics for organizing dental check-up camps in various neighborhoods, including venue selection, equipment setup, volunteer coordination, and scheduling appointments.",
    category: "Logistics Planning",
    urgency: "high",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209b4f560c30994d2bc4a", // Randomly selected from the createdBy IDs
    communityId: "662211e14ba9e96600b12985" // Community ID for Dental Check-up Camps
  },
  {
    title: "Volunteer Recruitment and Training",
    description:
      "Recruit volunteers from the dental community and coordinate training sessions to prepare them for providing basic dental care services at the check-up camps, ensuring professionalism and quality care.",
    category: "Volunteer Management",
    urgency: "medium",
    impactPotential: "high",
    status: "pending",
    submittedBy: "66220986f560c30994d2bc44", // Randomly selected from the createdBy IDs
    communityId: "662211e14ba9e96600b12985" // Community ID for Dental Check-up Camps
  },
  {
    title: "Publicity and Outreach Campaign",
    description:
      "Develop and implement a publicity and outreach campaign to raise awareness about the dental check-up camps, reaching out to target communities through various channels such as social media, local newspapers, and community posters.",
    category: "Publicity Campaign",
    urgency: "medium",
    impactPotential: "medium",
    status: "pending",
    submittedBy: "662209b4f560c30994d2bc4a", // Randomly selected from the createdBy IDs
    communityId: "662211e14ba9e96600b12985" // Community ID for Dental Check-up Camps
  }
];

const outreachCollaborationProblems = [
  {
    title: "School Collaboration Strategy",
    description:
      "Develop a strategy for collaborating with schools to integrate oral health education into the curriculum and conduct awareness sessions for students, teachers, and parents.",
    category: "School Collaboration",
    urgency: "high",
    impactPotential: "high",
    status: "pending",
    submittedBy: "66220986f560c30994d2bc44", // Randomly selected from the createdBy IDs
    communityId: "6622120d4ba9e96600b12987" // Community ID for Outreach and Collaboration
  },
  {
    title: "Community Center Partnership",
    description:
      "Establish partnerships with community centers to host oral health awareness events, workshops, and distribution of informational materials to engage with a diverse audience and maximize outreach.",
    category: "Community Partnerships",
    urgency: "medium",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209b4f560c30994d2bc4a", // Randomly selected from the createdBy IDs
    communityId: "6622120d4ba9e96600b12987" // Community ID for Outreach and Collaboration
  },
  {
    title: "Local Organization Engagement",
    description:
      "Engage with local organizations such as NGOs, healthcare providers, and community groups to collaborate on promoting oral health awareness and organizing community events.",
    category: "Organization Engagement",
    urgency: "medium",
    impactPotential: "medium",
    status: "pending",
    submittedBy: "66220986f560c30994d2bc44", // Randomly selected from the createdBy IDs
    communityId: "6622120d4ba9e96600b12987" // Community ID for Outreach and Collaboration
  }
];

const designArchitectureProblems = [
  {
    title: "Structural Design Planning",
    description:
      "Collaborate on planning the structural design of the community center, focusing on structural stability, load-bearing capacity, and seismic resistance to ensure safety and durability.",
    category: "Structural Design",
    urgency: "high",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209f4f560c30994d2bc52", // Randomly selected from the createdBy IDs
    communityId: "6622124e4ba9e96600b12989" // Community ID for Design and Architecture
  },
  {
    title: "Aesthetic Considerations",
    description:
      "Discuss and contribute ideas for enhancing the aesthetic appeal of the community center through architectural features, landscaping, and facade design, creating a visually pleasing environment for the community.",
    category: "Aesthetic Design",
    urgency: "medium",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209a6f560c30994d2bc48", // Randomly selected from the createdBy IDs
    communityId: "6622124e4ba9e96600b12989" // Community ID for Design and Architecture
  },
  {
    title: "Accessibility and Inclusivity",
    description:
      "Address accessibility and inclusivity concerns by designing the community center to accommodate individuals with disabilities, ensuring barrier-free access, and providing facilities that cater to diverse needs.",
    category: "Accessibility Design",
    urgency: "medium",
    impactPotential: "medium",
    status: "pending",
    submittedBy: "662209f4f560c30994d2bc52", // Randomly selected from the createdBy IDs
    communityId: "6622124e4ba9e96600b12989" // Community ID for Design and Architecture
  }
];

const sustainabilityEnvironmentProblems = [
  {
    title: "Green Building Materials Research",
    description:
      "Research and evaluate green building materials that promote sustainability and reduce environmental impact, considering factors such as resource efficiency, recyclability, and embodied carbon footprint.",
    category: "Material Research",
    urgency: "high",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209a6f560c30994d2bc48", // Randomly selected from the createdBy IDs
    communityId: "662212794ba9e96600b1298b" // Community ID for Sustainability and Environment
  },
  {
    title: "Energy Efficiency Strategies",
    description:
      "Explore energy-efficient design strategies and technologies to minimize energy consumption and enhance energy performance of the community center, contributing to long-term sustainability and cost savings.",
    category: "Energy Efficiency",
    urgency: "medium",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209f4f560c30994d2bc52", // Randomly selected from the createdBy IDs
    communityId: "662212794ba9e96600b1298b" // Community ID for Sustainability and Environment
  },
  {
    title: "Waste Management Plan",
    description:
      "Develop a comprehensive waste management plan for the construction phase of the community center, focusing on waste reduction, recycling, and proper disposal practices to minimize environmental impact.",
    category: "Waste Management",
    urgency: "medium",
    impactPotential: "medium",
    status: "pending",
    submittedBy: "662209a6f560c30994d2bc48", // Randomly selected from the createdBy IDs
    communityId: "662212794ba9e96600b1298b" // Community ID for Sustainability and Environment
  }
];

const communityEngagementProblems = [
  {
    title: "Stakeholder Consultation Meetings",
    description:
      "Organize stakeholder consultation meetings with residents, community leaders, and authorities to gather input, address concerns, and ensure community involvement in the decision-making process for the community center project.",
    category: "Stakeholder Consultation",
    urgency: "high",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209f4f560c30994d2bc52", // Randomly selected from the createdBy IDs
    communityId: "662212bd4ba9e96600b1298d" // Community ID for Community Engagement
  },
  {
    title: "Community Feedback Mechanism",
    description:
      "Establish a feedback mechanism to solicit input and feedback from the local community throughout the construction phase, ensuring transparency, accountability, and responsiveness to community needs and preferences.",
    category: "Feedback Mechanism",
    urgency: "medium",
    impactPotential: "high",
    status: "pending",
    submittedBy: "662209a6f560c30994d2bc48", // Randomly selected from the createdBy IDs
    communityId: "662212bd4ba9e96600b1298d" // Community ID for Community Engagement
  },
  {
    title: "Public Awareness Campaign",
    description:
      "Launch a public awareness campaign to inform and engage the broader community about the community center project, its benefits, and opportunities for involvement, fostering a sense of ownership and pride among residents.",
    category: "Awareness Campaign",
    urgency: "medium",
    impactPotential: "medium",
    status: "pending",
    submittedBy: "662209f4f560c30994d2bc52", // Randomly selected from the createdBy IDs
    communityId: "662212bd4ba9e96600b1298d" // Community ID for Community Engagement
  }
];

exports.postAllOneProblems = async (req, res) => {
  try {
    let createdProblems = [];

    // Function to create problems from an array of problem data
    const createProblems = async problemsData => {
      for (const problemData of problemsData) {
        const newProblem = await Problem.create(problemData);
        createdProblems.push(newProblem);
      }
    };

    await createProblems(lightweightProblems);
    await createProblems(encryptionProblems);
    await createProblems(authenticationProblems);
    await createProblems(uiDesignProblems);
    await createProblems(backendProblems);
    await createProblems(paymentIntegrationProblems);
    await createProblems(oralHygieneEducationProblems);
    await createProblems(dentalCheckupCampsProblems);
    await createProblems(outreachCollaborationProblems);
    await createProblems(designArchitectureProblems);
    await createProblems(sustainabilityEnvironmentProblems);

    // Respond with the created problems
    res.status(201).json({
      status: "success",
      data: {
        problems: createdProblems
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};
