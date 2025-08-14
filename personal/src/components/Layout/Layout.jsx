import React, { useState } from "react";
import { Collapse } from "antd";
import './Layout.scss';

export const MainLayout = () => {

  const generateLabel = (position, company, timespan) => (
    <div className="header">
      <h4>{position}</h4>
      <h5>{company}</h5>
      <p>{timespan}</p>
    </div>
  );

  const items = [
    {
      key: "1",
      label: generateLabel("Full-Stack Software Engineer", "CarOffer (CarGurus)", "June 2021 - Present"),
      children: (
        <>
        <p>Environment: Javascript, SQL, ReactJS, NextJS, .NET, Azure Service Bus, DynamoDB, SEQ, redis</p>
          <ul className="responsibility-listing">
            <li>
              <b>Spearheaded multiple initiatives</b> within the digital wholesale
              marketplace, leading the development and enhancement of user
              interfaces and backend systems for both new and existing web
              reports.
            </li>
            <li>
              <b>Developed and maintained RESTful Web APIs</b>, ensuring seamless
              interaction between front-end applications and back-end services.
              Proficient in meeting with business partners to design, build, and
              deploy services communicating B2B data via REST{" "}
            </li>
            API.
            <li>
              <b>Collaborate cross-functionally</b> with engineering teams to design
              and implement innovative features, driving the evolution of
              <i>CarOffer's</i> online automotive transaction platform.
            </li>
            <li>
              Utilized <b>C# and .NET framework</b> to build scalable,
              high-performance backend systems, ensuring robust and efficient
              code for enterprise-level applications.
            </li>
            <li>
              Worked extensively with <b>JavaScript, HTML, CSS, Angular1, and
              ReactJS</b> to build intuitive and responsive web interfaces,
              improving user experience across <i>CarOffer&apos;s</i> suite of digital
              tools.
            </li>
            <li>
              <b>Debugged complex issues</b> using Visual Studio IDE, significantly
              reducing the time required for troubleshooting and improving
              system reliability.
            </li>
            <li>
              <b>Utilized SQL and T-SQL</b> for querying databases, ensuring efficient
              data management and integration with backend systems.
            </li>
            <li>
              Contributed to a <b>SaaS-based web application with over 30,000
              dealerships</b> utilizing the platform, ensuring smooth and secure
              digital transactions in the automotive industry.
            </li>
            <li>
              Thrived in a <b>trust-driven, autonomous culture</b>, taking ownership of
              projects and delivering high-impact results with minimal
              supervision.
            </li>
          </ul>
        </>
      ),
    },
    {
      key: "2",
      label: generateLabel(
        "Senior Front-End Engineer",
        "PrimeLending (ApplyNow Team)",
        "June 2020 - June 2021"
      ),
      children: (
        <ul className="responsibility-listing">
          <li>
            <b>Led a small development team</b> in successfully migrating legacy
            software from AngularJS to ReactJS, improving performance,
            maintainability, and scalability of the application.
          </li>
          <li>
            <b>Mentored junior developers</b> in ReactJS and JavaScript best practices,
            ensuring adherence to coding standards, design patterns, and
            industry best practices.
          </li>
          <li>
            Collaborated with stakeholders to <b>gather requirements</b> and translate
            them into actionable user stories and technical specifications,
            ensuring alignment with business goals.
          </li>
          <li>
            <b>Facilitated scrum sprint planning</b> using Azure Boards, managing
            backlog items, prioritizing tasks, and ensuring smooth sprint
            execution within a fast-paced agile environment.
          </li>
          <li>
            <b>Developed reusable components</b> and state management solutions using
            React and Redux, enhancing application consistency and reducing
            redundant code.
          </li>
          <li>
            <b>Worked with SQL databases</b> to handle and optimize data queries,
            ensuring efficient data retrieval and management for dynamic web
            applications.
          </li>
          <li>
            Integrated <b>RESTful APIs</b> and third-party services, ensuring seamless
            communication between the front-end and back-end.
          </li>
          <li>
            <b>Refactored existing codebase</b> to adhere to modern React practices,
            including the use of hooks, functional components, and
            component-driven architecture.
          </li>
          <li>
            <b>Optimized application performance</b> by implementing lazy loading, code
            splitting, and other best practices, reducing load times and
            improving overall user experience.
          </li>
          <li>
            Collaborated with UX/UI designers to ensure <b>design consistency</b> and
            delivered intuitive user interfaces with a focus on accessibility
            and usability.
          </li>
        </ul>
      ),
    },
    {
      key: "3",
      label: generateLabel(
        "Software Developer",
        "Pearl Techology Holdings",
        "August 2016 - June 2020"
      ),
      children: (
        <ul className="responsibility-listing">
          <li>
            <b>Developed user-friendly web interfaces</b> using ReactJS and JavaScript,
            ensuring a seamless experience for automotive dealers interacting
            with lead generation tools and insights.
          </li>
          <li>
            <b>Created and maintained RESTful APIs</b> to facilitate the smooth
            exchange of data between the front-end application, Experian's data
            services, and back-end systems.
          </li>
          <li>
            <b>Collaborated with data engineers</b> to integrate Experian&apos;s data
            solutions, ensuring accurate, real-time processing of automotive
            leads and aligning features with business needs.
          </li>
          <li>
            Designed and implemented <b>state-of-the-art features</b> that leveraged
            data-driven insights to optimize lead scoring, targeting, and
            campaign performance for automotive dealers.
          </li>
          <li>
            <b>Utilized SQL</b> to design and optimize complex queries, ensuring fast
            and efficient retrieval of lead data from databases to support
            real-time processing and reporting.
          </li>
          <li>
            Worked closely with cross-functional teams to <b>gather business
            requirements</b> and translate them into actionable technical
            specifications, ensuring alignment with the company&apos;s goals.
          </li>
          <li>
            <b>Optimized lead processing workflows</b>, leveraging technologies like
            ReactJS, Node.js, and SQL to enhance the system's efficiency and
            reduce latency in lead generation processes.
          </li>
          <li>
            <b>Contributed to the overall architecture</b> of the platform by
            advocating for best practices in code structure, data security, and
            scalable design to accommodate future growth.
          </li>
          <li>
            <b>Trained and mentored</b> junior developers in best practices for
            JavaScript, React, and API design, fostering a collaborative and
            growth-oriented environment.
          </li>
          <li>
            Ensured <b>data privacy and compliance</b> with relevant regulations in the
            management and handling of sensitive consumer data, working closely
            with legal and security teams.
          </li>
        </ul>
      ),
    },
    {
      key: "4",
      label: generateLabel("Entry-Level Software Developer", "TynetUSA", "January 2015 - August 2016"),
      children: (
        <>
        <ul className="responsibility-listing">
          <li>
            <b>Developed and maintained data entry forms</b> using ColdFusion,
            JavaScript, and jQuery to streamline the submission of confidential
            Medicare claims for home health agencies.
          </li>
          <li>
            Collaborated closely with senior developers to create <b>dynamic and
            user-friendly interfaces</b>, ensuring the accurate capture and
            processing of medical data.
          </li>
          <li>
            <b>Worked with SQL</b> to interact with relational databases, creating and
            optimizing queries to retrieve, store, and validate sensitive
            medical data efficiently and securely.
          </li>
          <li>
            Applied <b>extensive knowledge of Medicare systems and healthcare
            regulations</b> to ensure compliance with legal and privacy standards
            when handling medical claims data.
          </li>
          <li>
            Integrated <b>ColdFusion and SQL</b> to develop backend logic that supports
            data validation, submission, and retrieval processes for accurate
            claims management.
          </li>
          <li>
            Participated in the <b>development of user-friendly forms</b> to capture
            medical claim information, focusing on intuitive design to enhance
            user experience and minimize data entry mistakes.
          </li>
          <li>
            <b>Collaborated with cross-functional teams</b>, including business
            analysts and QA testers, to identify and resolve any system or data
            issues in the Medicare claims submission process.
          </li>
          <li>
            <b>Supported legacy systems</b> and assisted with troubleshooting, bug
            fixes, and performance enhancements related to the data entry forms
            and backend processes.
          </li>
          <li>
            Contributed to maintaining the <b>security and confidentiality of
            sensitive health information</b> by ensuring compliance with HIPAA
            standards and industry best practices in data encryption and storage
          </li>
        </ul>
        <p>Environment: ColdFusion, Javascript, jQuery, SQL </p>
        </>
      ),
    },
  ];
  return (
    <div
      className="container"
    >
      <h4 className="techsummaryheader">Technical Summary</h4>
      <div className="technicalsummary">
        Full Stack Software Engineer with extensive experience designing,
        developing, and maintaining web applications and backend systems in
        fast-paced, agile environments. Skilled in leading technical initiatives
        and collaborating with cross-functional teams to deliver
        high-performance solutions. Proficient in both front-end and back-end
        technologies, with a focus on ReactJS, C#, .NET, and SQL, as well as API
        design and optimization. Strong understanding of cloud-based SaaS
        platforms, data processing, and integrations with third-party services.
        Proven ability to mentor and lead junior developers, adhering to best
        practices and modern software development techniques.
      </div>
      <h4 className="techsummaryheader">Experience</h4>
      <Collapse items={items} className="collapsecontainer"></Collapse>
    </div>
  );
};
