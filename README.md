ReliOps AI — Predictive Maintenance & MLOps Reliability Engine
ReliOps AI is an independent research prototype demonstrating how synthetic industrial telemetry can be transformed into explainable anomaly warnings, equipment-health insights, and maintenance recommendations.
Live demo: https://reliops-ai.charanvaranasi44.workers.dev
Features
Reliability Engine
- Synthetic fleet containing a pump, motor, bearing, and fan
- Health, anomaly, status, and trend indicators
- Healthy, Warning, and Critical operating states
- Interactive asset selection
- Synthetic vibration, temperature, RPM, load, and pressure signals
- Deterministic anomaly-detection logic
- Synthetic warning horizons
- Explainable early warnings with contribution scores
- Vibration deviation, temperature trend, load correlation, and historical-pattern analysis
- Degradation timeline from normal operation to potential failure
- Recommended maintenance actions
MLOps Control Center
- Synthetic model registry
- Anomaly Detector, Health Scorer, RUL Predictor, and Fault Classifier
- Development, Validation, Shadow, and Production stages
- Visual model-delivery lifecycle
- Precision, recall, false-alarm rate, and inference-latency monitoring
- Data-drift and model-drift indicators
- Simulated distribution-shift event
- Interactive candidate, validation, promotion, and rollback actions
- Predictive-maintenance architecture overview
Technology
- React
- TypeScript
- Vinext/Vite
- Cloudflare Workers
- Wrangler
- Responsive CSS
- Lucide icons
Prototype Scope
This project intentionally uses:
- Synthetic industrial data
- Browser-based deterministic calculations
- Simulated model-management actions
- No backend or database
- No authentication
- No external APIs
- No real sensors or ML training
- No cloud infrastructure beyond static application hosting
