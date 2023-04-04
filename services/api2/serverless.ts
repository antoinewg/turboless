import type { AWS } from "@serverless/typescript";

import { functions } from "@functions/index";

const serverlessConfiguration: AWS = {
  service: "api2",
  frameworkVersion: "3.28.1",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    stage: "dev",
    region: "eu-central-1",
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
    deploymentMethod: 'direct'
  },
  functions,
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node18",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    "serverless-offline": {
      httpPort: 4000,
      lambdaPort: 4002,
    },
  },
};

module.exports = serverlessConfiguration;
