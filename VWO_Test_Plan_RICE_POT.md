# VWO Digital Experience Optimization Platform — Master Test Plan

**Document ID:** `TP-VWO-DXO-2026-V1.0`  
**Application URL:** [https://app.vwo.com/#/login](https://app.vwo.com/#/login)  
**Business Domain:** Enterprise Digital Platform / Conversion Rate Optimization (CRO) & DXO  
**Author:** Senior QA Engineer (Strategy & Enterprise Platforms, 15+ Yrs Experience)  
**Target Specification:** Product Requirements Document (PRD) — VWO (Prepared by Pramod Dutta, Jan 7, 2026)  
**Compliance Standard:** IEEE 829 / ISO/IEC/IEEE 29119 Software Testing Standard  
**Document Status:** Approved Master Plan  

---

## Table of Contents
1. [Test Plan ID and Title](#1-test-plan-id-and-title)
2. [Objective and References](#2-objective-and-references)
3. [In Scope and Out of Scope](#3-in-scope-and-out-of-scope)
4. [Requirements and Planned Coverage](#4-requirements-and-planned-coverage)
5. [Test Approach, Levels, and Types](#5-test-approach-levels-and-types)
6. [Environment, Tools, Access, and Test Data](#6-environment-tools-access-and-test-data)
7. [Entry and Exit Criteria](#7-entry-and-exit-criteria)
8. [Roles, Responsibilities, Estimates, and Schedule](#8-roles-responsibilities-estimates-and-schedule)
9. [Defect Management and Reporting](#9-defect-management-and-reporting)
10. [Risks, Dependencies, Assumptions, and Open Questions](#10-risks-dependencies-assumptions-and-open-questions)
11. [Suspension and Resumption Criteria](#11-suspension-and-resumption-criteria)
12. [Test Deliverables and Approval](#12-test-deliverables-and-approval)

---

## 1. Test Plan ID and Title

- **Test Plan ID:** `TP-VWO-DXO-2026-V1.0`
- **Test Plan Title:** Master Test Plan for VWO Digital Experience Optimization (DXO) & Conversion Rate Optimization (CRO) Platform
- **System Under Test (SUT):** VWO Web Application Suite (`https://app.vwo.com/` and `https://app.vwo.com/#/login`), Visual/Code Editor Extensions, SmartStats Bayesian Engine, and Client-Side Asynchronous Tracking Code.
- **Domain:** Enterprise Digital Platform / SaaS CRO & Experimentation.

---

## 2. Objective and References

### 2.1 Objectives
1. **Ensure Business Goal Alignment:** Validate that VWO empowers product, marketing, UX, and CRO teams to safely formulate hypotheses, deploy A/B/MVT variations without code regressions, and make data-driven decisions.
2. **Comprehensive Coverage:** Deliver 100% requirements coverage across Functional Requirements (FR-1 through FR-9), end-to-end user journeys (User Flows 5.1 & 5.2), and critical security/privacy Non-Functional Requirements.
3. **Statistical & Behavioral Integrity:** Guarantee the mathematical integrity of the Bayesian-powered SmartStats engine and high fidelity of behavioral tools (Heatmaps, Session Recordings, Funnels).
4. **Enforce Quality Governance:** Establish measurable, quantitative Entry and Exit criteria across all test phases (Smoke, Functional, Integration, Regression, and UAT).
5. **Regulatory Compliance:** Verify strict adherence to GDPR and CCPA privacy standards, specifically verifying automated PII masking on recorded sessions and element tracking.

### 2.2 References
- **PRD:** Product Requirements Document (PRD) — *VWO – Digital Experience Optimization Platform*, Author: Pramod Dutta, Date: January 7, 2026.
- **Application Endpoint:** [https://app.vwo.com/#/login](https://app.vwo.com/#/login)
- **Quality Standard:** IEEE 829 Standard for Software Test Documentation / ISO/IEC/IEEE 29119.
- **Regulatory Guidelines:** General Data Protection Regulation (GDPR - EU 2016/679) & California Consumer Privacy Act (CCPA).

---

## 3. In Scope and Out of Scope

### 3.1 In Scope
Testing activities encompass all functional modules, integrations, and compliance mechanisms detailed in the PRD:
1. **Authentication & Identity Management:** Positive/negative authentication at `https://app.vwo.com/#/login`, Two-Factor Authentication (2FA), Role-Based Access Control (RBAC), and session timeout behavior.
2. **FR-1: Experimentation & Testing:** A/B Testing, Split URL Testing, Multivariate Testing (MVT), traffic allocation controls, multi-variation creation, custom KPI/goal tracking, and test lifecycle states (Draft, Staging/QA Preview, Active, Paused, Concluded).
3. **FR-2: SmartStats Engine:** Bayesian analysis calculations, probability to beat control, credible intervals, sample size attainment tracking, and automated winner declaration logic.
4. **FR-3: Visual & Code Editor:** WYSIWYG element editing, DOM element modification, developer code editor (custom CSS/JS injection), live preview mode, and cross-browser QA preview modes.
5. **FR-4: Behavioral Insights:** Click heatmaps, scroll heatmaps, focus heatmaps, session recording captures, on-page user feedback/surveys, and multi-step funnel drop-off analytics.
6. **FR-5: Audience Targeting:** Audience segmentation engine supporting behavioral triggers, geolocation, demographic rules, custom visitor attributes, and device/browser environment filtering.
7. **FR-6: Real-time Reporting & Dashboards:** Real-time data pipeline, conversion rate delta calculation, date range filtering, goal segmentation, and CSV/PDF export.
8. **FR-7: Personalization Engine:** Real-time personalized experience delivery based on audience segments, dynamic content swaps, and priority handling for overlapping campaigns.
9. **FR-8: Integration Connectors:** Bi-directional data synchronization with e-commerce, CRM, and analytics platforms: Shopify, Salesforce, Segment, Snowflake, WordPress, Drupal, and CDP webhooks.
10. **FR-9: Collaboration & Workflow Management:** VWO Plan workspace, Kanban-style experiment backlog boards, multi-user task assignment, comments, and role-based experiment lifecycle progression.
11. **Security & Data Privacy (NFRs):** Audit trail logs for enterprise actions, RBAC enforcement across 5 primary user personas, cookie consent compliance, and automated PII masking on input fields in recordings and heatmaps.
12. **Cross-Browser & Responsive Compatibility:** Verification on modern evergreen browsers (Chrome, Firefox, Safari, Edge) across Desktop, Tablet, and Mobile viewports.

### 3.2 Out of Scope
In strict adherence to project parameters and constraints:
1. **Performance, Stress, & Load Testing:** Dedicated high-concurrency load testing, extreme visitor volume spike simulation, and infrastructure throughput benchmarking (handled by dedicated DevOps/SRE teams).
2. **Penetration & Dynamic Security Testing (DAST):** Dedicated network penetration testing, ethical hacking attacks, binary fuzzing, and DDoS vulnerability assessment (conducted by third-party InfoSec auditors).
3. **Low-Level Native Mobile SDK Compilation:** Kernel-level profiling and mobile binary compilation of future native iOS/Android SDKs (testing is scoped to web and mobile web responsive properties per current PRD).
4. **Third-Party Internal Uptime/Infrastructure:** Hardware SLA and internal server uptime of external vendor systems (e.g., Salesforce, Snowflake internal cluster availability).

---

## 4. Requirements and Planned Coverage

The following Requirements Traceability Matrix (RTM) maps each requirement to dedicated test scenarios, test types, expected outcomes, and necessary test data.

| Requirement ID | Scenario / Test Condition | Test Type | Expected Result | Test Data / Precondition |
| :--- | :--- | :--- | :--- | :--- |
| **REQ-AUTH-01** | Valid user credentials entry at `https://app.vwo.com/#/login` | Positive Functional Testing | User is successfully authenticated, JWT/session token issued, and user redirected to primary dashboard | Valid registered enterprise user credentials |
| **REQ-AUTH-02** | Incorrect password entry during login | Negative Functional Testing | User remains unauthenticated; inline error *"Invalid email or password"* displayed; account locked after 5 failed attempts | Approved synthetic account; incorrect password string |
| **REQ-AUTH-03** | 2FA verification flow with valid and invalid TOTP codes | Functional / Security Testing | Valid 6-digit TOTP grants dashboard access; expired or incorrect code rejects login with descriptive error | 2FA-enabled user account; synced Authenticator app |
| **REQ-AUTH-04** | Role-Based Access Control (RBAC) permission enforcement | Security / Authorization Testing | Users access only authorized modules (e.g., Analyst: Read-only reports; UX Designer: Editor only; Admin: Full billing & user access) | Persona test accounts: CRO Specialist, PM, Designer, Marketer, Analyst |
| **REQ-FR1-01** | Create an A/B test with 1 Control and 2 Variations with equal traffic split (33.3% each) | Functional Testing | Campaign persists configuration; traffic distribution allocates evenly across Control and Variations | Target landing page URL; 3 distinct variation payloads |
| **REQ-FR1-02** | Configure Split URL test directing traffic between two disparate URLs | Functional Testing | Visitor request cleanly redirects to variant URL based on split ratio without URL flickering or infinite redirect loops | URL A (Control) and URL B (Variant) on staging web server |
| **REQ-FR1-03** | Setup Multivariate Testing (MVT) with 2 sections (Headline x CTA button) | Functional Testing | Platform generates full factorial combination matrix (2x2 = 4 combinations) and tracks impressions independently | Webpage with identified DOM selectors `#headline` and `#cta-btn` |
| **REQ-FR1-04** | Define custom conversion goals (Click on element, Page visit, Custom JS event) | Functional Testing | System registers goal triggers accurately upon visitor action; deduplicates repeat clicks within same session if configured | Configured target goals: button click, `/thank-you` URL, custom event `vwo_lead` |
| **REQ-FR1-05** | Schedule campaign activation and automated conclusion date/time | Functional Testing | Campaign status automatically transitions from Scheduled to Running at start timestamp and concludes at end timestamp | Campaign schedule parameters (UTC timestamps) |
| **REQ-FR2-01** | SmartStats Bayesian computation of conversion rates and improvement (%) | Mathematical / Verification Testing | Engine accurately computes posterior distribution, conversion rate uplift (%), and credible intervals matching statistical baseline | Synthetic conversion data feed (Control: 100/1000, Variant: 140/1000) |
| **REQ-FR2-02** | SmartStats statistical confidence threshold and winner declaration | Functional / Logic Testing | When probability to beat control exceeds 95% threshold and minimum sample size is met, campaign flags variation as "Statistically Significant Winner" | Simulated traffic payload reaching required power & sample size |
| **REQ-FR2-03** | SmartStats handling of inconclusive tests (low sample size / negligible delta) | Negative / Logic Testing | Campaign continues running; displays status "Collecting Data / Inconclusive"; warns user against premature decision-making | Simulated low-traffic dataset (sample size < minimum threshold) |
| **REQ-FR3-01** | Visual WYSIWYG Editor DOM element modification (Text, image, styling, hide/reorder) | Functional UI Testing | Selected DOM element updates dynamically in editor; changes render identically across saved variation without breaking page layout | Test web page containing diverse HTML5 tags, CSS grid, and flex containers |
| **REQ-FR3-02** | Code Editor custom JavaScript & CSS injection and syntax validation | Functional / Boundary Testing | Custom JS/CSS executes safely in sandboxed variation; syntax errors trigger linter warnings before save | Code snippets: valid CSS rules, valid JS event listener, malformed JS syntax |
| **REQ-FR3-03** | Version preview and cross-browser QA mode before campaign launch | Compatibility / Functional Testing | Generates secure preview links; enables QA engineer to force-render specific variations on mobile/desktop browsers via URL query param | Preview token; Chrome, Firefox, Safari, Edge browsers |
| **REQ-FR4-01** | Heatmap generation across Click, Scroll (fold line), and Focus interactions | Functional / UI Testing | Accurately aggregates clicks on element coordinates; visualizes scroll depth percentages (25%, 50%, 75%, 100%); displays focus heatmaps | Test page with 500+ simulated synthetic visitor interactions |
| **REQ-FR4-02** | Session recording capture and playback fidelity | Functional Testing | Records DOM mutations, mouse movements, clicks, and page scrolls; replays session accurately in player with timeline scrubbing | Recorded test session containing mouse trajectories and click events |
| **REQ-FR4-03** | On-page surveys and customer feedback widget triggering | Functional Testing | Feedback modal triggers conditionally based on defined behavior (e.g., exit intent, 50% scroll, 10s delay); captures user input | Survey configuration targeting Desktop visitors with exit-intent trigger |
| **REQ-FR4-04** | Funnel analytics drop-off visualization across multi-step conversion flow | Functional Testing | Funnel reports step-by-step visitor progression, drop-off percentages, and overall conversion rate across defined sequential URLs | 4-step e-commerce checkout funnel (`/cart` -> `/shipping` -> `/payment` -> `/success`) |
| **REQ-FR5-01** | Audience segmentation by Geographic and Demographic attributes | Functional / Integration Testing | Campaign triggers exclusively for visitors matching specified IP location (e.g., Country = US) and language preferences | Simulated HTTP headers: `X-Forwarded-For` with US/EU IPs; `Accept-Language` |
| **REQ-FR5-02** | Behavioral targeting (Returning visitors, exit-intent, specific URL referral) | Functional Testing | Variation executes only when visitor matches behavioral rule (e.g., Visit Count > 1, Referrer = `google.com`) | Browser session cookies simulating 1st-time vs. returning visitor state |
| **REQ-FR5-03** | Custom visitor attribute and query parameter targeting | Functional Testing | Campaign activates when URL contains specific query string (e.g., `?utm_campaign=summer_sale`) or JS variable matches condition | Synthetic URLs with varied query parameters and window-level JS data layer |
| **REQ-FR6-01** | Real-time experiment analytics reporting and dashboard refresh | Functional / Latency Testing | Dashboard updates metrics (visitors, conversions, conversion rate) within defined SLA (< 2 seconds refresh) upon receiving event beacons | Active running campaign receiving live webhook/beacon pings |
| **REQ-FR6-02** | Dashboard data filtering by date range, device type, and visitor segments | Functional / Data Testing | Metric cards, charts, and tables dynamically re-aggregate data matching applied filters without data corruption | Historical dataset spanning 30 days across Desktop, Mobile, and Tablet |
| **REQ-FR6-03** | Export experiment reporting data to CSV and executive PDF summary | Functional Testing | Exported CSV contains complete raw tabular event data; PDF report contains summary graphs, sample sizes, and SmartStats conclusions | Concluded experiment report with statistical winner |
| **REQ-FR7-01** | Real-time personalized experience delivery based on audience segments | Functional Testing | Returning VIP customer segment receives customized promo banner; standard visitor receives default banner in real time (< 50ms) | Segment criteria: `User_Type = VIP`; test web store page |
| **REQ-FR7-02** | Conflict resolution and priority rules for overlapping personalization campaigns | Boundary / Functional Testing | When a visitor qualifies for multiple active personalization campaigns, system delivers highest-priority campaign based on configured priority order | Visitor matching Criteria A and Criteria B; Campaign A (Priority 1), Campaign B (Priority 2) |
| **REQ-FR8-01** | Third-party analytics data sync (Google Analytics 4 & Mixpanel) | Integration Testing | VWO experiment ID and variation name successfully pass as custom dimensions to GA4/Mixpanel upon variation impression | Active GA4 measurement ID and Mixpanel token in staging |
| **REQ-FR8-02** | E-Commerce and CRM integration connectors (Shopify & Salesforce) | Integration Testing | E-commerce purchase events, order values, and customer attributes sync bi-directionally between VWO and Shopify/Salesforce sandbox | Shopify Sandbox store; Salesforce Developer Org with VWO connector app |
| **REQ-FR8-03** | Cloud Data Warehouse and CDP data export (Snowflake & Segment) | Integration Testing | Event logs (impressions, clicks, conversions) stream accurately into Segment webhook and Snowflake raw event tables without data loss | Segment test source write key; Snowflake staging database schema |
| **REQ-FR9-01** | VWO Plan experiment backlog creation and Kanban board workflow | Functional Testing | Experiment cards can be created, prioritized, assigned to owners, and transitioned across columns (Idea -> Backlog -> In QA -> Live -> Completed) | VWO Plan workspace; 5 backlog cards with diverse metadata |
| **REQ-FR9-02** | Distributed team collaboration, comments, and file attachments | Functional Testing | Team members can mention colleagues (`@username`), attach mockups/hypotheses docs, and receive in-app notifications | Multi-tenant team account with 3 active user profiles |
| **REQ-SEC-01** | Activity audit logging for critical administrative and campaign actions | Security / Audit Testing | Platform logs every campaign creation, variation change, campaign launch/pause, user invitation, and deletion with timestamp and actor ID | Admin and CRO user accounts performing campaign modifications |
| **REQ-PRIV-01** | Automated PII masking in session recordings and heatmaps (GDPR/CCPA) | Data Privacy & Compliance | Password fields, credit card inputs, emails, phone numbers, and designated `.vwo-mask` elements are rendered as asterisks/blurred in recordings | HTML form containing PII fields (Name, Email, Credit Card, SSN) |
| **REQ-PRIV-02** | Cookie consent and Do Not Track (DNT) compliance | Compliance Testing | When user rejects tracking consent or browser sends `DNT: 1`, VWO tracking script suppresses cookie storage and telemetry collection | Web browser with DNT enabled; Cookiebot/OneTrust consent banner |
| **REQ-E2E-01** | End-to-End A/B Test Lifecycle (PRD User Flow 5.1) | End-to-End Workflow Testing | Complete workflow: 1. Define hypothesis & target metrics -> 2. Select audience -> 3. Configure variations in editor -> 4. Launch & monitor -> 5. Review SmartStats & conclude winner | Staging environment with active test page, synthetic traffic generator, and CRO Specialist user |
| **REQ-E2E-02** | End-to-End Behavioral Data to Optimization Idea (PRD User Flow 5.2) | End-to-End Workflow Testing | Complete workflow: 1. Access Insights dashboard -> 2. Generate heatmaps/recordings/funnels -> 3. Correlate insights with drop-offs -> 4. Push prioritized idea directly into VWO Plan backlog | Insights dashboard with populated visitor interaction dataset |

---

## 5. Test Approach, Levels, and Types

### 5.1 Test Strategy & Approach
The testing strategy employs a risk-based, layered Quality Engineering approach structured across the software development lifecycle:
- **Shift-Left Quality:** Static analysis, contract validation on integration APIs, and early exploratory testing on Visual/Code editor components.
- **Data-Driven Validation:** Rigorous verification of Bayesian statistical formulas against verified statistical models (R/Python benchmarks) to ensure SmartStats accuracy.
- **Asynchronous Telemetry & Client-Side Verification:** Verifying that the VWO tracking snippet loads asynchronously without introducing UI blocking, layout shifts (CLS), or perceptible page lag.
- **Cross-Layer Traceability:** Every test case maps directly to a requirement ID, test type, and observable expected outcome.

```
       +---------------------------------------------+
       |             User Acceptance Testing (UAT)   |
       |  (CRO Specialists, Marketers, Product Owners)|
       +---------------------------------------------+
       |             End-to-End (E2E) Workflows      |
       |  (Full A/B Lifecycle & Behavioral Insights)  |
       +---------------------------------------------+
       |          System & Integration Testing       |
       |  (Connectors, SmartStats Engine, Analytics)  |
       +---------------------------------------------+
       |         Functional & UI Component Testing   |
       |     (Visual Editor, Login/RBAC, Heatmaps)   |
       +---------------------------------------------+
```

### 5.2 Test Levels
1. **Component / Subsystem Testing:** Validation of isolated components (e.g., WYSIWYG editor palette, code editor syntax highlighter, survey modal builder).
2. **Integration Testing:** Verification of data exchange between the VWO web application, client-side tracking snippet, SmartStats calculation service, and external connectors (Salesforce, Shopify, GA4, Snowflake).
3. **System Testing:** Complete end-to-end verification of the integrated platform across all functional, security, and compatibility requirements.
4. **User Acceptance Testing (UAT):** Validation of real-world workflows by designated business personas (CRO Specialists, Digital Marketers, Product Managers) against business objectives.

### 5.3 Test Types
- **Positive Functional Testing:** Verifying standard operational workflows produce documented success states.
- **Negative & Boundary Functional Testing:** Validating error handling, invalid inputs, edge-case traffic splits (0%, 100%, 99.9%), malformed scripts in code editor, and invalid TOTP/login credentials.
- **UI & Cross-Browser Compatibility Testing:** Ensuring layout integrity, visual editor drag-and-drop fidelity, and tracking execution across:
  - *Desktop Browsers:* Google Chrome (v120+), Mozilla Firefox (v120+), Apple Safari (v17+), Microsoft Edge (v120+).
  - *Responsive Viewports:* Mobile (375x667, 390x844, 412x915), Tablet (768x1024, 820x1180), Desktop (1366x768, 1920x1080, 2560x1440).
- **Security & Authorization Testing:** Verification of 2FA authentication gates, RBAC role boundaries, session invalidation on logout/timeout, and audit log capture.
- **Data Privacy & Compliance Testing:** Verifying that PII data is masked in transit and at rest in heatmaps and session recordings in compliance with GDPR and CCPA.
- **Regression Testing:** Automated regression suite execution on staging builds to ensure zero regressions in existing campaign evaluation and tracking engines.

---

## 6. Environment, Tools, Access, and Test Data

### 6.1 Test Environments

| Environment | Purpose | URL / Host | Configuration |
| :--- | :--- | :--- | :--- |
| **QA / Staging** | Core functional testing, integration testing, editor validation, and test automation execution | `https://qa-app.vwo.com` / Staging Cluster | Isolated database, mock third-party endpoints, debug logging enabled |
| **Pre-Production (UAT)** | User acceptance testing, cross-browser validation, final release sign-off | `https://preprod-app.vwo.com` | Production-mirror infrastructure, sanitized production-like data, live sandbox connectors |
| **Target Sandbox Web Properties** | E-commerce and lead-gen test sites hosting the VWO JavaScript tracking snippet | `https://test-store.vwo-qa.com` | Instrumented with VWO SmartCode (Asynchronous snippet), diverse HTML5 DOM structures |

### 6.2 Tools Matrix

| Category | Tool / Framework | Purpose |
| :--- | :--- | :--- |
| **Test Management** | Jira / Xray / Zephyr Enterprise | Test case authoring, RTM maintenance, execution logging, and cycle tracking |
| **Defect Tracking** | Jira Software | Bug tracking, triage workflows, resolution lifecycle management |
| **UI Test Automation** | Playwright / Selenium WebDriver (Java 17 / TypeScript) | Automated cross-browser functional flows and regression suites |
| **API & Integration Testing** | Postman / REST Assured | RESTful API validation for SmartStats, campaign lifecycle APIs, and webhooks |
| **Cross-Browser Infrastructure** | BrowserStack / Sauce Labs | Cloud-based matrix execution across real devices, OS, and browser versions |
| **Traffic Simulation** | Custom Node.js / Python Telemetry Harness | Generation of synthetic visitor beacons, click events, and conversion transactions |
| **Data Verification** | Python (SciPy / NumPy) & SQL | Independent statistical validation of Bayesian formulas against SmartStats outputs |

### 6.3 User Personas & Access Roles

| Persona / Role | VWO System Role | Permissions & Scope |
| :--- | :--- | :--- |
| **Administrator** | Super Admin / Account Owner | Full administrative privileges: billing, user management, 2FA enforcement, integrations setup, and audit logs |
| **CRO Specialist** | Experimentation Manager | Create, edit, preview, launch, pause, and conclude A/B/MVT/Personalization campaigns; full reporting access |
| **UX / UI Designer** | Visual / Creative Editor | Access to Visual Editor, variation previews, heatmaps, and session recordings; read-only access to campaign launch |
| **Product Manager** | Program & Insights Lead | VWO Plan Kanban board management, backlog prioritization, funnel analytics, and executive dashboard reporting |
| **Data Analyst** | Analytics & Reporting Specialist | Read-only access to campaign reports, data export (CSV/PDF), custom goal tracking, and connector data syncs |
| **Restricted Viewer** | Read-Only Stakeholder | Read-only viewing permissions on dashboards and reports; cannot modify or launch tests |

### 6.4 Test Data Management
- **Synthetic User Accounts:** Pre-provisioned user credentials representing each of the 6 roles above with MFA/2FA seed secrets.
- **Simulated Visitor Traffic:** Synthetic IP address pools (US, UK, Germany, India, Australia) for geographic targeting tests; user-agent strings representing Desktop, Mobile, and Tablet devices.
- **PII Form Data:** Standard dummy PII test datasets (e.g., `test_user_01@example.com`, credit card test numbers `4111...`) for verifying automated privacy masking.
- **Third-Party Sandboxes:** Shopify Partner Developer store, Salesforce Developer Sandbox, Segment Test Source workspace, and Snowflake staging database schema.

---

## 7. Entry and Exit Criteria

To ensure rigorous quality governance, transitions between testing phases are governed by objective, measurable criteria.

```
       +--------------------------------------------------------+
       |                  ENTRY CRITERIA MET                   |
       |  Code deployed, Smoke suite passed, Test data ready    |
       +---------------------------+----------------------------+
                                   |
                                   v
       +--------------------------------------------------------+
       |               TEST EXECUTION & VALIDATION              |
       |    Functional, Integration, Security, Cross-Browser    |
       +---------------------------+----------------------------+
                                   |
                                   v
       +--------------------------------------------------------+
       |                  EXIT CRITERIA MET                     |
       |  100% execution, 0 Sev1/Sev2 bugs, 95%+ pass rate      |
       +--------------------------------------------------------+
```

### 7.1 Measurable Entry Criteria

| Phase | Measurable Entry Criteria | Verification Method |
| :--- | :--- | :--- |
| **Functional & Component Testing** | 1. Target build successfully deployed to QA/Staging environment with green CI/CD build status.<br>2. Smoke Test Suite executed with **100% pass rate** (15/15 critical path checks passing).<br>3. Test environment database seeded with required user personas and synthetic accounts.<br>4. PRD and requirements traceability matrix baselined and approved. | CI Pipeline status report; Automated smoke test run report; QA Lead sign-off |
| **Integration & Connector Testing** | 1. Core functional test execution achieves **≥ 85% pass rate**.<br>2. All third-party test sandboxes (Shopify, Salesforce, Segment, Snowflake) active with authenticated API tokens.<br>3. Webhook listener endpoints configured and operational. | API connectivity ping logs; Staging integration dashboard |
| **System & Cross-Browser Testing** | 1. All functional requirements (FR-1 through FR-9) covered in execution.<br>2. Zero unresolved Severity 1 (Blocker) defects.<br>3. Cloud cross-browser grid (BrowserStack) tunnels active and responsive. | Jira defect burn-down chart; BrowserStack connection check |
| **User Acceptance Testing (UAT)** | 1. System test execution achieves **≥ 95% pass rate**.<br>2. **0 open Severity 1 (Blocker)** and **0 open Severity 2 (Critical)** defects.<br>3. UAT test scenarios and test accounts distributed to stakeholder team (PM, CRO, UX). | Defect triage sign-off; UAT kickoff readiness review |

### 7.2 Measurable Exit Criteria

| Phase / Release Gate | Measurable Exit Criteria | Verification Method |
| :--- | :--- | :--- |
| **Test Execution Completion** | **100% of planned test cases** in the approved test suite executed. | Jira / Xray Test Execution Metrics |
| **Defect Tolerance Thresholds** | - **Severity 1 (Blocker): 0 open defects** (100% resolved and verified closed).<br>- **Severity 2 (Critical): 0 open defects** (100% resolved and verified closed).<br>- **Severity 3 (Major): ≤ 3 open defects**, all with approved workarounds documented and signed off by Product Manager.<br>- **Severity 4 (Minor / Trivial): ≤ 10 open defects**, scheduled for subsequent sprint. | Production Readiness Defect Triage Audit |
| **Test Case Pass Rate** | Overall test suite **pass rate ≥ 95%** across all executed test cases. | Automated Test Execution Dashboard |
| **Requirements Traceability** | **100% test coverage** for all Functional Requirements (FR-1 to FR-9) and User Flows (5.1 & 5.2) demonstrated in RTM. | Traceability Matrix Audit Report |
| **Security & Privacy Gate** | Zero security vulnerabilities; 100% verification of automated PII masking on recorded inputs; 2FA and RBAC verified across all personas. | Security & Compliance Sign-Off Audit |
| **Cross-Browser Verification** | Visual Editor, preview mode, and tracking script verified with zero display/tracking failures on all Tier 1 browsers (Chrome, Firefox, Safari, Edge). | Cross-browser compatibility execution matrix |

---

## 8. Roles, Responsibilities, Estimates, and Schedule

### 8.1 Roles and Responsibilities (RACI Matrix)
- **R** = Responsible for execution | **A** = Accountable / Approver | **C** = Consulted | **I** = Informed

| Role / Stakeholder | Test Planning | Test Case Design | Test Execution | Defect Triage | UAT Sign-off | Release Decision |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Senior QA Engineer (Lead)** | **A / R** | **A / R** | **A / R** | **A / R** | **C** | **C** |
| **SDET / Automation Engineer** | **C** | **R** | **R** | **R** | **I** | **I** |
| **Product Manager (Pramod Dutta)** | **A** | **C** | **I** | **A** | **A** | **A** |
| **Lead Developer / Engineering** | **C** | **I** | **C** | **R** | **I** | **A** |
| **CRO Specialist / Business User** | **C** | **C** | **I** | **I** | **R** | **C** |
| **DevOps / Environment Engineer** | **C** | **I** | **I** | **C** | **I** | **I** |

### 8.2 Work Effort Estimates

| Testing Activity | Estimated Person-Days | Primary Deliverables |
| :--- | :---: | :--- |
| **Test Plan Authoring & Strategy Alignment** | 3 Days | Approved Master Test Plan, Environment Spec |
| **Test Scenario & Test Case Authoring (RTM)** | 6 Days | Detailed test cases in Jira/Xray mapped to FR-1 to FR-9 |
| **Test Data & Synthetic Traffic Generator Setup** | 3 Days | Synthetic user accounts, IP pools, tracking test beds |
| **Cycle 1: Functional & Component Testing** | 8 Days | Execution logs, initial defect reports |
| **Cycle 2: Integration & Connector Testing** | 5 Days | Salesforce, Shopify, GA4, Snowflake validation logs |
| **Cycle 3: SmartStats Engine & Mathematical QA** | 4 Days | Bayesian calculation verification reports |
| **Cycle 4: Cross-Browser, Responsive & Privacy QA**| 4 Days | Cross-browser matrix, GDPR/CCPA PII masking audit |
| **Cycle 5: Full Regression & Defect Verification** | 5 Days | Automated regression runs, bug retests |
| **User Acceptance Testing (UAT) Support** | 4 Days | UAT defect triage, stakeholder sign-off |
| **Total Estimated QA Effort** | **42 Person-Days** | Final Test Summary Report & Release Recommendation |

### 8.3 Execution Schedule & Milestones

```
+----------------------------------------------------------------------------------------------------+
| Milestone 1: Test Plan & Architecture Baselined                          | Day 3                   |
| Milestone 2: Test Cases Written & Test Data Seeded                       | Day 9                   |
| Milestone 3: Functional & Component Testing Completed                    | Day 17                  |
| Milestone 4: Integrations & SmartStats Engine Validated                  | Day 26                  |
| Milestone 5: Cross-Browser, Privacy & Regression Completed               | Day 35                  |
| Milestone 6: UAT Execution & Final Sign-off                              | Day 39                  |
| Milestone 7: Final Test Summary Report Delivered                         | Day 42                  |
+----------------------------------------------------------------------------------------------------+
```

---

## 9. Defect Management and Reporting

### 9.1 Defect Severity & Priority Classification

| Severity Level | Definition | Impact on VWO Platform | Target Resolution SLA |
| :--- | :--- | :--- | :--- |
| **Severity 1 (Blocker)** | Critical system crash, total loss of service, security breach, data corruption, or inability to log in / launch experiments. | System unusable; login at `https://app.vwo.com/#/login` fails; tracking script breaks client website; SmartStats engine fails. | Fix within **4 Hours** |
| **Severity 2 (Critical)** | Major functional failure with no viable workaround; high business impact. | A/B variation fails to render; visual editor crashes on save; session recordings not captured; integration connector fails data transfer. | Fix within **24 Hours** |
| **Severity 3 (Major)** | Functional defect with an identified, documented workaround; moderate business impact. | Date filter error on dashboard (workaround: refresh); survey modal timing delay off by 2 seconds; Kanban card drag glitch. | Fix within **3 Business Days** |
| **Severity 4 (Minor)** | Minor UI discrepancy, cosmetic flaw, typo, or non-blocking enhancement request. | Misaligned icon, minor tooltip text typo, button hover animation stutter. | Fix scheduled in next sprint |

### 9.2 Defect Lifecycle Workflow
1. **New:** Logged by QA Engineer with reproduction steps, expected vs. actual results, environment, network logs, and screenshots/video.
2. **Triaged:** Daily 15-minute triage between QA Lead, Product Manager, and Dev Lead to validate severity and assign ownership.
3. **In Development:** Assigned developer investigating root cause and implementing code fix.
4. **Resolved:** Fix deployed to QA environment with release notes and PR reference.
5. **Retest & Verified:** QA executes original test case plus adjacent regression checks.
6. **Closed:** Defect confirmed fixed; issue closed in Jira.
7. **Reopened:** If verification fails, issue returned to developer with failure logs.

### 9.3 Test Reporting Cadence
- **Daily Execution Status Report:** Distributed via email/Slack at 17:30 daily:
  - Tests Executed / Passed / Failed / Blocked.
  - New bugs logged / Resolved / Open by severity.
  - Blockers and environment impediments.
- **Milestone Summary Report:** Published at the conclusion of each testing cycle.
- **Final Test Summary Report:** Comprehensive release audit document detailing overall test metrics, residual risks, RTM coverage, and formal QA recommendation for production release.

---

## 10. Risks, Dependencies, Assumptions, and Open Questions

### 10.1 Risks and Mitigations (Grounded in PRD Section 10)

| Risk Category | Identified Risk | Impact | Planned Mitigation Strategy |
| :--- | :--- | :---: | :--- |
| **Technical Complexity** | Visual and Code Editor script injection may cause conflicts with host website JavaScript or CSS frameworks. | **High** | Implement rigorous sandboxing for injected variation code; test across diverse host DOM frameworks (React, Angular, Vue, static HTML5); provide pre-built templates and fallback error catchers. |
| **Data Accuracy Challenges** | Mathematical discrepancy between VWO SmartStats Bayesian calculations and third-party analytics (e.g., Google Analytics 4, Mixpanel). | **High** | Execute automated cross-tool telemetry comparison tests; calibrate event firing order; publish clear statistical documentation explaining Bayesian probability vs. frequentist GA4 models. |
| **User Adoption & Usability** | Steep learning curve for complex multivariate testing (MVT) and audience segmentation among non-technical marketers. | **Medium** | Conduct end-to-end usability and workflow testing on guided onboarding tours, contextual tooltips, and pre-built audience templates. |
| **Data Privacy Violations** | Unmasked PII (passwords, credit cards, emails) inadvertently captured in Session Recordings or Heatmaps, violating GDPR/CCPA. | **Critical** | Implement mandatory automated regex-based DOM masking for all input/form fields by default; execute dedicated privacy audit verifying zero unmasked PII in recording playback. |
| **Client Site Latency** | Synchronous or delayed loading of VWO tracking code causing page flickering (FOOC) or slow page loads on client properties. | **High** | Validate asynchronous snippet delivery; verify anti-flicker timeout mechanisms (default < 2000ms threshold); verify zero UI blocking. |

### 10.2 Dependencies
1. **Stable QA/Staging Environment:** Availability of a high-fidelity staging environment with mock visitor traffic generation services.
2. **Third-Party Developer Sandboxes:** Active, unthrottled API access credentials for Salesforce, Shopify Partner, Segment, and Snowflake test instances.
3. **SmartStats Calculation Service:** Accessible microservice endpoint for Bayesian statistical computations with deterministic seed options for testing.
4. **Target Website Instrumentation:** Staging websites instrumented with the VWO SmartCode library for end-to-end variation testing.

### 10.3 Assumptions
1. Development builds provided to QA have undergone automated unit testing with ≥ 80% code coverage.
2. All user stories and PRD acceptance criteria remain frozen during active test execution cycles.
3. Dedicated test environments mirror production architecture in terms of database schemas and API configurations.
4. Penetration testing and infrastructure load testing are handled by specialized external/DevOps teams and will not block functional sign-off.

### 10.4 Open Questions & Information Gaps

| Item # | Open Question / PRD Gap | Stakeholder | Impact on Testing |
| :---: | :--- | :--- | :--- |
| **OQ-01** | What is the exact fallback behavior if a third-party connector (e.g., Segment webhook) times out or returns HTTP 500? Does VWO retry with exponential backoff? | Lead Backend Architect | Required to design retry, dead-letter queue, and failure handling test cases. |
| **OQ-02** | In the Visual Editor, what is the maximum permissible file size for uploaded image assets replacing existing DOM elements? | Product Manager | Necessary to define boundary test limits for image asset uploads in WYSIWYG editor. |
| **OQ-03** | Are custom Bayesian priors configurable per enterprise account in SmartStats, or is the prior distribution strictly uninformative/uniform? | Lead Data Scientist / CRO Specialist | Determines whether test cases must cover custom prior parameter configuration. |

---

## 11. Suspension and Resumption Criteria

### 11.1 Suspension Criteria
Testing execution for a specific module or the entire platform will be formally suspended if any of the following blocking conditions arise:
1. **Authentication Outage:** Authentication service failure at `https://app.vwo.com/#/login` preventing test team access for > 2 hours.
2. **Critical Infrastructure Failure:** QA/Staging environment database corruption, deployment failure, or persistent 5xx HTTP server errors.
3. **Editor Blocker:** Visual or Code Editor crashes upon opening, preventing variation creation across all test cases.
4. **Tracking Pipeline Failure:** Client tracking snippet fails to record impressions or generate beacons, completely blocking SmartStats, Heatmaps, and Recording testing.
5. **Defect Density Threshold Exceeded:** Discovery of more than **3 concurrent Severity 1 (Blocker)** defects halting more than 40% of planned test execution.

### 11.2 Resumption Criteria
Testing will resume only after the following conditions are formally satisfied:
1. **Root Cause Rectified:** Defect fix or environment restoration deployed and confirmed by DevOps/Development.
2. **Deployment Verification:** Release notes detailing code changes and affected modules provided to QA.
3. **Sanity / Smoke Pass:** Successful execution of the automated Smoke Test Suite with **100% pass rate** in the restored environment.
4. **Data Restoration:** Test data and database integrity verified and re-seeded where necessary.

---

## 12. Test Deliverables and Approval

### 12.1 Test Deliverables

| Deliverable Phase | Artifact Document / Deliverable | Target Audience |
| :--- | :--- | :--- |
| **Pre-Execution** | Master Test Plan (`TP-VWO-DXO-2026-V1.0`) | QA, Dev, Product, DevOps |
| **Pre-Execution** | Requirements Traceability Matrix (RTM) in Jira | QA Team, Product Manager |
| **Execution** | Detailed Test Cases & Execution Logs in Jira/Xray | QA Team, Developers |
| **Execution** | Daily Execution Burn-down & Defect Reports | All Project Stakeholders |
| **Post-Execution** | Verified Defect Log with Retest Proofs | Developers, Engineering Lead |
| **Post-Execution** | Cross-Browser & Privacy Compliance Verification Audit | Compliance Officer, PM |
| **Post-Execution** | **Final Test Summary Report & Release Recommendation** | Executive Leadership, PM |

### 12.2 Plan Approval & Sign-Off Matrix

The signatures below indicate formal review and approval of this Master Test Plan. Any changes to scope, schedule, or criteria will require a formal revision and re-approval.

| Role | Name | Title | Signature / Approval Status | Date |
| :--- | :--- | :--- | :---: | :---: |
| **QA Leadership** | Senior QA Engineer | Senior QA Strategy & Lead | `APPROVED` | Oct 4, 2026 |
| **Product Management** | Pramod Dutta | Principal Product Manager, VWO | `PENDING REVIEW` | ____________ |
| **Engineering Leadership** | Lead Architect | VP of Software Engineering | `PENDING REVIEW` | ____________ |
| **Operations & DevOps** | Lead DevOps | Infrastructure & SRE Lead | `PENDING REVIEW` | ____________ |
