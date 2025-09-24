import 'zone.js/dist/zone-testing';
import { TestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

declare const require: any;

// Initialize the Angular testing environment with module and platform
TestBed.initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting()
);

// Find all the tests
const context = require.context('./', true, /\.spec\.ts$/);

// Load the modules
context.keys().map(context);
