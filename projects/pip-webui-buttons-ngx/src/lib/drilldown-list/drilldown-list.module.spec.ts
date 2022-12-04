import { PipDrilldownListModule } from './drilldown-list.module';

describe('PipDrilldownListModule', () => {
  let drilldownListModule: PipDrilldownListModule;

  beforeEach(() => {
    drilldownListModule = new PipDrilldownListModule();
  });

  it('should create an instance', () => {
    expect(drilldownListModule).toBeTruthy();
  });
});
