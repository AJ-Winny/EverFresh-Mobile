# EVERFRESH: IoT-Driven Adaptive Storage for Food, Seeds, and Perishables

**Project Overview**

EVERFRESH is a flexible, technologyenabled container system for intelligent stock management in homes,
institutions, and farms. The solution optimizes the preservation of seeds, yields, and perishable goods by
adapting environmental conditions to crop- and product-specific profiles using IoT sensors, AI-driven climate
control, and mobile/web interfaces.

##  Problem Statement

Rwandan households, farmer cooperatives, and institutions struggle to extend the shelf life and quality of
stored seeds, grains, and perishable goods. High post-harvest losses due to uncontrolled temperature/humidity,
insect infestations, mold/fungi, and unreliable stock management are common. Current estimates show:

- **Maize:** 13.8% loss
- **Beans:** 11.3% loss
- **Rice:** 12.4% loss
- **Irish Potatoes:** 25.2% loss
- **Cassava:** 24.8% loss
- **Tomatoes:** 33.5% loss

Less than 1% of smallholder harvests are safely stored, and perishable foods in homes/institutions deteriorate
rapidly.

##  Proposed Solution

EVERFRESH delivers an IoT-powered, solar-enabled insulated container equipped with:

- **Sensors:** temperature, humidity, oxygen, and power status
- **Actuators:** refrigeration, ventilation, and sealing mechanisms
- **AI climate control:** adaptive profiles tailored to each crop/product
- **User interfaces:** mobile app (React Native) and web dashboard (React/Node.js)
- **Notifications:** SMS/app alerts, batch-based inventory tracking

The system auto-adjusts environmental conditions, provides real-time monitoring, and supports predictive
spoilage alerts across rural, urban, and institutional settings.

##  Objectives

1. Reduce storage losses for grains, seeds, and perishables.
2. Empower users with real-time monitoring and control.
3. Extend shelf-life for consumption and planting.
4. Provide traceable stock management for cooperatives, schools, and households.
5. Enhance food security and minimize waste at all levels.

##  Key Features & Requirements

### Functional

- Real-time sensor monitoring and remote dashboards
- Automated climate control based on product profiles
- Stock management with alerts for spoilage risk
- Reports & analytics with exportable data

### Non-functional

- **Reliability:** >99% uptime; 72hour backup power
- **Security:** Data encryption; PIN/biometric access
- **Performance:** UI loads <3s; alerts within 2min
- **Scalability:** Supports 50+ containers/site, 24month data retention
- **Usability:** Multi-language support (English/Kinyarwanda)

##  Tech Stack

- **Edge:** Raspberry Pi/Arduino (Python) with DHT22, MQ135 sensors
- **Mobile/Web:** React Native, React.js, Node.js
- **Cloud:** AWS IoT Core, Lambda, PostgreSQL
- **Data/ML:** TensorFlow Lite, Pandas

##  Architecture

1. **Hardware:** Insulated container, sensors, actuators, battery.
2. **Edge:** Local controller and database.
3. **Communication:** 4G/WiFi/SMS to cloud.
4. **Cloud:** Serverless services powering apps and analytics.

##  Timeline

1. **Month1:** Hardware prototype, basic sensors/controls
2. **Month2:** Mobile/web MVP, testing, reporting
3. **Month3:** Pilot deployment and feedback
4. **Month4:** Documentation, training, showcase

##  Database Schema

- **Users:** id, name, role, contact
- **Containers:** location, type, status
- **Batches:** product/crop, entry date, expiry
- **SensorData:** timestamp, temp, humidity, oxygen
- **Alerts:** type, timestamp, status

##  Alignment

- **NST2 Targets:** Post-harvest loss <5%, 50% productivity increase
- **SDGs:** Zero Hunger (2), Responsible Consumption (12)

##  Budget Estimate

Approximately 400,000RWF covering development, infrastructure, and operations.

##  Implementation & Methodology

Agile sprints with stakeholder feedback. Team roles include architect,
embedded engineer, backend/frontend developer, and data/AI engineer.

---

*EVERFRESH guards Rwandas food, seeds, and perishables with climate-smart
technologypreserving value, reducing waste, and securing future harvests.*
