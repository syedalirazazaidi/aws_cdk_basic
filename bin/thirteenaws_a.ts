#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { thirteenAwsAStack } from "../lib/13aws_a-stack";

const app = new cdk.App();
new thirteenAwsAStack(app, "thirteenAwsAStack", {});
