exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { message } = JSON.parse(event.body || "{}");
    if (!message) {
      return { statusCode: 400, body: JSON.stringify({ error: "Message is required" }) };
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: "API key not configured" }) };
    }

    const systemPrompt = `You are Sudheernaidu Doppalapudi's friendly, concise AI Career & Technical Assistant on his portfolio website.
Profile facts about Sudheernaidu Doppalapudi:
- Current Role (Jan 2024 – Present): Sr. Support Engineer — Project & Team Lead at Tech Mahindra, Hyderabad. Leads a 15-member operations team (shift rosters, leave/timesheet approvals, performance appraisals, team meetings), manages high-volume bug queues, launches client evaluation projects, maintains operational tracking sheets, client reporting, and mandatory training/certifications.
- Prior Role (Jun 2021 – Dec 2023): Senior Support Engineer at Tech Mahindra, Hyderabad (24/7 L1/L2 production support, ITIL incident/SLA management, ServiceNow, Grafana, Datadog, VMware, OpenStack, Jenkins).
- Earlier Experience: Staff Consultant at IT Convergence Hyderabad (2018–2021, Oracle DB support & ITIL), 1st Line Application Support Analyst at Accutor UK (2016–2017, BMC Remedy, IIS, SQL Server), IT Support Service Desk Analyst at Lynn Recruitment UK (2015–2016), Service Desk Data Administrator at Bharti Infotel Delhi (2005–2006).
- Education & Certs: MSc in Applied Computing (Edinburgh Napier University, UK), AWS Certified Cloud Practitioner.
- Contact: Email sudheernaidud@gmail.com | WhatsApp: https://wa.me
Rules: Keep answers short (2–4 sentences), professional, and easy to scan. If asked about Sudheer, answer using his profile facts above. If asked general IT, cloud, or technical questions outside his profile, answer helpfully as a knowledgeable IT assistant.`;

    const response = await fetch(
      `https://googleapis.com{apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `${systemPrompt}\n\nVisitor question: ${message}` }]
            }
          ]
        })
      }
    );

    const data = await response.json();
    const reply =
      data?.candidates?.?.content?.parts?.?.text ||
      "Sorry, I couldn't generate a response right now. You can reach Sudheer directly at sudheernaidud@gmail.com.";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "Temporary connection issue. Please email sudheernaidud@gmail.com." })
    };
  }
};
