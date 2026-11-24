/*======================================================================
  FRACTURE FTC TEAM #37687 — Centralized Content
  ======================================================================
  Edit team information here. Changes apply across the whole site.
  Places where real team data is missing are clearly marked as
  placeholders and should be filled in before publishing.
======================================================================*/

window.FRACTURE_CONTENT = {

  // ------------------------------------------------------------------
  // Identity (site-wide branding)
  // ------------------------------------------------------------------
  identity: {
    teamName: "FRACTURE",
    teamNumber: "37687",
    program: "FIRST Tech Challenge",
    location: "Round Rock, Texas",
    season: "2026-2027",
    tagline: "Student-led robotics team",
    logo: "assets/icons/fracture-logo.png",
    logoFallback: "assets/icons/fracture-logo.jpg",
    contactEmail: "fracture37687@example.com", // TODO: replace with real team email
    socials: {
      instagram: null, // TODO: add Instagram URL
      youtube: null,   // TODO: add YouTube URL
      github: null     // TODO: add GitHub URL
    }
  },

  // ------------------------------------------------------------------
  // Homepage content
  // ------------------------------------------------------------------
  home: {
    hero: {
      kicker: "FTC TEAM 37687  /  ROUND ROCK, TEXAS  /  SEASON 2026-27",
      title: "FRACTURE",
      number: "37687",
      description: "Fracture is a student-led FIRST Tech Challenge robotics team based in Round Rock, Texas. We design, build, program, and compete with robots.",
      primaryButton: { label: "MEET THE TEAM", href: "about.html" },
      secondaryButton: { label: "THE BUILD", href: "robot.html" },
      stats: [
        { label: "PROGRAM", value: "FTC" },
        { label: "ROSTER", value: "05" },
        { label: "BASE", value: "ROUND ROCK, TX" },
        { label: "STATUS", value: "DESIGN PHASE" }
      ]
    },
    intro: {
      heading: "Who we are",
      body: "Fracture is a high-school FTC team run by students. Each season we design a robot from the ground up, write the code that drives it, and compete in qualification tournaments and championships. Our work covers mechanical design, electrical wiring, software development, outreach, and documentation.",
      image: "assets/images/team/workshop-collab.jpg",
      imageAlt: "Team collaborating in the workshop",
      imagePosition: "right"
    },
    previewSections: [
      {
        id: "robot-preview",
        heading: "Our robot",
        body: "This season's robot is in the design and prototyping phase. See the mechanical layout, subsystems, and technical approach on the build page.",
        image: "assets/images/robot/hero-chassis.jpg",
        imageAlt: "Robot chassis reference",
        button: { label: "VIEW THE BUILD", href: "robot.html" },
        imagePosition: "left"
      },
      {
        id: "outreach-preview",
        heading: "Outreach",
        body: "We share what we build with our community. From STEM demonstrations to school visits, outreach is how we put FTC and robotics in front of more students.",
        image: "assets/images/outreach/stem-demo.jpg",
        imageAlt: "STEM demonstration event",
        button: { label: "SEE OUTREACH", href: "outreach.html" },
        imagePosition: "right"
      },
      {
        id: "achievements-preview",
        heading: "Achievements",
        body: "Awards and recognitions the team has earned are listed on the achievements page. New results are added here as they are verified.",
        button: { label: "VIEW AWARDS", href: "achievements.html" },
        imagePosition: "none"
      }
    ],
    cta: {
      heading: "Get in touch",
      body: "Interested in sponsoring, mentoring, or joining the team? Contact us through the channels on the contact page.",
      button: { label: "CONTACT US", href: "contact.html" }
    }
  },

  // ------------------------------------------------------------------
  // About Us page
  // ------------------------------------------------------------------
  about: {
    intro: {
      heading: "About Fracture",
      body: "Fracture is a student-led FIRST Tech Challenge team based in Round Rock, Texas, competing as team 37687. Each season we design, fabricate, program, and operate a robot to meet the FTC game challenge. The team is built around mechanical engineering, software development, electrical systems, and outreach work."
    },
    approach: {
      heading: "How we build",
      items: [
        {
          title: "Design",
          body: "We start each season by analyzing the game rules, brainstorming mechanisms, and creating CAD models before any parts are cut."
        },
        {
          title: "Fabricate",
          body: "Parts are machined, assembled, and iterated in the workshop. We test mechanisms early and revise based on what we learn."
        },
        {
          title: "Program",
          body: "Autonomous and driver-control code is written, tested on the field, and refined through competition and practice."
        },
        {
          title: "Document",
          body: "Engineering notebooks, CAD files, and code are maintained throughout the season so the team can build on its work year over year."
        }
      ]
    },
    teamwork: {
      heading: "Teamwork",
      body: "Fracture runs as a team. Members share responsibility for design, fabrication, programming, outreach, and competition operations. Collaboration and clear communication are part of every build session."
    },
    goals: {
      heading: "Goals",
      body: "We compete in FTC qualification tournaments each season, aim to advance through the tournament structure, and use each event to improve the robot and the team. Along the way, we promote STEM and robotics in our school and community."
    },
    members: [
      { name: "To be announced", initials: "TBA", number: "01", role: "To be announced", focus: "Member biography to be added", photo: null },
      { name: "To be announced", initials: "TBA", number: "02", role: "To be announced", focus: "Member biography to be added", photo: null },
      { name: "To be announced", initials: "TBA", number: "03", role: "To be announced", focus: "Member biography to be added", photo: null },
      { name: "To be announced", initials: "TBA", number: "04", role: "To be announced", focus: "Member biography to be added", photo: null },
      { name: "To be announced", initials: "TBA", number: "05", role: "To be announced", focus: "Member biography to be added", photo: null }
    ],
    activities: {
      heading: "Engineering & programming",
      items: [
        { title: "Mechanical design", body: "CAD modeling, mechanism design, and physical fabrication of robot assemblies." },
        { title: "Software", body: "Autonomous routines, driver controls, sensor integration, and telemetry." },
        { title: "Electrical", body: "Wiring, power distribution, and hardware interfaces." },
        { title: "Outreach", body: "STEM demonstrations, school visits, and community engagement." }
      ]
    }
  },

  // ------------------------------------------------------------------
  // Robot page
  // ------------------------------------------------------------------
  robot: {
    intro: {
      heading: "Our robot",
      body: "Fracture's robot is designed and built by the team each FTC season. It combines mechanical subsystems, electrical wiring, and software to complete the game challenge. The current season's robot is in the design and prototyping phase."
    },
    gallery: [
      { src: "assets/images/robot/hero-chassis.jpg", alt: "Robot chassis", caption: "Chassis" },
      { src: "assets/images/robot/cad-assembly.jpg", alt: "CAD assembly", caption: "CAD model" }
    ],
    subsystems: [
      {
        title: "Drivetrain",
        body: "The base platform that moves the robot around the field. Design details and specifications to be added.",
        status: "Design phase",
        statusType: "pending"
      },
      {
        title: "Manipulator",
        body: "The mechanism used to interact with game elements. Design details and specifications to be added.",
        status: "Design phase",
        statusType: "pending"
      },
      {
        title: "Control system",
        body: "The electronics and code that operate the robot. Design details and specifications to be added.",
        status: "Design phase",
        statusType: "pending"
      }
    ],
    process: {
      heading: "Design process",
      steps: [
        { title: "Game analysis", body: "Review the season challenge and identify required robot capabilities." },
        { title: "Concept design", body: "Sketch and model mechanism concepts in CAD." },
        { title: "Prototyping", body: "Build and test physical prototypes of key mechanisms." },
        { title: "Iteration", body: "Refine designs based on test results and rebuild as needed." },
        { title: "Assembly", body: "Integrate subsystems into the full robot and wire the electronics." },
        { title: "Programming", body: "Write autonomous and driver-control code and tune it on the field." }
      ]
    },
    specifications: {
      heading: "Specifications",
      items: [
        { label: "Program", value: "FIRST Tech Challenge", type: "text" },
        { label: "Team number", value: "37687", type: "text" },
        { label: "Season", value: "2026-2027", type: "text" },
        { label: "Robot status", value: "Design phase", type: "badge-pending" },
        { label: "Weight", value: "To be measured", type: "placeholder" },
        { label: "Dimensions", value: "To be measured", type: "placeholder" },
        { label: "Drive type", value: "To be determined", type: "placeholder" },
        { label: "Controller", value: "To be announced", type: "placeholder" }
      ]
    }
  },

  // ------------------------------------------------------------------
  // Outreach page
  // ------------------------------------------------------------------
  outreach: {
    intro: {
      heading: "Outreach",
      body: "Outreach is how Fracture shares robotics with our community. We run STEM demonstrations, visit schools, and promote FIRST Tech Challenge to students who might not otherwise encounter it. Events and details are added here as they take place."
    },
    categories: [
      {
        title: "Robotics demonstrations",
        body: "Show the team's robot to students and community members, explain how it works, and let attendees see it in action.",
        status: "Pending upcoming events"
      },
      {
        title: "STEM education",
        body: "Introduce students to engineering, programming, and robotics through hands-on activities and discussions.",
        status: "Pending upcoming events"
      },
      {
        title: "Community events",
        body: "Represent the team at local events and connect with other students, mentors, and supporters.",
        status: "Pending upcoming events"
      },
      {
        title: "School engagement",
        body: "Work with our school and neighboring schools to grow interest in robotics and FTC.",
        status: "Pending upcoming events"
      },
      {
        title: "FTC promotion",
        body: "Explain the FIRST Tech Challenge program and how students can join or start a team.",
        status: "Pending upcoming events"
      },
      {
        title: "Recruitment",
        body: "Welcome new members to the team and help them get involved in design, fabrication, programming, and outreach.",
        status: "Pending upcoming events"
      }
    ],
    events: [] // TODO: add verified outreach events here
  },

  // ------------------------------------------------------------------
  // Achievements page
  // ------------------------------------------------------------------
  achievements: {
    heading: "Achievements",
    intro: "Awards and recognitions earned by Fracture. New results are added here as they are verified. This page lists awards only — no match statistics or performance analytics.",
    awards: [] // TODO: add verified awards here
  },

  // ------------------------------------------------------------------
  // Contact page
  // ------------------------------------------------------------------
  contact: {
    heading: "Contact us",
    intro: "Reach Fracture through the channels below. We welcome questions from students, mentors, sponsors, and anyone interested in the team.",
    channels: [
      {
        title: "Email",
        value: "fracture37687@example.com", // TODO: replace with real email
        type: "email",
        icon: "E"
      },
      {
        title: "Team number",
        value: "FTC 37687",
        type: "text",
        icon: "#"
      },
      {
        title: "Location",
        value: "Round Rock, Texas",
        type: "text",
        icon: "P"
      },
      {
        title: "Program",
        value: "FIRST Tech Challenge",
        type: "text",
        icon: "F"
      }
    ],
    socials: [
      { label: "Instagram", url: null, icon: "I" }, // TODO: add URL
      { label: "YouTube", url: null, icon: "Y" },  // TODO: add URL
      { label: "GitHub", url: null, icon: "G" }    // TODO: add URL
    ],
    note: "This page displays contact information only. It does not include a message form."
  }
};
