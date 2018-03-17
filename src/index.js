// MIT © 2018 azu
"use strict";
import { CSPReportPlugin } from "./CSPReportPlugin"
import { providePlugin } from "./ga/provide";

providePlugin("csp-report", CSPReportPlugin);
