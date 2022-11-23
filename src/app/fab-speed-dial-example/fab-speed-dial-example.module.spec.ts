import { FabSpeedDialExampleModule } from './fab-speed-dial-example.module';

describe('FabSpeedDialExampleModule', () => {
  let fabSpeedDialExampleModule: FabSpeedDialExampleModule;

  beforeEach(() => {
    fabSpeedDialExampleModule = new FabSpeedDialExampleModule();
  });

  it('should create an instance', () => {
    expect(fabSpeedDialExampleModule).toBeTruthy();
  });
});
