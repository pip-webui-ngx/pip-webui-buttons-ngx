import { PipFabSpeedDialModule } from './fab-speed-dial.module';

describe('PipFabSpeedDialModule', () => {
  let fabSpeedDialModule: PipFabSpeedDialModule;

  beforeEach(() => {
    fabSpeedDialModule = new PipFabSpeedDialModule();
  });

  it('should create an instance', () => {
    expect(fabSpeedDialModule).toBeTruthy();
  });
});
