import { ReportHandler } from 'web-vitals';
import * as webVitals from 'web-vitals';
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        webVitals.getCLS(onPerfEntry);
        webVitals.getFID(onPerfEntry);
        webVitals.getFCP(onPerfEntry);
        webVitals.getLCP(onPerfEntry);
        webVitals.getTTFB(onPerfEntry);
    }
};

export default reportWebVitals;
