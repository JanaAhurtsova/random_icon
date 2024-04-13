export {};
import '@fortawesome/fontawesome-svg-core';

declare module '@fortawesome/fontawesome-svg-core' {
  interface Library {
    definitions: Record<string, any>;
  }
}