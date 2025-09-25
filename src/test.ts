import 'zone.js/dist/zone-testing';
import { TestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

// Type-safe require for tests
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};


// Initialize the Angular testing environment with module and platform
TestBed.initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting()
);

// Find all the tests
const context = require.context('./', true, /\.spec\.ts$/);

// Load the modules
context.keys().map(context);
