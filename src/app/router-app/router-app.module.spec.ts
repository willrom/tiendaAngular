import { RouterAppModule } from './router-app.module';

describe('RouterAppModule', () => {
  let routerAppModule: RouterAppModule;

  beforeEach(() => {
    routerAppModule = new RouterAppModule();
  });

  it('should create an instance', () => {
    expect(routerAppModule).toBeTruthy();
  });
});
