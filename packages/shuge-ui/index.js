import components from './src/components/index';

export * from './src/components/index';

export default {
  install: app => components.forEach(c => app.use(c)),
};